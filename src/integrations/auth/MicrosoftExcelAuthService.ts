import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface MicrosoftExcelAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class MicrosoftExcelAuthService {
  private static instance: MicrosoftExcelAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://login.microsoftonline.com/common/oauth2/v2.0',
    clientId: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/microsoft-excel',
    scopes: [
      'https://graph.microsoft.com/Files.ReadWrite',
      'https://graph.microsoft.com/Sites.ReadWrite.All',
      'offline_access'
    ],
    additionalParameters: {
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent'
    },
    customHeaders: {},
    usesPkce: true,
    usePkceCodeChallenge: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'sfAuthenticationSession',
    androidCustomBrowser: 'customTabs',
    authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  };

  static getInstance(): MicrosoftExcelAuthService {
    if (!MicrosoftExcelAuthService.instance) {
      MicrosoftExcelAuthService.instance = new MicrosoftExcelAuthService();
    }
    return MicrosoftExcelAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Microsoft client ID not configured. Please set EXPO_PUBLIC_MICROSOFT_CLIENT_ID environment variable.');
    }

    console.log('📊 Microsoft Excel OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<MicrosoftExcelAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('📊 Starting Microsoft Excel OAuth flow...');
      console.log('📊 Integration ID:', integrationId);
      console.log('📊 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'microsoft_excel',
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

      console.log('📊 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('📊 Microsoft Excel OAuth successful:', {
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
        scope: result.scopes
      };

    } catch (error) {
      console.error('🔴 Microsoft Excel OAuth error:', error);
      throw new Error(`Microsoft Excel authentication failed: ${error.message}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<MicrosoftExcelAuthResult> {
    try {
      console.log('📊 Refreshing Microsoft Excel token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('📊 Microsoft Excel token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Microsoft Excel token refresh error:', error);
      throw new Error(`Microsoft Excel token refresh failed: ${error.message}`);
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
        service: 'microsoft_excel',
        scope: result.scopes,
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `microsoft_excel_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `microsoft_excel_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('📊 Microsoft Excel tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Microsoft Excel tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<MicrosoftExcelAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`microsoft_excel_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`microsoft_excel_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        if (tokenData.refreshToken) {
          console.log('📊 Microsoft Excel token expired, refreshing...');
          return await this.refreshToken(tokenData.refreshToken);
        } else {
          console.log('📊 Microsoft Excel token expired and no refresh token available');
          return null;
        }
      }

      return {
        accessToken: tokenData.accessToken,
        refreshToken: tokenData.refreshToken,
        expiresAt: expiresAt,
        scope: tokenData.scope
      };

    } catch (error) {
      console.error('🔴 Error retrieving Microsoft Excel tokens:', error);
      return null;
    }
  }

  /**
   * Complete integration on backend
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('📊 Completing Microsoft Excel integration on backend...');
      
      const response = await api.post('/api/complete_integration', {
        integration_id: integrationId,
        service: 'microsoft_excel',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scopes: result.scopes,
        token_type: result.tokenType || 'Bearer',
        id_token: result.idToken
      });

      console.log('📊 Microsoft Excel integration completed on backend');
    } catch (error) {
      console.error('🔴 Error completing Microsoft Excel integration:', error);
      throw error;
    }
  }

  /**
   * Disconnect integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('📊 Disconnecting Microsoft Excel integration...');

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`microsoft_excel_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`microsoft_excel_tokens_${integrationId}`);
      }

      // Call backend to clean up
      try {
        await api.delete(`/api/integrations/${integrationId}/disconnect`);
      } catch (error) {
        console.warn('⚠️ Failed to disconnect on backend:', error);
      }

      console.log('📊 Microsoft Excel integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Microsoft Excel integration:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Microsoft Graph
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    try {
      const tokens = await this.getStoredTokens(integrationId);
      if (!tokens) {
        throw new Error('No valid tokens available');
      }

      const response = await fetch(`https://graph.microsoft.com/v1.0${endpoint}`, {
        ...options,
        headers: {
          'Authorization': `Bearer ${tokens.accessToken}`,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`Microsoft Excel API call failed: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('🔴 Microsoft Excel API call error:', error);
      throw error;
    }
  }

  /**
   * Test connection
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      console.log('📊 Testing Microsoft Excel connection...');
      
      // Get user profile and available drives
      const userProfile = await this.makeApiCall('/me', {}, integrationId);
      const drives = await this.makeApiCall('/me/drives', {}, integrationId);
      
      console.log('📊 Microsoft Excel connection test successful');
      
      return {
        user: userProfile,
        drives: drives,
        status: 'connected'
      };
    } catch (error) {
      console.error('🔴 Microsoft Excel connection test failed:', error);
      throw error;
    }
  }
}

export default MicrosoftExcelAuthService; 