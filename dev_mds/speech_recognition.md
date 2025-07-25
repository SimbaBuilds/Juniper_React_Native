
---

### Root Cause Analysis
The primary issue is the immediate loss of audio focus (`AUDIOFOCUS_LOSS_TRANSIENT`) right after it’s granted, which stops the `SpeechRecognizer` before it can capture meaningful audio. This explains the `No recognition match` error, as the recognizer is interrupted almost instantly. Here are the likely causes:

1. **External Audio Focus Conflict**:
   - Another app or system process (e.g., media player, phone call, or notification sound) is requesting audio focus with higher priority, causing a transient loss.
   - The `AUDIOFOCUS_LOSS_TRANSIENT` (-2) indicates a temporary interruption, often due to short-lived audio events like notifications or system sounds.

2. **Internal Audio Focus Misconfiguration**:
   - The `AudioManager` in the app might be inadvertently requesting focus for another request type (e.g., `TTS` or `WAKE_WORD_RESPONSE`) immediately after `SPEECH_RECOGNITION`, causing a conflict.
   - The `AudioFocusRequest` configuration in `processAudioFocusRequest()` (e.g., `setAcceptsDelayedFocusGain(false)` or `setWillPauseWhenDucked(false)`) might be too strict, leading to immediate focus loss when another process requests focus.

3. **System or Device-Specific Behavior**:
   - Some Android devices or ROMs (e.g., custom OEM implementations) aggressively manage audio focus, especially for `AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE` used by `SPEECH_RECOGNITION` (see `getAudioFocusGain()` in `AudioManager.kt`).
   - Background services or accessibility features (e.g., Google Assistant, Voice Access) might be interfering.

4. **SpeechRecognizer Timing Issue**:
   - The delayed `Ready for speech` log after `stopListening()` suggests that the `SpeechRecognizer` might be sending callbacks out of order or continuing to process after being stopped, contributing to the `No recognition match` error.

5. **State Management Bug**:
   - The `isListening=false` during `RESPONDING` state during retries indicates a state synchronization issue, which might indirectly affect how the `SpeechRecognizer` is managed during retries.

---

### Troubleshooting Steps
To resolve the audio focus loss and speech recognition failure, follow these steps:

#### 1. Handle Transient Audio Focus Loss
- **Modify Focus Loss Handling**:
  - Instead of immediately stopping the `SpeechRecognizer` on `AUDIOFOCUS_LOSS_TRANSIENT`, queue a retry or wait for focus to be regained. Update `handleAudioFocusChange()` in `AudioManager.kt`:
    ```kotlin
    private fun handleAudioFocusChange(focusChange: Int, requestInfo: AudioFocusRequestInfo) {
        Log.d(TAG, "🎵 Audio focus change: $focusChange for ${requestInfo.requestType} (ID: ${requestInfo.requestId})")
        
        when (focusChange) {
            AndroidAudioManager.AUDIOFOCUS_GAIN -> {
                _audioFocusState.value = AudioFocusState.GAINED
                requestInfo.onFocusGained?.invoke()
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS -> {
                _audioFocusState.value = AudioFocusState.LOST
                requestInfo.onFocusLost?.invoke()
                processNextRequest()
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> {
                _audioFocusState.value = AudioFocusState.LOST_TRANSIENT
                Log.d(TAG, "Transient focus loss, waiting to regain focus")
                // Don't immediately stop, wait for potential regain
                Handler(Looper.getMainLooper()).postDelayed({
                    if (_audioFocusState.value == AudioFocusState.LOST_TRANSIENT) {
                        Log.d(TAG, "Retrying audio focus after transient loss")
                        processAudioFocusRequest(requestInfo)
                    }
                }, 1000)
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK -> {
                _audioFocusState.value = AudioFocusState.DUCKED
                requestInfo.onFocusDucked?.invoke()
            }
        }
    }
    ```
  - Update `startActualListening()` in `VoiceManager.kt` to avoid stopping on transient loss:
    ```kotlin
    private fun startActualListening() {
        try {
            Log.d(TAG, "Requesting audio focus for SPEECH_RECOGNITION")
            val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            val focusGranted = audioManager.requestAudioFocus(
                requestType = com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION,
                requestId = "speech_recognition_${System.currentTimeMillis()}",
                onFocusGained = { Log.d(TAG, "Audio focus gained for speech recognition") },
                onFocusLost = {
                    Log.w(TAG, "Audio focus lost for speech recognition")
                    // Only set error state for permanent loss
                    if (_voiceState.value != VoiceState.ERROR) {
                        _voiceState.value = VoiceState.ERROR("Audio focus lost permanently")
                    }
                },
                onFocusDucked = { Log.d(TAG, "Audio focus ducked for speech recognition") }
            )
            if (!focusGranted) {
                Log.e(TAG, "Failed to gain audio focus for speech recognition")
                _voiceState.value = VoiceState.ERROR("Failed to gain audio focus")
                return
            }

            Log.i(TAG, "Starting SpeechRecognizer on main thread")
            isListening = true
            updateState(VoiceState.LISTENING)
            speechRecognizer?.startListening(createRecognizerIntent())
            Log.i(TAG, "SpeechRecognizer started listening.")
            lastRecognitionStartTime = System.currentTimeMillis()
        } catch (e: Exception) {
            Log.e(TAG, "Error starting speech recognition: ${e.message}", e)
            isListening = false
            _voiceState.value = VoiceState.ERROR("Failed to start speech recognition: ${e.message}")
        }
    }
    ```

