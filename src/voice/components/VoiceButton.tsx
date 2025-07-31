import React, { useCallback, useRef } from 'react';
import { TouchableOpacity, StyleSheet, View, ActivityIndicator, Platform, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useVoiceState } from '../VoiceContext';
import { VoiceState } from '../VoiceService';
import { useWakeWord } from '../../wakeword/WakeWordContext';

interface VoiceButtonProps {
  size?: number;
  color?: string;
  activeColor?: string;
  errorColor?: string;
  onPress?: () => void;
}

/**
 * Button component for activating voice recognition
 */
export const VoiceButton: React.FC<VoiceButtonProps> = ({
  size = 60,
  color = '#F5F5DC', // Light beige color
  activeColor = '#2ecc71',
  errorColor = '#e74c3c',
  onPress,
}) => {
  const { voiceState, isListening, isSpeaking, isError, startListening, startContinuousConversation, stopListening, interruptSpeech } = useVoiceState();
  
  // Get wake word context to check and toggle wake word state
  const { isEnabled: isWakeWordEnabled, setEnabled: setWakeWordEnabled } = useWakeWord();
  
  // Animation value for pulse effect
  const pulseAnim = useRef(new Animated.Value(1)).current;
  
  // Handle button press based on current state
  const handlePress = useCallback(async () => {
    // Trigger pulse animation
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
    
    if (onPress) {
      onPress();
    }
    
    if (isListening) {
      // If currently listening, stop listening
      await stopListening();
    } else if (isSpeaking) {
      // If currently speaking, interrupt the speech
      await interruptSpeech();
    } else {
      // Otherwise, start listening - but first check if wake word is enabled
      if (Platform.OS === 'android' && isWakeWordEnabled) {
        console.log('🎤 VOICE_BUTTON: Wake word is enabled, auto-toggling off before starting chat');
        try {
          // Auto-toggle wake word off before starting chat
          await setWakeWordEnabled(false);
          console.log('✅ VOICE_BUTTON: Wake word toggled off successfully');
        } catch (error) {
          console.error('❌ VOICE_BUTTON: Error toggling wake word off:', error);
          // Continue with starting chat even if wake word toggle fails
        }
      }
      
      // Start listening - use platform-specific method
      if (Platform.OS === 'ios') {
        console.log('🎤 VOICE_BUTTON: iOS - Starting continuous conversation');
        await startContinuousConversation();
      } else {
        console.log('🎤 VOICE_BUTTON: Android - Starting listening');
        await startListening();
      }
    }
  }, [isListening, isSpeaking, startListening, startContinuousConversation, stopListening, interruptSpeech, onPress, isWakeWordEnabled, setWakeWordEnabled, pulseAnim]);
  
  // Determine the icon based on state
  const getIcon = () => {
    if (isListening) {
      return 'mic';
    } else if (isSpeaking) {
      return 'volume-high';
    } else if (isError) {
      return 'warning';
    }
    return 'mic-outline';
  };
  
  // Determine the color based on state
  const getColor = () => {
    if (isError) return errorColor;
    if (isListening || isSpeaking) return activeColor;
    return color;
  };

  // Determine icon color based on state
  const getIconColor = () => {
    if (isError) return 'white';
    if (isListening || isSpeaking) return 'white';
    return 'black'; // Black icon for white idle state
  };

  // Determine size based on state (enlarge during listening)
  const getButtonSize = () => {
    return isListening ? size * 1.2 : size;
  };
  
  const buttonSize = getButtonSize();
  
  return (
    <Animated.View
      style={{
        transform: [{ scale: pulseAnim }],
      }}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.button,
          {
            width: buttonSize,
            height: buttonSize,
            borderRadius: buttonSize / 2,
            backgroundColor: getColor(),
            // Add border for white idle state visibility
            borderWidth: color === 'white' && !isListening && !isSpeaking && !isError ? 1 : 0,
            borderColor: 'rgba(0, 0, 0, 0.1)',
          },
        ]}
        activeOpacity={0.8}
      >
        {(voiceState === VoiceState.PROCESSING) ? (
          <ActivityIndicator color={getIconColor()} size="small" />
        ) : (
          <Ionicons name={getIcon()} size={buttonSize / 2} color={getIconColor()} />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
