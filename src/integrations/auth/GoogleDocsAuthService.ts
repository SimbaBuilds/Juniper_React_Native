import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { completeIntegration, createOAuthAuthParams, disconnectIntegration } from '../../api/integration_api';

interface GoogleDocsAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class GoogleDocsAuthService {
  private static instance: GoogleDocsAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://accounts.google.com',
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/google-docs',
    scopes: ['https://www.googleapis.com/auth/documents'],
    additionalParameters: {
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent'
    },
    serviceConfiguration: {
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      tokenEndpoint: 'https://oauth2.googleapis.com/token',
    },
    customHeaders: {},
    usePKCE: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'safari',
  };

  static getInstance(): GoogleDocsAuthService {
    if (!GoogleDocsAuthService.instance) {
      GoogleDocsAuthService.instance = new GoogleDocsAuthService();
    }
    return GoogleDocsAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Google Docs client ID not configured. Please set EXPO_PUBLIC_GOOGLE_CLIENT_ID environment variable.');
    }

    console.log('📝 Google Docs OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<GoogleDocsAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('📝 Starting Google Docs OAuth flow...');
      console.log('📝 Integration ID:', integrationId);
      console.log('📝 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'google-docs',
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

      console.log('📝 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('📝 Google Docs OAuth successful:', {
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
        scope: result.scopes?.join(' ')
      };

    } catch (error) {
      console.error('🔴 Google Docs OAuth error:', error);
      throw new Error(`Google Docs authentication failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<GoogleDocsAuthResult> {
    try {
      console.log('📝 Refreshing Google Docs token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('📝 Google Docs token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Google Docs token refresh error:', error);
      throw new Error(`Google Docs token refresh failed: ${error instanceof Error ? error.message : String(error)}`);
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
        service: 'google-docs',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `google_docs_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `google_docs_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('📝 Google Docs tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Google Docs tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<GoogleDocsAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`google_docs_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`google_docs_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('📝 Google Docs token expired, attempting refresh...');
        if (tokenData.refreshToken) {
          return await this.refreshToken(tokenData.refreshToken);
        } else {
          console.log('🟡 No refresh token available');
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
      console.error('🔴 Error retrieving Google Docs tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      const authParams = createOAuthAuthParams(result);

      await completeIntegration({
        integration_id: integrationId,
        service_name: 'google-docs',
        service_type: 'oauth',
        auth_params: authParams
      });
    } catch (error) {
      console.error('🔴 Error completing Google Docs integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('📝 Disconnecting Google Docs integration...');

      const tokens = await this.getStoredTokens(integrationId);
      
      // Revoke token with Google
      if (tokens) {
        try {
          await fetch('https://oauth2.googleapis.com/revoke', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `token=${tokens.accessToken}`
          });
          console.log('📝 Google Docs token revoked');
        } catch (revokeError) {
          console.warn('🟡 Could not revoke Google Docs token:', revokeError);
        }
      }

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`google_docs_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`google_docs_tokens_${integrationId}`);
      }

      // Disconnect from backend
      await disconnectIntegration({
        integration_id: integrationId,
        service_name: 'google-docs'
      });

      console.log('📝 Google Docs integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Google Docs:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Google Docs
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Google Docs tokens available');
    }

    const response = await fetch(`https://docs.googleapis.com/v1${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Google Docs API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user's documents
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      // Get documents from Drive API (since Docs API doesn't have a list endpoint)
      const tokens = await this.getStoredTokens(integrationId);
      if (!tokens) {
        throw new Error('No valid tokens available');
      }

      const response = await fetch('https://www.googleapis.com/drive/v3/files?q=mimeType="application/vnd.google-apps.document"', {
        headers: {
          'Authorization': `Bearer ${tokens.accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Google Drive API error: ${response.status} ${response.statusText}`);
      }

      const files = await response.json();
      
      return {
        documentCount: files.files?.length || 0,
        files: files.files?.slice(0, 5) // Return first 5 documents
      };
    } catch (error) {
      console.error('🔴 Google Docs connection test failed:', error);
      throw error;
    }
  }
}

export default GoogleDocsAuthService; 