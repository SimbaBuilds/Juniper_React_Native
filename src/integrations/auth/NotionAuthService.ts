import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface NotionAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  workspaceId?: string;
  workspaceName?: string;
  workspaceIcon?: string;
  botId?: string;
  ownerInfo?: any;
}

export class NotionAuthService {
  private static instance: NotionAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://api.notion.com',
    clientId: process.env.EXPO_PUBLIC_NOTION_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/notion',
    scopes: [],
    additionalParameters: {
      response_type: 'code'
    },
    serviceConfiguration: {
      authorizationEndpoint: 'https://api.notion.com/v1/oauth/authorize',
      tokenEndpoint: 'https://api.notion.com/v1/oauth/token',
    },
    customHeaders: {},
    usePKCE: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'safari',
  };

  static getInstance(): NotionAuthService {
    if (!NotionAuthService.instance) {
      NotionAuthService.instance = new NotionAuthService();
    }
    return NotionAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Notion client ID not configured. Please set EXPO_PUBLIC_NOTION_CLIENT_ID environment variable.');
    }

    console.log('🟢 Notion OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<NotionAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('🟢 Starting Notion OAuth flow...');
      console.log('🟢 Integration ID:', integrationId);
      console.log('🟢 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'notion',
        timestamp: Date.now()
      };
      const encodedState = Buffer.from(JSON.stringify(stateData)).toString('base64');

      const configWithState = {
        ...this.config,
        additionalParameters: {
          ...this.config.additionalParameters,
          state: encodedState,
          owner: 'user' // Notion specific - request user token
        }
      };

      console.log('🟢 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('🟢 Notion OAuth successful:', {
        hasAccessToken: !!result.accessToken,
        hasRefreshToken: !!result.refreshToken,
        expiresAt: result.accessTokenExpirationDate
      });

      // Store tokens securely
      await this.storeTokens(result, integrationId);

      // Call backend to complete integration
      await this.completeIntegration(result, integrationId);

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || '',
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Notion OAuth error:', error);
      throw new Error(`Notion authentication failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<NotionAuthResult> {
    try {
      console.log('🟢 Refreshing Notion token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('🟢 Notion token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Notion token refresh error:', error);
      throw new Error(`Notion token refresh failed: ${error instanceof Error ? error.message : String(error)}`);
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
        service: 'notion',
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `notion_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `notion_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('🟢 Notion tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Notion tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<NotionAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`notion_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`notion_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('🟢 Notion token expired, attempting refresh...');
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
      };

    } catch (error) {
      console.error('🔴 Error retrieving Notion tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('🟢 Completing Notion integration with backend...');

      const response = await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'notion',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        oauth_result: result
      });

      console.log('🟢 Notion integration completed:', response.data);
    } catch (error) {
      console.error('🔴 Error completing Notion integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🟢 Disconnecting Notion integration...');

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`notion_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`notion_tokens_${integrationId}`);
      }

      console.log('🟢 Notion integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Notion:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Notion
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Notion tokens available');
    }

    const response = await fetch(`https://api.notion.com/v1${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }
}

export default NotionAuthService; 