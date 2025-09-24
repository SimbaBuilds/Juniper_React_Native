package com.hightowerai.MobileJarvisNative.api

import android.content.Context
import android.util.Log
import com.google.gson.Gson
import com.google.gson.GsonBuilder
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException
import java.util.*
import java.util.concurrent.TimeUnit

/**
 * Native API client for background conversation handling
 * Mimics the React Native ServerApiService functionality
 */
class NativeApiClient(private val context: Context) {
    
    companion object {
        private const val TAG = "NativeApiClient"
        
        // API Configuration
        private const val DEFAULT_BASE_URL = "https://juniper-python-backend.onrender.com"
        private const val CHAT_ENDPOINT = "/api/chat"
        private const val REQUEST_TIMEOUT = 600L // 5 minutes in seconds
        
        @Volatile
        private var instance: NativeApiClient? = null
        
        fun getInstance(context: Context): NativeApiClient {
            return instance ?: synchronized(this) {
                instance ?: NativeApiClient(context.applicationContext).also { instance = it }
            }
        }
    }
    
    private val gson: Gson = GsonBuilder()
        .setDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
        .create()
    
    private val client: OkHttpClient = OkHttpClient.Builder()
        .connectTimeout(REQUEST_TIMEOUT, TimeUnit.SECONDS)
        .readTimeout(REQUEST_TIMEOUT, TimeUnit.SECONDS)
        .writeTimeout(REQUEST_TIMEOUT, TimeUnit.SECONDS)
        .addInterceptor(createLoggingInterceptor())
        .addInterceptor(createAuthInterceptor())
        .build()
    
    private val tokenManager = SupabaseTokenManager.getInstance(context)
    private val voiceSettingsManager = VoiceSettingsManager.getInstance(context)
    
