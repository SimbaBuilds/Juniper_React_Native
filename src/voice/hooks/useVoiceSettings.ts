import { useState, useEffect, useCallback } from 'react';
import { Storage } from '../../utils/storage';
import { VoiceSettings } from '../../settings/SettingsScreen';
import VoiceService from '../VoiceService';
import WakeWordService from '../../wakeword/WakeWordService';
import { DatabaseService } from '../../supabase/supabase';
import { useAuth } from '../../auth/AuthContext';
import { DEFAULT_WAKE_PHRASE } from '../../wakeword/constants';
import { Platform } from 'react-native';

const VOICE_SETTINGS_KEY = 'voice_settings';

const defaultVoiceSettings: VoiceSettings = {
  deepgramEnabled: false,
  baseLanguageModel: 'claude-sonnet-4-20250514',
  generalInstructions: '',
  selectedWakeWord: DEFAULT_WAKE_PHRASE,
  wakeWordSensitivity: 0.3,
  wakeWordDetectionEnabled: false,
  selectedDeepgramVoice: 'aura-2-thalia-en',
  // Timezone setting
  timezone: 'UTC',
};

export const useVoiceSettings = () => {
  const [settings, setSettings] = useState<VoiceSettings>(defaultVoiceSettings);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();


  // Load settings from storage
  const loadSettings = useCallback(async () => {
    try {
      setLoading(true);
      console.log('📱 VOICE_SETTINGS: Loading settings from storage...');
      
      // Wait for storage to be ready before attempting to load
      if (!Storage.isReady()) {
        console.log('📱 VOICE_SETTINGS: Storage not ready, initializing...');
        const initialized = await Storage.initialize();
        if (!initialized) {
          console.warn('⚠️ VOICE_SETTINGS: Storage initialization failed, using defaults');
          setSettings(defaultVoiceSettings);
          setLoading(false);
          return;
        }
      }
      
      const storedSettings = await Storage.get<VoiceSettings>(VOICE_SETTINGS_KEY);
      
      let parsedSettings: Partial<VoiceSettings> = {};
      if (storedSettings) {
        parsedSettings = storedSettings;
      }

      // Merge with defaults to ensure all properties exist
      const mergedSettings: VoiceSettings = {
        ...defaultVoiceSettings,
        ...parsedSettings,
      };
      

      setSettings(mergedSettings);
      
      // Sync initial settings to native layer
      try {
        const voiceService = VoiceService.getInstance();
        await voiceService.updateVoiceSettings(
          mergedSettings.deepgramEnabled,
          mergedSettings.selectedDeepgramVoice
        );
      } catch (error) {
        console.error('📱 VOICE_SETTINGS: ❌ Error syncing initial settings to native layer:', error);
      }
    } catch (error) {
      console.error('📱 VOICE_SETTINGS: Error loading settings:', error);
      setSettings(defaultVoiceSettings);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save settings to storage
  const saveSettings = useCallback(async (newSettings: VoiceSettings) => {
    try {
      console.log('📱 VOICE_SETTINGS: Saving settings to storage...');
      await Storage.set(VOICE_SETTINGS_KEY, newSettings);
      setSettings(newSettings);
      console.log('✅ VOICE_SETTINGS: Settings saved successfully');
    } catch (error) {
      console.error('❌ VOICE_SETTINGS: Error saving settings:', error);
      // Still update local state even if storage fails
      setSettings(newSettings);
    }
  }, []);

  // Update voice settings
  const updateSettings = useCallback(async (updates: Partial<VoiceSettings>) => {
    // Debug logging to see what's being passed
    console.log('🔍 VOICE_SETTINGS: updateSettings called with:', JSON.stringify(updates, null, 2));
    console.log('🔍 VOICE_SETTINGS: updates keys:', Object.keys(updates));
    
    const newSettings = {
      ...settings,
      ...updates,
    };
    

    await saveSettings(newSettings);
    
    // ========== DATABASE SAVE ==========
    // Save to database if user is authenticated
    if (user?.id) {
      try {

        // Define valid database fields for voice settings
        const validDbFields = [
          'deepgram_enabled',
          'base_language_model', 
          'general_instructions',
          'wake_word',
          'wake_word_sensitivity',
          'wake_word_detection_enabled',
          'selected_deepgram_voice',
          'timezone'
        ];

        // Convert camelCase keys to snake_case for database, filtering only valid fields
        const dbUpdates = Object.keys(updates).reduce((acc, key) => {
          let dbKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
          let value = updates[key as keyof Partial<VoiceSettings>];
          
          // Map selectedWakeWord to wake_word (consolidating duplicate fields)
          if (key === 'selectedWakeWord') {
            dbKey = 'wake_word';
          }
          
          // Only include valid database fields
          if (!validDbFields.includes(dbKey)) {
            console.log('📱 VOICE_SETTINGS: ⚠️ Skipping invalid database field:', dbKey, 'from key:', key);
            return acc;
          }
          
          // Allow empty general_instructions
          if (dbKey === 'general_instructions' && value === null) {
            value = '';
          }
          
          acc[dbKey] = value;
          return acc;
        }, {} as any);

        
        const dbSaveStartTime = Date.now();
        await DatabaseService.updateVoiceSettings(user.id, dbUpdates);
        const dbSaveEndTime = Date.now();
        

      } catch (dbError) {
        console.error('❌ VOICE_SETTINGS: ========== DATABASE SAVE FAILED ==========');
        console.error('❌ VOICE_SETTINGS: Error saving to database:', dbError);
        console.error('❌ VOICE_SETTINGS: Database error stack:', dbError instanceof Error ? dbError.stack : 'No stack available');
        // Don't throw error - continue with local settings even if database save fails
      }
    } else {
      console.log('📱 VOICE_SETTINGS: ⚠️ No user ID, skipping database save');
    }
    
    // Sync ALL relevant settings to native layer, not just Deepgram settings
    try {

      const voiceService = VoiceService.getInstance();
      
      // Always sync Deepgram settings when any settings change
 
      const deepgramSyncStartTime = Date.now();
      await voiceService.updateVoiceSettings(
        newSettings.deepgramEnabled,
        newSettings.selectedDeepgramVoice
      );
      const deepgramSyncEndTime = Date.now();
      
      
      // Check if wake word settings changed and handle restart
      const hasWakeWordChanges = 'wakeWordDetectionEnabled' in updates || 
                                'wakeWordSensitivity' in updates || 
                                'selectedWakeWord' in updates;
      
      if (hasWakeWordChanges) {
     
        try {
          const wakeWordService = WakeWordService.getInstance();
          
          // Handle wake word detection enabled/disabled state change
          if ('wakeWordDetectionEnabled' in updates) {
            const isEnabledNow = newSettings.wakeWordDetectionEnabled;
            
            if (isEnabledNow) {
              // Enable and start wake word detection
              const enableStartTime = Date.now();
              const enableSuccess = await wakeWordService.setWakeWordEnabled(true);
              const enableEndTime = Date.now();
              
              
              if (enableSuccess) {
                const startTime = Date.now();
                const startSuccess = await wakeWordService.startWakeWordDetection();
                const endTime = Date.now();
                
                
                if (startSuccess) {
                } else {
                  console.error('📱 VOICE_SETTINGS: ❌ Wake word detection enabled but failed to start');
                }
              } else {
                if (Platform.OS === 'android') {
                  console.error('📱 VOICE_SETTINGS: ❌ Failed to enable wake word detection');
                }
              }
            } else {
              // Disable and stop wake word detection
              const stopStartTime = Date.now();
              const stopSuccess = await wakeWordService.stopWakeWordDetection();
              const stopEndTime = Date.now();
              
              
              const disableStartTime = Date.now();
              const disableSuccess = await wakeWordService.setWakeWordEnabled(false);
              const disableEndTime = Date.now();
              
              
              if (stopSuccess && disableSuccess) {
              } else {
                if (Platform.OS === 'android') {
                  console.error('📱 VOICE_SETTINGS: ❌ Failed to fully disable wake word detection (stop:', stopSuccess, ', disable:', disableSuccess, ')');
                }
              }
            }
          }
          
          // Sync wake word settings to native
          if ('selectedWakeWord' in updates) {
  
            const wakeWordSyncStartTime = Date.now();
            const success = await wakeWordService.setSelectedWakeWord(newSettings.selectedWakeWord);
            const wakeWordSyncEndTime = Date.now();
            
            
        
          }
          
          if ('wakeWordSensitivity' in updates) {
          
            const sensitivitySyncStartTime = Date.now();
            const success = await wakeWordService.setWakeWordSensitivity(newSettings.wakeWordSensitivity);
            const sensitivitySyncEndTime = Date.now();
            
          }
          
          // Restart wake word detection if currently running and other settings changed (but not enabled/disabled state)
          if (!('wakeWordDetectionEnabled' in updates)) {
          
            const isRunning = await wakeWordService.isWakeWordDetectionRunning();
            

            if (isRunning) {

              
              const stopRestartTime = Date.now();
              await wakeWordService.stopWakeWordDetection();
              const stopCompleteTime = Date.now();
              

              // Add delay to ensure clean shutdown
              await new Promise(resolve => setTimeout(resolve, 500));
              
              const restartStartTime = Date.now();
              const restartSuccess = await wakeWordService.startWakeWordDetection();
              const restartEndTime = Date.now();
              

              if (restartSuccess) {
              } else {
                console.error('📱 VOICE_SETTINGS: ❌ Failed to restart wake word detection');
              }
            } else {
            }
          }
          
        } catch (error) {
          console.error('📱 VOICE_SETTINGS: ❌ Error handling wake word settings change:', error);
          console.error('📱 VOICE_SETTINGS: Error stack:', error instanceof Error ? error.stack : 'No stack available');
        }
      } else {
        console.log('📱 VOICE_SETTINGS: No wake word settings changed, skipping wake word sync');
      }
      
      // Also sync other settings if they changed
      const hasOtherChanges = 'baseLanguageModel' in updates || 
                             'generalInstructions' in updates;
      
      

    } catch (error) {
      console.error('📱 VOICE_SETTINGS: ========== NATIVE SYNC ERROR ==========');
      console.error('📱 VOICE_SETTINGS: ❌ Error syncing settings to native layer:', error);
      console.error('📱 VOICE_SETTINGS: Error stack:', error instanceof Error ? error.stack : 'No stack available');
    }
  }, [settings, saveSettings]);

  // Load settings on mount
  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  return {
    settings,
    loading,
    updateSettings,
    loadSettings,
  };
}; 