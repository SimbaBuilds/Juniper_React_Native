import React, { useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useVoice } from '../VoiceContext';
import { VoiceState } from '../types/voice';

export const StartChatButton: React.FC = () => {
  const { 
    voiceState, 
    chatHistory, 
    inputMode,
    startListening,
    isListening,
    isSpeaking,
    interruptSpeech 
  } = useVoice();

  const handlePress = useCallback(async () => {
    console.log('🍎 iOS Start Chat Button pressed');
    
    // If currently speaking, interrupt
    if (isSpeaking) {
      console.log('🍎 iOS: Interrupting current speech');
      await interruptSpeech();
      return;
    }
    
    // If already listening, this acts as a toggle to stop
    if (isListening) {
      console.log('🍎 iOS: Already listening, button acts as stop');
      // Note: The user can tap the mic button in VoiceAssistant to stop
      return;
    }
    
    // For continuing chat - if we're in text mode, switch to voice mode
    if (chatHistory.length > 0 && inputMode === 'text') {
      console.log('🍎 iOS: Continuing chat - switching from text to voice mode');
    }
    
    // Start listening (same as wake word detection)
    console.log('🍎 iOS: Starting voice recognition (equivalent to wake word detected)');
    await startListening();
  }, [chatHistory.length, inputMode, startListening, isListening, isSpeaking, interruptSpeech]);

  const getButtonText = () => {
    if (isSpeaking) return 'Tap to Interrupt';
    if (isListening) return 'Listening...';
    if (chatHistory.length > 0) return 'Continue Chat';
    return 'Start Chat';
  };

  const getButtonIcon = () => {
    if (isSpeaking) return 'stop-circle';
    if (isListening) return 'mic';
    if (chatHistory.length > 0) return 'chatbubble-ellipses';
    return 'mic-outline';
  };

  const getButtonColor = () => {
    if (isSpeaking) return '#e74c3c';
    if (isListening) return '#2ecc71';
    return '#3B82F6';
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: getButtonColor() }]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <View style={styles.buttonContent}>
        <Ionicons name={getButtonIcon()} size={24} color="white" />
        <Text style={styles.buttonText}>{getButtonText()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
}); 