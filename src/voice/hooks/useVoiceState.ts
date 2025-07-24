import { useState, useEffect, useRef } from 'react';
import VoiceService, { VoiceState, VoiceStateChangeEvent } from '../VoiceService';

// Helper function to extract state from Java object string or direct value
const extractStateValue = (state: any): string => {
    if (typeof state === 'string') {
        // Handle Java object string format: "com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@xxxxx"
        if (state.includes('$')) {
            const parts = state.split('$');
            if (parts.length >= 3) {
                // Extract the actual state name (3rd part after splitting on $)
                const statePart = parts[2];
                // Extract state name before the @ symbol
                const stateValue = statePart.split('@')[0];
                return stateValue;
            }
        }
        
        // Handle RESPONDING(message=...) format
        if (state.startsWith('RESPONDING(')) {
            return 'RESPONDING';
        }
        
        // Handle other state formats with parentheses (extract base state name)
        const parenMatch = state.match(/^([A-Z_]+)\(/);
        if (parenMatch) {
            return parenMatch[1];
        }
        
        // Direct string state value
        return state;
    }
    return String(state);
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
  const isListening = normalizedState === VoiceState.LISTENING || normalizedState === VoiceState.WAKE_WORD_DETECTED;
  const isSpeaking = normalizedState === VoiceState.SPEAKING || normalizedState.includes('RESPONDING');
  const isError = normalizedState === VoiceState.ERROR;

  // Log whenever the hook's voiceState actually changes
  useEffect(() => {
    console.log('🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========');
    console.log('🔄 VOICE_STATE_HOOK: Raw voiceState from native:', voiceState);
    console.log('🔄 VOICE_STATE_HOOK: Normalized state value:', normalizedState);
    console.log('🔄 VOICE_STATE_HOOK: State normalization needed:', voiceState !== normalizedState);
    console.log('🔄 VOICE_STATE_HOOK: Derived states - isListening:', isListening, 'isSpeaking:', isSpeaking, 'isError:', isError);
    console.log('🔄 VOICE_STATE_HOOK: ========================================================');
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
      
      console.log('🔄 VOICE_STATE_HOOK: ========== RN STATE UPDATE RECEIVED ==========');
      console.log('🔄 VOICE_STATE_HOOK: Raw state from native:', event.state);
      console.log('🔄 VOICE_STATE_HOOK: Normalized new state:', newNormalizedState);
      console.log('🔄 VOICE_STATE_HOOK: Event receive time (performance.now):', eventReceiveTime);
      console.log('🔄 VOICE_STATE_HOOK: Event receive timestamp:', eventReceiveTimestamp);
      console.log('🔄 VOICE_STATE_HOOK: Current hook state from ref:', currentState);
      console.log('🔄 VOICE_STATE_HOOK: Current normalized state:', currentNormalizedState);
      console.log('🔄 VOICE_STATE_HOOK: Normalized state change needed:', newNormalizedState !== currentNormalizedState);
      console.log('🔄 VOICE_STATE_HOOK: Raw state change needed:', event.state !== currentState);
      
      // Add native timing info if available
      if ((event as any).timestamp) {
        const nativeToRnLatency = eventReceiveTimestamp - (event as any).timestamp;
        console.log('🔄 VOICE_STATE_HOOK: Native to RN latency:', nativeToRnLatency, 'ms');
      }
      
      if ((event as any).nativeUpdateTime) {
        const nativeProcessingTime = (performance.now() * 1_000_000) - (event as any).nativeUpdateTime;
        console.log('🔄 VOICE_STATE_HOOK: Native processing time:', nativeProcessingTime / 1_000_000, 'ms');
      }
      
      console.log('🔄 VOICE_STATE_HOOK: About to call setVoiceState with:', event.state);
      const stateUpdateStartTime = performance.now();
      
      // Use functional setState to ensure we get the latest state
      setVoiceState(prevState => {
        console.log('🔄 VOICE_STATE_HOOK: Functional setState - Previous state:', prevState);
        console.log('🔄 VOICE_STATE_HOOK: Functional setState - New state:', event.state);
        return event.state;
      });
      
      const stateUpdateEndTime = performance.now();
      console.log('🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now');
      
      console.log('🔄 VOICE_STATE_HOOK: ✅ RN state updated in:', stateUpdateEndTime - stateUpdateStartTime, 'ms');
      console.log('🔄 VOICE_STATE_HOOK: ✅ Total event processing time:', stateUpdateEndTime - eventReceiveTime, 'ms');
      console.log('🔄 VOICE_STATE_HOOK: ===================================================');
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
