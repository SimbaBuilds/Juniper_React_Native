import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { supabase } from '../../supabase/supabase';
import type { Integration } from '../../supabase/tables';

// Gmail API configuration
const GMAIL_CONFIG = {
  CLIENT_ID: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID,
  API_KEY: Constants.expoConfig?.extra?.GOOGLE_API_KEY,
  SCOPES: 'https://www.googleapis.com/auth/gmail.readonly',
  get REDIRECT_URI() {
    const clientId = this.CLIENT_ID;
    if (!clientId) {
      console.warn('GOOGLE_CLIENT_ID not found in environment variables');
      return 'com.googleusercontent.apps.MISSING_CLIENT_ID:/oauth2redirect';
    }
    
    const cleanClientId = clientId.replace('.apps.googleusercontent.com', '');
    return `com.googleusercontent.apps.${cleanClientId}:/oauth2redirect`;
  },
};

interface GmailMessage {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  payload: {
    headers: Array<{
      name: string;
      value: string;
    }>;
    parts?: Array<{
      mimeType: string;
      body: {
        data?: string;
      };
    }>;
    body?: {
      data?: string;
    };
  };
  internalDate: string;
}

interface MessagesListResponse {
  messages: Array<{ id: string; threadId: string }>;
  nextPageToken?: string;
  resultSizeEstimate: number;
}

interface GmailAuth {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

/**
 * Service for handling Gmail integration using Google Gmail API
 */
export class GmailService {
  private static instance: GmailService | null = null;
  private authData: GmailAuth | null = null;
  private isInitialized = false;
  private authCallbacks: Array<(isAuthenticated: boolean) => void> = [];

  private constructor() {}

