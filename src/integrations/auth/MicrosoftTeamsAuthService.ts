import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface MicrosoftTeamsAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class MicrosoftTeamsAuthService {
  private static instance: MicrosoftTeamsAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://login.microsoftonline.com/common/oauth2/v2.0',
    clientId: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/microsoft-teams',
    scopes: [
      'https://graph.microsoft.com/Chat.ReadWrite',
      'https://graph.microsoft.com/Team.ReadBasic.All',
      'https://graph.microsoft.com/Channel.ReadBasic.All',
      'https://graph.microsoft.com/TeamMember.Read.All',
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

  static getInstance(): MicrosoftTeamsAuthService {
    if (!MicrosoftTeamsAuthService.instance) {
      MicrosoftTeamsAuthService.instance = new MicrosoftTeamsAuthService();
    }
    return MicrosoftTeamsAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Microsoft client ID not configured. Please set EXPO_PUBLIC_MICROSOFT_CLIENT_ID environment variable.');
    }

    console.log('👥 Microsoft Teams OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<MicrosoftTeamsAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('👥 Starting Microsoft Teams OAuth flow...');
      console.log('👥 Integration ID:', integrationId);
      console.log('👥 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'microsoft_teams',
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

      console.log('👥 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('👥 Microsoft Teams OAuth successful:', {
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
      console.error('🔴 Microsoft Teams OAuth error:', error);
      throw new Error(`Microsoft Teams authentication failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<MicrosoftTeamsAuthResult> {
    try {
      console.log('👥 Refreshing Microsoft Teams token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('👥 Microsoft Teams token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Microsoft Teams token refresh error:', error);
      throw new Error(`Microsoft Teams token refresh failed: ${error instanceof Error ? error.message : String(error)}`);
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
        service: 'microsoft_teams',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `microsoft_teams_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `microsoft_teams_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('👥 Microsoft Teams tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Microsoft Teams tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<MicrosoftTeamsAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`microsoft_teams_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`microsoft_teams_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        if (tokenData.refreshToken) {
          console.log('👥 Microsoft Teams token expired, refreshing...');
          return await this.refreshToken(tokenData.refreshToken);
        } else {
          console.log('👥 Microsoft Teams token expired and no refresh token available');
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
      console.error('🔴 Error retrieving Microsoft Teams tokens:', error);
      return null;
    }
  }

  /**
   * Complete integration on backend
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('👥 Completing Microsoft Teams integration on backend...');
      
      const response = await api.post('/api/complete_integration', {
        integration_id: integrationId,
        service: 'microsoft_teams',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scopes: result.scopes,
        token_type: result.tokenType || 'Bearer',
        id_token: result.idToken
      });

      console.log('👥 Microsoft Teams integration completed on backend');
    } catch (error) {
      console.error('🔴 Error completing Microsoft Teams integration:', error);
      throw error;
    }
  }

  /**
   * Disconnect integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('👥 Disconnecting Microsoft Teams integration...');

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`microsoft_teams_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`microsoft_teams_tokens_${integrationId}`);
      }

      // Call backend to clean up
      try {
        await api.delete(`/api/integrations/${integrationId}/disconnect`);
      } catch (error) {
        console.warn('⚠️ Failed to disconnect on backend:', error);
      }

      console.log('👥 Microsoft Teams integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Microsoft Teams integration:', error);
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
        throw new Error(`Microsoft Teams API call failed: ${response.status} ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('🔴 Microsoft Teams API call error:', error);
      throw error;
    }
  }

  /**
   * Test connection
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      console.log('👥 Testing Microsoft Teams connection...');
      
      // Get user profile and teams
      const userProfile = await this.makeApiCall('/me', {}, integrationId);
      const teams = await this.makeApiCall('/me/joinedTeams', {}, integrationId);
      
      console.log('👥 Microsoft Teams connection test successful');
      
      return {
        user: userProfile,
        teams: teams,
        status: 'connected'
      };
    } catch (error) {
      console.error('🔴 Microsoft Teams connection test failed:', error);
      throw error;
    }
  }

  /**
   * Get user's teams
   */
  async getTeams(integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall('/me/joinedTeams', {}, integrationId);
    } catch (error) {
      console.error('🔴 Error getting teams:', error);
      throw error;
    }
  }

  /**
   * Get channels for a team
   */
  async getChannels(teamId: string, integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall(`/teams/${teamId}/channels`, {}, integrationId);
    } catch (error) {
      console.error('🔴 Error getting channels:', error);
      throw error;
    }
  }

  /**
   * Send message to a channel
   */
  async sendChannelMessage(teamId: string, channelId: string, message: string, integrationId: string): Promise<any> {
    try {
      const messageData = {
        body: {
          content: message,
          contentType: 'text'
        }
      };

      return await this.makeApiCall(`/teams/${teamId}/channels/${channelId}/messages`, {
        method: 'POST',
        body: JSON.stringify(messageData)
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error sending Teams message:', error);
      throw error;
    }
  }

  /**
   * Get user's chats
   */
  async getChats(integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall('/me/chats', {}, integrationId);
    } catch (error) {
      console.error('🔴 Error getting chats:', error);
      throw error;
    }
  }
}

export default MicrosoftTeamsAuthService; 