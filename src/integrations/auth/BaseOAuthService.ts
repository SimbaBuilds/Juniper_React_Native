import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { getOAuthConfig, getRedirectUri, buildAuthUrl, OAuthServiceConfig } from './OAuthConfig';
import { calculateExpirationDate, safeToISOString, safeParseDateString, isValidDate } from './DateUtils';
import { createBasicAuthHeader } from '../../utils/base64';
import IntegrationCompletionService from '../IntegrationCompletionService';

export interface AuthResult {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  scope?: string;
  [key: string]: any;
}

export interface StoredTokenData {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  integrationId: string;
  service: string;
  scope?: string;
  storedAt: string;
  [key: string]: any;
}

export abstract class BaseOAuthService {
  protected config: OAuthServiceConfig;
  protected isInitialized = false;
  protected isReconnection = false;
  
  // Static map to track reconnection states across all service instances
  private static reconnectionStates: Map<string, boolean> = new Map();

  constructor(serviceName: string) {
    this.config = getOAuthConfig(serviceName);
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    if (!this.config.clientId || this.config.clientId === 'placeholder-client-id') {
      throw new Error(`${this.config.serviceName} client ID not configured. Please set the appropriate environment variable.`);
    }

    console.log(`🔧 ${this.config.serviceName} OAuth Service initialized`);
    this.isInitialized = true;
  }

  /**
   * Set reconnection flag for a specific integration to skip completion message
   */
  setIsReconnection(isReconnection: boolean, integrationId?: string): void {
    this.isReconnection = isReconnection;
    
    // If we have an integrationId, store the state globally for the callback to find
    if (integrationId && isReconnection) {
      BaseOAuthService.reconnectionStates.set(integrationId, true);
    }
  }
  
  /**
   * Check if this integration is a reconnection
   */
  protected isIntegrationReconnection(integrationId: string): boolean {
    return BaseOAuthService.reconnectionStates.get(integrationId) || false;
  }
  
  /**
   * Clear reconnection state for an integration
   */
  clearReconnectionState(integrationId: string): void {
    BaseOAuthService.reconnectionStates.delete(integrationId);
  }

  /**
   * Get platform-specific redirect URI
   */
  protected getRedirectUri(): string {
    return getRedirectUri(this.config.serviceName);
  }

  /**
   * Build authorization URL
   */
  protected buildAuthUrl(integrationId: string): string {
    return buildAuthUrl(this.config.serviceName, integrationId);
  }

