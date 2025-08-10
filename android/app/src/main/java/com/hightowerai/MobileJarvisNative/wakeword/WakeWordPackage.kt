package com.hightowerai.MobileJarvisNative.wakeword

import android.util.Log
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.NativeModule
import com.facebook.react.uimanager.ViewManager
import java.util.ArrayList

class WakeWordPackage : ReactPackage {
    private val TAG = "WakeWordPackage"
    
    init {
        Log.i(TAG, "📦 PACKAGE_INIT: ========== WAKE WORD PACKAGE CREATED ==========")
        Log.i(TAG, "📦 PACKAGE_INIT: Creation timestamp: ${System.currentTimeMillis()}")
        Log.i(TAG, "📦 PACKAGE_INIT: Thread: ${Thread.currentThread().name}")
        Log.i(TAG, "📦 PACKAGE_INIT: ====================================================")
    }
    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        Log.i(TAG, "📦 PACKAGE_INIT: createViewManagers called")
        return emptyList()
    }

    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        Log.i(TAG, "📦 PACKAGE_INIT: ========== CREATE NATIVE MODULES CALLED ==========")
        Log.i(TAG, "📦 PACKAGE_INIT: ReactApplicationContext available: ${reactContext != null}")
        Log.i(TAG, "📦 PACKAGE_INIT: Creating WakeWordModule...")
        
        val modules = ArrayList<NativeModule>()
        try {
            val wakeWordModule = WakeWordModule(reactContext)
            modules.add(wakeWordModule)
            Log.i(TAG, "📦 PACKAGE_INIT: ✅ WakeWordModule created and added successfully")
        } catch (e: Exception) {
            Log.e(TAG, "📦 PACKAGE_INIT: ❌ Error creating WakeWordModule: ${e.message}", e)
        }
        
        Log.i(TAG, "📦 PACKAGE_INIT: Total modules created: ${modules.size}")
        Log.i(TAG, "📦 PACKAGE_INIT: ====================================================")
        return modules
    }
} 