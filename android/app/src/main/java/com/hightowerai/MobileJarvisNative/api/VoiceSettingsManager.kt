package com.hightowerai.MobileJarvisNative.api

import android.content.Context
import android.content.SharedPreferences
import android.database.sqlite.SQLiteDatabase
import android.util.Log
import org.json.JSONObject

/**
 * Manages voice settings including Deepgram configuration
 * Reads from SharedPreferences and React Native AsyncStorage
 */
class VoiceSettingsManager(private val context: Context) {
    
    companion object {
        private const val TAG = "VoiceSettingsManager"
        
        // SharedPreferences keys
        private const val DEEPGRAM_PREFS = "deepgram_prefs"
        private const val VOICE_SETTINGS_PREFS = "voice_settings"
        // Correct React Native AsyncStorage SharedPreferences name
        private const val ASYNC_STORAGE_PREFS = "RCTAsyncLocalStorage_V1"
        
        // Setting keys
        private const val KEY_DEEPGRAM_ENABLED = "deepgram_enabled"
        private const val KEY_SELECTED_VOICE = "selected_voice"
        private const val KEY_BASE_MODEL = "base_language_model"
        private const val KEY_GENERAL_INSTRUCTIONS = "general_instructions"
        private const val KEY_TIMEZONE = "timezone"
        private const val KEY_WAKE_WORD = "selected_wake_word"
        private const val KEY_WAKE_WORD_SENSITIVITY = "wake_word_sensitivity"
        private const val KEY_WAKE_WORD_ENABLED = "wake_word_detection_enabled"
        
        // AsyncStorage keys (from React Native) - exact match with React Native
        private const val ASYNC_VOICE_SETTINGS_KEY = "voice_settings"
        
        // Default values
        private const val DEFAULT_DEEPGRAM_VOICE = "aura-2-pandora-en"
        private const val DEFAULT_BASE_MODEL = "claude-sonnet-4-20250514"
        private const val DEFAULT_TIMEZONE = "UTC"
        private const val DEFAULT_WAKE_WORD = "Juniper"
        private const val DEFAULT_SENSITIVITY = 0.3f
        
        @Volatile
        private var instance: VoiceSettingsManager? = null
        
        fun getInstance(context: Context): VoiceSettingsManager {
            return instance ?: synchronized(this) {
                instance ?: VoiceSettingsManager(context.applicationContext).also { instance = it }
            }
        }
    }
    
    private val deepgramPrefs: SharedPreferences = 
        context.getSharedPreferences(DEEPGRAM_PREFS, Context.MODE_PRIVATE)
    
    private val voiceSettingsPrefs: SharedPreferences = 
        context.getSharedPreferences(VOICE_SETTINGS_PREFS, Context.MODE_PRIVATE)
    
    private val asyncStoragePrefs: SharedPreferences = 
        context.getSharedPreferences(ASYNC_STORAGE_PREFS, Context.MODE_PRIVATE)
    