  public static getInstance(): GmailService {
    if (!GmailService.instance) {
      GmailService.instance = new GmailService();
    }
    return GmailService.instance;
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
      if (!GMAIL_CONFIG.CLIENT_ID || !GMAIL_CONFIG.API_KEY) {
        throw new Error('Gmail credentials not configured. Please set GOOGLE_CLIENT_ID and GOOGLE_API_KEY environment variables');
      }
      
      await this.loadAuthData();
      
      if (!this.authData || Date.now() >= (this.authData.expiresAt - 300000)) {
        await this.loadIntegrationFromSupabase();
      }
      
      this.isInitialized = true;
      
      console.log('GmailService initialized');
      console.log('Using redirect URI:', GMAIL_CONFIG.REDIRECT_URI);
      console.log('Google Client ID configured:', !!GMAIL_CONFIG.CLIENT_ID);
    } catch (error) {
      console.error('Error initializing GmailService:', error);
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
   */
  async authenticate(): Promise<boolean> {
    try {
      if (!this.isInitialized) {
        throw new Error('Service not initialized. Call initialize() first.');
      }

      const authUrl = this.buildAuthUrl();
      
      console.log('=== STARTING GMAIL OAUTH FLOW ===');
      console.log('Opening OAuth URL:', authUrl);
      console.log('Expected redirect URI:', GMAIL_CONFIG.REDIRECT_URI);
      
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
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string): Promise<boolean> {
    try {
      console.log('=== HANDLING GMAIL OAUTH CALLBACK ===');
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      this.authData = {
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        expiresAt: Date.now() + (tokenData.expires_in * 1000),
      };

      await this.saveAuthData();
      await this.saveIntegrationToSupabase(tokenData);
      
      console.log('✅ Gmail authentication successful');
      this.notifyAuthCallbacks();
      return true;
    } catch (error) {
      console.error('❌ Error handling auth callback:', error);
      return false;
    }
  }

  /**
   * Get recent unread emails
   */
  async getRecentUnreadEmails(maxResults: number = 5): Promise<GmailMessage[]> {
    try {
      await this.ensureValidToken();
      
      // First, get the list of unread message IDs
      const listResponse = await fetch(
        `https://www.googleapis.com/gmail/v1/users/me/messages?q=is:unread&maxResults=${maxResults}&key=${GMAIL_CONFIG.API_KEY}`,
        {
          headers: {
            'Authorization': `Bearer ${this.authData?.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!listResponse.ok) {
        throw new Error(`Failed to fetch message list: ${listResponse.statusText}`);
      }

      const listData: MessagesListResponse = await listResponse.json();
      
      if (!listData.messages || listData.messages.length === 0) {
        return [];
      }

      // Get full message details for each message
      const messages: GmailMessage[] = [];
      for (const messageRef of listData.messages) {
        try {
          const messageResponse = await fetch(
            `https://www.googleapis.com/gmail/v1/users/me/messages/${messageRef.id}?key=${GMAIL_CONFIG.API_KEY}`,
            {
              headers: {
                'Authorization': `Bearer ${this.authData?.accessToken}`,
                'Content-Type': 'application/json',
              },
            }
          );

          if (messageResponse.ok) {
            const message: GmailMessage = await messageResponse.json();
            messages.push(message);
          }
        } catch (messageError) {
          console.error(`Error fetching message ${messageRef.id}:`, messageError);
          // Continue with other messages
        }
      }

      return messages;
    } catch (error) {
      console.error('❌ Error fetching unread emails:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('401') || error.message.includes('Unauthorized')) {
          throw new Error('Authentication expired. Please sign in again to access your Gmail.');
        }
        
        if (error.message.includes('403') || error.message.includes('Forbidden')) {
          throw new Error('Access denied. Please check your Gmail permissions.');
        }
      }
      
      console.warn('⚠️ Returning empty emails array due to error');
      return [];
    }
  }

  /**
   * Get the user's email address
   */
  async getUserProfile(): Promise<{ emailAddress: string } | null> {
    try {
      await this.ensureValidToken();
      
      const response = await fetch(
        `https://www.googleapis.com/gmail/v1/users/me/profile?key=${GMAIL_CONFIG.API_KEY}`,
        {
          headers: {
            'Authorization': `Bearer ${this.authData?.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch user profile: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  /**
   * Sign out and clear stored credentials
   */
  async signOut(): Promise<void> {
    try {
      await this.revokeTokens();
      await this.deactivateIntegrationInSupabase();
      
      this.authData = null;
      await AsyncStorage.removeItem('gmail_auth');
      
      console.log('✅ Gmail signed out completely');
      this.notifyAuthCallbacks();
    } catch (error) {
      console.error('❌ Error during sign out:', error);
      
      this.authData = null;
      try {
        await AsyncStorage.removeItem('gmail_auth');
      } catch (storageError) {
        console.error('❌ Error clearing local storage:', storageError);
      }
      
      this.notifyAuthCallbacks();
      throw error;
    }
  }

  // Private helper methods

  private buildAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: GMAIL_CONFIG.CLIENT_ID!,
      redirect_uri: GMAIL_CONFIG.REDIRECT_URI,
      response_type: 'code',
      scope: GMAIL_CONFIG.SCOPES,
      access_type: 'offline',
      prompt: 'consent',
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  }

  private async exchangeCodeForToken(code: string): Promise<any> {
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', GMAIL_CONFIG.CLIENT_ID!);
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('redirect_uri', GMAIL_CONFIG.REDIRECT_URI);
    
    return this.makeTokenRequest(requestBody, 'token exchange');
  }

  private async refreshAccessToken(): Promise<void> {
    if (!this.authData?.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const requestBody = new URLSearchParams();
      requestBody.append('client_id', GMAIL_CONFIG.CLIENT_ID!);
      requestBody.append('refresh_token', this.authData.refreshToken);
      requestBody.append('grant_type', 'refresh_token');
      
      const tokenData = await this.makeTokenRequest(requestBody, 'token refresh');
      
      this.authData.accessToken = tokenData.access_token;
      this.authData.expiresAt = Date.now() + (tokenData.expires_in * 1000);

      if (tokenData.refresh_token) {
        console.log('🔄 Refresh token rotated for enhanced security');
        this.authData.refreshToken = tokenData.refresh_token;
      }

      await this.saveAuthData();
      await this.updateTokensInSupabase(tokenData);
      
      console.log('✅ Access token refreshed successfully');
    } catch (error) {
      console.error('❌ Token refresh failed:', error);
      throw new Error(`Failed to refresh authentication. Please try signing in again.`);
    }
  }

  private async ensureValidToken(): Promise<void> {
    if (!this.authData) {
      throw new Error('Not authenticated. Please sign in to access Gmail.');
    }

    const bufferTime = 5 * 60 * 1000;
    const isTokenExpired = Date.now() >= (this.authData.expiresAt - bufferTime);
    
    if (isTokenExpired) {
      console.log('🔄 Access token expired, attempting refresh...');
      await this.refreshAccessToken();
    }
  }

  private async loadAuthData(): Promise<void> {
    try {
      const stored = await AsyncStorage.getItem('gmail_auth');
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
        await AsyncStorage.setItem('gmail_auth', JSON.stringify(this.authData));
      }
    } catch (error) {
      console.error('Error saving auth data:', error);
    }
  }

  private async saveIntegrationToSupabase(tokenData: any): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      // Get user's email address
      const profile = await this.getUserProfile();
      const emailAddress = profile?.emailAddress || '';

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      await supabase
        .from('integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('integration_type', 'gmail')
        .eq('is_active', true);

      const { error } = await supabase
        .from('integrations')
        .insert({
          user_id: user.id,
          integration_type: 'gmail',
          type: 'built_in',
          service_name: 'Gmail',
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: expiresAt.toISOString(),
          scope: GMAIL_CONFIG.SCOPES,
          is_active: true,
          email_address: emailAddress,
          sync_settings: {},
          configuration: {},
        });

      if (error) {
        throw error;
      }

      console.log('✅ Gmail integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving integration to Supabase:', error);
    }
  }

  private async loadIntegrationFromSupabase(): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.log('User not authenticated with Supabase, skipping integration load');
        return;
      }

      const { data, error } = await supabase
        .from('integrations')
        .select('*')
        .eq('user_id', user.id)
        .eq('integration_type', 'gmail')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.log('No active Gmail integration found in Supabase');
          return;
        }
        throw error;
      }

      if (data) {
        const expiresAt = new Date(data.expires_at).getTime();
        
        if (Date.now() < (expiresAt - 300000)) {
          this.authData = {
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
            expiresAt: expiresAt,
          };
          
          await this.saveAuthData();
          console.log('✅ Gmail integration loaded from Supabase');
        } else {
          console.log('Gmail integration found but expired, will need re-authentication');
        }
      }
    } catch (error) {
      console.error('❌ Error loading integration from Supabase:', error);
    }
  }

  private async updateTokensInSupabase(tokenData: any): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during token refresh');
        return;
      }

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      const updateData: any = {
        access_token: tokenData.access_token,
        expires_at: expiresAt.toISOString(),
      };

      if (tokenData.refresh_token) {
        updateData.refresh_token = tokenData.refresh_token;
      }

      const { error } = await supabase
        .from('integrations')
        .update(updateData)
        .eq('user_id', user.id)
        .eq('integration_type', 'gmail')
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Gmail tokens updated in Supabase');
    } catch (error) {
      console.error('❌ Error updating tokens in Supabase:', error);
    }
  }

  private async deactivateIntegrationInSupabase(): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during sign out');
        return;
      }

      const { error } = await supabase
        .from('integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('integration_type', 'gmail')
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Gmail integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating integration in Supabase:', error);
    }
  }

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
        console.warn('⚠️ Token revocation failed with Google, but continuing with local cleanup');
      }
    } catch (error) {
      console.warn('⚠️ Error during token revocation:', error);
    }
  }

  private async makeTokenRequest(requestBody: URLSearchParams, operation: string): Promise<any> {
    console.log(`🔄 Making ${operation} request...`);
    
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'User-Agent': 'MobileJarvisNative/1.0',
      },
      body: requestBody.toString(),
    });

    const responseText = await response.text();
    
    console.log(`📥 ${operation} response:`, {
      status: response.status,
      statusText: response.statusText,
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
        throw new Error(`${operation} failed: ${response.status} ${response.statusText} - ${responseText}`);
      }

      throw new Error(`${operation} failed: ${errorData.error} - ${errorData.error_description || 'Unknown error'}`);
    }

    let tokenData;
    try {
      tokenData = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error(`${operation} returned invalid JSON response`);
    }

    console.log(`✅ ${operation} successful`);
    return tokenData;
  }
} 