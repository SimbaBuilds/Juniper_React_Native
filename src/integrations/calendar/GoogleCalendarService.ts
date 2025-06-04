import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { supabase } from '../../supabase/supabase';
import type { GoogleCalendarIntegration } from '../../supabase/tables';

// Google Calendar API configuration - TO BE SET BY DEVELOPER
const GOOGLE_CONFIG = {
  CLIENT_ID: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID, 
  API_KEY: Constants.expoConfig?.extra?.GOOGLE_API_KEY, 
  DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  SCOPES: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/contacts.readonly', 
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
      
      // Load stored auth data from local storage first
      await this.loadAuthData();
      
      // Try to load from Supabase if no local data or if local data is expired
      if (!this.authData || Date.now() >= (this.authData.expiresAt - 300000)) {
        await this.loadIntegrationFromSupabase();
      }
      
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

      // Store auth data locally
      await this.saveAuthData();
      
      // Save integration to Supabase
      await this.saveIntegrationToSupabase(tokenData);
      
      console.log('✅ Google Calendar authentication successful');
      this.notifyAuthCallbacks();
      return true;
    } catch (error) {
      console.error('❌ Error handling auth callback:', error);
      return false;
    }
  }

  /**
   * Save the Google Calendar integration to Supabase
   */
  private async saveIntegrationToSupabase(tokenData: any): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      // First, deactivate any existing integrations for this user
      await supabase
        .from('google_calendar_integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('is_active', true);

      // Insert the new integration
      const { error } = await supabase
        .from('google_calendar_integrations')
        .insert({
          user_id: user.id,
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: expiresAt.toISOString(),
          scope: GOOGLE_CONFIG.SCOPES,
          is_active: true,
        });

      if (error) {
        throw error;
      }

      console.log('✅ Google Calendar integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving integration to Supabase:', error);
      // Don't throw here - we don't want to fail the entire auth flow if Supabase fails
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
   * Get upcoming events (next 5 events)
   * Includes enhanced error handling for 2024 best practices
   */
  async getUpcomingEvents(maxResults: number = 5): Promise<CalendarEvent[]> {
    try {
      const timeMin = new Date().toISOString();
      const response = await this.getEvents('primary', timeMin, undefined, maxResults);
      return response.items || [];
    } catch (error) {
      console.error('❌ Error fetching upcoming events:', error);
      
      // Check if this is an authentication error
      if (error instanceof Error) {
        if (error.message.includes('Not authenticated') || 
            error.message.includes('Your session has expired')) {
          // Re-throw authentication errors as-is for UI to handle
          throw error;
        }
        
        if (error.message.includes('401') || error.message.includes('Unauthorized')) {
          throw new Error('Authentication expired. Please sign in again to access your calendar.');
        }
        
        if (error.message.includes('403') || error.message.includes('Forbidden')) {
          throw new Error('Access denied. Please check your Google Calendar permissions.');
        }
        
        if (error.message.includes('404')) {
          throw new Error('Calendar not found. Please check your Google Calendar settings.');
        }
      }
      
      // For other errors, provide a generic user-friendly message
      console.warn('⚠️ Returning empty events array due to error');
      return [];
    }
  }

  /**
   * Revoke access token with Google (2024 security best practice)
   * This should be called before clearing local tokens
   */
  private async revokeTokens(): Promise<void> {
    if (!this.authData?.accessToken) {
      console.log('No access token to revoke');
      return;
    }

    try {
      console.log('🔒 Revoking access token with Google...');
      
      const response = await fetch('https://oauth2.googleapis.com/revoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          token: this.authData.accessToken,
        }),
      });

      if (response.ok) {
        console.log('✅ Token revoked successfully with Google');
      } else {
        // Don't throw error here - we still want to clear local data
        // Token might already be expired/invalid
        console.warn('⚠️ Token revocation failed with Google, but continuing with local cleanup');
      }
    } catch (error) {
      // Don't throw error here - we still want to clear local data
      console.warn('⚠️ Error during token revocation:', error);
    }
  }

  /**
   * Sign out and clear stored credentials
   * Includes proper token revocation following 2024 best practices
   */
  async signOut(): Promise<void> {
    try {
      // First revoke tokens with Google
      await this.revokeTokens();
      
      // Deactivate integration in Supabase
      await this.deactivateIntegrationInSupabase();
      
      // Clear local data
      this.authData = null;
      await AsyncStorage.removeItem('google_calendar_auth');
      
      console.log('✅ Google Calendar signed out completely');
      this.notifyAuthCallbacks();
    } catch (error) {
      console.error('❌ Error during sign out:', error);
      
      // Even if there are errors, clear local data to prevent stuck state
      this.authData = null;
      try {
        await AsyncStorage.removeItem('google_calendar_auth');
      } catch (storageError) {
        console.error('❌ Error clearing local storage:', storageError);
      }
      
      this.notifyAuthCallbacks();
      throw error;
    }
  }

  /**
   * Deactivate the Google Calendar integration in Supabase
   */
  private async deactivateIntegrationInSupabase(): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during sign out');
        return;
      }

      const { error } = await supabase
        .from('google_calendar_integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Google Calendar integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating integration in Supabase:', error);
      // Don't throw here - we still want to clear local data even if Supabase fails
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
    // Construct the request body using proper URLSearchParams formatting
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', GOOGLE_CONFIG.CLIENT_ID!);
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('redirect_uri', GOOGLE_CONFIG.REDIRECT_URI);
    
    return this.makeTokenRequest(requestBody, 'token exchange');
  }

  private async refreshAccessToken(): Promise<void> {
    if (!this.authData?.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      // Construct the request body using proper URLSearchParams formatting
      const requestBody = new URLSearchParams();
      requestBody.append('client_id', GOOGLE_CONFIG.CLIENT_ID!);
      requestBody.append('refresh_token', this.authData.refreshToken);
      requestBody.append('grant_type', 'refresh_token');
      
      // Use centralized token request method
      const tokenData = await this.makeTokenRequest(requestBody, 'token refresh');
      
      // Update access token
      this.authData.accessToken = tokenData.access_token;
      this.authData.expiresAt = Date.now() + (tokenData.expires_in * 1000);

      // Handle refresh token rotation (2024 security best practice)
      // Google may provide a new refresh token for enhanced security
      if (tokenData.refresh_token) {
        console.log('🔄 Refresh token rotated for enhanced security');
        this.authData.refreshToken = tokenData.refresh_token;
      }

      // Save updated tokens locally
      await this.saveAuthData();
      
      // Update tokens in Supabase
      await this.updateTokensInSupabase(tokenData);
      
      console.log('✅ Access token refreshed successfully');
      console.log(`🕐 New token expires at: ${new Date(this.authData.expiresAt).toISOString()}`);
    } catch (error) {
      console.error('❌ Token refresh failed:', error);
      
      // If this is our custom error about expired session, don't wrap it
      if (error instanceof Error && error.message.includes('Your session has expired')) {
        throw error;
      }
      
      // If this is about unsupported grant type, provide specific guidance
      if (error instanceof Error && error.message.includes('unsupported_grant_type')) {
        throw error;
      }
      
      // For other errors, provide a user-friendly message
      throw new Error(`Failed to refresh authentication. Please try signing in again.`);
    }
  }

  /**
   * Update the access token in Supabase after refresh
   * Supports refresh token rotation for enhanced security (2024 best practice)
   */
  private async updateTokensInSupabase(tokenData: any): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during token refresh');
        return;
      }

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      // Prepare update data - always include access token and expiry
      const updateData: any = {
        access_token: tokenData.access_token,
        expires_at: expiresAt.toISOString(),
      };

      // Include refresh token if it was rotated (2024 security enhancement)
      if (tokenData.refresh_token) {
        updateData.refresh_token = tokenData.refresh_token;
        console.log('💾 Saving rotated refresh token to Supabase');
      }

      const { error } = await supabase
        .from('google_calendar_integrations')
        .update(updateData)
        .eq('user_id', user.id)
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Google Calendar tokens updated in Supabase');
      if (tokenData.refresh_token) {
        console.log('🔄 Refresh token rotation completed');
      }
    } catch (error) {
      console.error('❌ Error updating tokens in Supabase:', error);
      // Don't throw here - we still want the local refresh to succeed
      // But log the error for debugging
      console.warn('⚠️ Token refresh succeeded locally but failed to sync with Supabase');
    }
  }

  private async ensureValidToken(): Promise<void> {
    if (!this.authData) {
      throw new Error('Not authenticated. Please sign in to access Google Calendar.');
    }

    // Check if token is expired (with 5 minute buffer for network latency)
    const bufferTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    const isTokenExpired = Date.now() >= (this.authData.expiresAt - bufferTime);
    
    if (isTokenExpired) {
      console.log('🔄 Access token expired, attempting refresh...');
      try {
        await this.refreshAccessToken();
      } catch (error) {
        console.error('❌ Failed to refresh token:', error);
        
        // If refresh failed due to invalid/expired refresh token, 
        // the refreshAccessToken method will have already cleared auth data
        // and thrown a user-friendly error message
        throw error;
      }
    } else {
      // Token is still valid, log remaining time for debugging
      const remainingMinutes = Math.floor((this.authData.expiresAt - Date.now()) / (1000 * 60));
      console.log(`✅ Access token valid for ${remainingMinutes} more minutes`);
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

  /**
   * Load the Google Calendar integration from Supabase
   */
  private async loadIntegrationFromSupabase(): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.log('User not authenticated with Supabase, skipping integration load');
        return;
      }

      const { data, error } = await supabase
        .from('google_calendar_integrations')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows found - user hasn't connected Google Calendar yet
          console.log('No active Google Calendar integration found in Supabase');
          return;
        }
        throw error;
      }

      if (data) {
        const expiresAt = new Date(data.expires_at).getTime();
        
        // Check if the token is still valid (with 5 minute buffer)
        if (Date.now() < (expiresAt - 300000)) {
          this.authData = {
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            expiresAt: expiresAt,
          };
          
          // Also save to local storage for faster access
          await this.saveAuthData();
          
          console.log('✅ Google Calendar integration loaded from Supabase');
        } else {
          console.log('Google Calendar integration found but expired, will need re-authentication');
        }
      }
    } catch (error) {
      console.error('❌ Error loading integration from Supabase:', error);
      // Don't throw here - we can still function with local storage or require re-auth
    }
  }

  /**
   * Validate OAuth 2.0 request parameters (2024 best practice)
   * This helps catch configuration issues before making API calls
   */
  private validateOAuthConfig(): void {
    if (!GOOGLE_CONFIG.CLIENT_ID) {
      throw new Error('Google OAuth client ID is not configured. Please check your environment configuration.');
    }
    
    if (!GOOGLE_CONFIG.CLIENT_ID.includes('.apps.googleusercontent.com')) {
      console.warn('⚠️ Client ID format may be incorrect. Expected format: *.apps.googleusercontent.com');
    }
    
    if (!GOOGLE_CONFIG.REDIRECT_URI) {
      throw new Error('Google OAuth redirect URI is not configured. Please check your environment configuration.');
    }
    
    console.log('✅ OAuth configuration validated:', {
      client_id_configured: !!GOOGLE_CONFIG.CLIENT_ID,
      redirect_uri_configured: !!GOOGLE_CONFIG.REDIRECT_URI,
      scopes_configured: !!GOOGLE_CONFIG.SCOPES
    });
  }

  /**
   * Enhanced token request with better debugging (2024 best practice)
   */
  private async makeTokenRequest(requestBody: URLSearchParams, operation: string): Promise<any> {
    // Validate configuration before making request
    this.validateOAuthConfig();
    
    console.log(`🔄 Making ${operation} request...`);
    console.log('📤 Request details:', {
      endpoint: 'https://oauth2.googleapis.com/token',
      method: 'POST',
      content_type: 'application/x-www-form-urlencoded',
      body_params: Object.fromEntries(requestBody.entries())
    });
    
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'User-Agent': 'MobileJarvisNative/1.0', // 2024 best practice: identify your app
      },
      body: requestBody.toString(),
    });

    const responseText = await response.text();
    
    console.log(`📥 ${operation} response:`, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      body_length: responseText.length
    });

    if (!response.ok) {
      console.error(`❌ ${operation} failed:`, {
        status: response.status,
        statusText: response.statusText,
        response_body: responseText
      });
      
      let errorData;
      try {
        errorData = JSON.parse(responseText);
      } catch (parseError) {
        console.error('❌ Failed to parse error response as JSON:', parseError);
        throw new Error(`${operation} failed: ${response.status} ${response.statusText} - ${responseText}`);
      }

      // Enhanced error handling for 2024 OAuth 2.0 specifications
      this.handleOAuthError(errorData, operation, requestBody);
    }

    let tokenData;
    try {
      tokenData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('❌ Failed to parse success response as JSON:', parseError);
      throw new Error(`${operation} returned invalid JSON response`);
    }

    console.log(`✅ ${operation} successful:`, {
      access_token_exists: !!tokenData.access_token,
      refresh_token_exists: !!tokenData.refresh_token,
      expires_in: tokenData.expires_in,
      token_type: tokenData.token_type,
      scope: tokenData.scope
    });
    
    return tokenData;
  }

  /**
   * Centralized OAuth error handling (2024 best practice)
   */
  private handleOAuthError(errorData: any, operation: string, requestBody: URLSearchParams): never {
    console.error(`❌ OAuth error in ${operation}:`, errorData);

    // Standard OAuth 2.0 error codes with 2024 best practice handling
    switch (errorData.error) {
      case 'invalid_grant':
        if (operation.includes('refresh')) {
          console.warn('🔒 Refresh token invalid - clearing auth data');
          // Don't await here as we're in an error path
          this.signOut().catch(console.error);
          this.notifyAuthCallbacks();
          throw new Error('Your session has expired. Please sign in again to continue accessing Google Calendar.');
        } else {
          throw new Error('Authorization code has expired or is invalid. Please try signing in again.');
        }

      case 'invalid_client':
        console.error('🔒 OAuth client configuration error - check client ID and secrets');
        throw new Error('Authentication configuration error. Please contact support.');

      case 'unauthorized_client':
        console.error('🔒 Client not authorized for this grant type');
        throw new Error('Application authorization error. Please contact support.');

      case 'unsupported_grant_type':
        console.error('🔒 Unsupported grant type error - request formatting issue detected');
        console.error('📋 Debug info:', {
          operation,
          requestBodyString: requestBody.toString(),
          requestBodyEntries: Object.fromEntries(requestBody.entries()),
          endpoint: 'https://oauth2.googleapis.com/token'
        });
        throw new Error('Authentication request format error. Please try signing in again.');

      case 'invalid_request':
        console.error('🔒 Invalid request - malformed or missing parameters');
        console.error('📋 Request details:', Object.fromEntries(requestBody.entries()));
        throw new Error('Authentication request error. Please try signing in again.');

      case 'access_denied':
        throw new Error('Access was denied. Please grant the necessary permissions to use Google Calendar.');

      case 'server_error':
      case 'temporarily_unavailable':
        throw new Error('Google authentication service is temporarily unavailable. Please try again later.');

      default:
        console.error('🔒 Unknown OAuth error:', errorData);
        throw new Error(`${operation} failed: ${errorData.error} - ${errorData.error_description || 'Unknown error'}`);
    }
  }
} 