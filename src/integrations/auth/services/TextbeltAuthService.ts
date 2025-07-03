import { completeIntegration, createCredentialsAuthParams, disconnectIntegration } from '../../../api/integration_api';
import { supabase, DatabaseService } from '../../../supabase/supabase';

interface TextbeltCredentials {
  phone_number: string;
}

interface TextbeltAuthResult {
  success: boolean;
  credentials?: TextbeltCredentials;
  error?: string;
}

export class TextbeltAuthService {
  private static instance: TextbeltAuthService;
  
  public static getInstance(): TextbeltAuthService {
    if (!TextbeltAuthService.instance) {
      TextbeltAuthService.instance = new TextbeltAuthService();
    }
    return TextbeltAuthService.instance;
  }

  public async storeCredentials(credentials: TextbeltCredentials, integrationId: string): Promise<TextbeltAuthResult> {
    try {
      console.log('🔵 Storing textbelt credentials...');
      
      // Validate required fields
      if (!credentials.phone_number) {
        return {
          success: false,
          error: 'Phone number is required'
        };
      }

      // Clean phone number (remove non-digits)
      const cleanedPhoneNumber = credentials.phone_number.replace(/[^\d]/g, '');
      if (cleanedPhoneNumber.length < 10) {
        return {
          success: false,
          error: 'Phone number must be at least 10 digits'
        };
      }

      const cleanedCredentials = {
        phone_number: cleanedPhoneNumber
      };

      // Store credentials in database
      await this.updateIntegrationWithCredentials(cleanedCredentials, integrationId);

      // Complete integration with backend
      await this.completeIntegration(cleanedCredentials, integrationId);

      console.log('✅ textbelt credentials validated and stored');
      
      return {
        success: true,
        credentials: cleanedCredentials
      };
    } catch (error) {
      console.error('❌ Error storing textbelt credentials:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to store credentials'
      };
    }
  }

  private async updateIntegrationWithCredentials(credentials: TextbeltCredentials, integrationId: string): Promise<void> {
    try {
      console.log('🔵 Updating integration record with textbelt credentials...');
      
      const { error } = await supabase
        .from('integrations')
        .update({
          configuration: {
            phone_number: credentials.phone_number
          },
          is_active: true,
          status: 'active',
          updated_at: new Date().toISOString(),
          last_used: new Date().toISOString()
        })
        .eq('id', integrationId);

      if (error) {
        throw error;
      }

      console.log('🔵 Integration record updated successfully with textbelt credentials');
    } catch (error) {
      console.error('🔴 Error updating integration record with textbelt credentials:', error);
      throw error;
    }
  }

  private async completeIntegration(credentials: TextbeltCredentials, integrationId: string): Promise<void> {
    try {
      const authParams = createCredentialsAuthParams({
        phone_number: credentials.phone_number
      });

      await completeIntegration({
        integration_id: integrationId,
        service_name: 'textbelt',
        service_type: 'credentials',
        auth_params: authParams
      });
    } catch (error) {
      console.error('🔴 Error completing textbelt integration (backend endpoint not implemented yet):', error);
      console.log('ℹ️ textbelt integration stored locally, backend integration will be added later');
      // Don't throw error - credentials are already stored locally in configuration field
      // Backend endpoint will be implemented later
    }
  }

  public async testCredentials(credentials: TextbeltCredentials, integrationId: string): Promise<boolean> {
    try {
      console.log('🔵 Testing textbelt credentials (validation only)...');
      
      const result = await this.storeCredentials(credentials, integrationId);
      return result.success;
    } catch (error) {
      console.error('❌ Error testing textbelt credentials:', error);
      return false;
    }
  }

  private async clearCredentialsFromDatabase(integrationId: string): Promise<void> {
    try {
      console.log('🔵 Clearing textbelt credentials from database...');
      
      const { error } = await supabase
        .from('integrations')
        .update({
          configuration: null,
          is_active: false,
          status: 'inactive',
          updated_at: new Date().toISOString()
        })
        .eq('id', integrationId);

      if (error) {
        throw error;
      }

      console.log('🔵 textbelt credentials cleared from database successfully');
    } catch (error) {
      console.error('🔴 Error clearing textbelt credentials from database:', error);
      throw error;
    }
  }

  public async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🔵 Disconnecting textbelt integration...');
      
      // Clear credentials and set to inactive
      await this.clearCredentialsFromDatabase(integrationId);
      
      // Delete the integration record from Supabase (same as other services)
      await DatabaseService.deleteIntegration(integrationId);
      
      try {
        await disconnectIntegration({
          integration_id: integrationId,
          service_name: 'textbelt'
        });
      } catch (error) {
        console.warn('⚠️ Backend disconnect endpoint not implemented yet for textbelt:', error);
        console.log('ℹ️ Local disconnect completed successfully');
      }

      console.log('✅ textbelt integration disconnected and removed');
    } catch (error) {
      console.error('❌ Error disconnecting textbelt:', error);
      throw error;
    }
  }

  public static getUserGuide(): string {
    return `
📱 Textbelt SMS Setup Guide

> Connect your phone to receive SMS messages through textbelt in seconds

---

🚀 Quick Start (2 minutes total)

Step 1: Enter Your Phone Number
⏱️ 30 seconds
1. Enter your mobile phone number

Step 2: Complete Setup
⏱️ 30 seconds
1. Click "Connect" to activate
2. You'll receive a test message to confirm setup

---

💡 How It Works

Textbelt will send SMS messages directly to your phone number using their API service.
You will not receive promotional content.

---

✅ Benefits

• No API keys required
• Instant setup
• Works with any phone
• No promotional content
• Reliable delivery

Ready to connect? Enter your details below! 🚀
    `.trim();
  }
}

export default TextbeltAuthService;