import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { supabase } from '../supabase/supabase';

// Google API configuration - basic sign-in only
const GOOGLE_CONFIG = {
  CLIENT_ID: Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID,
  API_KEY: Constants.expoConfig?.extra?.GOOGLE_API_KEY,
  // Basic sign-in scopes only - individual services handle their own scopes
  SCOPES: [
    'openid',
    'email', 
    'profile',
  ].join(' '),
  get REDIRECT_URI() {
    const siteUrl = Constants.expoConfig?.extra?.EXPO_PUBLIC_SITE_URL;
    if (!siteUrl) {
      console.warn('EXPO_PUBLIC_SITE_URL not found in environment variables');
      return 'https://hightower-ai.com/oauth/google/callback';
    }
    return `${siteUrl}/oauth/google/callback`;
  },
  get CLIENT_SECRET() {
    return Constants.expoConfig?.extra?.GOOGLE_CLIENT_SECRET;
  },
};

interface GoogleAuth {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope: string;
}

/**
 * Unified Google authentication service for basic sign-in
 * Individual integration services handle their own specific scopes
 */
export class GoogleAuthService {
  private static instance: GoogleAuthService | null = null;
  private authData: GoogleAuth | null = null;
  private isInitialized = false;
  private authCallbacks: Array<(isAuthenticated: boolean) => void> = [];

  private constructor() {}

  public static getInstance(): GoogleAuthService {
    if (!GoogleAuthService.instance) {
      GoogleAuthService.instance = new GoogleAuthService();
    }
    return GoogleAuthService.instance;
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
      if (!GOOGLE_CONFIG.CLIENT_ID || !GOOGLE_CONFIG.API_KEY) {
        throw new Error('Google credentials not configured. Please set GOOGLE_CLIENT_ID and GOOGLE_API_KEY environment variables');
      }
      
      await this.loadAuthData();
      
      if (!this.authData || Date.now() >= (this.authData.expiresAt - 300000)) {
        await this.loadIntegrationFromSupabase();
      }
      
      this.isInitialized = true;
      
      console.log('GoogleAuthService initialized');
      console.log('Using HTTPS redirect URI:', GOOGLE_CONFIG.REDIRECT_URI);
      console.log('Basic sign-in scopes:', GOOGLE_CONFIG.SCOPES);
    } catch (error) {
      console.error('Error initializing GoogleAuthService:', error);
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
   * Get current access token (ensures it's valid)
   */
  async getAccessToken(): Promise<string> {
    await this.ensureValidToken();
    if (!this.authData?.accessToken) {
      throw new Error('Not authenticated with Google');
    }
    return this.authData.accessToken;
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
      
      console.log('=== STARTING GOOGLE OAUTH FLOW ===');
      console.log('Opening OAuth URL:', authUrl);
      console.log('Expected HTTPS redirect URI:', GOOGLE_CONFIG.REDIRECT_URI);
      
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
   * Handle HTTPS OAuth callback (NEW METHOD)
   * Called from App.tsx when HTTPS redirect is detected
   */
  async handleAuthCallback(code: string): Promise<boolean> {
    try {
      console.log('=== HANDLING GOOGLE HTTPS OAUTH CALLBACK ===');
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      // Exchange code for tokens first
      const tokenData = await this.exchangeCodeForToken(code);
      
      // Get user info from Google
      const userInfo = await this.getGoogleUserInfo(tokenData.access_token);
      
      // Try using the ID token for Supabase auth
      if (tokenData.id_token) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: 'google',
          token: tokenData.id_token,
        });
        
        if (error) {
          console.error('❌ Error creating Supabase session with ID token:', error);
          throw error;
        }
        
        if (data.user) {
          console.log('✅ Google authentication successful - Supabase session created');
          
          // Store additional auth data locally
          this.authData = {
            accessToken: tokenData.access_token,
            refreshToken: tokenData.refresh_token,
            expiresAt: Date.now() + (tokenData.expires_in * 1000),
            scope: tokenData.scope || GOOGLE_CONFIG.SCOPES,
          };
          
          await this.saveAuthData();
          this.notifyAuthCallbacks();
          return true;
        }
      } else {
        console.warn('❌ No ID token received from Google');
        throw new Error('No ID token received from Google OAuth response');
      }
      
      return false;
    } catch (error) {
      console.error('❌ Error handling HTTPS auth callback:', error);
      return false;
    }
  }

