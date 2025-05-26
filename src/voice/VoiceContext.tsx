import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode, useMemo, useRef } from 'react';
import { VoiceState, VoiceContextValue } from './types/voice';
import VoiceService from './VoiceService';
import { useServerApi } from '../api/useServerApi';
import { useVoiceState as useVoiceStateHook } from './hooks/useVoiceState';
import { useFeatureSettings } from '../settings/useFeatureSettings';
import { supabase } from '../supabase/supabase';
import { DeviceEventEmitter, EmitterSubscription } from 'react-native';

// Create context with default values
const VoiceContext = createContext<VoiceContextValue>({
  voiceState: VoiceState.IDLE,
  isWakeWordEnabled: false,
  error: null,
  transcript: '',
  response: '',
  chatHistory: [],
  isListening: false,
  isSpeaking: false,
  isError: false,
  setVoiceState: () => {},
  setWakeWordEnabled: () => {},
  setError: () => {},
  setTranscript: () => {},
  setResponse: () => {},
  startListening: async () => false,
  stopListening: async () => false,
  resetState: () => {},
  interruptSpeech: async () => false,
  clearChatHistory: () => {},
});

interface VoiceProviderProps {
  children: ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  type: 'text' | 'image';
  timestamp: number;
}

/**
 * Provider component for the Voice Context
 */
