package com.hightowerai.MobileJarvisNative.api

import android.content.Context
import android.util.Log
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import java.util.*

/**
 * Manages conversation state during background operation
 * Stores conversations and syncs with React Native when app returns to foreground
 */
class BackgroundConversationManager private constructor(private val context: Context) {
    
    companion object {
        private const val TAG = "BackgroundConversationManager"
        private const val PREFS_NAME = "background_conversations"
        private const val KEY_CONVERSATIONS = "conversations"
        private const val KEY_CONVERSATION_HISTORY = "conversation_history"
        private const val MAX_STORED_CONVERSATIONS = 50
        private const val MAX_HISTORY_ENTRIES = 20
        
        @Volatile
        private var instance: BackgroundConversationManager? = null
        
        fun getInstance(context: Context): BackgroundConversationManager {
            return instance ?: synchronized(this) {
                instance ?: BackgroundConversationManager(context.applicationContext).also { instance = it }
            }
        }
    }
    
    private val gson = Gson()
    private val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
    private val managerScope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
    
    // Current conversation state
    private val _conversationHistory = MutableStateFlow<List<HistoryMessage>>(emptyList())
    val conversationHistory: StateFlow<List<HistoryMessage>> = _conversationHistory.asStateFlow()
    
    private val _pendingSyncConversations = MutableStateFlow<List<BackgroundConversation>>(emptyList())
    val pendingSyncConversations: StateFlow<List<BackgroundConversation>> = _pendingSyncConversations.asStateFlow()
    
    private val _isProcessingBackground = MutableStateFlow(false)
    val isProcessingBackground: StateFlow<Boolean> = _isProcessingBackground.asStateFlow()
    
    init {
        loadStoredData()
        Log.i(TAG, "📱 BACKGROUND_CONV: BackgroundConversationManager initialized")
    }
    
    /**
     * Store a completed conversation interaction
     */
    fun storeInteraction(
        userMessage: String,
        apiResponse: ChatResponse,
        voiceMetadata: VoiceMetadata
    ) {
        managerScope.launch {
            try {
                Log.i(TAG, "📱 STORE_INTERACTION: ========== STORING BACKGROUND INTERACTION ==========")
                Log.d(TAG, "📱 STORE_INTERACTION: User message: '${userMessage.take(50)}...'")
                Log.d(TAG, "📱 STORE_INTERACTION: Assistant response: '${apiResponse.response.take(50)}...'")
                Log.d(TAG, "📱 STORE_INTERACTION: Voice metadata: ${gson.toJson(voiceMetadata)}")
                
                val conversation = BackgroundConversation(
                    id = UUID.randomUUID().toString(),
                    userMessage = userMessage,
                    assistantResponse = apiResponse.response,
                    userTimestamp = System.currentTimeMillis(),
                    responseTimestamp = apiResponse.timestamp,
                    voiceMetadata = voiceMetadata,
                    synced = false
                )
                
                // Add to pending sync list
                val currentPending = _pendingSyncConversations.value.toMutableList()
                currentPending.add(conversation)
                
                // Keep only the most recent conversations
                if (currentPending.size > MAX_STORED_CONVERSATIONS) {
                    currentPending.removeAt(0)
                }
                
                _pendingSyncConversations.value = currentPending
                
                // Update conversation history for next API call
                updateConversationHistory(userMessage, apiResponse.response, voiceMetadata)
                
                // Persist to storage
                persistConversations()
                
                Log.i(TAG, "📱 STORE_INTERACTION: ✅ Background interaction stored successfully")
                Log.d(TAG, "📱 STORE_INTERACTION: Total pending conversations: ${currentPending.size}")
                Log.d(TAG, "📱 STORE_INTERACTION: Current history length: ${_conversationHistory.value.size}")
                
            } catch (e: Exception) {
                Log.e(TAG, "📱 STORE_INTERACTION: ❌ Error storing interaction: ${e.message}", e)
            }
        }
    }
    
    /**
     * Update conversation history for API context
     */
    private fun updateConversationHistory(
        userMessage: String,
        assistantResponse: String,
        voiceMetadata: VoiceMetadata
    ) {
        val currentHistory = _conversationHistory.value.toMutableList()
        val timestamp = System.currentTimeMillis()
        
        // Add user message
        currentHistory.add(
            HistoryMessage(
                role = "user",
                content = userMessage,
                timestamp = timestamp,
                type = "text"
            )
        )
        
        // Add assistant response
        currentHistory.add(
            HistoryMessage(
                role = "assistant",
                content = assistantResponse,
                timestamp = timestamp,
                type = "text"
            )
        )
        
        // Keep only recent history
        while (currentHistory.size > MAX_HISTORY_ENTRIES) {
            currentHistory.removeAt(0)
        }
        
        _conversationHistory.value = currentHistory
        Log.d(TAG, "📱 CONV_HISTORY: Updated conversation history (${currentHistory.size} entries)")
    }
    
    /**
     * Get current conversation history for API calls
     */
    fun getCurrentHistory(): List<HistoryMessage> {
        return _conversationHistory.value
    }
    
    /**
     * Mark conversation as currently processing
     */
    fun setProcessingState(isProcessing: Boolean) {
        _isProcessingBackground.value = isProcessing
        Log.d(TAG, "📱 PROCESSING_STATE: Background processing: $isProcessing")
    }
    
    /**
     * Get all conversations pending sync with React Native
     */
    fun getPendingSyncConversations(): List<BackgroundConversation> {
        return _pendingSyncConversations.value
    }
    
