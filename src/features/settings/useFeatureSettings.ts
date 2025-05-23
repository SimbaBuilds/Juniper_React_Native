import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FeatureSettings, defaultFeatureSettings } from '../../types/features';

const FEATURE_SETTINGS_KEY = 'feature_settings';

export const useFeatureSettings = () => {
  const [settings, setSettings] = useState<FeatureSettings>(defaultFeatureSettings);
  const [loading, setLoading] = useState(true);

  // Load settings from storage
  const loadSettings = useCallback(async () => {
    try {
      setLoading(true);
      const storedSettings = await AsyncStorage.getItem(FEATURE_SETTINGS_KEY);
      if (storedSettings) {
        const parsedSettings = JSON.parse(storedSettings);
        // Merge with defaults to ensure all properties exist
        setSettings({
          ...defaultFeatureSettings,
          ...parsedSettings,
        });
      }
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
      await AsyncStorage.setItem(FEATURE_SETTINGS_KEY, JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      console.error('Error saving feature settings:', error);
    }
  }, []);

  // Update specific feature settings
  const updatePortfolioSettings = useCallback((updates: Partial<FeatureSettings['portfolio']>) => {
    const newSettings = {
      ...settings,
      portfolio: { ...settings.portfolio, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateNewsSettings = useCallback((updates: Partial<FeatureSettings['news']>) => {
    const newSettings = {
      ...settings,
      news: { ...settings.news, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateCalendarSettings = useCallback((updates: Partial<FeatureSettings['calendar']>) => {
    const newSettings = {
      ...settings,
      calendar: { ...settings.calendar, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateTellMeThingsSettings = useCallback((updates: Partial<FeatureSettings['tellMeThings']>) => {
    const newSettings = {
      ...settings,
      tellMeThings: { ...settings.tellMeThings, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateProjectUnderstandingSettings = useCallback((updates: Partial<FeatureSettings['projectUnderstanding']>) => {
    const newSettings = {
      ...settings,
      projectUnderstanding: { ...settings.projectUnderstanding, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateVoiceSettings = useCallback((updates: Partial<FeatureSettings['voice']>) => {
    const newSettings = {
      ...settings,
      voice: { ...settings.voice, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateGroceriesSettings = useCallback((updates: Partial<FeatureSettings['groceries']>) => {
    const newSettings = {
      ...settings,
      groceries: { ...settings.groceries, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateAlarmClockSettings = useCallback((updates: Partial<FeatureSettings['alarmClock']>) => {
    const newSettings = {
      ...settings,
      alarmClock: { ...settings.alarmClock, ...updates },
    };
    saveSettings(newSettings);
  }, [settings, saveSettings]);

  // Reset to defaults
  const resetToDefaults = useCallback(() => {
    saveSettings(defaultFeatureSettings);
  }, [saveSettings]);

  // Load settings on mount
  useEffect(() => {
    loadSettings();
  }, [loadSettings]);

  return {
    settings,
    loading,
    updatePortfolioSettings,
    updateNewsSettings,
    updateCalendarSettings,
    updateTellMeThingsSettings,
    updateProjectUnderstandingSettings,
    updateVoiceSettings,
    updateGroceriesSettings,
    updateAlarmClockSettings,
    resetToDefaults,
    saveSettings,
  };
}; 