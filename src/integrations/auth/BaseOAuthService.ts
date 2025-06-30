import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { getOAuthConfig, getRedirectUri, buildAuthUrl, OAuthServiceConfig } from './OAuthConfig';
import { completeIntegration, createOAuthAuthParams, disconnectIntegration, CompleteIntegrationRequest } from '../../api/integration_api';
import { calculateExpirationDate, safeToISOString, safeParseDateString, isValidDate } from './DateUtils';
import { createBasicAuthHeader } from '../../utils/base64';

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
  async getStoredTokens(integrationId: string): Promise<AuthResult | null> {
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
      
      if (now >= expiresAt - 300000) { // Refresh 5 minutes before expiry
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
      const additionalData = this.extractAdditionalTokenData(result);
      const authParams = createOAuthAuthParams(result, additionalData);

      const requestPayload: CompleteIntegrationRequest = {
        integration_id: integrationId,
        service_name: this.config.serviceName,
        service_type: 'oauth' as const,
        auth_params: authParams
      };

      console.log(`🔍 ${this.config.serviceName} backend request payload:`, JSON.stringify(requestPayload, null, 2));
      console.log(`🔍 ${this.config.serviceName} original result:`, JSON.stringify(result, null, 2));
      console.log(`🔍 ${this.config.serviceName} additional data:`, JSON.stringify(additionalData, null, 2));

      await completeIntegration(requestPayload);

      console.log(`✅ ${this.config.serviceName} integration completed with backend`);
    } catch (error) {
      console.warn(`⚠️ ${this.config.serviceName} backend integration completion failed (expected - endpoint not implemented yet):`, (error as any)?.message || error);
      console.log(`ℹ️ ${this.config.serviceName} OAuth was successful - tokens stored locally in database`);
      // Don't throw here - the OAuth was successful and tokens are stored locally
      // Backend completion is optional and not yet implemented
    }
  }

  /**
   * Disconnect integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log(`🔌 Disconnecting ${this.config.serviceName} integration...`);

      const tokens = await this.getStoredTokens(integrationId);
      
      // Revoke tokens if supported
      if (tokens && this.config.revokeEndpoint) {
        await this.revokeTokens(tokens.accessToken);
      }

      // Clear stored tokens
      await this.clearStoredTokens(integrationId);

      // Disconnect from backend
      await disconnectIntegration({
        integration_id: integrationId,
        service_name: this.config.serviceName
      });

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