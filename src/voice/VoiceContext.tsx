import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode, useMemo, useRef } from 'react';
import { VoiceState, VoiceContextValue } from './types/voice';
import VoiceService from './VoiceService';
import { useServerApi } from '../api/useServerApi';
import { useVoiceState as useVoiceStateHook } from './hooks/useVoiceState';
import { useFeatureSettings } from '../settings/useFeatureSettings';
import { DatabaseService, supabase } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { DeviceEventEmitter, EmitterSubscription } from 'react-native';
import { conversationService } from '../services/conversationService';

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
  timestamp: number;
}

/**
 * Provider component for the Voice Context
 * Now serves as a pure bridge to native state - no duplicate state management
 */
export const VoiceProvider: React.FC<VoiceProviderProps> = ({ children }) => {
  // Use the voice state hook to access native state (single source of truth)
  const voiceStateFromHook = useVoiceStateHook();
  
  // All voice state comes directly from native - no duplication
  const voiceState = voiceStateFromHook.voiceState;
  const isListening = voiceStateFromHook.isListening;
  const isSpeaking = voiceStateFromHook.isSpeaking;
  const isError = voiceStateFromHook.isError;
  
  // Auth context for user ID
  const { user } = useAuth();
  
  // Feature settings hook (for local storage fallback)
  const { 
    settings: featureSettings, 
    loading: settingsLoading, 
    updateVoiceSettings,
    loadSettings
  } = useFeatureSettings();
  
  // Create a ref to always have the latest settings
  const latestSettingsRef = useRef(featureSettings);
  
  // Track if we've already loaded initial settings to prevent infinite loops
  const initialSettingsLoaded = useRef(false);
  
  // Load voice settings from database on mount
  useEffect(() => {
    console.log('🔍 VOICE_CONTEXT: useEffect triggered - user?.id:', user?.id, 'initialSettingsLoaded:', initialSettingsLoaded.current);
    
    const loadVoiceSettingsFromDatabase = async () => {
      if (!user?.id || initialSettingsLoaded.current) {
        console.log('🔍 VOICE_CONTEXT: Skipping load - no user or already loaded');
        return;
      }
      
      try {
        console.log('🔄 VOICE_CONTEXT: Loading voice settings from user_profiles...');
        const voiceSettings = await DatabaseService.getVoiceSettings(user.id);
        
        if (voiceSettings) {
          console.log('🔄 VOICE_CONTEXT: Found voice settings in user_profiles:', voiceSettings);
          
          // Check if the settings are different before updating to prevent unnecessary cycles
          const currentVoice = featureSettings.voice;
          const settingsChanged = (
            currentVoice.deepgramEnabled !== voiceSettings.deepgram_enabled ||
            currentVoice.baseLanguageModel !== voiceSettings.base_language_model ||
            currentVoice.generalInstructions !== voiceSettings.general_instructions
          );
          
          console.log('🔍 VOICE_CONTEXT: Current voice settings:', currentVoice);
          console.log('🔍 VOICE_CONTEXT: DB voice settings:', voiceSettings);
          console.log('🔍 VOICE_CONTEXT: Settings changed?', settingsChanged);
          
          if (settingsChanged) {
            console.log('🔄 VOICE_CONTEXT: Settings differ, updating local settings...');
            // Update local settings with database values
            await updateVoiceSettings({
              deepgramEnabled: voiceSettings.deepgram_enabled,
              baseLanguageModel: voiceSettings.base_language_model,
              generalInstructions: voiceSettings.general_instructions
            });
            console.log('🔄 VOICE_CONTEXT: Updated local voice settings from user_profiles');
          } else {
            console.log('🔄 VOICE_CONTEXT: Settings are already in sync, no update needed');
          }
          
          initialSettingsLoaded.current = true;
        } else {
          console.log('🔄 VOICE_CONTEXT: No voice settings found in user_profiles, using local settings');
          initialSettingsLoaded.current = true;
        }
      } catch (error) {
        console.error('🔄 VOICE_CONTEXT: Error loading voice settings from user_profiles:', error);
        console.log('🔄 VOICE_CONTEXT: Falling back to local settings');
        initialSettingsLoaded.current = true;
      }
    };

    // Add a small delay to ensure settings are loaded first
    const timeoutId = setTimeout(loadVoiceSettingsFromDatabase, 100);
    
    return () => clearTimeout(timeoutId);
  }, [user?.id]); // Removed updateVoiceSettings from dependency array to prevent infinite loop

  // Reset flag when user changes
  useEffect(() => {
    initialSettingsLoaded.current = false;
  }, [user?.id]);
  
  // Update the ref whenever settings change
  useEffect(() => {
    latestSettingsRef.current = featureSettings;
    console.log('🔄 VOICE_CONTEXT: Settings updated, new model:', featureSettings?.voice?.baseLanguageModel);
    console.log('🔄 VOICE_CONTEXT: Full voice settings:', featureSettings?.voice);
    console.log('🔄 VOICE_CONTEXT: Settings loading state:', settingsLoading);
  }, [featureSettings]);
  
  // Log specifically when baseLanguageModel changes
  useEffect(() => {
    console.log('🎯 VOICE_CONTEXT: Base language model changed to:', featureSettings?.voice?.baseLanguageModel);
    console.log('🎯 VOICE_CONTEXT: Ref updated with model:', latestSettingsRef.current?.voice?.baseLanguageModel);
  }, [featureSettings?.voice?.baseLanguageModel]);
  
  // Only manage UI-specific state that doesn't exist in native layer
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
  const { sendMessage } = useServerApi();

  // Set up event listeners once
  useEffect(() => {
    if (listenersSetupRef.current) return;
    
    console.log('🎤 Setting up voice event listeners');
    
    const subscriptions: EmitterSubscription[] = [];
    
    // Listen for transcript updates
    const transcriptSub = DeviceEventEmitter.addListener('VoiceTranscriptUpdate', (event) => {
      console.log('📝 Transcript update:', event.transcript);
      setTranscript(event.transcript);
    });
    subscriptions.push(transcriptSub);
    
    // Listen for response updates
    const responseSub = DeviceEventEmitter.addListener('VoiceResponseUpdate', (event) => {
      console.log('💬 Response update:', event.response);
      setResponse(event.response);
      
      // Add to chat history
      if (event.response && event.response.trim()) {
        setChatHistory(prev => [...prev, {
          role: 'assistant',
          content: event.response,
          timestamp: Date.now()
        }]);
      }
    });
    subscriptions.push(responseSub);
    
    // Listen for error updates
    const errorSub = DeviceEventEmitter.addListener('VoiceErrorUpdate', (event) => {
      console.log('❌ Error update:', event.error);
      setError(event.error);
    });
    subscriptions.push(errorSub);
    
    // Listen for text processing requests from native (THE MISSING PIECE!)
    const processTextSub = DeviceEventEmitter.addListener('processTextFromNative', async (event) => {
      const { text, requestId } = event;

      try {
        console.log(`🟡 VOICE_SERVICE: Adding user message to chat history`);
        
        // Create new message
        const newMessage: ChatMessage = {
          role: 'user',
          content: text,
          timestamp: Date.now()
        };
        
        // Get current chat history and create updated history
        setChatHistory(prev => {
          const updatedHistory = [...prev, newMessage];
          
          // Send to API with updated history in a separate async operation
          // We need to do this outside of the setState callback
          setTimeout(async () => {
            try {
              // Force reload settings to ensure we have the latest
              console.log('🔄 VOICE_CONTEXT: Force reloading settings before API call...');
              await loadSettings();
              
              // Get the latest settings from the ref to avoid stale closure
              const currentSettings = latestSettingsRef.current;
              
              console.log('🟠 VOICE_CONTEXT: Settings loading:', settingsLoading, 'Model:', currentSettings?.voice?.baseLanguageModel);
              console.log('🟠 VOICE_CONTEXT: Closure settings model:', featureSettings?.voice?.baseLanguageModel);
              console.log('🟠 VOICE_CONTEXT: Ref settings model:', currentSettings?.voice?.baseLanguageModel);
              console.log('🟠 VOICE_CONTEXT: Are they the same?', featureSettings?.voice?.baseLanguageModel === currentSettings?.voice?.baseLanguageModel);
              console.log('🟠 VOICE_CONTEXT: Sending message with history length:', updatedHistory.length);
              
              // Wait for settings to load if they're still loading
              if (settingsLoading) {
                console.log('🟠 VOICE_CONTEXT: Settings still loading, waiting...');
                // Wait a bit and check again
                await new Promise(resolve => setTimeout(resolve, 500));
                if (settingsLoading) {
                  console.log('🟠 VOICE_CONTEXT: Settings still loading after wait, proceeding with current settings');
                }
              }
              
              // CRITICAL: Validate voice settings sync before API call
              console.log('🔍 VOICE_CONTEXT: Validating voice settings sync before API call...');
              const settingsValidated = await validateVoiceSettingsSync(currentSettings);
              
              if (!settingsValidated) {
                throw new Error('Voice settings validation failed');
              }
              
              // Get the most up-to-date settings after validation
              const finalSettings = latestSettingsRef.current;
              console.log('🔍 VOICE_CONTEXT: Final settings for API call:', finalSettings?.voice);
              
              const response = await sendMessage(text, updatedHistory, finalSettings);
              
              console.log('🟠 VOICE_CONTEXT: Received API response:', response.response.substring(0, 100) + '...');
              
              // Send response back to native
              await voiceService.handleApiResponse(requestId, response.response);
              
            } catch (error) {
              console.error('🟠 VOICE_CONTEXT: ❌ Error processing text request:', error);
              console.error('🟠 VOICE_CONTEXT: Error details:', {
                name: error instanceof Error ? error.name : 'Unknown',
                message: error instanceof Error ? error.message : String(error),
                stack: error instanceof Error ? error.stack : undefined
              });
              
              const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
              
              // Send error response back to native
              try {
                console.log('🟠 VOICE_CONTEXT: Sending error response back to native...');
                await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
                console.log('🟠 VOICE_CONTEXT: ✅ Error response sent to native');
              } catch (responseError) {
                console.error('🟠 VOICE_CONTEXT: ❌ Error sending error response to native:', responseError);
              }
            }
          }, 0);
          
          return updatedHistory;
        });
        
      } catch (error) {
        console.error('🟠 VOICE_CONTEXT: ❌ Error in processTextFromNative:', error);
        
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        
        // Send error response back to native
        try {
          console.log('🟠 VOICE_CONTEXT: Sending error response back to native...');
          await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
          console.log('🟠 VOICE_CONTEXT: ✅ Error response sent to native');
        } catch (responseError) {
          console.error('🟠 VOICE_CONTEXT: ❌ Error sending error response to native:', responseError);
        }
      }
    });
    subscriptions.push(processTextSub);
    
    listenersSetupRef.current = true;
    
    return () => {
      console.log('🧹 Cleaning up voice event listeners');
      subscriptions.forEach(sub => sub.remove());
      listenersSetupRef.current = false;
    };
  }, [sendMessage, chatHistory, settingsLoading, voiceService]);

  // Start listening - delegate to hook
  const startListening = useCallback(async () => {
    try {
      console.log('🎤 Starting listening via context');
      return await voiceStateFromHook.startListening();
    } catch (err) {
      console.error('Error starting listening:', err);
      setError(err instanceof Error ? err.message : 'Failed to start listening');
      return false;
    }
  }, [voiceStateFromHook]);

  // Stop listening - delegate to hook
  const stopListening = useCallback(async () => {
    try {
      console.log('🛑 Stopping listening via context');
      return await voiceStateFromHook.stopListening();
    } catch (err) {
      console.error('Error stopping listening:', err);
      setError(err instanceof Error ? err.message : 'Failed to stop listening');
      return false;
    }
  }, [voiceStateFromHook]);

  // Reset state
  const resetState = useCallback(() => {
    console.log('🔄 Resetting voice state');
    setError(null);
    setTranscript('');
    setResponse('');
    // Note: voiceState is managed by native layer, not reset here
  }, []);

  // Clear chat history
  const clearChatHistory = useCallback(async () => {
    console.log('🗑️ Clearing chat history');
    
    // Save conversation to Supabase before clearing if there are messages
    if (chatHistory.length > 0) {
      try {
        console.log('💾 Saving conversation before clearing...');
        const conversationId = await conversationService.saveConversation(chatHistory);
        if (conversationId) {
          console.log('✅ Conversation saved with ID:', conversationId);
        }
      } catch (error) {
        console.error('❌ Error saving conversation:', error);
        // Continue with clearing even if save fails
      }
    }
    
    setChatHistory([]);
  }, [chatHistory]);

  // Interrupt speech - delegate to hook
  const interruptSpeech = useCallback(async () => {
    try {
      console.log('🛑 Interrupting current speech');
      
      const result = await voiceStateFromHook.interruptSpeech();
      
      if (result) {
        // Clear response to remove visible response text
        setResponse('');
        console.log('✅ Speech interrupted successfully, transitioning to LISTENING state');
        
        // Add a short delay to allow for native side state updates
        setTimeout(() => {
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
  
  // Helper function to validate voice settings match between UI and database
  const validateVoiceSettingsSync = async (currentSettings: any): Promise<boolean> => {
    if (!user?.id) return true; // Skip validation if no user
    
    try {
      const dbVoiceSettings = await DatabaseService.getVoiceSettings(user.id);
      if (!dbVoiceSettings) {
        console.log('🔍 VOICE_CONTEXT: No database voice settings found, proceeding with local settings');
        return true;
      }
      
      // Check if critical settings match
      const settingsMatch = (
        currentSettings.voice.deepgramEnabled === dbVoiceSettings.deepgram_enabled &&
        currentSettings.voice.baseLanguageModel === dbVoiceSettings.base_language_model &&
        currentSettings.voice.generalInstructions === dbVoiceSettings.general_instructions
      );
      
      if (!settingsMatch) {
        console.warn('🔍 VOICE_CONTEXT: Voice settings mismatch detected!');
        console.warn('🔍 VOICE_CONTEXT: UI settings:', currentSettings.voice);
        console.warn('🔍 VOICE_CONTEXT: DB settings:', dbVoiceSettings);
        
        // Update local settings to match database
        await updateVoiceSettings({
          deepgramEnabled: dbVoiceSettings.deepgram_enabled,
          baseLanguageModel: dbVoiceSettings.base_language_model,
          generalInstructions: dbVoiceSettings.general_instructions
        });
        
        console.log('🔍 VOICE_CONTEXT: Local settings updated to match database');
        
        // Wait a moment for settings to propagate
        await new Promise(resolve => setTimeout(resolve, 200));
      } else {
        console.log('🔍 VOICE_CONTEXT: Voice settings are in sync');
      }
      
      return true;
    } catch (error) {
      console.error('🔍 VOICE_CONTEXT: Error validating voice settings sync:', error);
      return true; // Proceed anyway to avoid blocking functionality
    }
  };
  
  // Context value - now purely bridging to native state
  const value: VoiceContextValue = {
    // Native state (single source of truth)
    voiceState,
    isListening,
    isSpeaking,
    isError,
    
    // UI-specific state
    isWakeWordEnabled,
    error,
    transcript,
    response,
    chatHistory,
    
    // Actions (delegate to native)
    setVoiceState: () => {}, // No-op - state managed by native layer
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