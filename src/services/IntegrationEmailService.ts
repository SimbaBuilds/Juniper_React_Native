import { supabase } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';

interface SendSetupEmailParams {
  userId: string;
  integrationId: string;
  serviceName: string;
  userEmail: string;
}

interface SendSetupEmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

export class IntegrationEmailService {
  private static instance: IntegrationEmailService;

  static getInstance(): IntegrationEmailService {
    if (!IntegrationEmailService.instance) {
      IntegrationEmailService.instance = new IntegrationEmailService();
    }
    return IntegrationEmailService.instance;
  }

  /**
   * Send setup email for integration
   */
  async sendSetupEmail(params: SendSetupEmailParams): Promise<SendSetupEmailResponse> {
    try {
      console.log('📧 Sending setup email for:', params.serviceName);

      // Call Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('send-integration-setup-email', {
        body: {
          user_id: params.userId,
          integration_id: params.integrationId,
          service_name: params.serviceName,
          user_email: params.userEmail
        }
      });

      if (error) {
        console.error('🔴 Error calling edge function:', error);
        return {
          success: false,
          message: 'Failed to send setup email',
          error: error.message
        };
      }

      if (!data.success) {
        console.error('🔴 Edge function returned error:', data.error);
        return {
          success: false,
          message: 'Failed to send setup email',
          error: data.error
        };
      }

      console.log('✅ Setup email sent successfully');
      return {
        success: true,
        message: 'Setup email sent successfully. Check your inbox!'
      };

    } catch (error) {
      console.error('🔴 Error sending setup email:', error);
      return {
        success: false,
        message: 'Failed to send setup email',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Check if integration is in pending state (waiting for setup completion)
   */
  async getIntegrationStatus(integrationId: string): Promise<{
    status: 'pending' | 'completed' | 'not_found';
    hasPendingToken?: boolean;
  }> {
    try {
      // Check integration status
      const { data: integration, error: integrationError } = await supabase
        .from('integrations')
        .select('status, is_active')
        .eq('id', integrationId)
        .single();

      if (integrationError || !integration) {
        return { status: 'not_found' };
      }

      // If integration is already active, it's completed
      if (integration.is_active) {
        return { status: 'completed' };
      }

      // Check if there's a pending setup token
      const { data: tokens, error: tokenError } = await supabase
        .from('integration_setup_tokens')
        .select('id, is_used, expires_at')
        .eq('integration_id', integrationId)
        .eq('is_used', false)
        .gt('expires_at', new Date().toISOString());

      if (tokenError) {
        console.error('🔴 Error checking setup tokens:', tokenError);
      }

      const hasPendingToken = !!(tokens && tokens.length > 0);

      return {
        status: 'pending',
        hasPendingToken
      };

    } catch (error) {
      console.error('🔴 Error getting integration status:', error);
      return { status: 'not_found' };
    }
  }

  /**
   * Check and mark integration as ready for finalization
   */
  async checkIntegrationReadyForFinalization(integrationId: string): Promise<boolean> {
    try {
      // Check if there's a used token (indicates online form was completed)
      const { data: tokens, error } = await supabase
        .from('integration_setup_tokens')
        .select('id, is_used')
        .eq('integration_id', integrationId)
        .eq('is_used', true)
        .limit(1);

      if (error) {
        console.error('🔴 Error checking finalization status:', error);
        return false;
      }

      return tokens && tokens.length > 0;

    } catch (error) {
      console.error('🔴 Error checking integration finalization:', error);
      return false;
    }
  }
}

export default IntegrationEmailService; 