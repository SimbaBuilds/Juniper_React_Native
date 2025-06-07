import { Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { supabase } from '../../supabase/supabase';
import type { Integration } from '../../supabase/tables';

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
  BASE_URL: 'https://api.notion.com/v1',
  SCOPES: '', // Notion doesn't use traditional scopes - permissions are granted during auth flow
};

interface NotionPage {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: any;
  icon: any;
  parent: {
    type: string;
    database_id?: string;
    page_id?: string;
  };
  archived: boolean;
  properties: {
    [key: string]: any;
  };
  url: string;
  public_url?: string;
}

interface NotionDatabase {
  object: string;
  id: string;
  cover: any;
  icon: any;
  created_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  last_edited_time: string;
  title: Array<{
    type: string;
    text: {
      content: string;
      link: any;
    };
    annotations: any;
    plain_text: string;
    href: any;
  }>;
  description: any[];
  is_inline: boolean;
  properties: {
    [key: string]: any;
  };
  parent: {
    type: string;
    page_id?: string;
  };
  url: string;
  archived: boolean;
  request_id: string;
}

interface NotionTask {
  id: string;
  title: string;
  status: string;
  dueDate: string | null;
  priority: string | null;
  url: string;
  created_time: string;
  last_edited_time: string;
}

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
 * Service for handling Notion integration using OAuth 2.0
 */
export class NotionService {
  private static instance: NotionService | null = null;
  private authData: NotionAuth | null = null;
  private isInitialized = false;
  private authCallbacks: Array<(isAuthenticated: boolean) => void> = [];

  private constructor() {}

