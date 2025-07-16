import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode, useMemo, useRef } from 'react';
import { VoiceState, VoiceContextValue } from './types/voice';
import VoiceService from './VoiceService';
import { useServerApi } from '../api/useServerApi';
import { useVoiceState as useVoiceStateHook } from './hooks/useVoiceState';
import { useVoiceSettings } from './hooks/useVoiceSettings';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { DeviceEventEmitter, EmitterSubscription, Platform, NativeModules } from 'react-native';
import { conversationService } from '../services/conversationService';
import { isCancellationError } from '../utils/cancellationUtils';
import { useRequestStatusPolling } from '../hooks/useRequestStatusPolling';

const { VoiceModule } = NativeModules;

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
  integrationInProgress: false,
  currentRequestId: null,
  requestStatus: null,
  setVoiceState: () => {},
  setWakeWordEnabled: () => {},
  setError: () => {},
  setTranscript: () => {},
  setResponse: () => {},
  startListening: async () => false,
  startContinuousConversation: async () => false,
  stopListening: async () => false,
  resetState: () => {},
  interruptSpeech: async () => false,
  clearChatHistory: () => {},
  refreshSettings: async () => {},
  sendTextMessage: async () => {},
  continuePreviousChat: () => {},
  cancelRequest: async () => false,
  isRequestInProgress: false,
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

