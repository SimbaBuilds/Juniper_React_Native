package com.anonymous.MobileJarvisNative.utils

import android.content.Context
import android.media.AudioAttributes
import android.media.AudioManager
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.util.Log
import java.util.Locale
import java.util.UUID
import java.util.concurrent.ConcurrentLinkedQueue

/**
 * Manager for text-to-speech functionality.
 * Now uses centralized AudioManager for audio focus management and includes TTS queuing.
 */
object TextToSpeechManager {
    private const val TAG = "TextToSpeechManager"
    private var textToSpeech: TextToSpeech? = null
    private var isInitialized = false
    private var centralAudioManager: com.anonymous.MobileJarvisNative.utils.AudioManager? = null
    private var currentRequestId: String? = null
    
    // TTS operation queue to prevent overlapping speech
    private val ttsQueue = ConcurrentLinkedQueue<TTSRequest>()
    private var isProcessingQueue = false
    
    /**
     * Data class for TTS requests
     */
    private data class TTSRequest(
        val text: String,
        val queueMode: Int,
        val onComplete: (() -> Unit)?
    )

    /**
     * Initialize the TextToSpeech engine
     *
     * @param context Application context
     * @param onInitListener Optional callback for when initialization completes
     */
    fun initialize(context: Context, onInitListener: ((Boolean) -> Unit)? = null) {
        if (textToSpeech != null) {
            Log.d(TAG, "TextToSpeech already initialized")
            onInitListener?.invoke(isInitialized)
            return
        }

        try {
            Log.d(TAG, "Initializing TextToSpeech")
            
            // Initialize centralized AudioManager
            centralAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            centralAudioManager?.initialize(context)
            
            textToSpeech = TextToSpeech(context) { status ->
                Log.d(TAG, "TTS initialization callback received with status: $status")
                isInitialized = status == TextToSpeech.SUCCESS
                if (isInitialized) {
                    val result = textToSpeech?.setLanguage(Locale.US)
                    Log.d(TAG, "TTS setLanguage result: $result")
                    if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                        Log.e(TAG, "Language not supported")
                        isInitialized = false
                    } else {
                        Log.d(TAG, "TextToSpeech initialized successfully")
                        
                        // Set audio attributes for better audio handling
                        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.LOLLIPOP) {
                            val audioAttributes = AudioAttributes.Builder()
                                .setUsage(AudioAttributes.USAGE_ASSISTANT)
                                .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                                .build()
                            textToSpeech?.setAudioAttributes(audioAttributes)
                            Log.d(TAG, "Audio attributes set for TTS")
                        }
                    }
                } else {
                    Log.e(TAG, "TextToSpeech initialization failed with status: $status")
                }
                onInitListener?.invoke(isInitialized)
            }

            // Set up progress listener
            textToSpeech?.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                override fun onStart(utteranceId: String?) {
                    Log.d(TAG, "Speech started: $utteranceId")
                }

                override fun onDone(utteranceId: String?) {
                    Log.d(TAG, "Speech completed: $utteranceId")
                    releaseAudioFocus()
                }

