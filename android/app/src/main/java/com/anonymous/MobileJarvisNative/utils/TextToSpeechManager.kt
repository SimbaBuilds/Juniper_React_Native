package com.anonymous.MobileJarvisNative.utils

import android.content.Context
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager
import android.os.Build
import android.speech.tts.TextToSpeech
import android.speech.tts.UtteranceProgressListener
import android.util.Log
import java.util.Locale
import java.util.UUID

/**
 * Manager for text-to-speech functionality.
 * Provides a centralized interface for TTS operations throughout the app.
 */
object TextToSpeechManager {
    private const val TAG = "TextToSpeechManager"
    private var textToSpeech: TextToSpeech? = null
    private var isInitialized = false
    private var audioManager: AudioManager? = null
    private var audioFocusRequest: AudioFocusRequest? = null

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
            
            // Initialize AudioManager for audio focus
            audioManager = context.getSystemService(Context.AUDIO_SERVICE) as AudioManager
            
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
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                            val audioAttributes = AudioAttributes.Builder()
                                .setUsage(AudioAttributes.USAGE_MEDIA)
                                .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                                .build()
                            textToSpeech?.setAudioAttributes(audioAttributes)
                            Log.d(TAG, "Audio attributes set for TTS")
                        }
                    }
                } else {
                    Log.e(TAG, "Failed to initialize TextToSpeech")
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
            Log.e(TAG, "Error initializing TextToSpeech", e)
            onInitListener?.invoke(false)
        }
    }

    /**
     * Request audio focus for TTS playback
     */
    private fun requestAudioFocus(): Boolean {
        return try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val audioAttributes = AudioAttributes.Builder()
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                    .build()
                
                audioFocusRequest = AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK)
                    .setAudioAttributes(audioAttributes)
                    .setAcceptsDelayedFocusGain(true)
                    .build()
                
                val result = audioManager?.requestAudioFocus(audioFocusRequest!!)
                Log.d(TAG, "Audio focus request result: $result")
                result == AudioManager.AUDIOFOCUS_REQUEST_GRANTED
            } else {
                @Suppress("DEPRECATION")
                val result = audioManager?.requestAudioFocus(
                    null,
                    AudioManager.STREAM_MUSIC,
                    AudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK
                )
                Log.d(TAG, "Audio focus request result (legacy): $result")
                result == AudioManager.AUDIOFOCUS_REQUEST_GRANTED
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error requesting audio focus", e)
            false
        }
    }

    /**
     * Release audio focus
     */
    private fun releaseAudioFocus() {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && audioFocusRequest != null) {
                audioManager?.abandonAudioFocusRequest(audioFocusRequest!!)
                Log.d(TAG, "Audio focus released")
            } else {
                @Suppress("DEPRECATION")
                audioManager?.abandonAudioFocus(null)
                Log.d(TAG, "Audio focus released (legacy)")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error releasing audio focus", e)
        }
    }

    /**
     * Speak the given text
     *
     * @param text Text to speak
     * @param queueMode How to queue this text
     * @param onComplete Optional callback for when speech completes
     */
    fun speak(text: String, queueMode: Int = TextToSpeech.QUEUE_FLUSH, onComplete: (() -> Unit)? = null) {
        Log.d(TAG, "speak() called with text: '$text', queueMode: $queueMode")
        Log.d(TAG, "TTS state - isInitialized: $isInitialized, textToSpeech: ${textToSpeech != null}")
        
        if (!isInitialized || textToSpeech == null) {
            Log.e(TAG, "TextToSpeech not initialized - cannot speak")
            onComplete?.invoke()
            return
        }

        try {
            // Check current TTS state
            Log.d(TAG, "Current TTS speaking state: ${textToSpeech?.isSpeaking}")
            
            // Request audio focus before speaking
            val audioFocusGranted = requestAudioFocus()
            Log.d(TAG, "Audio focus granted: $audioFocusGranted")
            if (!audioFocusGranted) {
                Log.w(TAG, "Audio focus not granted, but proceeding with TTS")
            }
            
            val utteranceId = UUID.randomUUID().toString()
            Log.d(TAG, "Generated utterance ID: $utteranceId")
            
            // Set up listener for this specific utterance if needed
            if (onComplete != null) {
                Log.d(TAG, "Setting up utterance progress listener for completion callback")
                textToSpeech?.setOnUtteranceProgressListener(object : UtteranceProgressListener() {
                    override fun onStart(id: String?) {
                        if (id == utteranceId) {
                            Log.d(TAG, "Speech started for utterance: $id")
                        }
                    }

                    override fun onDone(id: String?) {
                        if (id == utteranceId) {
                            Log.d(TAG, "Speech completed for utterance: $id")
                            releaseAudioFocus()
                            onComplete.invoke()
                        }
                    }

                    override fun onError(id: String?) {
                        if (id == utteranceId) {
                            Log.e(TAG, "Speech error for utterance: $id")
                            releaseAudioFocus()
                            onComplete.invoke()
                        }
                    }
                })
            } else {
                Log.d(TAG, "No completion callback provided")
            }

            // Speak the text
            Log.d(TAG, "Calling textToSpeech.speak() with text: '$text'")
            val result = textToSpeech?.speak(text, queueMode, null, utteranceId)
            Log.d(TAG, "textToSpeech.speak() returned: $result")
            
            when (result) {
                TextToSpeech.SUCCESS -> {
                    Log.i(TAG, "TTS speak() call successful")
                    // Check if it's actually speaking now
                    Log.d(TAG, "TTS speaking state after speak() call: ${textToSpeech?.isSpeaking}")
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
            Log.e(TAG, "Exception in speak() method", e)
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
     * Stop any ongoing speech
     */
    fun stop() {
        textToSpeech?.stop()
    }

    /**
     * Interrupt any ongoing speech
     * 
     * @return True if speech was interrupted, false otherwise
     */
    fun interrupt(): Boolean {
        try {
            if (isSpeaking()) {
                textToSpeech?.stop()
                Log.d(TAG, "Speech interrupted successfully")
                return true
            } else {
                Log.d(TAG, "No speech to interrupt")
                return false
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error interrupting speech", e)
            return false
        }
    }

    /**
     * Release TTS resources
     */
    fun shutdown() {
        try {
            textToSpeech?.stop()
            textToSpeech?.shutdown()
            textToSpeech = null
            isInitialized = false
            Log.d(TAG, "TextToSpeech shut down")
        } catch (e: Exception) {
            Log.e(TAG, "Error shutting down TextToSpeech", e)
        }
    }

    /**
     * Check audio settings and log current state
     */
    fun checkAudioSettings(context: Context) {
        try {
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as AudioManager
            
            // Check current audio mode
            val audioMode = audioManager.mode
            Log.d(TAG, "Current audio mode: $audioMode")
            
            // Check volume levels
            val musicVolume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC)
            val maxMusicVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_MUSIC)
            Log.d(TAG, "Music volume: $musicVolume / $maxMusicVolume")
            
            val systemVolume = audioManager.getStreamVolume(AudioManager.STREAM_SYSTEM)
            val maxSystemVolume = audioManager.getStreamMaxVolume(AudioManager.STREAM_SYSTEM)
            Log.d(TAG, "System volume: $systemVolume / $maxSystemVolume")
            
            // Check if audio is muted
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                val isMusicMuted = audioManager.isStreamMute(AudioManager.STREAM_MUSIC)
                val isSystemMuted = audioManager.isStreamMute(AudioManager.STREAM_SYSTEM)
                Log.d(TAG, "Music muted: $isMusicMuted, System muted: $isSystemMuted")
            }
            
            // Check if TTS is available
            Log.d(TAG, "TTS initialized: $isInitialized")
            Log.d(TAG, "TTS instance: ${textToSpeech != null}")
            if (textToSpeech != null) {
                Log.d(TAG, "TTS is speaking: ${textToSpeech!!.isSpeaking}")
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "Error checking audio settings", e)
        }
    }
} 