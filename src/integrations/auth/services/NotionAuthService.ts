import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';

export class NotionAuthService extends BaseOAuthService {
  private static instance: NotionAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): NotionAuthService {
    if (!NotionAuthService.instance) {
      NotionAuthService.instance = new NotionAuthService('notion');
    }
    return NotionAuthService.instance;
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

      // Add environment debugging
      console.log('🔍 Notion environment check:', {
        hasNotionClientId: !!(process.env.EXPO_PUBLIC_NOTION_CLIENT_ID || process.env.NOTION_CLIENT_ID),
        hasNotionClientSecret: !!(process.env.EXPO_PUBLIC_NOTION_CLIENT_SECRET || process.env.NOTION_CLIENT_SECRET),
        configClientId: this.config.clientId,
        configClientSecret: this.config.clientSecret ? '***PRESENT***' : 'MISSING'
      });

      // Pre-flight check: ensure App Links are enabled
      await this.checkAppLinksBeforeAuth();

      const authUrl = this.buildAuthUrl(integrationId);
      
      console.log('📝 Starting Notion OAuth flow...');
      console.log('📝 Integration ID:', integrationId);
      console.log('📝 Opening OAuth URL:', authUrl);
      
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
      console.error('❌ Error during Notion authentication:', error);
      throw error;
    }
  }

  /**
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string, integrationId: string): Promise<boolean> {
    try {
      console.log('📝 Handling Notion OAuth callback...');
      console.log('📝 Integration ID:', integrationId);
      console.log('🔍 Notion OAuth callback details:', {
        code: code ? `${code.substring(0, 15)}...` : 'MISSING',
        codeLength: code?.length || 0,
        integrationId,
        configInitialized: this.isInitialized
      });
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      // Ensure we're initialized before proceeding
      if (!this.isInitialized) {
        console.log('🔧 Initializing Notion OAuth service...');
        await this.initialize();
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      console.log('🔍 Notion token data received:', {
        hasAccessToken: !!tokenData.access_token,
        hasRefreshToken: !!tokenData.refresh_token,
        hasWorkspaceInfo: !!(tokenData.workspace_id || tokenData.workspace_name),
        hasBotId: !!tokenData.bot_id,
        keys: Object.keys(tokenData)
      });
      console.log('📦 Notion callback payload:', JSON.stringify(tokenData, null, 2));
      
      // Store tokens using base class method
      console.log('🔄 Step 1: Storing tokens locally...');
      await this.storeTokens(tokenData, integrationId);
      console.log('✅ Step 1 completed: Tokens stored locally');
      
      console.log('🔄 Step 2: Saving integration to Supabase...');
      await this.saveIntegrationToSupabase(tokenData, integrationId);
      console.log('✅ Step 2 completed: Integration saved to Supabase');
      
      console.log('🔄 Step 3: Completing integration with backend...');
      await this.completeIntegration(tokenData, integrationId);
      console.log('✅ Step 3 completed: Backend integration completed');
      
      console.log('✅ Notion authentication successful');
      await this.notifyAuthCallbacks(integrationId);
      return true;
    } catch (error) {
      console.error('❌ Error handling Notion auth callback:', error);
      console.error('❌ Notion error details:', {
        name: (error as Error)?.name,
        message: (error as Error)?.message,
        stack: (error as Error)?.stack?.split('\n')[0] // Just first line of stack
      });
      return false;
    }
  }

  /**
   * Refresh access token (Notion tokens typically don't expire)
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('📝 Notion tokens typically do not expire, returning current token...');
      
      const tokens = await this.getStoredTokens(integrationId);
      if (!tokens) {
        throw new Error('No stored tokens available');
      }

      return tokens;
    } catch (error) {
      console.error('❌ Token refresh failed:', error);
      throw new Error(`Failed to refresh authentication. Please try signing in again.`);
    }
  }

  /**
   * Exchange authorization code for tokens
   */
  private async exchangeCodeForToken(code: string): Promise<any> {
    console.log('🔍 Notion exchangeCodeForToken - Starting token exchange...');
    console.log('🔍 Notion config check:', {
      serviceName: this.config.serviceName,
      clientId: this.config.clientId,
      clientSecret: this.config.clientSecret ? '***PRESENT***' : 'MISSING',
      tokenEndpoint: this.config.tokenEndpoint,
      redirectUri: this.getRedirectUri(),
      scopes: this.config.scopes
    });

    // Notion requires HTTP Basic Auth - don't include client credentials in form body
    const requestBody = new URLSearchParams();
    requestBody.append('code', code);
    requestBody.append('redirect_uri', this.getRedirectUri());
    requestBody.append('grant_type', 'authorization_code');
    
    console.log('🔍 Notion request body (sanitized):', {
      code: requestBody.get('code') ? `${requestBody.get('code')?.substring(0, 10)}...` : 'MISSING',
      redirect_uri: requestBody.get('redirect_uri'),
      grant_type: requestBody.get('grant_type')
    });
    
    console.log('🔍 Notion using HTTP Basic Authentication with client credentials');
    console.log('🔍 Notion about to call makeTokenRequest with endpoint:', this.config.tokenEndpoint);
    
    // Use Basic Auth for Notion (third parameter = true)
    return this.makeTokenRequest(requestBody, 'token exchange', true);
  }

  /**
   * Save integration to Supabase
   */
  private async saveIntegrationToSupabase(tokenData: any, integrationId: string): Promise<void> {
    try {
      console.log('🔍 Getting Supabase user...');
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }
      console.log('✅ Supabase user found:', user.id);

      // Notion tokens typically don't expire
      const expiresAt = new Date(Date.now() + (365 * 24 * 60 * 60 * 1000)); // 1 year from now
      
      const updateData = {
        // OAuth fields
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token || '',
        expires_at: expiresAt.toISOString(),
        scope: tokenData.scope || this.config.scopes.join(' '),
        is_active: true,
        // Use existing dedicated fields for Notion data
        bot_id: tokenData.bot_id,
        workspace_name: tokenData.workspace_name,
        workspace_id: tokenData.workspace_id,
        workspace_icon: tokenData.workspace_icon,
        // Store additional Notion metadata in configuration
        configuration: {
          scopes: this.config.scopes,
          owner: tokenData.owner,
          duplicated_template_id: tokenData.duplicated_template_id,
        },
      };
      
      console.log('🔍 Supabase update data:', JSON.stringify(updateData, null, 2));
      console.log('🔍 Updating integration with ID:', integrationId, 'for user:', user.id);
      
      const { data, error } = await supabase
        .from('integrations')
        .update(updateData)
        .eq('id', integrationId)
        .eq('user_id', user.id)
        .select();

      if (error) {
        console.error('🔴 Supabase update error:', error);
        throw error;
      }

      console.log('✅ Supabase update result:', data);
      console.log('📝 Notion integration saved to Supabase');
    } catch (error) {
      console.error('🔴 Error saving Notion integration to Supabase:', error);
      throw error;
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

      const expiresAt = new Date(Date.now() + (365 * 24 * 60 * 60 * 1000)); // 1 year from now

      const updateData: any = {
        access_token: tokenData.access_token,
        expires_at: expiresAt.toISOString(),
        updated_at: new Date().toISOString(),
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

      console.log('📝 Notion tokens updated in Supabase');
    } catch (error) {
      console.error('🔴 Error updating Notion tokens in Supabase:', error);
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
      console.error('🔴 Error disconnecting Notion:', error);
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

      console.log('📝 Notion integration deactivated in Supabase');
    } catch (error) {
      console.error('🔴 Error deactivating Notion integration:', error);
    }
  }

  /**
   * Make API call to Notion
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('Not authenticated with Notion');
    }

    const response = await fetch(endpoint, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Notion API request failed: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user info
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const userInfo = await this.makeApiCall('https://api.notion.com/v1/users/me', {}, integrationId);
      return userInfo;
    } catch (error) {
      console.error('🔴 Notion connection test failed:', error);
      throw error;
    }
  }

  /**
   * Extract Notion-specific additional token data for backend integration
   */
  protected extractAdditionalTokenData(result: any): Record<string, any> {
    console.log('🔍 Notion extractAdditionalTokenData - input:', JSON.stringify(result, null, 2));
    
    const additionalData = {
      workspaceId: result.workspace_id,
      workspaceName: result.workspace_name,
      workspaceIcon: result.workspace_icon,
      botId: result.bot_id,
      owner: result.owner,
      duplicatedTemplateId: result.duplicated_template_id,
    };

    console.log('🔍 Notion extractAdditionalTokenData - processed:', JSON.stringify(additionalData, null, 2));
    return additionalData;
  }
}

export default NotionAuthService; 