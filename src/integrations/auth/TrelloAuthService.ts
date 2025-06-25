import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform, Linking } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import api from '../../api/api';

interface TrelloAuthResult {
  token: string;
  userId?: string;
  userName?: string;
  userEmail?: string;
}

export class TrelloAuthService {
  private static instance: TrelloAuthService;
  private isInitialized = false;

  private readonly apiKey = process.env.EXPO_PUBLIC_TRELLO_API_KEY || '';
  private readonly appName = 'Mobile Jarvis';
  private readonly redirectUrl = 'mobilejarvisnative://oauth/callback/trello';

  static getInstance(): TrelloAuthService {
    if (!TrelloAuthService.instance) {
      TrelloAuthService.instance = new TrelloAuthService();
    }
    return TrelloAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.apiKey) {
      throw new Error('Trello API key not configured. Please set EXPO_PUBLIC_TRELLO_API_KEY environment variable.');
    }

    console.log('🟠 Trello Auth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Start Trello token authentication flow
   */
  async authenticate(integrationId: string): Promise<TrelloAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('🟠 Starting Trello authentication flow...');
      console.log('🟠 Integration ID:', integrationId);

      // Build authorization URL
      const authUrl = this.buildAuthUrl(integrationId);
      console.log('🟠 Authorization URL:', authUrl);

      // Open WebBrowser for authentication
      const result = await WebBrowser.openAuthSessionAsync(
        authUrl,
        this.redirectUrl,
        {
          showInRecents: false,
          preferEphemeralSession: true,
        }
      );

      console.log('🟠 WebBrowser result:', result.type);

      if (result.type === 'success' && result.url) {
        return await this.handleAuthCallback(result.url, integrationId);
      } else if (result.type === 'cancel') {
        throw new Error('User cancelled Trello authentication');
      } else {
        throw new Error('Trello authentication failed');
      }

    } catch (error) {
      console.error('🔴 Trello authentication error:', error);
      throw new Error(`Trello authentication failed: ${error.message}`);
    }
  }

  /**
   * Build authorization URL for Trello
   */
  private buildAuthUrl(integrationId: string): string {
    const params = new URLSearchParams({
      key: this.apiKey,
      name: this.appName,
      expiration: 'never',
      response_type: 'token',
      scope: 'read,write',
      return_url: `${this.redirectUrl}?integration_id=${integrationId}`,
    });

    return `https://trello.com/1/authorize?${params.toString()}`;
  }

  /**
   * Handle the authentication callback
   */
  private async handleAuthCallback(callbackUrl: string, integrationId: string): Promise<TrelloAuthResult> {
    try {
      console.log('🟠 Handling Trello callback:', callbackUrl);

      // Parse the callback URL to extract the token
      const url = new URL(callbackUrl);
      const token = url.searchParams.get('token');

      if (!token) {
        throw new Error('No token received from Trello');
      }

      console.log('🟠 Trello token received');

      // Get user information using the token
      const userInfo = await this.getUserInfo(token);

      const authResult: TrelloAuthResult = {
        token,
        userId: userInfo.id,
        userName: userInfo.username,
        userEmail: userInfo.email,
      };

      // Store token securely
      await this.storeToken(authResult, integrationId);

      // Call backend to complete integration
      await this.completeIntegration(authResult, integrationId);

      return authResult;

    } catch (error) {
      console.error('🔴 Error handling Trello callback:', error);
      throw error;
    }
  }

  /**
   * Get user information from Trello API
   */
  private async getUserInfo(token: string): Promise<any> {
    try {
      const response = await fetch(
        `https://api.trello.com/1/members/me?key=${this.apiKey}&token=${token}`
      );

      if (!response.ok) {
        throw new Error(`Trello API error: ${response.status} ${response.statusText}`);
      }

      const userInfo = await response.json();
      console.log('🟠 Trello user info retrieved:', userInfo.username);

      return userInfo;
    } catch (error) {
      console.error('🔴 Error getting Trello user info:', error);
      throw error;
    }
  }

  /**
   * Store token securely
   */
  private async storeToken(authResult: TrelloAuthResult, integrationId: string): Promise<void> {
    try {
      const tokenData = {
        token: authResult.token,
        userId: authResult.userId,
        userName: authResult.userName,
        userEmail: authResult.userEmail,
        integrationId,
        service: 'trello',
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `trello_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      } else {
        await AsyncStorage.setItem(
          `trello_tokens_${integrationId}`,
          JSON.stringify(tokenData)
        );
      }

      console.log('🟠 Trello token stored securely');
    } catch (error) {
      console.error('🔴 Error storing Trello token:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string): Promise<TrelloAuthResult | null> {
    try {
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(`trello_tokens_${integrationId}`);
      } else {
        tokenDataStr = await AsyncStorage.getItem(`trello_tokens_${integrationId}`);
      }

      if (!tokenDataStr) return null;

      const tokenData = JSON.parse(tokenDataStr);
      
      return {
        token: tokenData.token,
        userId: tokenData.userId,
        userName: tokenData.userName,
        userEmail: tokenData.userEmail,
      };

    } catch (error) {
      console.error('🔴 Error retrieving Trello tokens:', error);
      return null;
    }
  }

  /**
   * Call backend to complete integration setup
   */
  private async completeIntegration(authResult: TrelloAuthResult, integrationId: string): Promise<void> {
    try {
      console.log('🟠 Completing Trello integration with backend...');

      const response = await api.post('/api/oauth/complete_integration', {
        integration_id: integrationId,
        service: 'trello',
        token: authResult.token,
        user_id: authResult.userId,
        user_name: authResult.userName,
        user_email: authResult.userEmail,
        oauth_result: authResult
      });

      console.log('🟠 Trello integration completed:', response.data);
    } catch (error) {
      console.error('🔴 Error completing Trello integration:', error);
      // Don't throw here - the authentication was successful, backend completion is secondary
    }
  }

  /**
   * Revoke token and clear stored data
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🟠 Disconnecting Trello integration...');

      // Note: Trello doesn't have a token revocation endpoint
      // The token can only be revoked manually by the user in their Trello account

      // Clear stored tokens
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`trello_tokens_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`trello_tokens_${integrationId}`);
      }

      console.log('🟠 Trello integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Trello:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Trello
   */
  async makeApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens) {
      throw new Error('No valid Trello tokens available');
    }

    // Build URL with authentication parameters
    const url = new URL(`https://api.trello.com/1${endpoint}`);
    url.searchParams.set('key', this.apiKey);
    url.searchParams.set('token', tokens.token);

    const response = await fetch(url.toString(), {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Trello API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting user boards
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const userInfo = await this.makeApiCall('/members/me', {}, integrationId);
      const boards = await this.makeApiCall('/members/me/boards', {}, integrationId);
      
      return {
        user: userInfo,
        boardCount: boards.length
      };
    } catch (error) {
      console.error('🔴 Trello connection test failed:', error);
      throw error;
    }
  }

  /**
   * Get user's boards
   */
  async getBoards(integrationId: string): Promise<any[]> {
    return this.makeApiCall('/members/me/boards', {}, integrationId);
  }

  /**
   * Get cards from a specific board
   */
  async getBoardCards(boardId: string, integrationId: string): Promise<any[]> {
    return this.makeApiCall(`/boards/${boardId}/cards`, {}, integrationId);
  }

  /**
   * Create a new card
   */
  async createCard(listId: string, name: string, description?: string, integrationId?: string): Promise<any> {
    const body = {
      name,
      desc: description || '',
      idList: listId,
    };

    return this.makeApiCall('/cards', {
      method: 'POST',
      body: JSON.stringify(body),
    }, integrationId!);
  }
}

export default TrelloAuthService; 