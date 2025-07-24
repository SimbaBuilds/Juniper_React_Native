import { useState, useEffect } from 'react';
import VoiceService, { VoiceState, VoiceStateChangeEvent } from '../VoiceService';

/**
 * Hook for accessing and managing voice state
 * Now serves as a pure bridge to native state - no duplicate state management
 * 
 * @returns Object containing voice state and control functions
 */
export function useVoiceState() {
  // Single source of truth: native voice state
  const [voiceState, setVoiceState] = useState<VoiceState>(VoiceState.IDLE);

  // Derived states computed from native state (no duplication)
  const isListening = voiceState === VoiceState.LISTENING || voiceState === VoiceState.WAKE_WORD_DETECTED;
  const isSpeaking = voiceState === VoiceState.SPEAKING || String(voiceState).includes('RESPONDING');
  const isError = voiceState === VoiceState.ERROR;

  // Set up listener for voice state changes from native module
  useEffect(() => {
    // Get initial state from native
    VoiceService.getInstance().getVoiceState()
      .then((state) => {
        setVoiceState(state as VoiceState);
      })
      .catch((err: Error) => {
        console.error('Error getting initial voice state:', err);
      });

    // Listen for state changes from native with enhanced timing logging
    const unsubscribe = VoiceService.getInstance().onVoiceStateChange((event: VoiceStateChangeEvent) => {
      const eventReceiveTime = performance.now();
      const eventReceiveTimestamp = Date.now();
      
      console.log('🔄 VOICE_STATE_HOOK: ========== RN STATE UPDATE RECEIVED ==========');
      console.log('🔄 VOICE_STATE_HOOK: New state from native:', event.state);
      console.log('🔄 VOICE_STATE_HOOK: Event receive time (performance.now):', eventReceiveTime);
      console.log('🔄 VOICE_STATE_HOOK: Event receive timestamp:', eventReceiveTimestamp);
      console.log('🔄 VOICE_STATE_HOOK: Previous RN state:', voiceState);
      console.log('🔄 VOICE_STATE_HOOK: State change needed:', event.state !== voiceState);
      
      // Add native timing info if available
      if ((event as any).timestamp) {
        const nativeToRnLatency = eventReceiveTimestamp - (event as any).timestamp;
        console.log('🔄 VOICE_STATE_HOOK: Native to RN latency:', nativeToRnLatency, 'ms');
      }
      
      if ((event as any).nativeUpdateTime) {
        const nativeProcessingTime = (performance.now() * 1_000_000) - (event as any).nativeUpdateTime;
        console.log('🔄 VOICE_STATE_HOOK: Native processing time:', nativeProcessingTime / 1_000_000, 'ms');
      }
      
      const stateUpdateStartTime = performance.now();
      setVoiceState(event.state);
      const stateUpdateEndTime = performance.now();
      
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
