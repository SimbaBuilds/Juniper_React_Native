import { authorize, refresh, AuthConfiguration, AuthorizeResult, RefreshResult } from 'react-native-app-auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { completeIntegration, createOAuthAuthParams, disconnectIntegration } from '../../api/integration_api';

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

  async authenticate(integrationId: string): Promise<TodoistAuthResult> {
    try {
      await this.initialize();

      console.log('📋 Starting Todoist OAuth flow...');
      console.log('📋 Integration ID:', integrationId);

      // Add integration ID to state for callback handling
      const stateData = {
        integration_id: integrationId,
        service: 'todoist',
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
      await this.storeTokens(authResult, integrationId);

      // Call backend to complete integration
      await this.completeIntegration(result, integrationId);

      console.log('📋 Todoist authentication completed successfully');
      return authResult;

    } catch (error) {
      console.error('📋 Todoist authentication failed:', error);
      throw new Error(`Todoist authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async refreshToken(refreshToken: string, integrationId: string): Promise<TodoistAuthResult> {
    try {
      const storedTokens = await this.getStoredTokens(integrationId);
      console.log('📋 Refreshing Todoist access token...');

      const result: RefreshResult = await refresh(this.config, {
        refreshToken: refreshToken,
      });

      const expiresIn = result.additionalParameters?.expires_in;
      const expiresAt = (expiresIn && typeof expiresIn === 'number') 
        ? Date.now() + (expiresIn * 1000)
        : Date.now() + (3600 * 1000);

      const authResult: TodoistAuthResult = {
        accessToken: result.accessToken,
        refreshToken: result.refreshToken || refreshToken,
        expiresAt,
        scope: storedTokens?.scope,
        userId: storedTokens?.userId
      };

      // Update stored tokens
      await this.storeTokens(authResult, integrationId);

      console.log('📋 Todoist token refreshed successfully');
      return authResult;

    } catch (error) {
      console.error('📋 Failed to refresh Todoist token:', error);
      throw new Error(`Failed to refresh Todoist token: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getValidToken(integrationId: string): Promise<string> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No Todoist tokens found. Please authenticate first.');
    }

    // Check if token is expired (with 5 minute buffer)
    if (tokens.expiresAt && tokens.expiresAt < Date.now() + (5 * 60 * 1000)) {
      console.log('📋 Todoist token expired, refreshing...');
      const refreshedTokens = await this.refreshToken(tokens.refreshToken, integrationId);
      return refreshedTokens.accessToken;
    }

    return tokens.accessToken;
  }

  async isAuthenticated(integrationId: string): Promise<boolean> {
    try {
      const tokens = await this.getStoredTokens(integrationId);
      return !!(tokens?.accessToken);
    } catch {
      return false;
    }
  }

  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('📋 Disconnecting Todoist...');
      
      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`todoist_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`todoist_tokens_${integrationId}`);
      }

      // Disconnect from backend
      await disconnectIntegration({
        integration_id: integrationId,
        service_name: 'todoist'
      });

      console.log('📋 Todoist disconnected successfully');
    } catch (error) {
      console.error('📋 Failed to disconnect Todoist:', error);
      throw error;
    }
  }

  private async storeTokens(tokens: TodoistAuthResult, integrationId: string): Promise<void> {
    const tokenData = JSON.stringify(tokens);
    
    if (Platform.OS !== 'web') {
      await SecureStore.setItemAsync(`todoist_tokens_${integrationId}`, tokenData);
    } else {
      await AsyncStorage.setItem(`todoist_tokens_${integrationId}`, tokenData);
    }
  }

  private async getStoredTokens(integrationId: string): Promise<TodoistAuthResult | null> {
    try {
      let tokenData: string | null;
      
      if (Platform.OS !== 'web') {
        tokenData = await SecureStore.getItemAsync(`todoist_tokens_${integrationId}`);
      } else {
        tokenData = await AsyncStorage.getItem(`todoist_tokens_${integrationId}`);
      }

      return tokenData ? JSON.parse(tokenData) : null;
    } catch (error) {
      console.error('📋 Failed to get stored Todoist tokens:', error);
      return null;
    }
  }

  private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
    try {
      console.log('📋 Completing Todoist integration with backend...');
      
      const authParams = createOAuthAuthParams(result, {
        user_id: result.tokenAdditionalParameters?.user_id
      });

      await completeIntegration({
        integration_id: integrationId,
        service_name: 'todoist',
        service_type: 'oauth',
        auth_params: authParams
      });

      console.log('📋 Todoist integration completed with backend');
    } catch (error) {
      console.error('📋 Failed to complete Todoist integration with backend:', error);
      // Don't throw here - we still want the frontend auth to succeed
    }
  }
}

export default TodoistAuthService; 