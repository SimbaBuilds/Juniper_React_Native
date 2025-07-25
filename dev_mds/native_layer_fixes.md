⏺ Native Layer Issues and Required Fixes


  Based on my analysis of the Android native code, here's a comprehensive list of
  issues that need to be fixed:

  1. State Format Inconsistency

  Location: VoiceManager.kt (lines 760-789)
  - Issue: State updates are sending Java object .toString() format instead of
  consistent state names
  - Fix: In updateState(), ensure only the state enum name is sent to RN:
  // Line 858-863 - modify the callback to send only state name
  callback(newState.javaClass.simpleName) // Instead of callback(newState)

  2. Duplicate State Events

  Location: VoiceManager.kt (lines 767-789)
  - Issue: The updateState() method has deduplication logic but it's not working
  properly for RESPONDING states
  - Fix: Improve the deduplication logic to check message content properly

  3. Automatic Speech Restart Loop

  Location: VoiceManager.kt (lines 924-964) - handleNoSpeechDetected()
  - Issue: When no speech is detected, it automatically restarts listening, causing
   beeping loops
  - Fix:
    - Remove automatic restart after MAX_NO_SPEECH_RETRIES
    - Only show message without auto-restarting
    - Let user explicitly trigger new listening session

  4. Audio Focus Conflicts

  Location: VoiceManager.kt (lines 351-402) - startActualListening()
  - Issue: Speech recognition requests audio focus but doesn't properly release it
  - Fix:
    - Ensure releaseSpeechRecognitionAudioFocus() is called in all error paths
    - Add proper cleanup in onError() callback

  5. Excessive Beeping

  Location: Not visible in provided code, but likely in WakeWordService or audio
  feedback
  - Issue: Each state transition triggers a beep sound
  - Fix:
    - Only beep on user-initiated actions (wake word detection, button press)
    - Remove beeps from automatic retries and state transitions

  6. State Event Throttling Missing

  Location: VoiceModule.kt (lines 183-189) - setupStateFlowListener()
  - Issue: Every state change is immediately sent to RN without throttling
  - Fix: Add debouncing/throttling to prevent flooding RN bridge:
  voiceManager.voiceState
      .distinctUntilChanged() // Add this
      .debounce(100) // Add this
      .onEach { state ->
          sendEvent(Constants.Actions.VOICE_STATE_CHANGE, mapOf("state" to
  state.javaClass.simpleName))
      }

  7. Speech Recognition Timeout Too Short

  Location: VoiceManager.kt (lines 438-439)
  - Issue: Default 5-second timeout is too short for users
  - Fix: Increase EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS to 8000-10000ms

  8. Missing Error Recovery

  Location: VoiceManager.kt (lines 495-542) - Recognition error handling
  - Issue: Some errors trigger automatic retries that create loops
  - Fix: Only retry on specific errors (permissions), not on NO_MATCH or
  SPEECH_TIMEOUT

  9. TTS and Speech Recognition Audio Focus Race

  Location: VoiceManager.kt (lines 609-625) and AudioManager.kt
  - Issue: TTS starts too quickly after speech recognition, causing audio focus
  conflicts
  - Fix: Already has 100ms delay but might need increase to 200-300ms

  10. Wake Word Detection Not Properly Paused

  Location: VoiceManager.kt (lines 832-854)
  - Issue: Wake word detection pause/resume logic conflicts with state management
  - Fix: Ensure wake word is only active in IDLE state

  Priority Fixes:

  1. Fix state format consistency (Critical)
  2. Remove automatic speech restart (Critical)
  3. Add state event throttling (High)
  4. Fix audio focus release (High)
  5. Reduce beeping frequency (Medium)