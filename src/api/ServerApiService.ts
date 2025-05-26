import { ChatMessage } from '../voice/VoiceContext';
import SettingsService from '../app-config/AppConfigService';
import { FeatureSettings } from '../features/features';
import api from './api';

// Default server configuration
const DEFAULT_SERVER_CONFIG = {
  baseUrl: 'http://192.168.1.131:8000',
  apiEndpoint: '/api/chat'
};

/**
 * Options for server API configuration
 */
export interface ServerApiConfig {
  baseUrl: string;
  apiEndpoint: string;
}

/**
 * Request payload for chat API
 */
export interface ChatRequest {
  message: string;
  timestamp: number;
  history: ChatMessage[]; // role, content, type, timestamp
  preferences?: {
    voice?: string;
    response_type?: string;
    [key: string]: any;
  };
  featureSettings?: FeatureSettings;
}

/**
 * Response from chat API
 */
export interface ChatResponse {
  response: string;
  timestamp: number;
  additional_data?: any;
}

/**
 * Service for handling API calls to server
 */
class ServerApiService {
  private config: ServerApiConfig;

  constructor(config?: Partial<ServerApiConfig>) {
    this.config = {
      ...DEFAULT_SERVER_CONFIG,
      ...config
    };
    console.log('ServerApiService initialized with config:', this.config);
    
    // Load configuration from settings module
    this.loadConfig();
  }
  
  /**
   * Load configuration from native settings
   */
  private async loadConfig(): Promise<void> {
    try {
      const serverConfig = await SettingsService.getServerApiConfig();
      this.updateConfig(serverConfig);
      console.log('Loaded server config from native settings:', serverConfig);
    } catch (error) {
      console.error('Error loading server config from native settings:', error);
    }
  }

  /**
   * Update service configuration
   */
  public updateConfig(config: Partial<ServerApiConfig>): void {
    this.config = {
      ...this.config,
      ...config
    };
    console.log('ServerApiService config updated:', this.config);
  }

  /**
   * Send chat request to server
   */
  public async sendChatRequest(
    message: string,
    history: ChatMessage[],
    preferences?: ChatRequest['preferences'],
    featureSettings?: FeatureSettings
  ): Promise<ChatResponse> {
    console.log(`Sending chat request to ${this.config.apiEndpoint}`);
    
    try {
      // Part 1: JSON payload with metadata
      const jsonData: ChatRequest = {
        message,
        timestamp: Date.now(),
        history,
        preferences: preferences || {
          voice: 'male',
          response_type: 'concise'
        },
        featureSettings
      };

      // Create FormData and append JSON data
      const formData = new FormData();
      formData.append('json_data', JSON.stringify(jsonData));

      console.log('Request payload:', JSON.stringify(jsonData));

      // Start both the API call and polling in parallel
      const [apiResponse] = await Promise.all([
        api.post(this.config.apiEndpoint, formData, {
          headers: { 
            'Content-Type': 'multipart/form-data'
          }
        }).catch((error: unknown) => {
          console.error('API request error:', error);
          throw error;
        })
      ]);

      console.log('Response:\n', apiResponse);

      const data: ChatResponse = apiResponse.data;
      console.log('Server response:', data);
      return data;
    } catch (error) {
      console.error('Error sending chat request:', error);
      throw error;
    }
  }
}

// Export singleton instance
export default new ServerApiService(); 