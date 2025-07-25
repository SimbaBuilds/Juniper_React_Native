    Based on log analysis, the current implementation still has critical flaws. Here's the plan to fix 
    them:

    Critical Fixes Required:

    1. Fix Duplicate Request Logic
      - Remove "duplicate request ignored" bypass for speech recognition
      - Ensure all speech recognition requests go through Google Assistant mitigation
      - Add proper request ID tracking to prevent false duplicates
    2. Fix Priority System
      - Prevent wake word detection from interrupting active speech recognition
      - Add proper priority enforcement for SPEECH_RECOGNITION vs BACKGROUND_AUDIO
      - Implement request queuing that respects priority during active sessions
    3. Enhanced Google Assistant Mitigation
      - Increase initial delay from 500ms to 800ms based on log timing
      - Add pre-emptive focus release before speech recognition starts
      - Implement progressive backoff that scales more aggressively
    4. State Management Improvements
      - Fix timing calculation bugs in focus change handlers
      - Prevent wake word from resuming until speech recognition fully completes
      - Add proper cleanup when speech recognition fails

    Implementation Steps:

    1. AudioManager.kt: Fix duplicate request detection and priority enforcement
    2. VoiceManager.kt: Add proper state coordination with wake word detection
    3. WakeWordService.kt: Prevent aggressive resume during speech recognition
    4. Test thoroughly with multiple wake word -> speech recognition cycles

    Expected Outcome:

    - Eliminate transient audio focus loss during speech recognition
    - Prevent priority inversion between speech recognition and wake word detection  
    - Achieve consistent speech recognition without system service conflicts