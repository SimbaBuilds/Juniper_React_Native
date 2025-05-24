import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FeatureSettings, defaultFeatureSettings } from '../features/features';
import { tickerService } from '../features/tickers/tickerService';

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

      // Initialize tickers from database if user is authenticated
      let dbTickers: string[] = [];
      try {
        dbTickers = await tickerService.initializeUserTickers();
      } catch (error) {
        console.log('User not authenticated or error loading tickers, using defaults');
        dbTickers = defaultFeatureSettings.tickers.tickers;
      }

      // Deep merge with defaults to ensure all properties exist
      const mergedSettings: FeatureSettings = {
        ...defaultFeatureSettings,
        ...parsedSettings,
        tickers: {
          ...defaultFeatureSettings.tickers,
          ...parsedSettings.tickers,
          tickers: dbTickers, // Use database tickers as source of truth
        },
        news: {
          ...defaultFeatureSettings.news,
          ...parsedSettings.news,
        },
        calendar: {
          ...defaultFeatureSettings.calendar,
          ...parsedSettings.calendar,
        },
        tellMeThings: {
          ...defaultFeatureSettings.tellMeThings,
          ...parsedSettings.tellMeThings,
        },
        projectUnderstanding: {
          ...defaultFeatureSettings.projectUnderstanding,
          ...parsedSettings.projectUnderstanding,
        },
        voice: {
          ...defaultFeatureSettings.voice,
          ...parsedSettings.voice,
        },
        groceries: {
          ...defaultFeatureSettings.groceries,
          ...parsedSettings.groceries,
        },
        alarmClock: {
          ...defaultFeatureSettings.alarmClock,
          ...parsedSettings.alarmClock,
        },
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
      await AsyncStorage.setItem(FEATURE_SETTINGS_KEY, JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      console.error('Error saving feature settings:', error);
    }
  }, []);

  // Update specific feature settings
  const updateTickersSettings = useCallback(async (updates: Partial<FeatureSettings['tickers']>) => {
    const newSettings = {
      ...settings,
      tickers: { ...settings.tickers, ...updates },
    };
    
    // If tickers array was updated, sync with database
    if (updates.tickers) {
      try {
        await tickerService.syncTickers(updates.tickers);
      } catch (error) {
        console.error('Error syncing tickers with database:', error);
        // Still save locally even if DB sync fails
      }
    }
    
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
    updateTickersSettings,
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