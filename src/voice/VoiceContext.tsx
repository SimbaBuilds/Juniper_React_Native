import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode, useMemo, useRef } from 'react';
import { VoiceState, VoiceContextValue } from './types/voice';
import VoiceService from './VoiceService';
import { useServerApi } from '../api/useServerApi';
import { useVoiceState as useVoiceStateHook } from './hooks/useVoiceState';
import { useVoiceSettings } from './hooks/useVoiceSettings';
import { DatabaseService, supabase } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { DeviceEventEmitter, EmitterSubscription, Platform, NativeModules, AppState } from 'react-native';
import { conversationService } from '../services/conversationService';
import { isCancellationError } from '../utils/cancellationUtils';
import { useRequestStatusPolling } from '../hooks/useRequestStatusPolling';
import { DEFAULT_WAKE_PHRASE } from '../wakeword/constants';
import requestMapping from '../utils/requestMapping';
import Storage from '../utils/storage';
import AppStateService from '../appstate/AppStateService';
import conversationSyncService from '../services/conversationSyncService';
import HealthSyncService from '../integrations/data/HealthSyncService';

const { VoiceModule } = NativeModules;

// Create safe module accessor with defensive checks
const getSafeVoiceModule = () => {
    if (!VoiceModule) {
        console.warn('VoiceModule not found in NativeModules for VoiceContext');
        return {
            clearNativeState: () => Promise.resolve({ success: false, error: 'VoiceModule not available' }),
        };
    }
    return VoiceModule;
};

