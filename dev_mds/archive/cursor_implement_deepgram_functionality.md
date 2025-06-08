# Implement deepgram functionality in native code
_Exported on 6/6/2025 at 22:14:09 CDT from Cursor (1.0.0)_

---

**User**

@/voice @/voice @/wakeword @/wakeword @/settings Right now, when the user has deepgram enabled, the native code still uses local TTS, and that is because the deepgram implementation in the native code is incomplete.  Analyze the local TTS implementation thoroughly because it works perfectly, and create a plan to implement Deepgram fucntionality so that it will be used instead of local TTS when the use rhas it enabled in the UI.

---

**Cursor**

```plaintext
if (deepgramEnabled) {
    Log.i(TAG, "🎵 TTS_PRIORITY: 🚀 Starting Deepgram TTS attempt...")
    speechSuccessful = speakWithDeepgram(text)
    
    if (!speechSuccessful) {
        Log.w(TAG, "🎵 TTS_PRIORITY: ⚠️ Deepgram TTS failed, falling back to System TTS")


```

Looking at the code, I can see that the Deepgram implementation is actually quite comprehensive, but there are likely some integration issues preventing it from working properly. Let me analyze the current local TTS implementation and create a plan to fix the Deepgram functionality.

Now I have a comprehensive understanding of the current TTS implementation. Let me analyze the issue and create a plan.

## Analysis of Current TTS Implementation

### **Working Local TTS Implementation (TextToSpeechManager.kt)**
The local TTS works perfectly because it follows this pattern:
1. **Proper initialization** with callback-based setup
2. **Centralized audio focus management** through AudioManager
3. **Queue-based speech handling** to prevent overlapping
4. **Robust error handling** with proper cleanup
5. **Threading done correctly** - UI operations on main thread
6. **Proper lifecycle management** with clear start/stop/cleanup

### **Current Deepgram Implementation Issues**

After analyzing the code, I can see several potential issues preventing Deepgram from working properly:

1. [x]**API Key Configuration**: The `getDeepgramApiKey()` method depends on a `config.properties` file in assets, which might not be configured , NOTE: the config.properties file is indeed configured correctly.
2. **Error Handling**: Deepgram failures might be silently falling back to system TTS
3. **Threading Issues**: MediaPlayer operations need to be on main thread
4. **Audio Focus Management**: While implemented, might have conflicts
5. **Settings Synchronization**: The settings flow is complex and might have timing issues
6. **Imports**: Ensure proper imports 

## Comprehensive Plan to Fix Deepgram Implementation

### **Phase 1: Diagnostic and Debugging Enhancement**

1. [x]**Add comprehensive logging** to track the exact failure point
2. [x]**Add configuration validation** to check if Deepgram is properly configured
3. [x]**Add network connectivity checks** specific to Deepgram API
4. [x]**Add audio playback verification** to ensure MediaPlayer works correctly

### **Phase 2: Core Implementation Fixes**

1. [x]**Simplify the settings flow** to ensure Deepgram preferences are properly saved/read
2. [x]**Fix audio focus management** to prevent conflicts between Deepgram and system TTS
3. [x]**Improve error handling** to provide better feedback when Deepgram fails
4. [x]**Add proper fallback logic** that doesn't silently fail

### **Phase 3: Integration Improvements**

1. [x]**Create a unified TTS interface** similar to the VoiceProcessor pattern
2. [x]**Implement proper queuing** for Deepgram TTS similar to TextToSpeechManager
3. [x]**Add TTS preference testing** to validate configuration before use
4. [x]**Improve React Native integration** for better error reporting

Let me create the implementation plan:

## **Detailed Implementation Plan**

### **Phase 1: Enhanced Diagnostics & Validation**

#### 1.1 Add Deepgram Configuration Validation
```kotlin
// In DeepgramClient.kt
fun validateConfiguration(): DeepgramValidationResult {
    data class DeepgramValidationResult(
        val isValid: Boolean,
        val apiKeyPresent: Boolean,
        val networkAvailable: Boolean,
        val audioSystemReady: Boolean,
        val issues: List<String>
    )
    
    // Check API key, network, audio system
    // Return detailed validation result
}
```

#### 1.2 Add Comprehensive Deepgram Logging
```kotlin
// Enhanced logging with unique request IDs
// Track: API call → Audio received → Playback started → Playback completed
// Add timing information for performance analysis
```

