import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface GmailAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class GmailAuthService {
  private static instance: GmailAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://accounts.google.com',
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/gmail',
    scopes: [
      'https://www.googleapis.com/auth/gmail.modify',
      'https://www.googleapis.com/auth/gmail.send'
    ],
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

  static getInstance(): GmailAuthService {
    if (!GmailAuthService.instance) {
      GmailAuthService.instance = new GmailAuthService();
    }
    return GmailAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Gmail client ID not configured. Please set EXPO_PUBLIC_GOOGLE_CLIENT_ID environment variable.');
    }

    console.log('📧 Gmail OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<GmailAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('📧 Starting Gmail OAuth flow...');
      console.log('📧 Integration ID:', integrationId);
      console.log('📧 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'gmail',
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

      console.log('📧 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('📧 Gmail OAuth successful:', {
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
      console.error('🔴 Gmail OAuth error:', error);
      throw new Error(`Gmail authentication failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<GmailAuthResult> {
    try {
      console.log('📧 Refreshing Gmail token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('📧 Gmail token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Gmail token refresh error:', error);
      throw new Error(`Gmail token refresh failed: ${error instanceof Error ? error.message : String(error)}`);
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
        service: 'gmail',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `gmail_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `gmail_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('📧 Gmail tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Gmail tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<GmailAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`gmail_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`gmail_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('📧 Gmail token expired, attempting refresh...');
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
      console.error('🔴 Error retrieving Gmail tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('📧 Completing Gmail integration with backend...');

      const response = await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'gmail',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scope: result.scopes?.join(' '),
        oauth_result: result
      });

      console.log('📧 Gmail integration completed:', response.data);
    } catch (error) {
      console.error('🔴 Error completing Gmail integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('📧 Disconnecting Gmail integration...');

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
          console.log('📧 Gmail token revoked');
        } catch (revokeError) {
          console.warn('🟡 Could not revoke Gmail token:', revokeError);
        }
      }

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`gmail_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`gmail_tokens_${integrationId}`);
      }

      console.log('📧 Gmail integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Gmail:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Gmail
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Gmail tokens available');
    }

    const response = await fetch(`https://gmail.googleapis.com/gmail/v1${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Gmail API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user's profile
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const profile = await this.makeApiCall('/users/me/profile', {}, integrationId);
      
      return {
        emailAddress: profile.emailAddress,
        messagesTotal: profile.messagesTotal,
        threadsTotal: profile.threadsTotal,
        historyId: profile.historyId
      };
    } catch (error) {
      console.error('🔴 Gmail connection test failed:', error);
      throw error;
    }
  }

  /**
   * Send an email
   */
  async sendEmail(emailData: {
    to: string;
    subject: string;
    body: string;
    cc?: string;
    bcc?: string;
  }, integrationId: string): Promise<any> {
    try {
      const email = [
        `To: ${emailData.to}`,
        emailData.cc ? `Cc: ${emailData.cc}` : '',
        emailData.bcc ? `Bcc: ${emailData.bcc}` : '',
        `Subject: ${emailData.subject}`,
        '',
        emailData.body
      ].filter(Boolean).join('\n');

      const base64Email = Buffer.from(email).toString('base64url');

      return await this.makeApiCall('/users/me/messages/send', {
        method: 'POST',
        body: JSON.stringify({
          raw: base64Email
        })
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error sending email:', error);
      throw error;
    }
  }
}

export default GmailAuthService; 