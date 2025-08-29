package com.hightowerai.MobileJarvisNative.api

import android.content.Context
import android.content.SharedPreferences
import android.database.sqlite.SQLiteDatabase
import android.util.Log
import org.json.JSONObject
import java.util.Base64

/**
 * Manages Supabase authentication tokens
 * Reads from React Native AsyncStorage (SharedPreferences) to get current auth state
 */
class SupabaseTokenManager(private val context: Context) {
    
    companion object {
        private const val TAG = "SupabaseTokenManager"
        // Correct React Native AsyncStorage SharedPreferences name
        private const val ASYNC_STORAGE_PREFS = "RCTAsyncLocalStorage_V1"
        private const val SUPABASE_AUTH_KEY = "supabase.auth.token"
        private const val SUPABASE_SESSION_KEY = "@supabase/auth-session"
        
        // Supabase v2 stores sessions with project-specific keys
        // Format: sb-[project-ref]-auth-token
        private const val SUPABASE_V2_SESSION_PREFIX = "sb-"
        private const val SUPABASE_V2_SESSION_SUFFIX = "-auth-token"
        
        @Volatile
        private var instance: SupabaseTokenManager? = null
        
        fun getInstance(context: Context): SupabaseTokenManager {
            return instance ?: synchronized(this) {
                instance ?: SupabaseTokenManager(context.applicationContext).also { instance = it }
            }
        }
    }
    
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
            Log.e(TAG, "🔐 AUTH: Error opening AsyncStorage database: ${e.message}", e)
            null
        }
    }
    
    /**
     * Get the current access token from Supabase session
     * Returns null if no valid session exists
     */
    fun getAccessToken(): String? {
        return try {
            Log.d(TAG, "🔐 AUTH: Attempting to retrieve Supabase access token")
            
            // First, debug all AsyncStorage keys to understand what's stored
            debugAsyncStorageKeys()
            
            // Try Supabase v2 session format first (most likely)
            val v2Token = getSupabaseV2Session()
            if (v2Token != null) {
                Log.i(TAG, "🔐 AUTH: ✅ Found valid Supabase v2 session")
                return v2Token
            }
            
            // Try legacy session format
            val legacyToken = getLegacySupabaseSession()
            if (legacyToken != null) {
                Log.i(TAG, "🔐 AUTH: ✅ Found valid legacy Supabase session")
                return legacyToken
            }
            
            // Fallback: Try alternative storage key
            val alternativeToken = asyncStoragePrefs.getString(SUPABASE_AUTH_KEY, null)
            if (!alternativeToken.isNullOrEmpty()) {
                Log.i(TAG, "🔐 AUTH: ✅ Found token in alternative storage location")
                return alternativeToken
            }
            
            Log.w(TAG, "🔐 AUTH: ❌ No valid Supabase access token found anywhere")
            null
            
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: ❌ Error retrieving access token: ${e.message}", e)
            null
        }
    }
    
    /**
     * Get the current user ID from Supabase session
     */
    fun getUserId(): String? {
        return try {
            Log.d(TAG, "🔐 AUTH: Attempting to retrieve user ID")
            
            // Try Supabase v2 format first
            val v2UserId = getUserIdFromV2Session()
            if (v2UserId != null) {
                Log.i(TAG, "🔐 AUTH: ✅ Found user ID from v2 session: ${v2UserId.take(8)}...")
                return v2UserId
            }
            
            // Try legacy format
            val legacyUserId = getUserIdFromLegacySession()
            if (legacyUserId != null) {
                Log.i(TAG, "🔐 AUTH: ✅ Found user ID from legacy session: ${legacyUserId.take(8)}...")
                return legacyUserId
            }
            
            Log.w(TAG, "🔐 AUTH: ❌ No user ID found in any session format")
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: ❌ Error retrieving user ID: ${e.message}", e)
            null
        }
    }
    
    /**
     * Get user ID from Supabase v2 session
     */
    private fun getUserIdFromV2Session(): String? {
        var db: SQLiteDatabase? = null
        return try {
            Log.d(TAG, "🔐 AUTH: Getting user ID from Supabase v2 session...")
            
            db = getAsyncStorageDatabase()
            if (db == null) {
                Log.d(TAG, "🔐 AUTH: No AsyncStorage database available for user ID")
                return null
            }
            
            val cursor = db.rawQuery("SELECT key, value FROM catalystLocalStorage", null)
            
            cursor.use {
                while (it.moveToNext()) {
                    val key = it.getString(0)
                    val value = it.getString(1)
                    
                    if (key.startsWith(SUPABASE_V2_SESSION_PREFIX) && key.endsWith(SUPABASE_V2_SESSION_SUFFIX)) {
                        try {
                            val session = JSONObject(value)
                            val user = session.optJSONObject("user")
                            val userId = user?.optString("id", null)
                            
                            if (!userId.isNullOrEmpty()) {
                                Log.d(TAG, "🔐 AUTH: ✅ Found user ID from v2 session")
                                return userId
                            }
                        } catch (jsonError: Exception) {
                            Log.e(TAG, "🔐 AUTH: Error parsing user from session: ${jsonError.message}")
                            continue
                        }
                    }
                }
            }
            
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: Error getting user ID from v2 session: ${e.message}", e)
            null
        } finally {
            try {
                db?.close()
            } catch (e: Exception) {
                Log.e(TAG, "🔐 AUTH: Error closing user ID database: ${e.message}", e)
            }
        }
    }
    
    /**
     * Get user ID from legacy session
     */
    private fun getUserIdFromLegacySession(): String? {
        return try {
            val sessionJson = getAsyncStorageValue(SUPABASE_SESSION_KEY)
            
            if (sessionJson != null) {
                val session = JSONObject(sessionJson)
                val user = session.optJSONObject("user")
                return user?.optString("id", null)
            }
            
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: Error getting user ID from legacy session: ${e.message}", e)
            null
        }
    }
    
    /**
     * Refresh the access token using the refresh token
     * Note: This is a simplified version - full implementation would need
     * to call Supabase refresh endpoint
     */
    private fun refreshToken(session: JSONObject): String? {
        return try {
            val refreshToken = session.optString("refresh_token", null)
            
            if (!refreshToken.isNullOrEmpty()) {
                Log.d(TAG, "Attempting to refresh token")
                // TODO: Implement actual refresh logic with Supabase API
                // For now, return null to indicate refresh is needed
                Log.w(TAG, "Token refresh not yet implemented - user needs to re-authenticate")
            }
            
            null
        } catch (e: Exception) {
            Log.e(TAG, "Error refreshing token: ${e.message}", e)
            null
        }
    }
    
    /**
     * Get value from React Native AsyncStorage (SQLite database)
     * AsyncStorage values are stored in SQLite, not SharedPreferences
     */
    private fun getAsyncStorageValue(key: String): String? {
        return try {
            Log.d(TAG, "🔐 AUTH: Getting AsyncStorage value for key: $key")
            
            // Try SQLite database first (modern AsyncStorage)
            val sqliteValue = getValueFromAsyncStorageDatabase(key)
            if (sqliteValue != null) {
                Log.d(TAG, "🔐 AUTH: Found value in AsyncStorage SQLite database")
                return sqliteValue
            }
            
            // Fallback to SharedPreferences (legacy or alternative storage)
            val rawValue = asyncStoragePrefs.getString(key, null)
            
            if (!rawValue.isNullOrEmpty()) {
                Log.d(TAG, "🔐 AUTH: Found value in SharedPreferences fallback")
                // AsyncStorage might double-stringify JSON, so we need to handle that
                if (rawValue.startsWith("\"") && rawValue.endsWith("\"")) {
                    // Remove outer quotes and unescape
                    val unquoted = rawValue.substring(1, rawValue.length - 1)
                    return unquoted.replace("\\\"", "\"")
                }
                return rawValue
            }
            
            Log.d(TAG, "🔐 AUTH: No value found for key: $key")
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: Error reading AsyncStorage value for key $key: ${e.message}", e)
            null
        }
    }
    
    /**
     * Get value from AsyncStorage SQLite database
     */
    private fun getValueFromAsyncStorageDatabase(key: String): String? {
        var db: SQLiteDatabase? = null
        return try {
            db = getAsyncStorageDatabase()
            if (db == null) {
                Log.d(TAG, "🔐 AUTH: No AsyncStorage database found")
                return null
            }
            
            Log.d(TAG, "🔐 AUTH: Querying AsyncStorage database for key: $key")
            
            // AsyncStorage uses a table called 'catalystLocalStorage' with columns 'key' and 'value'
            val cursor = db.rawQuery(
                "SELECT value FROM catalystLocalStorage WHERE key = ?", 
                arrayOf(key)
            )
            
            cursor.use {
                if (it.moveToFirst()) {
                    val value = it.getString(0)
                    Log.d(TAG, "🔐 AUTH: ✅ Found value in AsyncStorage database")
                    return value
                } else {
                    Log.d(TAG, "🔐 AUTH: Key not found in AsyncStorage database")
                    return null
                }
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: Error reading from AsyncStorage database: ${e.message}", e)
            null
        } finally {
            try {
                db?.close()
            } catch (e: Exception) {
                Log.e(TAG, "🔐 AUTH: Error closing database: ${e.message}", e)
            }
        }
    }
    
    /**
     * Save token to SharedPreferences (for backup/cache)
     */
    fun cacheToken(token: String) {
        try {
            asyncStoragePrefs.edit()
                .putString(SUPABASE_AUTH_KEY, token)
                .apply()
            Log.d(TAG, "Token cached successfully")
        } catch (e: Exception) {
            Log.e(TAG, "Error caching token: ${e.message}", e)
        }
    }
    
    /**
     * Clear all authentication data
     */
    fun clearAuth() {
        try {
            asyncStoragePrefs.edit()
                .remove(SUPABASE_AUTH_KEY)
                .remove(SUPABASE_SESSION_KEY)
                .apply()
            Log.d(TAG, "Authentication data cleared")
        } catch (e: Exception) {
            Log.e(TAG, "Error clearing auth data: ${e.message}", e)
        }
    }
    
    /**
     * Check if user is authenticated
     */
    fun isAuthenticated(): Boolean {
        return getAccessToken() != null
    }
    
    /**
     * Get authorization header value
     */
    fun getAuthorizationHeader(): String? {
        val token = getAccessToken()
        return if (token != null) {
            "Bearer $token"
        } else {
            null
        }
    }
    
    /**
     * Get Supabase v2 session token
     * Supabase v2 stores sessions with project-specific keys like "sb-[project-ref]-auth-token"
     */
    private fun getSupabaseV2Session(): String? {
        var db: SQLiteDatabase? = null
        return try {
            Log.d(TAG, "🔐 AUTH: Searching for Supabase v2 session in AsyncStorage database...")
            
            db = getAsyncStorageDatabase()
            if (db == null) {
                Log.d(TAG, "🔐 AUTH: No AsyncStorage database available for v2 session")
                return null
            }
            
            // Get all keys from database and find Supabase v2 session keys
            val cursor = db.rawQuery("SELECT key, value FROM catalystLocalStorage", null)
            
            cursor.use {
                while (it.moveToNext()) {
                    val key = it.getString(0)
                    val value = it.getString(1)
                    
                    Log.d(TAG, "🔐 AUTH: Checking key: $key")
                    
                    if (key.startsWith(SUPABASE_V2_SESSION_PREFIX) && key.endsWith(SUPABASE_V2_SESSION_SUFFIX)) {
                        Log.d(TAG, "🔐 AUTH: Found Supabase v2 session key in database: $key")
                        Log.d(TAG, "🔐 AUTH: Raw value: ${value.take(100)}...")
                        
                        try {
                            Log.d(TAG, "🔐 AUTH: Parsing session JSON...")
                            val session = JSONObject(value)
                            val accessToken = session.optString("access_token", null)
                            
                            Log.d(TAG, "🔐 AUTH: Access token found: ${!accessToken.isNullOrEmpty()}")
                            
                            if (!accessToken.isNullOrEmpty()) {
                                Log.d(TAG, "🔐 AUTH: ✅ Found access token in v2 session")
                                
                                // Check expiration
                                val expiresAt = session.optLong("expires_at", 0)
                                val currentTime = System.currentTimeMillis() / 1000
                                
                                Log.d(TAG, "🔐 AUTH: Token expiry check - expires_at: $expiresAt, current: $currentTime")
                                
                                if (expiresAt > 0 && currentTime >= expiresAt) {
                                    Log.w(TAG, "🔐 AUTH: Supabase v2 token is expired")
                                    continue // Try next key
                                }
                                
                                Log.i(TAG, "🔐 AUTH: ✅ Successfully retrieved valid Supabase v2 access token")
                                return accessToken
                            } else {
                                Log.w(TAG, "🔐 AUTH: Access token is null or empty")
                            }
                        } catch (jsonError: Exception) {
                            Log.e(TAG, "🔐 AUTH: Error parsing session JSON for key $key: ${jsonError.message}")
                            Log.e(TAG, "🔐 AUTH: Problematic JSON: ${value.take(200)}")
                            continue
                        }
                    }
                }
            }
            
            Log.d(TAG, "🔐 AUTH: No valid Supabase v2 session found in database")
            null
            
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: Error getting Supabase v2 session from database: ${e.message}", e)
            null
        } finally {
            try {
                db?.close()
            } catch (e: Exception) {
                Log.e(TAG, "🔐 AUTH: Error closing v2 session database: ${e.message}", e)
            }
        }
    }
    
    /**
     * Get legacy Supabase session token
     */
    private fun getLegacySupabaseSession(): String? {
        return try {
            Log.d(TAG, "🔐 AUTH: Trying legacy Supabase session format...")
            
            val sessionJson = getAsyncStorageValue(SUPABASE_SESSION_KEY)
            
            if (sessionJson != null) {
                Log.d(TAG, "🔐 AUTH: Found legacy Supabase session")
                val session = JSONObject(sessionJson)
                
                val accessToken = session.optString("access_token", null)
                
                if (!accessToken.isNullOrEmpty()) {
                    Log.d(TAG, "🔐 AUTH: Found access token in legacy session")
                    
                    // Check if token is expired
                    val expiresAt = session.optLong("expires_at", 0)
                    val currentTime = System.currentTimeMillis() / 1000
                    
                    if (expiresAt > 0 && currentTime >= expiresAt) {
                        Log.w(TAG, "🔐 AUTH: Legacy token is expired")
                        return null
                    }
                    
                    return accessToken
                }
            }
            
            null
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH: Error getting legacy session: ${e.message}", e)
            null
        }
    }
    
    /**
     * Debug AsyncStorage keys to understand storage format
     */
    private fun debugAsyncStorageKeys() {
        try {
            // Check SharedPreferences first
            val allKeys = asyncStoragePrefs.all.keys
            Log.d(TAG, "🔐 AUTH_DEBUG: Total SharedPreferences keys: ${allKeys.size}")
            
            if (allKeys.isNotEmpty()) {
                val supabaseKeys = allKeys.filter { 
                    it.contains("supabase", ignoreCase = true) || 
                    it.contains("auth", ignoreCase = true) ||
                    it.startsWith("sb-")
                }
                
                Log.d(TAG, "🔐 AUTH_DEBUG: SharedPreferences Supabase/auth related keys (${supabaseKeys.size}):")
                supabaseKeys.forEach { key ->
                    val value = asyncStoragePrefs.getString(key, null)
                    val preview = value?.take(100) ?: "null"
                    Log.d(TAG, "🔐 AUTH_DEBUG:   $key = ${preview}${if(value != null && value.length > 100) "..." else ""}")
                }
            }
            
            // Check AsyncStorage SQLite database
            debugAsyncStorageDatabase()
            
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH_DEBUG: Error debugging AsyncStorage keys: ${e.message}", e)
        }
    }
    
    /**
     * Debug AsyncStorage SQLite database contents
     */
    private fun debugAsyncStorageDatabase() {
        var db: SQLiteDatabase? = null
        try {
            Log.d(TAG, "🔐 AUTH_DEBUG: Checking AsyncStorage SQLite databases...")
            
            // Check both possible database locations
            val rkPath = context.getDatabasePath("RKStorage")
            val catalystPath = context.getDatabasePath("catalystLocalStorage")
            
            Log.d(TAG, "🔐 AUTH_DEBUG: RKStorage exists: ${rkPath.exists()}")
            Log.d(TAG, "🔐 AUTH_DEBUG: CatalystStorage exists: ${catalystPath.exists()}")
            
            db = getAsyncStorageDatabase()
            if (db == null) {
                Log.d(TAG, "🔐 AUTH_DEBUG: No AsyncStorage database available")
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
            
            Log.d(TAG, "🔐 AUTH_DEBUG: Total AsyncStorage database keys: ${keys.size}")
            
            // Filter for auth-related keys
            val authKeys = keys.filter { 
                it.contains("supabase", ignoreCase = true) || 
                it.contains("auth", ignoreCase = true) ||
                it.startsWith("sb-")
            }
            
            Log.d(TAG, "🔐 AUTH_DEBUG: Auth-related keys in database (${authKeys.size}):")
            authKeys.forEach { key ->
                val value = getValueFromAsyncStorageDatabase(key)
                val preview = value?.take(100) ?: "null"
                Log.d(TAG, "🔐 AUTH_DEBUG:   $key = ${preview}${if(value != null && value.length > 100) "..." else ""}")
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "🔐 AUTH_DEBUG: Error debugging AsyncStorage database: ${e.message}", e)
        } finally {
            try {
                db?.close()
            } catch (e: Exception) {
                Log.e(TAG, "🔐 AUTH_DEBUG: Error closing debug database: ${e.message}", e)
            }
        }
    }
}