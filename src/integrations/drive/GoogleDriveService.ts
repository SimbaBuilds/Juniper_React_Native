import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { supabase } from '../../supabase/supabase';

// Google Drive API configuration
const GOOGLE_DRIVE_CONFIG = {
  CLIENT_ID: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID,
  API_KEY: Constants.expoConfig?.extra?.GOOGLE_API_KEY,
  SCOPES: 'https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.metadata.readonly',
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

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime: string;
  createdTime: string;
  webViewLink: string;
  iconLink?: string;
  thumbnailLink?: string;
  owners: Array<{
    displayName: string;
    emailAddress: string;
  }>;
  lastModifyingUser: {
    displayName: string;
    emailAddress: string;
  };
}

interface FilesListResponse {
  kind: string;
  files: DriveFile[];
  nextPageToken?: string;
}

interface GoogleDriveAuth {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

/**
 * Service for handling Google Drive integration
 */
export class GoogleDriveService {
  private static instance: GoogleDriveService | null = null;
  private authData: GoogleDriveAuth | null = null;
  private isInitialized = false;
  private authCallbacks: Array<(isAuthenticated: boolean) => void> = [];

  private constructor() {}

  public static getInstance(): GoogleDriveService {
    if (!GoogleDriveService.instance) {
      GoogleDriveService.instance = new GoogleDriveService();
    }
    return GoogleDriveService.instance;
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
      if (!GOOGLE_DRIVE_CONFIG.CLIENT_ID || !GOOGLE_DRIVE_CONFIG.API_KEY) {
        throw new Error('Google Drive credentials not configured. Please set GOOGLE_CLIENT_ID and GOOGLE_API_KEY environment variables');
      }
      
      await this.loadAuthData();
      
      if (!this.authData || Date.now() >= (this.authData.expiresAt - 300000)) {
        await this.loadIntegrationFromSupabase();
      }
      
      this.isInitialized = true;
      
      console.log('GoogleDriveService initialized');
      console.log('Using redirect URI:', GOOGLE_DRIVE_CONFIG.REDIRECT_URI);
    } catch (error) {
      console.error('Error initializing GoogleDriveService:', error);
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
      
      console.log('=== STARTING GOOGLE DRIVE OAUTH FLOW ===');
      console.log('Opening OAuth URL:', authUrl);
      
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
      console.log('=== HANDLING GOOGLE DRIVE OAUTH CALLBACK ===');
      
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
      
      console.log('✅ Google Drive authentication successful');
      this.notifyAuthCallbacks();
      return true;
    } catch (error) {
      console.error('❌ Error handling auth callback:', error);
      return false;
    }
  }

  /**
   * Get recent files from Google Drive
   */
  async getRecentFiles(maxResults: number = 10): Promise<DriveFile[]> {
    try {
      await this.ensureValidToken();
      
      const params = new URLSearchParams({
        key: GOOGLE_DRIVE_CONFIG.API_KEY,
        pageSize: maxResults.toString(),
        orderBy: 'modifiedTime desc',
        fields: 'files(id,name,mimeType,size,modifiedTime,createdTime,webViewLink,iconLink,thumbnailLink,owners,lastModifyingUser)',
        q: 'trashed=false',
      });

      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?${params}`,
        {
          headers: {
            'Authorization': `Bearer ${this.authData?.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch files: ${response.statusText}`);
      }

      const data: FilesListResponse = await response.json();
      return data.files || [];
    } catch (error) {
      console.error('❌ Error fetching recent files:', error);
      
      if (error instanceof Error) {
        if (error.message.includes('401') || error.message.includes('Unauthorized')) {
          throw new Error('Authentication expired. Please sign in again to access your Google Drive.');
        }
        
        if (error.message.includes('403') || error.message.includes('Forbidden')) {
          throw new Error('Access denied. Please check your Google Drive permissions.');
        }
      }
      
      console.warn('⚠️ Returning empty files array due to error');
      return [];
    }
  }

  /**
   * Get Drive storage info
   */
  async getStorageInfo(): Promise<{ limit: string; usage: string; usageInDrive: string } | null> {
    try {
      await this.ensureValidToken();
      
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/about?fields=storageQuota&key=${GOOGLE_DRIVE_CONFIG.API_KEY}`,
        {
          headers: {
            'Authorization': `Bearer ${this.authData?.accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch storage info: ${response.statusText}`);
      }

      const data = await response.json();
      return data.storageQuota || null;
    } catch (error) {
      console.error('Error fetching storage info:', error);
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
      await AsyncStorage.removeItem('google_drive_auth');
      
      console.log('✅ Google Drive signed out completely');
      this.notifyAuthCallbacks();
    } catch (error) {
      console.error('❌ Error during sign out:', error);
      
      this.authData = null;
      try {
        await AsyncStorage.removeItem('google_drive_auth');
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
      client_id: GOOGLE_DRIVE_CONFIG.CLIENT_ID!,
      redirect_uri: GOOGLE_DRIVE_CONFIG.REDIRECT_URI,
      response_type: 'code',
      scope: GOOGLE_DRIVE_CONFIG.SCOPES,
      access_type: 'offline',
      prompt: 'consent',
    });

    return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  }

  private async exchangeCodeForToken(code: string): Promise<any> {
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', GOOGLE_DRIVE_CONFIG.CLIENT_ID!);
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('redirect_uri', GOOGLE_DRIVE_CONFIG.REDIRECT_URI);
    
    return this.makeTokenRequest(requestBody, 'token exchange');
  }

  private async refreshAccessToken(): Promise<void> {
    if (!this.authData?.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const requestBody = new URLSearchParams();
      requestBody.append('client_id', GOOGLE_DRIVE_CONFIG.CLIENT_ID!);
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
      throw new Error('Not authenticated. Please sign in to access Google Drive.');
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
      const stored = await AsyncStorage.getItem('google_drive_auth');
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
        await AsyncStorage.setItem('google_drive_auth', JSON.stringify(this.authData));
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

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      await supabase
        .from('google_drive_integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('is_active', true);

      const { error } = await supabase
        .from('google_drive_integrations')
        .insert({
          user_id: user.id,
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: expiresAt.toISOString(),
          scope: GOOGLE_DRIVE_CONFIG.SCOPES,
          is_active: true,
        });

      if (error) {
        throw error;
      }

      console.log('✅ Google Drive integration saved to Supabase');
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
        .from('google_drive_integrations')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.log('No active Google Drive integration found in Supabase');
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
          console.log('✅ Google Drive integration loaded from Supabase');
        } else {
          console.log('Google Drive integration found but expired, will need re-authentication');
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
        .from('google_drive_integrations')
        .update(updateData)
        .eq('user_id', user.id)
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Google Drive tokens updated in Supabase');
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
        .from('google_drive_integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Google Drive integration deactivated in Supabase');
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