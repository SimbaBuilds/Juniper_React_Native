import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode, useMemo, useRef } from 'react';
import { VoiceState, VoiceContextValue } from './types/voice';
import VoiceService from './VoiceService';
import { useServerApi } from '../api/useServerApi';
import { useVoiceState as useVoiceStateHook } from './hooks/useVoiceState';
import { useVoiceSettings } from './hooks/useVoiceSettings';
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
  inputMode: 'voice',
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
  refreshSettings: async () => {},
  sendTextMessage: async () => {},
  voiceSettings: {},
  settingsLoading: false,
  updateVoiceSettings: async () => {},
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
  
  // Voice settings hook
  const { 
    settings: voiceSettings, 
    loading: settingsLoading, 
    updateSettings,
    loadSettings
  } = useVoiceSettings();
  
  // Use ref to avoid dependency cycles
  const updateSettingsRef = useRef(updateSettings);
  updateSettingsRef.current = updateSettings;
  
  const loadSettingsRef = useRef(loadSettings);
  loadSettingsRef.current = loadSettings;
  
  // Only manage UI-specific state that doesn't exist in native layer
  const [isWakeWordEnabled, setWakeWordEnabled] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [inputMode, setInputMode] = useState<'voice' | 'text'>('voice');
  
  // Voice service instance
  const voiceService = useMemo(() => VoiceService.getInstance(), []);
  
  // Track if listeners are set up
  const listenersSetupRef = useRef(false);

  // Server API hook
  const { sendMessage } = useServerApi();

  // Simple settings refresh function
  const refreshSettings = useCallback(async () => {
    if (!user?.id) {
      console.log('🔄 VOICE_CONTEXT: No user ID, skipping settings refresh');
      return;
    }

    try {
      console.log('🔄 VOICE_CONTEXT: Refreshing settings from database...');
      
      // First, ensure we have the latest local settings
      await loadSettingsRef.current();
      
      // Get voice settings from database
      const voiceSettings = await DatabaseService.getVoiceSettings(user.id);
      
      if (voiceSettings) {
        console.log('🔄 VOICE_CONTEXT: Found voice settings:', voiceSettings);
        
        // Update local settings with database values
        const generalInstructions = voiceSettings.general_instructions || 
          'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.';
        
        const updates = {
          deepgramEnabled: voiceSettings.deepgram_enabled,
          baseLanguageModel: voiceSettings.base_language_model,
          generalInstructions: generalInstructions,
          wakeWord: voiceSettings.selectedWakeWord || 'Jarvis',
          selectedWakeWord: voiceSettings.selectedWakeWord || 'JARVIS',
          wakeWordSensitivity: voiceSettings.wake_word_sensitivity ?? 0.3,
          wakeWordDetectionEnabled: voiceSettings.wake_word_detection_enabled ?? false,
          selectedDeepgramVoice: voiceSettings.selected_deepgram_voice || 'aura-2-mars-en',
          // XAI LiveSearch settings
          xaiLiveSearchEnabled: voiceSettings.xai_live_search_enabled ?? false,
          xaiLiveSearchSafeSearch: voiceSettings.xai_live_search_safe_search ?? true,
        };
        
        console.log('🔄 VOICE_CONTEXT: Updating with:', updates);
        console.log('🔄 VOICE_CONTEXT: Current settings before update:', voiceSettings);
        
        // Force sync to native by calling updateSettings (which always syncs now)
        console.log('🔄 VOICE_CONTEXT: Forcing sync to native layer...');
        await updateSettingsRef.current(updates);
        
        console.log('✅ VOICE_CONTEXT: Settings updated and synced to native successfully');
      } else {
        console.log('🔄 VOICE_CONTEXT: No voice settings found in database');
        
        // Even if no settings in database, sync current settings to ensure native is up to date
        console.log('🔄 VOICE_CONTEXT: Syncing current settings to native...');
        await updateSettingsRef.current({});
      }
    } catch (error) {
      console.error('❌ VOICE_CONTEXT: Error refreshing settings:', error);
    }
  }, [user?.id]);

  // Load settings from database when user logs in or changes
  useEffect(() => {
    if (user?.id) {
      console.log('🔄 VOICE_CONTEXT: User logged in, refreshing settings...');
      refreshSettings();
    }
  }, [user?.id, refreshSettings]);

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
    
    // Listen for text processing requests from native
    const processTextSub = DeviceEventEmitter.addListener('processTextFromNative', async (event) => {
      const { text, requestId } = event;

      try {
        console.log(`🟡 VOICE_SERVICE: Adding user message to chat history`);
        
        // Switch to voice mode when processing voice input
        setInputMode('voice');
        
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
          setTimeout(async () => {
            try {
              console.log('🔄 VOICE_CONTEXT: Sending message with current settings');
              
              const response = await sendMessage(text, updatedHistory);
              console.log('🟠 VOICE_CONTEXT: Received API response');
              
              // Check if settings were updated and refresh if needed
              if (response.settings_updated) {
                console.log('⚙️ VOICE_CONTEXT: Settings were updated, refreshing from database...');
                try {
                  await refreshSettings();
                  console.log('✅ VOICE_CONTEXT: Settings refreshed successfully');
                } catch (refreshError) {
                  console.error('❌ VOICE_CONTEXT: Error refreshing settings:', refreshError);
                }
              }
              
              // Send response back to native for TTS (only in voice mode)
              await voiceService.handleApiResponse(requestId, response.response);
              
            } catch (error) {
              console.error('🟠 VOICE_CONTEXT: ❌ Error processing text request:', error);
              
              const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
              
              // Send error response back to native
              try {
                await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
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
          await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
        } catch (responseError) {
          console.error('🟠 VOICE_CONTEXT: ❌ Error sending error response to native:', responseError);
        }
      }
    });
    subscriptions.push(processTextSub);
    
    // Listen for native voice settings update confirmations
    const nativeSettingsUpdateSub = DeviceEventEmitter.addListener('NativeVoiceSettingsUpdated', (event) => {
      console.log('✅ VOICE_CONTEXT: Native voice settings update confirmed:', event);
      // This confirms that the native layer has successfully updated its configuration
      // No additional action needed, but this provides confirmation in logs
    });
    subscriptions.push(nativeSettingsUpdateSub);
    
    listenersSetupRef.current = true;
    
    return () => {
      console.log('🧹 Cleaning up voice event listeners');
      subscriptions.forEach(sub => sub.remove());
      listenersSetupRef.current = false;
    };
  }, [sendMessage, voiceSettings, voiceService]);

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
  
  // Send text message using existing API infrastructure
  const sendTextMessage = useCallback(async (text: string) => {
    if (!text.trim()) {
      console.log('📝 TEXT_INPUT: Empty message, ignoring');
      return;
    }

    try {
      console.log('📝 TEXT_INPUT: Processing text message:', text);
      
      // Switch to text mode when user sends a text message
      setInputMode('text');
      
      // Create new user message
      const newMessage: ChatMessage = {
        role: 'user',
        content: text.trim(),
        timestamp: Date.now()
      };
      
      // Add user message to chat history
      setChatHistory(prev => {
        const updatedHistory = [...prev, newMessage];
        
        // Send to API with updated history in a separate async operation
        setTimeout(async () => {
          try {
            console.log('📝 TEXT_INPUT: Sending message to API');
            
            const response = await sendMessage(text.trim(), updatedHistory);
            console.log('📝 TEXT_INPUT: Received API response');
            
            // Check if settings were updated and refresh if needed
            if (response.settings_updated) {
              console.log('⚙️ TEXT_INPUT: Settings were updated, refreshing from database...');
              try {
                await refreshSettings();
                console.log('✅ TEXT_INPUT: Settings refreshed successfully');
              } catch (refreshError) {
                console.error('❌ TEXT_INPUT: Error refreshing settings:', refreshError);
              }
            }
            
            // Add assistant response to chat history
            const assistantMessage: ChatMessage = {
              role: 'assistant',
              content: response.response,
              timestamp: Date.now()
            };
            
            setChatHistory(prevHistory => [...prevHistory, assistantMessage]);
            
            // Note: No TTS playback because we're in text mode
            console.log('📝 TEXT_INPUT: Response added to chat (no TTS in text mode)');
            
          } catch (error) {
            console.error('📝 TEXT_INPUT: ❌ Error processing text message:', error);
            
            // Add error message to chat history
            const errorMessage: ChatMessage = {
              role: 'assistant',
              content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}`,
              timestamp: Date.now()
            };
            
            setChatHistory(prevHistory => [...prevHistory, errorMessage]);
          }
        }, 0);
        
        return updatedHistory;
      });
      
    } catch (error) {
      console.error('📝 TEXT_INPUT: ❌ Error in sendTextMessage:', error);
      throw error;
    }
  }, [sendMessage, voiceSettings]);

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
    inputMode,
    
    // Voice settings
    voiceSettings,
    settingsLoading,
    updateVoiceSettings: updateSettingsRef.current,
    
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
    refreshSettings,
    sendTextMessage,
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