#### 2. Investigate External Focus Conflicts
- **Log All Audio Focus Events**:
  - Add a global audio focus listener in `AudioManager.initialize()` to monitor all focus changes:
    ```kotlin
    fun initialize(context: Context) {
        androidAudioManager = context.getSystemService(Context.AUDIO_SERVICE) as AndroidAudioManager
        androidAudioManager?.requestAudioFocusChangeListener { focusChange ->
            Log.d(TAG, "Global audio focus change: $focusChange")
        }
        Log.i(TAG, "AudioManager initialized")
    }
    ```
  - Check logs for unexpected focus requests from other apps or system services.
- **Test in Do Not Disturb Mode**:
  - Enable Do Not Disturb mode on the device to suppress notifications and system sounds.
  - Close all background apps to minimize interference.
- **Check for Internal Conflicts**:
  - Ensure no other components (e.g., `TextToSpeechManager` or `DeepgramClient`) are requesting audio focus during `SPEECH_RECOGNITION`. Add logging in `TextToSpeechManager` and `DeepgramClient` to confirm they aren’t requesting focus prematurely.

#### 3. Fix State Management for `isListening`
- **Set `isListening` Correctly**:
  - Update `handleNoSpeechDetected()` in `VoiceManager.kt` to set `isListening` before retrying, as previously suggested:
    ```kotlin
    fun handleNoSpeechDetected() {
        Log.d(TAG, "No speech detected")
        noSpeechRetryCount++
        
        if (noSpeechRetryCount < MAX_NO_SPEECH_RETRIES) {
            showMessage("I didn't hear anything. Listening again...")
            coroutineScope.launch {
                val retryDelayMs = configManager.getSpeechRetryDelayMs().toLong()
                Log.d(TAG, "Will retry speech recognition after $retryDelayMs ms")
                delay(retryDelayMs)
                
                try {
                    Log.d(TAG, "Retrying speech recognition (attempt $noSpeechRetryCount)")
                    Handler(Looper.getMainLooper()).post {
                        Log.d(TAG, "Starting speech recognition retry on main thread")
                        isListening = true
                        startListening()
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error retrying speech recognition: ${e.message}", e)
                    showError("Unable to restart voice recognition")
                    resetToIdle()
                }
            }
        } else {
            Log.d(TAG, "Maximum retry attempts reached ($MAX_NO_SPEECH_RETRIES), resetting to idle")
            showMessage("I didn't hear anything. Please try saying 'Jarvis' again when you're ready.")
            noSpeechRetryCount = 0
            coroutineScope.launch {
                delay(configManager.getSpeechFinalMessageDelayMs().toLong())
                resetToIdle()
            }
        }
    }
    ```

