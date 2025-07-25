package com.anonymous.MobileJarvisNative.utils

import android.content.Context
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager as AndroidAudioManager
import android.os.Build
import android.util.Log
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.util.concurrent.ConcurrentLinkedQueue

/**
 * Centralized Audio Manager for handling all audio focus requests
 * Prevents multiple audio systems from competing for resources
 */
class AudioManager private constructor() {
    private val TAG = "AudioManager"
    
    // Android AudioManager
    private var androidAudioManager: AndroidAudioManager? = null
    private var currentAudioFocusRequest: AudioFocusRequest? = null
    
    // Audio focus state
    private val _audioFocusState = MutableStateFlow<AudioFocusState>(AudioFocusState.NONE)
    val audioFocusState: StateFlow<AudioFocusState> = _audioFocusState.asStateFlow()
    
    // Request queue for priority management
    private val requestQueue = ConcurrentLinkedQueue<AudioFocusRequestInfo>()
    private var currentRequestInfo: AudioFocusRequestInfo? = null
    
    // Coroutine scope for async operations
    private val coroutineScope = CoroutineScope(Dispatchers.Main)
    
    companion object {
        @Volatile
        private var instance: AudioManager? = null
        
        fun getInstance(): AudioManager {
            return instance ?: synchronized(this) {
                instance ?: AudioManager().also { instance = it }
            }
        }
    }
    
    /**
     * Audio focus states
     */
    enum class AudioFocusState {
        NONE,           // No audio focus
        GAINED,         // Audio focus gained
        LOST,           // Audio focus lost
        LOST_TRANSIENT, // Audio focus lost temporarily
        DUCKED          // Audio focus ducked (lowered volume)
    }
    
    /**
     * Audio request types with priorities
     */
    enum class AudioRequestType(val priority: Int) {
        TTS(1),              // Highest priority - Text-to-speech
        WAKE_WORD_RESPONSE(2), // Wake word acknowledgment
        SPEECH_RECOGNITION(3), // Speech recognition
        BACKGROUND_AUDIO(4)    // Lowest priority - Background audio
    }
    
    /**
     * Audio focus request information
     */
    data class AudioFocusRequestInfo(
        val requestType: AudioRequestType,
        val requestId: String,
        val onFocusGained: (() -> Unit)? = null,
        val onFocusLost: (() -> Unit)? = null,
        val onFocusDucked: (() -> Unit)? = null
    )
    
    /**
     * Initialize the audio manager
     */
    fun initialize(context: Context) {
        androidAudioManager = context.getSystemService(Context.AUDIO_SERVICE) as AndroidAudioManager
        Log.i(TAG, "AudioManager initialized")
    }
    
    /**
     * Request audio focus with priority queuing
     */
    fun requestAudioFocus(
        requestType: AudioRequestType,
        requestId: String,
        onFocusGained: (() -> Unit)? = null,
        onFocusLost: (() -> Unit)? = null,
        onFocusDucked: (() -> Unit)? = null
    ): Boolean {
        Log.d(TAG, "🎵 Audio focus requested: $requestType (ID: $requestId)")
        
        val requestInfo = AudioFocusRequestInfo(
            requestType = requestType,
            requestId = requestId,
            onFocusGained = onFocusGained,
            onFocusLost = onFocusLost,
            onFocusDucked = onFocusDucked
        )
        
        // Check if we should interrupt current request based on priority
        val currentRequest = currentRequestInfo
        if (currentRequest != null) {
            if (requestType.priority < currentRequest.requestType.priority) {
                // Higher priority request - interrupt current
                Log.d(TAG, "🎵 Higher priority request ($requestType) interrupting current (${currentRequest.requestType})")
                interruptCurrentRequest()
            } else if (requestType.priority > currentRequest.requestType.priority) {
                // Lower priority - queue it
                Log.d(TAG, "🎵 Lower priority request ($requestType) queued behind current (${currentRequest.requestType})")
                requestQueue.offer(requestInfo)
                return false
            } else {
                // Same priority - queue it
                Log.d(TAG, "🎵 Same priority request ($requestType) queued")
                requestQueue.offer(requestInfo)
                return false
            }
        }
        
        // Process the request immediately
        return processAudioFocusRequest(requestInfo)
    }
    
