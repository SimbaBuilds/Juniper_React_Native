import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface DropboxAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
  accountId?: string;
}

export class DropboxAuthService {
  private static instance: DropboxAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://www.dropbox.com',
    clientId: process.env.EXPO_PUBLIC_DROPBOX_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/dropbox',
    scopes: [
      'account_info.read',
      'files.metadata.read',
      'files.metadata.write',
      'files.content.read',
      'files.content.write'
    ],
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.dropbox.com/oauth2/authorize',
      tokenEndpoint: 'https://www.dropbox.com/oauth2/token',
    },
    additionalParameters: {
      response_type: 'code',
      token_access_type: 'offline', // Required for refresh tokens
    },
    customHeaders: {},
    usesPkce: true,
    usePkceCodeChallenge: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'sfAuthenticationSession',
    androidCustomBrowser: 'customTabs',
  };

  static getInstance(): DropboxAuthService {
    if (!DropboxAuthService.instance) {
      DropboxAuthService.instance = new DropboxAuthService();
    }
    return DropboxAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Dropbox client ID not configured. Please set EXPO_PUBLIC_DROPBOX_CLIENT_ID environment variable.');
    }

    console.log('📦 Dropbox OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<DropboxAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('📦 Starting Dropbox OAuth flow...');
      console.log('📦 Integration ID:', integrationId);
      console.log('📦 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'dropbox',
        timestamp: Date.now()
      };
      const encodedState = Buffer.from(JSON.stringify(stateData)).toString('base64');

      const configWithState = {
        ...this.config,
        additionalParameters: {
          ...this.config.additionalParameters,
          state: encodedState
        }
      };

      console.log('📦 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('📦 Dropbox OAuth successful:', {
        hasAccessToken: !!result.accessToken,
        hasRefreshToken: !!result.refreshToken,
        expiresAt: result.accessTokenExpirationDate,
        additionalParams: Object.keys(result.tokenAdditionalParameters || {})
      });

      // Store tokens securely
      await this.storeTokens(result, integrationId);

      // Call backend to complete integration
      await this.completeIntegration(result, integrationId);

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || '',
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
        scope: result.scopes,
        accountId: result.tokenAdditionalParameters?.account_id
      };

    } catch (error) {
      console.error('🔴 Dropbox OAuth error:', error);
      throw new Error(`Dropbox authentication failed: ${error.message}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<DropboxAuthResult> {
    try {
      console.log('📦 Refreshing Dropbox token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('📦 Dropbox token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Dropbox token refresh error:', error);
      throw new Error(`Dropbox token refresh failed: ${error.message}`);
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
        service: 'dropbox',
        scope: result.scopes,
        accountId: result.tokenAdditionalParameters?.account_id,
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `dropbox_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `dropbox_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('📦 Dropbox tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Dropbox tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<DropboxAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`dropbox_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`dropbox_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('📦 Dropbox token expired, attempting refresh...');
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
        scope: tokenData.scope,
        accountId: tokenData.accountId
      };

    } catch (error) {
      console.error('🔴 Error retrieving Dropbox tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('📦 Completing Dropbox integration with backend...');

      const response = await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'dropbox',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scope: result.scopes,
        account_id: result.tokenAdditionalParameters?.account_id,
        oauth_result: result
      });

      console.log('📦 Dropbox integration completed:', response.data);
    } catch (error) {
      console.error('🔴 Error completing Dropbox integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('📦 Disconnecting Dropbox integration...');

      const tokens = await this.getStoredTokens(integrationId);
      
      // Revoke token with Dropbox
      if (tokens) {
        try {
          await fetch('https://api.dropboxapi.com/2/auth/token/revoke', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${tokens.accessToken}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({})
          });
          console.log('📦 Dropbox token revoked');
        } catch (revokeError) {
          console.warn('🟡 Could not revoke Dropbox token:', revokeError);
        }
      }

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`dropbox_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`dropbox_tokens_${integrationId}`);
      }

      console.log('📦 Dropbox integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Dropbox:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Dropbox
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Dropbox tokens available');
    }

    const response = await fetch(`https://api.dropboxapi.com/2${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Dropbox API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user account info
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const accountInfo = await this.makeApiCall('/users/get_current_account', {
        method: 'POST'
      }, integrationId);
      
      return {
        accountId: accountInfo.account_id,
        name: accountInfo.name?.display_name,
        email: accountInfo.email,
        emailVerified: accountInfo.email_verified,
        accountType: accountInfo.account_type?.['.tag']
      };
    } catch (error) {
      console.error('🔴 Dropbox connection test failed:', error);
      throw error;
    }
  }

  /**
   * Get space usage information
   */
  async getSpaceUsage(integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall('/users/get_space_usage', {
        method: 'POST'
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error getting Dropbox space usage:', error);
      throw error;
    }
  }

  /**
   * List folder contents
   */
  async listFolder(path: string = '', integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall('/files/list_folder', {
        method: 'POST',
        body: JSON.stringify({
          path: path,
          recursive: false,
          include_media_info: false,
          include_deleted: false,
          include_has_explicit_shared_members: false,
          include_mounted_folders: true
        })
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error listing Dropbox folder:', error);
      throw error;
    }
  }

  /**
   * Upload a file to Dropbox
   */
  async uploadFile(path: string, content: string | ArrayBuffer, integrationId: string): Promise<any> {
    try {
      const tokens = await this.getStoredTokens(integrationId);
      if (!tokens) {
        throw new Error('No valid Dropbox tokens available');
      }

      const response = await fetch('https://content.dropboxapi.com/2/files/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${tokens.accessToken}`,
          'Content-Type': 'application/octet-stream',
          'Dropbox-API-Arg': JSON.stringify({
            path: path,
            mode: 'add',
            autorename: true,
            mute: false
          })
        },
        body: content
      });

      if (!response.ok) {
        throw new Error(`Dropbox upload error: ${response.status} ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error('🔴 Error uploading to Dropbox:', error);
      throw error;
    }
  }
}

export default DropboxAuthService; 