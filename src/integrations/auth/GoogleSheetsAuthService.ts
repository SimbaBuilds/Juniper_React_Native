import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface GoogleSheetsAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class GoogleSheetsAuthService {
  private static instance: GoogleSheetsAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://accounts.google.com',
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/google-sheets',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    additionalParameters: {
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent'
    },
    customHeaders: {},
    usePKCE: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'safari',
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
  } as any;

  static getInstance(): GoogleSheetsAuthService {
    if (!GoogleSheetsAuthService.instance) {
      GoogleSheetsAuthService.instance = new GoogleSheetsAuthService();
    }
    return GoogleSheetsAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Google Sheets client ID not configured. Please set EXPO_PUBLIC_GOOGLE_CLIENT_ID environment variable.');
    }

    console.log('🟢 Google Sheets OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<GoogleSheetsAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('🟢 Starting Google Sheets OAuth flow...');
      console.log('🟢 Integration ID:', integrationId);
      console.log('🟢 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'google-sheets',
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

      console.log('🟢 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('🟢 Google Sheets OAuth successful:', {
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
        scope: Array.isArray(result.scopes) ? result.scopes.join(' ') : result.scopes
      };

    } catch (error) {
      console.error('🔴 Google Sheets OAuth error:', error);
      throw new Error(`Google Sheets authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<GoogleSheetsAuthResult> {
    try {
      console.log('🟢 Refreshing Google Sheets token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('🟢 Google Sheets token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Google Sheets token refresh error:', error);
      throw new Error(`Google Sheets token refresh failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
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
        service: 'google-sheets',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `google_sheets_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `google_sheets_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('🟢 Google Sheets tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Google Sheets tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<GoogleSheetsAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`google_sheets_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`google_sheets_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('🟢 Google Sheets token expired, attempting refresh...');
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
      console.error('🔴 Error retrieving Google Sheets tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('🟢 Completing Google Sheets integration with backend...');

      const response = await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'google-sheets',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scope: result.scopes?.join(' '),
        oauth_result: result
      });

      console.log('🟢 Google Sheets integration completed:', response.data);
    } catch (error) {
      console.error('🔴 Error completing Google Sheets integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🟢 Disconnecting Google Sheets integration...');

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
          console.log('🟢 Google Sheets token revoked');
        } catch (revokeError) {
          console.warn('🟡 Could not revoke Google Sheets token:', revokeError);
        }
      }

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`google_sheets_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`google_sheets_tokens_${integrationId}`);
      }

      console.log('🟢 Google Sheets integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Google Sheets
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Google Sheets tokens available');
    }

    const response = await fetch(`https://sheets.googleapis.com/v4${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user's spreadsheets
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const files = await this.makeApiCall('/files?q=mimeType="application/vnd.google-apps.spreadsheet"', {}, integrationId);
      
      return {
        spreadsheetCount: files.files?.length || 0,
        files: files.files?.slice(0, 5) // Return first 5 spreadsheets
      };
    } catch (error) {
      console.error('🔴 Google Sheets connection test failed:', error);
      throw error;
    }
  }
}

export default GoogleSheetsAuthService; 