    /**
     * Process an audio focus request
     */
    private fun processAudioFocusRequest(requestInfo: AudioFocusRequestInfo): Boolean {
        return try {
            val audioAttributes = AudioAttributes.Builder()
                .setUsage(getAudioUsage(requestInfo.requestType))
                .setContentType(getAudioContentType(requestInfo.requestType))
                .build()
            
            val focusGain = getAudioFocusGain(requestInfo.requestType)
            
            val result = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val audioFocusRequest = AudioFocusRequest.Builder(focusGain)
                    .setAudioAttributes(audioAttributes)
                    .setAcceptsDelayedFocusGain(false)
                    .setWillPauseWhenDucked(false)
                    .setOnAudioFocusChangeListener { focusChange ->
                        handleAudioFocusChange(focusChange, requestInfo)
                    }
                    .build()
                
                currentAudioFocusRequest = audioFocusRequest
                androidAudioManager?.requestAudioFocus(audioFocusRequest)
            } else {
                @Suppress("DEPRECATION")
                androidAudioManager?.requestAudioFocus(
                    { focusChange -> handleAudioFocusChange(focusChange, requestInfo) },
                    AndroidAudioManager.STREAM_MUSIC,
                    focusGain
                )
            }
            
            val success = result == AndroidAudioManager.AUDIOFOCUS_REQUEST_GRANTED
            if (success) {
                currentRequestInfo = requestInfo
                _audioFocusState.value = AudioFocusState.GAINED
                Log.d(TAG, "🎵 Audio focus granted for ${requestInfo.requestType} (ID: ${requestInfo.requestId})")
                requestInfo.onFocusGained?.invoke()
            } else {
                Log.w(TAG, "🎵 Audio focus denied for ${requestInfo.requestType} (ID: ${requestInfo.requestId})")
            }
            
            success
        } catch (e: Exception) {
            Log.e(TAG, "Error requesting audio focus for ${requestInfo.requestType}", e)
            false
        }
    }
    
    /**
     * Handle audio focus changes
     */
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
                requestInfo.onFocusLost?.invoke()
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK -> {
                _audioFocusState.value = AudioFocusState.DUCKED
                requestInfo.onFocusDucked?.invoke()
            }
        }
    }
    
    /**
     * Release audio focus for a specific request
     */
    fun releaseAudioFocus(requestId: String) {
        Log.d(TAG, "🎵 Audio focus release requested for ID: $requestId")
        
        val currentRequest = currentRequestInfo
        if (currentRequest?.requestId == requestId) {
            releaseCurrentAudioFocus()
            processNextRequest()
        } else {
            // Remove from queue if it's there
            requestQueue.removeAll { it.requestId == requestId }
            Log.d(TAG, "🎵 Removed request $requestId from queue")
        }
    }
    
    /**
     * Release current audio focus
     */
    private fun releaseCurrentAudioFocus() {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && currentAudioFocusRequest != null) {
                androidAudioManager?.abandonAudioFocusRequest(currentAudioFocusRequest!!)
                currentAudioFocusRequest = null
            } else {
                @Suppress("DEPRECATION")
                androidAudioManager?.abandonAudioFocus(null)
            }
            
            currentRequestInfo?.let { request ->
                Log.d(TAG, "🎵 Audio focus released for ${request.requestType} (ID: ${request.requestId})")
            }
            
            currentRequestInfo = null
            _audioFocusState.value = AudioFocusState.NONE
        } catch (e: Exception) {
            Log.e(TAG, "Error releasing audio focus", e)
        }
    }
    
    /**
     * Interrupt current request (for higher priority requests)
     */
    private fun interruptCurrentRequest() {
        currentRequestInfo?.onFocusLost?.invoke()
        releaseCurrentAudioFocus()
    }
    
    /**
     * Process next request in queue
     */
    private fun processNextRequest() {
        coroutineScope.launch {
            val nextRequest = requestQueue.poll()
            if (nextRequest != null) {
                Log.d(TAG, "🎵 Processing next queued request: ${nextRequest.requestType} (ID: ${nextRequest.requestId})")
                processAudioFocusRequest(nextRequest)
            }
        }
    }
    
    /**
     * Get audio usage based on request type
     */
    private fun getAudioUsage(requestType: AudioRequestType): Int {
        return when (requestType) {
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AudioAttributes.USAGE_ASSISTANT
            AudioRequestType.SPEECH_RECOGNITION -> AudioAttributes.USAGE_VOICE_COMMUNICATION
            AudioRequestType.BACKGROUND_AUDIO -> AudioAttributes.USAGE_MEDIA
        }
    }
    
    /**
     * Get audio content type based on request type
     */
    private fun getAudioContentType(requestType: AudioRequestType): Int {
        return when (requestType) {
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AudioAttributes.CONTENT_TYPE_SPEECH
            AudioRequestType.SPEECH_RECOGNITION -> AudioAttributes.CONTENT_TYPE_SPEECH
            AudioRequestType.BACKGROUND_AUDIO -> AudioAttributes.CONTENT_TYPE_MUSIC
        }
    }
    
    /**
     * Get audio focus gain type based on request type
     */
    private fun getAudioFocusGain(requestType: AudioRequestType): Int {
        return when (requestType) {
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT
            AudioRequestType.SPEECH_RECOGNITION -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE
            AudioRequestType.BACKGROUND_AUDIO -> AndroidAudioManager.AUDIOFOCUS_GAIN
        }
    }
    
    /**
     * Check if audio focus is currently held
     */
    fun hasAudioFocus(): Boolean {
        return _audioFocusState.value == AudioFocusState.GAINED
    }
    
    /**
     * Get current audio focus holder info
     */
    fun getCurrentRequestInfo(): AudioFocusRequestInfo? {
        return currentRequestInfo
    }
    
    /**
     * Clear all pending requests (for cleanup)
     */
    fun clearAllRequests() {
        Log.d(TAG, "🎵 Clearing all audio focus requests")
        requestQueue.clear()
        releaseCurrentAudioFocus()
    }
} 