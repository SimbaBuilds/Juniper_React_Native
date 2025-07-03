import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text, TouchableOpacity, Alert, Platform } from 'react-native';
import { VoiceButton } from './VoiceButton';
import { VoiceResponseDisplay } from './VoiceResponseDisplay';
import { useVoice } from '../VoiceContext';
import { VoiceStatusIndicator } from './VoiceStatusIndicator';
import { VoiceState } from '../types/voice';
import { Ionicons } from '@expo/vector-icons';
import { NativeModules } from 'react-native';
import { ConversationHistory } from './ConversationHistory';
import { TextChatInput } from './TextChatInput';
import Clipboard from '@react-native-clipboard/clipboard';

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
    startContinuousConversation
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
    throw isError; // This will be caught by the error boundary
  }
  
  return (
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
      
      {chatHistory.length > 0 ? (
        <FlatList
          data={chatHistory}
          keyExtractor={(item, index) => `chat-${index}-${item.timestamp}`}
          style={styles.chatList}
          renderItem={({ item }) => (
            <View style={[
              styles.chatBubble, 
              item.role === 'user' ? styles.userBubble : styles.assistantBubble
            ]}>
              <Text style={styles.chatText} selectable={true}>{item.content}</Text>
              <Text style={styles.timeText}>{formatTime(item.timestamp)}</Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.emptyChatContainer}>
          <Text style={styles.emptyChatText}>
            {Platform.OS === 'ios' 
              ? 'Tap the voice button or type a message to start a conversation.'
              : 'Say the wake word or type a message to start or continue a chat.'}
          </Text>
        </View>
      )}
      
      {/* Cancel button - only shown when a request is in progress */}
      {isRequestInProgress && (
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={handleCancel}
          activeOpacity={0.7}
          accessibilityLabel="Cancel request"
          accessibilityHint="Cancels the current request to the server"
        >
          <Ionicons name="close-circle" size={24} color="white" />
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
          <Ionicons name="stop-circle" size={24} color="white" />
          <Text style={styles.interruptButtonText}>Tap to Interrupt</Text>
        </TouchableOpacity>
      )}

      {/* Voice button for iOS - positioned above text input */}
      {Platform.OS === 'ios' && (
        <View style={styles.voiceButtonContainer}>
          <VoiceButton 
            size={60}
            onPress={async () => {
              console.log('iOS Voice button pressed - starting continuous conversation');
              await startContinuousConversation();
            }}
          />
        </View>
      )}

      {/* Text input at the bottom */}
      <TextChatInput 
        onSendMessage={sendTextMessage}
        disabled={isListening || isSpeaking}
        placeholder="Type a message..."
      />

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(136, 136, 136, 0.1)',
    marginRight: 8,
  },
  modeText: {
    color: '#888888',
    fontSize: 12,
    marginLeft: 4,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 16,
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
    color: '#888888',
    fontSize: 12,
    marginLeft: 4,
  },
  chatList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  chatBubble: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 6,
    maxWidth: '80%',
    minWidth: 100,
  },
  userBubble: {
    backgroundColor: '#3B82F6',
    alignSelf: 'flex-end',
    marginLeft: 40,
    borderBottomRightRadius: 4,
  },
  assistantBubble: {
    backgroundColor: '#262626',
    alignSelf: 'flex-start',
    marginRight: 40,
    borderBottomLeftRadius: 4,
  },
  chatText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  timeText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 11,
    marginTop: 4,
    textAlign: 'right',
  },
  emptyChatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyChatText: {
    color: '#888888',
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
    color: 'white',
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
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  voiceButtonContainer: {
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 8,
  },
});
