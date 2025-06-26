import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface GoogleCalendarAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class GoogleCalendarAuthService {
  private static instance: GoogleCalendarAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://accounts.google.com',
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/google-calendar',
    scopes: ['https://www.googleapis.com/auth/calendar'],
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

  static getInstance(): GoogleCalendarAuthService {
    if (!GoogleCalendarAuthService.instance) {
      GoogleCalendarAuthService.instance = new GoogleCalendarAuthService();
    }
    return GoogleCalendarAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Google Calendar client ID not configured. Please set EXPO_PUBLIC_GOOGLE_CLIENT_ID environment variable.');
    }

    console.log('📅 Google Calendar OAuth Service initialized');
    this.isInitialized = true;
  }

  async authenticate(integrationId: string): Promise<GoogleCalendarAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('�� Starting Google Calendar OAuth flow...');

      const stateData = {
        integration_id: integrationId,
        service: 'google-calendar',
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

      const result: AuthorizeResult = await authorize(configWithState);
      
      await this.storeTokens(result, integrationId);
      await this.completeIntegration(result, integrationId);

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || '',
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
        scope: result.scopes?.join(' ')
      };

    } catch (error) {
      console.error('🔴 Google Calendar OAuth error:', error);
      throw new Error(`Google Calendar authentication failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  async refreshToken(refreshToken: string): Promise<GoogleCalendarAuthResult> {
    try {
      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };
    } catch (error) {
      console.error('🔴 Google Calendar token refresh error:', error);
      throw new Error(`Google Calendar token refresh failed: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  private async storeTokens(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      const tokenData = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        expiresAt: result.accessTokenExpirationDate,
        integrationId,
        service: 'google-calendar',
        scope: result.scopes?.join(' '),
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `google_calendar_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `google_calendar_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }
    } catch (error) {
      console.error('🔴 Error storing Google Calendar tokens:', error);
      throw error;
    }
  }

  async getStoredTokens(integrationId: string): Promise<GoogleCalendarAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`google_calendar_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`google_calendar_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) {
        if (tokenData.refreshToken) {
          return await this.refreshToken(tokenData.refreshToken);
        } else {
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
      console.error('🔴 Error retrieving Google Calendar tokens:', error);
      return null;
    }
  }

  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'google-calendar',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scope: result.scopes?.join(' '),
        oauth_result: result
      });
    } catch (error) {
      console.error('🔴 Error completing Google Calendar integration:', error);
    }
  }

  async disconnect(integrationId: string): Promise<void> {
    try {
      const tokens = await this.getStoredTokens(integrationId);
      
      if (tokens) {
        try {
          await fetch('https://oauth2.googleapis.com/revoke', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `token=${tokens.accessToken}`
          });
        } catch (revokeError) {
          console.warn('🟡 Could not revoke Google Calendar token:', revokeError);
        }
      }

      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`google_calendar_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`google_calendar_tokens_${integrationId}`);
      }
    } catch (error) {
      console.error('🔴 Error disconnecting Google Calendar:', error);
      throw error;
    }
  }

  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Google Calendar tokens available');
    }

    const response = await fetch(`https://www.googleapis.com/calendar/v3${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${tokens.accessToken}`,
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Google Calendar API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  async testConnection(integrationId: string): Promise<any> {
    try {
      const calendars = await this.makeApiCall('/users/me/calendarList', {}, integrationId);
      
      return {
        calendarCount: calendars.items?.length || 0,
        calendars: calendars.items?.slice(0, 5)
      };
    } catch (error) {
      console.error('🔴 Google Calendar connection test failed:', error);
      throw error;
    }
  }
}

export default GoogleCalendarAuthService;
