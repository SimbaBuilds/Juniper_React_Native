import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator, Platform, TouchableOpacity, Alert, Linking } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { WakeWordToggle } from '../wakeword/components/WakeWordToggle';
import { WakeWordStatus } from '../wakeword/components/WakeWordStatus';
import { usePermissions } from './usePermissions';
import { useAuth } from '../auth/AuthContext';
import { DatabaseService } from '../supabase/supabase';
import { useVoice } from '../voice/VoiceContext';
import { SettingsToggle } from './components/SettingsToggle';
import { ExpandableSettingsToggle } from './components/ExpandableSettingsToggle';
import { SettingsDropdown } from './components/SettingsDropdown';
import { SettingsTextInput } from './components/SettingsTextInput';
import { SettingsArrayInput } from './components/SettingsArrayInput';
import { SettingsNumberInput } from './components/SettingsNumberInput';
import { VoiceSelectionDropdown } from './components/VoiceSelectionDropdown';
import { PermissionsCard } from './components/PermissionsCard';
import { UsageMetricsCard } from './UsageMetricsCard';
import WakeWordService from '../wakeword/WakeWordService';
import { DEFAULT_WAKE_PHRASE } from '../wakeword/constants';
import { colors } from '../shared/theme/colors';

// Voice Settings interface
export interface VoiceSettings {
  deepgramEnabled: boolean;
  baseLanguageModel: 'grok-3'| 'o3-mini-2025-01-31' | 'claude-sonnet-4-20250514' | 'gemini-2.5-pro';
  generalInstructions: string;
  selectedWakeWord: string;
  wakeWordSensitivity: number;
  wakeWordDetectionEnabled: boolean;
  selectedDeepgramVoice: string;
  // Timezone setting
  timezone: string;
}

// Wake word threshold mapping
const WAKE_WORD_SENSITIVITY_MAP: Record<string, number> = {
  'Hey Juni': 0.5,
  'Hey Juniper': 0.2,
  'Juniper': 0.05,
  'Hey': 0.01,
  'Jarvis': 0.2,
  'Hey Jarvis': 0.7,
  'Jasmine': 0.001,
  'Hey Jade': 0.001,
  'Hey Jay': 0.001,
  'Hey Jasper': 0.01,
  'Alex': 0.001,
  'Aloe': 0.001,
  'Hey Michael': 0.4,
};

// ACTUAL OPTIONS DISPLAYED IN SETTINGS SCREEN
const AVAILABLE_WAKE_WORDS = [
  { label: `Juniper (${Math.round(WAKE_WORD_SENSITIVITY_MAP['Juniper'] * 100)}%)`, value: 'Juniper' },
];

