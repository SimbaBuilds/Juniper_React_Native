import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';

// Google Calendar API configuration - TO BE SET BY DEVELOPER
const GOOGLE_CONFIG = {
  CLIENT_ID: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID, 
  API_KEY: Constants.expoConfig?.extra?.GOOGLE_API_KEY, 
  DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  SCOPES: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events',
  // Proper Android OAuth redirect URI format
  get REDIRECT_URI() {
    const clientId = this.CLIENT_ID;
    if (!clientId) {
      console.warn('GOOGLE_CLIENT_ID not found in environment variables');
      return 'com.googleusercontent.apps.MISSING_CLIENT_ID:/oauth2redirect';
    }
    
    // Extract just the numeric part and app identifier from the full client ID
    // e.g., "123456789-abc123def456.apps.googleusercontent.com" -> "123456789-abc123def456"
    const cleanClientId = clientId.replace('.apps.googleusercontent.com', '');
    
    // Use the format that works with Chrome 117+ and Android intent filters
    // This should match the scheme in AndroidManifest.xml
    return `com.googleusercontent.apps.${cleanClientId}:/oauth2redirect`;
  },
};

interface CalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  location?: string;
  attendees?: Array<{
    email: string;
    displayName?: string;
    responseStatus?: string;
  }>;
}

interface GoogleCalendarAuth {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

interface CalendarListResponse {
  kind: string;
  items: Array<{
    id: string;
    summary: string;
    description?: string;
    primary?: boolean;
    selected?: boolean;
  }>;
}

interface EventsListResponse {
  kind: string;
  items: CalendarEvent[];
  nextPageToken?: string;
}

/**
 * Service for handling Google Calendar integration
 * Uses proper Android OAuth flow with reverse client ID redirect URI
 */
export class GoogleCalendarService {
  private static instance: GoogleCalendarService | null = null;
  private authData: GoogleCalendarAuth | null = null;
  private isInitialized = false;
  private authCallbacks: Array<(isAuthenticated: boolean) => void> = [];

  private constructor() {}

  public static getInstance(): GoogleCalendarService {
    if (!GoogleCalendarService.instance) {
      GoogleCalendarService.instance = new GoogleCalendarService();
    }
    return GoogleCalendarService.instance;
  }

  /**
   * Add a callback to be notified when authentication status changes
   */
  public addAuthCallback(callback: (isAuthenticated: boolean) => void): void {
    this.authCallbacks.push(callback);
  }

  /**
   * Remove an authentication callback
   */
  public removeAuthCallback(callback: (isAuthenticated: boolean) => void): void {
    const index = this.authCallbacks.indexOf(callback);
    if (index > -1) {
      this.authCallbacks.splice(index, 1);
    }
  }

  /**
   * Notify all callbacks of authentication status change
   */
  private notifyAuthCallbacks(): void {
    const isAuth = this.isAuthenticated();
    this.authCallbacks.forEach(callback => {
      try {
        callback(isAuth);
      } catch (error) {
        console.error('Error in auth callback:', error);
      }
    });
  }

  /**
   * Initialize the service
   */
  async initialize(): Promise<void> {
    try {
      // Validate that credentials are configured
      if (!GOOGLE_CONFIG.CLIENT_ID || !GOOGLE_CONFIG.API_KEY) {
        throw new Error('Google Calendar credentials not configured. Please set GOOGLE_CLIENT_ID and GOOGLE_API_KEY environment variables');
      }
      
      // Load stored auth data
      await this.loadAuthData();
      this.isInitialized = true;
      
      console.log('GoogleCalendarService initialized');
      console.log('Using redirect URI:', GOOGLE_CONFIG.REDIRECT_URI);
      console.log('Google Client ID configured:', !!GOOGLE_CONFIG.CLIENT_ID);
      console.log('Google API Key configured:', !!GOOGLE_CONFIG.API_KEY);
    } catch (error) {
      console.error('Error initializing GoogleCalendarService:', error);
      throw error;
    }
  }

  /**
   * Check if the service is authenticated
   */
  isAuthenticated(): boolean {
    return this.authData !== null && this.authData.accessToken !== '';
  }

  /**
   * Start OAuth authentication flow
   * Uses proper Android OAuth redirect URI format
   */
  async authenticate(): Promise<boolean> {
    try {
      if (!this.isInitialized) {
        throw new Error('Service not initialized. Call initialize() first.');
      }

      const authUrl = this.buildAuthUrl();
      
      console.log('=== STARTING OAUTH FLOW ===');
      console.log('Opening OAuth URL:', authUrl);
      console.log('Expected redirect URI:', GOOGLE_CONFIG.REDIRECT_URI);
      console.log('Client ID:', GOOGLE_CONFIG.CLIENT_ID);
      
      // Validate the redirect URI format
      if (!GOOGLE_CONFIG.REDIRECT_URI.includes('com.googleusercontent.apps')) {
        console.warn('⚠️ Redirect URI may not be in the correct format for Chrome 117+');
      }
      
      // Open the OAuth URL in the system browser
      const supported = await Linking.canOpenURL(authUrl);
      if (supported) {
        console.log('✅ Opening OAuth URL in browser...');
        await Linking.openURL(authUrl);
        console.log('✅ OAuth URL opened successfully');
        return true;
      } else {
        throw new Error('Cannot open OAuth URL - URL not supported');
      }
    } catch (error) {
      console.error('❌ Error during authentication:', error);
      return false;
    }
  }

