import { completeIntegration, createCredentialsAuthParams, disconnectIntegration } from '../../../api/integration_api';
import { supabase } from '../../../supabase/supabase';

interface TwilioCredentials {
  accountSid: string;
  apiKey: string;
  apiSecret: string;
  phoneNumber: string;
}

interface TwilioAuthResult {
  success: boolean;
  credentials?: TwilioCredentials;
  error?: string;
}

export class TwilioAuthService {
  private static instance: TwilioAuthService;
  
  public static getInstance(): TwilioAuthService {
    if (!TwilioAuthService.instance) {
      TwilioAuthService.instance = new TwilioAuthService();
    }
    return TwilioAuthService.instance;
  }

  /**
   * Store Twilio API credentials
   */
  public async storeCredentials(credentials: TwilioCredentials, integrationId: string): Promise<TwilioAuthResult> {
    try {
      console.log('🔵 Storing Twilio credentials...');
      
      // Validate required fields
      if (!credentials.accountSid || !credentials.apiKey || !credentials.apiSecret || !credentials.phoneNumber) {
        return {
          success: false,
          error: 'All fields are required: Account SID, API Key, API Secret, and Phone Number'
        };
      }

      // Basic format validation
      if (!credentials.accountSid.startsWith('AC')) {
        return {
          success: false,
          error: 'Account SID should start with "AC"'
        };
      }

      if (!credentials.apiKey.startsWith('SK')) {
        return {
          success: false,
          error: 'API Key should start with "SK"'
        };
      }

      // Clean phone number (remove non-digits)
      const cleanedPhoneNumber = credentials.phoneNumber.replace(/[^\d]/g, '');
      if (cleanedPhoneNumber.length < 10) {
        return {
          success: false,
          error: 'Phone number must be at least 10 digits'
        };
      }

      const cleanedCredentials = {
        ...credentials,
        phoneNumber: cleanedPhoneNumber
      };

      // Store credentials in database
      await this.updateIntegrationWithCredentials(cleanedCredentials, integrationId);

      // Complete integration with backend
      await this.completeIntegration(cleanedCredentials, integrationId);

      console.log('✅ Twilio credentials validated and stored');
      
      return {
        success: true,
        credentials: cleanedCredentials
      };
    } catch (error) {
      console.error('❌ Error storing Twilio credentials:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to store credentials'
      };
    }
  }

  /**
   * Update integration record with Twilio credentials
   */
  private async updateIntegrationWithCredentials(credentials: TwilioCredentials, integrationId: string): Promise<void> {
    try {
      console.log('🔵 Updating integration record with Twilio credentials...');
      
      const { error } = await supabase
        .from('integrations')
        .update({
          // Store credentials in configuration field as JSON
          configuration: {
            account_sid: credentials.accountSid,
            api_key: credentials.apiKey,
            api_secret: credentials.apiSecret,
            phone_number: credentials.phoneNumber
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

      console.log('🔵 Integration record updated successfully with Twilio credentials');
    } catch (error) {
      console.error('🔴 Error updating integration record with Twilio credentials:', error);
      throw error;
    }
  }

  /**
   * Complete integration by calling backend
   */
  private async completeIntegration(credentials: TwilioCredentials, integrationId: string): Promise<void> {
    try {
      const authParams = createCredentialsAuthParams({
        account_sid: credentials.accountSid,
        api_key: credentials.apiKey,
        api_secret: credentials.apiSecret,
        phone_number: credentials.phoneNumber
      });

      await completeIntegration({
        integration_id: integrationId,
        service_name: 'twilio',
        service_type: 'credentials',
        auth_params: authParams
      });
    } catch (error) {
      console.error('🔴 Error completing Twilio integration:', error);
      throw error;
    }
  }

  /**
   * Test Twilio credentials (future implementation)
   */
  public async testCredentials(credentials: TwilioCredentials, integrationId: string): Promise<boolean> {
    try {
      // This would make a test API call to Twilio to validate credentials
      // For now, just return true if basic validation passes
      console.log('🔵 Testing Twilio credentials (validation only)...');
      
      const result = await this.storeCredentials(credentials, integrationId);
      return result.success;
    } catch (error) {
      console.error('❌ Error testing Twilio credentials:', error);
      return false;
    }
  }

  /**
   * Clear credentials from database integration record
   */
  private async clearCredentialsFromDatabase(integrationId: string): Promise<void> {
    try {
      console.log('🔵 Clearing Twilio credentials from database...');
      
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

      console.log('🔵 Twilio credentials cleared from database successfully');
    } catch (error) {
      console.error('🔴 Error clearing Twilio credentials from database:', error);
      throw error;
    }
  }

  /**
   * Disconnect Twilio integration
   */
  public async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🔵 Disconnecting Twilio integration...');
      
      // Clear credentials from database
      await this.clearCredentialsFromDatabase(integrationId);
      
      // Disconnect from backend
      await disconnectIntegration({
        integration_id: integrationId,
        service_name: 'twilio'
      });

      console.log('✅ Twilio integration disconnected');
    } catch (error) {
      console.error('❌ Error disconnecting Twilio:', error);
      throw error;
    }
  }

  /**
   * Get user guide for setting up Twilio
   */
  public static getUserGuide(): string {
    return `
📱 Twilio Setup Guide

> Get your AI assistant connected to SMS and voice calls in minutes

---

🚀 Quick Start (7 minutes total)

Step 1: Create Your Account
⏱️ 5 minutes
1. Visit [twilio.com](https://twilio.com) and create account
2. $15 free credit included - no payment required initially
3. Verify your email address

Step 2: Get Your API Credentials  
⏱️ 2 minutes
1. Go to **Console** → **Account** → **API keys & tokens**
2. Copy your **Account SID** (starts with \`AC...\`)
3. Create new **API Key** (starts with \`SK...\`) + **Secret**
4. Save these credentials securely

---

📞 Phone Number Options

Choose the option that best fits your needs:

🟢 Option A: Buy New Number (Recommended)
Best for most users - simple & clean separation

⚡ Setup Time: 2 minutes
🕐 Live Time: Instant
💵 Monthly Cost: $1.15 - $3.25
📱 SMS Included: 20-300 messages
✅ Benefits: Keep personal number private, professional setup

🟡 Option B: Port Your Personal Number  
For users who want AI to text as "them"

⚡ Setup Time: 5 minutes
🕐 Live Time: 2-4 weeks
💵 Cost: $2 setup + $1.15-3.25/month
📱 SMS Included: 20-300 messages
⚠️ Note: AI sends as you from your known number

---

💰 Cost Breakdown

Monthly Usage Estimates:
Usage Level | SMS Volume | SMS Cost | Number Cost | **Total/Month**
🟢 Light | ~20 messages | ~$1.15
🟡 Moderate | ~100 messages | ~$1.75
🔴 Heavy | ~300 messages | ~$3.25

Call Pricing:
📞 Voice calls: $0.0085/minute
💡 Example: 5-minute call = $0.04

Ready to get started? Choose your option above and let's connect your AI! 🚀
    `.trim();
  }
}

export default TwilioAuthService; 