import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text, TouchableOpacity, Alert, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { VoiceButton } from './VoiceButton';
import { VoiceResponseDisplay } from './VoiceResponseDisplay';
import { useVoice } from '../VoiceContext';
import { VoiceStatusIndicator } from './VoiceStatusIndicator';
import { VoiceState } from '../types/voice';
import { Ionicons } from '@expo/vector-icons';
import { NativeModules } from 'react-native';
import { ConversationHistory } from './ConversationHistory';
import { TextChatInput } from './TextChatInput';
import { MarkdownMessage } from './MarkdownMessage';
import Clipboard from '@react-native-clipboard/clipboard';
import { colors } from '../../shared/theme/colors';

const { VoiceModule } = NativeModules;

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
  const { 
    isListening,
    isSpeaking,
    transcript,
    voiceState,
    isError,
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
    requestStatus
  } = useVoice();

  // State for conversation history modal
  const [showConversationHistory, setShowConversationHistory] = React.useState(false);

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
      case 'integrating':
        return 'Integrating... This can take up to 2 minutes.';
      case 'pinging':
        return 'Pinging... This can take a few moments.';
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

  if (isError) {
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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
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
              <FlatList
                data={chatHistory}
                keyExtractor={(item, index) => `chat-${index}-${item.timestamp}`}
                style={styles.chatList}
                contentContainerStyle={styles.chatListContent}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="interactive"
                showsVerticalScrollIndicator={true}
                onScrollBeginDrag={Keyboard.dismiss}
                removeClippedSubviews={false}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                windowSize={10}
                getItemLayout={(data, index) => ({
                  length: 80, // Approximate height of each message
                  offset: 80 * index,
                  index,
                })}
                renderItem={({ item }) => {
                  return (
                    <View style={[
                      styles.chatBubble, 
                      item.role === 'user' ? styles.userBubble : styles.assistantBubble
                    ]}>
                      <MarkdownMessage content={item.content} role={item.role} />
                      <View style={styles.messageFooter}>
                        <Text style={styles.timeText}>{formatTime(item.timestamp)}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            ) : (
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.emptyChatContainer}>
                  <Text style={styles.emptyChatText}>
                    Start or continue a conversation by tapping the voice button or typing a message.
                    {Platform.OS === 'android' && ' Or, use the wake word.'}
                  </Text>
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

          {/* Request status indicator */}
          {requestStatus && requestStatus !== 'completed' && (
            <View style={styles.statusContainer}>
              <Text style={styles.statusIndicator}>
                {getRequestStatusText(requestStatus, 'indicator')}
              </Text>
            </View>
          )}

          <View style={styles.bottomSection}>
            {/* Voice button - positioned above text input */}
            <View style={styles.voiceButtonContainer}>
              <VoiceButton 
                size={60}
              />
            </View>

            {/* Text input at the bottom */}
            <TextChatInput 
              onSendMessage={sendTextMessage}
              disabled={isListening || isSpeaking}
              placeholder="Type a message..."
            />
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
  chatList: {
    flex: 1,
    paddingHorizontal: 16,
    minHeight: 0, // Important for FlatList scrolling
  },
  chatListContent: {
    paddingBottom: 16,
  },
  chatBubble: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 6,
    maxWidth: '80%',
    minWidth: 100,
  },
  userBubble: {
    backgroundColor: colors.background.userMessage,
    alignSelf: 'flex-end',
    marginLeft: 40,
    borderBottomRightRadius: 4,
  },
  assistantBubble: {
    backgroundColor: colors.background.assistantMessage,
    alignSelf: 'flex-start',
    marginRight: 40,
    borderBottomLeftRadius: 4,
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
    color: colors.text.primary,
    fontSize: 11,
    fontStyle: 'italic',
  },
  statusContainer: {
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
    zIndex: 1000,
    elevation: 1000,
    position: 'relative',
  },
  statusIndicator: {
    color: colors.text.secondary,
    fontSize: 14,
    fontWeight: '500',
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
    backgroundColor: '#e74c3c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
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
    backgroundColor: '#f39c12',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
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
    paddingBottom: 4,
  },
  voiceButtonContainer: {
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 4,
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
