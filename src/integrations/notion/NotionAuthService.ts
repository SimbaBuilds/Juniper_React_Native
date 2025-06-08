import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { supabase } from '../../supabase/supabase';

// Notion API configuration
const NOTION_CONFIG = {
  CLIENT_ID: Constants.expoConfig?.extra?.NOTION_CLIENT_ID,
  CLIENT_SECRET: Constants.expoConfig?.extra?.NOTION_CLIENT_SECRET,
  get REDIRECT_URI() {
    const clientId = this.CLIENT_ID;
    if (!clientId) {
      console.warn('NOTION_CLIENT_ID not found in environment variables');
      return 'com.notion.mobilejarvisnative://oauth2redirect';
    }
    return `com.notion.mobilejarvisnative://oauth2redirect`;
  },
};

interface NotionAuth {
  accessToken: string;
  botId: string;
  workspaceName: string | null;
  workspaceIcon: string | null;
  workspaceId: string;
  owner: any;
  duplicatedTemplateId: string | null;
}

/**
 * Notion authentication service
 * Handles OAuth flow and token management for Notion integration
 */
export class NotionAuthService {
  private static instance: NotionAuthService | null = null;
  private authData: NotionAuth | null = null;
  private isInitialized = false;
  private authCallbacks: Array<(isAuthenticated: boolean) => void> = [];

  private constructor() {}

  public static getInstance(): NotionAuthService {
    if (!NotionAuthService.instance) {
      NotionAuthService.instance = new NotionAuthService();
    }
    return NotionAuthService.instance;
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
      if (!NOTION_CONFIG.CLIENT_ID || !NOTION_CONFIG.CLIENT_SECRET) {
        throw new Error('Notion credentials not configured. Please set NOTION_CLIENT_ID and NOTION_CLIENT_SECRET environment variables');
      }
      
      await this.loadAuthData();
      
      // Notion tokens don't expire like OAuth 2.0 tokens, but we still check for database loading
      if (this.authData) {
        await this.loadIntegrationFromSupabase();
      }
      
      this.isInitialized = true;
      
      console.log('NotionAuthService initialized');
      console.log('Using redirect URI:', NOTION_CONFIG.REDIRECT_URI);
    } catch (error) {
      console.error('Error initializing NotionAuthService:', error);
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
   * Get current access token
   */
  async getAccessToken(): Promise<string> {
    if (!this.authData?.accessToken) {
      throw new Error('Not authenticated with Notion');
    }
    return this.authData.accessToken;
  }

  /**
   * Get workspace information
   */
  getWorkspaceInfo(): { name: string | null; icon: string | null; id: string } | null {
    if (!this.authData) return null;
    
    return {
      name: this.authData.workspaceName,
      icon: this.authData.workspaceIcon,
      id: this.authData.workspaceId,
    };
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
      
      console.log('=== STARTING NOTION OAUTH FLOW ===');
      console.log('Opening OAuth URL:', authUrl);
      console.log('Expected redirect URI:', NOTION_CONFIG.REDIRECT_URI);
      
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
      console.log('=== HANDLING NOTION OAUTH CALLBACK ===');
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      this.authData = {
        accessToken: tokenData.access_token,
        botId: tokenData.bot_id,
        workspaceName: tokenData.workspace_name,
        workspaceIcon: tokenData.workspace_icon,
        workspaceId: tokenData.workspace_id,
        owner: tokenData.owner,
        duplicatedTemplateId: tokenData.duplicated_template_id,
      };

      await this.saveAuthData();
      await this.saveIntegrationToSupabase(tokenData);
      
      console.log('✅ Notion authentication successful');
      this.notifyAuthCallbacks();
      return true;
    } catch (error) {
      console.error('❌ Error handling auth callback:', error);
      return false;
    }
  }

  /**
   * Sign out and clear stored credentials
   */
  async signOut(): Promise<void> {
    try {
      await this.deactivateIntegrationInSupabase();
      
      this.authData = null;
      await AsyncStorage.removeItem('notion_auth');
      
      console.log('✅ Notion signed out completely');
      this.notifyAuthCallbacks();
    } catch (error) {
      console.error('❌ Error during sign out:', error);
      
      this.authData = null;
      try {
        await AsyncStorage.removeItem('notion_auth');
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
      client_id: NOTION_CONFIG.CLIENT_ID!,
      response_type: 'code',
      owner: 'user',
      redirect_uri: NOTION_CONFIG.REDIRECT_URI,
    });

    return `https://api.notion.com/v1/oauth/authorize?${params}`;
  }

  private async exchangeCodeForToken(code: string): Promise<any> {
    const requestBody = JSON.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: NOTION_CONFIG.REDIRECT_URI,
    });

    const credentials = btoa(`${NOTION_CONFIG.CLIENT_ID}:${NOTION_CONFIG.CLIENT_SECRET}`);

    const response = await fetch('https://api.notion.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Notion-Version': '2022-06-28',
        'User-Agent': 'MobileJarvisNative/1.0',
      },
      body: requestBody,
    });

    const responseText = await response.text();
    
    console.log('📥 Token exchange response:', {
      status: response.status,
      statusText: response.statusText,
    });

    if (!response.ok) {
      console.error('❌ Token exchange failed:', {
        status: response.status,
        statusText: response.statusText,
        response_body: responseText
      });
      
      throw new Error(`Token exchange failed: ${response.status} ${response.statusText} - ${responseText}`);
    }

    let tokenData;
    try {
      tokenData = JSON.parse(responseText);
    } catch (parseError) {
      throw new Error('Token exchange returned invalid JSON response');
    }

    console.log('✅ Token exchange successful');
    return tokenData;
  }

  private async loadAuthData(): Promise<void> {
    try {
      const stored = await AsyncStorage.getItem('notion_auth');
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
        await AsyncStorage.setItem('notion_auth', JSON.stringify(this.authData));
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

      // Deactivate any existing Notion integrations
      await supabase
        .from('integrations')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('service_name', 'notion')
        .eq('is_active', true);

      // Insert new Notion integration
      const { error } = await supabase
        .from('integrations')
        .insert({
          user_id: user.id,
          type: 'built_in',
          service_name: 'notion',
          access_token: tokenData.access_token,
          is_active: true,
          configuration: {
            bot_id: tokenData.bot_id,
            workspace_name: tokenData.workspace_name,
            workspace_icon: tokenData.workspace_icon,
            workspace_id: tokenData.workspace_id,
            owner: tokenData.owner,
            duplicated_template_id: tokenData.duplicated_template_id,
          },
        });

      if (error) {
        throw error;
      }

      console.log('✅ Notion integration saved to Supabase');
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
        .eq('service_name', 'notion')
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.log('No active Notion integration found in Supabase');
          return;
        }
        throw error;
      }

      if (data && data.configuration) {
        this.authData = {
          accessToken: data.access_token,
          botId: data.configuration.bot_id,
          workspaceName: data.configuration.workspace_name,
          workspaceIcon: data.configuration.workspace_icon,
          workspaceId: data.configuration.workspace_id,
          owner: data.configuration.owner,
          duplicatedTemplateId: data.configuration.duplicated_template_id,
        };
        
        await this.saveAuthData();
        console.log('✅ Notion integration loaded from Supabase');
      }
    } catch (error) {
      console.error('❌ Error loading integration from Supabase:', error);
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
        .eq('service_name', 'notion')
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      console.log('✅ Notion integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating integration in Supabase:', error);
    }
  }
} 