  public static getInstance(): NotionService {
    if (!NotionService.instance) {
      NotionService.instance = new NotionService();
    }
    return NotionService.instance;
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
      
      if (!this.authData) {
        await this.loadIntegrationFromSupabase();
      }
      
      this.isInitialized = true;
      
      console.log('NotionService initialized');
      console.log('Using redirect URI:', NOTION_CONFIG.REDIRECT_URI);
      console.log('Notion Client ID configured:', !!NOTION_CONFIG.CLIENT_ID);
    } catch (error) {
      console.error('Error initializing NotionService:', error);
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
        workspaceName: tokenData.workspace_name || null,
        workspaceIcon: tokenData.workspace_icon || null,
        workspaceId: tokenData.workspace_id,
        owner: tokenData.owner,
        duplicatedTemplateId: tokenData.duplicated_template_id || null,
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
   * Get upcoming tasks from Notion databases
   */
  async getUpcomingTasks(maxResults: number = 5): Promise<NotionTask[]> {
    if (!this.isAuthenticated()) {
      throw new Error('Not authenticated with Notion');
    }

    try {
      console.log('🔍 Searching for databases...');
      
      // First, search for databases that might contain tasks
      const databases = await this.searchDatabases();
      
      console.log(`📊 Found ${databases.length} databases`);
      
      // Look for databases that might contain tasks (by title or properties)
      const taskDatabases = databases.filter(db => 
        this.isTaskDatabase(db)
      );

      console.log(`📋 Found ${taskDatabases.length} potential task databases`);

      if (taskDatabases.length === 0) {
        console.log('⚠️ No task databases found');
        return [];
      }

      // Query the first task database found for upcoming tasks
      const tasks = await this.queryTaskDatabase(taskDatabases[0].id, maxResults);
      
      console.log(`✅ Retrieved ${tasks.length} tasks`);
      return tasks;
    } catch (error) {
      console.error('❌ Error fetching tasks:', error);
      throw error;
    }
  }

  /**
   * Get user info
   */
  async getUserProfile(): Promise<{ name: string; avatar_url?: string } | null> {
    if (!this.isAuthenticated()) {
      return null;
    }

    try {
      const response = await fetch(`${NOTION_CONFIG.BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.authData!.accessToken}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const user = await response.json();
      return {
        name: user.name || 'Notion User',
        avatar_url: user.avatar_url,
      };
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  }

  /**
   * Sign out and clear authentication
   */
  async signOut(): Promise<void> {
    try {
      console.log('🔓 Signing out of Notion...');
      
      this.authData = null;
      
      await AsyncStorage.removeItem('notion_auth_data');
      await this.deactivateIntegrationInSupabase();
      
      console.log('✅ Signed out successfully');
      this.notifyAuthCallbacks();
    } catch (error) {
      console.error('Error during sign out:', error);
      throw error;
    }
  }

  /**
   * Build the OAuth authorization URL
   */
  private buildAuthUrl(): string {
    const params = new URLSearchParams({
      client_id: NOTION_CONFIG.CLIENT_ID!,
      redirect_uri: NOTION_CONFIG.REDIRECT_URI,
      response_type: 'code',
      owner: 'user',
    });

    return `https://api.notion.com/v1/oauth/authorize?${params.toString()}`;
  }

  /**
   * Exchange authorization code for access token
   */
  private async exchangeCodeForToken(code: string): Promise<any> {
    const auth = Buffer.from(`${NOTION_CONFIG.CLIENT_ID}:${NOTION_CONFIG.CLIENT_SECRET}`).toString('base64');
    
    const response = await fetch('https://api.notion.com/v1/oauth/token', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: NOTION_CONFIG.REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Token exchange failed: ${response.status} - ${errorText}`);
    }

    return await response.json();
  }

  /**
   * Search for databases in the workspace
   */
  private async searchDatabases(): Promise<NotionDatabase[]> {
    const response = await fetch(`${NOTION_CONFIG.BASE_URL}/search`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.authData!.accessToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        filter: {
          property: 'object',
          value: 'database'
        }
      }),
    });

    if (!response.ok) {
      throw new Error(`Search failed: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  }

  /**
   * Check if a database is likely to contain tasks
   */
  private isTaskDatabase(database: NotionDatabase): boolean {
    const title = database.title?.[0]?.plain_text?.toLowerCase() || '';
    const properties = Object.keys(database.properties || {}).map(key => key.toLowerCase());
    
    // Check if database title or properties suggest it contains tasks
    const taskKeywords = ['task', 'todo', 'project', 'work', 'action', 'item'];
    const hasTaskKeyword = taskKeywords.some(keyword => 
      title.includes(keyword) || properties.some(prop => prop.includes(keyword))
    );
    
    // Check for common task properties
    const hasStatusProperty = properties.some(prop => 
      prop.includes('status') || prop.includes('done') || prop.includes('complete')
    );
    
    const hasDueDateProperty = properties.some(prop => 
      prop.includes('due') || prop.includes('date') || prop.includes('deadline')
    );
    
    return hasTaskKeyword || (hasStatusProperty && hasDueDateProperty);
  }

  /**
   * Query a database for tasks
   */
  private async queryTaskDatabase(databaseId: string, maxResults: number): Promise<NotionTask[]> {
    const response = await fetch(`${NOTION_CONFIG.BASE_URL}/databases/${databaseId}/query`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.authData!.accessToken}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page_size: maxResults,
        sorts: [
          {
            property: 'last_edited_time',
            direction: 'descending'
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`Database query failed: ${response.status}`);
    }

    const data = await response.json();
    const pages = data.results || [];
    
    return pages.map((page: any) => this.parseTaskFromPage(page));
  }

  /**
   * Parse a Notion page into a task object
   */
  private parseTaskFromPage(page: any): NotionTask {
    const properties = page.properties || {};
    
    // Try to find title property
    let title = 'Untitled Task';
    const titleProperty = Object.values(properties).find((prop: any) => 
      prop.type === 'title'
    ) as any;
    
    if (titleProperty?.title?.[0]?.plain_text) {
      title = titleProperty.title[0].plain_text;
    }
    
    // Try to find status property
    let status = 'Unknown';
    const statusProperty = Object.values(properties).find((prop: any) => 
      prop.type === 'status' || prop.type === 'select'
    ) as any;
    
    if (statusProperty?.status?.name) {
      status = statusProperty.status.name;
    } else if (statusProperty?.select?.name) {
      status = statusProperty.select.name;
    }
    
    // Try to find due date property
    let dueDate = null;
    const dateProperty = Object.values(properties).find((prop: any) => 
      prop.type === 'date'
    ) as any;
    
    if (dateProperty?.date?.start) {
      dueDate = dateProperty.date.start;
    }
    
    // Try to find priority property
    let priority = null;
    const priorityProperty = Object.values(properties).find((prop: any) => 
      prop.type === 'select' && prop !== statusProperty
    ) as any;
    
    if (priorityProperty?.select?.name) {
      priority = priorityProperty.select.name;
    }
    
    return {
      id: page.id,
      title,
      status,
      dueDate,
      priority,
      url: page.url,
      created_time: page.created_time,
      last_edited_time: page.last_edited_time,
    };
  }

  /**
   * Load authentication data from local storage
   */
  private async loadAuthData(): Promise<void> {
    try {
      const stored = await AsyncStorage.getItem('notion_auth_data');
      if (stored) {
        this.authData = JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading auth data:', error);
    }
  }

  /**
   * Save authentication data to local storage
   */
  private async saveAuthData(): Promise<void> {
    try {
      if (this.authData) {
        await AsyncStorage.setItem('notion_auth_data', JSON.stringify(this.authData));
      }
    } catch (error) {
      console.error('Error saving auth data:', error);
    }
  }

  /**
   * Save integration data to Supabase
   */
  private async saveIntegrationToSupabase(tokenData: any): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('No authenticated user found');
      }

      const integrationData: Partial<Integration> = {
        user_id: user.id,
        integration_type: 'notion',
        type: 'built_in',
        service_name: 'Notion',
        workspace_id: tokenData.workspace_id,
        workspace_name: tokenData.workspace_name,
        workspace_icon: tokenData.workspace_icon,
        bot_id: tokenData.bot_id,
        access_token: tokenData.access_token,
        owner_info: tokenData.owner,
        duplicated_template_id: tokenData.duplicated_template_id,
        is_active: true,
        configuration: {},
        created_at: new Date(),
        updated_at: new Date(),
      };

      const { error } = await supabase
        .from('integrations')
        .upsert(integrationData, {
          onConflict: 'user_id,integration_type',
        });

      if (error) {
        console.error('Error saving to Supabase:', error);
        throw error;
      }

      console.log('✅ Integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving integration to Supabase:', error);
      throw error;
    }
  }

  /**
   * Load integration data from Supabase
   */
  private async loadIntegrationFromSupabase(): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        return;
      }

      const { data, error } = await supabase
        .from('integrations')
        .select('*')
        .eq('user_id', user.id)
        .eq('integration_type', 'notion')
        .eq('is_active', true)
        .single();

      if (error) {
        if (error.code !== 'PGRST116') { // Not found error
          console.error('Error loading from Supabase:', error);
        }
        return;
      }

      if (data) {
        this.authData = {
          accessToken: data.access_token,
          botId: data.bot_id,
          workspaceName: data.workspace_name,
          workspaceIcon: data.workspace_icon,
          workspaceId: data.workspace_id,
          owner: data.owner_info,
          duplicatedTemplateId: data.duplicated_template_id,
        };

        await this.saveAuthData();
        console.log('✅ Integration loaded from Supabase');
      }
    } catch (error) {
      console.error('❌ Error loading integration from Supabase:', error);
    }
  }

  /**
   * Deactivate integration in Supabase
   */
  private async deactivateIntegrationInSupabase(): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        return;
      }

      const { error } = await supabase
        .from('integrations')
        .update({ 
          is_active: false,
          updated_at: new Date(),
        })
        .eq('user_id', user.id)
        .eq('integration_type', 'notion');

      if (error) {
        console.error('Error deactivating integration:', error);
        throw error;
      }

      console.log('✅ Integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating integration:', error);
    }
  }
} 