// Auto-refresh constants
const AUTO_REFRESH_DELAY = 10 * 60 * 1000; // 10 minutes in milliseconds

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
  const [integrationInProgress, setIntegrationInProgress] = useState<boolean>(false);
  const [currentRequestId, setCurrentRequestId] = useState<string | null>(null);
  const [requestStatus, setRequestStatus] = useState<string | null>(null);
  
  // Auto-refresh timer state
  const [lastMessageTimestamp, setLastMessageTimestamp] = useState<number | null>(null);
  const autoRefreshTimerRef = useRef<NodeJS.Timeout | null>(null);
  const integrationPollingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Request status polling
  const { status: polledStatus } = useRequestStatusPolling({
    requestId: currentRequestId,
    onStatusChange: (status) => {
      console.log('📊 REQUEST_STATUS: Status changed to:', status);
      setRequestStatus(status);
      
      // Clear request ID when request completes
      if (status === 'completed' || status === 'failed' || status === 'cancelled') {
        console.log('📊 REQUEST_STATUS: Request reached final state, clearing request ID');
        setTimeout(() => {
          setCurrentRequestId(null);
          setRequestStatus(null);
        }, 2000); // Keep status visible for 2 seconds
      }
    }
  });

  
  // Voice service instance
  const voiceService = useMemo(() => VoiceService.getInstance(), []);
  
  // Track if listeners are set up
  const listenersSetupRef = useRef(false);

  // Server API hook
  const { sendMessage, cancelRequest, isRequestInProgress, getCurrentRequestId } = useServerApi();

  // Auto-refresh timer functions
  const handleAutoRefresh = useCallback(async () => {
    if (chatHistory.length > 0) {
      console.log('🔄 Auto-refresh: Saving and clearing conversation after 10 minutes of inactivity');
      
      // Save conversation to Supabase before clearing
      try {
        const conversationId = await conversationService.saveConversation(chatHistory);
        if (conversationId) {
          console.log('✅ Auto-refresh: Conversation saved with ID:', conversationId);
        }
      } catch (error) {
        console.error('❌ Auto-refresh: Error saving conversation:', error);
        // Continue with clearing even if save fails
      }
      
      // Clear chat history
      setChatHistory([]);
      setLastMessageTimestamp(null);
      
      // Clear the timer since we just cleared history
      if (autoRefreshTimerRef.current) {
        clearTimeout(autoRefreshTimerRef.current);
        autoRefreshTimerRef.current = null;
      }
    }
  }, [chatHistory]);

  const resetAutoRefreshTimer = useCallback(() => {
    // Clear existing timer
    if (autoRefreshTimerRef.current) {
      clearTimeout(autoRefreshTimerRef.current);
    }
    
    // Only set timer if there are messages in chat history
    if (chatHistory.length > 0) {
      console.log('🕐 Setting auto-refresh timer for 10 minutes');
      autoRefreshTimerRef.current = setTimeout(() => {
        console.log('🕐 Auto-refresh timer triggered - clearing chat history');
        handleAutoRefresh();
      }, AUTO_REFRESH_DELAY);
    }
  }, [chatHistory.length, handleAutoRefresh]);

  // Integration status polling functions
  const stopIntegrationPolling = useCallback(() => {
    console.log('🛑 Stopping integration build status polling');
    if (integrationPollingTimerRef.current) {
      clearInterval(integrationPollingTimerRef.current);
      integrationPollingTimerRef.current = null;
    }
  }, []);

  const startIntegrationPolling = useCallback(() => {
    console.log('🔄 Starting integration build status polling every 15 seconds');
    
    if (integrationPollingTimerRef.current) {
      clearInterval(integrationPollingTimerRef.current);
    }
    
    integrationPollingTimerRef.current = setInterval(async () => {
      if (!user?.id) return;
      
      try {
        const status = await DatabaseService.getIntegrationBuildStatus(user.id);
        console.log('🔄 Integration build status poll result:', status);
        
        if (!status.integration_in_progress) {
          console.log('✅ Integration build completed - stopping polling');
          setIntegrationInProgress(false);
          stopIntegrationPolling();
        } else {
          console.log(`🔄 Integration builds in progress: ${status.in_progress_count}, states:`, 
            status.build_states.map(s => `${s.service_name}:${s.current_status}`).join(', '));
        }
      } catch (error) {
        console.error('❌ Error polling integration build status:', error);
      }
    }, 5000); // Poll every 5 seconds
  }, [user?.id, stopIntegrationPolling]);

  // Update last message timestamp and reset timer when chat history changes
  useEffect(() => {
    if (chatHistory.length > 0) {
      const latestMessage = chatHistory[chatHistory.length - 1];
      setLastMessageTimestamp(latestMessage.timestamp);
      resetAutoRefreshTimer();
    } else {
      // Clear timer when chat history is empty
      if (autoRefreshTimerRef.current) {
        clearTimeout(autoRefreshTimerRef.current);
        autoRefreshTimerRef.current = null;
      }
      setLastMessageTimestamp(null);
    }
  }, [chatHistory, resetAutoRefreshTimer]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (autoRefreshTimerRef.current) {
        clearTimeout(autoRefreshTimerRef.current);
      }
      if (integrationPollingTimerRef.current) {
        clearInterval(integrationPollingTimerRef.current);
      }
    };
  }, []);

  // Simple settings refresh function
  const refreshSettings = useCallback(async () => {
    if (!user?.id) {
      console.log('🔄 VOICE_CONTEXT: No user ID, skipping settings refresh');
      return;
    }

    try {
      console.log('🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH STARTED ==========');
      console.log('🔄 VOICE_CONTEXT: User ID:', user.id);
      console.log('🔄 VOICE_CONTEXT: Refreshing settings from database...');
      
      // First, ensure we have the latest local settings
      await loadSettingsRef.current();
      console.log('🔄 VOICE_CONTEXT: Local settings loaded');
      
      // Get voice settings from database
      const voiceSettings = await DatabaseService.getVoiceSettings(user.id);
      
      if (voiceSettings) {
        
        // Update local settings with database values
        const generalInstructions = voiceSettings.general_instructions || 
          '';
        
        const updates = {
          deepgramEnabled: voiceSettings.deepgram_enabled,
          baseLanguageModel: voiceSettings.base_language_model,
          generalInstructions: generalInstructions,
          wakeWord: voiceSettings.selectedWakeWord || 'Juniper',
          selectedWakeWord: voiceSettings.selectedWakeWord || 'JUNIPER',
          wakeWordSensitivity: voiceSettings.wake_word_sensitivity ?? 0.3,
          wakeWordDetectionEnabled: voiceSettings.wake_word_detection_enabled ?? true,
          selectedDeepgramVoice: voiceSettings.selected_deepgram_voice || 'aura-2-mars-en',
          // XAI LiveSearch settings
          xaiLiveSearchEnabled: voiceSettings.xai_live_search_enabled ?? true,
          xaiLiveSearchSafeSearch: voiceSettings.xai_live_search_safe_search ?? true,
        };
        
        console.log('🔄 VOICE_CONTEXT: ========== MERGED SETTINGS FOR NATIVE ==========');
        console.log('🔄 VOICE_CONTEXT: deepgramEnabled:', updates.deepgramEnabled);
        console.log('🔄 VOICE_CONTEXT: baseLanguageModel:', updates.baseLanguageModel);
        console.log('🔄 VOICE_CONTEXT: generalInstructions length:', updates.generalInstructions.length);
        console.log('🔄 VOICE_CONTEXT: wakeWord:', updates.wakeWord);
        console.log('🔄 VOICE_CONTEXT: selectedWakeWord:', updates.selectedWakeWord);
        console.log('🔄 VOICE_CONTEXT: wakeWordSensitivity:', updates.wakeWordSensitivity);
        console.log('🔄 VOICE_CONTEXT: wakeWordDetectionEnabled:', updates.wakeWordDetectionEnabled);
        console.log('🔄 VOICE_CONTEXT: selectedDeepgramVoice:', updates.selectedDeepgramVoice);
        console.log('🔄 VOICE_CONTEXT: xaiLiveSearchEnabled:', updates.xaiLiveSearchEnabled);
        console.log('🔄 VOICE_CONTEXT: xaiLiveSearchSafeSearch:', updates.xaiLiveSearchSafeSearch);
        console.log('🔄 VOICE_CONTEXT: Current settings before update:', JSON.stringify(voiceSettings, null, 2));
        
        // Specifically log wake word detection refresh
        if (updates.wakeWordDetectionEnabled !== undefined) {
          console.log('🎤 VOICE_CONTEXT: ========== WAKE WORD DETECTION REFRESH ==========');
          console.log('🎤 VOICE_CONTEXT: Refreshing wake word detection enabled state from database:', updates.wakeWordDetectionEnabled);
          console.log('🎤 VOICE_CONTEXT: Wake word sensitivity:', updates.wakeWordSensitivity);
          console.log('🎤 VOICE_CONTEXT: Selected wake word:', updates.selectedWakeWord);
        }
        
        // Force sync to native by calling updateSettings (which always syncs now)
        console.log('🔄 VOICE_CONTEXT: ========== SYNCING TO NATIVE LAYER ==========');
        console.log('🔄 VOICE_CONTEXT: About to call updateSettingsRef.current with updates...');
        const syncStartTime = Date.now();
        
        await updateSettingsRef.current(updates);
        
        const syncEndTime = Date.now();
        console.log('🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========');
        console.log('🔄 VOICE_CONTEXT: Sync duration:', (syncEndTime - syncStartTime), 'ms');
        console.log('✅ VOICE_CONTEXT: Settings updated and synced to native successfully');
      } else {
        console.log('🔄 VOICE_CONTEXT: ========== NO DATABASE SETTINGS FOUND ==========');
        console.log('🔄 VOICE_CONTEXT: No voice settings found in database for user:', user.id);
        
        // Even if no settings in database, sync current settings to ensure native is up to date
        console.log('🔄 VOICE_CONTEXT: Syncing current settings to native...');
        await updateSettingsRef.current({});
        console.log('🔄 VOICE_CONTEXT: Current settings synced to native');
      }
      
      console.log('🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========');
    } catch (error) {
      console.error('❌ VOICE_CONTEXT: ========== SETTINGS REFRESH ERROR ==========');
      console.error('❌ VOICE_CONTEXT: Error refreshing settings:', error);
      console.error('❌ VOICE_CONTEXT: Error stack:', error instanceof Error ? error.stack : 'No stack available');
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
        
        // Clear any previous errors before starting new request
        setError(null);
        
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
              
              // Start polling immediately when request begins
              setRequestStatus('pending');
              
              const response = await sendMessage(text, updatedHistory, (requestId) => {
                console.log('📊 REQUEST_STATUS: Setting request ID for polling:', requestId);
                setCurrentRequestId(requestId);
              });
              console.log('🟠 VOICE_CONTEXT: Received API response');
              console.log('🔄 VOICE_CONTEXT: Response settings_updated flag:', response.settings_updated);
              
              // Check if settings were updated and refresh if needed
              if (response.settings_updated) {
                console.log('⚙️ VOICE_CONTEXT: Settings were updated, refreshing from database...');
                try {
                  const refreshStartTime = Date.now();
                  await refreshSettings();
                  console.log('✅ VOICE_CONTEXT: Settings refreshed successfully');
                } catch (refreshError) {
                  console.error('❌ VOICE_CONTEXT: ========== SETTINGS REFRESH FAILED ==========');
                  console.error('❌ VOICE_CONTEXT: Error refreshing settings:', refreshError);
                  console.error('❌ VOICE_CONTEXT: Refresh error stack:', refreshError instanceof Error ? refreshError.stack : 'No stack available');
                }
              } else {
                console.log('⚙️ VOICE_CONTEXT: No settings update flag - skipping settings refresh');
              }
              
              // Send response back to native for TTS (only in voice mode)
              await voiceService.handleApiResponse(requestId, response.response);
              
              // Don't clear request status immediately - let polling handle it
              // The polling will stop and clear when status reaches 'completed'
              
            } catch (error) {
              console.error('🟠 VOICE_CONTEXT: ❌ Error processing text request:', error);
              
              if (!isCancellationError(error)) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
                // Send error response back to native
                try {
                  await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
                } catch (responseError) {
                  console.error('🟠 VOICE_CONTEXT: ❌ Error sending error response to native:', responseError);
                }
              } else {
                console.log('🟠 VOICE_CONTEXT: Request was cancelled - not sending error to native');
              }
              
              // Clear request ID after error
              setCurrentRequestId(null);
              setRequestStatus(null);
            }
          }, 0);
          
          return updatedHistory;
        });
        
      } catch (error) {
        console.error('🟠 VOICE_CONTEXT: ❌ Error in processTextFromNative:', error);
        console.error('🟠 VOICE_CONTEXT: Error stack:', error instanceof Error ? error.stack : 'No stack available');
        
        if (!isCancellationError(error)) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
          // Send error response back to native
          try {
            await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
          } catch (responseError) {
            console.error('🟠 VOICE_CONTEXT: ❌ Error sending error response to native:', responseError);
          }
        } else {
          console.log('🟠 VOICE_CONTEXT: Request was cancelled - not sending error to native');
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

  // Start continuous conversation (iOS-specific) - simulates Android wake word flow
  const startContinuousConversation = useCallback(async () => {
    try {
      console.log('🎤 Starting continuous conversation (iOS mode)');
      
      if (Platform.OS === 'ios') {
        // Use the iOS-specific continuous conversation method
        return await voiceService.startContinuousConversation();
      } else {
        // For Android, just use regular startListening
        return await voiceStateFromHook.startListening();
      }
    } catch (err) {
      console.error('Error starting continuous conversation:', err);
      setError(err instanceof Error ? err.message : 'Failed to start continuous conversation');
      return false;
    }
  }, [voiceStateFromHook, voiceService]);

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
    console.log('🗑️ Clearing chat history (manual)');
    
    // Clear native state to ensure clean slate
    if (Platform.OS === 'android' && VoiceModule?.clearNativeState) {
      try {
        console.log('🧹 CLEAR_CHAT: Clearing native state...');
        await VoiceModule.clearNativeState();
        console.log('🧹 CLEAR_CHAT: ✅ Native state cleared');
      } catch (nativeError) {
        console.warn('🧹 CLEAR_CHAT: ⚠️ Failed to clear native state:', nativeError);
      }
    }
    
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
      console.log('📝 TEXT_INPUT: ========== TEXT MESSAGE PROCESSING ==========');
      console.log('📝 TEXT_INPUT: Processing text message:', text);
      console.log('📝 TEXT_INPUT: Current voice settings:', JSON.stringify(voiceSettings, null, 2));
      
      // Clear any previous errors before starting new request
      setError(null);
      
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
            console.log('📝 TEXT_INPUT: ========== SENDING TO API ==========');
            console.log('📝 TEXT_INPUT: Sending message to API');
            
            // Start polling immediately when request begins
            setRequestStatus('pending');
            
            const apiStartTime = Date.now();
            const response = await sendMessage(text.trim(), updatedHistory, (requestId) => {
              console.log('📊 REQUEST_STATUS: Setting request ID for polling:', requestId);
              setCurrentRequestId(requestId);
            });
            const apiEndTime = Date.now();
            
            console.log('📝 TEXT_INPUT: ========== API RESPONSE RECEIVED ==========');
            console.log('📝 TEXT_INPUT: API call duration:', (apiEndTime - apiStartTime), 'ms');
            console.log('📝 TEXT_INPUT: Received API response');
            console.log('📝 TEXT_INPUT: Response settings_updated flag:', response.settings_updated);
            console.log('📝 TEXT_INPUT: Response integration_in_progress flag:', response.integration_in_progress);
            
            // Check if settings were updated and refresh if needed
            if (response.settings_updated) {
              console.log('⚙️ TEXT_INPUT: ========== SETTINGS UPDATE DETECTED ==========');
              console.log('⚙️ TEXT_INPUT: Settings were updated, refreshing from database...');
              console.log('⚙️ TEXT_INPUT: Current time:', new Date().toISOString());
              
              try {
                const refreshStartTime = Date.now();
                await refreshSettings();
                const refreshEndTime = Date.now();
                
                console.log('⚙️ TEXT_INPUT: ========== SETTINGS REFRESH COMPLETED ==========');
                console.log('⚙️ TEXT_INPUT: Settings refresh duration:', (refreshEndTime - refreshStartTime), 'ms');
                console.log('✅ TEXT_INPUT: Settings refreshed successfully');
              } catch (refreshError) {
                console.error('❌ TEXT_INPUT: ========== SETTINGS REFRESH FAILED ==========');
                console.error('❌ TEXT_INPUT: Error refreshing settings:', refreshError);
                console.error('❌ TEXT_INPUT: Refresh error stack:', refreshError instanceof Error ? refreshError.stack : 'No stack available');
              }
            } else {
              console.log('⚙️ TEXT_INPUT: No settings update flag - skipping settings refresh');
            }
            
            // Check if integration is in progress and start polling if needed
            if (response.integration_in_progress) {
              console.log('🔗 TEXT_INPUT: ========== INTEGRATION BUILD IN PROGRESS DETECTED ==========');
              console.log('🔗 TEXT_INPUT: Integration build started, beginning build state polling...');
              console.log('🔗 TEXT_INPUT: Current time:', new Date().toISOString());
              
              setIntegrationInProgress(true);
              startIntegrationPolling();
            } else {
              console.log('🔗 TEXT_INPUT: No integration build in progress flag - skipping polling');
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
            
            // Don't clear request status immediately - let polling handle it
            // The polling will stop and clear when status reaches 'completed'
            
          } catch (error) {
            console.error('📝 TEXT_INPUT: ❌ Error processing text message:', error);
            
            // Don't show cancellation errors to user in chat
            if (!isCancellationError(error)) {
              // Add error message to chat history only for non-cancellation errors
              const errorMessage: ChatMessage = {
                role: 'assistant',
                content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}`,
                timestamp: Date.now()
              };
              
              setChatHistory(prevHistory => [...prevHistory, errorMessage]);
            } else {
              console.log('📝 TEXT_INPUT: Request was cancelled - not showing error to user');
            }
            
            // Clear request ID after error
            setCurrentRequestId(null);
            setRequestStatus(null);
          }
        }, 0);
        
        return updatedHistory;
      });
      
    } catch (error) {
      console.error('📝 TEXT_INPUT: ❌ Error in sendTextMessage:', error);
      console.error('📝 TEXT_INPUT: Error stack:', error instanceof Error ? error.stack : 'No stack available');
      throw error;
    }
  }, [sendMessage, voiceSettings]);

  // Continue previous chat by setting the chat history
  const continuePreviousChat = useCallback((messages: ChatMessage[]) => {
    console.log('📚 Continuing previous chat with', messages.length, 'messages');
    setChatHistory(messages);
  }, []);

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
    integrationInProgress,
    currentRequestId,
    requestStatus,
    
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
    startContinuousConversation,
    stopListening,
    resetState,
    interruptSpeech,
    clearChatHistory,
    refreshSettings,
    sendTextMessage,
    continuePreviousChat,
    cancelRequest,
    isRequestInProgress,
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