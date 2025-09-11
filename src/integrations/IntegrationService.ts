import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { getAuthService } from './auth';
import TwilioAuthService from './auth/services/TwilioAuthService';
import TextbeltAuthService from './auth/services/TextbeltAuthService';
// TwitterAuthService removed - Twitter/X is now managed via enabled_system_integrations field
import { Alert } from 'react-native';
import { supabase } from '../supabase/supabase';
import { Integration } from '../supabase/tables';

interface StartIntegrationParams {
  serviceId: string;
  serviceName: string;
  userId: string;
}


interface TwilioCredentials {
  accountSid: string;
  apiKey: string;
  apiSecret: string;
  phoneNumber: string;
}

interface StartTwilioIntegrationParams extends StartIntegrationParams {
  credentials: TwilioCredentials;
}

interface TextbeltCredentials {
  phone_number: string;
}

interface StartTextbeltIntegrationParams extends StartIntegrationParams {
  credentials: TextbeltCredentials;
}

// Helper function to safely get error message
function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

/**
 * Map database service names to internal service names
 */
function mapServiceName(dbServiceName: string): string {
  const serviceMap: Record<string, string> = {
    'Notion': 'notion',
    'Slack': 'slack',
    'Zoom': 'zoom',
    'Perplexity': 'perplexity',
    'XAI Live Search': 'xai_live_search',
    'Google Sheets': 'google-sheets',
    'Google Docs': 'google-docs',
    'Gmail': 'gmail',
    'Google Calendar': 'google-calendar',
    'Microsoft Excel Online': 'microsoft-excel',
    'Microsoft Word Online': 'microsoft-word',
    'Microsoft Outlook Calendar': 'microsoft-outlook-calendar',
    'Microsoft Outlook Mail': 'microsoft-outlook-mail',
    'Microsoft Teams': 'microsoft-teams',
    'Twilio': 'twilio',
    'Textbelt': 'textbelt',
    'Todoist': 'todoist',
    'Fitbit': 'fitbit',
    'Oura': 'oura',
    'MyChart': 'epic-mychart',
    'Apple Health': 'apple-health',
    'Google Fit': 'google-fit'
  };
  
  return serviceMap[dbServiceName] || dbServiceName.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
}

export class IntegrationService {
  private static instance: IntegrationService;

  static getInstance(): IntegrationService {
    if (!IntegrationService.instance) {
      IntegrationService.instance = new IntegrationService();
    }
    return IntegrationService.instance;
  }


