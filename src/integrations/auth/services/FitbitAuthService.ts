import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';
import { createBasicAuthHeader, base64Encode } from '../../../utils/base64';

export class FitbitAuthService extends BaseOAuthService {
  private static instance: FitbitAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];
  private codeVerifier?: string;

  static getInstance(): FitbitAuthService {
    if (!FitbitAuthService.instance) {
      FitbitAuthService.instance = new FitbitAuthService('fitbit');
    }
    return FitbitAuthService.instance;
  }

  private constructor(serviceName: string) {
    super(serviceName);
  }

  /**
   * Add a callback to be notified when authentication status changes
   */
  public addAuthCallback(callback: (integrationId: string, isAuthenticated: boolean) => void): void {
    this.authCallbacks.push(callback);
  }

  /**
   * Remove an authentication callback
   */
  public removeAuthCallback(callback: (integrationId: string, isAuthenticated: boolean) => void): void {
    const index = this.authCallbacks.indexOf(callback);
    if (index > -1) {
      this.authCallbacks.splice(index, 1);
    }
  }

  /**
   * Notify all callbacks of authentication status change
   */
  private async notifyAuthCallbacks(integrationId: string): Promise<void> {
    const isAuth = await this.isAuthenticated(integrationId);
    this.authCallbacks.forEach(callback => {
      try {
        callback(integrationId, isAuth);
      } catch (error) {
        console.error('Error in auth callback:', error);
      }
    });
  }

  /**
   * Generate random string for PKCE
   */
  private generateRandomString(length: number): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let text = '';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  /**
   * Simple SHA-256 hash using Web Crypto API or fallback
   */
  private async sha256(plain: string): Promise<string> {
    // For React Native, we'll use a simple hash function as fallback
    // This is not cryptographically secure but works for development
    let hash = 0;
    for (let i = 0; i < plain.length; i++) {
      const char = plain.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    // Convert to base64url-like string
    const bytes = new Uint8Array(32);
    for (let i = 0; i < 32; i++) {
      bytes[i] = (hash >> (i % 4 * 8)) & 0xFF;
    }
    
    return base64Encode(String.fromCharCode(...bytes))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }

  /**
   * Generate PKCE parameters
   */
  private async generatePKCE(): Promise<{ verifier: string; challenge: string; method: string }> {
    // Generate code verifier (43-128 characters)
    const verifier = this.generateRandomString(86);
    
    // For "plain" method, challenge equals verifier
    // This is less secure but works without proper SHA-256
    const challenge = verifier;
    const method = 'plain';
    
    console.log('🔐 PKCE generated (plain method):', {
      verifierLength: verifier.length,
      challengeLength: challenge.length,
      method: method
    });
    
    return { verifier, challenge, method };
  }

  /**
   * Build authorization URL with PKCE
   */
  protected buildAuthUrl(integrationId: string): string {
    const config = this.config;
    
    // Generate PKCE challenge (we'll store the verifier for later)
    this.generatePKCE().then(({ codeVerifier, codeChallenge }) => {
      this.codeVerifier = codeVerifier;
      
      const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        response_type: 'code',
        scope: config.scopes.join(' '),
        state: integrationId,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        ...config.additionalParameters
      });

      return `${config.authEndpoint}?${params}`;
    });

    // For now, return basic URL without PKCE for sync operation
    const params = new URLSearchParams({
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      response_type: 'code',
      scope: config.scopes.join(' '),
      state: integrationId,
      ...config.additionalParameters
    });

    return `${config.authEndpoint}?${params}`;
  }

  /**
   * Start OAuth authentication flow with PKCE using Linking API
   */
  async authenticate(integrationId: string): Promise<AuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('📈 Starting Fitbit OAuth flow with PKCE...');
      console.log('📈 Integration ID:', integrationId);

      // Generate PKCE parameters
      const { verifier, challenge, method } = await this.generatePKCE();
      
      // Store code verifier for later use in token exchange
      this.codeVerifier = verifier;

      // Build authorization URL with PKCE parameters
      const params = new URLSearchParams({
        client_id: this.config.clientId,
        redirect_uri: this.config.redirectUri,
        response_type: 'code',
        scope: this.config.scopes.join(' '),
        state: integrationId,
        code_challenge: challenge,
        code_challenge_method: method, // Using 'plain' method
        ...this.config.additionalParameters
      });

      const authUrl = `${this.config.authEndpoint}?${params}`;
      
      console.log('📈 Opening OAuth URL with PKCE...');
      console.log('🔐 Code verifier stored for token exchange');
      
      // Open the authorization URL
      const supported = await Linking.canOpenURL(authUrl);
      if (supported) {
        await Linking.openURL(authUrl);
        console.log('✅ OAuth URL opened successfully');
        
        // Return placeholder - actual token exchange happens in callback
        return {
          accessToken: 'pending',
          refreshToken: 'pending',
          expiresAt: Date.now(),
          scope: this.config.scopes.join(' ')
        };
      } else {
        throw new Error('Cannot open OAuth URL');
      }
    } catch (error) {
      console.error('❌ Error during Fitbit authentication:', error);
      throw error;
    }
  }

  /**
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string, integrationId: string): Promise<boolean> {
    try {
      console.log('📈 Handling Fitbit OAuth callback...');
      
      // Clean integration ID (remove URL fragments like #_=_)
      const cleanIntegrationId = integrationId.split('#')[0];
      console.log('📈 Integration ID (cleaned):', cleanIntegrationId);
      console.log('📈 Authorization Code:', code.substring(0, 10) + '...');
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      // Store tokens using base class method
      await this.storeTokens(tokenData, cleanIntegrationId);
      await this.saveIntegrationToSupabase(tokenData, cleanIntegrationId);
      
      // Trigger immediate health data sync after successful OAuth
      try {
        console.log('🔄 Initiating Fitbit health data backfill...');
        await this.triggerHealthDataSync(cleanIntegrationId);
        console.log('✅ Health data sync initiated successfully');
      } catch (syncError) {
        console.error('⚠️ Failed to initiate health data sync (authentication still successful):', syncError);
      }
      
      await this.completeIntegration(tokenData, cleanIntegrationId);
      
      // Set up webhook subscriptions after successful authentication
      try {
        console.log('🔗 Setting up Fitbit webhook subscriptions...');
        await this.setupWebhookSubscriptions(cleanIntegrationId);
        console.log('✅ Webhook subscriptions created successfully');
      } catch (webhookError) {
        console.error('⚠️ Failed to create webhook subscriptions (authentication still successful):', webhookError);
      }
      
      console.log('✅ Fitbit authentication successful');
      await this.notifyAuthCallbacks(cleanIntegrationId);
      return true;
    } catch (error) {
      console.error('❌ Error handling Fitbit auth callback:', error);
      return false;
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('📈 Refreshing Fitbit token...');

      const requestBody = new URLSearchParams();
      requestBody.append('grant_type', 'refresh_token');
      requestBody.append('refresh_token', refreshToken);
      
      // Fitbit requires Basic Auth for token refresh
      const tokenData = await this.makeTokenRequest(requestBody, 'token refresh', true);
      
      // Update stored tokens
      await this.storeTokens({
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token || refreshToken,
        expires_in: tokenData.expires_in,
        scope: tokenData.scope
      }, integrationId);

      await this.updateTokensInSupabase(tokenData, integrationId);
      
      console.log('✅ Access token refreshed successfully');

      return {
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token || refreshToken,
        expiresAt: Date.now() + (tokenData.expires_in * 1000),
        scope: tokenData.scope
      };
    } catch (error) {
      console.error('❌ Token refresh failed:', error);
      throw new Error(`Failed to refresh authentication. Please try signing in again.`);
    }
  }

  /**
   * Exchange authorization code for tokens with PKCE
   */
  private async exchangeCodeForToken(code: string): Promise<any> {
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', this.config.clientId);
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('redirect_uri', this.getRedirectUri());
    
    // Add PKCE code verifier if available
    if (this.codeVerifier) {
      requestBody.append('code_verifier', this.codeVerifier);
    }
    
    // Fitbit supports both Basic Auth and client secret in body
    // Using Basic Auth as recommended
    return this.makeTokenRequest(requestBody, 'token exchange', true);
  }

  /**
   * Save integration to Supabase
   */
  private async saveIntegrationToSupabase(tokenData: any, integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      const { error } = await supabase
        .from('integrations')
        .update({
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: expiresAt.toISOString(),
          scope: tokenData.scope || this.config.scopes.join(' '),
          is_active: true,
          configuration: {
            scopes: this.config.scopes,
            user_id: tokenData.user_id
          },
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Fitbit integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving Fitbit integration to Supabase:', error);
    }
  }

  /**
   * Update tokens in Supabase
   */
  private async updateTokensInSupabase(tokenData: any, integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during token refresh');
        return;
      }

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      const updateData: any = {
        access_token: tokenData.access_token,
        expires_at: expiresAt.toISOString(),
      };

      if (tokenData.refresh_token) {
        updateData.refresh_token = tokenData.refresh_token;
      }

      const { error } = await supabase
        .from('integrations')
        .update(updateData)
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Fitbit tokens updated in Supabase');
    } catch (error) {
      console.error('❌ Error updating Fitbit tokens in Supabase:', error);
    }
  }

  /**
   * Disconnect and deactivate integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      // Remove webhook subscriptions before disconnecting
      try {
        console.log('🔗 Removing Fitbit webhook subscriptions...');
        await this.removeWebhookSubscriptions(integrationId);
        console.log('✅ Webhook subscriptions removed successfully');
      } catch (webhookError) {
        console.error('⚠️ Failed to remove webhook subscriptions (disconnect will continue):', webhookError);
      }

      await super.disconnect(integrationId);
      await this.deactivateIntegrationInSupabase(integrationId);
      await this.notifyAuthCallbacks(integrationId);
    } catch (error) {
      console.error('❌ Error during Fitbit disconnect:', error);
      await this.notifyAuthCallbacks(integrationId);
      throw error;
    }
  }

  /**
   * Deactivate integration in Supabase
   */
  private async deactivateIntegrationInSupabase(integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during sign out');
        return;
      }

      const { error } = await supabase
        .from('integrations')
        .update({ is_active: false })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Fitbit integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating Fitbit integration in Supabase:', error);
    }
  }

  /**
   * Set up webhook subscriptions for a user
   */
  private async setupWebhookSubscriptions(integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      // Default collections to subscribe to
      const collections = ['activities', 'sleep', 'body', 'foods'];
      const subscriptionIds: string[] = [];

      for (const collection of collections) {
        try {
          const subscriptionId = await this.createWebhookSubscription(collection, integrationId, user.id);
          if (subscriptionId) {
            subscriptionIds.push(subscriptionId);
            console.log(`✅ Created ${collection} webhook subscription: ${subscriptionId}`);
          }
        } catch (error) {
          console.error(`❌ Failed to create ${collection} webhook subscription:`, error);
        }
      }

      // Update integration with webhook subscription IDs
      if (subscriptionIds.length > 0) {
        await this.updateWebhookSubscriptionsInSupabase(integrationId, subscriptionIds);
      }
    } catch (error) {
      console.error('❌ Error setting up webhook subscriptions:', error);
      throw error;
    }
  }

  /**
   * Create a webhook subscription for a specific collection
   */
  private async createWebhookSubscription(collection: string, integrationId: string, userId: string): Promise<string | null> {
    try {
      const subscriptionId = `${collection}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const endpoint = `/user/-/${collection}/apiSubscriptions/${subscriptionId}.json`;
      
      const response = await this.makeApiCall(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          callbackURL: `https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/webhook-handler/fitbit/${userId}`,
          verificationCode: 'fitbit_webhook_verification'
        })
      }, integrationId);

      return subscriptionId;
    } catch (error) {
      console.error(`❌ Error creating ${collection} webhook subscription:`, error);
      return null;
    }
  }

  /**
   * Remove all webhook subscriptions for a user
   */
  private async removeWebhookSubscriptions(integrationId: string): Promise<void> {
    try {
      // Get existing subscription IDs from Supabase
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during webhook cleanup');
        return;
      }

      const { data: integration, error } = await supabase
        .from('integrations')
        .select('configuration')
        .eq('id', integrationId)
        .eq('user_id', user.id)
        .single();

      if (error || !integration?.configuration?.webhook_subscriptions) {
        console.log('No webhook subscriptions found to remove');
        return;
      }

      const subscriptionIds = integration.configuration.webhook_subscriptions;
      const collections = ['activities', 'sleep', 'body', 'foods'];

      for (const collection of collections) {
        for (const subscriptionId of subscriptionIds) {
          if (subscriptionId.startsWith(collection)) {
            try {
              await this.deleteWebhookSubscription(collection, subscriptionId, integrationId);
              console.log(`✅ Removed ${collection} webhook subscription: ${subscriptionId}`);
            } catch (error) {
              console.error(`❌ Failed to remove ${collection} webhook subscription ${subscriptionId}:`, error);
            }
          }
        }
      }

      // Clear webhook subscriptions from database
      await this.updateWebhookSubscriptionsInSupabase(integrationId, []);
    } catch (error) {
      console.error('❌ Error removing webhook subscriptions:', error);
    }
  }

  /**
   * Delete a specific webhook subscription
   */
  private async deleteWebhookSubscription(collection: string, subscriptionId: string, integrationId: string): Promise<void> {
    try {
      const endpoint = `/user/-/${collection}/apiSubscriptions/${subscriptionId}.json`;
      
      await this.makeApiCall(endpoint, {
        method: 'DELETE'
      }, integrationId);
    } catch (error) {
      console.error(`❌ Error deleting ${collection} webhook subscription ${subscriptionId}:`, error);
      throw error;
    }
  }

  /**
   * Update webhook subscription IDs in Supabase
   */
  private async updateWebhookSubscriptionsInSupabase(integrationId: string, subscriptionIds: string[]): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      // Get current configuration
      const { data: integration, error: fetchError } = await supabase
        .from('integrations')
        .select('configuration')
        .eq('id', integrationId)
        .eq('user_id', user.id)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      const updatedConfiguration = {
        ...integration.configuration,
        webhook_subscriptions: subscriptionIds
      };

      const { error } = await supabase
        .from('integrations')
        .update({ configuration: updatedConfiguration })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Webhook subscription IDs updated in Supabase');
    } catch (error) {
      console.error('❌ Error updating webhook subscriptions in Supabase:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Fitbit
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const accessToken = await this.getAccessToken(integrationId);

    const response = await fetch(`https://api.fitbit.com/1${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Fitbit API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Trigger health data sync after successful OAuth
   */
  private async triggerHealthDataSync(integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      const response = await fetch('https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/health-data-sync', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
        body: JSON.stringify({
          action: 'backfill',
          user_id: user.id,
          service_name: 'Fitbit',
          days: 7
        })
      });

      if (!response.ok) {
        throw new Error(`Health data sync request failed: ${response.status} ${response.statusText}`);
      }

      console.log('✅ Health data sync request sent successfully');
    } catch (error) {
      console.error('❌ Error triggering health data sync:', error);
      throw error;
    }
  }

  /**
   * Test the connection by getting user profile
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const profile = await this.makeApiCall('/user/-/profile.json', {}, integrationId);
      
      return {
        userId: profile.user?.encodedId,
        displayName: profile.user?.displayName,
        memberSince: profile.user?.memberSince
      };
    } catch (error) {
      console.error('🔴 Fitbit connection test failed:', error);
      throw error;
    }
  }
}

export default FitbitAuthService;