const SafeVoiceModule = getSafeVoiceModule();

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
  activeConversationId: null,
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
  setCurrentRequestId: () => {},
  setRequestStatus: () => {},
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
  imageUrl?: string; // Optional image URL for messages with image attachments
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
  
  // Log whenever VoiceContext state changes
  useEffect(() => {
    console.log('🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========');
    console.log('🔄 VOICE_CONTEXT: Context voiceState:', voiceState);
    console.log('🔄 VOICE_CONTEXT: Context isListening:', isListening);
    console.log('🔄 VOICE_CONTEXT: Context isSpeaking:', isSpeaking);
    console.log('🔄 VOICE_CONTEXT: Context isError:', isError);
    console.log('🔄 VOICE_CONTEXT: ====================================================');
  }, [voiceState, isListening, isSpeaking, isError]);
  
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
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  
  // Auto-refresh timer state
  const [lastMessageTimestamp, setLastMessageTimestamp] = useState<number | null>(null);
  const autoRefreshTimerRef = useRef<NodeJS.Timeout | null>(null);
  const integrationPollingTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Request status polling
  const { status: polledStatus } = useRequestStatusPolling({
    requestId: currentRequestId,
    onStatusChange: (status) => {
      console.log('📊 REQUEST_STATUS: Status changed to:', status);

      // For failed/cancelled states, set to 'completed' to hide status indicator
      if (status === 'failed' || status === 'cancelled') {
        console.log('📊 REQUEST_STATUS: Setting failed/cancelled status to completed to hide indicator');
        setRequestStatus('completed');
      } else {
        setRequestStatus(status);
      }

      // Clear request ID when request completes, fails, or is cancelled
      if (status === 'completed' || status === 'failed' || status === 'cancelled') {
        console.log('📊 REQUEST_STATUS: Request reached final state, clearing request ID');
        setTimeout(() => {
          setCurrentRequestId(null);
          setRequestStatus(null);
        }, 500); // Keep status visible for 0.5 seconds before clearing
      }
    }
  });

  // Clear requestStatus when currentRequestId is cleared
  useEffect(() => {
    if (!currentRequestId && requestStatus) {
      console.log('📊 REQUEST_STATUS: Clearing status after request ID cleared');
      setRequestStatus(null);
    }
  }, [currentRequestId, requestStatus]);


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
      
      // Mark conversation as completed if there's an active conversation
      if (activeConversationId) {
        try {
          console.log('💬 AUTO_REFRESH: Marking conversation as completed:', activeConversationId);
          await supabase
            .from('conversations')
            .update({
              status: 'completed',
              metadata: {
                messageCount: chatHistory.length,
                endTime: Date.now()
              },
              updated_at: new Date()
            })
            .eq('id', activeConversationId);
          console.log('✅ Auto-refresh: Conversation marked as completed:', activeConversationId);
        } catch (error) {
          console.error('❌ Auto-refresh: Error updating conversation status:', error);
          // Continue with clearing even if update fails
        }
      }
      
      // Clear native conversation history
      try {
        console.log('🧹 AUTO_REFRESH: Clearing native conversation history...');
        await conversationSyncService.clearNativeHistory();
        console.log('🧹 AUTO_REFRESH: ✅ Native conversation history cleared');
      } catch (error) {
        console.warn('🧹 AUTO_REFRESH: ⚠️ Failed to clear native conversation history:', error);
      }
      
      // Clear chat history
      setChatHistory([]);
      setActiveConversationId(null); // Clear the active conversation ID
      setLastMessageTimestamp(null);

      // Clear the timer since we just cleared history
      if (autoRefreshTimerRef.current) {
        clearTimeout(autoRefreshTimerRef.current);
        autoRefreshTimerRef.current = null;
      }
    }
  }, [chatHistory, activeConversationId]);

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

  // Helper function to check for duplicate messages within time window
  const isDuplicateMessage = useCallback((newContent: string, role: 'user' | 'assistant', timeWindowMs: number = 5000): boolean => {
    const now = Date.now();
    return chatHistory.some(msg =>
      msg.role === role &&
      msg.content === newContent &&
      (now - msg.timestamp) < timeWindowMs
    );
  }, [chatHistory]);

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
          wakeWord: voiceSettings.selectedWakeWord || DEFAULT_WAKE_PHRASE,
          selectedWakeWord: voiceSettings.selectedWakeWord || DEFAULT_WAKE_PHRASE,
          wakeWordSensitivity: voiceSettings.wake_word_sensitivity ?? 0.3,
          wakeWordDetectionEnabled: voiceSettings.wake_word_detection_enabled ?? false,
          selectedDeepgramVoice: voiceSettings.selected_deepgram_voice || 'aura-2-pandora-en',
        };
        
        // console.log('🔄 VOICE_CONTEXT: ========== MERGED SETTINGS FOR NATIVE ==========');
        // console.log('🔄 VOICE_CONTEXT: deepgramEnabled:', updates.deepgramEnabled);
        // console.log('🔄 VOICE_CONTEXT: baseLanguageModel:', updates.baseLanguageModel);
        // console.log('🔄 VOICE_CONTEXT: generalInstructions length:', updates.generalInstructions.length);
        // console.log('🔄 VOICE_CONTEXT: wakeWord:', updates.wakeWord);
        // console.log('🔄 VOICE_CONTEXT: selectedWakeWord:', updates.selectedWakeWord);
        // console.log('🔄 VOICE_CONTEXT: wakeWordSensitivity:', updates.wakeWordSensitivity);
        // console.log('🔄 VOICE_CONTEXT: wakeWordDetectionEnabled:', updates.wakeWordDetectionEnabled);
        // console.log('🔄 VOICE_CONTEXT: selectedDeepgramVoice:', updates.selectedDeepgramVoice);
        // console.log('🔄 VOICE_CONTEXT: Current settings before update:', JSON.stringify(voiceSettings, null, 2));
        
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

  // Check for background conversations on app load
  const checkAndMergeBackgroundConversations = useCallback(async () => {
    try {
      console.log('🔄 CONVERSATION_SYNC: Checking for background conversations...');
      const backgroundConversations = await conversationSyncService.getBackgroundConversations();
      
      if (backgroundConversations.length > 0) {
        console.log(`📱 CONVERSATION_SYNC: Found ${backgroundConversations.length} background conversations, merging...`);
        
        setChatHistory(currentHistory => {
          const mergedHistory = conversationSyncService.mergeBackgroundHistory(currentHistory, backgroundConversations);
          
          // Mark conversations as synced
          const conversationIds = backgroundConversations.map(conv => conv.id);
          conversationSyncService.markConversationsAsSynced(conversationIds);
          
          return mergedHistory;
        });
        
        console.log('✅ CONVERSATION_SYNC: Background conversations merged successfully');
      } else {
        console.log('📱 CONVERSATION_SYNC: No background conversations found');
      }
    } catch (error) {
      console.error('❌ CONVERSATION_SYNC: Error checking background conversations:', error);
    }
  }, []);

  // Sync current history to native
  const syncCurrentHistoryToNative = useCallback(async () => {
    try {
      await conversationSyncService.syncHistoryToNative(chatHistory);
    } catch (error) {
      console.error('❌ CONVERSATION_SYNC: Error syncing history to native:', error);
    }
  }, [chatHistory]);

  // Check for background conversations on app load
  useEffect(() => {
    if (user?.id) {
      console.log('🔄 CONVERSATION_SYNC: User loaded, checking for background conversations...');
      checkAndMergeBackgroundConversations();
    }
  }, [user?.id, checkAndMergeBackgroundConversations]);

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
        // Check for duplicate message to prevent race conditions
        if (isDuplicateMessage(event.response.trim(), 'assistant')) {
          console.log('🔄 VOICE_RESPONSE: Duplicate message detected, skipping:', event.response.substring(0, 50) + '...');
          return;
        }

        setChatHistory(prev => [...prev, {
          role: 'assistant',
          content: event.response,
          timestamp: Date.now()
        }]);

        // Mark response as fetched since it's now displayed in UI
        if (currentRequestId) {
          DatabaseService.markResponseAsFetched(currentRequestId)
            .then(() => {
              console.log('✅ VOICE_RESPONSE: Response marked as fetched for requestId:', currentRequestId);
            })
            .catch((error) => {
              console.error('❌ VOICE_RESPONSE: Error marking response as fetched:', error);
            });
        }

        // Clear current request ID to stop polling (backend handles status updates)
        console.log('✅ VOICE_RESPONSE: Clearing request ID after voice response');
        setCurrentRequestId(null);
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
      
      console.log('🔍 RN_BRIDGE_DEBUG: ========== PROCESS TEXT FROM NATIVE ==========');
      console.log('🔍 RN_BRIDGE_DEBUG: Event received at:', new Date().toISOString());
      console.log('🔍 RN_BRIDGE_DEBUG: Event data:', JSON.stringify(event, null, 2));
      console.log('🔍 RN_BRIDGE_DEBUG: Text to process:', text);
      console.log('🔍 RN_BRIDGE_DEBUG: Request ID:', requestId);
      console.log('🔍 RN_BRIDGE_DEBUG: Current voice state:', voiceState);
      console.log('🔍 RN_BRIDGE_DEBUG: Chat history length:', chatHistory.length);
      console.log('🔍 RN_BRIDGE_DEBUG: API loading state:', isRequestInProgress);
      console.log('🔍 RN_BRIDGE_DEBUG: Thread info:', {
        performanceNow: performance.now(),
        timestamp: Date.now()
      });

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
            let localRequestId: string | null = null; // Local variable accessible in catch block

            try {
              console.log('🔄 VOICE_CONTEXT: Sending message with current settings');

              // Start polling immediately when request begins
              setRequestStatus('pending');

              console.log('🔍 RN_BRIDGE_DEBUG: ========== STARTING API CALL ==========');
              console.log('🔍 RN_BRIDGE_DEBUG: API call start time:', Date.now());
              console.log('🔍 RN_BRIDGE_DEBUG: Text being sent to API:', text);
              console.log('🔍 RN_BRIDGE_DEBUG: History entries count:', updatedHistory.length);

              const apiStartTime = performance.now();
              const response = await sendMessage(text, updatedHistory, async (reactNativeRequestId) => {
                localRequestId = reactNativeRequestId; // Store in local variable for catch block
                console.log('📊 REQUEST_STATUS: Setting request ID for polling:', reactNativeRequestId);
                console.log('🔍 RN_BRIDGE_DEBUG: Request ID assigned:', reactNativeRequestId);

                // Create database request record for voice messages too
                if (user?.id) {
                  try {
                    console.log('🔄 VOICE_DB_CREATE_START: Starting database record creation for voice message');

                    // Create conversation if this is the first message (no active conversation)
                    let conversationId = activeConversationId;
                    if (!conversationId) {
                      console.log('💬 VOICE_FIRST_MESSAGE: Creating new conversation for first voice message');
                      conversationId = await createConversation(text);
                      if (conversationId) {
                        setActiveConversationId(conversationId);
                        console.log('💬 VOICE_FIRST_MESSAGE: ✅ New conversation created and set:', conversationId);
                      } else {
                        console.error('💬 VOICE_FIRST_MESSAGE: ❌ Failed to create conversation');
                      }
                    } else {
                      console.log('💬 VOICE_CONTINUING: Using existing conversation:', conversationId);
                    }

                    const dbRecord = await DatabaseService.createRequest(user.id, {
                      request_id: reactNativeRequestId,
                      request_type: 'voice_message',
                      status: 'pending',
                      metadata: {
                        message: text,
                        nativeRequestId: requestId
                      },
                      conversation_id: conversationId // Include conversation_id in request record
                    });
                    console.log('🔄 VOICE_DB_CREATE_SUCCESS: Database request record created:', dbRecord.id, 'with conversation_id:', conversationId);
                  } catch (error) {
                    console.error('🔄 VOICE_DB_CREATE_ERROR: Failed to create database request record:', error);
                  }
                }

                setCurrentRequestId(reactNativeRequestId);

                // Store mapping between React Native request ID and native request ID
                requestMapping.mapRequestIds(reactNativeRequestId, requestId);
              });
              const apiEndTime = performance.now();
              
              console.log('🔍 RN_BRIDGE_DEBUG: ========== API CALL COMPLETED ==========');
              console.log('🔍 RN_BRIDGE_DEBUG: API call duration:', (apiEndTime - apiStartTime), 'ms');
              console.log('🔍 RN_BRIDGE_DEBUG: Response received at:', Date.now());
              console.log('🔍 RN_BRIDGE_DEBUG: Response data:', JSON.stringify(response, null, 2));
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
              
              // Sync updated history to native after API response
              // Note: Don't add assistant message here since it's already added via VoiceResponseUpdate event
              try {
                await conversationSyncService.syncHistoryToNative(updatedHistory);
                console.log('✅ VOICE_BRIDGE: History synced to native after API response');
              } catch (syncError) {
                console.warn('⚠️ VOICE_BRIDGE: Failed to sync history to native:', syncError);
              }

              // Mark response as fetched since it's now displayed in UI
              if (currentRequestId) {
                DatabaseService.markResponseAsFetched(currentRequestId)
                  .then(() => {
                    console.log('✅ VOICE_BRIDGE: Response marked as fetched for requestId:', currentRequestId);
                  })
                  .catch((error) => {
                    console.error('❌ VOICE_BRIDGE: Error marking response as fetched:', error);
                  });
              }

              // Clean up request mapping since request completed successfully
              if (currentRequestId) {
                requestMapping.removeMapping(currentRequestId);
              }

              // Clear request ID after successful API response (backend handles status updates)
              console.log('✅ VOICE_BRIDGE: Clearing request ID after successful API response');
              setCurrentRequestId(null);
              
            } catch (error) {
              console.error('🟠 VOICE_CONTEXT: ❌ Error processing text request:', error);

              // Handle network errors gracefully - don't mark request as failed
              if (error instanceof Error && error.message === 'Network Error' && localRequestId) {
                try {
                  // Only update network_success, keep status unchanged so polling can continue
                  await DatabaseService.updateRequestNetworkSuccess(localRequestId, false);
                  console.log('🌐 VOICE_CONTEXT: Network error - updated network_success to false, keeping status unchanged for requestId:', localRequestId);
                  console.log('🔄 VOICE_CONTEXT: Request polling will continue - backend may still complete successfully');
                } catch (updateError) {
                  console.error('🌐 VOICE_CONTEXT: Failed to update network_success:', updateError);
                }
              }

              // Clean up request mapping on error
              if (currentRequestId) {
                requestMapping.removeMapping(currentRequestId);
              }

              if (!isCancellationError(error)) {
                // For network errors, don't send error response to native - let polling continue
                if (error instanceof Error && error.message === 'Network Error') {
                  console.log('🟠 VOICE_CONTEXT: Network error - not sending error to native, polling will continue');
                } else {
                  const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
                  // Send error response back to native
                  try {
                    await voiceService.handleApiResponse(requestId, `Error: ${errorMessage}`);
                  } catch (responseError) {
                    console.error('🟠 VOICE_CONTEXT: ❌ Error sending error response to native:', responseError);
                  }
                }
              } else {
                console.log('🟠 VOICE_CONTEXT: Request was cancelled - not sending error to native');
              }
              
              // Only clear request ID for non-network errors (let polling continue for network errors)
              if (!(error instanceof Error && error.message === 'Network Error')) {
                console.log('🟠 VOICE_CONTEXT: Clearing request ID after non-network error');
                setCurrentRequestId(null);
                setRequestStatus(null);
              } else {
                console.log('🟠 VOICE_CONTEXT: Network error - keeping request ID for continued polling');
              }
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
    
    // Setup AppState monitoring for background wake word handling
    console.log('📱 Setting up AppState monitoring for background wake word handling');
    
    // Initialize AppStateService
    const appStateService = AppStateService.getInstance();
    
    // Listen for app state changes from native layer
    const appStateListener = appStateService.addListener(async (state: string) => {
      console.log('📱 VOICE_CONTEXT: App state changed to:', state);
      
      // Log synchronization status
      const rnState = AppState.currentState;
      if (rnState !== state) {
        console.log(`📱 VOICE_CONTEXT: State sync - Native: ${state}, RN: ${rnState}`);
      }
      
      // Handle conversation sync on state transitions
      try {
        if (state === 'active') {
          console.log('📱 CONVERSATION_SYNC: App became active - checking background conversations and syncing current history');
          await checkAndMergeBackgroundConversations();
          await syncCurrentHistoryToNative();
        } else if (state === 'background') {
          console.log('📱 CONVERSATION_SYNC: App going to background - syncing current history to native');
          await syncCurrentHistoryToNative();
        }
      } catch (error) {
        console.error('❌ CONVERSATION_SYNC: Error handling app state transition:', error);
      }
    });
    
    // Monitor React Native AppState changes
    const handleAppStateChange = (nextAppState: string) => {
      console.log('📱 VOICE_CONTEXT: React Native AppState changed to:', nextAppState);
      
      // Get debug info when state changes
      appStateService.getDebugInfo().then(debugInfo => {
        console.log('📱 VOICE_CONTEXT: AppState debug info:', debugInfo);
      }).catch(error => {
        console.error('📱 VOICE_CONTEXT: Error getting app state debug info:', error);
      });

      // Sync health data when app comes to foreground
      if (nextAppState === 'active' && user?.id) {
        console.log('🏥 VOICE_CONTEXT: App became active - syncing health data');
        const healthSync = HealthSyncService.getInstance();
        healthSync.syncHealthData(user.id)
          .then(result => {
            console.log('🏥 VOICE_CONTEXT: Health sync result:', result.success ? 'success' : 'failed');
            if (result.synced) {
              console.log('🏥 VOICE_CONTEXT: Health data successfully synced to database');
            }
          })
          .catch(error => {
            console.warn('🏥 VOICE_CONTEXT: Health sync error:', error);
          });
      }
    };
    
    const appStateSubscription = AppState.addEventListener('change', handleAppStateChange);
    
    // Cleanup function for AppState listeners
    const appStateCleanup = () => {
      console.log('🧹 Cleaning up AppState listeners');
      appStateListener();
      appStateSubscription?.remove();
      appStateService.cleanup();
    };
    
    listenersSetupRef.current = true;
    
    return () => {
      console.log('🧹 Cleaning up voice event listeners');
      subscriptions.forEach(sub => sub.remove());
      appStateCleanup();
      listenersSetupRef.current = false;
    };
  }, [sendMessage, voiceSettings, voiceService, activeConversationId, user?.id]);

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
    
    // Mark conversation as completed if there's an active conversation
    if (activeConversationId && chatHistory.length > 0) {
      try {
        console.log('💬 COMPLETING: Marking conversation as completed:', activeConversationId);
        await supabase
          .from('conversations')
          .update({
            status: 'completed',
            metadata: {
              messageCount: chatHistory.length,
              endTime: Date.now()
            },
            updated_at: new Date()
          })
          .eq('id', activeConversationId);
        console.log('✅ Conversation marked as completed:', activeConversationId);
      } catch (error) {
        console.error('❌ Error updating conversation status:', error);
        // Continue with clearing even if update fails
      }
    }
    
    // Clear native conversation history
    try {
      console.log('🧹 CLEAR_CHAT: Clearing native conversation history...');
      await conversationSyncService.clearNativeHistory();
      console.log('🧹 CLEAR_CHAT: ✅ Native conversation history cleared');
    } catch (error) {
      console.warn('🧹 CLEAR_CHAT: ⚠️ Failed to clear native conversation history:', error);
    }
    
    // Clear native voice state to ensure clean slate
    if (Platform.OS === 'android' && SafeVoiceModule?.clearNativeState) {
      try {
        console.log('🧹 CLEAR_CHAT: Clearing native voice state...');
        await SafeVoiceModule.clearNativeState(null);
        console.log('🧹 CLEAR_CHAT: ✅ Native voice state cleared');
      } catch (nativeError) {
        console.warn('🧹 CLEAR_CHAT: ⚠️ Failed to clear native voice state:', nativeError);
      }
    }
    
    setChatHistory([]);
    setActiveConversationId(null); // Clear the active conversation ID
    console.log('✅ Chat history cleared and conversation completed');
  }, [chatHistory, activeConversationId]);

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

  // Create a new conversation and return its ID
  const createConversation = useCallback(async (firstMessage: string): Promise<string | null> => {
    if (!user?.id) {
      console.error('❌ Cannot create conversation: No user ID');
      return null;
    }

    try {
      console.log('💬 Creating new conversation for first message:', firstMessage.substring(0, 50) + '...');

      // Generate conversation title from first message
      const title = firstMessage.length > 50 ?
        firstMessage.substring(0, 50) + '...' :
        firstMessage;

      // Create conversation record with 'active' status
      const conversationData = {
        user_id: user.id,
        title,
        conversation_type: 'voice_chat',
        status: 'active', // Changed from 'completed' to 'active'
        metadata: {
          messageCount: 1,
          startTime: Date.now()
        },
        created_at: new Date(),
        updated_at: new Date()
      };

      const { data: conversation, error } = await supabase
        .from('conversations')
        .insert(conversationData)
        .select()
        .single();

      if (error) throw error;

      console.log('✅ Conversation created successfully:', conversation.id);
      return conversation.id;
    } catch (error) {
      console.error('❌ Error creating conversation:', error);
      return null;
    }
  }, [user?.id]);

  // Send text message using existing API infrastructure
  const sendTextMessage = useCallback(async (text: string, integrationInProgress?: boolean, imageUrl?: string) => {
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
          let localRequestId: string | null = null; // Local variable accessible in catch block

          try {
            console.log('📝 TEXT_INPUT: ========== SENDING TO API ==========');
            console.log('📝 TEXT_INPUT: Sending message to API');

            // Start polling immediately when request begins
            setRequestStatus('pending');

            const apiStartTime = Date.now();
            const response = await sendMessage(text.trim(), updatedHistory, async (requestId) => {
              localRequestId = requestId; // Store in local variable for catch block
              console.log('🔄 CALLBACK_START: onRequestStart callback called with requestId:', requestId);

              // Create database request record BEFORE setting request ID to ensure it exists when polling starts
              if (user?.id) {
                try {
                  console.log('🔄 DB_CREATE_START: Starting database record creation for user:', user.id);

                  // Create conversation if this is the first message (no active conversation)
                  let conversationId = activeConversationId;
                  if (!conversationId) {
                    console.log('💬 FIRST_MESSAGE: Creating new conversation for first message');
                    conversationId = await createConversation(text.trim());
                    if (conversationId) {
                      setActiveConversationId(conversationId);
                      console.log('💬 FIRST_MESSAGE: ✅ New conversation created and set:', conversationId);
                    } else {
                      console.error('💬 FIRST_MESSAGE: ❌ Failed to create conversation');
                    }
                  } else {
                    console.log('💬 CONTINUING: Using existing conversation:', conversationId);
                  }

                  const dbRecord = await DatabaseService.createRequest(user.id, {
                    request_id: requestId,
                    request_type: 'chat_message',
                    status: 'pending',
                    metadata: {
                      message: text.trim(),
                      hasImage: !!imageUrl
                    },
                    conversation_id: conversationId, // Include conversation_id in request record
                    ...(imageUrl && { image_url: imageUrl })
                  });
                  console.log('🔄 DB_CREATE_SUCCESS: Database request record created:', dbRecord.id, 'with conversation_id:', conversationId, 'and image URL:', !!imageUrl);

                  // Set request ID AFTER database record is successfully created
                  console.log('🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling:', requestId);
                  setCurrentRequestId(requestId);
                  console.log('🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now');
                } catch (error) {
                  console.error('🔄 DB_CREATE_ERROR: Failed to create database request record:', error);
                  // Don't set request ID if database record creation fails
                }
              } else {
                console.log('🔄 NO_USER: No user ID, setting request ID for local tracking only');
                setCurrentRequestId(requestId);
              }
              console.log('🔄 CALLBACK_END: onRequestStart callback completed');
            }, integrationInProgress, imageUrl);
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
            
            // Check if response has already been fetched (e.g., by unfetched check)
            if (localRequestId) {
              const alreadyFetched = await DatabaseService.isResponseAlreadyFetched(localRequestId);
              if (alreadyFetched) {
                console.log('📝 TEXT_INPUT: Response already fetched by unfetched check, skipping duplicate processing');
                console.log('🔄 COMPLETION: Clearing request ID to stop polling');
                setCurrentRequestId(null);
                return;
              }
            }
            
            // Add assistant response to chat history
            // Check for duplicate message to prevent race conditions
            if (isDuplicateMessage(response.response, 'assistant')) {
              console.log('🔄 TEXT_INPUT: Duplicate message detected, skipping:', response.response.substring(0, 50) + '...');
              return;
            }

            const assistantMessage: ChatMessage = {
              role: 'assistant',
              content: response.response,
              timestamp: Date.now()
            };

            setChatHistory(prevHistory => {
              const updatedHistoryWithResponse = [...prevHistory, assistantMessage];

              // Sync updated history to native after API response
              setTimeout(async () => {
                try {
                  await conversationSyncService.syncHistoryToNative(updatedHistoryWithResponse);
                  console.log('✅ TEXT_INPUT: History synced to native after API response');
                } catch (syncError) {
                  console.warn('⚠️ TEXT_INPUT: Failed to sync history to native:', syncError);
                }
              }, 0);

              return updatedHistoryWithResponse;
            });

            // Mark response as fetched since it's now displayed in UI
            if (localRequestId) {
              DatabaseService.markResponseAsFetched(localRequestId)
                .then(() => {
                  console.log('✅ TEXT_INPUT: Response marked as fetched for requestId:', localRequestId);
                })
                .catch((error) => {
                  console.error('❌ TEXT_INPUT: Error marking response as fetched:', error);
                });
            }

            // Note: No TTS playback because we're in text mode
            console.log('📝 TEXT_INPUT: Response added to chat (no TTS in text mode)');

            // Clear request ID after successful completion to stop polling (backend handles status updates)
            console.log('🔄 COMPLETION: Clearing request ID to stop polling');
            setCurrentRequestId(null);
            
          } catch (error) {
            console.error('📝 TEXT_INPUT: ❌ Error processing text message:', error);

            // Handle network errors gracefully - don't mark request as failed
            if (error instanceof Error && error.message === 'Network Error' && localRequestId) {
              try {
                // Only update network_success, keep status unchanged so polling can continue
                await DatabaseService.updateRequestNetworkSuccess(localRequestId, false);
                console.log('🌐 TEXT_INPUT: Network error - updated network_success to false, keeping status unchanged for requestId:', localRequestId);
                console.log('🔄 TEXT_INPUT: Request polling will continue - backend may still complete successfully');
              } catch (updateError) {
                console.error('🌐 TEXT_INPUT: Failed to update network_success:', updateError);
              }
            }

            // Don't show cancellation errors to user in chat
            if (!isCancellationError(error)) {
              // For network errors, don't show error message - let polling continue
              if (error instanceof Error && error.message === 'Network Error') {
                console.log('📝 TEXT_INPUT: Network error - not showing error message, polling will continue');
              } else {
                // Add error message to chat history only for non-cancellation, non-network errors
                const errorMessage: ChatMessage = {
                  role: 'assistant',
                  content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}`,
                  timestamp: Date.now()
                };

                setChatHistory(prevHistory => [...prevHistory, errorMessage]);
              }
            } else {
              console.log('📝 TEXT_INPUT: Request was cancelled - not showing error to user');
            }

            // Only clear request ID for non-network errors (let polling continue for network errors)
            if (!(error instanceof Error && error.message === 'Network Error')) {
              console.log('📝 TEXT_INPUT: Clearing request ID after non-network error');
              setCurrentRequestId(null);
              setRequestStatus(null);
            } else {
              console.log('📝 TEXT_INPUT: Network error - keeping request ID for continued polling');
            }
          }
        }, 0);
        
        return updatedHistory;
      });
      
    } catch (error) {
      console.error('📝 TEXT_INPUT: ❌ Error in sendTextMessage:', error);
      console.error('📝 TEXT_INPUT: Error stack:', error instanceof Error ? error.stack : 'No stack available');
      throw error;
    }
  }, [sendMessage, voiceSettings, activeConversationId, createConversation]);

  // Continue previous chat by setting the chat history
  const continuePreviousChat = useCallback((messages: ChatMessage[]) => {
    console.log('📚 Continuing previous chat with', messages.length, 'messages');

    // Deduplicate messages within the incoming array itself (in case unfetched check brings duplicates)
    const deduplicatedMessages = messages.filter((message, index) => {
      // Keep first occurrence of each unique combination of content + timestamp
      const firstIndex = messages.findIndex(m =>
        m.content === message.content &&
        m.role === message.role &&
        Math.abs(m.timestamp - message.timestamp) < 1000 // Within 1 second
      );
      return firstIndex === index;
    });

    if (deduplicatedMessages.length < messages.length) {
      console.log('📚 Removed', messages.length - deduplicatedMessages.length, 'duplicate messages from unfetched data');
    }

    setChatHistory(deduplicatedMessages);
  }, []);

  // Wrap cancelRequest to immediately update UI status
  const wrappedCancelRequest = useCallback(async (): Promise<boolean> => {
    try {
      console.log('🚫 CANCEL_WRAPPER: Cancelling request and updating UI status...');
      
      // Immediately update UI to show "cancelled" status
      setRequestStatus('cancelled');
      
      // Call the original cancelRequest
      const result = await cancelRequest();
      
      if (result) {
        console.log('🚫 CANCEL_WRAPPER: Request cancelled successfully, clearing status in 2 seconds');
        // Clear the status after 2 seconds (matching the existing pattern)
        setTimeout(() => {
          setCurrentRequestId(null);
          setRequestStatus(null);
        }, 2000);
      } else {
        // If cancellation failed, revert the status
        console.log('🚫 CANCEL_WRAPPER: Request cancellation failed, reverting status');
        setRequestStatus(null);
      }
      
      return result;
    } catch (error) {
      console.error('🚫 CANCEL_WRAPPER: Error in cancel wrapper:', error);
      setRequestStatus(null);
      return false;
    }
  }, [cancelRequest]);

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
    activeConversationId,
    setCurrentRequestId,
    setRequestStatus,

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
    cancelRequest: wrappedCancelRequest,
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