  /**
   * Handle OAuth callback (this would be called from a deep link handler)
   * Expected to be called when the app receives the redirect URI
   */
  async handleAuthCallback(code: string): Promise<boolean> {
    try {
      console.log('=== HANDLING OAUTH CALLBACK ===');
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      // Exchange authorization code for access token
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      this.authData = {
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        expiresAt: Date.now() + (tokenData.expires_in * 1000),
      };

      // Store auth data
      await this.saveAuthData();
      
      console.log('✅ Google Calendar authentication successful');
      this.notifyAuthCallbacks();
      return true;
    } catch (error) {
      console.error('❌ Error handling auth callback:', error);
      return false;
    }
  }

  /**
   * Get list of calendars
   */
  async getCalendars(): Promise<CalendarListResponse> {
    try {
      await this.ensureValidToken();
      
      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/users/me/calendarList?key=${GOOGLE_CONFIG.API_KEY}`,
        {
          headers: {
            'Authorization': `Bearer ${this.authData?.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch calendars: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching calendars:', error);
      throw error;
    }
  }

  /**
   * Get events from a calendar
   */
  async getEvents(
    calendarId: string = 'primary',
    timeMin?: string,
    timeMax?: string,
    maxResults: number = 50
  ): Promise<EventsListResponse> {
    try {
      await this.ensureValidToken();
      
      const params = new URLSearchParams({
        key: GOOGLE_CONFIG.API_KEY,
        singleEvents: 'true',
        orderBy: 'startTime',
        maxResults: maxResults.toString(),
      });

      if (timeMin) params.append('timeMin', timeMin);
      if (timeMax) params.append('timeMax', timeMax);

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`,
        {
          headers: {
            'Authorization': `Bearer ${this.authData?.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch events: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }

  /**
   * Get upcoming events (next 10 events)
   */
  async getUpcomingEvents(maxResults: number = 10): Promise<CalendarEvent[]> {
    try {
      const timeMin = new Date().toISOString();
      const response = await this.getEvents('primary', timeMin, undefined, maxResults);
      return response.items || [];
    } catch (error) {
      console.error('Error fetching upcoming events:', error);
      return [];
    }
  }

  /**
   * Sign out and clear stored credentials
   */
  async signOut(): Promise<void> {
    try {
      this.authData = null;
      await AsyncStorage.removeItem('google_calendar_auth');
      console.log('Google Calendar signed out');
      this.notifyAuthCallbacks();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  // Private helper methods

  private buildAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: GOOGLE_CONFIG.CLIENT_ID!,
      redirect_uri: GOOGLE_CONFIG.REDIRECT_URI,
      response_type: 'code',
      scope: GOOGLE_CONFIG.SCOPES,
      access_type: 'offline',
      prompt: 'consent',
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  }

  private async exchangeCodeForToken(code: string): Promise<any> {
    console.log('🔄 Making token exchange request...');
    
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', GOOGLE_CONFIG.CLIENT_ID!);
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('redirect_uri', GOOGLE_CONFIG.REDIRECT_URI);
    
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Token exchange failed:', response.status, response.statusText);
      
      try {
        const errorJson = JSON.parse(errorText);
        throw new Error(`Token exchange failed: ${errorJson.error} - ${errorJson.error_description || response.statusText}`);
      } catch (parseError) {
        throw new Error(`Token exchange failed: ${response.status} ${response.statusText}`);
      }
    }

    const tokenData = await response.json();
    console.log('✅ Token exchange successful');
    return tokenData;
  }

  private async refreshAccessToken(): Promise<void> {
    if (!this.authData?.refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: GOOGLE_CONFIG.CLIENT_ID!,
        refresh_token: this.authData.refreshToken,
        grant_type: 'refresh_token',
      }),
    });

    if (!response.ok) {
      throw new Error(`Token refresh failed: ${response.statusText}`);
    }

    const tokenData = await response.json();
    this.authData.accessToken = tokenData.access_token;
    this.authData.expiresAt = Date.now() + (tokenData.expires_in * 1000);

    await this.saveAuthData();
  }

  private async ensureValidToken(): Promise<void> {
    if (!this.authData) {
      throw new Error('Not authenticated');
    }

    // Check if token is expired (with 5 minute buffer)
    if (Date.now() >= (this.authData.expiresAt - 300000)) {
      await this.refreshAccessToken();
    }
  }

  private async loadAuthData(): Promise<void> {
    try {
      const stored = await AsyncStorage.getItem('google_calendar_auth');
      if (stored) {
        this.authData = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading auth data:', error);
    }
  }

  private async saveAuthData(): Promise<void> {
    try {
      if (this.authData) {
        await AsyncStorage.setItem('google_calendar_auth', JSON.stringify(this.authData));
      }
    } catch (error) {
      console.error('Error saving auth data:', error);
    }
  }
} 