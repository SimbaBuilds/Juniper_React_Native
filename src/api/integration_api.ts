import api from './api';

export interface IntegrationAuthParams {
  // OAuth specific
  access_token?: string;
  refresh_token?: string;
  expires_at?: string;
  scope?: string;
  token_type?: string;
  id_token?: string;
  
  // API key specific
  api_key?: string;
  
  // Service specific data
  account_id?: string;
  user_id?: string;
  team_id?: string;
  team_name?: string;
  user_name?: string;
  user_email?: string;
  workspace_id?: string;
  workspace_name?: string;
  bot_id?: string;
  
  // Additional service-specific parameters
  [key: string]: any;
}

export interface CompleteIntegrationRequest {
  integration_id: string;
  service_name: string;
  service_type: 'oauth' | 'api_key' | 'credentials';
  auth_params: IntegrationAuthParams;
  status?: string;
  connected_at?: string;
}

export interface DisconnectIntegrationRequest {
  integration_id: string;
  service_name: string;
}


/**
 * Helper function to create OAuth auth params from AuthorizeResult
 * Note: Token params removed - backend will fetch fresh tokens from DB
 */
export function createOAuthAuthParams(result: any, additionalParams?: Record<string, any>): IntegrationAuthParams {
  return {
    // Only include metadata, not tokens - backend fetches fresh tokens from DB
    scope: Array.isArray(result.scopes) ? result.scopes.join(' ') : result.scopes,
    ...additionalParams
  };
}

/**
 * Helper function to create API key auth params
 */
export function createApiKeyAuthParams(apiKey: string, additionalParams?: Record<string, any>): IntegrationAuthParams {
  return {
    api_key: apiKey,
    ...additionalParams
  };
}

/**
 * Helper function to create credentials auth params
 */
export function createCredentialsAuthParams(credentials: Record<string, any>): IntegrationAuthParams {
  return credentials;
} 