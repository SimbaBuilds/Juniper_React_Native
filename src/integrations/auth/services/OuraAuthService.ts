import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';

export class OuraAuthService extends BaseOAuthService {
  private static instance: OuraAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): OuraAuthService {
    if (!OuraAuthService.instance) {
      OuraAuthService.instance = new OuraAuthService('oura');
    }
    return OuraAuthService.instance;
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
      
      console.log('💍 Starting Oura OAuth flow...');
      console.log('💍 Integration ID:', integrationId);
      console.log('💍 Opening OAuth URL:', authUrl);
      
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
      console.error('❌ Error during Oura authentication:', error);
      throw error;
    }
  }

  /**
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string, integrationId: string): Promise<boolean> {
    try {
      console.log('💍 Handling Oura OAuth callback...');
      console.log('💍 Integration ID:', integrationId);
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      // Store tokens using base class method
      await this.storeTokens(tokenData, integrationId);
      await this.saveIntegrationToSupabase(tokenData, integrationId);
      
      // Trigger immediate health data sync after successful OAuth
      try {
        console.log('🔄 Initiating Oura health data backfill...');
        await this.triggerHealthDataSync(integrationId);
        console.log('✅ Health data sync initiated successfully');
      } catch (syncError) {
        console.error('⚠️ Failed to initiate health data sync (authentication still successful):', syncError);
      }
      
      await this.completeIntegration(tokenData, integrationId);
      
      console.log('✅ Oura authentication successful');
      await this.notifyAuthCallbacks(integrationId);
      return true;
    } catch (error) {
      console.error('❌ Error handling Oura auth callback:', error);
      return false;
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('💍 Refreshing Oura token...');

      const requestBody = new URLSearchParams();
      requestBody.append('grant_type', 'refresh_token');
      requestBody.append('refresh_token', refreshToken);
      requestBody.append('client_id', this.config.clientId);
      
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
        expiresAt: Date.now() + (tokenData.expires_in * 1000),
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
          },
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Oura integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving Oura integration to Supabase:', error);
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

      console.log('✅ Oura tokens updated in Supabase');
    } catch (error) {
      console.error('❌ Error updating Oura tokens in Supabase:', error);
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
      console.error('❌ Error during Oura disconnect:', error);
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

      console.log('✅ Oura integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating Oura integration in Supabase:', error);
    }
  }

  /**
   * Make authenticated API call to Oura
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const accessToken = await this.getAccessToken(integrationId);

    const response = await fetch(`https://api.ouraring.com/v2${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Oura API error: ${response.status} ${response.statusText}`);
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
          service_name: 'Oura',
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
   * Test the connection by getting user personal info
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const personalInfo = await this.makeApiCall('/usercollection/personal_info', {}, integrationId);
      
      return {
        userId: personalInfo.id,
        age: personalInfo.age,
        biologicalSex: personalInfo.biological_sex,
        height: personalInfo.height,
        weight: personalInfo.weight
      };
    } catch (error) {
      console.error('🔴 Oura connection test failed:', error);
      throw error;
    }
  }
}

export default OuraAuthService;