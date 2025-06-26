import { completeIntegration, createCredentialsAuthParams, disconnectIntegration } from '../../api/integration_api';

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

      // Complete integration with backend
      await this.completeIntegration(cleanedCredentials, integrationId);

      console.log('✅ Twilio credentials validated and ready to store');
      
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
   * Disconnect Twilio integration
   */
  public async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🔵 Disconnecting Twilio integration...');
      
      // Disconnect from backend
      await disconnectIntegration({
        integration_id: integrationId,
        service_name: 'twilio'
      });

      // Clear any locally stored credentials if needed
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
**Twilio Setup for AI Assistant:**

**1. Create Account (5 min)**
- Sign up at twilio.com ($15 free credit)

**2. Get Credentials (2 min)**
- Console > Account > API keys & tokens
- Copy Account SID (starts with "AC")
- Create API Key (starts with "SK") + Secret

**3. Choose Phone Number Option:**

**A. Buy New Number (Recommended)**
- Setup: 2 min | Live: Instant
- Cost: $1.15-3.25/month (includes 20-300 SMS)
- Keep personal number separate

**B. Port Personal Number**
- Setup: 5 min | Live: 2-4 weeks
- Cost: $2 setup + $1.15-3.25/month (includes 20-300 SMS)
- AI sends as "you" from known number

**C. Forwarding Integration**
- Setup: 10 min | Live: Instant
- Cost: $1.30-5.50/month (double SMS charges: 20-300 SMS)
- Complex: requires Twilio Functions setup

**Forwarding Setup:**
- SMS: Auto-forward to personal phone ("From [sender]: [message]")
- Calls: Ring your personal phone directly
- Send: Text "To +1234567890: message" to Twilio number
- Uses: Twilio Functions/Studio (5 min setup)

**Personal Usage Estimates:**
- Light use: ~20 SMS/month = $0.15 + $1 number = $1.15/month
- Moderate use: ~100 SMS/month = $0.75 + $1 number = $1.75/month  
- Heavy use: ~300 SMS/month = $2.25 + $1 number = $3.25/month
- Calls: $0.0085/min (5 min call = $0.04)

**Why AI needs phone number:**
Send reminders, respond to contacts, handle notifications on your behalf.

**Recommendation:**
Option A (Buy new number) → simplest setup, clearest separation, lowest total cost.
    `.trim();
  }
}

export default TwilioAuthService; 