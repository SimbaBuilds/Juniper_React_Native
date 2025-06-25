import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface GoogleMeetAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
}

export class GoogleMeetAuthService {
  private static instance: GoogleMeetAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://accounts.google.com',
    clientId: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/google-meet',
    scopes: [
      'https://www.googleapis.com/auth/meetings',
      'https://www.googleapis.com/auth/calendar.events'
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
    authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
  };

  static getInstance(): GoogleMeetAuthService {
    if (!GoogleMeetAuthService.instance) {
      GoogleMeetAuthService.instance = new GoogleMeetAuthService();
    }
    return GoogleMeetAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Google Meet client ID not configured. Please set EXPO_PUBLIC_GOOGLE_CLIENT_ID environment variable.');
    }

    console.log('🎥 Google Meet OAuth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<GoogleMeetAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('🎥 Starting Google Meet OAuth flow...');
      console.log('🎥 Integration ID:', integrationId);
      console.log('🎥 Redirect URL:', this.config.redirectUrl);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'google-meet',
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

      console.log('🎥 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);
      
      console.log('🎥 Google Meet OAuth successful:', {
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
      console.error('🔴 Google Meet OAuth error:', error);
      throw new Error(`Google Meet authentication failed: ${error.message}`);
    }
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string): Promise<GoogleMeetAuthResult> {
    try {
      console.log('🎥 Refreshing Google Meet token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      console.log('🎥 Google Meet token refresh successful');

      return {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt: new Date(result.accessTokenExpirationDate).getTime(),
      };

    } catch (error) {
      console.error('🔴 Google Meet token refresh error:', error);
      throw new Error(`Google Meet token refresh failed: ${error.message}`);
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
        service: 'google-meet',
        scope: result.scopes,
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `google_meet_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `google_meet_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('🎥 Google Meet tokens stored securely');
    } catch (error) {
      console.error('🔴 Error storing Google Meet tokens:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<GoogleMeetAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`google_meet_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`google_meet_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired
      const now = new Date().getTime();
      const expiresAt = new Date(tokenData.expiresAt).getTime();
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
        console.log('🎥 Google Meet token expired, attempting refresh...');
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
      console.error('🔴 Error retrieving Google Meet tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('🎥 Completing Google Meet integration with backend...');

      const response = await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'google-meet',
        access_token: result.accessToken,
        refresh_token: result.refreshToken,
        expires_at: result.accessTokenExpirationDate,
        scope: result.scopes,
        oauth_result: result
      });

      console.log('🎥 Google Meet integration completed:', response.data);
    } catch (error) {
      console.error('🔴 Error completing Google Meet integration:', error);
      // Don't throw here - the OAuth was successful, backend completion is secondary
    }
  }

  /**
   * Revoke tokens and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🎥 Disconnecting Google Meet integration...');

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
          console.log('🎥 Google Meet token revoked');
        } catch (revokeError) {
          console.warn('🟡 Could not revoke Google Meet token:', revokeError);
        }
      }

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`google_meet_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`google_meet_tokens_${integrationId}`);
      }

      console.log('🎥 Google Meet integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Google Meet:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call (primarily through Calendar API for Meet links)
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Google Meet tokens available');
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
      throw new Error(`Google Meet API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user's calendars (Meet requires Calendar access)
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const calendars = await this.makeApiCall('/users/me/calendarList', {}, integrationId);
      
      return {
        calendarCount: calendars.items?.length || 0,
        calendars: calendars.items?.slice(0, 3), // Return first 3 calendars
        meetingCapable: true
      };
    } catch (error) {
      console.error('🔴 Google Meet connection test failed:', error);
      throw error;
    }
  }

  /**
   * Create a calendar event with Google Meet link
   */
  async createMeetingEvent(eventData: {
    summary: string;
    description?: string;
    start: { dateTime: string; timeZone?: string };
    end: { dateTime: string; timeZone?: string };
    attendees?: { email: string }[];
  }, calendarId: string = 'primary', integrationId: string): Promise<any> {
    try {
      const eventWithMeet = {
        ...eventData,
        conferenceData: {
          createRequest: {
            requestId: `meet-${Date.now()}`, // Unique request ID
            conferenceSolutionKey: {
              type: 'hangoutsMeet'
            }
          }
        }
      };

      return await this.makeApiCall(`/calendars/${calendarId}/events?conferenceDataVersion=1`, {
        method: 'POST',
        body: JSON.stringify(eventWithMeet)
      }, integrationId);
    } catch (error) {
      console.error('🔴 Error creating Google Meet event:', error);
      throw error;
    }
  }

  /**
   * Create an instant meeting (creates a calendar event for now)
   */
  async createInstantMeeting(title: string = 'Instant Meeting', integrationId: string): Promise<any> {
    try {
      const now = new Date();
      const end = new Date(now.getTime() + 60 * 60 * 1000); // 1 hour from now

      return await this.createMeetingEvent({
        summary: title,
        description: 'Instant meeting created via mobile app',
        start: { 
          dateTime: now.toISOString(),
          timeZone: 'UTC'
        },
        end: { 
          dateTime: end.toISOString(),
          timeZone: 'UTC'
        }
      }, 'primary', integrationId);
    } catch (error) {
      console.error('🔴 Error creating instant Google Meet:', error);
      throw error;
    }
  }

  /**
   * Get upcoming meetings with Meet links
   */
  async getUpcomingMeetings(calendarId: string = 'primary', maxResults: number = 10, integrationId: string): Promise<any> {
    try {
      const now = new Date().toISOString();
      const events = await this.makeApiCall(
        `/calendars/${calendarId}/events?timeMin=${now}&maxResults=${maxResults}&singleEvents=true&orderBy=startTime`,
        {},
        integrationId
      );

      // Filter events that have Google Meet links
      const meetingEvents = events.items?.filter((event: any) => 
        event.conferenceData?.entryPoints?.some((entry: any) => entry.entryPointType === 'video')
      ) || [];

      return {
        ...events,
        items: meetingEvents
      };
    } catch (error) {
      console.error('🔴 Error getting upcoming Google Meet events:', error);
      throw error;
    }
  }
}

export default GoogleMeetAuthService; 