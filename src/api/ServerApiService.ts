import { ChatMessage } from '../voice/VoiceContext';
import SettingsService from '../app-config/AppConfigService';
import api from './api';
import { supabase } from '../supabase/supabase';

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

// Default server configuration - prioritize React Native environment variables
const DEFAULT_SERVER_CONFIG = {
  baseUrl: process.env.EXPO_PUBLIC_PYTHON_BACKEND_URL || 'https://juniper-python-backend.onrender.com',
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
  request_id?: string; // Optional request ID for tracking
  integration_in_progress?: boolean; // Flag to indicate integration completion message
  image_url?: string; // Optional image URL for messages with attachments
  // feature_settings removed - backend will fetch from database
}

/**
 * Response from chat API
 */
export interface ChatResponse {
  response: string;
  timestamp: number;
  settings_updated?: boolean;
  integration_in_progress?: boolean;
  additional_data?: any;
  request_id?: string;
}

/**
 * Service for handling API calls to server
 */
class ServerApiService {
  private config: ServerApiConfig;
  private requestQueue: Promise<any> = Promise.resolve();
  private currentRequestController: AbortController | null = null;
  private currentRequestId: string | null = null;

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
   * Load configuration from React Native environment, fallback to native settings
   */
  private async loadConfig(): Promise<void> {
    try {
      // First, check if React Native environment variables are set
      const envBaseUrl = process.env.EXPO_PUBLIC_PYTHON_BACKEND_URL;
      
      if (envBaseUrl) {
        const envConfig = {
          baseUrl: envBaseUrl,
          apiEndpoint: '/api/chat'
        };
        this.updateConfig(envConfig);
        console.log('✅ Loaded server config from React Native environment:', envConfig);
        return;
      }

      // Fallback to native settings if environment variables are not set
      console.log('🔄 No React Native environment variables found, falling back to native settings...');
      const serverConfig = await SettingsService.getServerApiConfig();
      this.updateConfig(serverConfig);
      console.log('✅ Loaded server config from native settings:', serverConfig);
    } catch (error) {
      console.error('❌ Error loading server config:', error);
      console.log('🔄 Using default configuration as fallback');
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
   * Cancel the current request if one is in progress
   * Returns the cancelled request ID or null if no request was cancelled
   */
  public async cancelCurrentRequest(): Promise<{ success: boolean; requestId: string | null }> {
    if (this.currentRequestController && this.currentRequestId) {
      const requestIdToCancel = this.currentRequestId;
      console.log('🔴 SERVER_API: Cancelling current request...', requestIdToCancel);
      
      try {
        // Insert cancellation request into database
        await this.insertCancellationRequest(requestIdToCancel);
        
        // Also abort the HTTP request on client side
        this.currentRequestController.abort();
        this.currentRequestController = null;
        this.currentRequestId = null;
        
        console.log('✅ SERVER_API: Request cancelled successfully');
        return { success: true, requestId: requestIdToCancel };
      } catch (error) {
        console.error('❌ SERVER_API: Error cancelling request:', error);
        return { success: false, requestId: requestIdToCancel };
      }
    }
    console.log('🔴 SERVER_API: No active request to cancel');
    return { success: false, requestId: null };
  }

  /**
   * Check if there's a request currently in progress
   */
  public isRequestInProgress(): boolean {
    return this.currentRequestController !== null && this.currentRequestId !== null;
  }

  /**
   * Get the current request ID
   */
  public getCurrentRequestId(): string | null {
    return this.currentRequestId;
  }

  /**
   * Insert cancellation request into database
   */
  private async insertCancellationRequest(requestId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('No authenticated user');
      }

      const { error } = await supabase
        .from('cancellation_requests')
        .insert({
          user_id: user.id,
          request_id: requestId,
          request_type: 'chat',
          status: 'pending',
          metadata: { cancelled_at: new Date().toISOString() },
          created_at: new Date().toISOString()
        });

      if (error) {
        throw error;
      }

      console.log('✅ SERVER_API: Cancellation request inserted into database');
    } catch (error) {
      console.error('❌ SERVER_API: Error inserting cancellation request:', error);
      throw error;
    }
  }

  /**
   * Send chat request to server
   */
  public async sendChatRequest(
    message: string,
    history: ChatMessage[],
    onRequestStart?: (requestId: string) => void | Promise<void>,
    integrationInProgress?: boolean,
    imageUrl?: string,
  ): Promise<ChatResponse> {
    // Queue requests to prevent concurrent auth issues
    // Use .catch() to prevent cancelled requests from breaking the queue
    return this.requestQueue = this.requestQueue.catch(() => {
      // Reset queue on error to prevent cancellation from blocking future requests
      console.log('🔄 SERVER_API: Queue error detected, resetting queue for new request');
      return Promise.resolve();
    }).then(async () => {
      console.log(`🔴 SERVER_API: sendChatRequest called`);
      console.log(`🔴 SERVER_API: Message: "${message}"`);

      // Generate unique request ID and create AbortController for this request
      this.currentRequestId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      this.currentRequestController = new AbortController();

      console.log('🔴 SERVER_API: Generated request ID:', this.currentRequestId);

      // Call the callback immediately after request ID is generated
      if (onRequestStart && this.currentRequestId) {
        console.log('🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId:', this.currentRequestId);
        await onRequestStart(this.currentRequestId);
        console.log('🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId:', this.currentRequestId);
      }

      try {
        // Add a delay to ensure previous operations are complete (longer for Android)
        console.log('🔴 SERVER_API: Adding delay for Android stability...');
        await new Promise(resolve => setTimeout(resolve, 150));
        


        const jsonData: ChatRequest = {
          message,
          timestamp: Date.now(),
          history: history.map(msg => ({
            role: msg.role,
            content: msg.content,
            timestamp: msg.timestamp,
            type: 'text'  // Always set type to 'text' for now
          })),
          request_id: this.currentRequestId, // Include request_id in the payload
          ...(integrationInProgress && { integration_in_progress: integrationInProgress }),
          ...(imageUrl && { image_url: imageUrl })
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
            timeout: 300000, // 5 minute timeout - only timeout mechanism (native timeouts removed)
            signal: this.currentRequestController.signal // Add AbortController signal
          }).catch((error: unknown) => {
            console.error('🔴 SERVER_API: ❌ API request error:', error);
            console.error('🔴 SERVER_API: API request failed in queue');
            throw error;
          })
        ]);

        // console.log('Response:\n', apiResponse);

        const data: ChatResponse = apiResponse.data;
        console.log('🔴 SERVER_API: ✅ Server response received');
        
        // Include the request ID in the response
        data.request_id = this.currentRequestId;
        
        // Clear the controller and request ID since request completed successfully
        this.currentRequestController = null;
        this.currentRequestId = null;
        
        return data;
      } catch (error) {
        // Clear the controller and request ID on error
        this.currentRequestController = null;
        this.currentRequestId = null;
        
        // Check if error was due to cancellation
        if (error instanceof Error && (error.name === 'CanceledError' || error.message?.includes('canceled') || error.message?.includes('cancelled'))) {
          console.log('🔴 SERVER_API: Request was cancelled');
          throw new Error('Request was cancelled');
        }
        
        console.error('🔴 SERVER_API: ❌ Error sending chat request:', error);
        console.error('🔴 SERVER_API: Queued request failed');
        throw error;
      }
    });
  }
}

// Export singleton instance
export default new ServerApiService(); 