  /**
   * Exchange authorization code for tokens and save them
   */
  private async exchangeCodeAndSaveTokens(code: string): Promise<boolean> {
    try {
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      this.authData = {
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token,
        expiresAt: Date.now() + (tokenData.expires_in * 1000),
        scope: tokenData.scope || GOOGLE_CONFIG.SCOPES,
      };

      await this.saveAuthData();
      await this.saveIntegrationToSupabase(tokenData);
      
      console.log('✅ Google authentication successful');
      this.notifyAuthCallbacks();
      return true;
    } catch (error) {
      console.error('❌ Error exchanging code for tokens:', error);
      return false;
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
      await AsyncStorage.removeItem('google_unified_auth');
      
      console.log('✅ Google signed out completely');
      this.notifyAuthCallbacks();
    } catch (error) {
      console.error('❌ Error during sign out:', error);
      
      this.authData = null;
      try {
        await AsyncStorage.removeItem('google_unified_auth');
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
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', GOOGLE_CONFIG.CLIENT_ID!);
    if (GOOGLE_CONFIG.CLIENT_SECRET) {
      requestBody.append('client_secret', GOOGLE_CONFIG.CLIENT_SECRET);
    }
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
      const requestBody = new URLSearchParams();
      requestBody.append('client_id', GOOGLE_CONFIG.CLIENT_ID!);
      if (GOOGLE_CONFIG.CLIENT_SECRET) {
        requestBody.append('client_secret', GOOGLE_CONFIG.CLIENT_SECRET);
      }
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
      throw new Error('Not authenticated. Please sign in to access Google services.');
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
      const stored = await AsyncStorage.getItem('google_unified_auth');
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
        await AsyncStorage.setItem('google_unified_auth', JSON.stringify(this.authData));
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
      
      // Deactivate any existing Google integrations
      await supabase
        .from('integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('service_name', 'google')
        .eq('is_active', true);

      // Insert new basic Google sign-in integration
      const { error } = await supabase
        .from('integrations')
        .insert({
          user_id: user.id,
          type: 'built_in',
          service_name: 'google',
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: expiresAt.toISOString(),
          scope: tokenData.scope || GOOGLE_CONFIG.SCOPES,
          is_active: true,
          configuration: {
            auth_type: 'basic_signin',
            scopes: GOOGLE_CONFIG.SCOPES.split(' '),
          },
        });

      if (error) {
        throw error;
      }

      console.log('✅ Google basic sign-in integration saved to Supabase');
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
        .eq('service_name', 'google')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.log('No active Google integration found in Supabase');
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
            scope: data.scope || GOOGLE_CONFIG.SCOPES,
          };
          
          await this.saveAuthData();
          console.log('✅ Google integration loaded from Supabase');
        } else {
          console.log('Google integration found but expired, will need re-authentication');
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
        .eq('service_name', 'google')
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Google tokens updated in Supabase');
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
        .eq('service_name', 'google')
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Google integration deactivated in Supabase');
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
        }).toString(),
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

  private async getGoogleUserInfo(accessToken: string): Promise<any> {
    try {
      const response = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to get user info: ${response.status} ${response.statusText}`);
      }

      const userInfo = await response.json();
      console.log('📋 Google user info retrieved:', {
        id: userInfo.id,
        email: userInfo.email,
        name: userInfo.name,
        verified_email: userInfo.verified_email
      });

      return userInfo;
    } catch (error) {
      console.error('❌ Error getting Google user info:', error);
      throw error;
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