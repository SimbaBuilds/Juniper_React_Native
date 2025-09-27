import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Animated, AppState } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { VoiceButton } from './VoiceButton';
import { VoiceResponseDisplay } from './VoiceResponseDisplay';
import { useVoice } from '../VoiceContext';
import { VoiceStatusIndicator } from './VoiceStatusIndicator';
import { VoiceState } from '../types/voice';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../auth/AuthContext';
import { NativeModules } from 'react-native';
import { ConversationHistory } from './ConversationHistory';
import { TextChatInput } from './TextChatInput';
import { MarkdownMessage } from './MarkdownMessage';
import { ChatMessageContent } from './ChatMessageContent';
import Clipboard from '@react-native-clipboard/clipboard';
import { colors } from '../../shared/theme/colors';
import { conversationService } from '../../services/conversationService';
import { DatabaseService } from '../../supabase/supabase';

const { VoiceModule } = NativeModules;

// Loading dot component with subtle pulsing animation
const LoadingDot: React.FC = () => {
  const pulseAnim = React.useRef(new Animated.Value(0.3)).current;

  React.useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.3,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulse.start();
    return () => pulse.stop();
  }, [pulseAnim]);

  return (
    <Animated.View
      style={[
        styles.loadingDot,
        {
          opacity: pulseAnim,
        },
      ]}
    />
  );
};

interface VoiceAssistantProps {
  onSpeechResult?: (text: string) => void;
}

/**
 * Main component for voice assistant functionality
 * Combines voice button, response display, and status indicator
 */
