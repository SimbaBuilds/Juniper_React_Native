import { supabase, DatabaseService } from '../../../supabase/supabase';

interface TwitterAuthResult {
  success: boolean;
  error?: string;
}

export class TwitterAuthService {
  private static instance: TwitterAuthService;
  
  public static getInstance(): TwitterAuthService {
    if (!TwitterAuthService.instance) {
      TwitterAuthService.instance = new TwitterAuthService();
    }
    return TwitterAuthService.instance;
  }

  public async enableService(integrationId: string): Promise<TwitterAuthResult> {
    try {
      console.log('🐦 Enabling Twitter/X service...');
      
      // Update integration record to active
      await this.updateIntegrationStatus(integrationId, true);

      console.log('✅ Twitter/X service enabled successfully');
      
      return {
        success: true
      };
    } catch (error) {
      console.error('❌ Error enabling Twitter/X service:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to enable service'
      };
    }
  }

  private async updateIntegrationStatus(integrationId: string, isActive: boolean): Promise<void> {
    try {
      console.log(`🐦 ${isActive ? 'Enabling' : 'Disabling'} Twitter/X integration...`);
      
      const { error } = await supabase
        .from('integrations')
        .update({
          is_active: isActive,
          status: isActive ? 'active' : 'inactive',
          updated_at: new Date().toISOString(),
          last_used: isActive ? new Date().toISOString() : null
        })
        .eq('id', integrationId);

      if (error) {
        throw error;
      }

      console.log(`🐦 Twitter/X integration ${isActive ? 'enabled' : 'disabled'} successfully`);
    } catch (error) {
      console.error('🔴 Error updating Twitter/X integration status:', error);
      throw error;
    }
  }


  public async disableService(integrationId: string): Promise<TwitterAuthResult> {
    try {
      console.log('🐦 Disabling Twitter/X service...');
      
      // Update integration record to inactive
      await this.updateIntegrationStatus(integrationId, false);

      console.log('✅ Twitter/X service disabled successfully');
      
      return {
        success: true
      };
    } catch (error) {
      console.error('❌ Error disabling Twitter/X service:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to disable service'
      };
    }
  }

  public async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🐦 Disconnecting Twitter/X integration...');
      
      // Disable the service
      await this.updateIntegrationStatus(integrationId, false);
      
      // Delete the integration record from Supabase
      await DatabaseService.deleteIntegration(integrationId);
      

      console.log('✅ Twitter/X integration disconnected and removed');
    } catch (error) {
      console.error('❌ Error disconnecting Twitter/X:', error);
      throw error;
    }
  }

  public static getUserGuide(): string {
    return `
🐦 Twitter/X Integration

> Access Twitter/X search and tools through system-managed API

---

🚀 Quick Setup (Instant)

Twitter/X integration uses system-managed API keys - no setup required!

Simply toggle the service on to start using Twitter/X features:
• Search tweets and trends
• Access Twitter/X data through tools
• No personal API keys needed

---

✅ Benefits

• No API keys required
• Instant activation
• System-managed authentication
• Secure and reliable
• Always up-to-date

Ready to use Twitter/X? Just toggle it on! 🚀
    `.trim();
  }
}

export default TwitterAuthService;