    /**
     * Mark conversations as synced
     */
    fun markConversationsAsSynced(conversationIds: List<String>) {
        managerScope.launch {
            try {
                val currentPending = _pendingSyncConversations.value.toMutableList()
                val updated = currentPending.map { conversation ->
                    if (conversation.id in conversationIds) {
                        conversation.copy(synced = true)
                    } else {
                        conversation
                    }
                }
                
                // Remove synced conversations after some time
                val filtered = updated.filterNot { it.synced }
                _pendingSyncConversations.value = filtered
                
                persistConversations()
                
                Log.d(TAG, "📱 SYNC: Marked ${conversationIds.size} conversations as synced")
                Log.d(TAG, "📱 SYNC: Remaining pending: ${filtered.size}")
                
            } catch (e: Exception) {
                Log.e(TAG, "📱 SYNC: Error marking conversations as synced: ${e.message}", e)
            }
        }
    }
    
    /**
     * Clear all conversation data
     */
    fun clearAll() {
        managerScope.launch {
            _conversationHistory.value = emptyList()
            _pendingSyncConversations.value = emptyList()
            _isProcessingBackground.value = false
            
            prefs.edit().clear().apply()
            
            Log.i(TAG, "📱 CLEAR: All conversation data cleared")
        }
    }
    
    /**
     * Sync conversation history from React Native
     * Called when app comes to foreground
     */
    fun syncHistoryFromReactNative(history: List<HistoryMessage>) {
        managerScope.launch {
            try {
                Log.d(TAG, "📱 SYNC_FROM_RN: Syncing ${history.size} history entries from React Native")
                
                // Merge with existing background history
                val mergedHistory = mergeHistoryEntries(_conversationHistory.value, history)
                _conversationHistory.value = mergedHistory
                
                persistConversationHistory()
                
                Log.i(TAG, "📱 SYNC_FROM_RN: ✅ History synced from React Native (${mergedHistory.size} total entries)")
                
            } catch (e: Exception) {
                Log.e(TAG, "📱 SYNC_FROM_RN: ❌ Error syncing from React Native: ${e.message}", e)
            }
        }
    }
    
    /**
     * Merge history entries by timestamp, avoiding duplicates
     */
    private fun mergeHistoryEntries(
        backgroundHistory: List<HistoryMessage>,
        reactNativeHistory: List<HistoryMessage>
    ): List<HistoryMessage> {
        val allEntries = (backgroundHistory + reactNativeHistory).distinctBy { 
            "${it.role}:${it.content}:${it.timestamp}" 
        }
        return allEntries.sortedBy { it.timestamp }.takeLast(MAX_HISTORY_ENTRIES)
    }
    
    /**
     * Load stored data from SharedPreferences
     */
    private fun loadStoredData() {
        try {
            // Load pending conversations
            val conversationsJson = prefs.getString(KEY_CONVERSATIONS, null)
            if (!conversationsJson.isNullOrEmpty()) {
                val type = object : TypeToken<List<BackgroundConversation>>() {}.type
                val conversations = gson.fromJson<List<BackgroundConversation>>(conversationsJson, type)
                _pendingSyncConversations.value = conversations.filter { !it.synced }
            }
            
            // Load conversation history
            val historyJson = prefs.getString(KEY_CONVERSATION_HISTORY, null)
            if (!historyJson.isNullOrEmpty()) {
                val type = object : TypeToken<List<HistoryMessage>>() {}.type
                val history = gson.fromJson<List<HistoryMessage>>(historyJson, type)
                _conversationHistory.value = history
            }
            
            Log.d(TAG, "📱 LOAD: Loaded ${_pendingSyncConversations.value.size} pending conversations")
            Log.d(TAG, "📱 LOAD: Loaded ${_conversationHistory.value.size} history entries")
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 LOAD: Error loading stored data: ${e.message}", e)
        }
    }
    
    /**
     * Persist conversations to storage
     */
    private fun persistConversations() {
        try {
            val conversationsJson = gson.toJson(_pendingSyncConversations.value)
            prefs.edit()
                .putString(KEY_CONVERSATIONS, conversationsJson)
                .apply()
            
            Log.d(TAG, "📱 PERSIST: Conversations persisted to storage")
        } catch (e: Exception) {
            Log.e(TAG, "📱 PERSIST: Error persisting conversations: ${e.message}", e)
        }
    }
    
    /**
     * Persist conversation history to storage
     */
    private fun persistConversationHistory() {
        try {
            val historyJson = gson.toJson(_conversationHistory.value)
            prefs.edit()
                .putString(KEY_CONVERSATION_HISTORY, historyJson)
                .apply()
            
            Log.d(TAG, "📱 PERSIST_HISTORY: Conversation history persisted to storage")
        } catch (e: Exception) {
            Log.e(TAG, "📱 PERSIST_HISTORY: Error persisting history: ${e.message}", e)
        }
    }
    
    /**
     * Get debug information
     */
    fun getDebugInfo(): Map<String, Any> {
        return mapOf(
            "pendingConversations" to _pendingSyncConversations.value.size,
            "historyEntries" to _conversationHistory.value.size,
            "isProcessing" to _isProcessingBackground.value,
            "lastHistoryTimestamp" to (_conversationHistory.value.lastOrNull()?.timestamp ?: 0),
            "oldestPendingConversation" to (_pendingSyncConversations.value.firstOrNull()?.userTimestamp ?: 0)
        )
    }
    
    /**
     * Cleanup resources
     */
    fun cleanup() {
        managerScope.cancel()
        Log.i(TAG, "📱 CLEANUP: BackgroundConversationManager cleaned up")
    }
}