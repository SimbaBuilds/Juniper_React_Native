import { supabase } from '../../../supabase/supabase';

interface TwilioCredentials {
  account_sid: string;
  auth_token: string;
  phone_number: string;
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
      if (!credentials.account_sid || !credentials.auth_token || !credentials.phone_number) {
        return {
          success: false,
          error: 'All fields are required: Account SID, Auth Token, and Phone Number'
        };
      }

      // Basic format validation
      if (!credentials.account_sid.startsWith('AC')) {
        return {
          success: false,
          error: 'Account SID should start with "AC"'
        };
      }

      if (credentials.auth_token.length < 32) {
        return {
          success: false,
          error: 'Auth Token appears to be invalid (too short)'
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
        ...credentials,
        phone_number: cleanedPhoneNumber
      };

      // Store credentials in database
      await this.updateIntegrationWithCredentials(cleanedCredentials, integrationId);

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
            account_sid: credentials.account_sid,
            auth_token: credentials.auth_token,
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

      console.log('🔵 Integration record updated successfully with Twilio credentials');
    } catch (error) {
      console.error('🔴 Error updating integration record with Twilio credentials:', error);
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
1. Go to "Console" → "Account" (scroll down)
2. Copy your "Account SID" (starts with \`AC...\`)
3. Copy your "Auth Token" (click "Show" to reveal)
4. Save these credentials securely

---

📞 Phone Number Options

Choose the option that best fits your needs:

🟢 Option A: Buy New Number (Recommended)
Best for most users - simple & clean separation

⚡ Setup Time: 2 minutes
🕐 Live Time: Instant
💵 Monthly Cost: $1.15 - $3.25/month
📱 SMS Included: 20-300 messages
✅ Benefits: Keep personal number private, professional setup

Steps: Console → Phone Numbers → Manage → Buy a number → Select type (local/toll-free) → Purchase → Copy number

🟡 Option B: Port Your Personal Number  
For users who want AI to text as "them"

⚡ Setup Time: 5 minutes
🕐 Live Time: 2-4 weeks
💵 Cost: $2 setup + $1.15-3.25/month
📱 SMS Included: 20-300 messages
⚠️ Note: AI sends as you from your known number

Steps: Console → Phone Numbers → Port and Host → Enter your number → Upload carrier info → Pay $2 → Wait 2-4 weeks

---

Call Pricing:
📞 Voice calls: $0.0085/minute
💡 Example: 5-minute call = $0.04

Ready to get started? Choose your option above and let's connect your assistant! 🚀
    `.trim();
  }
}

export default TwilioAuthService; 