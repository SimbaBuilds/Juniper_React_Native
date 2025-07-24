# Audio Focus Loss During Recognition Fix Plan

## Current Status ✅

- Audio focus acquisition now works perfectly
- Clean handoff mechanism implemented
- User-friendly error messages working
- No more "Failed to acquire audio focus" errors

## New Issue Identified ❌

Audio focus is being stolen during recognition by another process ~90ms after starting.

### Root Cause

Something else in the system is requesting audio focus with higher priority and taking it away from speech recognition.

## Investigation & Solution Strategy

### 1. Identify Audio Focus Thief (High Priority)

- Add comprehensive logging to AudioManager to track what's stealing focus
- Log all incoming audio focus requests and their priorities
- Identify if it's the wake word service, system UI, or another app

### 2. Strengthen Audio Focus Defense (High Priority)

- Implement audio focus request monitoring in AudioManager
- Add focus change logging with detailed caller information
- Use highest priority audio focus type (AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE)

### 3. Wake Word Service Verification (Medium Priority)

- Ensure wake word service properly releases focus when paused
- Add verification that wake word service doesn't re-request focus during STT
- Implement complete audio focus shutdown during speech recognition

### 4. System Integration Improvements (Medium Priority)

- Research Android audio focus best practices for voice assistants
- Implement focus request queuing to handle conflicts gracefully
- Add retry mechanism when focus is stolen and quickly regained

## Files to Modify

- `android/app/src/main/java/com/anonymous/MobileJarvisNative/utils/AudioManager.kt` - Enhanced logging
- `android/app/src/main/java/com/anonymous/MobileJarvisNative/wakeword/WakeWordService.kt` - Verification
- `android/app/src/main/java/com/anonymous/MobileJarvisNative/voice/VoiceManager.kt` - Defense mechanisms

The audio focus acquisition problem is solved ✅. Now we need to prevent other processes from stealing focus during active speech recognition.

---

## Analysis: Potential Audio Focus Stealing Sources

Based on the search through the Kotlin implementation, several potential sources have been identified that could be stealing audio focus during speech recognition:

### 1. Wake Word Service Re-activation (Most Likely Culprit)

- **Location**: `WakeWordService.kt:739` - `pauseWakeWordButKeepMicActive()`
- **Issue**: The wake word service may be reactivating its own audio focus requests after initially releasing them
- **Evidence**: Found audio focus handoff mechanism in lines 750-754 of `WakeWordService.kt`, but there might be automatic re-acquisition logic

### 2. Deepgram TTS Force Audio Release

- **Location**: `DeepgramClient.kt:839` - `centralAudioManager?.clearAllRequests()`
- **Issue**: Deepgram TTS aggressively clears ALL audio focus requests, which could interrupt ongoing speech recognition
- **Timeline**: This happens during TTS preparation, which could coincide with speech recognition

### 3. Multiple Audio Focus Requests from TTS System

- **Location**: `TextToSpeechManager.kt:111-137` - Audio focus request mechanism
- **Issue**: TTS Manager requests audio focus that could conflict with speech recognition
- **Evidence**: Lines 115-129 show TTS requesting `AudioRequestType.TTS` focus

### 4. VoiceModule Audio Focus Clearing

- **Location**: `VoiceModule.kt:864` - `audioManager.clearAllRequests()`
- **Issue**: During native state cleanup, all audio requests are cleared which could interrupt active recognition

### 5. Wake Word Service Audio Recording Setup

- **Location**: `WakeWordService.kt:420` - `setupAudioRecording()`
- **Issue**: This method may be requesting audio focus after speech recognition has already started

## Root Cause Analysis

The logs show audio focus is lost approximately 90ms after being gained. This timing suggests:

1. **Wake Word Service Auto-Resume**: The wake word service might have an automatic resume mechanism that kicks in shortly after being paused
2. **Background Audio Monitoring**: The service might be attempting to regain microphone access for continuous monitoring
3. **Concurrent Audio Focus Requests**: Multiple services trying to acquire audio focus simultaneously

## Recommended Investigation Plan

1. **Check Wake Word Service Auto-Resume Logic**: Search for timers, handlers, or automatic restart mechanisms in WakeWordService
2. **Trace Audio Focus Lifecycle**: Add detailed logging to track all audio focus requests/releases during speech recognition
3. **Review Service State Management**: Examine how the wake word service manages its paused state
4. **Investigate Audio Recording State**: Check if multiple AudioRecord instances are being created
5. **Analyze Timing Dependencies**: Look for race conditions between service pause and speech recognition start

## Priority Fixes

1. **High**: Implement proper wake word service state management to prevent auto-reactivation during speech recognition
2. **Medium**: Add audio focus coordination between VoiceManager and WakeWordService
3. **Low**: Review TTS audio focus requests to ensure they don't conflict with recognition

This analysis provides a roadmap for identifying and fixing the audio focus stealing issue during speech recognition.