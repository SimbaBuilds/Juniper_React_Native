import { useState, useCallback, useEffect } from 'react';
import { Platform, NativeModules, AppState } from 'react-native';
import ServerApiService, { ServerApiConfig, ChatResponse } from './ServerApiService';
import { ChatMessage } from '../voice/VoiceContext';
import BackgroundApiService from './BackgroundApiService';

const { VoiceModule } = NativeModules;

/**
 * Return type for the useServerApi hook
 */
interface UseServerApiResult {
  isLoading: boolean;
  error: Error | null;
  response: ChatResponse | null;
  sendMessage: (message: string, history: ChatMessage[], onRequestStart?: (requestId: string) => void | Promise<void>, integrationInProgress?: boolean, imageUrl?: string) => Promise<ChatResponse>;
  updateConfig: (config: Partial<ServerApiConfig>) => void;
  cancelRequest: () => Promise<boolean>;
  isRequestInProgress: boolean;
  getCurrentRequestId: () => string | null;
}

/**
 * Options for the useServerApi hook
 */
interface UseServerApiOptions {
  initialConfig?: Partial<ServerApiConfig>;
  onResponse?: (response: ChatResponse) => void;
  onError?: (error: Error) => void;
}

/**
 * Hook for interacting with the server API
 */
export const useServerApi = (options: UseServerApiOptions = {}): UseServerApiResult => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<ChatResponse | null>(null);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);
  const [backgroundApiService] = useState(() => BackgroundApiService.getInstance());

  // Initialize with custom config if provided
  useEffect(() => {
    if (options.initialConfig) {
      ServerApiService.updateConfig(options.initialConfig);
    }
  }, []);

  // Check for completed background requests when app comes to foreground
  useEffect(() => {
    const handleAppStateChange = async (nextAppState: string) => {
      if (nextAppState === 'active' && Platform.OS === 'ios' && backgroundApiService.isBackgroundApiAvailable()) {
        try {
          // Check if there are any pending background requests
          const pendingRequests = await backgroundApiService.getPendingRequests();
          if (pendingRequests.length > 0) {
            console.log('🔄 useServerApi: Checking for completed background requests:', pendingRequests);

            const completedResults = await backgroundApiService.pollForCompletedRequests(pendingRequests);

            // Handle completed requests
            for (const [requestId, result] of completedResults) {
              console.log('✅ useServerApi: Found completed background request:', requestId);

              try {
                const chatResponse = await ServerApiService.checkCompletedBackgroundRequest(requestId);
                if (chatResponse) {
                  setResponse(chatResponse);
                  setIsLoading(false);
                  setIsRequestInProgress(false);

                  if (options.onResponse) {
                    options.onResponse(chatResponse);
                  }
                }
              } catch (error) {
                console.error('❌ useServerApi: Error processing completed background request:', error);
                const errorObj = error instanceof Error ? error : new Error(String(error));
                setError(errorObj);
                setIsLoading(false);
                setIsRequestInProgress(false);

                if (options.onError) {
                  options.onError(errorObj);
                }
              }
            }
          }
        } catch (error) {
          console.error('❌ useServerApi: Error checking background requests:', error);
        }
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription?.remove();
  }, [backgroundApiService, options.onResponse, options.onError]);

  /**
   * Send message to server API
   */
  const sendMessage = useCallback(async (
    message: string, 
    history: ChatMessage[],
    onRequestStart?: (requestId: string) => void | Promise<void>,
    integrationInProgress?: boolean,
    imageUrl?: string,
  ): Promise<ChatResponse> => {
    // Clear any previous cancellation errors before starting new request
    setError(null);
    setIsLoading(true);
    setIsRequestInProgress(true);

    try {
      // Determine if we should use background API
      // Force use background API on iOS for all requests (simplified approach)
      const useBackgroundApi = Platform.OS === 'ios';

      console.log('🌐 useServerApi: useBackgroundApi =', useBackgroundApi);
      console.log('🌐 useServerApi: backgroundApiService.isBackgroundApiAvailable() =', backgroundApiService.isBackgroundApiAvailable());

      const result = await ServerApiService.sendChatRequest(
        message,
        history,
        onRequestStart,
        integrationInProgress,
        imageUrl,
        useBackgroundApi
      );
      
      setResponse(result);
      setIsLoading(false);
      setIsRequestInProgress(false);
      
      // Call onResponse callback if provided
      if (options.onResponse) {
        options.onResponse(result);
      }
      console.log('API Response:\n', result);
      
      return result;
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      setIsLoading(false);
      setIsRequestInProgress(false);
      
      // Call onError callback if provided
      if (options.onError) {
        options.onError(error);
      }
      
      throw error;
    }
  }, [options.onResponse, options.onError]);

  /**
   * Cancel the current request and clear native state
   */
  const cancelRequest = useCallback(async (): Promise<boolean> => {
    try {
      console.log('🚫 CANCEL: Cancelling server request and clearing native state...');
      
      // Cancel the server request first
      const cancelResult = await ServerApiService.cancelCurrentRequest();
      
      // Clear native state to prevent persistence across chats
      const [{ clearNativeState }, requestMapping] = await Promise.all([
        import('../utils/nativeCleanup'),
        import('../utils/requestMapping').then(m => m.default)
      ]);
      
      try {
        if (cancelResult.requestId) {
          // Get the corresponding native request ID using the cancelled request ID
          const nativeRequestId = requestMapping.getNativeRequestId(cancelResult.requestId);
          
          if (nativeRequestId) {
            console.log(`🧹 CANCEL: Clearing native state for specific request: ${nativeRequestId}`);
            await clearNativeState(nativeRequestId);
            
            // Remove the mapping since request is cancelled
            requestMapping.removeMapping(cancelResult.requestId);
          } else {
            console.log('🧹 CANCEL: No native request ID found, clearing all native state');
            await clearNativeState();
          }
        } else {
          console.log('🧹 CANCEL: No React Native request ID available, clearing all native state');
          await clearNativeState();
        }
        
        console.log('🧹 CANCEL: ✅ Native state cleared after cancellation');
      } catch (nativeError) {
        console.warn('🧹 CANCEL: ⚠️ Failed to clear native state:', nativeError);
        // Don't fail the whole cancellation if native cleanup fails
      }
      
      if (cancelResult.success) {
        setIsLoading(false);
        setIsRequestInProgress(false);
        setError(new Error('Request was cancelled'));
        console.log('🚫 CANCEL: ✅ Request cancelled successfully');
      } else {
        console.log('🚫 CANCEL: ⚠️ Request was not cancelled (may have already completed)');
      }
      
      return cancelResult.success;
    } catch (error) {
      console.error('🚫 CANCEL: ❌ Error cancelling request:', error);
      setError(error instanceof Error ? error : new Error('Failed to cancel request'));
      return false;
    }
  }, []);

  /**
   * Update server API configuration
   */
  const updateConfig = useCallback((config: Partial<ServerApiConfig>): void => {
    ServerApiService.updateConfig(config);
  }, []);

  /**
   * Get the current request ID
   */
  const getCurrentRequestId = useCallback((): string | null => {
    return ServerApiService.getCurrentRequestId();
  }, []);

  return {
    isLoading,
    error,
    response,
    sendMessage,
    updateConfig,
    cancelRequest,
    isRequestInProgress,
    setIsRequestInProgress,
    getCurrentRequestId,
  };
}; 