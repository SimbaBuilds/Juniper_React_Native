import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import api from '../../api/api';

interface TodoistAuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
  userId?: string;
}

export class TodoistAuthService {
  private static instance: TodoistAuthService;
  private isInitialized = false;

  private readonly config: AuthConfiguration = {
    issuer: 'https://todoist.com',
    clientId: process.env.EXPO_PUBLIC_TODOIST_CLIENT_ID || '',
    redirectUrl: 'mobilejarvisnative://oauth/callback/todoist',
    serviceConfiguration: {
      authorizationEndpoint: 'https://todoist.com/oauth/authorize',
      tokenEndpoint: 'https://todoist.com/oauth/access_token',
    },
    scopes: [
      'data:read_write'  // Full read/write access for AI assistant
    ],
    additionalParameters: {
      token_access_type: 'offline'  // Request refresh token
    },
    customHeaders: {},
    usePKCE: true,   // Enable PKCE for mobile security
  };

  public static getInstance(): TodoistAuthService {
    if (!TodoistAuthService.instance) {
      TodoistAuthService.instance = new TodoistAuthService();
    }
    return TodoistAuthService.instance;
  }

  private constructor() {}

  private async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId) {
      throw new Error('Todoist client ID not configured. Please set EXPO_PUBLIC_TODOIST_CLIENT_ID environment variable.');
    }

    this.isInitialized = true;
  }

  async authenticate(): Promise<TodoistAuthResult> {
    try {
      await this.initialize();

      console.log('📋 Starting Todoist OAuth flow...');

      // Add state parameter for security
      const state = Math.random().toString(36).substring(2, 15);
      const configWithState = {
        ...this.config,
        additionalParameters: {
          ...this.config.additionalParameters,
          state,
        },
      };

      console.log('📋 Starting authorization with config:', {
        ...configWithState,
        clientId: '[REDACTED]'
      });

      const result: AuthorizeResult = await authorize(configWithState);

      console.log('📋 OAuth result received:', {
        ...result,
        accessToken: '[REDACTED]',
        refreshToken: '[REDACTED]'
      });

      // Calculate expiration timestamp
      const expiresIn = result.tokenAdditionalParameters?.expires_in;
      const expiresAt = (expiresIn && typeof expiresIn === 'number') 
        ? Date.now() + (expiresIn * 1000)
        : Date.now() + (3600 * 1000); // Default 1 hour

      const authResult: TodoistAuthResult = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || '',
        expiresAt,
        scope: result.scopes?.join(' '),
        userId: result.tokenAdditionalParameters?.user_id
      };

      // Store tokens securely
      await this.storeTokens(authResult);

      // Call backend to complete integration
      await this.completeIntegration(authResult);

      console.log('📋 Todoist authentication completed successfully');
      return authResult;

    } catch (error) {
      console.error('📋 Todoist authentication failed:', error);
      throw new Error(`Todoist authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async refreshToken(): Promise<TodoistAuthResult> {
    try {
      const storedTokens = await this.getStoredTokens();
      if (!storedTokens?.refreshToken) {
        throw new Error('No refresh token available');
      }

      console.log('📋 Refreshing Todoist access token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: storedTokens.refreshToken,
      });

      const expiresIn = result.additionalParameters?.expires_in;
      const expiresAt = (expiresIn && typeof expiresIn === 'number') 
        ? Date.now() + (expiresIn * 1000)
        : Date.now() + (3600 * 1000);

      const authResult: TodoistAuthResult = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || storedTokens.refreshToken,
        expiresAt,
        scope: storedTokens.scope,
        userId: storedTokens.userId
      };

      // Update stored tokens
      await this.storeTokens(authResult);

      console.log('📋 Todoist token refreshed successfully');
      return authResult;

    } catch (error) {
      console.error('📋 Failed to refresh Todoist token:', error);
      throw new Error(`Failed to refresh Todoist token: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getValidToken(): Promise<string> {
    const tokens = await this.getStoredTokens();
    if (!tokens) {
      throw new Error('No Todoist tokens found. Please authenticate first.');
    }

    // Check if token is expired (with 5 minute buffer)
    if (tokens.expiresAt && tokens.expiresAt < Date.now() + (5 * 60 * 1000)) {
      console.log('📋 Todoist token expired, refreshing...');
      const refreshedTokens = await this.refreshToken();
      return refreshedTokens.accessToken;
    }

    return tokens.accessToken;
  }

  async isAuthenticated(): Promise<boolean> {
    try {
      const tokens = await this.getStoredTokens();
      return !!(tokens?.accessToken);
    } catch {
      return false;
    }
  }

  async disconnect(): Promise<void> {
    try {
      console.log('📋 Disconnecting Todoist...');
      
      // Clear stored tokens
      if (Platform.OS === 'ios') {
        await SecureStore.deleteItemAsync('todoist_tokens');
      } else {
        await AsyncStorage.removeItem('todoist_tokens');
      }

      // Call backend to remove integration
      await api.post('/integrations/disconnect', {
        service: 'todoist'
      });

      console.log('📋 Todoist disconnected successfully');
    } catch (error) {
      console.error('📋 Failed to disconnect Todoist:', error);
      throw error;
    }
  }

  private async storeTokens(tokens: TodoistAuthResult): Promise<void> {
    const tokenData = JSON.stringify(tokens);
    
    if (Platform.OS === 'ios') {
      await SecureStore.setItemAsync('todoist_tokens', tokenData);
    } else {
      await AsyncStorage.setItem('todoist_tokens', tokenData);
    }
  }

  private async getStoredTokens(): Promise<TodoistAuthResult | null> {
    try {
      let tokenData: string | null;
      
      if (Platform.OS === 'ios') {
        tokenData = await SecureStore.getItemAsync('todoist_tokens');
      } else {
        tokenData = await AsyncStorage.getItem('todoist_tokens');
      }

      return tokenData ? JSON.parse(tokenData) : null;
    } catch (error) {
      console.error('📋 Failed to get stored Todoist tokens:', error);
      return null;
    }
  }

  private async completeIntegration(authResult: TodoistAuthResult): Promise<void> {
    try {
      console.log('📋 Completing Todoist integration with backend...');
      
      await api.post('/api/complete_integration', {
        service: 'todoist',
        access_token: authResult.accessToken,
        refresh_token: authResult.refreshToken,
        expires_at: authResult.expiresAt,
        scope: authResult.scope,
        user_id: authResult.userId,
        metadata: {
          integration_type: 'oauth2',
          platform: Platform.OS,
          sdk_version: 'react-native-app-auth'
        }
      });

      console.log('📋 Todoist integration completed with backend');
    } catch (error) {
      console.error('📋 Failed to complete Todoist integration with backend:', error);
      // Don't throw here - we still want the frontend auth to succeed
    }
  }
}

export default TodoistAuthService; 