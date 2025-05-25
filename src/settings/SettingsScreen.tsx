import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator, Platform, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { WakeWordToggle } from '../wakeword/components/WakeWordToggle';
import { WakeWordStatus } from '../wakeword/components/WakeWordStatus';
import { usePermissions } from './usePermissions';
import { useFeatureSettings } from './useFeatureSettings';
import { useAuth } from '../auth/AuthContext';
import { SettingsToggle } from './components/SettingsToggle';
import { ExpandableSettingsToggle } from './components/ExpandableSettingsToggle';
import { SettingsArrayInput } from './components/SettingsArrayInput';
import { SettingsDropdown } from './components/SettingsDropdown';
import { SettingsTextInput } from './components/SettingsTextInput';
import { NewsCategoryManager } from '../features/news/NewsCategoryManager';
import { GoogleCalendarManager } from '../features/calendar/GoogleCalendarManager';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
};

type SettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

type Props = {
  navigation: SettingsScreenNavigationProp;
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

  const {
    settings,
    loading: settingsLoading,
    updateTickersSettings,
    updateNewsSettings,
    updateCalendarSettings,
    updateTellMeThingsSettings,
    updateProjectUnderstandingSettings,
    updateVoiceSettings,
    updateGroceriesSettings,
    updateAlarmClockSettings,
  } = useFeatureSettings();

  const { signOut, user } = useAuth();

  const loading = permissionsLoading || settingsLoading;

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

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={styles.loadingText}>Loading settings...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wake Word</Text>
          <WakeWordToggle />
          <WakeWordStatus />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Permissions</Text>
          
          <View style={styles.permissionItem}>
            <Text style={styles.permissionTitle}>Microphone Access</Text>
            <Text style={styles.permissionStatus}>
              Status: {hasMicrophonePermission ? '✅ Granted' : '❌ Not Granted'}
            </Text>
            {!hasMicrophonePermission && (
              <Text 
                style={styles.permissionButton}
                onPress={requestMicrophone}
              >
                Grant Microphone Permission
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
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>

          <ExpandableSettingsToggle
            label="Tickers"
            value={settings.tickers.enabled}
            onValueChange={(enabled) => updateTickersSettings({ enabled })}
            description="Track your investment tickers and market data"
            hasSubSettings={true}
          >
            <SettingsArrayInput
              label="Ticker Symbols"
              values={settings.tickers.tickers}
              onValuesChange={async (tickers) => {
                try {
                  await updateTickersSettings({ tickers });
                } catch (error) {
                  console.error('Error updating tickers:', error);
                  // Could show a toast notification here if needed
                }
              }}
              placeholder="Add ticker symbol (e.g., AAPL, MSFT)..."
              description="Stock symbols to track in your tickers"
              maxItems={20}
            />
          </ExpandableSettingsToggle>

          <ExpandableSettingsToggle
            label="News"
            value={settings.news.enabled}
            onValueChange={(enabled) => updateNewsSettings({ enabled })}
            description="Get news updates and market information"
            hasSubSettings={true}
          >
            <SettingsToggle
              label="XAI LiveSearch API"
              value={settings.news.xaiLiveSearchEnabled}
              onValueChange={(xaiLiveSearchEnabled) => updateNewsSettings({ xaiLiveSearchEnabled })}
              description="Use XAI LiveSearch for real-time news"
            />

            <SettingsToggle
              label="X/Twitter Search"
              value={settings.news.twitterSearchEnabled}
              onValueChange={(twitterSearchEnabled) => updateNewsSettings({ twitterSearchEnabled })}
              description="Search X/Twitter (free tier, 100 requests/month)"
            />

            <NewsCategoryManager
              categories={settings.news.categories}
              onCategoriesChange={async (categories) => {
                try {
                  await updateNewsSettings({ categories });
                } catch (error) {
                  console.error('Error updating news categories:', error);
                  // Could show a toast notification here if needed
                }
              }}
              description="Organize your news sources by category with detailed information"
            />
          </ExpandableSettingsToggle>

          <ExpandableSettingsToggle
            label="Calendar"
            value={settings.calendar.enabled}
            onValueChange={(enabled) => updateCalendarSettings({ enabled })}
            description="Calendar integration and event management"
            hasSubSettings={true}
          >
            <GoogleCalendarManager />
          </ExpandableSettingsToggle>

          <ExpandableSettingsToggle
            label="Tell Me The Things"
            value={settings.tellMeThings.enabled}
            onValueChange={(enabled) => updateTellMeThingsSettings({ enabled })}
            description="Daily briefing with tickers, news, and calendar"
            hasSubSettings={true}
          >
            <SettingsArrayInput
              label="Trigger Phrases"
              values={settings.tellMeThings.triggerPhrases}
              onValuesChange={(triggerPhrases) => updateTellMeThingsSettings({ triggerPhrases })}
              placeholder="Add trigger phrase..."
              description="Phrases that activate your daily briefing"
              maxItems={5}
            />

            <SettingsToggle
              label="Include Tickers"
              value={settings.tellMeThings.includeTickers}
              onValueChange={(includeTickers) => updateTellMeThingsSettings({ includeTickers })}
              description="Include tickers updates in briefing"
            />

            <SettingsToggle
              label="Include News"
              value={settings.tellMeThings.includeNews}
              onValueChange={(includeNews) => updateTellMeThingsSettings({ includeNews })}
              description="Include news updates in briefing"
            />

            <SettingsToggle
              label="Include Calendar"
              value={settings.tellMeThings.includeCalendar}
              onValueChange={(includeCalendar) => updateTellMeThingsSettings({ includeCalendar })}
              description="Include today's calendar in briefing"
            />
          </ExpandableSettingsToggle>

          <ExpandableSettingsToggle
            label="Project Understanding"
            value={settings.projectUnderstanding.enabled}
            onValueChange={(enabled) => updateProjectUnderstandingSettings({ enabled })}
            description="AI note-taking and project management"
            hasSubSettings={true}
          >
            <SettingsToggle
              label="Google Keep"
              value={settings.projectUnderstanding.googleKeepEnabled}
              onValueChange={(googleKeepEnabled) => updateProjectUnderstandingSettings({ googleKeepEnabled })}
              description="Save notes to Google Keep"
            />

            <SettingsToggle
              label="iCloud Notes"
              value={settings.projectUnderstanding.icloudNotesEnabled}
              onValueChange={(icloudNotesEnabled) => updateProjectUnderstandingSettings({ icloudNotesEnabled })}
              description="Save notes to iCloud Notes app"
            />

            <SettingsToggle
              label="Google Docs"
              value={settings.projectUnderstanding.googleDocsEnabled}
              onValueChange={(googleDocsEnabled) => updateProjectUnderstandingSettings({ googleDocsEnabled })}
              description="Save notes to Google Docs (default to most recent)"
            />

            <SettingsToggle
              label="Email to Self"
              value={settings.projectUnderstanding.emailToSelfEnabled}
              onValueChange={(emailToSelfEnabled) => updateProjectUnderstandingSettings({ emailToSelfEnabled })}
              description="Email notes to yourself"
            />
          </ExpandableSettingsToggle>
        </View>

        {/* Voice Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Voice & AI Settings</Text>

          <ExpandableSettingsToggle
            label="Deepgram Voice"
            value={settings.voice.deepgramEnabled}
            onValueChange={(deepgramEnabled) => updateVoiceSettings({ deepgramEnabled })}
            description="Enhanced voice recognition with Deepgram"
            hasSubSettings={false}
          />

          <SettingsDropdown
            label="Base Language Model"
            value={settings.voice.baseLanguageModel}
            onValueChange={(baseLanguageModel) => updateVoiceSettings({ baseLanguageModel })}
            options={[
              { label: 'GPT-4o', value: 'gpt-4o' as const },
              { label: 'GPT-4o Mini', value: 'gpt-4o-mini' as const },
              { label: 'Grok 3', value: 'Grok 3' as const },
              { label: 'Grok 3.5', value: 'Grok 3.5' as const },
            ]}
            description="Select the language model to use for AI responses"
          />

          <SettingsTextInput
            label="General Instructions"
            value={settings.voice.generalInstructions}
            onChangeText={(generalInstructions) => updateVoiceSettings({ generalInstructions })}
            placeholder="Enter instructions for the AI assistant..."
            description="Custom instructions to guide the AI's behavior and responses"
            multiline={true}
          />
        </View>

        {/* Other Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Features</Text>

          {/* Groceries */}
          <ExpandableSettingsToggle
            label="Groceries Functionality"
            value={settings.groceries.enabled}
            onValueChange={(enabled) => updateGroceriesSettings({ enabled })}
            description="Grocery list management and shopping assistance"
            hasSubSettings={false}
          />

          {/* Alarm Clock */}
          <ExpandableSettingsToggle
            label="Alarm Clock"
            value={settings.alarmClock.enabled}
            onValueChange={(enabled) => updateAlarmClockSettings({ enabled })}
            description="Voice-controlled alarm and reminder system"
            hasSubSettings={false}
          />
        </View>
        
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            Configure your assistant's features and capabilities. Each feature can be enabled or disabled 
            individually to customize your experience.
          </Text>
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
  infoSection: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
  },
  infoText: {
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
}); 