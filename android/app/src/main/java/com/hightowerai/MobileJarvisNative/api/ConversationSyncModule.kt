package com.hightowerai.MobileJarvisNative.api

import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.google.gson.Gson
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach

/**
 * ConversationSyncModule - React Native bridge for syncing background conversations
 * 
 * Provides React Native access to background conversation data and synchronization
 */
class ConversationSyncModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    private val TAG = "ConversationSyncModule"
    private val moduleScope = CoroutineScope(SupervisorJob() + Dispatchers.Main)
    private val gson = Gson()
    private var isListening = false
    
    override fun getName(): String {
        return "ConversationSyncModule"
    }
    
    override fun initialize() {
        super.initialize()
        Log.i(TAG, "📱 SYNC_MODULE: Module initialized")
        startListeningToConversationUpdates()
    }
    
    override fun onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy()
        Log.i(TAG, "📱 SYNC_MODULE: Module destroyed")
        stopListeningToConversationUpdates()
    }
    
    /**
     * Get all pending background conversations
     */
    @ReactMethod
    fun getPendingConversations(promise: Promise) {
        try {
            Log.d(TAG, "📱 SYNC_MODULE: getPendingConversations called")
            
            val conversationManager = BackgroundConversationManager.getInstance(reactApplicationContext)
            val pendingConversations = conversationManager.getPendingSyncConversations()
            
            // Convert to WritableArray for React Native
            val result = Arguments.createArray()
            
            pendingConversations.forEach { conversation ->
                val conversationMap = Arguments.createMap().apply {
                    putString("id", conversation.id)
                    putString("userMessage", conversation.userMessage)
                    putString("assistantResponse", conversation.assistantResponse)
                    putDouble("userTimestamp", conversation.userTimestamp.toDouble())
                    putDouble("responseTimestamp", conversation.responseTimestamp.toDouble())
                    putBoolean("synced", conversation.synced)
                    
                    // Add voice metadata
                    val voiceMetadataMap = Arguments.createMap().apply {
                        putBoolean("deepgramEnabled", conversation.voiceMetadata.deepgramEnabled)
                        putString("voiceUsed", conversation.voiceMetadata.voiceUsed)
                        putString("ttsProvider", conversation.voiceMetadata.ttsProvider)
                    }
                    putMap("voiceMetadata", voiceMetadataMap)
                    
                    conversation.error?.let { putString("error", it) }
                }
                
                result.pushMap(conversationMap)
            }
            
            Log.d(TAG, "📱 SYNC_MODULE: Returning ${pendingConversations.size} pending conversations")
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 SYNC_MODULE: Error getting pending conversations: ${e.message}", e)
            promise.reject("SYNC_ERROR", "Failed to get pending conversations: ${e.message}", e)
        }
    }
    
    /**
     * Mark conversations as synced
     */
    @ReactMethod
    fun markConversationsAsSynced(conversationIds: ReadableArray, promise: Promise) {
        try {
            Log.d(TAG, "📱 SYNC_MODULE: markConversationsAsSynced called")
            
            val ids = mutableListOf<String>()
            for (i in 0 until conversationIds.size()) {
                conversationIds.getString(i)?.let { ids.add(it) }
            }
            
            val conversationManager = BackgroundConversationManager.getInstance(reactApplicationContext)
            conversationManager.markConversationsAsSynced(ids)
            
            Log.d(TAG, "📱 SYNC_MODULE: ✅ Marked ${ids.size} conversations as synced")
            promise.resolve(true)
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 SYNC_MODULE: Error marking conversations as synced: ${e.message}", e)
            promise.reject("SYNC_ERROR", "Failed to mark conversations as synced: ${e.message}", e)
        }
    }
    
    /**
     * Sync conversation history from React Native
     */
    @ReactMethod
    fun syncHistoryFromReactNative(historyArray: ReadableArray, promise: Promise) {
        try {
            Log.d(TAG, "📱 SYNC_MODULE: syncHistoryFromReactNative called with ${historyArray.size()} entries")
            
            val history = mutableListOf<HistoryMessage>()
            
            for (i in 0 until historyArray.size()) {
                val historyItem = historyArray.getMap(i)
                
                historyItem?.let { item ->
                    val message = HistoryMessage(
                        role = item.getString("role") ?: "user",
                        content = item.getString("content") ?: "",
                        timestamp = item.getDouble("timestamp").toLong(),
                        type = item.getString("type") ?: "text"
                    )
                    history.add(message)
                }
            }
            
            val conversationManager = BackgroundConversationManager.getInstance(reactApplicationContext)
            conversationManager.syncHistoryFromReactNative(history)
            
            Log.i(TAG, "📱 SYNC_MODULE: ✅ History synced from React Native")
            promise.resolve(true)
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 SYNC_MODULE: Error syncing history from React Native: ${e.message}", e)
            promise.reject("SYNC_ERROR", "Failed to sync history: ${e.message}", e)
        }
    }
    
    /**
     * Get background conversation debug info
     */
    @ReactMethod
    fun getDebugInfo(promise: Promise) {
        try {
            val conversationManager = BackgroundConversationManager.getInstance(reactApplicationContext)
            val debugInfo = conversationManager.getDebugInfo()
            
            val result = Arguments.createMap()
            debugInfo.forEach { (key, value) ->
                when (value) {
                    is String -> result.putString(key, value)
                    is Int -> result.putInt(key, value)
                    is Boolean -> result.putBoolean(key, value)
                    is Long -> result.putDouble(key, value.toDouble())
                    is Double -> result.putDouble(key, value)
                    else -> result.putString(key, value.toString())
                }
            }
            
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 SYNC_MODULE: Error getting debug info: ${e.message}", e)
            promise.reject("DEBUG_ERROR", "Failed to get debug info: ${e.message}", e)
        }
    }
    
    /**
     * Clear all background conversation data
     */
    @ReactMethod
    fun clearAllConversations(promise: Promise) {
        try {
            Log.d(TAG, "📱 SYNC_MODULE: clearAllConversations called")
            
            val conversationManager = BackgroundConversationManager.getInstance(reactApplicationContext)
            conversationManager.clearAll()
            
            Log.i(TAG, "📱 SYNC_MODULE: ✅ All conversations cleared")
            promise.resolve(true)
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 SYNC_MODULE: Error clearing conversations: ${e.message}", e)
            promise.reject("CLEAR_ERROR", "Failed to clear conversations: ${e.message}", e)
        }
    }
    
    /**
     * Start listening to conversation updates and emit events to React Native
     */
    private fun startListeningToConversationUpdates() {
        if (isListening) {
            Log.d(TAG, "📱 SYNC_MODULE: Already listening to conversation updates")
            return
        }
        
        Log.i(TAG, "📱 SYNC_MODULE: Starting to listen for conversation updates")
        isListening = true
        
        try {
            val conversationManager = BackgroundConversationManager.getInstance(reactApplicationContext)
            
            // Listen for pending conversation changes
            conversationManager.pendingSyncConversations
                .onEach { conversations ->
                    if (conversations.isNotEmpty()) {
                        Log.d(TAG, "📱 SYNC_MODULE: ${conversations.size} conversations pending sync")
                        
                        // Emit event to React Native about new background conversations
                        val params = Arguments.createMap()
                        params.putInt("count", conversations.size)
                        params.putDouble("timestamp", System.currentTimeMillis().toDouble())
                        
                        sendEvent("backgroundConversationsAvailable", params)
                    }
                }
                .launchIn(moduleScope)
            
            // Listen for processing state changes
            conversationManager.isProcessingBackground
                .onEach { isProcessing ->
                    Log.d(TAG, "📱 SYNC_MODULE: Background processing state: $isProcessing")
                    
                    val params = Arguments.createMap()
                    params.putBoolean("isProcessing", isProcessing)
                    params.putDouble("timestamp", System.currentTimeMillis().toDouble())
                    
                    sendEvent("backgroundProcessingStateChanged", params)
                }
                .launchIn(moduleScope)
                
            Log.i(TAG, "📱 SYNC_MODULE: ✅ Successfully started listening to conversation updates")
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 SYNC_MODULE: ❌ Error starting conversation listener: ${e.message}", e)
            isListening = false
        }
    }
    
    /**
     * Stop listening to conversation updates
     */
    private fun stopListeningToConversationUpdates() {
        if (!isListening) {
            return
        }
        
        Log.i(TAG, "📱 SYNC_MODULE: Stopping conversation listener")
        isListening = false
        
        try {
            moduleScope.cancel()
            Log.i(TAG, "📱 SYNC_MODULE: ✅ Conversation listener stopped")
        } catch (e: Exception) {
            Log.e(TAG, "📱 SYNC_MODULE: ❌ Error stopping conversation listener: ${e.message}", e)
        }
    }
    
    /**
     * Send event to React Native
     */
    private fun sendEvent(eventName: String, params: WritableMap?) {
        try {
            Log.d(TAG, "📡 SEND_EVENT: Attempting to send event '$eventName' to React Native")
            
            reactApplicationContext
                ?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                ?.emit(eventName, params)
                
            Log.d(TAG, "📡 SEND_EVENT: ✅ Event '$eventName' sent successfully")
        } catch (e: Exception) {
            Log.e(TAG, "📡 SEND_EVENT: ❌ Error sending event '$eventName': ${e.message}", e)
        }
    }
}