                override fun onError(utteranceId: String?) {
                    Log.e(TAG, "Speech error: $utteranceId")
                    releaseAudioFocus()
                }
            })
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing TextToSpeech: ${e.message}", e)
            isInitialized = false
            onInitListener?.invoke(false)
        }
    }

    /**
     * Request audio focus through centralized manager
     */
    private fun requestAudioFocus(): Boolean {
        return try {
            val requestId = "tts_${UUID.randomUUID()}"
            currentRequestId = requestId
            
            val success = centralAudioManager?.requestAudioFocus(
                requestType = com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.TTS,
                requestId = requestId,
                onFocusGained = {
                    Log.d(TAG, "🎵 TTS audio focus gained")
                },
                onFocusLost = {
                    Log.d(TAG, "🎵 TTS audio focus lost - stopping speech")
                    stop()
                },
                onFocusDucked = {
                    Log.d(TAG, "🎵 TTS audio focus ducked - continuing at lower volume")
                }
            ) ?: false
            
            Log.d(TAG, "🎵 TTS audio focus request result: $success")
            success
        } catch (e: Exception) {
            Log.e(TAG, "Error requesting audio focus", e)
            false
        }
    }

    /**
     * Release audio focus through centralized manager
     */
    private fun releaseAudioFocus() {
        try {
            currentRequestId?.let { requestId ->
                centralAudioManager?.releaseAudioFocus(requestId)
                Log.d(TAG, "🎵 TTS audio focus released")
            }
            currentRequestId = null
        } catch (e: Exception) {
            Log.e(TAG, "Error releasing audio focus", e)
        }
    }

    /**
     * Pre-acquire audio focus to reduce TTS startup latency
     */
    fun preAcquireAudioFocus(): Boolean {
        Log.d(TAG, "🎵 Pre-acquiring audio focus for faster TTS startup")
        return requestAudioFocus()
    }

    /**
     * Speak the given text with queuing to prevent overlapping speech
     *
     * @param text Text to speak
     * @param queueMode How to queue this text (note: QUEUE_FLUSH will clear the queue)
     * @param onComplete Optional callback for when speech completes
     */
    fun speak(
        text: String, 
        queueMode: Int = TextToSpeech.QUEUE_FLUSH,
        onComplete: (() -> Unit)? = null
    ) {
        Log.d(TAG, "🎵 TTS QUEUE: speak() called with text: '$text', queueMode: $queueMode")
        
        if (!isInitialized || textToSpeech == null) {
            Log.e(TAG, "TextToSpeech not initialized - cannot speak")
            onComplete?.invoke()
            return
        }

        val request = TTSRequest(text, queueMode, onComplete)
        
        // If QUEUE_FLUSH, clear existing queue and stop current speech
        if (queueMode == TextToSpeech.QUEUE_FLUSH) {
            Log.d(TAG, "🎵 TTS QUEUE: QUEUE_FLUSH - clearing queue and stopping current speech")
            ttsQueue.clear()
            textToSpeech?.stop()
        }
        
        // Add request to queue
        ttsQueue.offer(request)
        Log.d(TAG, "🎵 TTS QUEUE: Added request to queue. Queue size: ${ttsQueue.size}")
        
        // Process queue if not already processing
        if (!isProcessingQueue) {
            processNextInQueue()
        }
    }
    
    /**
     * Process the next TTS request in the queue
     */
    private fun processNextInQueue() {
        if (isProcessingQueue) {
            Log.d(TAG, "🎵 TTS QUEUE: Already processing queue, skipping")
            return
        }
        
        val request = ttsQueue.poll()
        if (request == null) {
            Log.d(TAG, "🎵 TTS QUEUE: Queue is empty")
            isProcessingQueue = false
            return
        }
        
        Log.d(TAG, "🎵 TTS QUEUE: Processing request: '${request.text}'")
        isProcessingQueue = true
        
        speakImmediately(request.text, request.queueMode) {
            Log.d(TAG, "🎵 TTS QUEUE: Request completed, processing next")
            request.onComplete?.invoke()
            isProcessingQueue = false
            
            // Process next request in queue
            if (ttsQueue.isNotEmpty()) {
                processNextInQueue()
            }
        }
    }
    
    /**
     * Speak immediately without queuing (internal method)
     */
    private fun speakImmediately(
        text: String,
        queueMode: Int,
        onComplete: (() -> Unit)?
    ) {
        val startTime = System.currentTimeMillis()
        Log.d(TAG, "🎵 TTS TIMING: speakImmediately() called at $startTime with text: '$text'")
        
        try {
            // Request audio focus through centralized manager
            val audioFocusStartTime = System.currentTimeMillis()
            val audioFocusGranted = requestAudioFocus()
            val audioFocusEndTime = System.currentTimeMillis()
            Log.d(TAG, "🎵 TTS TIMING: Audio focus handling took ${audioFocusEndTime - audioFocusStartTime}ms - granted: $audioFocusGranted")
            
            if (!audioFocusGranted) {
                Log.w(TAG, "🎵 Audio focus not granted - proceeding anyway")
            }
            
            val utteranceId = UUID.randomUUID().toString()
            Log.d(TAG, "Generated utterance ID: $utteranceId")
            
            // Set up listener for this specific utterance
            textToSpeech?.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                override fun onStart(id: String?) {
                    if (id == utteranceId) {
                        val actualStartTime = System.currentTimeMillis()
                        Log.d(TAG, "🎵 TTS TIMING: Speech ACTUALLY started for utterance: $id at ${actualStartTime - startTime}ms")
                    }
                }

                override fun onDone(id: String?) {
                    if (id == utteranceId) {
                        val doneTime = System.currentTimeMillis()
                        Log.d(TAG, "🎵 TTS TIMING: Speech completed for utterance: $id at ${doneTime - startTime}ms")
                        releaseAudioFocus()
                        onComplete?.invoke()
                    }
                }

                override fun onError(id: String?) {
                    if (id == utteranceId) {
                        val errorTime = System.currentTimeMillis()
                        Log.e(TAG, "🎵 TTS TIMING: Speech error for utterance: $id at ${errorTime - startTime}ms")
                        releaseAudioFocus()
                        onComplete?.invoke()
                    }
                }
            })

            // Speak the text
            val speakCallTime = System.currentTimeMillis()
            Log.d(TAG, "🎵 TTS TIMING: Calling textToSpeech.speak() at ${speakCallTime - startTime}ms")
            val result = textToSpeech?.speak(text, queueMode, null, utteranceId)
            val speakReturnTime = System.currentTimeMillis()
            Log.d(TAG, "🎵 TTS TIMING: textToSpeech.speak() returned at ${speakReturnTime - startTime}ms: $result")
            
            when (result) {
                TextToSpeech.SUCCESS -> {
                    Log.i(TAG, "TTS speak() call successful")
                }
                TextToSpeech.ERROR -> {
                    Log.e(TAG, "TTS speak() call failed with ERROR")
                    releaseAudioFocus()
                    onComplete?.invoke()
                }
                else -> {
                    Log.w(TAG, "TTS speak() call returned unexpected result: $result")
                    releaseAudioFocus()
                    onComplete?.invoke()
                }
            }
        } catch (e: Exception) {
            val errorTime = System.currentTimeMillis()
            Log.e(TAG, "🎵 TTS TIMING: Exception in speakImmediately() at ${errorTime - startTime}ms", e)
            releaseAudioFocus()
            onComplete?.invoke()
        }
    }

    /**
     * Check if TextToSpeech is currently speaking
     */
    fun isSpeaking(): Boolean {
        return textToSpeech?.isSpeaking ?: false
    }

    /**
     * Check if TextToSpeech is initialized and ready to use
     */
    fun isInitialized(): Boolean {
        return isInitialized && textToSpeech != null
    }

    /**
     * Stop any ongoing speech and clear the queue
     */
    fun stop() {
        Log.d(TAG, "🎵 TTS QUEUE: Stopping TTS and clearing queue")
        ttsQueue.clear()
        isProcessingQueue = false
        textToSpeech?.stop()
        releaseAudioFocus()
    }

    /**
     * Interrupt any ongoing speech and clear the queue
     * 
     * @return True if speech was interrupted, false otherwise
     */
    fun interrupt(): Boolean {
        return try {
            if (isSpeaking() || ttsQueue.isNotEmpty()) {
                Log.d(TAG, "🎵 TTS QUEUE: Interrupting TTS speech and clearing queue")
                stop()
                true
            } else {
                Log.d(TAG, "No TTS speech to interrupt and queue is empty")
                false
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error interrupting TTS speech", e)
            false
        }
    }

    /**
     * Shutdown and clean up resources
     */
    fun shutdown() {
        Log.i(TAG, "Shutting down TextToSpeechManager")
        
        try {
            // Clear the queue and stop processing
            ttsQueue.clear()
            isProcessingQueue = false
            
            textToSpeech?.stop()
            textToSpeech?.shutdown()
            textToSpeech = null
            isInitialized = false
            
            // Release any held audio focus
            releaseAudioFocus()
            
            Log.d(TAG, "TextToSpeechManager shutdown complete")
        } catch (e: Exception) {
            Log.e(TAG, "Error during TextToSpeechManager shutdown", e)
        }
    }

    /**
     * Check audio settings and permissions
     */
    fun checkAudioSettings(context: Context): Boolean {
        Log.d(TAG, "Checking audio settings")
        
        // Check if TTS is initialized
        if (!isInitialized) {
            Log.w(TAG, "TextToSpeech not initialized")
            return false
        }
        
        // Check if we can acquire audio focus
        val success = requestAudioFocus()
        if (!success) {
            Log.w(TAG, "Could not acquire audio focus")
            return false
        }
        
        // Release the audio focus since this is just a check
        releaseAudioFocus()
        
        return true
    }
} 