    /**
     * Send chat message to API with background conversation support
     */
    suspend fun sendChatMessage(
        message: String,
        history: List<HistoryMessage> = emptyList(),
        requestId: String = generateRequestId()
    ): ChatResponse {
        return withContext(Dispatchers.IO) {
            try {
                Log.i(TAG, "📡 NATIVE_API: ========== SENDING CHAT MESSAGE ==========")
                Log.i(TAG, "📡 NATIVE_API: Message: '${message.take(100)}${if(message.length > 100) "..." else ""}'")
                Log.i(TAG, "📡 NATIVE_API: History length: ${history.size}")
                Log.i(TAG, "📡 NATIVE_API: Request ID: $requestId")
                
                // Check authentication first and get user ID
                val userId = tokenManager.getUserId()
                if (userId.isNullOrEmpty()) {
                    throw IOException("No user ID available - user not authenticated")
                }
                
                // Get current voice settings
                val voiceSettings = voiceSettingsManager.getVoiceSettings()
                Log.i(TAG, "📡 CONTEXT_DEBUG: ========== API CALL CONTEXT ==========")
                Log.i(TAG, "📡 CONTEXT_DEBUG: User ID: ${userId.take(12)}...")
                Log.i(TAG, "📡 CONTEXT_DEBUG: Message: '$message'")
                Log.i(TAG, "📡 CONTEXT_DEBUG: Original history entries: ${history.size}")
                if (history.isNotEmpty()) {
                    history.forEachIndexed { index, historyItem ->
                        Log.d(TAG, "📡 CONTEXT_DEBUG:   History[$index]: ${historyItem.role} - '${historyItem.content.take(60)}...'")
                    }
                }
                Log.i(TAG, "📡 CONTEXT_DEBUG: Voice Settings:")
                Log.i(TAG, "📡 CONTEXT_DEBUG:   - Deepgram enabled: ${voiceSettings.deepgramEnabled}")
                Log.i(TAG, "📡 CONTEXT_DEBUG:   - Selected voice: ${voiceSettings.selectedDeepgramVoice}")
                Log.i(TAG, "📡 CONTEXT_DEBUG:   - Base model: ${voiceSettings.baseLanguageModel}")
                Log.i(TAG, "📡 CONTEXT_DEBUG:   - Timezone: ${voiceSettings.timezone}")
                Log.i(TAG, "📡 CONTEXT_DEBUG:   - Instructions: '${voiceSettings.generalInstructions.take(50)}${if(voiceSettings.generalInstructions.length > 50) "..." else ""}'")
                Log.i(TAG, "📡 CONTEXT_DEBUG: =======================================")
                
                // Add current message to history to maintain conversation context
                val currentTimestamp = System.currentTimeMillis()
                val currentUserMessage = HistoryMessage(
                    role = "user",
                    content = message,
                    timestamp = currentTimestamp,
                    type = "text"
                )
                
                // Include current message in history for proper context
                val updatedHistory = history + currentUserMessage
                Log.i(TAG, "📡 CONTEXT_DEBUG: Updated history entries (with current message): ${updatedHistory.size}")
                
                // Build chat request matching React Native format exactly
                val chatRequest = ChatRequest(
                    message = message,
                    timestamp = currentTimestamp,
                    history = updatedHistory,  // History now includes current message
                    requestId = requestId,
                    userId = userId,
                    deepgramEnabled = voiceSettings.deepgramEnabled,
                    selectedDeepgramVoice = voiceSettings.selectedDeepgramVoice,
                    baseLanguageModel = voiceSettings.baseLanguageModel,
                    generalInstructions = voiceSettings.generalInstructions,
                    timezone = voiceSettings.timezone
                )
                
                // Create multipart request (mimicking React Native implementation)
                val requestBody = createMultipartRequest(chatRequest)
                val request = Request.Builder()
                    .url(getApiUrl() + CHAT_ENDPOINT)
                    .post(requestBody)
                    .build()
                
                Log.d(TAG, "📡 NATIVE_API: Making HTTP request to ${request.url}")
                
                client.newCall(request).execute().use { response ->
                    Log.d(TAG, "📡 NATIVE_API: Response code: ${response.code}")
                    
                    if (response.isSuccessful) {
                        val responseBody = response.body?.string()
                        if (responseBody != null) {
                            val chatResponse = gson.fromJson(responseBody, ChatResponse::class.java)
                            
                            Log.i(TAG, "📡 RESPONSE_DEBUG: ========== API RESPONSE ==========")
                            Log.i(TAG, "📡 RESPONSE_DEBUG: Status: ${response.code}")
                            Log.i(TAG, "📡 RESPONSE_DEBUG: Response body length: ${responseBody.length}")
                            Log.i(TAG, "📡 RESPONSE_DEBUG: Raw response body:")
                            Log.i(TAG, "📡 RESPONSE_DEBUG: $responseBody")
                            Log.i(TAG, "📡 RESPONSE_DEBUG: Parsed response:")
                            Log.i(TAG, "📡 RESPONSE_DEBUG:   - response: '${chatResponse.response.take(200)}${if(chatResponse.response.length > 200) "..." else ""}'")
                            Log.i(TAG, "📡 RESPONSE_DEBUG:   - timestamp: ${chatResponse.timestamp}")
                            Log.i(TAG, "📡 RESPONSE_DEBUG:   - request_id: '${chatResponse.requestId ?: "null"}'")
                            Log.i(TAG, "📡 RESPONSE_DEBUG:   - settings_updated: ${chatResponse.settingsUpdated ?: false}")
                            Log.i(TAG, "📡 RESPONSE_DEBUG:   - error: '${chatResponse.error ?: "none"}'")
                            Log.i(TAG, "📡 RESPONSE_DEBUG: =======================================")
                            
                            Log.i(TAG, "📡 NATIVE_API: ✅ Chat API call successful")
                            Log.d(TAG, "📡 NATIVE_API: Response length: ${chatResponse.response.length}")
                            
                            chatResponse
                        } else {
                            throw IOException("Empty response body")
                        }
                    } else {
                        val errorBody = response.body?.string()
                        Log.e(TAG, "📡 NATIVE_API: ❌ API call failed with code ${response.code}")
                        Log.e(TAG, "📡 NATIVE_API: Error body: $errorBody")
                        
                        // Handle specific error codes
                        when (response.code) {
                            401 -> throw IOException("Authentication failed - token expired or invalid")
                            403 -> throw IOException("Forbidden - insufficient permissions")
                            404 -> throw IOException("API endpoint not found")
                            429 -> throw IOException("Rate limit exceeded")
                            else -> throw IOException("API call failed with status ${response.code}: $errorBody")
                        }
                    }
                }
                
            } catch (e: Exception) {
                Log.e(TAG, "📡 NATIVE_API: ❌ Error in sendChatMessage: ${e.message}", e)
                throw e
            }
        }
    }
    
