import { NativeModules, Platform } from 'react-native';

const { AppConfigModule } = NativeModules;

export interface ServerApiConfig {
  baseUrl: string;
  apiEndpoint: string;
}

export interface ApiKeys {
  picovoice: string;
  openai: string;
  deepgram: string;
  elevenlabs: string;
}

export interface AppConfig {
  serverApi: ServerApiConfig;
  apiKeys: ApiKeys;
}

/**
 * Service for interacting with app settings
 */
class SettingsService {
  /**
   * Get server API configuration
   */
  public async getServerApiConfig(): Promise<ServerApiConfig> {
    if (Platform.OS === 'ios' || !AppConfigModule) {
      // iOS fallback: return default configuration
      return {
        baseUrl: 'https://mobile-jarvis-backend.onrender.com',
        apiEndpoint: '/api/chat'
      };
    }

    try {
      return await AppConfigModule.getServerApiConfig();
    } catch (error) {
      console.error('Error getting server API config:', error);
      // Return default values on error
      return {
        baseUrl: 'https://mobile-jarvis-backend.onrender.com',
        apiEndpoint: '/api/chat'
      };
    }
  }

  /**
   * Update server API configuration
   */
  public async updateServerApiConfig(config: Partial<ServerApiConfig>): Promise<boolean> {
    if (Platform.OS === 'ios' || !AppConfigModule) {
      // iOS fallback: configuration updates not supported, return true silently
      console.warn('⚠️ Server API config updates not supported on iOS platform');
      return true;
    }

    try {
      return await AppConfigModule.updateServerApiConfig(
        config.baseUrl || '',
        config.apiEndpoint || ''
      );
    } catch (error) {
      console.error('Error updating server API config:', error);
      throw error;
    }
  }

  /**
   * Get full application configuration
   */
  public async getAppConfig(): Promise<AppConfig> {
    if (Platform.OS === 'ios' || !AppConfigModule) {
      // iOS fallback: return minimal configuration
      const serverConfig = await this.getServerApiConfig();
      return {
        serverApi: serverConfig,
        apiKeys: {
          picovoice: '',
          openai: '',
          deepgram: '',
          elevenlabs: ''
        }
      };
    }

    try {
      return await AppConfigModule.getAppConfig();
    } catch (error) {
      console.error('Error getting app config:', error);
      throw error;
    }
  }
}

// Export singleton instance
export default new SettingsService(); 