  /**
   * Store tokens securely
   */
  protected async storeTokens(result: any, integrationId: string): Promise<void> {
    try {
      console.log(`🔍 Storing ${this.config.serviceName} tokens for integration:`, integrationId);
      console.log(`🔍 Token result keys:`, Object.keys(result));
      
      // Use safe date calculation for expires_in
      let expiresAtISO: string;
      if (result.accessTokenExpirationDate) {
        // Use provided expiration date if available
        expiresAtISO = result.accessTokenExpirationDate;
      } else {
        // Calculate expiration date safely from expires_in
        const expirationDate = calculateExpirationDate(result.expires_in);
        expiresAtISO = safeToISOString(expirationDate);
      }

      const tokenData: StoredTokenData = {
        accessToken: result.accessToken || result.access_token,
        refreshToken: result.refreshToken || result.refresh_token || '',
        expiresAt: expiresAtISO,
        integrationId,
        service: this.config.serviceName,
        scope: Array.isArray(result.scopes) ? result.scopes.join(' ') : (result.scope || this.config.scopes.join(' ')),
        storedAt: new Date().toISOString(),
        ...this.extractAdditionalTokenData(result)
      };

      const storageKey = `${this.config.serviceName.replace('-', '_')}_tokens_${integrationId}`;
      console.log(`🔍 Storage key:`, storageKey);
      console.log(`🔍 Token data to store:`, JSON.stringify(tokenData, null, 2));

      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync(storageKey, JSON.stringify(tokenData));
      } else {
        await AsyncStorage.setItem(storageKey, JSON.stringify(tokenData));
      }

      console.log(`🔐 ${this.config.serviceName} tokens stored securely`);
    } catch (error) {
      console.error(`🔴 Error storing ${this.config.serviceName} tokens:`, error);
      throw error;
    }
  }

  /**
   * Retrieve stored tokens
   */
  async getStoredTokens(integrationId: string, skipRefresh: boolean = false): Promise<AuthResult | null> {
    try {
      const storageKey = `${this.config.serviceName.replace('-', '_')}_tokens_${integrationId}`;
      let tokenDataStr: string | null;

      if (Platform.OS !== 'web') {
        tokenDataStr = await SecureStore.getItemAsync(storageKey);
      } else {
        tokenDataStr = await AsyncStorage.getItem(storageKey);
      }

      if (!tokenDataStr) return null;

      const tokenData: StoredTokenData = JSON.parse(tokenDataStr);
      
      // Check if token is expired using safe date parsing
      const now = new Date().getTime();
      const expiresAtDate = safeParseDateString(tokenData.expiresAt);
      
      if (!expiresAtDate || !isValidDate(expiresAtDate)) {
        console.warn(`🔴 Invalid expiration date for ${this.config.serviceName} tokens:`, tokenData.expiresAt);
        return null;
      }
      
      const expiresAt = expiresAtDate.getTime();
      
      if (now >= expiresAt - 300000 && !skipRefresh) { // Refresh 5 minutes before expiry
        console.log(`🔄 ${this.config.serviceName} token expired, attempting refresh...`);
        if (tokenData.refreshToken) {
          return await this.refreshToken(tokenData.refreshToken, integrationId);
        } else {
          console.log(`🔴 No refresh token available for ${this.config.serviceName}`);
          return null;
        }
      }

      return {
        accessToken: tokenData.accessToken,
        refreshToken: tokenData.refreshToken,
        expiresAt: expiresAt,
        scope: tokenData.scope,
        ...this.extractAdditionalAuthData(tokenData)
      };

    } catch (error) {
      console.error(`🔴 Error retrieving ${this.config.serviceName} tokens:`, error);
      return null;
    }
  }

  /**
   * Clear stored tokens
   */
  protected async clearStoredTokens(integrationId: string): Promise<void> {
    try {
      const storageKey = `${this.config.serviceName.replace('-', '_')}_tokens_${integrationId}`;
      
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(storageKey);
      } else {
        await AsyncStorage.removeItem(storageKey);
      }
    } catch (error) {
      console.error(`🔴 Error clearing stored tokens for ${this.config.serviceName}:`, error);
    }
  }

  /**
   * Complete integration with backend
   */
  protected async completeIntegration(result: any, integrationId: string): Promise<void> {
    try {
      console.log(`🔍 ${this.config.serviceName} completing integration flow...`);
      
      // Check if this is a reconnection using the stored state
      const isReconnect = this.isIntegrationReconnection(integrationId);
      
      // Skip the completion message for reconnections
      if (!isReconnect) {
        // Instead of calling the API endpoint, trigger the voice message and navigation
        await IntegrationCompletionService.getInstance().completeIntegration(this.config.serviceName);
      } else {
        console.log(`ℹ️ ${this.config.serviceName} skipping completion message for reconnection`);
      }
      
      // Clean up the reconnection state after processing
      if (isReconnect) {
        BaseOAuthService.reconnectionStates.delete(integrationId);
      }
      
      console.log(`✅ ${this.config.serviceName} integration completion flow triggered`);
    } catch (error) {
      console.warn(`⚠️ ${this.config.serviceName} integration completion flow failed:`, (error as any)?.message || error);
      console.log(`ℹ️ ${this.config.serviceName} OAuth was successful - tokens stored locally`);
      // Don't throw here - the OAuth was successful and tokens are stored locally
    }
  }

  /**
   * Disconnect integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log(`🔌 Disconnecting ${this.config.serviceName} integration...`);

      const tokens = await this.getStoredTokens(integrationId, true);
      
      // // Revoke tokens if supported
      // if (tokens && this.config.revokeEndpoint) {
      //   await this.revokeTokens(tokens.accessToken);
      // }

      // Clear stored tokens
      await this.clearStoredTokens(integrationId);

      console.log(`✅ ${this.config.serviceName} integration disconnected`);
    } catch (error) {
      console.error(`🔴 Error disconnecting ${this.config.serviceName}:`, error);
      throw error;
    }
  }

  /**
   * Revoke tokens with the service
   */
  protected async revokeTokens(accessToken: string): Promise<void> {
    if (!this.config.revokeEndpoint) return;

    try {
      console.log(`🔒 Revoking ${this.config.serviceName} access token...`);
      
      const response = await fetch(this.config.revokeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `token=${accessToken}`,
      });

      if (response.ok) {
        console.log(`✅ ${this.config.serviceName} token revoked successfully`);
      } else {
        console.warn(`⚠️ ${this.config.serviceName} token revocation failed, but continuing with local cleanup`);
      }
    } catch (error) {
      console.warn(`⚠️ Error during ${this.config.serviceName} token revocation:`, error);
    }
  }

  /**
   * Make token request (exchange code or refresh)
   */
  protected async makeTokenRequest(requestBody: URLSearchParams, operation: string, useBasicAuth: boolean = false): Promise<any> {
    console.log(`🔄 Making ${this.config.serviceName} ${operation} request...`);
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'User-Agent': 'MobileJarvisNative/1.0',
    };

    // Add HTTP Basic Authentication if requested
    if (useBasicAuth && this.config.clientId && this.config.clientSecret) {
      const encodedCredentials = createBasicAuthHeader(this.config.clientId, this.config.clientSecret);
      headers['Authorization'] = `Basic ${encodedCredentials}`;
    }
    
    const response = await fetch(this.config.tokenEndpoint, {
      method: 'POST',
      headers,
      body: requestBody.toString(),
    });

    const responseText = await response.text();
    
    console.log(`📥 ${this.config.serviceName} ${operation} response:`, {
      status: response.status,
      statusText: response.statusText,
    });

    if (!response.ok) {
      console.error(`❌ ${this.config.serviceName} ${operation} failed:`, {
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

    console.log(`✅ ${this.config.serviceName} ${operation} successful`);
    return tokenData;
  }

  // Abstract methods that subclasses must implement

  /**
   * Start OAuth authentication flow
   */
  abstract authenticate(integrationId: string): Promise<AuthResult>;

  /**
   * Refresh access token
   */
  abstract refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult>;

  /**
   * Test the connection
   */
  abstract testConnection(integrationId: string): Promise<any>;

  // Optional methods that subclasses can override

  /**
   * Extract additional token data specific to the service
   */
  protected extractAdditionalTokenData(result: any): Record<string, any> {
    return {};
  }

  /**
   * Extract additional auth data when retrieving tokens
   */
  protected extractAdditionalAuthData(tokenData: StoredTokenData): Record<string, any> {
    return {};
  }

  /**
   * Get access token, refreshing if necessary
   */
  async getAccessToken(integrationId: string): Promise<string> {
    const tokens = await this.getStoredTokens(integrationId);
    if (!tokens?.accessToken) {
      throw new Error(`Not authenticated with ${this.config.serviceName} for integration ${integrationId}`);
    }
    return tokens.accessToken;
  }

  /**
   * Check if authenticated
   */
  async isAuthenticated(integrationId: string): Promise<boolean> {
    const tokens = await this.getStoredTokens(integrationId);
    return !!tokens?.accessToken;
  }
}

export default BaseOAuthService; 