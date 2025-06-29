import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';

export class SlackAuthService extends BaseOAuthService {
  private static instance: SlackAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): SlackAuthService {
    if (!SlackAuthService.instance) {
      SlackAuthService.instance = new SlackAuthService('slack');
    }
    return SlackAuthService.instance;
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

      const authUrl = this.buildAuthUrl(integrationId);
      
      console.log('📱 Starting Slack OAuth flow...');
      console.log('📱 Integration ID:', integrationId);
      console.log('📱 Opening OAuth URL:', authUrl);
      
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
      console.error('❌ Error during Slack authentication:', error);
      throw error;
    }
  }

  /**
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string, integrationId: string): Promise<boolean> {
    try {
      console.log('📱 Handling Slack OAuth callback...');
      console.log('📱 Integration ID:', integrationId);
      
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
      
      console.log('✅ Slack authentication successful');
      await this.notifyAuthCallbacks(integrationId);
      return true;
    } catch (error) {
      console.error('❌ Error handling Slack auth callback:', error);
      return false;
    }
  }

  /**
   * Refresh access token (Slack tokens are long-lived)
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    // Slack tokens are typically long-lived and don't require refresh
    // Just return the stored tokens
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No stored tokens available for Slack');
    }
    return tokens;
  }

  /**
   * Exchange authorization code for tokens
   */
  private async exchangeCodeForToken(code: string): Promise<any> {
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', this.config.clientId);
    requestBody.append('client_secret', process.env.SLACK_CLIENT_SECRET || '');
    requestBody.append('code', code);
    requestBody.append('redirect_uri', this.getRedirectUri());
    
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

      const { error } = await supabase
        .from('integrations')
        .update({
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token || '',
          scope: tokenData.scope || this.config.scopes.join(','),
          is_active: true,
          configuration: {
            scopes: this.config.scopes,
            teamId: tokenData.team?.id,
            teamName: tokenData.team?.name,
            botUserId: tokenData.bot_user_id,
          },
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Slack integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving Slack integration to Supabase:', error);
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
      console.error('❌ Error during Slack disconnect:', error);
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

      console.log('✅ Slack integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating Slack integration in Supabase:', error);
    }
  }

  /**
   * Make authenticated API call to Slack
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const accessToken = await this.getAccessToken(integrationId);

    const response = await fetch(`https://slack.com/api${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.ok) {
      throw new Error(`Slack API error: ${data.error}`);
    }

    return data;
  }

  /**
   * Test the connection by getting user info
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const result = await this.makeApiCall('/auth.test', {}, integrationId);
      
      return {
        teamId: result.team_id,
        teamName: result.team,
        userId: result.user_id,
        user: result.user
      };
    } catch (error) {
      console.error('🔴 Slack connection test failed:', error);
      throw error;
    }
  }

  /**
   * Extract additional token data specific to Slack
   */
  protected extractAdditionalTokenData(result: any): Record<string, any> {
    return {
      teamId: result.team?.id,
      teamName: result.team?.name,
      botUserId: result.bot_user_id,
      appId: result.app_id,
      authedUser: result.authed_user
    };
  }
}

export default SlackAuthService; 