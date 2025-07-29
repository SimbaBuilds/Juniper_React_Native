import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useVoiceState } from '../VoiceContext';
import { VoiceState } from '../types/voice';

/**
 * Component that displays the current voice assistant state
 */
export const VoiceStatusIndicator: React.FC = () => {
  const { voiceState } = useVoiceState();
  
  // Handle case-insensitive state mapping locally in the component
  const normalizedState = String(voiceState).toUpperCase();
  
  // Derive boolean flags locally with case-insensitive logic
  const isListening = normalizedState === VoiceState.LISTENING.toUpperCase() || 
                     normalizedState === VoiceState.WAKE_WORD_DETECTED.toUpperCase();
  const isSpeaking = normalizedState === VoiceState.SPEAKING.toUpperCase() || 
                    normalizedState.includes('RESPONDING');
  const isError = normalizedState === VoiceState.ERROR.toUpperCase();
  
  // Determine indicator color based on locally derived state
  const getStatusColor = () => {
    if (isError) return 'red';
    if (isSpeaking) return 'blue';
    if (isListening) return 'green';
    return 'gray';
  };
  
  // Get status text to display with case-insensitive matching
  const getStatusText = () => {
    switch (normalizedState) {
      case VoiceState.IDLE.toUpperCase():
        return 'Ready';
      case VoiceState.WAKE_WORD_DETECTED.toUpperCase():
        return 'Wake word detected';
      case VoiceState.LISTENING.toUpperCase():
        return 'Listening...';
      case VoiceState.PROCESSING.toUpperCase():
        return 'Processing...';
      case VoiceState.SPEAKING.toUpperCase():
        return 'Speaking...';
      case VoiceState.ERROR.toUpperCase():
        return 'Error';
      default:
        return 'Idle';
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={[styles.indicator, { backgroundColor: getStatusColor() }]}>
        {(isListening || voiceState === VoiceState.PROCESSING) && (
          <ActivityIndicator color="white" size="small" />
        )}
      </View>
      <Text style={styles.statusText}>{getStatusText()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  indicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
