import { Platform, NativeModules, NativeEventEmitter, DeviceEventEmitter } from 'react-native';

const { BackgroundApiModule } = NativeModules;

interface BackgroundApiResult {
  success: boolean;
  requestId?: string;
  data?: string;
  error?: string;
  statusCode?: number;
  headers?: Record<string, any>;
  pending?: boolean;
}

interface BackgroundApiProgress {
  requestId: string;
  bytesReceived: number;
}

interface BackgroundApiComplete {
  requestId: string;
  dataSize?: number;
  sessionComplete?: boolean;
}

interface BackgroundApiError {
  requestId: string;
  error: string;
}

/**
 * Service for handling background API requests on iOS that survive app backgrounding
 */
class BackgroundApiService {
  private static instance: BackgroundApiService;
  private eventEmitter: NativeEventEmitter | null = null;
  private listeners: Map<string, (data: any) => void> = new Map();
  private isAvailable: boolean = false;

  private constructor() {
    // Debug logging
    console.log('🌐 BackgroundApiService: Platform.OS =', Platform.OS);
    console.log('🌐 BackgroundApiService: BackgroundApiModule =', !!BackgroundApiModule);
    console.log('🌐 BackgroundApiService: BackgroundApiModule type =', typeof BackgroundApiModule);

    // Force enable for iOS (simplified approach)
    this.isAvailable = Platform.OS === 'ios';

    if (this.isAvailable) {
      if (BackgroundApiModule) {
        this.eventEmitter = new NativeEventEmitter(BackgroundApiModule);
        this.setupEventListeners();
        console.log('🌐 BackgroundApiService: ✅ Initialized for iOS with native module');
      } else {
        console.log('🌐 BackgroundApiService: ⚠️ iOS detected but BackgroundApiModule not available');
      }
    } else {
      console.log('🌐 BackgroundApiService: Not iOS platform');
    }
  }

  static getInstance(): BackgroundApiService {
    if (!BackgroundApiService.instance) {
      BackgroundApiService.instance = new BackgroundApiService();
    }
    return BackgroundApiService.instance;
  }

  /**
   * Check if background API is available on this platform
   */
  isBackgroundApiAvailable(): boolean {
    return this.isAvailable;
  }

  /**
   * Setup event listeners for background API events
   */
  private setupEventListeners(): void {
    if (!this.eventEmitter) return;

    // Listen for progress updates
    this.eventEmitter.addListener('BackgroundApiProgress', (data: BackgroundApiProgress) => {
      console.log('📊 BackgroundApiService: Progress update for request', data.requestId);
      this.notifyListener(`progress_${data.requestId}`, data);
    });

    // Listen for completion events
    this.eventEmitter.addListener('BackgroundApiComplete', (data: any) => {
      console.log('✅ BackgroundApiService: Request completed', data.requestId);
      console.log('✅ BackgroundApiService: Complete event data:', JSON.stringify(data));
      this.notifyListener(`complete_${data.requestId}`, data);
    });

    // Listen for error events
    this.eventEmitter.addListener('BackgroundApiError', (data: BackgroundApiError) => {
      console.log('❌ BackgroundApiService: Request failed', data.requestId, data.error);
      this.notifyListener(`error_${data.requestId}`, data);
    });
  }

  /**
   * Send a background API request that can survive app backgrounding
   */
  async sendBackgroundRequest(
    requestId: string,
    url: string,
    method: string = 'POST',
    headers: Record<string, string> = {},
    body?: string
  ): Promise<BackgroundApiResult> {
    if (!this.isAvailable) {
      throw new Error('Background API not available on this platform');
    }

    try {
      console.log('🌐 BackgroundApiService: Sending background request', requestId);
      console.log('🌐 BackgroundApiService: URL:', url);
      console.log('🌐 BackgroundApiService: Method:', method);

      const result = await BackgroundApiModule.sendBackgroundRequest(
        requestId,
        url,
        method,
        headers,
        body || null
      );

      console.log('🌐 BackgroundApiService: Background request started successfully', result);
      return result;
    } catch (error) {
      console.error('❌ BackgroundApiService: Error sending background request:', error);
      throw error;
    }
  }

  /**
   * Get the result of a completed background request
   */
  async getCompletedRequest(requestId: string): Promise<BackgroundApiResult> {
    if (!this.isAvailable) {
      throw new Error('Background API not available on this platform');
    }

    try {
      const result = await BackgroundApiModule.getCompletedRequest(requestId);
      console.log('🔍 BackgroundApiService: Checked completed request', requestId, result.success ? 'found' : 'not found');
      return result;
    } catch (error) {
      console.error('❌ BackgroundApiService: Error getting completed request:', error);
      throw error;
    }
  }

  /**
   * Cancel a background request
   */
  async cancelBackgroundRequest(requestId: string): Promise<BackgroundApiResult> {
    if (!this.isAvailable) {
      throw new Error('Background API not available on this platform');
    }

    try {
      console.log('🚫 BackgroundApiService: Cancelling background request', requestId);
      const result = await BackgroundApiModule.cancelBackgroundRequest(requestId);
      console.log('🚫 BackgroundApiService: Background request cancelled', result);
      return result;
    } catch (error) {
      console.error('❌ BackgroundApiService: Error cancelling background request:', error);
      throw error;
    }
  }

  /**
   * Get list of pending background requests
   */
  async getPendingRequests(): Promise<string[]> {
    if (!this.isAvailable) {
      return [];
    }

    try {
      const result = await BackgroundApiModule.getPendingRequests();
      console.log('📋 BackgroundApiService: Pending requests:', result.requestIds);
      return result.requestIds || [];
    } catch (error) {
      console.error('❌ BackgroundApiService: Error getting pending requests:', error);
      return [];
    }
  }

  /**
   * Add listener for background API events
   */
  addListener(eventType: 'progress' | 'complete' | 'error', requestId: string, callback: (data: any) => void): () => void {
    const listenerKey = `${eventType}_${requestId}`;
    this.listeners.set(listenerKey, callback);

    // Return cleanup function
    return () => {
      this.listeners.delete(listenerKey);
    };
  }

  /**
   * Notify listener if it exists
   */
  private notifyListener(listenerKey: string, data: any): void {
    const callback = this.listeners.get(listenerKey);
    if (callback) {
      try {
        callback(data);
      } catch (error) {
        console.error('❌ BackgroundApiService: Error in listener callback:', error);
      }
    }
  }

  /**
   * Poll for completed requests (useful for checking after app comes back to foreground)
   */
  async pollForCompletedRequests(requestIds: string[]): Promise<Map<string, BackgroundApiResult>> {
    const results = new Map<string, BackgroundApiResult>();

    if (!this.isAvailable || requestIds.length === 0) {
      return results;
    }

    console.log('🔄 BackgroundApiService: Polling for completed requests:', requestIds);

    const checkPromises = requestIds.map(async (requestId) => {
      try {
        const result = await this.getCompletedRequest(requestId);
        if (result.success && !result.pending) {
          results.set(requestId, result);
        }
      } catch (error) {
        console.error(`❌ BackgroundApiService: Error checking request ${requestId}:`, error);
      }
    });

    await Promise.all(checkPromises);

    console.log('🔄 BackgroundApiService: Polling completed, found', results.size, 'completed requests');
    return results;
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.listeners.clear();
    // Event emitter listeners are managed by React Native
  }
}

export default BackgroundApiService;