import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';
import { calculateExpirationDate, safeToISOString, calculateExpirationTimestamp } from '../DateUtils';

export class TodoistAuthService extends BaseOAuthService {
  private static instance: TodoistAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): TodoistAuthService {
    if (!TodoistAuthService.instance) {
      TodoistAuthService.instance = new TodoistAuthService('todoist');
    }
    return TodoistAuthService.instance;
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
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<AuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Pre-flight check: ensure App Links are enabled
      await this.checkAppLinksBeforeAuth();

      const authUrl = this.buildAuthUrl(integrationId);
      
      console.log('✅ Starting Todoist OAuth flow...');
      console.log('✅ Integration ID:', integrationId);
      console.log('✅ Opening OAuth URL:', authUrl);
      
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
      console.error('❌ Error during Todoist authentication:', error);
      throw error;
    }
  }

  /**
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string, integrationId: string): Promise<boolean> {
    try {
      console.log('✅ Handling Todoist OAuth callback...');
      console.log('✅ Integration ID:', integrationId);
      
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
      
      console.log('✅ Todoist authentication successful');
      await this.notifyAuthCallbacks(integrationId);
      return true;
    } catch (error) {
      console.error('❌ Error handling Todoist auth callback:', error);
      return false;
    }
  }

  /**
   * Refresh access token using refresh token (if available)
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('✅ Refreshing Todoist token...');

      const requestBody = new URLSearchParams();
      requestBody.append('client_id', this.config.clientId);
      requestBody.append('refresh_token', refreshToken);
      requestBody.append('grant_type', 'refresh_token');
      
      // Include client_secret for Todoist refresh token requests (this was missing!)
      if (this.config.clientSecret) {
        requestBody.append('client_secret', this.config.clientSecret);
      }
      
      const tokenData = await this.makeTokenRequest(requestBody, 'token refresh');
      
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
        expiresAt: calculateExpirationTimestamp(tokenData.expires_in),
        scope: tokenData.scope
      };
    } catch (error) {
      console.error('❌ Token refresh failed:', error);
      throw new Error(`Failed to refresh authentication. Please try signing in again.`);
    }
  }

  /**
   * Exchange authorization code for tokens
   */
  private async exchangeCodeForToken(code: string): Promise<any> {
    const requestBody = new URLSearchParams();
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('code', code);
    requestBody.append('redirect_uri', this.getRedirectUri());
    requestBody.append('client_id', this.config.clientId);
    
    // Include client_secret for Todoist OAuth
    if (this.config.clientSecret) {
      requestBody.append('client_secret', this.config.clientSecret);
    }
    
    return this.makeTokenRequest(requestBody, 'token exchange');
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

      console.log('🔍 Todoist token data for Supabase save:', {
        expires_in: tokenData.expires_in,
        expires_in_type: typeof tokenData.expires_in,
        has_access_token: !!tokenData.access_token,
        has_refresh_token: !!tokenData.refresh_token
      });
      
      const expiresAt = calculateExpirationDate(tokenData.expires_in);
      console.log('✅ Calculated safe expiration date:', safeToISOString(expiresAt));
      
      const { error } = await supabase
        .from('integrations')
        .update({
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: safeToISOString(expiresAt),
          scope: tokenData.scope || this.config.scopes.join(' '),
          is_active: true,
          configuration: {
            scopes: this.config.scopes,
          },
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        console.error('🔴 Supabase integration save error details:', {
          error: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint
        });
        throw error;
      }

      console.log('✅ Todoist integration saved to Supabase');
    } catch (error) {
      console.error('🔴 Error saving Todoist integration to Supabase:', error);
      console.error('🔴 Full error details:', JSON.stringify(error, null, 2));
      throw error;
    }
  }

  /**
   * Update tokens in Supabase
   */
  private async updateTokensInSupabase(tokenData: any, integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      console.log('🔍 Todoist token data for update:', {
        expires_in: tokenData.expires_in,
        expires_in_type: typeof tokenData.expires_in
      });

      const expiresAt = calculateExpirationDate(tokenData.expires_in);

      const { error } = await supabase
        .from('integrations')
        .update({
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: safeToISOString(expiresAt),
          updated_at: new Date().toISOString(),
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) throw error;

      console.log('✅ Todoist tokens updated in Supabase');
    } catch (error) {
      console.error('🔴 Error updating Todoist tokens in Supabase:', error);
    }
  }

  /**
   * Disconnect integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      await super.disconnect(integrationId);
      await this.deactivateIntegrationInSupabase(integrationId);
      await this.notifyAuthCallbacks(integrationId);
    } catch (error) {
      console.error('🔴 Error disconnecting Todoist:', error);
      throw error;
    }
  }

  /**
   * Deactivate integration in Supabase
   */
  private async deactivateIntegrationInSupabase(integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      const { error } = await supabase
        .from('integrations')
        .update({
          is_active: false,
          access_token: null,
          refresh_token: null,
          expires_at: null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) throw error;

      console.log('✅ Todoist integration deactivated in Supabase');
    } catch (error) {
      console.error('🔴 Error deactivating Todoist integration:', error);
    }
  }

  /**
   * Make API call to Todoist
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('Not authenticated with Todoist');
    }

    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Todoist API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test connection
   */
  async testConnection(integrationId: string): Promise<any> {
    return this.makeApiCall('https://api.todoist.com/rest/v2/projects', {}, integrationId);
  }
}

export default TodoistAuthService; 