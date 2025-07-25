# Enhanced Audio Focus Logging

## Overview
Added comprehensive logging to the AudioManager to help identify what's stealing audio focus and causing speech recognition failures.

## New Logging Features

### 1. Audio Focus Request Tracking
- **Tag**: `🎵 AUDIO_FOCUS_REQUEST`
- **Details**: Logs who is requesting audio focus with priority and stack trace
- **Example**: `🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_123) - Priority: 1`

### 2. Audio Focus Change Monitoring
- **Tag**: `🎵 AUDIO_FOCUS_CHANGE`
- **Details**: Enhanced logging with descriptive focus change types
- **Examples**:
  - `🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION`
  - `🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION`

### 3. Stack Trace Logging for Focus Losses
- **Tag**: `🎵 AUDIO_FOCUS_LOSS_DETECTED`
- **Details**: Logs stack trace when audio focus is lost to identify the source
- **Example**: 
  ```
  🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
  🎵 AUDIO_FOCUS_STACK: android.media.AudioManager.onAudioFocusChange:123
  🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:45
  ```

### 4. Audio State Monitoring
- **Tag**: `🎵 AUDIO_FOCUS_STATE`
- **Details**: Logs current volume levels when focus is lost
- **Example**: `🎵 AUDIO_FOCUS_STATE: Current volume: 5/15`

### 5. Audio Focus Grant/Denial Tracking
- **Tags**: `🎵 AUDIO_FOCUS_GRANTED`, `🎵 AUDIO_FOCUS_DENIED`
- **Details**: Logs when audio focus is granted or denied with reasons
- **Examples**:
  - `🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_123) - Priority: 1`
  - `🎵 AUDIO_FOCUS_DENIED: TTS (ID: tts_456) - Priority: 2`
  - `🎵 AUDIO_FOCUS_DENIAL_REASON: FAILED`

### 6. Audio Focus Release Tracking
- **Tags**: `🎵 AUDIO_FOCUS_RELEASE`, `🎵 AUDIO_FOCUS_RELEASER`
- **Details**: Logs who is releasing audio focus with stack trace
- **Example**: 
  ```
  🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_123
  🎵 AUDIO_FOCUS_RELEASER: Stack trace:
  🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.stopListening:45
  ```

### 7. Priority-Based Decision Logging
- **Tags**: `🎵 AUDIO_FOCUS_INTERRUPT`, `🎵 AUDIO_FOCUS_QUEUED`
- **Details**: Logs priority-based decisions and queue management
- **Examples**:
  - `🎵 AUDIO_FOCUS_INTERRUPT: Interrupting current request TTS (ID: tts_456) for higher priority`
  - `🎵 AUDIO_FOCUS_QUEUED: Lower priority request TTS (priority: 2) queued behind current SPEECH_RECOGNITION (priority: 1)`

### 8. Queue Management Logging
- **Tags**: `🎵 AUDIO_FOCUS_QUEUE_SIZE`, `🎵 AUDIO_FOCUS_NEXT_REQUEST`
- **Details**: Tracks request queue size and processing
- **Examples**:
  - `🎵 AUDIO_FOCUS_QUEUE_SIZE: Queue now contains 2 request(s)`
  - `🎵 AUDIO_FOCUS_NEXT_REQUEST: Processing queued request TTS (ID: tts_789) - Priority: 2`

## How to Use the Enhanced Logging

### 1. Monitor Audio Focus Requests
Look for `🎵 AUDIO_FOCUS_REQUEST` logs to see who is requesting audio focus and when.

### 2. Track Focus Losses
When you see `🎵 AUDIO_FOCUS_LOSS_DETECTED`, examine the stack trace to identify the source of the focus loss.

### 3. Monitor External Interference
Look for patterns in focus changes that don't originate from your app's stack traces.

### 4. Check Priority Decisions
Monitor `🎵 AUDIO_FOCUS_INTERRUPT` and `🎵 AUDIO_FOCUS_QUEUED` logs to ensure priority system is working correctly.

### 5. Verify Focus Recovery
Check `🎵 AUDIO_FOCUS_CHANGE` logs to see if focus is being regained properly after transient losses.

## Expected Benefits

1. **Identify External Sources**: Stack traces will show if focus loss comes from system apps, notifications, or other processes
2. **Debug Priority Issues**: Clear logging of priority-based decisions and queue management
3. **Track Focus Lifecycle**: Complete visibility into audio focus request, grant, loss, and release cycles
4. **Monitor Recovery**: Better tracking of transient loss recovery attempts
5. **Performance Insights**: Queue size monitoring to identify potential bottlenecks

## Testing Instructions

1. **Install the updated app** with enhanced logging
2. **Trigger speech recognition** after wake word detection
3. **Monitor logs** for the new `🎵` prefixed messages
4. **Look for patterns** in audio focus losses and their sources
5. **Check stack traces** when focus is lost to identify external interference

## Files Modified

- `android/app/src/main/java/com/anonymous/MobileJarvisNative/utils/AudioManager.kt`

The enhanced logging should provide much better visibility into what's causing the audio focus conflicts and help identify the root cause of speech recognition failures. 