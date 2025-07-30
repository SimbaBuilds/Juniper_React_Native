import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { isCancellationError } from '../../utils/cancellationUtils';

interface TextChatInputProps {
  onSendMessage: (text: string) => Promise<void>;
  disabled?: boolean;
  placeholder?: string;
}

export const TextChatInput: React.FC<TextChatInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder = "Type a message..."
}) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSend = async () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isSending) {
      return;
    }

    setIsSending(true);
    try {
      await onSendMessage(trimmedMessage);
      setMessage(''); // Clear input after successful send
      Keyboard.dismiss(); // Dismiss keyboard after sending
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Don't show alert for cancellation errors
      if (!isCancellationError(error)) {
        Alert.alert('Error', 'Failed to send message. Please try again.');
      } else {
        console.log('Message was cancelled - not showing error alert');
      }
    } finally {
      setIsSending(false);
    }
  };

  const isDisabled = disabled || isSending || !message.trim();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={message}
        onChangeText={setMessage}
        placeholder={placeholder}
        placeholderTextColor="#888888"
        multiline
        maxLength={1000}
        editable={!disabled && !isSending}
        onSubmitEditing={handleSend}
        blurOnSubmit={false}
        returnKeyType="send"
        enablesReturnKeyAutomatically={true}
      />
      <TouchableOpacity
        style={[styles.sendButton, isDisabled && styles.sendButtonDisabled]}
        onPress={handleSend}
        disabled={isDisabled}
        activeOpacity={0.7}
      >
        <Ionicons 
          name="send" 
          size={20} 
          color={isDisabled ? "#666666" : "#FFFFFF"} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    padding: 16,
    backgroundColor: 'transparent',
  },
  textInput: {
    flex: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    color: '#FFFFFF',
    backgroundColor: '#404040',
    fontSize: 16,
    maxHeight: 100,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonDisabled: {
    backgroundColor: '#2a2a2a',
  },
}); 