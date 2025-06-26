import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';
import { completeIntegration, createOAuthAuthParams, disconnectIntegration } from '../../api/integration_api';

interface MicrosoftOutlookMailAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class MicrosoftOutlookMailAuthService {
  private static instance: MicrosoftOutlookMailAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://login.microsoftonline.com/common/oauth2/v2.0',
    clientId: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/microsoft-outlook-mail',
    scopes: [
      'https://graph.microsoft.com/Mail.ReadWrite',
      'https://graph.microsoft.com/Mail.Send',
      'https://graph.microsoft.com/User.Read',
      'offline_access'
    ],
    additionalParameters: {
      response_type: 'code',
      access_type: 'offline',
      prompt: 'consent'
    },
    serviceConfiguration: {
      authorizationEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    },
    customHeaders: {},
    usePKCE: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'safari',
  };

  static getInstance(): MicrosoftOutlookMailAuthService {
    if (!MicrosoftOutlookMailAuthService.instance) {
      MicrosoftOutlookMailAuthService.instance = new MicrosoftOutlookMailAuthService();
    }
    return MicrosoftOutlookMailAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Microsoft client ID not configured. Please set EXPO_PUBLIC_MICROSOFT_CLIENT_ID environment variable.');
    }

    console.log('📧 Microsoft Outlook Mail OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<MicrosoftOutlookMailAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('📧 Starting Microsoft Outlook Mail OAuth flow...');
      console.log('📧 Integration ID:', integrationId);
      console.log('📧 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'microsoft_outlook_mail',
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
      
      console.log('📧 Microsoft Outlook Mail OAuth successful:', {
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
      console.error('🔴 Microsoft Outlook Mail OAuth error:', error);
      throw new Error(`Microsoft Outlook Mail authentication failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<MicrosoftOutlookMailAuthResult> {
    try {
      console.log('📧 Refreshing Microsoft Outlook Mail token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('📧 Microsoft Outlook Mail token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Microsoft Outlook Mail token refresh error:', error);
      throw new Error(`Microsoft Outlook Mail token refresh failed: ${error instanceof Error ? error.message : String(error)}`);
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
        service: 'microsoft_outlook_mail',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `microsoft_outlook_mail_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `microsoft_outlook_mail_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('📧 Microsoft Outlook Mail tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Microsoft Outlook Mail tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<MicrosoftOutlookMailAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`microsoft_outlook_mail_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`microsoft_outlook_mail_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        if (tokenData.refreshToken) {
          console.log('📧 Microsoft Outlook Mail token expired, refreshing...');
          return await this.refreshToken(tokenData.refreshToken);
        } else {
          console.log('📧 Microsoft Outlook Mail token expired and no refresh token available');
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
      console.error('🔴 Error retrieving Microsoft Outlook Mail tokens:', error);
      return null;
    }
  }

  /**
   * Complete integration on backend
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('📧 Completing Microsoft Outlook Mail integration on backend...');
      
      const authParams = createOAuthAuthParams(result);

      await completeIntegration({
        integration_id: integrationId,
        service_name: 'microsoft-outlook-mail',
        service_type: 'oauth',
        auth_params: authParams
      });

      console.log('📧 Microsoft Outlook Mail integration completed on backend');
    } catch (error) {
      console.error('🔴 Error completing Microsoft Outlook Mail integration:', error);
      throw error;
    }
  }

  /**
   * Disconnect integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('📧 Disconnecting Microsoft Outlook Mail integration...');

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`microsoft_outlook_mail_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`microsoft_outlook_mail_tokens_${integrationId}`);
      }

      // Disconnect from backend
      await disconnectIntegration({
        integration_id: integrationId,
        service_name: 'microsoft-outlook-mail'
      });

      console.log('📧 Microsoft Outlook Mail integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Microsoft Outlook Mail integration:', error);
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
        throw new Error(`Microsoft Outlook Mail API call failed: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('🔴 Microsoft Outlook Mail API call error:', error);
      throw error;
    }
  }

  /**
   * Test connection
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      console.log('📧 Testing Microsoft Outlook Mail connection...');
      
      // Get user profile and mailbox info
      const userProfile = await this.makeApiCall('/me', {}, integrationId);
      const mailboxInfo = await this.makeApiCall('/me/mailboxSettings', {}, integrationId);
      
      console.log('📧 Microsoft Outlook Mail connection test successful');
      
      return {
        user: userProfile,
        mailbox: mailboxInfo,
        status: 'connected'
      };
    } catch (error) {
      console.error('🔴 Microsoft Outlook Mail connection test failed:', error);
      throw error;
    }
  }

  /**
   * Send email
   */
  async sendEmail(emailData: {
    to: string;
    subject: string;
    body: string;
    cc?: string;
    bcc?: string;
  }, integrationId: string): Promise<any> {
    try {
      const message = {
        subject: emailData.subject,
        body: {
          contentType: 'HTML',
          content: emailData.body
        },
        toRecipients: [{
          emailAddress: {
            address: emailData.to
          }
        }],
        ...(emailData.cc && {
          ccRecipients: [{
            emailAddress: {
              address: emailData.cc
            }
          }]
        }),
        ...(emailData.bcc && {
          bccRecipients: [{
            emailAddress: {
              address: emailData.bcc
            }
          }]
        })
      };

      return await this.makeApiCall('/me/sendMail', {
        method: 'POST',
        body: JSON.stringify({ message })
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error sending email:', error);
      throw error;
    }
  }

  /**
   * Get emails from inbox
   */
  async getEmails(integrationId: string, folderId?: string): Promise<any> {
    try {
      const endpoint = folderId ? `/me/mailFolders/${folderId}/messages` : '/me/messages';
      return await this.makeApiCall(endpoint, {}, integrationId);
    } catch (error) {
      console.error('🔴 Error getting emails:', error);
      throw error;
    }
  }
}

export default MicrosoftOutlookMailAuthService; 