#### 1.3 Add TTS Testing Interface
```kotlin
// Add method to test Deepgram TTS independently
@ReactMethod
fun testDeepgramTTS(text: String, promise: Promise)
```

### **Phase 2: Core Implementation Fixes**

#### 2.1 Create Unified TTS Manager
Following the successful pattern of `TextToSpeechManager`, create:

```kotlin
object DeepgramTTSManager {
    // Similar structure to TextToSpeechManager
    // Initialization with callback
    // Queue-based processing
    // Centralized audio focus management
    // Proper error handling and cleanup
}
```

#### 2.2 Fix Settings Synchronization
Simplify the settings flow to ensure reliability:
```kotlin
// Direct SharedPreferences access in native code
// Immediate validation when settings change
// Clear error reporting back to React Native
```

#### 2.3 Improve Audio Focus Management
```kotlin
// Use same AudioManager pattern as TextToSpeechManager
// Ensure proper cleanup and no conflicts
// Add debugging for audio focus issues
```

### **Phase 3: Integration & User Experience**

#### 3.1 Add TTS Preference Testing
```typescript
// In React Native settings
// Add "Test Voice" button for each Deepgram voice
// Show configuration status (API key, network, etc.)
// Clear error messages when Deepgram fails
```

#### 3.2 Improve Error Reporting
```kotlin
// Return specific error messages to React Native
// Show user-friendly notifications for configuration issues
// Add option to auto-fallback or show preference to user
```

#### 3.3 Add Configuration Helper
```typescript
// In React Native
// Add helper to validate Deepgram configuration
// Guide user through API key setup
// Test connectivity and voice selection
```

## **Implementation Priority**

1. **Start with Phase 1** - Add diagnostics to understand exactly why Deepgram is failing
2. **Implement comprehensive logging** to track the entire TTS flow
3. **Add configuration validation** to check API key and network connectivity
4. **Create the unified TTS manager** following TextToSpeechManager patterns
5. **Simplify settings synchronization** between React Native and native code
6. **Add user-facing error reporting** and testing capabilities

## **Key Success Factors**

Based on the analysis of the working `TextToSpeechManager`, the key patterns to follow are:

1. **Callback-based initialization** with proper error handling
2. **Queue-based processing** to prevent conflicts
3. **Centralized audio focus management** using the existing AudioManager
4. **Proper threading** - keep UI operations on main thread
5. **Comprehensive error handling** with cleanup
6. **Clear lifecycle management** with initialization, usage, and shutdown phases

## **Next Steps**

Would you like me to:
1. **Start with Phase 1** and implement the diagnostic enhancements?
2. **Create the unified DeepgramTTSManager** following the TextToSpeechManager pattern?
3. **Focus on a specific issue** first (like API key configuration or settings synchronization)?

The current implementation has most of the pieces in place, but needs better error handling, validation, and integration to work reliably in production.

```plaintext
// In DeepgramClient.kt
fun validateConfiguration(): DeepgramValidationResult {
    data class DeepgramValidationResult(
        val isValid: Boolean,
        val apiKeyPresent: Boolean,
        val networkAvailable: Boolean,
        val audioSystemReady: Boolean,
        val issues: List<String>
    )
    
    // Check API key, network, audio system
    // Return detailed validation result
}
```

```plaintext
// Enhanced logging with unique request IDs
// Track: API call → Audio received → Playback started → Playback completed
// Add timing information for performance analysis
```

```plaintext
// Add method to test Deepgram TTS independently
@ReactMethod
fun testDeepgramTTS(text: String, promise: Promise)
```

```plaintext
object DeepgramTTSManager {
    // Similar structure to TextToSpeechManager
    // Initialization with callback
    // Queue-based processing
    // Centralized audio focus management
    // Proper error handling and cleanup
}
```

```plaintext
// Direct SharedPreferences access in native code
// Immediate validation when settings change
// Clear error reporting back to React Native
```

```plaintext
// Use same AudioManager pattern as TextToSpeechManager
// Ensure proper cleanup and no conflicts
// Add debugging for audio focus issues
```

```typescript
// In React Native settings
// Add "Test Voice" button for each Deepgram voice
// Show configuration status (API key, network, etc.)
// Clear error messages when Deepgram fails
```

```plaintext
// Return specific error messages to React Native
// Show user-friendly notifications for configuration issues
// Add option to auto-fallback or show preference to user
```

```typescript
// In React Native
// Add helper to validate Deepgram configuration
// Guide user through API key setup
// Test connectivity and voice selection
```

