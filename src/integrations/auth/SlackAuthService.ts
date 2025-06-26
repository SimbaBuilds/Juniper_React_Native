import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { completeIntegration, createOAuthAuthParams, disconnectIntegration } from '../../api/integration_api';

interface SlackAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  teamId?: string;
  teamName?: string;
  userId?: string;
  userName?: string;
  scope?: string;
}

export class SlackAuthService {
  private static instance: SlackAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://slack.com',
    clientId: process.env.EXPO_PUBLIC_SLACK_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/slack',
    scopes: [
      'channels:read',
      'channels:write',
      'chat:write',
      'chat:write.public',
      'files:read',
      'files:write',
      'groups:read',
      'groups:write',
      'im:read',
      'im:write',
      'mpim:read',
      'mpim:write',
      'users:read',
      'users:read.email',
      'team:read',
      'channels:history',
      'groups:history',
      'im:history',
      'mpim:history'
    ],
    additionalParameters: {
      response_type: 'code'
    },
    serviceConfiguration: {
      authorizationEndpoint: 'https://slack.com/oauth/v2/authorize',
      tokenEndpoint: 'https://slack.com/api/oauth.v2.access',
    },
    customHeaders: {},
    usePKCE: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'safari',
  };

  static getInstance(): SlackAuthService {
    if (!SlackAuthService.instance) {
      SlackAuthService.instance = new SlackAuthService();
    }
    return SlackAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Slack client ID not configured. Please set EXPO_PUBLIC_SLACK_CLIENT_ID environment variable.');
    }

    console.log('🟣 Slack OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<SlackAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('🟣 Starting Slack OAuth flow...');
      console.log('🟣 Integration ID:', integrationId);
      console.log('🟣 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'slack',
        timestamp: Date.now()
      };
      const encodedState = Buffer.from(JSON.stringify(stateData)).toString('base64');

      const configWithState = {
        ...this.config,
        additionalParameters: {
          ...this.config.additionalParameters,
          state: encodedState,
          user_scope: 'identify' // Additional user permissions
        }
      };

      console.log('🟣 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]',
        scopes: this.config.scopes
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('🟣 Slack OAuth successful:', {
        hasAccessToken: !!result.accessToken,
        hasRefreshToken: !!result.refreshToken,
        expiresAt: result.accessTokenExpirationDate,
        scope: result.scopes?.join(' ')
      });

      // Store tokens securely
      await this.storeTokens(result, integrationId);

      // Call backend to complete integration
      await this.completeIntegration(result, integrationId);

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || '',
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
        scope: result.scopes?.join(' ')
      };

    } catch (error) {
      console.error('🔴 Slack OAuth error:', error);
      throw new Error(`Slack authentication failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<SlackAuthResult> {
    try {
      console.log('🟣 Refreshing Slack token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('🟣 Slack token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Slack token refresh error:', error);
      throw new Error(`Slack token refresh failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Store tokens securely
   */
  private async storeTokens(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      const tokenData = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        expiresAt: result.accessTokenExpirationDate,
        integrationId,
        service: 'slack',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `slack_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `slack_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('🟣 Slack tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Slack tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<SlackAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`slack_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`slack_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('🟣 Slack token expired, attempting refresh...');
        if (tokenData.refreshToken) {
          return await this.refreshToken(tokenData.refreshToken);
        } else {
          console.log('🔴 No refresh token available');
          return null;
        }
      }

      return {
        accessToken: tokenData.accessToken,
        refreshToken: tokenData.refreshToken,
        expiresAt,
        scope: tokenData.scope
      };

    } catch (error) {
      console.error('🔴 Error retrieving Slack tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('🟣 Completing Slack integration with backend...');

      const authParams = createOAuthAuthParams(result);

      await completeIntegration({
        integration_id: integrationId,
        service_name: 'slack',
        service_type: 'oauth',
        auth_params: authParams
      });

      console.log('🟣 Slack integration completed');
    } catch (error) {
      console.error('🔴 Error completing Slack integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🟣 Disconnecting Slack integration...');

      const tokens = await this.getStoredTokens(integrationId);
      
      // Revoke token with Slack
      if (tokens) {
        try {
          await fetch('https://slack.com/api/auth.revoke', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${tokens.accessToken}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `token=${tokens.accessToken}`
          });
          console.log('🟣 Slack token revoked');
        } catch (revokeError) {
          console.warn('🟡 Could not revoke Slack token:', revokeError);
        }
      }

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`slack_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`slack_tokens_${integrationId}`);
      }

      console.log('🟣 Slack integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Slack:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Slack
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Slack tokens available');
    }

    const response = await fetch(`https://slack.com/api/${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Slack API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    // Check for Slack API errors
    if (!data.ok) {
      throw new Error(`Slack API error: ${data.error || 'Unknown error'}`);
    }

    return data;
  }

  /**
   * Test the connection by getting basic team info
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const teamInfo = await this.makeApiCall('team.info', {}, integrationId);
      const authInfo = await this.makeApiCall('auth.test', {}, integrationId);
      
      return {
        team: teamInfo.team,
        user: authInfo
      };
    } catch (error) {
      console.error('🔴 Slack connection test failed:', error);
      throw error;
    }
  }
}

export default SlackAuthService; 