export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({
  onSpeechResult
}) => {
  const { user } = useAuth();
  const insets = useSafeAreaInsets();
  const {
    isListening,
    isSpeaking,
    transcript,
    voiceState,
    isError,
    error,
    chatHistory,
    inputMode,
    setTranscript,
    interruptSpeech,
    clearChatHistory,
    sendTextMessage,
    continuePreviousChat,
    cancelRequest,
    isRequestInProgress,
    startContinuousConversation,
    startListening,
    requestStatus,
    setRequestStatus,
    setCurrentRequestId,
    settingsLoading
  } = useVoice();

  // State for conversation history modal
  const [showConversationHistory, setShowConversationHistory] = React.useState(false);

  // State for onboarding - use ref to prevent re-evaluation on re-renders
  const hasEvaluatedOnboarding = React.useRef(false);

  // Android-specific keyboard height tracking
  const [androidKeyboardPadding, setAndroidKeyboardPadding] = React.useState(0);

  // State for delayed status indicator display
  const [shouldShowStatusIndicator, setShouldShowStatusIndicator] = React.useState(false);
  const statusIndicatorTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Effect to handle delayed status indicator display
  React.useEffect(() => {
    // Clear any existing timeout
    if (statusIndicatorTimeoutRef.current) {
      clearTimeout(statusIndicatorTimeoutRef.current);
      statusIndicatorTimeoutRef.current = null;
    }

    if (requestStatus && requestStatus !== 'completed') {
      // Show status indicator after 150ms delay
      statusIndicatorTimeoutRef.current = setTimeout(() => {
        setShouldShowStatusIndicator(true);
      }, 150);
    } else {
      // Hide status indicator immediately when status is completed or null
      setShouldShowStatusIndicator(false);
    }

    return () => {
      if (statusIndicatorTimeoutRef.current) {
        clearTimeout(statusIndicatorTimeoutRef.current);
        statusIndicatorTimeoutRef.current = null;
      }
    };
  }, [requestStatus]);

  // Handle opening conversation history and loading data
  const handleOpenConversationHistory = () => {
    console.log('📚 Opening conversation history...');
    setShowConversationHistory(true);
  };

  // Handle conversation history opened callback
  const handleConversationHistoryOpened = () => {
    console.log('📚 Conversation history opened and loading...');
  };

  // Handle copy chat
  const handleCopyChat = async () => {
    if (chatHistory.length === 0) {
      Alert.alert('No Chat', 'There are no messages to copy.');
      return;
    }

    try {
      const chatText = chatHistory.map(message => {
        const time = formatTime(message.timestamp);
        const role = message.role === 'user' ? 'You' : 'Assistant';
        return `[${time}] ${role}: ${message.content}`;
      }).join('\n\n');

      await Clipboard.setString(chatText);
      Alert.alert('Success', 'Chat conversation copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      Alert.alert('Error', 'Failed to copy chat to clipboard.');
    }
  };

  // Check for unfetched completed requests and display them in chat
  const checkUnfetchedRequests = async () => {
    console.log('🎯 SOURCE_3: checkUnfetchedRequests starting...');
    if (!user?.id) {
      console.log('🎯 SOURCE_3: No user ID, returning early');
      return;
    }

    try {
      console.log('🎯 SOURCE_3: UNFETCHED_CHECK: Checking for unfetched completed requests...');
      const unfetchedRequests = await DatabaseService.getUnfetchedCompletedRequests(user.id);

      if (unfetchedRequests.length > 0) {
        console.log('🎯 SOURCE_3: UNFETCHED_CHECK: Found', unfetchedRequests.length, 'unfetched completed requests');

        // Process each request and fetch full conversations
        const allConversationMessages: any[] = [];
        const processedConversationIds = new Set<string>();

        for (const request of unfetchedRequests) {
          if (request.conversation_id && !processedConversationIds.has(request.conversation_id)) {
            try {
              console.log('📬 UNFETCHED_CHECK: Fetching conversation for ID:', request.conversation_id);
              const conversationMessages = await DatabaseService.getConversationMessages(request.conversation_id);

              // Convert database messages to chat history format
              const formattedMessages = conversationMessages.map(message => ({
                role: message.role as 'user' | 'assistant',
                content: message.content,
                timestamp: new Date(message.created_at).getTime()
              }));

              allConversationMessages.push(...formattedMessages);
              processedConversationIds.add(request.conversation_id);
              console.log('📬 UNFETCHED_CHECK: Added', formattedMessages.length, 'messages from conversation:', request.conversation_id);

            } catch (error) {
              console.error('❌ UNFETCHED_CHECK: Error fetching conversation messages for ID:', request.conversation_id, error);

              // Fallback to old behavior if conversation fetch fails
              if (request.assistant_response && request.assistant_response.trim()) {
                allConversationMessages.push({
                  role: 'assistant' as const,
                  content: request.assistant_response,
                  timestamp: new Date(request.updated_at).getTime()
                });
                console.log('📬 UNFETCHED_CHECK: Used fallback assistant response for request:', request.request_id);
              }
            }
          } else if (!request.conversation_id) {
            // Handle requests without conversation_id (fallback to old behavior)
            console.log('📬 UNFETCHED_CHECK: No conversation_id for request:', request.request_id, 'using fallback');
            if (request.assistant_response && request.assistant_response.trim()) {
              allConversationMessages.push({
                role: 'assistant' as const,
                content: request.assistant_response,
                timestamp: new Date(request.updated_at).getTime()
              });
            }
          }
        }

        // Sort messages by timestamp and add to chat history
        if (allConversationMessages.length > 0) {
          allConversationMessages.sort((a, b) => a.timestamp - b.timestamp);
          console.log('🎯 SOURCE_3: UNFETCHED_CHECK: Displaying', allConversationMessages.length, 'total messages from', processedConversationIds.size, 'conversations');
          console.log('🎯 SOURCE_3: About to call continuePreviousChat with messages:', allConversationMessages.map(msg => ({
            role: msg.role,
            content: msg.content.substring(0, 50) + '...',
            timestamp: msg.timestamp
          })));
          continuePreviousChat(allConversationMessages);
          console.log('🎯 SOURCE_3: continuePreviousChat call completed');
        }

        // Mark all these requests as fetched (even ones without responses to prevent re-checking)
        for (const request of unfetchedRequests) {
          try {
            await DatabaseService.markResponseAsFetched(request.request_id);
            console.log('✅ UNFETCHED_CHECK: Marked response as fetched for:', request.request_id);
          } catch (error) {
            console.error('❌ UNFETCHED_CHECK: Error marking response as fetched:', error);
          }
        }

      } else {
        console.log('📬 UNFETCHED_CHECK: No unfetched completed requests found');
      }
    } catch (error) {
      console.error('❌ UNFETCHED_CHECK: Error checking unfetched requests:', error);
    }
  };

  // Check for onboarding when user is available and we haven't evaluated yet
  React.useEffect(() => {
    const checkForOnboarding = async () => {
      // Skip if no user or already evaluated
      if (!user?.id || hasEvaluatedOnboarding.current) {
        return;
      }

      // Wait for settings to finish loading to ensure component is fully initialized
      if (settingsLoading) {
        console.log('🔍 ONBOARDING: Settings still loading, waiting...');
        return;
      }

      // Skip if there are real user messages (not onboarding)
      const hasUserMessages = chatHistory.some(msg => msg.role === 'user');
      if (hasUserMessages) {
        hasEvaluatedOnboarding.current = true;
        return;
      }

      // Skip if onboarding message is already in chat
      const hasOnboardingMessage = chatHistory.some(msg => 
        msg.role === 'assistant' && msg.content.includes('Welcome to Juniper!')
      );
      if (hasOnboardingMessage) {
        hasEvaluatedOnboarding.current = true;
        return;
      }

      try {
        console.log('🔍 ONBOARDING: Checking if user needs onboarding message');
        
        // Add a small delay to ensure any existing conversation history has loaded
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Check database for existing conversations
        const hasConversations = await conversationService.hasUserConversations();

        if (hasConversations) {
          console.log('📝 ONBOARDING: User has conversations in database, skipping onboarding');
          hasEvaluatedOnboarding.current = true;

          // Check for unfetched completed requests
          await checkUnfetchedRequests();
          return;
        }

        // User is new - show onboarding message
        console.log('👋 ONBOARDING: New user detected (no conversations in database), showing onboarding message');
        const onboardingMessage = {
          role: 'assistant' as const,
          content: `Welcome to Juniper! 🎉

Hi there! I'm Juniper. We're honored to be part of your journey toward greater wellbeing and productivity. Together with my specialized agent team, we can help optimize your daily life - from tracking your health metrics to drafting and sending emails in your unique voice.

What would you like to get started with today? If you aren't sure, starting with an integration is a great way to learn about what we can accomplish together.`,
          timestamp: Date.now()
        };
        
        continuePreviousChat([onboardingMessage]);
        hasEvaluatedOnboarding.current = true;
        
      } catch (error) {
        console.error('❌ ONBOARDING: Error checking for onboarding:', error);
        // On error, just mark as evaluated to avoid infinite loops
        hasEvaluatedOnboarding.current = true;
      }
    };

    checkForOnboarding();
  }, [user?.id, continuePreviousChat, settingsLoading]);

  // Check for uncompleted requests on app launch/resume
  React.useEffect(() => {
    const checkUncompletedRequests = async () => {
      if (!user?.id || settingsLoading) {
        return;
      }

      try {
        console.log('🔍 REQUEST_CHECK: Checking for uncompleted requests...');
        const uncompletedRequests = await DatabaseService.getUncompletedRequests(user.id);

        if (uncompletedRequests.length > 0) {
          console.log('📊 REQUEST_CHECK: Found', uncompletedRequests.length, 'uncompleted requests');
          // Set the request status to show status indicator for the most recent request
          const mostRecentRequest = uncompletedRequests[0];
          console.log('📊 REQUEST_CHECK: Most recent uncompleted request:', mostRecentRequest.request_id, 'status:', mostRecentRequest.status);

          // Set the current request status and ID to show the status indicator
          setCurrentRequestId(mostRecentRequest.request_id);
          setRequestStatus(mostRecentRequest.status);
        } else {
          console.log('📊 REQUEST_CHECK: No uncompleted requests found');
        }
      } catch (error) {
        console.error('❌ REQUEST_CHECK: Error checking uncompleted requests:', error);
      }
    };

    checkUncompletedRequests();
  }, [user?.id, settingsLoading]);

  // Check for unfetched requests when app returns to foreground
  React.useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active' && user?.id) {
        console.log('📬 VOICE_ASSISTANT: App became active - checking unfetched requests');
        checkUnfetchedRequests();
      }
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    
    return () => {
      subscription?.remove();
    };
  }, [user?.id, checkUnfetchedRequests]);

  // Android-specific keyboard height tracking
  React.useEffect(() => {
    if (Platform.OS === 'android') {
      const showListener = Keyboard.addListener('keyboardDidShow', (e) => {
        console.log('🔄 Keyboard shown, height:', e.endCoordinates.height, '(using adjustResize, not adding to bottomSection)');
        setAndroidKeyboardPadding(e.endCoordinates.height);
      });
      const hideListener = Keyboard.addListener('keyboardDidHide', () => {
        console.log('🔄 Keyboard hidden');
        setAndroidKeyboardPadding(0);
      });

      return () => {
        showListener.remove();
        hideListener.remove();
      };
    }
  }, []);

  // Calculate dynamic padding for chat list (Android only)
  const chatListBottomPadding = React.useMemo(() => {
    if (Platform.OS === 'ios') {
      return 80; // Keep iOS unchanged
    }
    // Android: reduce padding when keyboard is shown
    const padding = androidKeyboardPadding > 0 ? 16 : 80;
    console.log('🔄 Chat list padding changed:', padding, 'keyboard height:', androidKeyboardPadding);
    return padding;
  }, [androidKeyboardPadding]);

  // When a speech result is received, call the callback
  React.useEffect(() => {
    if (transcript && onSpeechResult) {
      onSpeechResult(transcript);
    }
  }, [transcript, onSpeechResult]);
  
  // Format timestamp to readable time
  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getRequestStatusText = (status: string, context: 'inline' | 'indicator' = 'inline'): string => {
    switch (status) {
      case 'pending':
        return 'Processing...';
      case 'thinking':
        return 'Thinking...';
      case 'searching':
        return 'Searching...';
      case 'processing':
        return 'Processing...';
      case 'configuring':
        return 'Configuring...';
      case 'retrieving':
        return 'Retrieving...';
      case 'storing':
        return 'Storing...';
      case 'caring':
        return 'Caring...';
      case 'integrating':
        return 'Integrating... This can take up to 2 minutes.';
      case 'pinging':
        return 'Pinging... This can take a few moments.';
      case 'automating':
        return 'Automating... This can take a few moments.';
      case 'failed':
        return 'Request failed';
      case 'cancelled':
        return 'Request cancelled';
      default:
        return '';
    }
  };

  /**
   * Handle interrupt button press
   * This stops the current TTS playback and changes the state from SPEAKING/RESPONDING to LISTENING
   * allowing the user to speak again without waiting for the current response to finish
   */
  const handleInterrupt = async () => {
    console.log('Interrupting speech...');
    const result = await interruptSpeech();
    console.log('Interrupt result:', result);
  };

  // Debug logging for interrupt button visibility
  React.useEffect(() => {
    console.log('🔴 VoiceAssistant: isSpeaking changed:', isSpeaking);
    console.log('🔴 VoiceAssistant: voiceState:', voiceState);
    console.log('🔴 VoiceAssistant: typeof voiceState:', typeof voiceState);
  }, [isSpeaking, voiceState]);

  /**
   * Handle sending text messages with optional image
   * This is a wrapper around sendTextMessage to support image uploads
   */
  const handleSendMessage = async (text: string, imageUrl?: string) => {
    if (!user?.id) {
      Alert.alert('Error', 'User not authenticated');
      return;
    }

    try {
      console.log('📷 Sending message:', { text, imageUrl });
      
      
      // Send the text message with image URL
      await sendTextMessage(text || (imageUrl ? 'Image attached' : ''), false, imageUrl);
      
      if (imageUrl) {
        console.log('📷 Image URL sent to backend for processing:', imageUrl);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      throw error; // Re-throw to let TextChatInput handle the error display
    }
  };

  /**
   * Handle cancel button press
   * This cancels the current API request and notifies the backend via database
   */
  const handleCancel = async () => {
    console.log('Cancelling current request...');
    try {
      const cancelled = await cancelRequest();
      console.log('Cancel result:', cancelled);
      if (cancelled) {
        console.log('✅ Request cancelled successfully');
      } else {
        console.log('❌ No active request to cancel');
      }
    } catch (error) {
      console.error('❌ Error cancelling request:', error);
    }
  };

  // Only show error UI for persistent errors or critical failures
  // Skip showing errors during normal voice operations or successful API calls
  const shouldShowError = isError && 
    error && 
    !error.includes('Audio focus lost') && 
    !error.includes('successful') && 
    !error.includes('completed') &&
    voiceState !== VoiceState.LISTENING &&
    voiceState !== VoiceState.IDLE &&
    voiceState !== VoiceState.SPEAKING;

  if (shouldShowError) {
    let errorMessage = 'Voice service error occurred';
    
    // Extract error message from voice state
    if (typeof voiceState === 'object' && voiceState && 'message' in voiceState) {
      errorMessage = (voiceState as any).message;
    } else if (typeof voiceState === 'string' && voiceState.includes('message=')) {
      // Parse ERROR(message=...) format
      const match = voiceState.match(/message=([^)]+)/);
      if (match && match[1]) {
        errorMessage = match[1];
      }
    }
    
    // Make error messages more user-friendly
    if (errorMessage.includes('Failed to acquire audio focus')) {
      errorMessage = 'Audio system is busy. Please try again in a moment.';
    } else if (errorMessage.includes('Audio focus lost')) {
      errorMessage = 'Audio interrupted. Please try speaking again.';
    }
    
    // Instead of throwing an error, show a user-friendly error message
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <VoiceStatusIndicator />
        </View>
        
        <View style={styles.errorContainer}>
          <View style={styles.errorContent}>
            <Ionicons name="warning-outline" size={48} color="#FF6B6B" />
            <Text style={styles.errorTitle}>Voice Assistant Error</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            
            <TouchableOpacity 
              style={styles.retryButton}
              onPress={async () => {
                try {
                  console.log('🔄 Retrying voice recognition after error...');
                  await startListening();
                } catch (retryError) {
                  console.error('❌ Error retrying voice recognition:', retryError);
                }
              }}
              activeOpacity={0.7}
            >
              <Text style={styles.retryButtonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  return (
    <KeyboardAvoidingView 
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.container}>
          <View style={styles.header}>
            <VoiceStatusIndicator />
            
            <View style={styles.headerActions}>
              {/* Input mode indicator */}
              <View style={styles.modeIndicator}>
                <Ionicons 
                  name={inputMode === 'voice' ? 'mic' : 'chatbubble'} 
                  size={16} 
                  color="#888888" 
                />
                <Text style={styles.modeText}>{inputMode === 'voice' ? 'Voice' : 'Text'}</Text>
              </View>

              {/* Conversation history button */}
              <TouchableOpacity 
                style={styles.historyButton}
                onPress={handleOpenConversationHistory}
                activeOpacity={0.7}
                accessibilityLabel="View conversation history"
                accessibilityHint="Opens a list of your recent conversations"
              >
                <Ionicons name="time-outline" size={20} color="#888888" />
              </TouchableOpacity>

              {/* Copy chat button - only shown when there are messages */}
              {chatHistory.length > 0 && (
                <TouchableOpacity 
                  style={styles.copyButton}
                  onPress={handleCopyChat}
                  activeOpacity={0.7}
                  accessibilityLabel="Copy chat"
                  accessibilityHint="Copy the current conversation"
                >
                  <Ionicons name="copy-outline" size={20} color="#888888" />
                </TouchableOpacity>
              )}

              {/* Clear chat button - only shown when there are messages */}
              {chatHistory.length > 0 && (
                <TouchableOpacity 
                  style={styles.clearButton}
                  onPress={clearChatHistory}
                  activeOpacity={0.7}
                  accessibilityLabel="New chat"
                  accessibilityHint="Start a new chat"
                >
                  <Text style={styles.clearButtonText}>New</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          
          <View style={styles.chatContainer}>
            {chatHistory.length > 0 ? (
                <View style={styles.chatListContainer}>
                  <FlatList
                    data={chatHistory}
                    keyExtractor={(item, index) => `chat-${index}-${item.timestamp}`}
                    style={styles.chatList}
                    contentContainerStyle={[
                      styles.chatListContent,
                      { paddingBottom: chatListBottomPadding }
                    ]}
                    keyboardShouldPersistTaps="always"
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={true}
                    removeClippedSubviews={false}
                    initialNumToRender={10}
                    maxToRenderPerBatch={10}
                    windowSize={10}
                    scrollEventThrottle={16}
                    decelerationRate="normal"
                    bounces={true}
                    renderItem={({ item }) => {
                      return (
                        <View style={[
                          styles.chatBubble, 
                          item.role === 'user' ? styles.userBubble : styles.assistantBubble
                        ]}>
                          <ChatMessageContent message={item} />
                          <View style={styles.messageFooter}>
                            <Text style={styles.timeText}>{formatTime(item.timestamp)}</Text>
                          </View>
                        </View>
                      );
                    }}
                  />
                  
                  {/* Status indicator overlay */}
                  {shouldShowStatusIndicator && (
                    <View style={styles.statusOverlay}>
                      <View style={styles.statusContent}>
                        <LoadingDot />
                        <Text style={styles.statusIndicator}>
                          {getRequestStatusText(requestStatus, 'indicator')}
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
            ) : (
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.emptyChatContainer}>
                  <Text style={styles.emptyChatText}>
                    Start or continue a conversation by tapping the voice button or typing a message.
                    {Platform.OS === 'android' && ' Or, use the wake word.'}
                  </Text>
                  
                  {/* Status indicator overlay for empty chat */}
                  {shouldShowStatusIndicator && (
                    <View style={styles.statusOverlay}>
                      <View style={styles.statusContent}>
                        <LoadingDot />
                        <Text style={styles.statusIndicator}>
                          {getRequestStatusText(requestStatus, 'indicator')}
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              </TouchableWithoutFeedback>
            )}
          </View>
          
          {/* Cancel button - only shown when a request is in progress */}
          {isRequestInProgress && (
            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={handleCancel}
              activeOpacity={0.7}
              accessibilityLabel="Cancel request"
              accessibilityHint="Cancels the current request to the server"
            >
              <Ionicons name="close-circle" size={24} color={colors.text.primary} />
              <Text style={styles.cancelButtonText}>Cancel Request</Text>
            </TouchableOpacity>
          )}

          {/* Interrupt button - only shown when the assistant is speaking */}
          {isSpeaking && (
            <TouchableOpacity 
              style={styles.interruptButton}
              onPress={handleInterrupt}
              activeOpacity={0.7}
              accessibilityLabel="Stop speaking"
              accessibilityHint="Stops the current speech and allows you to speak again"
            >
              <Ionicons name="stop-circle" size={24} color={colors.text.primary} />
              <Text style={styles.interruptButtonText}>Tap to Interrupt</Text>
            </TouchableOpacity>
          )}


          <View style={[
            styles.bottomSection,
            Platform.OS === 'ios' && {
              paddingBottom: Math.max(insets.bottom, 4), // Use safe area insets or minimum 4px
            },
            Platform.OS === 'android' && {
              paddingBottom: 4, // Minimal padding - adjustResize handles keyboard
            }
          ]}>
            {/* Voice button - positioned above text input */}
            <View style={styles.voiceButtonContainer}>
              <VoiceButton 
                size={60}
              />
            </View>

            {/* Text input at the bottom */}
            {user?.id && (
              <TextChatInput 
                onSendMessage={handleSendMessage}
                disabled={isListening || isSpeaking}
                placeholder="Type a message..."
                userId={user.id}
              />
            )}
          </View>

          {/* Conversation History Modal */}
          <ConversationHistory
            visible={showConversationHistory}
            onClose={() => setShowConversationHistory(false)}
            onOpen={handleConversationHistoryOpened}
            onContinueChat={(messages) => {
              continuePreviousChat(messages);
              setShowConversationHistory(false);
            }}
          />
        </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    minHeight: 0, // Important for FlatList scrolling
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 14,
    backgroundColor: 'rgba(136, 136, 136, 0.1)',
    marginRight: 8,
  },
  modeText: {
    color: colors.text.secondary,
    fontSize: 14,
    marginLeft: 4,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 18,
    backgroundColor: 'rgba(136, 136, 136, 0.1)',
  },
  historyButtonText: {
    display: 'none',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(136, 136, 136, 0.1)',
    marginLeft: 8,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(136, 136, 136, 0.1)',
    marginLeft: 8,
  },
  clearButtonText: {
    color: colors.text.secondary,
    fontSize: 12,
    marginLeft: 4,
  },
  chatListContainer: {
    flex: 1,
    minHeight: 0, // Important for FlatList scrolling
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 16,
    minHeight: 0, // Important for FlatList scrolling
  },
  chatListContent: {
    // paddingBottom is now applied dynamically
  },
  chatBubble: {
    padding: 8,
    borderRadius: 16,
    marginVertical: 3,
    maxWidth: '75%',
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: colors.background.userMessage,
    alignSelf: 'flex-end',
    marginLeft: 40,
    borderBottomRightRadius: 4,
    maxWidth: '75%',
  },
  assistantBubble: {
    backgroundColor: colors.background.assistantMessage,
    alignSelf: 'flex-start',
    marginRight: 40,
    borderBottomLeftRadius: 4,
    maxWidth: '75%',
  },
  chatText: {
    color: colors.text.primary,
    fontSize: 16,
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  timeText: {
    color: colors.text.primary,
    fontSize: 11,
  },
  statusText: {
    color: colors.text.white,
    fontSize: 11,
    fontStyle: 'italic',
  },
  statusOverlay: {
    position: 'absolute',
    bottom: 16,
    marginHorizontal: 16,
    left: 0,
    right: 0,
    backgroundColor: `${colors.status.mutedBlue}E6`, // Add opacity (90%)
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 1000,
    elevation: 1000,
  },
  statusContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIndicator: {
    color: colors.text.white, // Changed from colors.text.secondary for better contrast
    fontSize: 14,
    fontWeight: '500',
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.text.primary,
    marginRight: 8,
  },
  emptyChatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyChatText: {
    color: colors.text.secondary,
    fontSize: 16,
    textAlign: 'center',
  },
  interruptButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button.interrupt,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 8,
    marginHorizontal: 16,
    alignSelf: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  interruptButtonText: {
    color: colors.text.primary,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.button.cancel,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 8,
    marginHorizontal: 16,
    alignSelf: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cancelButtonText: {
    color: colors.text.primary,
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  bottomSection: {
    paddingBottom: 4, // Base padding, iOS uses safe area insets above
    paddingTop: 2,
  },
  voiceButtonContainer: {
    alignItems: 'center',
    marginBottom: 4,
    paddingVertical: 2,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorContent: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  errorTitle: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  errorMessage: {
    color: colors.text.primary,
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
