import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FeatureSettings, defaultFeatureSettings } from '../features/features';

const FEATURE_SETTINGS_KEY = 'feature_settings';

export const useFeatureSettings = () => {
  const [settings, setSettings] = useState<FeatureSettings>(defaultFeatureSettings);
  const [loading, setLoading] = useState(true);

  // Load settings from storage
  const loadSettings = useCallback(async () => {
    try {
      setLoading(true);
      const storedSettings = await AsyncStorage.getItem(FEATURE_SETTINGS_KEY);
      
      let parsedSettings: Partial<FeatureSettings> = {};
      if (storedSettings) {
        parsedSettings = JSON.parse(storedSettings);
      }

      // Deep merge with defaults to ensure all properties exist
      const mergedSettings: FeatureSettings = {
        ...defaultFeatureSettings,
        ...parsedSettings,
        voice: {
          ...defaultFeatureSettings.voice,
          ...parsedSettings.voice,
        }
      };
      setSettings(mergedSettings);
    } catch (error) {
      console.error('Error loading feature settings:', error);
      setSettings(defaultFeatureSettings);
    } finally {
      setLoading(false);
    }
  }, []);

  // Save settings to storage
  const saveSettings = useCallback(async (newSettings: FeatureSettings) => {
    try {
      console.log('💾 SETTINGS: Saving settings to AsyncStorage...');
      await AsyncStorage.setItem(FEATURE_SETTINGS_KEY, JSON.stringify(newSettings));
      console.log('💾 SETTINGS: Settings saved to AsyncStorage, updating local state...');
      setSettings(newSettings);
      console.log('💾 SETTINGS: Local state updated with new voice model:', newSettings.voice.baseLanguageModel);
    } catch (error) {
      console.error('💾 SETTINGS: Error saving feature settings:', error);
    }
  }, []);

  // Update voice settings
  const updateVoiceSettings = useCallback(async (updates: Partial<FeatureSettings['voice']>) => {
    const newSettings = {
      ...settings,
      voice: { ...settings.voice, ...updates },
    };
    await saveSettings(newSettings);
  }, [settings, saveSettings]);

  // Load settings on mount
  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  return {
    settings,
    loading,
    updateVoiceSettings,
    loadSettings,
  };
}; 