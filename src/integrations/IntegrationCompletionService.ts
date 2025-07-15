import { DeviceEventEmitter } from 'react-native';

export interface IntegrationCompletionHandler {
  sendTextMessage: (message: string) => Promise<void>;
  navigateToHome: () => void;
}

class IntegrationCompletionService {
  private static instance: IntegrationCompletionService;
  private handler: IntegrationCompletionHandler | null = null;

  static getInstance(): IntegrationCompletionService {
    if (!IntegrationCompletionService.instance) {
      IntegrationCompletionService.instance = new IntegrationCompletionService();
    }
    return IntegrationCompletionService.instance;
  }

  /**
   * Set the handler that will process integration completions
   * This should be called from a React component that has access to VoiceContext and navigation
   */
  setHandler(handler: IntegrationCompletionHandler) {
    this.handler = handler;
    console.log('✅ Integration completion handler registered');
  }

  /**
   * Complete an integration by sending a message and navigating home
   */
  async completeIntegration(serviceName: string) {
    console.log(`🔗 Completing integration for ${serviceName}`);
    
    if (!this.handler) {
      console.error('❌ No integration completion handler registered');
      // Emit an event as a fallback
      DeviceEventEmitter.emit('integrationCompleted', { serviceName });
      return;
    }

    try {
      // Send text message to voice assistant
      const message = `Let's complete the integration for ${serviceName}`;
      await this.handler.sendTextMessage(message);
      
      // Navigate to home screen
      this.handler.navigateToHome();
      
      console.log(`✅ Integration completion flow triggered for ${serviceName}`);
    } catch (error) {
      console.error(`❌ Error completing integration for ${serviceName}:`, error);
      // Emit an event as a fallback
      DeviceEventEmitter.emit('integrationCompleted', { serviceName, error });
    }
  }
}

export default IntegrationCompletionService;