import { useState, useEffect, useRef } from 'react';
import VoiceService, { VoiceState, VoiceStateChangeEvent } from '../VoiceService';

// Helper function to extract state from Java object string or direct value
const extractStateValue = (state: any): string => {
    console.log('🔍 EXTRACT_STATE: Input state:', state, 'Type:', typeof state);
    
    if (typeof state === 'string') {
        // Handle Java object string format: "com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@xxxxx"
        if (state.includes('$')) {
            const parts = state.split('$');
            if (parts.length >= 3) {
                // Extract the actual state name (3rd part after splitting on $)
                const statePart = parts[2];
                // Extract state name before the @ symbol
                const stateValue = statePart.split('@')[0];
                console.log('🔍 EXTRACT_STATE: Extracted from Java format:', stateValue);
                return stateValue;
            }
        }
        
        // Handle RESPONDING(message=...) format
        if (state.startsWith('RESPONDING(')) {
            console.log('🔍 EXTRACT_STATE: Extracted RESPONDING from parentheses format');
            return 'RESPONDING';
        }
        
        // Handle other state formats with parentheses (extract base state name)
        const parenMatch = state.match(/^([A-Z_]+)\(/);
        if (parenMatch) {
            console.log('🔍 EXTRACT_STATE: Extracted from parentheses:', parenMatch[1]);
            return parenMatch[1];
        }
        
        // Direct string state value
        console.log('🔍 EXTRACT_STATE: Using direct string value:', state);
        return state;
    }
    
    const stringState = String(state);
    console.log('🔍 EXTRACT_STATE: Converted to string:', stringState);
    return stringState;
};

/**
 * Hook for accessing and managing voice state
 * Now serves as a pure bridge to native state - no duplicate state management
 * 
 * @returns Object containing voice state and control functions
 */
export function useVoiceState() {
  // Single source of truth: native voice state
  const [voiceState, setVoiceState] = useState<VoiceState>(VoiceState.IDLE);
  
  // Ref to track current state for event handler closure
  const voiceStateRef = useRef<VoiceState>(VoiceState.IDLE);
  
  // Update ref whenever state changes
  voiceStateRef.current = voiceState;

  // Extract normalized state value for comparisons
  const normalizedState = extractStateValue(voiceState);

  // Derived states computed from normalized native state (no duplication)
  // Make comparison case-insensitive to handle iOS/Android differences
  const normalizedUpperState = normalizedState.toUpperCase();
  const isListening = normalizedUpperState === VoiceState.LISTENING.toUpperCase() || normalizedUpperState === VoiceState.WAKE_WORD_DETECTED.toUpperCase();
  
  // Debug the state derivation to identify the issue
  console.log('🔍 STATE_DERIVATION: voiceState raw:', voiceState);
  console.log('🔍 STATE_DERIVATION: normalizedState:', normalizedState);
  console.log('🔍 STATE_DERIVATION: normalizedUpperState:', normalizedUpperState);
  console.log('🔍 STATE_DERIVATION: VoiceState.LISTENING:', VoiceState.LISTENING);
  console.log('🔍 STATE_DERIVATION: isListening computed:', isListening);
  console.log('🔍 STATE_DERIVATION: comparison result:', normalizedUpperState === VoiceState.LISTENING.toUpperCase());
  const isSpeaking = normalizedUpperState === VoiceState.SPEAKING.toUpperCase() || normalizedState.toUpperCase().includes('RESPONDING');
  const isError = normalizedUpperState === VoiceState.ERROR.toUpperCase();

  // Debug logging for Speaking state detection
  if (normalizedState.toUpperCase() === VoiceState.SPEAKING || normalizedState === 'SPEAKING') {
    console.log('🔴 useVoiceState: SPEAKING state detected!');
    console.log('🔴 useVoiceState: normalizedState:', normalizedState);
    console.log('🔴 useVoiceState: VoiceState.SPEAKING:', VoiceState.SPEAKING);
    console.log('🔴 useVoiceState: isSpeaking:', isSpeaking);
  }

  // Log whenever the hook's voiceState actually changes
  useEffect(() => {
    console.log('🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========');
  }, [voiceState, normalizedState, isListening, isSpeaking, isError]);

  // Set up listener for voice state changes from native module
  useEffect(() => {
    // Get initial state from native
    VoiceService.getInstance().getVoiceState()
      .then((state) => {
        console.log('🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========');
        console.log('🔄 VOICE_STATE_HOOK: Initial state from native:', state);
        console.log('🔄 VOICE_STATE_HOOK: Current hook state from ref:', voiceStateRef.current);
        
        // Use functional setState for consistency
        setVoiceState(prevState => {
          console.log('🔄 VOICE_STATE_HOOK: Initial setState - Previous state:', prevState);
          console.log('🔄 VOICE_STATE_HOOK: Initial setState - New state:', state);
          return state as VoiceState;
        });
        
        console.log('🔄 VOICE_STATE_HOOK: Initial setVoiceState called with:', state);
      })
      .catch((err: Error) => {
        console.error('Error getting initial voice state:', err);
      });

    // Listen for state changes from native with enhanced timing logging
    const unsubscribe = VoiceService.getInstance().onVoiceStateChange((event: VoiceStateChangeEvent) => {
      const eventReceiveTime = performance.now();
      const eventReceiveTimestamp = Date.now();
      const currentState = voiceStateRef.current; // Use ref to get current state
      const currentNormalizedState = extractStateValue(currentState);
      const newNormalizedState = extractStateValue(event.state);
          
      // Add native timing info if available
      if ((event as any).timestamp) {
        const nativeToRnLatency = eventReceiveTimestamp - (event as any).timestamp;
        // console.log('🔄 VOICE_STATE_HOOK: Native to RN latency:', nativeToRnLatency, 'ms');
      }
      
      if ((event as any).nativeUpdateTime) {
        const nativeProcessingTime = (performance.now() * 1_000_000) - (event as any).nativeUpdateTime;
        // console.log('🔄 VOICE_STATE_HOOK: Native processing time:', nativeProcessingTime / 1_000_000, 'ms');
      }
      
      // console.log('🔄 VOICE_STATE_HOOK: About to call setVoiceState with:', event.state);
      const stateUpdateStartTime = performance.now();
      
      // Use functional setState to ensure we get the latest state
      setVoiceState(prevState => {
        console.log('🔄 VOICE_STATE_HOOK: Functional setState - Previous state:', prevState);
        console.log('🔄 VOICE_STATE_HOOK: Functional setState - New state:', event.state);
        return event.state;
      });
      
      const stateUpdateEndTime = performance.now();
      console.log('🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now');
    });

    // Clean up listener
    return () => {
      unsubscribe();
    };
  }, []);

  // Control functions - delegate directly to native
  const startListening = async () => {
    try {
      await VoiceService.getInstance().startListening();
      return true;
    } catch (error) {
      console.error('Error starting voice recognition:', error);
      return false;
    }
  };

  const stopListening = async () => {
    try {
      await VoiceService.getInstance().stopListening();
      return true;
    } catch (error) {
      console.error('Error stopping voice recognition:', error);
      return false;
    }
  };

  /**
   * Interrupts current speech and transitions to LISTENING state
   * Delegates to native interruptSpeech method that handles:
   * 1. Stopping TTS playback
   * 2. Changing state from RESPONDING/SPEAKING to LISTENING
   * 3. Restarting speech recognition
   */
  const interruptSpeech = async () => {
    try {
      return await VoiceService.getInstance().interruptSpeech();
    } catch (error) {
      console.error('Error interrupting speech:', error);
      return false;
    }
  };

  // Return state and control functions (pure bridge to native)
  return {
    voiceState,
    isListening,
    isSpeaking,
    isError,
    startListening,
    stopListening,
    interruptSpeech
  };
}