// Available timezones (common ones)
const AVAILABLE_TIMEZONES = [
  // US Timezones
  { label: 'Pacific Time (PT)', value: 'America/Los_Angeles' },
  { label: 'Mountain Time (MT)', value: 'America/Denver' },
  { label: 'Central Time (CT)', value: 'America/Chicago' },
  { label: 'Eastern Time (ET)', value: 'America/New_York' },
  { label: 'Alaska Time (AKT)', value: 'America/Anchorage' },
  { label: 'Hawaii Time (HST)', value: 'Pacific/Honolulu' },
  
  // Major International Timezones
  { label: 'UTC', value: 'UTC' },
  { label: 'London (GMT/BST)', value: 'Europe/London' },
  { label: 'Paris (CET/CEST)', value: 'Europe/Paris' },
  { label: 'Berlin (CET/CEST)', value: 'Europe/Berlin' },
  { label: 'Moscow (MSK)', value: 'Europe/Moscow' },
  { label: 'Dubai (GST)', value: 'Asia/Dubai' },
  { label: 'Mumbai (IST)', value: 'Asia/Kolkata' },
  { label: 'Bangkok (ICT)', value: 'Asia/Bangkok' },
  { label: 'Singapore (SGT)', value: 'Asia/Singapore' },
  { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  { label: 'Seoul (KST)', value: 'Asia/Seoul' },
  { label: 'Sydney (AEDT/AEST)', value: 'Australia/Sydney' },
  { label: 'Auckland (NZDT/NZST)', value: 'Pacific/Auckland' },
  
  // Additional US Cities
  { label: 'Phoenix (MST)', value: 'America/Phoenix' },
  { label: 'Detroit (EST/EDT)', value: 'America/Detroit' },
  
  // Canada
  { label: 'Toronto (EST/EDT)', value: 'America/Toronto' },
  { label: 'Vancouver (PST/PDT)', value: 'America/Vancouver' },
  
  // South America
  { label: 'São Paulo (BRT)', value: 'America/Sao_Paulo' },
  { label: 'Buenos Aires (ART)', value: 'America/Argentina/Buenos_Aires' },
  
  // Africa
  { label: 'Cairo (EET)', value: 'Africa/Cairo' },
  { label: 'Johannesburg (SAST)', value: 'Africa/Johannesburg' },
];

// Available Deepgram Aura voices
const AVAILABLE_DEEPGRAM_VOICES = [
  // Featured Aura-2 voices (most popular and versatile)
  { label: 'Mars', value: 'aura-2-mars-en' },
  { label: 'Apollo', value: 'aura-2-apollo-en' },
  { label: 'Arcas', value: 'aura-2-arcas-en' },
  { label: 'Aries', value: 'aura-2-aries-en' },

  // Legacy voices for compatibility
  { label: 'Athena', value: 'aura-athena-en' },
  { label: 'Helios', value: 'aura-helios-en' },

  // Professional voices
  { label: 'Asteria', value: 'aura-2-asteria-en' },
  { label: 'Athenia', value: 'aura-2-athena-en' },
  { label: 'Hermes', value: 'aura-2-hermes-en' },

   // International accents
   { label: 'Draco', value: 'aura-2-draco-en' },
   { label: 'Hyperion', value: 'aura-2-hyperion-en' },
   { label: 'Pandora', value: 'aura-2-pandora-en' },
  
  // Additional variety
  { label: 'Iris', value: 'aura-2-iris-en' },
  { label: 'Luna', value: 'aura-2-luna-en' },
  { label: 'Orpheus', value: 'aura-2-orpheus-en' },
  
 
  
];

// Model display mapping for UI
const MODEL_DISPLAY_NAMES = {
  'grok-3': 'Grok 3',
  'o3-mini-2025-01-31': 'OpenAI O3 Mini',
  'claude-sonnet-4-20250514': 'Claude Sonnet 4 (Recommended)',
  'gemini-2.5-pro': 'Gemini 2.5 Pro'
} as const;

type RootStackParamList = {
  MainTabs: undefined;
  Home: undefined;
  Settings: undefined;
  Integrations: undefined;
  Automations: undefined;
  Memories: undefined;
  Login: undefined;
  SignUp: undefined;
  PhoneSignUp: undefined;
};

type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

type Props = {
  navigation: SettingsScreenNavigationProp;
};

// Helper to get display name for a model value
const getModelDisplayName = (modelValue: VoiceSettings['baseLanguageModel']): string => {
  return MODEL_DISPLAY_NAMES[modelValue] || modelValue;
};

// Helper to get model value from display name
const getModelValueFromDisplayName = (displayName: string): VoiceSettings['baseLanguageModel'] | undefined => {
  const entries = Object.entries(MODEL_DISPLAY_NAMES) as [VoiceSettings['baseLanguageModel'], string][];
  const found = entries.find(([_, display]) => display === displayName);
  return found?.[0];
};

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const {
    permissions,
    loading: permissionsLoading,
    requestMicrophone,
    requestBatteryExemption,
    hasMicrophonePermission,
    hasBatteryOptimizationExemption,
  } = usePermissions();

  const { signOut, user } = useAuth();
  const { 
    refreshSettings, 
    voiceSettings: settings, 
    settingsLoading, 
    updateVoiceSettings: updateSettings 
  } = useVoice();

  // Add logging for what we receive from VoiceContext
  console.log('🖥️ SETTINGS_SCREEN: Received settings from VoiceContext:', settings);

  // Use ref to avoid dependency cycles
  const refreshSettingsRef = useRef(refreshSettings);
  refreshSettingsRef.current = refreshSettings;
  
  // Log when settings change
  useEffect(() => {
    console.log('🖥️ SETTINGS_SCREEN: Settings updated in component:', {
      selectedWakeWord: settings.selectedWakeWord,
      wakeWordSensitivity: settings.wakeWordSensitivity
    });
  }, [settings.selectedWakeWord, settings.wakeWordSensitivity]);

  const [savingToDatabase, setSavingToDatabase] = useState(false);
  const [loadingFromDatabase, setLoadingFromDatabase] = useState(false);
  
  // Include database loading in overall loading state
  const loading = permissionsLoading || settingsLoading || loadingFromDatabase;

  // Local state for general instructions to avoid database updates on every character
  const [localGeneralInstructions, setLocalGeneralInstructions] = useState('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);



  // Initialize and sync local state when settings load or change
  useEffect(() => {
    
          const currentInstructions = settings.generalInstructions || '';
    
    setLocalGeneralInstructions(currentInstructions);
    setHasUnsavedChanges(false);
    
  }, [settings.generalInstructions]);

  // Refresh settings from database every time user navigates to Settings
  useFocusEffect(
    React.useCallback(() => {
      const refreshSettingsFromDatabase = async () => {
        if (!user?.id) return;
        
        setLoadingFromDatabase(true);
        
        try {
          console.log('🔄 SETTINGS: Refreshing settings from database on focus...');
          await refreshSettingsRef.current();
          
          // Also fetch full user profile for usage metrics
          const profile = await DatabaseService.getUserProfile(user.id);
          setUserProfile(profile);
          
          console.log('✅ SETTINGS: Settings refreshed successfully');
        } catch (error) {
          console.error('❌ SETTINGS: Error refreshing settings from database:', error);
        } finally {
          setLoadingFromDatabase(false);
        }
      };

      refreshSettingsFromDatabase();
    }, [user?.id])
  );

  // Fix any existing null general_instructions when user loads settings
  useEffect(() => {
    const fixNullInstructions = async () => {
      if (user?.id) {
        try {
          await DatabaseService.fixNullGeneralInstructions();
        } catch (error) {
          console.error('Error fixing null general instructions:', error);
          // Don't show error to user, this is a background fix
        }
      }
    };

    fixNullInstructions();
  }, [user?.id]);

  // Handle local text changes (no database update)
      const handleGeneralInstructionsChange = (text: string) => {
      setLocalGeneralInstructions(text);
      const currentSaved = settings.generalInstructions || '';
      setHasUnsavedChanges(text !== currentSaved);
    };

  // Save general instructions to database
  const saveGeneralInstructions = async () => {
    try {
      setSavingToDatabase(true);
      await handleVoiceSettingsUpdate({ generalInstructions: localGeneralInstructions });
      setHasUnsavedChanges(false);
    } catch (error) {
      console.error('Error saving general instructions:', error);
      Alert.alert('Error', 'Failed to save instructions. Please try again.');
    } finally {
      setSavingToDatabase(false);
    }
  };

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await signOut();
            } catch (error) {
              console.error('Logout error:', error);
              Alert.alert('Error', 'Failed to logout. Please try again.');
            }
          },
        },
      ]
    );
  };

  const openTermsOfUse = () => {
    Linking.openURL('https://www.juniperassistant.com/terms-of-use');
  };

  const openPrivacyPolicy = () => {
    Linking.openURL('https://www.juniperassistant.com/privacy-policy');
  };

  // Enhanced voice settings update function that saves to both local and database
  const handleVoiceSettingsUpdate = async (updates: any) => {
    try {
      // Debug logging to see what's being passed
      console.log('🔍 SETTINGS: handleVoiceSettingsUpdate called with:', JSON.stringify(updates, null, 2));
      console.log('🔍 SETTINGS: updates keys:', Object.keys(updates));
      
      setSavingToDatabase(true);
      
      // Update local settings first for immediate UI response
      await updateSettings(updates);
      
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
            let value = updates[key];
            
            // Map selectedWakeWord to wake_word (consolidating duplicate fields)
            if (key === 'selectedWakeWord') {
              dbKey = 'wake_word';
            }
            
            // Only include valid database fields
            if (!validDbFields.includes(dbKey)) {
              console.log('📱 SETTINGS: ⚠️ Skipping invalid database field:', dbKey, 'from key:', key);
              return acc;
            }
            
            // Allow empty general_instructions
            if (dbKey === 'general_instructions' && value === null) {
              value = '';
            }
            
            acc[dbKey] = value;
            return acc;
          }, {} as any);

          await DatabaseService.updateVoiceSettings(user.id, dbUpdates);
          console.log('✅ SETTINGS: Voice settings saved to user_profiles table');
        } catch (dbError) {
          console.error('❌ SETTINGS: Error saving to user_profiles table:', dbError);
          // Don't show error to user since local settings still work
        }
      }
    } catch (error) {
      console.error('Error updating voice settings:', error);
      Alert.alert('Error', 'Failed to update settings');
    } finally {
      setSavingToDatabase(false);
    }
  };

  if (loading) {
    const getLoadingMessage = () => {
      if (loadingFromDatabase) return 'Loading settings...';
      if (settingsLoading) return 'Loading local settings...';
      if (permissionsLoading) return 'Checking permissions...';
      return 'Loading settings...';
    };

    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={colors.text.primary} />
        <Text style={styles.loadingText}>{getLoadingMessage()}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          {/* <Text style={styles.title}>Settings</Text> */}
          {savingToDatabase && (
            <View style={styles.savingIndicator}>
              <ActivityIndicator size="small" color="#4A90E2" />
              <Text style={styles.savingText}>Saving...</Text>
            </View>
          )}
        </View>
        

        
        <View style={styles.section}>
              <Text style={styles.explanationText}>
                Change the settings below manually or just tell your assistant e.g. "enable Deepgram" {Platform.OS === 'android' ? 'or "or go to sleep" (disables wake word detection)' : ''}
              </Text>
          </View>
        
        {/* Wake Word Section - Android only */}
        {Platform.OS === 'android' && (
          <View style={styles.section}>
            {/* <Text style={styles.explanationText}>
                The wakeword can be used even when the app is closed.
            </Text> */}
            <View style={{ marginTop: 12 }}>
              <WakeWordToggle />
              <WakeWordStatus />
            </View>
          </View>
        )}
        
        {/* Permissions Section */}
        {/* <PermissionsCard
          hasMicrophonePermission={hasMicrophonePermission}
          hasBatteryOptimizationExemption={hasBatteryOptimizationExemption}
          requestMicrophone={requestMicrophone}
          requestBatteryExemption={requestBatteryExemption}
        /> */}

        {/* Timezone Section */}
        <SettingsDropdown
          label="Timezone"
          value={settings.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'}
          options={AVAILABLE_TIMEZONES}
          onValueChange={async (timezone) => {
            console.log('🌍 TIMEZONE: Timezone changed in settings screen');
            console.log('🌍 TIMEZONE: Previous timezone:', settings.timezone || 'auto-detected');
            console.log('🌍 TIMEZONE: New timezone:', timezone);
            await handleVoiceSettingsUpdate({ timezone });
            console.log('🌍 TIMEZONE: ✅ Timezone setting update completed');
          }}
          description="Your local timezone. This helps your assistant provide accurate time-based responses and scheduling."
        />

        {/* Voice Settings Section */}
        <View style={styles.section}>
          {/* <Text style={styles.sectionTitle}>Voice & AI Settings</Text> */}

          <View style={styles.instructionsContainer}>
            {/* <SettingsTextInput
              label="General Instructions"
              value={localGeneralInstructions}
              onChangeText={handleGeneralInstructionsChange}
              placeholder="e.g. 'Keep your responses to a few sentences'"
              description="Custom instructions to guide the AI's behavior and responses"
              multiline={true}
              maxCharacters={1000}
            /> */}
            
            {hasUnsavedChanges && (
              <View style={styles.unsavedChangesContainer}>
                <Text style={styles.unsavedChangesText}>You have unsaved changes</Text>
                <TouchableOpacity
                  style={[styles.saveButton, savingToDatabase && styles.saveButtonDisabled]}
                  onPress={saveGeneralInstructions}
                  disabled={savingToDatabase}
                >
                  {savingToDatabase ? (
                    <ActivityIndicator size="small" color={colors.text.primary} />
                  ) : (
                    <Ionicons name="save-outline" size={16} color={colors.text.primary} />
                  )}
                  <Text style={styles.saveButtonText}>
                    {savingToDatabase ? 'Saving...' : 'Save'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          {/* Wake Word Settings - Android only */}
          {Platform.OS === 'android' && (
            <View style={styles.wakeWordSettingsCard}>
              <SettingsDropdown
                label="Wake Word"
                value={settings.selectedWakeWord || DEFAULT_WAKE_PHRASE}
                options={AVAILABLE_WAKE_WORDS}
                onValueChange={async (selectedWakeWord) => {
                  console.log('🎯 WAKEWORD_SELECTION: Wake word changed in settings screen');
                  console.log('🎯 WAKEWORD_SELECTION: Previous wake word:', settings.selectedWakeWord || DEFAULT_WAKE_PHRASE);
                  console.log('🎯 WAKEWORD_SELECTION: New wake word:', selectedWakeWord);
                  console.log('🎯 WAKEWORD_SELECTION: Available options:', AVAILABLE_WAKE_WORDS.map(w => w.value));
                  
                  // Always set sensitivity to the mapped value for the selected wake word
                  const mappedSensitivity = WAKE_WORD_SENSITIVITY_MAP[selectedWakeWord];
                  let updates: any = { selectedWakeWord };
                  
                  if (mappedSensitivity !== undefined) {
                    console.log('🎚️ AUTO_SENSITIVITY: Setting sensitivity to', mappedSensitivity, 'for wake word:', selectedWakeWord);
                    updates.wakeWordSensitivity = mappedSensitivity;
                  }
                  
                  console.log('🎯 WAKEWORD_SELECTION: Updates to apply:', updates);
                  console.log('🎯 WAKEWORD_SELECTION: Current settings before update:', {
                    selectedWakeWord: settings.selectedWakeWord,
                    wakeWordSensitivity: settings.wakeWordSensitivity
                  });
                  
                  // First update the voice settings, then sync to native
                  await handleVoiceSettingsUpdate(updates);
                  
                  // Now sync to native module
                  try {
                    const wakeWordService = WakeWordService.getInstance();
                    
                    // Always sync wake word first
                    const success = await wakeWordService.setSelectedWakeWord(selectedWakeWord);
                    if (success) {
                      console.log('🎯 WAKEWORD_SELECTION: ✅ Successfully synced wake word to native module');
                      
                      // If sensitivity was updated, sync that too BEFORE restarting
                      if (updates.wakeWordSensitivity !== undefined) {
                        console.log('🎚️ AUTO_SENSITIVITY: Syncing auto-updated sensitivity:', updates.wakeWordSensitivity);
                        const sensitivitySuccess = await wakeWordService.setWakeWordSensitivity(updates.wakeWordSensitivity);
                        if (sensitivitySuccess) {
                          console.log('🎚️ AUTO_SENSITIVITY: ✅ Successfully synced auto-updated sensitivity to native module');
                        } else {
                          console.error('🎚️ AUTO_SENSITIVITY: ❌ Failed to sync auto-updated sensitivity to native module');
                        }
                      }
                      
                      // Restart wake word detection if currently running to apply changes
                      const isRunning = await wakeWordService.isWakeWordDetectionRunning();
                      if (isRunning) {
                        console.log('🔄 Restarting wake word detection to apply new wake word and sensitivity...');
                        await wakeWordService.stopWakeWordDetection();
                        await new Promise(resolve => setTimeout(resolve, 500));
                        await wakeWordService.startWakeWordDetection();
                        console.log('✅ Wake word detection restarted with new wake word and sensitivity');
                      }
                    } else {
                      console.error('🎯 WAKEWORD_SELECTION: ❌ Failed to sync wake word to native module');
                    }
                  } catch (error) {
                    console.error('🎯 WAKEWORD_SELECTION: ❌ Error syncing wake word to native module:', error);
                  }
                  
                  console.log('🎯 WAKEWORD_SELECTION: ✅ Wake word setting update completed');
                }}
                description="The word you say to activate your assistant (maximum threshold for background detection)."
              />

              <View style={styles.indentedSetting}>
                <SettingsNumberInput
                  label="Wake Word Threshold"
                  value={settings.wakeWordSensitivity || 0.3}
                  onSave={async (wakeWordSensitivity) => {
                    console.log('🎚️ WAKEWORD_SENSITIVITY: Sensitivity changed in settings screen');
                    console.log('🎚️ WAKEWORD_SENSITIVITY: Previous sensitivity:', settings.wakeWordSensitivity || 0.3);
                    console.log('🎚️ WAKEWORD_SENSITIVITY: New sensitivity:', wakeWordSensitivity);
                    console.log('🎚️ WAKEWORD_SENSITIVITY: Percentage:', `${Math.round(wakeWordSensitivity * 100)}%`);
                    
                    // Update both the voice settings and the native wake word module
                    await Promise.all([
                      handleVoiceSettingsUpdate({ wakeWordSensitivity }),
                      (async () => {
                        try {
                          const wakeWordService = WakeWordService.getInstance();
                          const success = await wakeWordService.setWakeWordSensitivity(wakeWordSensitivity);
                          if (success) {
                            console.log('🎚️ WAKEWORD_SENSITIVITY: ✅ Successfully synced sensitivity to native module');
                            
                            // Restart wake word detection if currently running to apply changes
                            const isRunning = await wakeWordService.isWakeWordDetectionRunning();
                            if (isRunning) {
                              console.log('🔄 Restarting wake word detection to apply new sensitivity...');
                              await wakeWordService.stopWakeWordDetection();
                              await new Promise(resolve => setTimeout(resolve, 500));
                              await wakeWordService.startWakeWordDetection();
                              console.log('✅ Wake word detection restarted with new sensitivity');
                            }
                          } else {
                            console.error('🎚️ WAKEWORD_SENSITIVITY: ❌ Failed to sync sensitivity to native module');
                          }
                        } catch (error) {
                          console.error('🎚️ WAKEWORD_SENSITIVITY: ❌ Error syncing sensitivity to native module:', error);
                        }
                      })()
                    ]);
                    
                    console.log('🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity setting update completed');
                  }}
                  minimumValue={0}
                  maximumValue={1}
                  step={1e-5}
                  description="The threshold level for wake word detection (0 = more sensitive, 1 = less sensitive).  Note: threshold must be set lower for the word to be detected when the app is closed."
                  formatValue={(value) => `${Math.round(value * 100)}%`}
                />
              </View>
            </View>
          )}

          <ExpandableSettingsToggle
            label="Deepgram Voice"
            value={settings.deepgramEnabled}
            onValueChange={async (deepgramEnabled) => {
              console.log('🎵 DEEPGRAM_TOGGLE: Deepgram voice toggled in settings screen');
              console.log('🎵 DEEPGRAM_TOGGLE: Previous enabled state:', settings.deepgramEnabled);
              console.log('🎵 DEEPGRAM_TOGGLE: New enabled state:', deepgramEnabled);
              await handleVoiceSettingsUpdate({ deepgramEnabled });
              console.log('🎵 DEEPGRAM_TOGGLE: ✅ Deepgram toggle update completed');
            }}
            description="Choose from a variety of voices; when disabled, the application falls back to on device text-to-speech. Note: Voice interaction with Deepgram is a bit slower than with on device text-to-speech."
            hasSubSettings={true}
          >
            <VoiceSelectionDropdown
              label="Voice Selection"
              value={settings.selectedDeepgramVoice || 'aura-2-pandora-en'}
              options={AVAILABLE_DEEPGRAM_VOICES}
              onValueChange={async (selectedDeepgramVoice) => {
                console.log('🎵 DEEPGRAM_SELECTION: Deepgram voice selected in settings screen');
                console.log('🎵 DEEPGRAM_SELECTION: Previous voice:', settings.selectedDeepgramVoice || 'aura-2-pandora-en');
                console.log('🎵 DEEPGRAM_SELECTION: New voice:', selectedDeepgramVoice);
                console.log('🎵 DEEPGRAM_SELECTION: Available voices:', AVAILABLE_DEEPGRAM_VOICES.map(v => v.value));
                await handleVoiceSettingsUpdate({ selectedDeepgramVoice });
                console.log('🎵 DEEPGRAM_SELECTION: ✅ Deepgram voice setting update completed');
              }}
              description="Choose the voice for your assistant's responses. Tap Preview to hear each voice."
            />
          </ExpandableSettingsToggle>

          {/* <SettingsDropdown
            label="Model Selection"
            value={settings.baseLanguageModel}
            options={Object.entries(MODEL_DISPLAY_NAMES).map(([value, label]) => ({
              label: label as string,
              value: value as any,
            }))}
            onValueChange={async (baseLanguageModel) => {
              await handleVoiceSettingsUpdate({ baseLanguageModel });
            }}
            description="The model used for chat; other models are used for complex backend tasks."
          /> */}

        </View>

        <View style={styles.accountSection}>
          <Text style={styles.accountTitle}>Account</Text>
          
          {user && (
            <View style={styles.userInfo}>
              <Ionicons name="person-circle-outline" size={24} color="#B0B0B0" />
              <View style={styles.userDetails}>
                <Text style={styles.userEmail}>{user.email || user.phone || 'Unknown User'}</Text>
                {user.user_metadata?.full_name && (
                  <Text style={styles.userName}>{user.user_metadata.full_name}</Text>
                )}
              </View>
            </View>
          )}

          <UsageMetricsCard userProfile={userProfile} />

          <View style={styles.linksContainer}>
            <TouchableOpacity style={styles.linkItem} onPress={openTermsOfUse}>
              <Ionicons name="document-text-outline" size={20} color="#B0B0B0" />
              <Text style={styles.linkItemText}>Terms of Use</Text>
              <Ionicons name="chevron-forward" size={16} color="#B0B0B0" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.linkItem} onPress={openPrivacyPolicy}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#B0B0B0" />
              <Text style={styles.linkItemText}>Privacy Policy</Text>
              <Ionicons name="chevron-forward" size={16} color="#B0B0B0" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={20} color={colors.text.primary} />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 16,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: colors.text.primary,
    marginTop: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
  },
  wakeWordExplanation: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  explanationText: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
  },
  accountSection: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  accountTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: '#E74C3C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: colors.text.primary,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userDetails: {
    marginLeft: 16,
  },
  userEmail: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  userName: {
    fontSize: 14,
    color: colors.text.primary,
  },
  savingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  savingText: {
    color: '#4A90E2',
    fontSize: 14,
    marginLeft: 8,
  },
  instructionsContainer: {
    marginBottom: 24,
  },
  unsavedChangesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  unsavedChangesText: {
    color: '#B0B0B0',
    fontSize: 14,
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  saveButtonDisabled: {
    backgroundColor: '#333333',
  },
  saveButtonText: {
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
  sourcesContainer: {
    marginBottom: 24,
  },
  sourcesLabel: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  sourcesDescription: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  wakeWordSettingsCard: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  indentedSetting: {
    marginLeft: 16,
    marginTop: 8,
  },
  noteContainer: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#4A90E2',
  },
  noteText: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
  },
  linksContainer: {
    marginBottom: 16,
  },
  linkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    marginBottom: 8,
  },
  linkItemText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: colors.text.primary,
  },
}); 