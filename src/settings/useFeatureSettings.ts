import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FeatureSettings, defaultFeatureSettings } from '../features/features';
import { tickerService } from '../features/tickers/tickerService';
import { newsService } from '../features/news/newsService';

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

      // Initialize news categories from database if user is authenticated
      let dbNewsCategories = [];
      try {
        dbNewsCategories = await newsService.initializeUserNewsCategories();
      } catch (error) {
        console.log('User not authenticated or error loading news categories, using defaults');
        dbNewsCategories = defaultFeatureSettings.news.categories;
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
          categories: dbNewsCategories,
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
    
    await saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateNewsSettings = useCallback(async (updates: Partial<FeatureSettings['news']>) => {
    const newSettings = {
      ...settings,
      news: { ...settings.news, ...updates },
    };
    
    // If news categories were updated, sync with database
    if (updates.categories) {
      try {
        await newsService.syncNewsCategories(updates.categories);
      } catch (error) {
        console.error('Error syncing news categories with database:', error);
        // Still save locally even if DB sync fails
      }
    }
    
    await saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateCalendarSettings = useCallback(async (updates: Partial<FeatureSettings['calendar']>) => {
    const newSettings = {
      ...settings,
      calendar: { ...settings.calendar, ...updates },
    };
    await saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateTellMeThingsSettings = useCallback(async (updates: Partial<FeatureSettings['tellMeThings']>) => {
    const newSettings = {
      ...settings,
      tellMeThings: { ...settings.tellMeThings, ...updates },
    };
    await saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateProjectUnderstandingSettings = useCallback(async (updates: Partial<FeatureSettings['projectUnderstanding']>) => {
    const newSettings = {
      ...settings,
      projectUnderstanding: { ...settings.projectUnderstanding, ...updates },
    };
    await saveSettings(newSettings);
  }, [settings, saveSettings]);

  const updateVoiceSettings = useCallback(async (updates: Partial<FeatureSettings['voice']>) => {
    console.log('🔧 SETTINGS: updateVoiceSettings called with:', updates);
    console.log('🔧 SETTINGS: Current voice settings:', settings.voice);
    
    const newSettings = {
      ...settings,
      voice: { ...settings.voice, ...updates },
    };
    
    console.log('🔧 SETTINGS: New voice settings:', newSettings.voice);
    console.log('🔧 SETTINGS: Saving settings to storage...');
    
    await saveSettings(newSettings);
    console.log('🔧 SETTINGS: ✅ Settings saved successfully');
  }, [settings, saveSettings]);

  // Reset to defaults
  const resetToDefaults = useCallback(async () => {
    await saveSettings(defaultFeatureSettings);
  }, [saveSettings]);

  // Debug function to check what's in AsyncStorage
  const debugAsyncStorage = useCallback(async () => {
    try {
      const storedSettings = await AsyncStorage.getItem(FEATURE_SETTINGS_KEY);
      console.log('🔍 DEBUG: Raw AsyncStorage data:', storedSettings);
      if (storedSettings) {
        const parsed = JSON.parse(storedSettings);
        console.log('🔍 DEBUG: Parsed settings:', parsed);
        console.log('🔍 DEBUG: Voice settings in storage:', parsed.voice);
        console.log('🔍 DEBUG: Base language model in storage:', parsed.voice?.baseLanguageModel);
      } else {
        console.log('🔍 DEBUG: No settings found in AsyncStorage');
      }
    } catch (error) {
      console.error('🔍 DEBUG: Error reading AsyncStorage:', error);
    }
  }, []);

  // Force reload settings from AsyncStorage
  const forceReloadSettings = useCallback(async () => {
    console.log('🔄 FORCE_RELOAD: Reloading settings from AsyncStorage...');
    await loadSettings();
    console.log('🔄 FORCE_RELOAD: Settings reloaded');
  }, [loadSettings]);

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
    resetToDefaults,
    saveSettings,
    debugAsyncStorage,
    forceReloadSettings,
  };
}; 