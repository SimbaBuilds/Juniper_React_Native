import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator, Platform, TouchableOpacity, Alert } from 'react-native';
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

// Voice Settings interface
export interface VoiceSettings {
  deepgramEnabled: boolean;
  baseLanguageModel: 'grok-3' | 'grok-3.5' | 'gpt-4o' | 'claude-3-5-sonnet-20241022';
  generalInstructions: string;
}

// Model display mapping for UI
const MODEL_DISPLAY_NAMES = {
  'grok-3': 'Grok 3',
  'grok-3.5': 'Grok 3.5', 
  'gpt-4o': 'GPT 4o',
  'claude-3-5-sonnet-20241022': 'Claude Sonnet 3.5'
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
  console.log('🖥️ SETTINGS_SCREEN: Settings loading state:', settingsLoading);

  // Use ref to avoid dependency cycles
  const refreshSettingsRef = useRef(refreshSettings);
  refreshSettingsRef.current = refreshSettings;

  const [savingToDatabase, setSavingToDatabase] = useState(false);
  const [loadingFromDatabase, setLoadingFromDatabase] = useState(false);
  
  // Include database loading in overall loading state
  const loading = permissionsLoading || settingsLoading || loadingFromDatabase;

  // Local state for general instructions to avoid database updates on every character
  const [localGeneralInstructions, setLocalGeneralInstructions] = useState('');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  console.log('🖥️ SETTINGS_SCREEN: Current localGeneralInstructions state:', localGeneralInstructions);
  console.log('🖥️ SETTINGS_SCREEN: Has unsaved changes:', hasUnsavedChanges);

  // Initialize and sync local state when settings load or change
  useEffect(() => {
    console.log('🖥️ SETTINGS_SCREEN: useEffect triggered for settings.generalInstructions:', settings.generalInstructions);
    
    const defaultInstructions = 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.';
    const currentInstructions = settings.generalInstructions || defaultInstructions;
    
    console.log('🖥️ SETTINGS_SCREEN: Setting localGeneralInstructions to:', currentInstructions);
    setLocalGeneralInstructions(currentInstructions);
    setHasUnsavedChanges(false);
    
    console.log('🖥️ SETTINGS_SCREEN: useEffect completed, localGeneralInstructions should now be:', currentInstructions);
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
    const defaultInstructions = 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.';
    const currentSaved = settings.generalInstructions || defaultInstructions;
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

  // Enhanced voice settings update function that saves to both local and database
  const handleVoiceSettingsUpdate = async (updates: any) => {
    try {
      setSavingToDatabase(true);
      
      // Update local settings first for immediate UI response
      await updateSettings(updates);
      
      // Save to database if user is authenticated
      if (user?.id) {
        try {
          // Convert camelCase keys to snake_case for database
          const dbUpdates = Object.keys(updates).reduce((acc, key) => {
            const dbKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
            let value = updates[key];
            
            // Ensure general_instructions always has a default value
            if (dbKey === 'general_instructions' && (!value || value.trim() === '')) {
              value = 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.';
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
      if (loadingFromDatabase) return 'Loading settings from database...';
      if (settingsLoading) return 'Loading local settings...';
      if (permissionsLoading) return 'Checking permissions...';
      return 'Loading settings...';
    };

    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={styles.loadingText}>{getLoadingMessage()}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          {savingToDatabase && (
            <View style={styles.savingIndicator}>
              <ActivityIndicator size="small" color="#4A90E2" />
              <Text style={styles.savingText}>Saving...</Text>
            </View>
          )}
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wake Word</Text>
          <View style={styles.wakeWordExplanation}>
            <Text style={styles.explanationText}>
              The wake word is the word you will use to activate and speak to your assistant.
              You do not have to have the app open to activate your assistant.
            </Text>
          </View>
          <WakeWordToggle />
          <WakeWordStatus />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>
          
          <View style={styles.permissionItem}>
            <Text style={styles.permissionTitle}>Microphone Access</Text>
            <Text style={styles.permissionStatus}>
              Status: {hasMicrophonePermission ? '✅ Granted' : '❌ Denied'}
            </Text>
            {!hasMicrophonePermission && (
              <Text 
                style={styles.permissionButton}
                onPress={requestMicrophone}
              >
                Request Permission
              </Text>
            )}
          </View>

          {Platform.OS === 'android' && (
            <View style={styles.permissionItem}>
              <Text style={styles.permissionTitle}>Battery Optimization</Text>
              <Text style={styles.permissionStatus}>
                Status: {hasBatteryOptimizationExemption ? '✅ Optimized' : '❌ Not Optimized'}
              </Text>
              {!hasBatteryOptimizationExemption && (
                <Text 
                  style={styles.permissionButton}
                  onPress={requestBatteryExemption}
                >
                  Optimize Battery Usage
                </Text>
              )}
            </View>
          )}
        </View>

        {/* Voice Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Voice & AI Settings</Text>

          <View style={styles.instructionsContainer}>
            <SettingsTextInput
              label="General Instructions"
              value={localGeneralInstructions}
              onChangeText={handleGeneralInstructionsChange}
              placeholder="Enter instructions for the AI assistant..."
              description="Custom instructions to guide the AI's behavior and responses"
              multiline={true}
            />
            
            {hasUnsavedChanges && (
              <View style={styles.unsavedChangesContainer}>
                <Text style={styles.unsavedChangesText}>You have unsaved changes</Text>
                <TouchableOpacity
                  style={[styles.saveButton, savingToDatabase && styles.saveButtonDisabled]}
                  onPress={saveGeneralInstructions}
                  disabled={savingToDatabase}
                >
                  {savingToDatabase ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Ionicons name="save-outline" size={16} color="#FFFFFF" />
                  )}
                  <Text style={styles.saveButtonText}>
                    {savingToDatabase ? 'Saving...' : 'Save'}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <ExpandableSettingsToggle
            label="Deepgram Voice"
            value={settings.deepgramEnabled}
            onValueChange={async (deepgramEnabled) => {
              await handleVoiceSettingsUpdate({ deepgramEnabled });
            }}
            description="Enhanced voice recognition with Deepgram"
            hasSubSettings={true}
          />

          <SettingsDropdown
            label="Language Model"
            value={settings.baseLanguageModel}
            options={Object.entries(MODEL_DISPLAY_NAMES).map(([value, label]) => ({
              label: label as string,
              value: value as any,
            }))}
            onValueChange={async (baseLanguageModel) => {
              await handleVoiceSettingsUpdate({ baseLanguageModel });
            }}
            description="Choose the AI model for processing your requests"
          />
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

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Ionicons name="log-out-outline" size={20} color="#FFFFFF" />
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
    color: '#FFFFFF',
    marginTop: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 16,
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
  permissionItem: {
    marginBottom: 16,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  permissionStatus: {
    fontSize: 14,
    color: '#B0B0B0',
    marginTop: 4,
  },
  permissionButton: {
    color: '#4A90E2',
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 8,
  },
}); 