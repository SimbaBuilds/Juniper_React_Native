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
    console.log('📱 VOICE_SETTINGS: ========== UPDATE SETTINGS CALLED ==========');
    console.log('📱 VOICE_SETTINGS: Updating settings with:', JSON.stringify(updates, null, 2));
    console.log('📱 VOICE_SETTINGS: Current settings before update:', JSON.stringify(settings, null, 2));
    
    const newSettings = {
      ...settings,
      ...updates,
    };
    
    console.log('📱 VOICE_SETTINGS: ========== NEW MERGED SETTINGS ==========');
    console.log('📱 VOICE_SETTINGS: New merged settings:', JSON.stringify(newSettings, null, 2));
    console.log('📱 VOICE_SETTINGS: deepgramEnabled:', newSettings.deepgramEnabled);
    console.log('📱 VOICE_SETTINGS: baseLanguageModel:', newSettings.baseLanguageModel);
    console.log('📱 VOICE_SETTINGS: generalInstructions length:', newSettings.generalInstructions.length);
    console.log('📱 VOICE_SETTINGS: selectedWakeWord:', newSettings.selectedWakeWord);
    console.log('📱 VOICE_SETTINGS: wakeWordSensitivity:', newSettings.wakeWordSensitivity);
    console.log('📱 VOICE_SETTINGS: wakeWordDetectionEnabled:', newSettings.wakeWordDetectionEnabled);
    console.log('📱 VOICE_SETTINGS: selectedDeepgramVoice:', newSettings.selectedDeepgramVoice);
    console.log('📱 VOICE_SETTINGS: xaiLiveSearchEnabled:', newSettings.xaiLiveSearchEnabled);
    console.log('📱 VOICE_SETTINGS: xaiLiveSearchSafeSearch:', newSettings.xaiLiveSearchSafeSearch);
    
    await saveSettings(newSettings);
    
    // Sync ALL relevant settings to native layer, not just Deepgram settings
    try {
      console.log('📱 VOICE_SETTINGS: ========== SYNCING TO NATIVE LAYER ==========');
      console.log('📱 VOICE_SETTINGS: Starting sync to native layer...');
      const voiceService = VoiceService.getInstance();
      
      // Always sync Deepgram settings when any settings change
      console.log('📱 VOICE_SETTINGS: Syncing Deepgram settings...');
      console.log('📱 VOICE_SETTINGS: - deepgramEnabled:', newSettings.deepgramEnabled);
      console.log('📱 VOICE_SETTINGS: - selectedDeepgramVoice:', newSettings.selectedDeepgramVoice);
      
      const deepgramSyncStartTime = Date.now();
      await voiceService.updateVoiceSettings(
        newSettings.deepgramEnabled,
        newSettings.selectedDeepgramVoice
      );
      const deepgramSyncEndTime = Date.now();
      
      console.log('📱 VOICE_SETTINGS: ✅ Deepgram settings synced in', (deepgramSyncEndTime - deepgramSyncStartTime), 'ms');
      
      // Check if wake word settings changed and handle restart
      const hasWakeWordChanges = 'wakeWordDetectionEnabled' in updates || 
                                'wakeWordSensitivity' in updates || 
                                'selectedWakeWord' in updates;
      
      if (hasWakeWordChanges) {
        console.log('📱 VOICE_SETTINGS: ========== WAKE WORD SETTINGS CHANGED ==========');
        console.log('📱 VOICE_SETTINGS: Wake word settings changed, syncing to native and managing detection...');
        console.log('📱 VOICE_SETTINGS: Changed settings:', Object.keys(updates).filter(key => key.includes('wakeWord')));
        
        try {
          const wakeWordService = WakeWordService.getInstance();
          
          // Handle wake word detection enabled/disabled state change
          if ('wakeWordDetectionEnabled' in updates) {
            const isEnabledNow = newSettings.wakeWordDetectionEnabled;
            console.log('📱 VOICE_SETTINGS: ========== WAKE WORD DETECTION STATE CHANGE ==========');
            console.log('📱 VOICE_SETTINGS: Wake word detection enabled state changed to:', isEnabledNow);
            console.log('📱 VOICE_SETTINGS: Previous state:', settings.wakeWordDetectionEnabled);
            
            if (isEnabledNow) {
              // Enable and start wake word detection
              console.log('📱 VOICE_SETTINGS: 🎤 Enabling wake word detection...');
              const enableStartTime = Date.now();
              const enableSuccess = await wakeWordService.setWakeWordEnabled(true);
              const enableEndTime = Date.now();
              
              console.log('📱 VOICE_SETTINGS: setWakeWordEnabled(true) result:', enableSuccess, 'in', (enableEndTime - enableStartTime), 'ms');
              
              if (enableSuccess) {
                const startTime = Date.now();
                const startSuccess = await wakeWordService.startWakeWordDetection();
                const endTime = Date.now();
                
                console.log('📱 VOICE_SETTINGS: startWakeWordDetection() result:', startSuccess, 'in', (endTime - startTime), 'ms');
                
                if (startSuccess) {
                  console.log('📱 VOICE_SETTINGS: ✅ Wake word detection enabled and started successfully');
                } else {
                  console.error('📱 VOICE_SETTINGS: ❌ Wake word detection enabled but failed to start');
                }
              } else {
                console.error('📱 VOICE_SETTINGS: ❌ Failed to enable wake word detection');
              }
            } else {
              // Disable and stop wake word detection
              console.log('📱 VOICE_SETTINGS: 🛑 Disabling wake word detection...');
              const stopStartTime = Date.now();
              const stopSuccess = await wakeWordService.stopWakeWordDetection();
              const stopEndTime = Date.now();
              
              console.log('📱 VOICE_SETTINGS: stopWakeWordDetection() result:', stopSuccess, 'in', (stopEndTime - stopStartTime), 'ms');
              
              const disableStartTime = Date.now();
              const disableSuccess = await wakeWordService.setWakeWordEnabled(false);
              const disableEndTime = Date.now();
              
              console.log('📱 VOICE_SETTINGS: setWakeWordEnabled(false) result:', disableSuccess, 'in', (disableEndTime - disableStartTime), 'ms');
              
              if (stopSuccess && disableSuccess) {
                console.log('📱 VOICE_SETTINGS: ✅ Wake word detection stopped and disabled successfully');
              } else {
                console.error('📱 VOICE_SETTINGS: ❌ Failed to fully disable wake word detection (stop:', stopSuccess, ', disable:', disableSuccess, ')');
              }
            }
          }
          
          // Sync wake word settings to native
          if ('selectedWakeWord' in updates) {
            console.log('📱 VOICE_SETTINGS: ========== SYNCING WAKE WORD ==========');
            console.log('📱 VOICE_SETTINGS: Syncing selected wake word:', newSettings.selectedWakeWord);
            
            const wakeWordSyncStartTime = Date.now();
            const success = await wakeWordService.setSelectedWakeWord(newSettings.selectedWakeWord);
            const wakeWordSyncEndTime = Date.now();
            
            console.log('📱 VOICE_SETTINGS: setSelectedWakeWord result:', success, 'in', (wakeWordSyncEndTime - wakeWordSyncStartTime), 'ms');
            
            if (success) {
              console.log('📱 VOICE_SETTINGS: ✅ Wake word synced to native module');
            } else {
              console.error('📱 VOICE_SETTINGS: ❌ Failed to sync wake word to native module');
            }
          }
          
          if ('wakeWordSensitivity' in updates) {
            console.log('📱 VOICE_SETTINGS: ========== SYNCING WAKE WORD SENSITIVITY ==========');
            console.log('📱 VOICE_SETTINGS: Syncing wake word sensitivity:', newSettings.wakeWordSensitivity);
            
            const sensitivitySyncStartTime = Date.now();
            const success = await wakeWordService.setWakeWordSensitivity(newSettings.wakeWordSensitivity);
            const sensitivitySyncEndTime = Date.now();
            
            console.log('📱 VOICE_SETTINGS: setWakeWordSensitivity result:', success, 'in', (sensitivitySyncEndTime - sensitivitySyncStartTime), 'ms');
            
            if (success) {
              console.log('📱 VOICE_SETTINGS: ✅ Wake word sensitivity synced to native module');
            } else {
              console.error('📱 VOICE_SETTINGS: ❌ Failed to sync wake word sensitivity to native module');
            }
          }
          
          // Restart wake word detection if currently running and other settings changed (but not enabled/disabled state)
          if (!('wakeWordDetectionEnabled' in updates)) {
            console.log('📱 VOICE_SETTINGS: ========== CHECKING WAKE WORD RESTART ==========');
            console.log('📱 VOICE_SETTINGS: Checking if wake word detection needs restart...');
            
            const isRunningCheckStartTime = Date.now();
            const isRunning = await wakeWordService.isWakeWordDetectionRunning();
            const isRunningCheckEndTime = Date.now();
            
            console.log('📱 VOICE_SETTINGS: isWakeWordDetectionRunning result:', isRunning, 'in', (isRunningCheckEndTime - isRunningCheckStartTime), 'ms');
            
            if (isRunning) {
              console.log('📱 VOICE_SETTINGS: 🔄 Restarting wake word detection to apply new settings...');
              
              const stopRestartTime = Date.now();
              await wakeWordService.stopWakeWordDetection();
              const stopCompleteTime = Date.now();
              
              console.log('📱 VOICE_SETTINGS: Stopped wake word detection in', (stopCompleteTime - stopRestartTime), 'ms');
              
              // Add delay to ensure clean shutdown
              await new Promise(resolve => setTimeout(resolve, 500));
              
              const restartStartTime = Date.now();
              const restartSuccess = await wakeWordService.startWakeWordDetection();
              const restartEndTime = Date.now();
              
              console.log('📱 VOICE_SETTINGS: Restart wake word detection result:', restartSuccess, 'in', (restartEndTime - restartStartTime), 'ms');
              
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
          console.error('📱 VOICE_SETTINGS: Error stack:', error instanceof Error ? error.stack : 'No stack available');
        }
      } else {
        console.log('📱 VOICE_SETTINGS: No wake word settings changed, skipping wake word sync');
      }
      
      // Also sync other settings if they changed
      const hasOtherChanges = 'baseLanguageModel' in updates || 
                             'generalInstructions' in updates ||
                             'xaiLiveSearchEnabled' in updates ||
                             'xaiLiveSearchSafeSearch' in updates;
      
      // If other settings changed, we could extend the native module to handle these  
      if (hasOtherChanges) {
        console.log('📱 VOICE_SETTINGS: ========== OTHER SETTINGS CHANGED ==========');
        console.log('📱 VOICE_SETTINGS: Other settings changed:', Object.keys(updates).filter(key => !key.includes('wakeWord') && !key.includes('deepgram')));
        console.log('📱 VOICE_SETTINGS: These settings may need native update in future');
      }
      
      console.log('📱 VOICE_SETTINGS: ========== NATIVE SYNC COMPLETED ==========');
      console.log('📱 VOICE_SETTINGS: ✅ Settings synced to native layer successfully');
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