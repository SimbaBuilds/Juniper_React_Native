import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';

export interface EpicIssuer {
  id: string;
  organization_name: string;
  organization_id?: string;
  fhir_base_url: string;
  auth_endpoint: string;
  token_endpoint: string;
  city?: string;
  state?: string;
  zip_code?: string;
  latitude?: number;
  longitude?: number;
  is_active: boolean;
  supported_resources?: string[];
  last_verified_at?: string;
}

export interface UserEpicConnection {
  id: string;
  user_id: string;
  issuer_id: string;
  integration_id: string;
  patient_id?: string;
  patient_mrn?: string;
  is_active: boolean;
  last_sync_at?: string;
  created_at: string;
}

export class MultiIssuerEpicAuthService extends BaseOAuthService {
  private static instance: MultiIssuerEpicAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): MultiIssuerEpicAuthService {
    if (!MultiIssuerEpicAuthService.instance) {
      MultiIssuerEpicAuthService.instance = new MultiIssuerEpicAuthService('epic-mychart');
    }
    return MultiIssuerEpicAuthService.instance;
  }

  private constructor(serviceName: string) {
    super(serviceName);
  }

  /**
   * Add a callback to be notified when authentication status changes
   */
  public addAuthCallback(callback: (integrationId: string, isAuthenticated: boolean) => void): void {
    this.authCallbacks.push(callback);
  }

  /**
   * Remove an authentication callback
   */
  public removeAuthCallback(callback: (integrationId: string, isAuthenticated: boolean) => void): void {
    const index = this.authCallbacks.indexOf(callback);
    if (index > -1) {
      this.authCallbacks.splice(index, 1);
    }
  }

  /**
   * Notify all callbacks of authentication status change
   */
  private async notifyAuthCallbacks(integrationId: string): Promise<void> {
    const isAuth = await this.isAuthenticated(integrationId);
    this.authCallbacks.forEach(callback => {
      try {
        callback(integrationId, isAuth);
      } catch (error) {
        console.error('Error in auth callback:', error);
      }
    });
  }

  /**
   * Fetch all Epic issuers from database
   */
  async getEpicIssuers(searchTerm?: string): Promise<EpicIssuer[]> {
    try {
      let query = supabase
        .from('epic_issuers')
        .select('*')
        .eq('is_active', true)
        .order('organization_name', { ascending: true });

      if (searchTerm) {
        query = query.or(`organization_name.ilike.%${searchTerm}%,city.ilike.%${searchTerm}%,state.ilike.%${searchTerm}%`);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('❌ Error fetching Epic issuers:', error);
      throw error;
    }
  }

  /**
   * Get user's Epic connections
   */
  async getUserEpicConnections(userId: string): Promise<(UserEpicConnection & { issuer: EpicIssuer })[]> {
    try {
      const { data, error } = await supabase
        .from('user_epic_connections')
        .select(`
          *,
          issuer:epic_issuers!issuer_id(*)
        `)
        .eq('user_id', userId)
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('❌ Error fetching user Epic connections:', error);
      throw error;
    }
  }

  /**
   * Create user Epic connections for selected issuers
   */
  async createUserEpicConnections(userId: string, issuerIds: string[]): Promise<UserEpicConnection[]> {
    try {
      const connections: Omit<UserEpicConnection, 'id' | 'created_at'>[] = [];

      for (const issuerId of issuerIds) {
        // Generate a unique integration ID for each issuer connection
        const integrationId = `epic-${issuerId}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        
        connections.push({
          user_id: userId,
          issuer_id: issuerId,
          integration_id: integrationId,
          is_active: true
        });
      }

      const { data, error } = await supabase
        .from('user_epic_connections')
        .insert(connections)
        .select('*');

      if (error) {
        throw error;
      }

      console.log('✅ Created Epic connections for issuers:', issuerIds);
      return data || [];
    } catch (error) {
      console.error('❌ Error creating Epic connections:', error);
      throw error;
    }
  }

  /**
   * Start OAuth authentication flow for a specific issuer
   */
  async authenticate(integrationId: string): Promise<AuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Get the connection and issuer details
      const connection = await this.getConnectionByIntegrationId(integrationId);
      if (!connection) {
        throw new Error('Epic connection not found');
      }

      // Pre-flight check: ensure App Links are enabled
      await this.checkAppLinksBeforeAuth();

      const authUrl = this.buildIssuerAuthUrl(connection.issuer, integrationId);
      
      console.log('🏥 Starting Epic MyChart OAuth flow...');
      console.log('🏥 Integration ID:', integrationId);
      console.log('🏥 Issuer:', connection.issuer.organization_name);
      console.log('🏥 Opening OAuth URL:', authUrl);
      
      const supported = await Linking.canOpenURL(authUrl);
      if (supported) {
        console.log('✅ Opening OAuth URL in browser...');
        await Linking.openURL(authUrl);
        console.log('✅ OAuth URL opened successfully');
        
        // Return a placeholder - actual token exchange happens in callback
        return {
          accessToken: 'pending',
          refreshToken: 'pending',
          expiresAt: Date.now(),
          scope: this.config.scopes.join(' ')
        };
      } else {
        throw new Error('Cannot open OAuth URL - URL not supported');
      }
    } catch (error) {
      console.error('❌ Error during Epic MyChart authentication:', error);
      throw error;
    }
  }

  /**
   * Build authorization URL for a specific issuer
   */
  private buildIssuerAuthUrl(issuer: EpicIssuer, integrationId: string): string {
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      response_type: 'code',
      scope: this.config.scopes.join(' '),
      state: integrationId,
      aud: issuer.fhir_base_url, // Epic requires the audience parameter to be the FHIR base URL
      ...this.config.additionalParameters
    });

    return `${issuer.auth_endpoint}?${params}`;
  }

  /**
   * Get connection by integration ID
   */
  private async getConnectionByIntegrationId(integrationId: string): Promise<(UserEpicConnection & { issuer: EpicIssuer }) | null> {
    try {
      const { data, error } = await supabase
        .from('user_epic_connections')
        .select(`
          *,
          issuer:epic_issuers!issuer_id(*)
        `)
        .eq('integration_id', integrationId)
        .single();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      console.error('❌ Error fetching connection by integration ID:', error);
      return null;
    }
  }

  /**
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string, integrationId: string, state?: string): Promise<boolean> {
    try {
      console.log('🏥 Handling Epic MyChart OAuth callback...');
      console.log('🏥 Integration ID:', integrationId);
      
      if (!code) {
        throw new Error('No authorization code provided');
      }

      const connection = await this.getConnectionByIntegrationId(integrationId);
      if (!connection) {
        throw new Error('Epic connection not found');
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code, connection.issuer);
      
      console.log('✅ Token exchange successful');
      
      // Store tokens using base class method
      await this.storeTokens(tokenData, integrationId);
      await this.saveIntegrationToSupabase(tokenData, integrationId, connection);
      
      // Mark this as a reconnection to skip completion flow
      this.setIsReconnection(true, integrationId);
      await this.completeIntegration(tokenData, integrationId);
      
      console.log('✅ Epic MyChart authentication successful');
      await this.notifyAuthCallbacks(integrationId);
      return true;
    } catch (error) {
      console.error('❌ Error handling Epic MyChart auth callback:', error);
      return false;
    }
  }

  /**
   * Exchange authorization code for tokens
   */
  private async exchangeCodeForToken(code: string, issuer: EpicIssuer): Promise<any> {
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', this.config.clientId);
    if (this.config.clientSecret) {
      requestBody.append('client_secret', this.config.clientSecret);
    }
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('redirect_uri', this.config.redirectUri);
    requestBody.append('aud', issuer.fhir_base_url);
    
    // Use the issuer's specific token endpoint
    const response = await fetch(issuer.token_endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'User-Agent': 'MobileJarvisNative/1.0',
      },
      body: requestBody.toString(),
    });

    const responseText = await response.text();
    
    if (!response.ok) {
      console.error(`❌ Epic token exchange failed:`, {
        status: response.status,
        statusText: response.statusText,
        response_body: responseText,
        issuer: issuer.organization_name
      });
      throw new Error(`Token exchange failed: ${response.status} ${response.statusText}`);
    }

    return JSON.parse(responseText);
  }

  /**
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('🏥 Refreshing Epic MyChart token...');

      const connection = await this.getConnectionByIntegrationId(integrationId);
      if (!connection) {
        throw new Error('Epic connection not found');
      }

      const requestBody = new URLSearchParams();
      requestBody.append('client_id', this.config.clientId);
      requestBody.append('refresh_token', refreshToken);
      requestBody.append('grant_type', 'refresh_token');
      
      const response = await fetch(connection.issuer.token_endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: requestBody.toString(),
      });

      const responseText = await response.text();
      
      if (!response.ok) {
        throw new Error(`Token refresh failed: ${response.status} ${response.statusText}`);
      }

      const tokenData = JSON.parse(responseText);
      
      // Update stored tokens
      await this.storeTokens({
        access_token: tokenData.access_token,
        refresh_token: tokenData.refresh_token || refreshToken,
        expires_in: tokenData.expires_in,
        scope: tokenData.scope
      }, integrationId);

      await this.updateTokensInSupabase(tokenData, integrationId);
      
      console.log('✅ Epic MyChart access token refreshed successfully');

      return {
        accessToken: tokenData.access_token,
        refreshToken: tokenData.refresh_token || refreshToken,
        expiresAt: Date.now() + (tokenData.expires_in * 1000),
        scope: tokenData.scope
      };
    } catch (error) {
      console.error('❌ Epic MyChart token refresh failed:', error);
      throw new Error(`Failed to refresh authentication. Please try signing in again.`);
    }
  }

  /**
   * Save integration to Supabase
   */
  private async saveIntegrationToSupabase(tokenData: any, integrationId: string, connection: UserEpicConnection & { issuer: EpicIssuer }): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      // Use raw insert instead of upsert for MyChart integrations
      const { error } = await supabase
        .from('integrations')
        .insert({
          id: integrationId,
          user_id: user.id,
          service_name: this.config.serviceName,
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: expiresAt.toISOString(),
          scope: tokenData.scope || this.config.scopes.join(' '),
          is_active: true,
          configuration: {
            issuer_id: connection.issuer_id,
            organization_name: connection.issuer.organization_name,
            fhir_base_url: connection.issuer.fhir_base_url,
            scopes: this.config.scopes,
            fhir_user: tokenData.fhirUser,
            patient_id: tokenData.patient,
          },
        });

      if (error) {
        throw error;
      }

      console.log('✅ Epic MyChart integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving Epic MyChart integration to Supabase:', error);
    }
  }

  /**
   * Update tokens in Supabase
   */
  private async updateTokensInSupabase(tokenData: any, integrationId: string): Promise<void> {
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
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Epic MyChart tokens updated in Supabase');
    } catch (error) {
      console.error('❌ Error updating Epic MyChart tokens in Supabase:', error);
    }
  }

  /**
   * Disconnect and deactivate integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      await super.disconnect(integrationId);
      await this.deactivateIntegrationInSupabase(integrationId);
      await this.deactivateUserConnection(integrationId);
      await this.notifyAuthCallbacks(integrationId);
    } catch (error) {
      console.error('❌ Error during Epic MyChart disconnect:', error);
      await this.notifyAuthCallbacks(integrationId);
      throw error;
    }
  }

  /**
   * Deactivate integration in Supabase
   */
  private async deactivateIntegrationInSupabase(integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during sign out');
        return;
      }

      const { error } = await supabase
        .from('integrations')
        .update({ is_active: false })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Epic MyChart integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating Epic MyChart integration in Supabase:', error);
    }
  }

  /**
   * Deactivate user connection
   */
  private async deactivateUserConnection(integrationId: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('user_epic_connections')
        .update({ is_active: false })
        .eq('integration_id', integrationId);

      if (error) {
        throw error;
      }

      console.log('✅ Epic MyChart user connection deactivated');
    } catch (error) {
      console.error('❌ Error deactivating Epic MyChart user connection:', error);
    }
  }

  /**
   * Make authenticated FHIR API call to Epic
   */
  async makeFhirApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const accessToken = await this.getAccessToken(integrationId);
    const connection = await this.getConnectionByIntegrationId(integrationId);
    
    if (!connection) {
      throw new Error('Epic connection not found');
    }

    const response = await fetch(`${connection.issuer.fhir_base_url}${endpoint}`, {
      ...options,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/fhir+json',
        'Content-Type': 'application/fhir+json',
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Epic FHIR API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Test the connection by getting patient information
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      const patientData = await this.makeFhirApiCall('/Patient', {}, integrationId);
      
      return {
        patientCount: patientData.total || 0,
        resourceType: patientData.resourceType,
        connectionStatus: 'active'
      };
    } catch (error) {
      console.error('🔴 Epic MyChart connection test failed:', error);
      throw error;
    }
  }

  /**
   * Get patient observations (labs, vitals, etc.)
   */
  async getObservations(integrationId: string, category?: string): Promise<any> {
    try {
      let endpoint = '/Observation';
      const params = new URLSearchParams();
      
      if (category) {
        params.append('category', category);
      }
      
      if (params.toString()) {
        endpoint += `?${params.toString()}`;
      }

      return await this.makeFhirApiCall(endpoint, {}, integrationId);
    } catch (error) {
      console.error('🔴 Error fetching Epic observations:', error);
      throw error;
    }
  }

  /**
   * Get patient allergies
   */
  async getAllergies(integrationId: string): Promise<any> {
    try {
      return await this.makeFhirApiCall('/AllergyIntolerance', {}, integrationId);
    } catch (error) {
      console.error('🔴 Error fetching Epic allergies:', error);
      throw error;
    }
  }

  /**
   * Get patient medications
   */
  async getMedications(integrationId: string): Promise<any> {
    try {
      return await this.makeFhirApiCall('/MedicationRequest', {}, integrationId);
    } catch (error) {
      console.error('🔴 Error fetching Epic medications:', error);
      throw error;
    }
  }
}

export default MultiIssuerEpicAuthService;