export const VoiceProvider: React.FC<VoiceProviderProps> = ({ children }) => {
  // Use the voice state hook to access native state
  const voiceStateFromHook = useVoiceStateHook();
  
  // Use the voice state from the hook rather than managing our own
  const voiceState = voiceStateFromHook.voiceState;
  const isListening = voiceStateFromHook.isListening;
  const isSpeaking = voiceStateFromHook.isSpeaking;
  const isError = voiceStateFromHook.isError;
  
  // Feature settings hook
  const { settings: featureSettings } = useFeatureSettings();
  
  // Other state we still need to manage
  const [isWakeWordEnabled, setWakeWordEnabled] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  
  // Voice service instance
  const voiceService = useMemo(() => VoiceService.getInstance(), []);
  
  // Track if listeners are set up
  const listenersSetupRef = useRef(false);
  
  // Server API hook
  const serverApi = useServerApi({
    preferences: {
      voice: 'male',
      response_type: 'concise'
    },
    onResponse: (apiResponse) => {
      console.log('Received API response:', apiResponse);
      
      if (apiResponse.response) {
        setResponse(apiResponse.response);
        
        // Add assistant message to chat history
        const assistantMessage: ChatMessage = {
          role: 'assistant',
          content: apiResponse.response,
          type: 'text',
          timestamp: apiResponse.timestamp || Date.now()
        };
        
        console.log('Adding assistant message to chat history:', assistantMessage);
        setChatHistory(prevHistory => [...prevHistory, assistantMessage]);
        
        // Use TTS to speak the response
        speakResponse(apiResponse.response);
      }
    },
    onError: (apiError) => {
      console.error('API error:', apiError);
      setError(`Error communicating with server: ${apiError.message}`);
    }
  });
  
  // Refs to store latest values for event listeners
  const chatHistoryRef = useRef(chatHistory);
  const featureSettingsRef = useRef(featureSettings);
  const serverApiRef = useRef(serverApi);
  
  // Update refs when values change
  useEffect(() => {
    chatHistoryRef.current = chatHistory;
  }, [chatHistory]);
  
  useEffect(() => {
    featureSettingsRef.current = featureSettings;
  }, [featureSettings]);
  
  useEffect(() => {
    serverApiRef.current = serverApi;
  }, [serverApi]);
  
  // Log component mount and initial state
  useEffect(() => {
    console.log('🎤 VoiceProvider mounted');
    console.log('🎤 Initial voice state:', voiceState);
    console.log('🎤 Initial wake word enabled:', isWakeWordEnabled);
    return () => {
      console.log('🎤 VoiceProvider unmounting');
    };
  }, []);

  // Log when wake word state changes for debugging purposes
  useEffect(() => {
    console.log(`🎤 Wake word enabled state changed to: ${isWakeWordEnabled}`);
  }, [isWakeWordEnabled]);

  // Log when voice state changes
  useEffect(() => {
    console.log(`🎙️ Voice state changed to: ${voiceState}`);
  }, [voiceState]);

  // Log when listening/speaking states change
  useEffect(() => {
    console.log(`🔊 Listening: ${isListening}, Speaking: ${isSpeaking}`);
  }, [isListening, isSpeaking]);
  
  // Set up voice service event listeners
  useEffect(() => {
    if (listenersSetupRef.current) {
      console.log('🎤 Event listeners already set up, skipping...');
      return;
    }
    
    console.log('🎤 Setting up speech result listener');
    
    // Initialize voice service
    voiceService.initialize();
    
    // Speech result listener
    const speechResultListener = voiceService.onSpeechResult((event: any) => {
      console.log('🎤 Speech result received:', event.text);
      setTranscript(event.text);
      
      // Process the speech with server API
      processSpeechWithServer(event.text, chatHistoryRef.current);
    });

    // Assistant response listener
    const assistantResponseListener = voiceService.onAssistantResponse((event: any) => {
      console.log('🔊 Assistant response received:', event.text);
      setResponse(event.text);
    });

    // Voice state change listener
    const stateChangeListener = voiceService.onVoiceStateChange((event: any) => {
      console.log('🎙️ Voice state changed to:', event.state);
      // Note: We don't have a setVoiceState here since we're using the hook's state
      // The voice state is managed by the useVoiceStateHook
    });

    // Add listener for speech text processing requests from Android
    const speechTextProcessListener = DeviceEventEmitter.addListener(
      'speechTextToProcess',
      async (eventData: string) => {
        try {
          const data = JSON.parse(eventData);
          console.log('📱 Received speech text processing request from Android:', data);
          
          const { text, requestId, timestamp } = data;
          
          // Process the text using our authenticated API
          try {
            const response = await serverApiRef.current.sendMessage(text, chatHistoryRef.current, featureSettingsRef.current);
            console.log('✅ API response for Android request:', response.response);
            
            // Send response back to Android
            await voiceService.handleApiResponse(requestId, response.response);
          } catch (error) {
            console.error('❌ Error processing speech for Android:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
          }
        } catch (parseError) {
          console.error('❌ Error parsing speech text processing event:', parseError);
        }
      }
    );

    // Add listener for text processing requests from native (new approach)
    const processTextRequestListener = DeviceEventEmitter.addListener(
      'processTextRequest',
      async (data: { text: string; requestId: string }) => {
        try {
          console.log('📱 Received process text request from native:', data);
          
          const { text, requestId } = data;
          
          // Process the text using our authenticated API
          try {
            const response = await serverApiRef.current.sendMessage(text, chatHistoryRef.current, featureSettingsRef.current);
            console.log('✅ API response for native request:', response.response);
            
            // Send response back to native using VoiceModule
            const { VoiceModule } = require('react-native').NativeModules;
            await VoiceModule.handleNativeApiResponse(requestId, response.response);
            console.log('📤 Response sent back to native for requestId:', requestId);
            
          } catch (error) {
            console.error('❌ Error processing text for native:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            
            // Send error response back to native
            try {
              const { VoiceModule } = require('react-native').NativeModules;
              await VoiceModule.handleNativeApiResponse(requestId, `Error: ${errorMessage}`);
            } catch (responseError) {
              console.error('❌ Error sending error response to native:', responseError);
            }
          }
        } catch (parseError) {
          console.error('❌ Error processing text request event:', parseError);
        }
      }
    );

    // Mark listeners as set up
    listenersSetupRef.current = true;

    return () => {
      console.log('🎤 Cleaning up voice event listeners');
      speechResultListener();
      assistantResponseListener();
      stateChangeListener();
      speechTextProcessListener.remove();
      processTextRequestListener.remove();
      listenersSetupRef.current = false;
    };
  }, []); // Empty dependency array to run only once
  
  // Process speech with server API
  const processSpeechWithServer = useCallback(async (speechText: string, currentHistory: ChatMessage[]) => {
    try {
      // Add a longer delay for Android to ensure voice operations are complete
      await new Promise(resolve => setTimeout(resolve, 250));
      
      console.log('🌐 Processing speech with server API:', speechText);
      console.log('📜 Current history length:', currentHistory.length);
      console.log('⚙️ Using feature settings:', featureSettingsRef.current);
      console.log('📱 Platform: Android - using extended delays and validation');
      
      // Force a fresh session check for Android
      console.log('🔄 Forcing fresh session check for Android...');
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
      
      if (sessionError) {
        console.error('❌ Session error during voice processing:', sessionError);
        setError('Session error. Please sign in again.');
        return null;
      }
      
      if (!sessionData.session) {
        console.error('❌ No valid session found during voice processing');
        
        // Try to refresh session immediately
        console.log('🔄 Attempting immediate session refresh...');
        const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();
        
        if (refreshError || !refreshData.session) {
          console.error('❌ Session refresh failed:', refreshError);
          setError('Authentication session expired. Please sign in again.');
          return null;
        }
        
        console.log('✅ Session refreshed successfully');
      }
      
      // Validate authentication state before proceeding
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        console.error('❌ User validation failed during voice processing:', userError);
        setError('User authentication failed. Please sign in again.');
        return null;
      }
      
      console.log('✅ Valid session and user found for voice API call');
      
      // Add another small delay before API call for Android stability
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Make the call exactly like the debug test does - no custom auth checking
      const response = await serverApiRef.current.sendMessage(speechText, currentHistory, featureSettingsRef.current);
      return response;
    } catch (err) {
      console.error('Error in processSpeechWithServer:', err);
      
      // Type guard for error handling
      const error = err as any;
      const isAuthError = error?.message?.includes('403') || 
                         error?.message?.includes('auth') || 
                         error?.response?.status === 403;
      
      // If it's an auth error, try to refresh the session
      if (isAuthError) {
        console.log('🔄 Auth error detected, attempting session refresh...');
        try {
          // Force sign out and back in for Android if refresh fails
          const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();
          if (!refreshError && refreshData.session) {
            console.log('✅ Session refreshed successfully, retrying API call...');
            
            // Add delay before retry for Android
            await new Promise(resolve => setTimeout(resolve, 200));
            
            // Retry the API call once
            const response = await serverApiRef.current.sendMessage(speechText, currentHistory, featureSettingsRef.current);
            return response;
          } else {
            console.error('❌ Session refresh failed:', refreshError);
            console.log('🚨 Android: Session refresh failed, user needs to re-authenticate');
            setError('Authentication session expired. Please sign out and sign in again.');
          }
        } catch (retryErr) {
          console.error('❌ Retry after session refresh failed:', retryErr);
          setError('Authentication error. Please sign out and sign in again.');
        }
      } else {
        // Error handling is done in onError callback for non-auth errors
        console.error('Non-auth error in processSpeechWithServer:', err);
      }
      return null;
    }
  }, []); // Remove all dependencies since we're using refs
  
  // Use directly the startListening from hook
  const startListening = voiceStateFromHook.startListening;
  
  // Use native TTS to speak the response
  const speakResponse = useCallback(async (responseText: string) => {
    try {
      console.log('Speaking response:', responseText);
      
      // Already handled by the native side
      await voiceService.speakResponse(responseText);
      
      // The native side will automatically start listening again
      console.log('Response spoken, native side will automatically restart listening');
    } catch (err) {
      console.error('Error speaking response:', err);
      setError(`Error speaking response: ${err}`);
    }
  }, [voiceService]);
  
  // Use directly the stopListening from hook
  const stopListening = voiceStateFromHook.stopListening;
  
  // Reset state to default (just transcript and response as we're using the hook for state)
  const resetState = useCallback(() => {
    setError(null);
    setTranscript('');
    setResponse('');
    // We don't reset isWakeWordEnabled or chatHistory here as those are persistent
  }, []);
  
  // Clear chat history
  const clearChatHistory = useCallback(() => {
    setChatHistory([]);
  }, []);
  
  // Use directly the interruptSpeech from hook
  const interruptSpeech = useCallback(async () => {
    try {
      console.log('🛑 Interrupting current speech');
      
      // Call the hook's interruptSpeech function
      const result = await voiceStateFromHook.interruptSpeech();
      
      if (result) {
        // Set response to empty to clear any visible response text
        setResponse('');
        
        console.log('✅ Speech interrupted successfully, transitioning to LISTENING state');
        
        // Add a short delay to allow for native side state updates
        setTimeout(() => {
          // The native side should handle the transition to LISTENING state
          // But we can log for debugging purposes
          console.log('🎤 State after interruption:', voiceStateFromHook.voiceState);
        }, 500);
      } else {
        console.log('❌ Failed to interrupt speech');
      }
      
      return result;
    } catch (err) {
      console.error('Error interrupting speech:', err);
      return false;
    }
  }, [voiceStateFromHook]);
  
  // Context value
  const value: VoiceContextValue = {
    voiceState,
    isWakeWordEnabled,
    error,
    transcript,
    response,
    chatHistory,
    isListening,
    isSpeaking,
    isError,
    setVoiceState: () => {}, // This is now handled by the native side
    setWakeWordEnabled,
    setError,
    setTranscript,
    setResponse,
    startListening,
    stopListening,
    resetState,
    interruptSpeech,
    clearChatHistory,
  };
  
  return <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>;
};

/**
 * Hook to access the voice context
 */
export const useVoiceState = (): VoiceContextValue => {
  const context = useContext(VoiceContext);
  
  if (!context) {
    throw new Error('useVoiceState must be used within a VoiceProvider');
  }
  
  return context;
};

export const useVoice = () => {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error('useVoice must be used within a VoiceProvider');
  }
  return context;
};