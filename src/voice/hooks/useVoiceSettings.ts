import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VoiceSettings } from '../../settings/SettingsScreen';

const VOICE_SETTINGS_KEY = 'voice_settings';

const defaultVoiceSettings: VoiceSettings = {
  deepgramEnabled: false,
  baseLanguageModel: 'grok-3',
  generalInstructions: 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.',
  // XAI LiveSearch settings
  xaiLiveSearchEnabled: false,
  xaiLiveSearchSources: ["web", "x"],
  xaiLiveSearchCountry: 'US',
  xaiLiveSearchXHandles: [],
  xaiLiveSearchSafeSearch: true,
};

export const useVoiceSettings = () => {
  const [settings, setSettings] = useState<VoiceSettings>(defaultVoiceSettings);
  const [loading, setLoading] = useState(true);

  console.log('📱 VOICE_SETTINGS: Hook called, current settings state:', settings);
  console.log('📱 VOICE_SETTINGS: Hook called, loading state:', loading);

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