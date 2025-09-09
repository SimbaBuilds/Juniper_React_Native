import { Linking } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';

export class EpicMyChartAuthService extends BaseOAuthService {
  private static instance: EpicMyChartAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): EpicMyChartAuthService {
    if (!EpicMyChartAuthService.instance) {
      EpicMyChartAuthService.instance = new EpicMyChartAuthService('epic-mychart');
    }
    return EpicMyChartAuthService.instance;
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
   * Start OAuth authentication flow
   */
  async authenticate(integrationId: string): Promise<AuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Pre-flight check: ensure App Links are enabled
      await this.checkAppLinksBeforeAuth();

      const authUrl = this.buildAuthUrl(integrationId);
      
      console.log('🏥 Starting Epic MyChart OAuth flow...');
      console.log('🏥 Integration ID:', integrationId);
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
   * Handle OAuth callback
   */
  async handleAuthCallback(code: string, integrationId: string, state?: string): Promise<boolean> {
    try {
      console.log('🏥 Handling Epic MyChart OAuth callback...');
      console.log('🏥 Integration ID:', integrationId);
      
      if (!code) {
        throw new Error('No authorization code provided');
      }
      
      console.log('🔄 Exchanging code for tokens...');
      const tokenData = await this.exchangeCodeForToken(code);
      
      console.log('✅ Token exchange successful');
      
      // Store tokens using base class method
      await this.storeTokens(tokenData, integrationId);
      await this.saveIntegrationToSupabase(tokenData, integrationId);
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
   * Refresh access token using refresh token
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('🏥 Refreshing Epic MyChart token...');

      const requestBody = new URLSearchParams();
      requestBody.append('client_id', this.config.clientId);
      requestBody.append('refresh_token', refreshToken);
      requestBody.append('grant_type', 'refresh_token');
      
      // Epic FHIR may require client authentication
      const tokenData = await this.makeTokenRequest(requestBody, 'token refresh', true);
      
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
   * Exchange authorization code for tokens
   */
  private async exchangeCodeForToken(code: string): Promise<any> {
    const requestBody = new URLSearchParams();
    requestBody.append('client_id', this.config.clientId);
    if (this.config.clientSecret) {
      requestBody.append('client_secret', this.config.clientSecret);
    }
    requestBody.append('code', code);
    requestBody.append('grant_type', 'authorization_code');
    requestBody.append('redirect_uri', this.getRedirectUri());
    
    // Epic requires the audience parameter
    requestBody.append('aud', 'https://fhir.epic.com/interconnect-fhir-oauth');
    
    return this.makeTokenRequest(requestBody, 'token exchange', true);
  }

  /**
   * Save integration to Supabase
   */
  private async saveIntegrationToSupabase(tokenData: any, integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      const expiresAt = new Date(Date.now() + (tokenData.expires_in * 1000));
      
      const { error } = await supabase
        .from('integrations')
        .update({
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          expires_at: expiresAt.toISOString(),
          scope: tokenData.scope || this.config.scopes.join(' '),
          is_active: true,
          configuration: {
            scopes: this.config.scopes,
            fhir_user: tokenData.fhirUser,
            patient_id: tokenData.patient,
          },
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

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
   * Make authenticated FHIR API call to Epic
   */
  async makeFhirApiCall(endpoint: string, options: RequestInit = {}, integrationId: string): Promise<any> {
    const accessToken = await this.getAccessToken(integrationId);

    // Epic FHIR base URL - in production this would be organization-specific
    const baseUrl = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4';
    
    const response = await fetch(`${baseUrl}${endpoint}`, {
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
      // Get patient information using FHIR Patient resource
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

export default EpicMyChartAuthService;