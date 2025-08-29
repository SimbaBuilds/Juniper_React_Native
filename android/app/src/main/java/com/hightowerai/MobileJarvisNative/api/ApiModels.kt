package com.hightowerai.MobileJarvisNative.api

import com.google.gson.annotations.SerializedName

/**
 * Data models for API communication
 * Mirrors the TypeScript interfaces from React Native
 */

// Chat Request
data class ChatRequest(
    val message: String,
    val timestamp: Long,
    val history: List<HistoryMessage>,
    @SerializedName("request_id")
    val requestId: String? = null,
    @SerializedName("user_id")
    val userId: String? = null,
    @SerializedName("integration_in_progress")
    val integrationInProgress: Boolean? = null,
    @SerializedName("image_url")
    val imageUrl: String? = null,
    @SerializedName("deepgram_enabled")
    val deepgramEnabled: Boolean = false,
    @SerializedName("selected_deepgram_voice")
    val selectedDeepgramVoice: String = "aura-2-pandora-en",
    @SerializedName("base_language_model")
    val baseLanguageModel: String = "claude-sonnet-4-20250514",
    @SerializedName("general_instructions")
    val generalInstructions: String? = null,
    val timezone: String = "UTC"
)

// Chat Response
data class ChatResponse(
    val response: String,
    val timestamp: Long,
    @SerializedName("settings_updated")
    val settingsUpdated: Boolean? = null,
    @SerializedName("integration_in_progress")
    val integrationInProgress: Boolean? = null,
    @SerializedName("additional_data")
    val additionalData: Map<String, Any>? = null,
    @SerializedName("request_id")
    val requestId: String? = null,
    @SerializedName("error")
    val error: String? = null,
    @SerializedName("voice_metadata")
    val voiceMetadata: VoiceMetadata? = null
)

// History Message
data class HistoryMessage(
    val role: String, // "user" or "assistant"
    val content: String,
    val timestamp: Long,
    val type: String = "text"
)

// Voice Metadata
data class VoiceMetadata(
    @SerializedName("deepgram_enabled")
    val deepgramEnabled: Boolean,
    @SerializedName("voice_used")
    val voiceUsed: String,
    @SerializedName("tts_provider")
    val ttsProvider: String // "deepgram" or "system"
)

// Error Response
data class ApiError(
    val error: String,
    val message: String,
    val statusCode: Int,
    val timestamp: Long
)

// Background Conversation Entry
data class BackgroundConversation(
    val id: String,
    val userMessage: String,
    val assistantResponse: String,
    val userTimestamp: Long,
    val responseTimestamp: Long,
    val voiceMetadata: VoiceMetadata,
    val synced: Boolean = false,
    val error: String? = null
)

// API Configuration
data class ApiConfig(
    val baseUrl: String,
    val timeout: Long = 300000, // 5 minutes in milliseconds
    val maxRetries: Int = 3,
    val retryDelay: Long = 1000 // 1 second
)

// Request State
enum class RequestState {
    IDLE,
    LOADING,
    SUCCESS,
    ERROR,
    CANCELLED
}

// Voice Settings (from SharedPreferences)
data class VoiceSettings(
    val deepgramEnabled: Boolean = false,
    val selectedDeepgramVoice: String = "aura-2-pandora-en",
    val baseLanguageModel: String = "claude-sonnet-4-20250514",
    val generalInstructions: String = "",
    val timezone: String = "UTC"
)