    /**
     * Create multipart request body
     * Mimics the React Native FormData approach exactly
     */
    private fun createMultipartRequest(chatRequest: ChatRequest): RequestBody {
        val jsonPayload = gson.toJson(chatRequest)
        
        Log.i(TAG, "📡 PAYLOAD_DEBUG: ========== COMPLETE API PAYLOAD ==========")
        Log.i(TAG, "📡 PAYLOAD_DEBUG: Request structure:")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - message: '${chatRequest.message}'")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - timestamp: ${chatRequest.timestamp}")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - request_id: '${chatRequest.requestId ?: "null"}'")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - user_id: '${(chatRequest.userId ?: "null").take(12)}...'")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - history: ${chatRequest.history.size} entries")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - deepgram_enabled: ${chatRequest.deepgramEnabled}")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - selected_deepgram_voice: '${chatRequest.selectedDeepgramVoice}'")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - base_language_model: '${chatRequest.baseLanguageModel}'")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - timezone: '${chatRequest.timezone}'")
        Log.i(TAG, "📡 PAYLOAD_DEBUG:   - general_instructions: '${(chatRequest.generalInstructions ?: "").take(100)}${if((chatRequest.generalInstructions ?: "").length > 100) "..." else ""}'")
        Log.i(TAG, "📡 PAYLOAD_DEBUG: Raw JSON payload:")
        Log.i(TAG, "📡 PAYLOAD_DEBUG: $jsonPayload")
        Log.i(TAG, "📡 PAYLOAD_DEBUG: =======================================")
        
        return MultipartBody.Builder()
            .setType(MultipartBody.FORM)
            .addFormDataPart("json_data", jsonPayload)  // Match React Native field name
            .build()
    }
    
    /**
     * Get API base URL from configuration
     */
    private fun getApiUrl(): String {
        // Check for environment-specific URL in build config or shared preferences
        // For now, use the default
        return DEFAULT_BASE_URL
    }
    
    /**
     * Create authentication interceptor
     */
    private fun createAuthInterceptor(): Interceptor {
        return Interceptor { chain ->
            val originalRequest = chain.request()
            
            // Add authorization header if available
            val authHeader = tokenManager.getAuthorizationHeader()
            
            val requestBuilder = originalRequest.newBuilder()
            
            if (authHeader != null) {
                requestBuilder.header("Authorization", authHeader)
                Log.d(TAG, "📡 AUTH: Added authorization header")
            } else {
                Log.w(TAG, "📡 AUTH: No authentication token available")
            }
            
            val request = requestBuilder.build()
            chain.proceed(request)
        }
    }
    
    /**
     * Create logging interceptor for debugging
     */
    private fun createLoggingInterceptor(): Interceptor {
        return Interceptor { chain ->
            val request = chain.request()
            val startTime = System.currentTimeMillis()
            
            Log.d(TAG, "📡 HTTP: --> ${request.method} ${request.url}")
            
            val response = chain.proceed(request)
            val endTime = System.currentTimeMillis()
            val duration = endTime - startTime
            
            Log.d(TAG, "📡 HTTP: <-- ${response.code} ${request.url} (${duration}ms)")
            
            response
        }
    }
    
    /**
     * Generate unique request ID
     * Mimics the React Native implementation
     */
    private fun generateRequestId(): String {
        val timestamp = System.currentTimeMillis()
        val random = UUID.randomUUID().toString().substring(0, 9)
        return "$timestamp-$random"
    }
    
    /**
     * Test API connectivity
     */
    suspend fun testConnection(): Boolean {
        return try {
            Log.d(TAG, "📡 CONNECTIVITY: Testing API connection...")
            
            val request = Request.Builder()
                .url(getApiUrl() + "/health") // Assuming health endpoint exists
                .get()
                .build()
            
            client.newCall(request).execute().use { response ->
                val isHealthy = response.isSuccessful
                Log.d(TAG, "📡 CONNECTIVITY: API health check - ${if(isHealthy) "✅ Healthy" else "❌ Unhealthy"}")
                isHealthy
            }
        } catch (e: Exception) {
            Log.e(TAG, "📡 CONNECTIVITY: ❌ Connection test failed: ${e.message}", e)
            false
        }
    }
    
    /**
     * Check if authentication is valid
     */
    fun isAuthenticated(): Boolean {
        return tokenManager.isAuthenticated()
    }
    
    /**
     * Get current user ID
     */
    fun getCurrentUserId(): String? {
        return tokenManager.getUserId()
    }
    
    /**
     * Clear authentication and reset client state
     */
    fun clearAuth() {
        tokenManager.clearAuth()
        Log.d(TAG, "Authentication cleared from native client")
    }
}