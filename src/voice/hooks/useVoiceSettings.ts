import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VoiceSettings } from '../../settings/SettingsScreen';
import VoiceService from '../VoiceService';
import WakeWordService from '../../wakeword/WakeWordService';

const VOICE_SETTINGS_KEY = 'voice_settings';

const defaultVoiceSettings: VoiceSettings = {
  deepgramEnabled: false,
  baseLanguageModel: 'grok-3',
  generalInstructions: '',
  selectedWakeWord: 'JARVIS',
  wakeWordSensitivity: 0.3,
  wakeWordDetectionEnabled: false,
  selectedDeepgramVoice: 'aura-2-thalia-en',
  // XAI LiveSearch settings
  xaiLiveSearchEnabled: false,
  xaiLiveSearchSafeSearch: true,
};

export const useVoiceSettings = () => {
  const [settings, setSettings] = useState<VoiceSettings>(defaultVoiceSettings);
  const [loading, setLoading] = useState(true);

  console.log('📱 VOICE_SETTINGS: Hook called, current settings state:', settings);

  // Load settings from storage
  const loadSettings = useCallback(async () => {
    try {
      setLoading(true);
      const storedSettings = await AsyncStorage.getItem(VOICE_SETTINGS_KEY);
      
      let parsedSettings: Partial<VoiceSettings> = {};
      if (storedSettings) {
        parsedSettings = JSON.parse(storedSettings);
      }

      // Merge with defaults to ensure all properties exist
      const mergedSettings: VoiceSettings = {
        ...defaultVoiceSettings,
        ...parsedSettings,
      };
      
      console.log('📱 VOICE_SETTINGS: Loaded settings from AsyncStorage:', mergedSettings);
      console.log('📱 VOICE_SETTINGS: About to call setSettings with:', mergedSettings);
      setSettings(mergedSettings);
      console.log('📱 VOICE_SETTINGS: setSettings called, state should be updated');
      
      // Sync initial settings to native layer
      try {
        console.log('📱 VOICE_SETTINGS: Syncing initial settings to native layer...');
        const voiceService = VoiceService.getInstance();
        await voiceService.updateVoiceSettings(
          mergedSettings.deepgramEnabled,
          mergedSettings.selectedDeepgramVoice
        );
        console.log('📱 VOICE_SETTINGS: ✅ Initial settings synced to native layer successfully');
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
      console.log('📱 VOICE_SETTINGS: Saving settings to AsyncStorage:', newSettings);
      await AsyncStorage.setItem(VOICE_SETTINGS_KEY, JSON.stringify(newSettings));
      console.log('📱 VOICE_SETTINGS: Settings saved, updating local state...');
      console.log('📱 VOICE_SETTINGS: About to call setSettings with:', newSettings);
      setSettings(newSettings);
      console.log('📱 VOICE_SETTINGS: setSettings called, local state should be updated');
    } catch (error) {
      console.error('📱 VOICE_SETTINGS: Error saving settings:', error);
    }
  }, []);

  // Update voice settings
  const updateSettings = useCallback(async (updates: Partial<VoiceSettings>) => {
    console.log('📱 VOICE_SETTINGS: Updating settings with:', updates);
    console.log('📱 VOICE_SETTINGS: Current settings before update:', settings);
    
    const newSettings = {
      ...settings,
      ...updates,
    };
    
    console.log('📱 VOICE_SETTINGS: New merged settings:', newSettings);
    await saveSettings(newSettings);
    
    // Sync ALL relevant settings to native layer, not just Deepgram settings
    try {
      console.log('📱 VOICE_SETTINGS: Syncing all voice settings to native layer...');
      const voiceService = VoiceService.getInstance();
      
      // Always sync Deepgram settings when any settings change
      await voiceService.updateVoiceSettings(
        newSettings.deepgramEnabled,
        newSettings.selectedDeepgramVoice
      );
      
      // Check if wake word settings changed and handle restart
      const hasWakeWordChanges = 'wakeWordDetectionEnabled' in updates || 
                                'wakeWordSensitivity' in updates || 
                                'selectedWakeWord' in updates;
      
      if (hasWakeWordChanges) {
        console.log('📱 VOICE_SETTINGS: Wake word settings changed, syncing to native and managing detection...');
        
        try {
          const wakeWordService = WakeWordService.getInstance();
          
          // Handle wake word detection enabled/disabled state change
          if ('wakeWordDetectionEnabled' in updates) {
            const isEnabledNow = newSettings.wakeWordDetectionEnabled;
            console.log('📱 VOICE_SETTINGS: Wake word detection enabled state changed to:', isEnabledNow);
            
            if (isEnabledNow) {
              // Enable and start wake word detection
              console.log('📱 VOICE_SETTINGS: 🎤 Enabling wake word detection...');
              const enableSuccess = await wakeWordService.setWakeWordEnabled(true);
              if (enableSuccess) {
                const startSuccess = await wakeWordService.startWakeWordDetection();
                if (startSuccess) {
                  console.log('📱 VOICE_SETTINGS: ✅ Wake word detection enabled and started');
                } else {
                  console.error('📱 VOICE_SETTINGS: ❌ Wake word detection enabled but failed to start');
                }
              } else {
                console.error('📱 VOICE_SETTINGS: ❌ Failed to enable wake word detection');
              }
            } else {
              // Disable and stop wake word detection
              console.log('📱 VOICE_SETTINGS: 🛑 Disabling wake word detection...');
              const stopSuccess = await wakeWordService.stopWakeWordDetection();
              const disableSuccess = await wakeWordService.setWakeWordEnabled(false);
              if (stopSuccess && disableSuccess) {
                console.log('📱 VOICE_SETTINGS: ✅ Wake word detection stopped and disabled');
              } else {
                console.error('📱 VOICE_SETTINGS: ❌ Failed to fully disable wake word detection');
              }
            }
          }
          
          // Sync wake word settings to native
          if ('selectedWakeWord' in updates) {
            const success = await wakeWordService.setSelectedWakeWord(newSettings.selectedWakeWord);
            if (success) {
              console.log('📱 VOICE_SETTINGS: ✅ Wake word synced to native module');
            } else {
              console.error('📱 VOICE_SETTINGS: ❌ Failed to sync wake word to native module');
            }
          }
          
          if ('wakeWordSensitivity' in updates) {
            const success = await wakeWordService.setWakeWordSensitivity(newSettings.wakeWordSensitivity);
            if (success) {
              console.log('📱 VOICE_SETTINGS: ✅ Wake word sensitivity synced to native module');
            } else {
              console.error('📱 VOICE_SETTINGS: ❌ Failed to sync wake word sensitivity to native module');
            }
          }
          
          // Restart wake word detection if currently running and other settings changed (but not enabled/disabled state)
          if (!('wakeWordDetectionEnabled' in updates)) {
            const isRunning = await wakeWordService.isWakeWordDetectionRunning();
            if (isRunning) {
              console.log('📱 VOICE_SETTINGS: 🔄 Restarting wake word detection to apply new settings...');
              await wakeWordService.stopWakeWordDetection();
              
              // Add delay to ensure clean shutdown
              await new Promise(resolve => setTimeout(resolve, 500));
              
              const restartSuccess = await wakeWordService.startWakeWordDetection();
              if (restartSuccess) {
                console.log('📱 VOICE_SETTINGS: ✅ Wake word detection restarted with new settings');
              } else {
                console.error('📱 VOICE_SETTINGS: ❌ Failed to restart wake word detection');
              }
            } else {
              console.log('📱 VOICE_SETTINGS: Wake word detection not running, settings will apply when started');
            }
          }
          
        } catch (error) {
          console.error('📱 VOICE_SETTINGS: ❌ Error handling wake word settings change:', error);
        }
      }
      
      // Also sync other settings if they changed
      const hasOtherChanges = 'baseLanguageModel' in updates || 
                             'generalInstructions' in updates ||
                             'xaiLiveSearchEnabled' in updates ||
                             'xaiLiveSearchSafeSearch' in updates;
      
      // If other settings changed, we could extend the native module to handle these  
      if (hasOtherChanges) {
        console.log('📱 VOICE_SETTINGS: Other settings changed, may need native update in future');
      }
      
      console.log('📱 VOICE_SETTINGS: ✅ Settings synced to native layer successfully');
    } catch (error) {
      console.error('📱 VOICE_SETTINGS: ❌ Error syncing settings to native layer:', error);
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