    // AsyncStorage database access
    private fun getAsyncStorageDatabase(): SQLiteDatabase? {
        return try {
            val dbPath = context.getDatabasePath("RKStorage")
            if (dbPath.exists()) {
                SQLiteDatabase.openDatabase(dbPath.absolutePath, null, SQLiteDatabase.OPEN_READONLY)
            } else {
                val catalystPath = context.getDatabasePath("catalystLocalStorage")
                if (catalystPath.exists()) {
                    SQLiteDatabase.openDatabase(catalystPath.absolutePath, null, SQLiteDatabase.OPEN_READONLY)
                } else {
                    null
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "🔧 SETTINGS: Error opening AsyncStorage database: ${e.message}", e)
            null
        }
    }
    
    // Get value from AsyncStorage SQLite database
    private fun getAsyncStorageValue(key: String): String? {
        return try {
            Log.d(TAG, "🔧 SETTINGS: Getting AsyncStorage value for key: $key")
            
            // Try SQLite database first
            val sqliteValue = getValueFromDatabase(key)
            if (sqliteValue != null) {
                Log.d(TAG, "🔧 SETTINGS: Found value in AsyncStorage database")
                return sqliteValue
            }
            
            // Fallback to SharedPreferences
            val rawValue = asyncStoragePrefs.getString(key, null)
            if (!rawValue.isNullOrEmpty()) {
                Log.d(TAG, "🔧 SETTINGS: Found value in SharedPreferences fallback")
                return rawValue
            }
            
            Log.d(TAG, "🔧 SETTINGS: No value found for key: $key")
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔧 SETTINGS: Error getting AsyncStorage value: ${e.message}", e)
            null
        }
    }
    
    private fun getValueFromDatabase(key: String): String? {
        var db: SQLiteDatabase? = null
        return try {
            db = getAsyncStorageDatabase()
            if (db == null) return null
            
            val cursor = db.rawQuery("SELECT value FROM catalystLocalStorage WHERE key = ?", arrayOf(key))
            cursor.use {
                if (it.moveToFirst()) {
                    return it.getString(0)
                }
            }
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔧 SETTINGS: Error reading from database: ${e.message}", e)
            null
        } finally {
            try {
                db?.close()
            } catch (e: Exception) {
                Log.e(TAG, "🔧 SETTINGS: Error closing database: ${e.message}", e)
            }
        }
    }
    
    /**
     * Get complete voice settings
     */
    fun getVoiceSettings(): VoiceSettings {
        // Try to load from React Native AsyncStorage first
        val asyncSettings = loadFromAsyncStorage()
        
        // Fall back to SharedPreferences if AsyncStorage doesn't have settings
        return VoiceSettings(
            deepgramEnabled = asyncSettings?.deepgramEnabled 
                ?: getDeepgramEnabled(),
            selectedDeepgramVoice = asyncSettings?.selectedDeepgramVoice 
                ?: getSelectedVoice(),
            baseLanguageModel = asyncSettings?.baseLanguageModel 
                ?: getBaseLanguageModel(),
            generalInstructions = asyncSettings?.generalInstructions 
                ?: getGeneralInstructions(),
            timezone = asyncSettings?.timezone 
                ?: getTimezone()
        )
    }
    
    /**
     * Get Deepgram enabled state
     */
    fun getDeepgramEnabled(): Boolean {
        return deepgramPrefs.getBoolean(KEY_DEEPGRAM_ENABLED, false)
    }
    
    /**
     * Get selected Deepgram voice
     */
    fun getSelectedVoice(): String {
        return deepgramPrefs.getString(KEY_SELECTED_VOICE, DEFAULT_DEEPGRAM_VOICE) 
            ?: DEFAULT_DEEPGRAM_VOICE
    }
    
    /**
     * Get base language model
     */
    fun getBaseLanguageModel(): String {
        return voiceSettingsPrefs.getString(KEY_BASE_MODEL, DEFAULT_BASE_MODEL)
            ?: DEFAULT_BASE_MODEL
    }
    
    /**
     * Get general instructions
     */
    fun getGeneralInstructions(): String {
        return voiceSettingsPrefs.getString(KEY_GENERAL_INSTRUCTIONS, "") ?: ""
    }
    
    /**
     * Get timezone
     */
    fun getTimezone(): String {
        return voiceSettingsPrefs.getString(KEY_TIMEZONE, DEFAULT_TIMEZONE)
            ?: DEFAULT_TIMEZONE
    }
    
    /**
     * Get wake word settings
     */
    fun getWakeWordSettings(): Triple<String, Float, Boolean> {
        val wakeWord = voiceSettingsPrefs.getString(KEY_WAKE_WORD, DEFAULT_WAKE_WORD) 
            ?: DEFAULT_WAKE_WORD
        val sensitivity = voiceSettingsPrefs.getFloat(KEY_WAKE_WORD_SENSITIVITY, DEFAULT_SENSITIVITY)
        val enabled = voiceSettingsPrefs.getBoolean(KEY_WAKE_WORD_ENABLED, false)
        
        return Triple(wakeWord, sensitivity, enabled)
    }
    
    /**
     * Update Deepgram settings
     */
    fun updateDeepgramSettings(enabled: Boolean?, voice: String?) {
        deepgramPrefs.edit().apply {
            enabled?.let { putBoolean(KEY_DEEPGRAM_ENABLED, it) }
            voice?.let { putString(KEY_SELECTED_VOICE, it) }
            apply()
        }
        
        Log.d(TAG, "Deepgram settings updated - enabled: $enabled, voice: $voice")
    }
    
    /**
     * Update all voice settings
     */
    fun updateVoiceSettings(settings: VoiceSettings) {
        // Update Deepgram prefs
        deepgramPrefs.edit().apply {
            putBoolean(KEY_DEEPGRAM_ENABLED, settings.deepgramEnabled)
            putString(KEY_SELECTED_VOICE, settings.selectedDeepgramVoice)
            apply()
        }
        
        // Update general voice settings
        voiceSettingsPrefs.edit().apply {
            putString(KEY_BASE_MODEL, settings.baseLanguageModel)
            putString(KEY_GENERAL_INSTRUCTIONS, settings.generalInstructions)
            putString(KEY_TIMEZONE, settings.timezone)
            apply()
        }
        
        Log.d(TAG, "All voice settings updated")
    }
    
    /**
     * Load settings from React Native AsyncStorage
     */
    private fun loadFromAsyncStorage(): VoiceSettings? {
        return try {
            Log.d(TAG, "🔧 SETTINGS: Loading voice settings from AsyncStorage...")
            
            // Debug all AsyncStorage keys to understand what's available
            debugAsyncStorageKeys()
            
            val settingsJson = getAsyncStorageValue(ASYNC_VOICE_SETTINGS_KEY)
            
            if (!settingsJson.isNullOrEmpty()) {
                Log.d(TAG, "🔧 SETTINGS: Found voice settings in AsyncStorage")
                Log.d(TAG, "🔧 SETTINGS: Raw JSON: ${settingsJson.take(200)}${if(settingsJson.length > 200) "..." else ""}")
                
                // Parse the JSON string - handle React Native AsyncStorage format
                val json = if (settingsJson.startsWith("\"") && settingsJson.endsWith("\"")) {
                    // Remove outer quotes and unescape if double-stringified
                    val unquoted = settingsJson.substring(1, settingsJson.length - 1)
                        .replace("\\\"", "\"")
                    Log.d(TAG, "🔧 SETTINGS: Unescaped JSON: ${unquoted.take(200)}${if(unquoted.length > 200) "..." else ""}")
                    unquoted
                } else {
                    settingsJson
                }
                
                val settings = JSONObject(json)
                Log.d(TAG, "🔧 SETTINGS: Parsed JSON keys: ${settings.keys().asSequence().toList()}")
                
                val voiceSettings = VoiceSettings(
                    deepgramEnabled = settings.optBoolean("deepgramEnabled", false),
                    selectedDeepgramVoice = settings.optString("selectedDeepgramVoice", DEFAULT_DEEPGRAM_VOICE),
                    baseLanguageModel = settings.optString("baseLanguageModel", DEFAULT_BASE_MODEL),
                    generalInstructions = settings.optString("generalInstructions", ""),
                    timezone = settings.optString("timezone", DEFAULT_TIMEZONE)
                )
                
                Log.i(TAG, "🔧 SETTINGS: ✅ Loaded settings from AsyncStorage:")
                Log.d(TAG, "🔧 SETTINGS:   - Deepgram enabled: ${voiceSettings.deepgramEnabled}")
                Log.d(TAG, "🔧 SETTINGS:   - Selected voice: ${voiceSettings.selectedDeepgramVoice}")
                Log.d(TAG, "🔧 SETTINGS:   - Base model: ${voiceSettings.baseLanguageModel}")
                Log.d(TAG, "🔧 SETTINGS:   - Timezone: ${voiceSettings.timezone}")
                
                return voiceSettings
            }
            
            Log.w(TAG, "🔧 SETTINGS: No voice settings found in AsyncStorage")
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔧 SETTINGS: ❌ Error loading settings from AsyncStorage: ${e.message}", e)
            null
        }
    }
    
    /**
     * Debug AsyncStorage keys to understand what's stored
     */
    private fun debugAsyncStorageKeys() {
        try {
            // Check SharedPreferences
            val allKeys = asyncStoragePrefs.all.keys
            Log.d(TAG, "🔧 SETTINGS_DEBUG: Total SharedPreferences keys: ${allKeys.size}")
            
            if (allKeys.isNotEmpty()) {
                val voiceKeys = allKeys.filter { 
                    it.contains("voice", ignoreCase = true) || 
                    it.contains("deepgram", ignoreCase = true) ||
                    it.contains("settings", ignoreCase = true)
                }
                
                Log.d(TAG, "🔧 SETTINGS_DEBUG: SharedPreferences voice/settings keys (${voiceKeys.size}):")
                voiceKeys.forEach { key ->
                    val value = asyncStoragePrefs.getString(key, null)
                    val preview = value?.take(150) ?: "null"
                    Log.d(TAG, "🔧 SETTINGS_DEBUG:   $key = ${preview}${if(value != null && value.length > 150) "..." else ""}")
                }
            }
            
            // Check AsyncStorage SQLite database
            debugAsyncStorageDatabase()
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 SETTINGS_DEBUG: Error debugging AsyncStorage keys: ${e.message}", e)
        }
    }
    
    /**
     * Debug AsyncStorage SQLite database for voice settings
     */
    private fun debugAsyncStorageDatabase() {
        var db: SQLiteDatabase? = null
        try {
            Log.d(TAG, "🔧 SETTINGS_DEBUG: Checking AsyncStorage SQLite database...")
            
            db = getAsyncStorageDatabase()
            if (db == null) {
                Log.d(TAG, "🔧 SETTINGS_DEBUG: No AsyncStorage database available")
                return
            }
            
            // Get all keys from the database
            val cursor = db.rawQuery("SELECT key FROM catalystLocalStorage", null)
            val keys = mutableListOf<String>()
            
            cursor.use {
                while (it.moveToNext()) {
                    keys.add(it.getString(0))
                }
            }
            
            Log.d(TAG, "🔧 SETTINGS_DEBUG: Total AsyncStorage database keys: ${keys.size}")
            
            // Filter for voice/settings keys
            val voiceKeys = keys.filter { 
                it.contains("voice", ignoreCase = true) || 
                it.contains("deepgram", ignoreCase = true) ||
                it.contains("settings", ignoreCase = true)
            }
            
            Log.d(TAG, "🔧 SETTINGS_DEBUG: Voice/settings keys in database (${voiceKeys.size}):")
            voiceKeys.forEach { key ->
                val value = getValueFromDatabase(key)
                val preview = value?.take(150) ?: "null"
                Log.d(TAG, "🔧 SETTINGS_DEBUG:   $key = ${preview}${if(value != null && value.length > 150) "..." else ""}")
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 SETTINGS_DEBUG: Error debugging AsyncStorage database: ${e.message}", e)
        } finally {
            try {
                db?.close()
            } catch (e: Exception) {
                Log.e(TAG, "🔧 SETTINGS_DEBUG: Error closing debug database: ${e.message}", e)
            }
        }
    }
    
    /**
     * Sync settings from database (user_profiles table)
     * This would be called when React Native updates settings
     */
    fun syncFromDatabase(
        deepgramEnabled: Boolean,
        selectedDeepgramVoice: String,
        baseLanguageModel: String,
        generalInstructions: String,
        timezone: String
    ) {
        val settings = VoiceSettings(
            deepgramEnabled = deepgramEnabled,
            selectedDeepgramVoice = selectedDeepgramVoice,
            baseLanguageModel = baseLanguageModel,
            generalInstructions = generalInstructions,
            timezone = timezone
        )
        
        updateVoiceSettings(settings)
        Log.d(TAG, "Settings synced from database")
    }
    
    /**
     * Clear all voice settings
     */
    fun clearSettings() {
        deepgramPrefs.edit().clear().apply()
        voiceSettingsPrefs.edit().clear().apply()
        Log.d(TAG, "All voice settings cleared")
    }
    
    /**
     * Log current settings for debugging
     */
    fun logCurrentSettings() {
        val settings = getVoiceSettings()
        Log.d(TAG, """
            Current Voice Settings:
            - Deepgram Enabled: ${settings.deepgramEnabled}
            - Selected Voice: ${settings.selectedDeepgramVoice}
            - Base Model: ${settings.baseLanguageModel}
            - General Instructions: ${settings.generalInstructions.take(50)}...
            - Timezone: ${settings.timezone}
        """.trimIndent())
    }
}