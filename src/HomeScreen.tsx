import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { WakeWordStatus } from './wakeword/components/WakeWordStatus';
import { WakeWordToggle } from './wakeword/components/WakeWordToggle';
import { VoiceAssistant } from './voice/components/VoiceAssistant';
import { VoiceErrorBoundary } from './voice/ErrorBoundary/VoiceErrorBoundary';
import { StartChatButton } from './voice/components/StartChatButton';
import { useVoice } from './voice/VoiceContext';

export const HomeScreen: React.FC = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
          </View>
        </View>
        
        {/* Wake word components - Android only */}
        {Platform.OS === 'android' && (
          <View style={styles.settingsSection}>
            <WakeWordToggle />
            <WakeWordStatus />
          </View>
        )}
        
        {/* Start Chat Button - iOS only */}
        {Platform.OS === 'ios' && (
          <View style={styles.settingsSection}>
            <StartChatButton />
          </View>
        )}
        
        <VoiceErrorBoundary>
          <View style={styles.voiceAssistantContainer}>
            <VoiceAssistant onSpeechResult={(text) => console.log('Speech recognized:', text)} />
          </View>
        </VoiceErrorBoundary>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 24,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  settingsSection: {
    marginBottom: 24,
  },
  voiceAssistantContainer: {
    flex: 1,
    marginBottom: 24,
  },
  infoSection: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
  },
  infoText: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  clearButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'rgba(176, 176, 176, 0.1)',
    borderRadius: 16,
  },
  clearButtonText: {
    color: '#B0B0B0',
    fontSize: 12,
    marginLeft: 4,
  },
}); 