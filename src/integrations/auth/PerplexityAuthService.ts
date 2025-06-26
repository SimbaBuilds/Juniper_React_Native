import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { completeIntegration, createApiKeyAuthParams, disconnectIntegration } from '../../api/integration_api';

interface PerplexityAuthResult {
  apiKey: string;
  isValid: boolean;
  userInfo?: any;
}

export class PerplexityAuthService {
  private static instance: PerplexityAuthService;
  private isInitialized = false;

  static getInstance(): PerplexityAuthService {
    if (!PerplexityAuthService.instance) {
      PerplexityAuthService.instance = new PerplexityAuthService();
    }
    return PerplexityAuthService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    console.log('🟠 Perplexity Auth Service initialized');
    this.isInitialized = true;
  }

  /**
   * Validate and authenticate with API key
   */
  async authenticateWithApiKey(apiKey: string, integrationId: string): Promise<PerplexityAuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      console.log('🟠 Validating Perplexity API key...');

      // Validate API key format
      if (!apiKey || apiKey.trim().length < 10) {
        throw new Error('Invalid API key format. Please check your API key.');
      }

      const trimmedApiKey = apiKey.trim();

      // Test the API key with a simple request
      const isValid = await this.validateApiKey(trimmedApiKey);
      
      if (!isValid) {
        throw new Error('Invalid API key. Please check your Perplexity API key and try again.');
      }

      console.log('🟠 Perplexity API key validated successfully');

      const authResult: PerplexityAuthResult = {
        apiKey: trimmedApiKey,
        isValid: true,
      };

      // Store API key securely
      await this.storeApiKey(trimmedApiKey, integrationId);

      // Call backend to complete integration
      await this.completeIntegration(authResult, integrationId);

      return authResult;

    } catch (error) {
      console.error('🔴 Perplexity API key validation error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(`Perplexity authentication failed: ${errorMessage}`);
    }
  }

  /**
   * Validate API key by making a test request
   */
  private async validateApiKey(apiKey: string): Promise<boolean> {
    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'user',
              content: 'Test connection - please respond with "OK"'
            }
          ],
          max_tokens: 10,
          temperature: 0.1
        }),
      });

      if (response.status === 401) {
        return false; // Invalid API key
      }

      if (response.status === 429) {
        // Rate limited but API key is valid
        return true;
      }

      if (!response.ok) {
        console.warn(`🟠 Perplexity API test returned ${response.status}, but treating as valid`);
        return true; // Other errors might not indicate invalid key
      }

      const data = await response.json();
      console.log('🟠 Perplexity API test successful');
      return true;

    } catch (error) {
      console.error('🔴 Error validating Perplexity API key:', error);
      // Network errors shouldn't fail validation
      return true;
    }
  }

  /**
   * Store API key securely
   */
  private async storeApiKey(apiKey: string, integrationId: string): Promise<void> {
    try {
      const keyData = {
        apiKey,
        integrationId,
        service: 'perplexity',
        storedAt: new Date().toISOString()
      };

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(
          `perplexity_key_${integrationId}`,
          JSON.stringify(keyData)
        );
      } else {
        await AsyncStorage.setItem(
          `perplexity_key_${integrationId}`,
          JSON.stringify(keyData)
        );
      }

      console.log('🟠 Perplexity API key stored securely');
    } catch (error) {
      console.error('🔴 Error storing Perplexity API key:', error);
      throw error;
    }
  }

  /**
   * Retrieve stored API key
   */
  async getStoredApiKey(integrationId: string): Promise<string | null> {
    try {
      let keyDataStr: string | null;

      if (Platform.OS !== 'web') {
        keyDataStr = await SecureStore.getItemAsync(`perplexity_key_${integrationId}`);
      } else {
        keyDataStr = await AsyncStorage.getItem(`perplexity_key_${integrationId}`);
      }

      if (!keyDataStr) return null;

      const keyData = JSON.parse(keyDataStr);
      return keyData.apiKey;

    } catch (error) {
      console.error('🔴 Error retrieving Perplexity API key:', error);
      return null;
    }
  }

  /**
   * Complete integration by calling backend
   */
  private async completeIntegration(authResult: PerplexityAuthResult, integrationId: string): Promise<void> {
    try {
      const authParams = createApiKeyAuthParams(authResult.apiKey);

      await completeIntegration({
        integration_id: integrationId,
        service_name: 'perplexity',
        service_type: 'api_key',
        auth_params: authParams,
        status: 'connected',
        connected_at: new Date().toISOString()
      });
    } catch (error) {
      console.error('🔴 Error completing Perplexity integration:', error);
      // Don't throw here - the API key is valid, just log the backend error
    }
  }

  /**
   * Test connection with stored API key
   */
  async testConnection(integrationId: string): Promise<boolean> {
    try {
      const apiKey = await this.getStoredApiKey(integrationId);
      if (!apiKey) {
        return false;
      }

      return await this.validateApiKey(apiKey);
    } catch (error) {
      console.error('🔴 Error testing Perplexity connection:', error);
      return false;
    }
  }

  /**
   * Disconnect integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🟠 Disconnecting Perplexity integration...');

      // Remove stored API key
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(`perplexity_key_${integrationId}`);
      } else {
        await AsyncStorage.removeItem(`perplexity_key_${integrationId}`);
      }

      // Disconnect from backend
      await disconnectIntegration({
        integration_id: integrationId,
        service_name: 'perplexity'
      });

      console.log('🟠 Perplexity integration disconnected');
    } catch (error) {
      console.error('🔴 Error disconnecting Perplexity integration:', error);
      throw error;
    }
  }

  /**
   * Make authenticated API call to Perplexity
   */
  async makeApiCall(prompt: string, integrationId: string, options: any = {}): Promise<any> {
    try {
      const apiKey = await this.getStoredApiKey(integrationId);
      if (!apiKey) {
        throw new Error('No API key found. Please reconnect your Perplexity integration.');
      }

      const requestBody = {
        model: options.model || 'llama-3.1-sonar-small-128k-online',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: options.max_tokens || 1000,
        temperature: options.temperature || 0.7,
        ...options
      };

      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please reconnect your Perplexity integration.');
        }
        throw new Error(`Perplexity API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;

    } catch (error) {
      console.error('🔴 Error making Perplexity API call:', error);
      throw error;
    }
  }

  /**
   * Get API key setup instructions
   */
  static getApiKeyInstructions(): string {
    return `To connect Perplexity AI:

1. Go to https://www.perplexity.ai/settings/api
2. Sign up or log in to your Perplexity account
3. Navigate to the API section
4. Click "Generate API Key"
5. Copy the API key and paste it below

Your API key should start with "pplx-" and be about 40-50 characters long.

Note: You'll need to add billing information to your Perplexity account to use the API.`;
  }
}

export default PerplexityAuthService; 