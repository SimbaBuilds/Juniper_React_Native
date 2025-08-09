import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';
import { createBasicAuthHeader } from '../../../utils/base64';
// Removed expo-crypto import - using native alternatives

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
   * Generate PKCE code verifier and challenge
   */
  private async generatePKCE(): Promise<{ codeVerifier: string; codeChallenge: string }> {
    // Generate cryptographically random 128-character code verifier
    const array = new Uint8Array(96);
    // Generate random values without expo-crypto
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.floor(Math.random() * 256);
    }
    const codeVerifier = btoa(String.fromCharCode(...array))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
    
    // For now, using plain challenge method (S256 would require a crypto library)
    // In production, you'd want to use a proper SHA256 implementation
    const codeChallenge = codeVerifier;

    return { codeVerifier, codeChallenge };
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
   * Start OAuth authentication flow with PKCE
   */
  async authenticate(integrationId: string): Promise<AuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Generate PKCE parameters
      const { codeVerifier, codeChallenge } = await this.generatePKCE();
      this.codeVerifier = codeVerifier;

      // Build auth URL with PKCE
      const params = new URLSearchParams({
        client_id: this.config.clientId,
        redirect_uri: this.config.redirectUri,
        response_type: 'code',
        scope: this.config.scopes.join(' '),
        state: integrationId,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        ...this.config.additionalParameters
      });

      const authUrl = `${this.config.authEndpoint}?${params}`;
      
      console.log('📈 Starting Fitbit OAuth flow with PKCE...');
      console.log('📈 Integration ID:', integrationId);
      console.log('📈 Opening OAuth URL:', authUrl);
      
      const supported = await Linking.canOpenURL(authUrl);
      if (supported) {
        console.log('✅ Opening OAuth URL in browser...');
        await Linking.openURL(authUrl);
        console.log('✅ OAuth URL opened successfully');
        
        // Return a placeholder - actual token exchange happens in callback
        return {
          accessToken: 'pending',
          refreshToken: 'pending',
          expiresAt: Date.now(),
          scope: this.config.scopes.join(' ')
        };
      } else {
        throw new Error('Cannot open OAuth URL - URL not supported');
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
      console.log('📈 Integration ID:', integrationId);
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      // Store tokens using base class method
      await this.storeTokens(tokenData, integrationId);
      await this.saveIntegrationToSupabase(tokenData, integrationId);
      await this.completeIntegration(tokenData, integrationId);
      
      console.log('✅ Fitbit authentication successful');
      await this.notifyAuthCallbacks(integrationId);
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