  /**
   * Start the integration flow for a service
   */
  async startIntegration({ serviceId, serviceName, userId }: StartIntegrationParams): Promise<void> {
    try {
      console.log(`🚀 Starting integration for ${serviceName}...`);

      // Map database service name to internal service name
      const internalServiceName = mapServiceName(serviceName);
      console.log(`🔗 Mapped ${serviceName} to ${internalServiceName}`);

      // Check if service supports OAuth
      const supportedServices = [
        'notion', 
        'slack', 
        'todoist',
        'google-sheets', 
        'google-docs', 
        'gmail', 
        'google-calendar', 
        'google-meet',
        'zoom',
        'microsoft-excel',
        'microsoft-word',
        'microsoft-outlook-calendar',
        'microsoft-outlook-mail',
        'microsoft-teams',
        'fitbit',
        'oura',
        // 'epic-mychart', // Removed - Epic uses custom flow
        'apple-health',
        'google-fit'
      ];
      if (!supportedServices.includes(internalServiceName)) {
        Alert.alert(
          'Integration Not Available',
          `OAuth integration for ${serviceName} is not yet implemented. Please check back later.`,
          [{ text: 'OK' }]
        );
        return;
      }

      // Check if integration already exists
      const existingIntegrations = await DatabaseService.getIntegrations(userId);
      const existingIntegration = existingIntegrations.find(
        (integration: any) => integration.service_id === serviceId
      );

      if (existingIntegration && existingIntegration.is_active) {
        Alert.alert(
          'Already Connected',
          `You already have an active ${serviceName} integration. Would you like to reconnect?`,
          [
            { text: 'Cancel', style: 'cancel' },
            { 
              text: 'Reconnect', 
              onPress: () => this.reconnectIntegration(existingIntegration.id, serviceName)
            }
          ]
        );
        return;
      }

      // Create or update integration record (upsert)
      const integration = await this.createIntegrationRecord(serviceId, userId);
      console.log(`✅ Integration record created/updated with ID: ${integration.id}`);

      // Start OAuth flow
      await this.startOAuthFlow(internalServiceName, integration.id);

    } catch (error) {
      console.error(`❌ Error starting ${serviceName} integration:`, error);
      Alert.alert(
        'Integration Error',
        `Failed to start ${serviceName} integration: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Create or update integration record in database (upsert)
   */
  async createIntegrationRecord(serviceId: string, userId: string, isSystemService: boolean = false): Promise<any> {
    try {
      const integrationData = {
        user_id: userId,
        service_id: serviceId,
        is_active: isSystemService, // System services start active by default
        status: isSystemService ? 'active' : 'pending',
        notes: null,
        last_used: isSystemService ? new Date().toISOString() : null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      // Upsert: insert or update on conflict of (user_id, service_id)
      const { data, error } = await supabase
        .from('integrations')
        .upsert(
          integrationData,
          {
            onConflict: 'user_id,service_id',
            ignoreDuplicates: false // Update if exists
          }
        )
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('❌ Error creating/updating integration record:', error);
      throw new Error('Failed to create or update integration record');
    }
  }


  /**
   * Start OAuth flow for specific service
   */
  private async startOAuthFlow(serviceName: string, integrationId: string, isReconnect: boolean = false): Promise<void> {
    try {
      console.log(`🔗 Starting OAuth flow for ${serviceName}...`);

      // Get the appropriate auth service
      const authService = getAuthService(serviceName);

      // Set reconnection flag if this is a reconnect
      if ('setIsReconnection' in authService && typeof authService.setIsReconnection === 'function') {
        authService.setIsReconnection(isReconnect, integrationId);
      }

      // Check if authenticate method exists and start authentication
      if ('authenticate' in authService && typeof authService.authenticate === 'function') {
        const result = await authService.authenticate(integrationId);
        
        console.log(`✅ ${serviceName} OAuth completed successfully`);
        
        // Update integration status to active
        await this.updateIntegrationStatus(integrationId, 'active', true);

        Alert.alert(
          'Integration Successful!',
          `Note: integration completion can take up to 3 minutes.`,
          [{ text: 'OK' }]
        );
      } else {
        throw new Error(`OAuth authentication not supported for ${serviceName}`);
      }

    } catch (error) {
      console.error(`❌ OAuth flow failed for ${serviceName}:`, error);
      
      // Clean up reconnection state on error
      try {
        const authService = getAuthService(serviceName);
        if ('clearReconnectionState' in authService && typeof authService.clearReconnectionState === 'function') {
          authService.clearReconnectionState(integrationId);
        }
      } catch (cleanupError) {
        console.warn('Failed to cleanup reconnection state:', cleanupError);
      }
      
      // Update integration status to failed
      await this.updateIntegrationStatus(integrationId, 'failed', false);

      // Handle user cancellation differently from errors
      const errorMessage = getErrorMessage(error);
      if (errorMessage.includes('cancel') || errorMessage.includes('dismissed')) {
        console.log(`ℹ️ User cancelled ${serviceName} OAuth flow`);
        // Don't show error for user cancellation
        return;
      }

      Alert.alert(
        'Authentication Failed',
        `Failed to connect to ${serviceName}: ${errorMessage}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Update integration status in database
   */
  async updateIntegrationStatus(integrationId: string, status: string, isActive: boolean): Promise<void> {
    try {
      const { error } = await supabase
        .from('integrations')
        .update({
          status,
          is_active: isActive,
          updated_at: new Date().toISOString(),
          ...(isActive && { last_used: new Date().toISOString() })
        })
        .eq('id', integrationId);

      if (error) throw error;
      console.log(`✅ Integration ${integrationId} status updated to: ${status}`);
    } catch (error) {
      console.error('❌ Error updating integration status:', error);
      // Don't throw here - this is a secondary operation
    }
  }

  /**
   * Reconnect an existing integration
   */
  async reconnectIntegration(integrationId: string, serviceName: string): Promise<void> {
    try {
      console.log(`🔄 Reconnecting ${serviceName} integration...`);

      // Map service name to internal format
      const internalServiceName = mapServiceName(serviceName);
      console.log(`🔗 Mapped ${serviceName} to ${internalServiceName} for reconnection`);

      // Update status to pending
      await this.updateIntegrationStatus(integrationId, 'pending', false);

      // Start OAuth flow with existing integration ID (skip completion message for reconnect)
      await this.startOAuthFlow(internalServiceName, integrationId, true);

    } catch (error) {
      console.error(`❌ Error reconnecting ${serviceName}:`, error);
      Alert.alert(
        'Reconnection Failed',
        `Failed to reconnect ${serviceName}: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Disconnect an integration
   */
  async disconnectIntegration(integrationId: string, serviceName: string): Promise<void> {
    try {
      console.log(`🔌 Disconnecting ${serviceName} integration...`);

      // Map service name to internal format
      const internalServiceName = mapServiceName(serviceName);
      console.log(`🔗 Mapped ${serviceName} to ${internalServiceName} for disconnection`);

      // Get the auth service and disconnect if it supports it
      const authService = getAuthService(internalServiceName);
      if ('disconnect' in authService && typeof authService.disconnect === 'function') {
        await authService.disconnect(integrationId);
      }

      // Update integration status
      await this.updateIntegrationStatus(integrationId, 'inactive', false);

      // Delete the integration record from Supabase
      await DatabaseService.deleteIntegration(integrationId);

      Alert.alert(
        'Integration Disconnected',
        `Your ${serviceName} integration has been disconnected and removed from your account.`,
        [{ text: 'OK' }]
      );

    } catch (error) {
      console.error(`❌ Error disconnecting ${serviceName}:`, error);
      Alert.alert(
        'Disconnect Error',
        `Failed to disconnect ${serviceName}: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Test an integration connection
   */
  async testIntegration(integrationId: string, serviceName: string): Promise<any> {
    try {
      console.log(`🧪 Testing ${serviceName} integration...`);

      // Map service name to internal format
      const internalServiceName = mapServiceName(serviceName);
      console.log(`🔗 Mapped ${serviceName} to ${internalServiceName} for testing`);

      const authService = getAuthService(internalServiceName);
      if ('testConnection' in authService && typeof authService.testConnection === 'function') {
        const result = await authService.testConnection(integrationId);
        console.log(`✅ ${serviceName} integration test successful`);
        return result;
      } else {
        throw new Error(`Test connection not supported for ${serviceName}`);
      }

    } catch (error) {
      console.error(`❌ ${serviceName} integration test failed:`, error);
      throw error;
    }
  }

  /**
   * Check if a service has valid stored tokens
   */
  async hasValidTokens(integrationId: string, serviceName: string): Promise<boolean> {
    try {
      // Map service name to internal format
      const internalServiceName = mapServiceName(serviceName);
      
      const authService: any = getAuthService(internalServiceName);
      if ('getStoredTokens' in authService && typeof authService.getStoredTokens === 'function') {
        const tokens = await authService.getStoredTokens(integrationId);
        return !!tokens;
      }
      return false;
    } catch (error) {
      console.error(`❌ Error checking tokens for ${serviceName}:`, error);
      return false;
    }
  }

  /**
   * Start the integration flow for Twilio with credentials
   */
  async startTwilioIntegration({ serviceId, serviceName, userId, credentials }: StartTwilioIntegrationParams): Promise<void> {
    try {
      console.log(`🚀 Starting Twilio integration...`);

      // Check if integration already exists
      const existingIntegrations = await DatabaseService.getIntegrations(userId);
      const existingIntegration = existingIntegrations.find(
        (integration: any) => integration.service_id === serviceId
      );

      if (existingIntegration && existingIntegration.is_active) {
        Alert.alert(
          'Already Connected',
          `You already have an active Twilio integration. Would you like to reconnect?`,
          [
            { text: 'Cancel', style: 'cancel' },
            { 
              text: 'Reconnect', 
              onPress: () => this.reconnectTwilioIntegration(existingIntegration.id, credentials)
            }
          ]
        );
        return;
      }

      // Create or update integration record (upsert)
      const integration = await this.createIntegrationRecord(serviceId, userId);
      console.log(`✅ Integration record created/updated with ID: ${integration.id}`);

      // Start Twilio authentication
      // await this.startTwilioAuth(integration.id, credentials);

    } catch (error) {
      console.error(`❌ Error starting Twilio integration:`, error);
      Alert.alert(
        'Integration Error',
        `Failed to start Twilio integration: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Start Twilio authentication with credentials
   */
  // private async startTwilioAuth(integrationId: string, credentials: TwilioCredentials): Promise<void> {
  //   try {
  //     console.log(`🔑 Starting Twilio authentication...`);

  //     const twilioService = TwilioAuthService.getInstance();
  //     const result = await twilioService.storeCredentials(credentials, integrationId);
      
  //     if (!result.success) {
  //       throw new Error(result.error || 'Failed to validate Twilio credentials');
  //     }

  //     console.log(`✅ Twilio authentication completed successfully`);
      
  //     // Update integration status to active
  //     await this.updateIntegrationStatus(integrationId, 'active', true);

  //     Alert.alert(
  //       'Integration Successful!',
  //       `Your Twilio account has been successfully connected.`,
  //       [{ text: 'OK' }]
  //     );

  //   } catch (error) {
  //     console.error(`❌ Twilio authentication failed:`, error);
      
  //     // Update integration status to failed
  //     await this.updateIntegrationStatus(integrationId, 'failed', false);

  //     Alert.alert(
  //       'Authentication Failed',
  //       `Failed to connect to Twilio: ${getErrorMessage(error)}`,
  //       [{ text: 'OK' }]
  //     );
  //   }
  // }

  /**
   * Reconnect Twilio integration
   */
  private async reconnectTwilioIntegration(integrationId: string, credentials: TwilioCredentials): Promise<void> {
    try {
      console.log(`🔄 Reconnecting Twilio integration...`);

      // Update integration status to pending
      await this.updateIntegrationStatus(integrationId, 'pending', false);

      // // Start Twilio authentication
      // await this.startTwilioAuth(integrationId, credentials);

    } catch (error) {
      console.error(`❌ Error reconnecting Twilio integration:`, error);
      Alert.alert(
        'Reconnection Failed',
        `Failed to reconnect Twilio integration: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Start the integration flow for textbelt with credentials
   */
  async startTextbeltIntegration({ serviceId, serviceName, userId, credentials }: StartTextbeltIntegrationParams): Promise<void> {
    try {
      console.log(`🚀 Starting textbelt integration...`);

      // Check if integration already exists
      const existingIntegrations = await DatabaseService.getIntegrations(userId);
      const existingIntegration = existingIntegrations.find(
        (integration: any) => integration.service_id === serviceId
      );

      if (existingIntegration && existingIntegration.is_active) {
        Alert.alert(
          'Already Connected',
          `You already have an active textbelt integration. Would you like to reconnect?`,
          [
            { text: 'Cancel', style: 'cancel' },
            { 
              text: 'Reconnect', 
              onPress: () => this.reconnectTextbeltIntegration(existingIntegration.id, credentials)
            }
          ]
        );
        return;
      }

      // Create or update integration record (upsert)
      const integration = await this.createIntegrationRecord(serviceId, userId);
      console.log(`✅ Integration record created/updated with ID: ${integration.id}`);

      // Start textbelt authentication
      await this.startTextbeltAuth(integration.id, credentials);

    } catch (error) {
      console.error(`❌ Error starting textbelt integration:`, error);
      Alert.alert(
        'Integration Error',
        `Failed to start textbelt integration: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Start textbelt authentication with credentials
   */
  private async startTextbeltAuth(integrationId: string, credentials: TextbeltCredentials): Promise<void> {
    try {
      console.log(`🔑 Starting textbelt authentication...`);

      const textbeltService = TextbeltAuthService.getInstance();
      const mappedCredentials = {
        phone_number: credentials.phone_number
      };
      
      const result = await textbeltService.storeCredentials(mappedCredentials, integrationId);
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to validate textbelt credentials');
      }

      console.log(`✅ textbelt authentication completed successfully`);
      
      // Update integration status to active
      await this.updateIntegrationStatus(integrationId, 'active', true);

      Alert.alert(
        'Integration Successful!',
        `Your textbelt SMS service has been successfully connected.`,
        [{ text: 'OK' }]
      );

    } catch (error) {
      console.error(`❌ textbelt authentication failed:`, error);
      
      // Update integration status to failed
      await this.updateIntegrationStatus(integrationId, 'failed', false);

      Alert.alert(
        'Authentication Failed',
        `Failed to connect to textbelt: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  /**
   * Reconnect textbelt integration
   */
  private async reconnectTextbeltIntegration(integrationId: string, credentials: TextbeltCredentials): Promise<void> {
    try {
      console.log(`🔄 Reconnecting textbelt integration...`);

      // Update integration status to pending
      await this.updateIntegrationStatus(integrationId, 'pending', false);

      // Start textbelt authentication
      await this.startTextbeltAuth(integrationId, credentials);

    } catch (error) {
      console.error(`❌ Error reconnecting textbelt integration:`, error);
      Alert.alert(
        'Reconnection Failed',
        `Failed to reconnect textbelt integration: ${getErrorMessage(error)}`,
        [{ text: 'OK' }]
      );
    }
  }

  // System service methods removed - Twitter/X and Perplexity are now managed via enabled_system_integrations field in user_profiles
}

export default IntegrationService; 