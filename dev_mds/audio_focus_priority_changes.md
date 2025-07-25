# Audio Focus Priority Changes for Speech Recognition

## Overview
Increased audio focus request priority for speech recognition after wake word detection to improve reliability and reduce audio focus conflicts.

## Changes Made

### 1. Priority Reordering
**File**: `android/app/src/main/java/com/anonymous/MobileJarvisNative/utils/AudioManager.kt`

**Before**:
```kotlin
enum class AudioRequestType(val priority: Int) {
    TTS(1),              // Highest priority - Text-to-speech
    WAKE_WORD_RESPONSE(2), // Wake word acknowledgment
    SPEECH_RECOGNITION(3), // Speech recognition
    BACKGROUND_AUDIO(4)    // Lowest priority - Background audio
}
```

**After**:
```kotlin
enum class AudioRequestType(val priority: Int) {
    SPEECH_RECOGNITION(1), // Highest priority - Speech recognition (post wake word)
    TTS(2),              // High priority - Text-to-speech
    WAKE_WORD_RESPONSE(3), // Medium priority - Wake word acknowledgment
    BACKGROUND_AUDIO(4)    // Lowest priority - Background audio
}
```

### 2. Audio Focus Strategy Change
**File**: `android/app/src/main/java/com/anonymous/MobileJarvisNative/utils/AudioManager.kt`

**Before**:
```kotlin
AudioRequestType.SPEECH_RECOGNITION -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE
```

**After**:
```kotlin
AudioRequestType.SPEECH_RECOGNITION -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK
```

### 3. Faster Transient Loss Recovery
**File**: `android/app/src/main/java/com/anonymous/MobileJarvisNative/utils/AudioManager.kt`

**Before**: 2000ms recovery delay for speech recognition
**After**: 500ms recovery delay for speech recognition

### 4. Enhanced Logging
- Added priority-based decision logging
- Improved conflict detection messages
- Added HIGH PRIORITY indicators in VoiceManager logs

## Expected Benefits

1. **Reduced Audio Focus Conflicts**: Speech recognition now has highest priority and will interrupt TTS if needed
2. **Faster Recovery**: 500ms recovery time instead of 2000ms for transient losses
3. **Better Coexistence**: `AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK` allows other audio to continue at lower volume
4. **Clearer Logging**: Better visibility into priority-based decisions and conflicts

## Testing Recommendations

1. Test wake word detection → speech recognition flow
2. Verify TTS doesn't interfere with speech recognition
3. Check logs for proper priority-based interruptions
4. Monitor for reduced "No recognition match" errors

## Files Modified

1. `android/app/src/main/java/com/anonymous/MobileJarvisNative/utils/AudioManager.kt`
2. `android/app/src/main/java/com/anonymous/MobileJarvisNative/voice/VoiceManager.kt`
3. `android/app/src/main/java/com/anonymous/MobileJarvisNative/utils/TextToSpeechManager.kt`
4. `android/app/src/main/java/com/anonymous/MobileJarvisNative/voice/DeepgramClient.kt` 