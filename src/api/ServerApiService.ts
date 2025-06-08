import { ChatMessage } from '../voice/VoiceContext';
import SettingsService from '../app-config/AppConfigService';
import api from './api';

// Helper function to convert camelCase to snake_case
function toSnakeCase(str: string): string {
  // Special case for 'tellMeThings' -> 'tell_me_things'
  if (str === 'tellMeThings') return 'tell_me_things';
  // Special case for 'projectUnderstanding' -> 'project_understanding'
  if (str === 'projectUnderstanding') return 'project_understanding';
  
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}


/**
 * Prepare feature settings for API call by removing categories and capping array lengths
 */

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
  history: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    type: 'text';  // Backend expects 'text' for the type field
  }>;
  preferences?: {
    voice?: string;
    response_type?: string;
    model?: string; // Language model to use (e.g., 'grok-3', 'grok-3.5', 'gpt-4o', 'claude-3-5-sonnet-20241022')
    [key: string]: any;
  };
  // feature_settings removed - backend will fetch from database
}

/**
 * Response from chat API
 */
export interface ChatResponse {
  response: string;
  timestamp: number;
  settings_updated?: boolean;
  additional_data?: any;
}

/**
 * Service for handling API calls to server
 */
class ServerApiService {
  private config: ServerApiConfig;
  private requestQueue: Promise<any> = Promise.resolve();

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
  ): Promise<ChatResponse> {
    // Queue requests to prevent concurrent auth issues
    return this.requestQueue = this.requestQueue.then(async () => {
      console.log(`🔴 SERVER_API: sendChatRequest called`);
      console.log(`🔴 SERVER_API: Message: "${message}"`);

      try {
        // Add a delay to ensure previous operations are complete (longer for Android)
        console.log('🔴 SERVER_API: Adding delay for Android stability...');
        await new Promise(resolve => setTimeout(resolve, 150));
        
        // Extract baseLanguageModel from voice settings and include it in preferences
        const defaultPreferences: ChatRequest['preferences'] = {
          voice: 'male',
          response_type: 'concise'
        };
        

        const jsonData: ChatRequest = {
          message,
          timestamp: Date.now(),
          history: history.map(msg => ({
            role: msg.role,
            content: msg.content,
            timestamp: msg.timestamp,
            type: 'text'  // Always set type to 'text' for now
          })),
          preferences: {
            ...defaultPreferences,
            ...preferences // Allow override of defaults with passed preferences
          }
          // feature_settings removed - backend will fetch from database
        };

        history.forEach((message, index) => {
          console.log(`🔴 SERVER_API: History[${index}]:`, {
            role: message.role,
            content: message.content?.substring(0, 50) + (message.content?.length > 50 ? '...' : ''),
            timestamp: message.timestamp,
            contentLength: message.content?.length || 0
          });
        });

        // Log the transformed data for debugging
        console.log('🔴 SERVER_API: Full request payload:', JSON.stringify(jsonData, null, 2));

        // Create FormData and append JSON data
        const formData = new FormData();
        formData.append('json_data', JSON.stringify(jsonData));

        const [apiResponse] = await Promise.all([
          api.post(this.config.apiEndpoint, formData, {
            headers: { 
              'Content-Type': 'multipart/form-data'
            },
            timeout: 30000 // 30 second timeout for Android
          }).catch((error: unknown) => {
            console.error('🔴 SERVER_API: ❌ API request error:', error);
            console.error('🔴 SERVER_API: API request failed in queue');
            throw error;
          })
        ]);

        // console.log('Response:\n', apiResponse);

        const data: ChatResponse = apiResponse.data;
        console.log('🔴 SERVER_API: ✅ Server response received');
        return data;
      } catch (error) {
        console.error('🔴 SERVER_API: ❌ Error sending chat request:', error);
        console.error('🔴 SERVER_API: Queued request failed');
        throw error;
      }
    });
  }
}

// Export singleton instance
export default new ServerApiService(); 