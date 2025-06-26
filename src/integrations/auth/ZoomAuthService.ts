import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface ZoomAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
  accountId?: string;
  userId?: string;
}

export class ZoomAuthService {
  private static instance: ZoomAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://zoom.us',
    clientId: process.env.EXPO_PUBLIC_ZOOM_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/zoom',
    scopes: [
      'meeting:write',
      'meeting:read',
      'user:read',
      'webinar:write',
      'webinar:read',
      'recording:read',
      'chat_message:write',
      'chat_message:read',
      'chat_channel:read',
      'chat_channel:write'
    ],
    additionalParameters: {
      response_type: 'code',
      access_type: 'offline'
    },
    customHeaders: {},
    usePKCE: true,
    skipCodeExchange: false,
    iosCustomBrowser: 'safari',
    androidAllowCustomBrowsers: ['chromeCustomTab'],
    serviceConfiguration: {
      authorizationEndpoint: 'https://zoom.us/oauth/authorize',
      tokenEndpoint: 'https://zoom.us/oauth/token',
    },
  };

  static getInstance(): ZoomAuthService {
    if (!ZoomAuthService.instance) {
      ZoomAuthService.instance = new ZoomAuthService();
    }
    return ZoomAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Zoom client ID not configured. Please set EXPO_PUBLIC_ZOOM_CLIENT_ID environment variable.');
    }

    console.log('🔵 Zoom OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<ZoomAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('🔵 Starting Zoom OAuth flow...');
      console.log('🔵 Integration ID:', integrationId);
      console.log('🔵 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'zoom',
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

      console.log('🔵 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]',
        scopes: this.config.scopes
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('🔵 Zoom OAuth successful:', {
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
        scope: Array.isArray(result.scopes) ? result.scopes.join(' ') : result.scopes
      };

    } catch (error) {
      console.error('🔴 Zoom OAuth error:', error);
      throw new Error(`Zoom authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<ZoomAuthResult> {
    try {
      console.log('🔵 Refreshing Zoom token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('🔵 Zoom token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Zoom token refresh error:', error);
      throw new Error(`Zoom token refresh failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
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
        service: 'zoom',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `zoom_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `zoom_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('🔵 Zoom tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Zoom tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<ZoomAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`zoom_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`zoom_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('🔵 Zoom token expired, attempting refresh...');
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
      console.error('🔴 Error retrieving Zoom tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('🔵 Completing Zoom integration with backend...');

      const response = await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'zoom',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scope: result.scopes?.join(' '),
        oauth_result: result
      });

      console.log('🔵 Zoom integration completed:', response.data);
    } catch (error) {
      console.error('🔴 Error completing Zoom integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🔵 Disconnecting Zoom integration...');

      const tokens = await this.getStoredTokens(integrationId);
      
      // Note: With PKCE, we don't have a client secret to revoke tokens server-side
      // Tokens will expire naturally and we clear local storage below
      if (tokens) {
        console.log('🔵 Zoom tokens will expire naturally (PKCE flow)');
      }

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`zoom_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`zoom_tokens_${integrationId}`);
      }

      console.log('🔵 Zoom integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Zoom:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Zoom
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Zoom tokens available');
    }

    const response = await fetch(`https://api.zoom.us/v2${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Zoom API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user's profile
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const userProfile = await this.makeApiCall('/users/me', {}, integrationId);
      
      return {
        user: {
          id: userProfile.id,
          email: userProfile.email,
          firstName: userProfile.first_name,
          lastName: userProfile.last_name,
          accountId: userProfile.account_id,
          pmi: userProfile.pmi
        },
        account: userProfile.account_id
      };
    } catch (error) {
      console.error('🔴 Zoom connection test failed:', error);
      throw error;
    }
  }

  /**
   * Create a meeting
   */
  async createMeeting(meetingData: {
    topic: string;
    type?: number; // 1=instant, 2=scheduled, 3=recurring, 8=recurring fixed
    start_time?: string; // ISO 8601 format
    duration?: number; // minutes
    agenda?: string;
    password?: string;
    settings?: {
      host_video?: boolean;
      participant_video?: boolean;
      join_before_host?: boolean;
      mute_upon_entry?: boolean;
      use_pmi?: boolean;
      auto_recording?: 'local' | 'cloud' | 'none';
    };
  }, integrationId: string): Promise<any> {
    try {
      const meetingPayload = {
        topic: meetingData.topic,
        type: meetingData.type || 2, // Default to scheduled
        start_time: meetingData.start_time,
        duration: meetingData.duration || 60,
        agenda: meetingData.agenda || '',
        password: meetingData.password,
        settings: {
          host_video: meetingData.settings?.host_video ?? true,
          participant_video: meetingData.settings?.participant_video ?? true,
          join_before_host: meetingData.settings?.join_before_host ?? false,
          mute_upon_entry: meetingData.settings?.mute_upon_entry ?? false,
          use_pmi: meetingData.settings?.use_pmi ?? false,
          auto_recording: meetingData.settings?.auto_recording ?? 'none',
          ...meetingData.settings
        }
      };

      return await this.makeApiCall('/users/me/meetings', {
        method: 'POST',
        body: JSON.stringify(meetingPayload)
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error creating Zoom meeting:', error);
      throw error;
    }
  }

  /**
   * Get user's meetings
   */
  async getMeetings(type: 'scheduled' | 'live' | 'upcoming' = 'scheduled', integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall(`/users/me/meetings?type=${type}`, {}, integrationId);
    } catch (error) {
      console.error('🔴 Error getting Zoom meetings:', error);
      throw error;
    }
  }

  /**
   * Update a meeting
   */
  async updateMeeting(meetingId: string, meetingData: any, integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall(`/meetings/${meetingId}`, {
        method: 'PATCH',
        body: JSON.stringify(meetingData)
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error updating Zoom meeting:', error);
      throw error;
    }
  }

  /**
   * Delete a meeting
   */
  async deleteMeeting(meetingId: string, integrationId: string): Promise<void> {
    try {
      await this.makeApiCall(`/meetings/${meetingId}`, {
        method: 'DELETE'
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error deleting Zoom meeting:', error);
      throw error;
    }
  }

  /**
   * Get meeting recordings
   */
  async getMeetingRecordings(meetingId: string, integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall(`/meetings/${meetingId}/recordings`, {}, integrationId);
    } catch (error) {
      console.error('🔴 Error getting Zoom meeting recordings:', error);
      throw error;
    }
  }

  /**
   * Send chat message
   */
  async sendChatMessage(message: {
    message: string;
    to_channel?: string;
    to_contact?: string;
  }, integrationId: string): Promise<any> {
    try {
      return await this.makeApiCall('/chat/users/me/messages', {
        method: 'POST',
        body: JSON.stringify(message)
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error sending Zoom chat message:', error);
      throw error;
    }
  }

  /**
   * Create a webinar
   */
  async createWebinar(webinarData: {
    topic: string;
    type?: number; // 5=webinar, 6=recurring webinar, 9=recurring webinar fixed
    start_time?: string;
    duration?: number;
    agenda?: string;
    password?: string;
    settings?: any;
  }, integrationId: string): Promise<any> {
    try {
      const webinarPayload = {
        topic: webinarData.topic,
        type: webinarData.type || 5, // Default to webinar
        start_time: webinarData.start_time,
        duration: webinarData.duration || 60,
        agenda: webinarData.agenda || '',
        password: webinarData.password,
        settings: webinarData.settings || {}
      };

      return await this.makeApiCall('/users/me/webinars', {
        method: 'POST',
        body: JSON.stringify(webinarPayload)
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error creating Zoom webinar:', error);
      throw error;
    }
  }
}

export default ZoomAuthService; 