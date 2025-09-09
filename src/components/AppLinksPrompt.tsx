import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Alert,
  Platform,
} from 'react-native';
import Button from '../shared/components/Button';
import { colors } from '../shared/theme/colors';
import { openAppLinksSettings } from '../utils/appLinks';

interface AppLinksPromptProps {
  visible: boolean;
  onDismiss: () => void;
  onSettingsOpened?: () => void;
  title?: string;
  message?: string;
  isBlocking?: boolean;
  isFirstLaunch?: boolean;
}

const AppLinksPrompt: React.FC<AppLinksPromptProps> = ({
  visible,
  onDismiss,
  onSettingsOpened,
  title,
  message,
  isBlocking = false,
  isFirstLaunch = false,
}) => {
  const handleOpenSettings = async () => {
    try {
      const success = await openAppLinksSettings();
      
      if (success) {
        onSettingsOpened?.();
        
        // Show instruction dialog after opening settings
        Alert.alert(
          'Enable App Links',
          `In the settings page that just opened:\n\n1. Find "Open by default" section\n2. Tap the toggle next to "Open supported links"\n3. Make sure juniperassistant.com is checked\n4. Press back to return to the app`,
          [{ text: 'Got it', onPress: onDismiss }],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          'Settings Not Available',
          'Unable to open app settings. Please manually go to Settings > Apps > Juniper > Open by default and enable "Open supported links".',
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('❌ Error opening app links settings:', error);
      Alert.alert(
        'Error',
        'Failed to open settings. Please try again or manually configure app links in your device settings.',
        [{ text: 'OK' }]
      );
    }
  };

  const getDefaultTitle = () => {
    if (isFirstLaunch) {
      return 'Welcome to Juniper!';
    }
    if (isBlocking) {
      return 'App Links Required';
    }
    return 'Enable App Links';
  };

  const getDefaultMessage = () => {
    if (isFirstLaunch) {
      return 'To connect your accounts and use integrations (Google, Microsoft, Slack, etc.), you need to enable app links.\n\nThis is a one-time Android security requirement that allows Juniper to handle authentication redirects properly.';
    }
    if (isBlocking) {
      return 'You must enable "Open by default" for juniperassistant.com to complete authentication.\n\nWithout this setting, OAuth authentication will fail and you won\'t be able to connect your accounts.';
    }
    return 'Enable app links to improve your experience with account integrations and authentication.';
  };

  // Don't show on iOS
  if (Platform.OS === 'ios') {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={isBlocking ? undefined : onDismiss}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {title || getDefaultTitle()}
            </Text>
          </View>
          
          <View style={styles.content}>
            <Text style={styles.message}>
              {message || getDefaultMessage()}
            </Text>
            
            <View style={styles.instructions}>
              <Text style={styles.instructionsTitle}>What this does:</Text>
              <Text style={styles.instructionsText}>
                • Enables Juniper to automatically handle authentication links{'\n'}
                • Allows seamless connection to your accounts{'\n'}
                • Required for OAuth integrations to work properly
              </Text>
            </View>
          </View>
          
          <View style={styles.buttons}>
            <Button
              title="Open Settings"
              variant="primary"
              onPress={handleOpenSettings}
              style={styles.primaryButton}
            />
            
            {!isBlocking && (
              <Button
                title="Maybe Later"
                variant="outlined"
                onPress={onDismiss}
                style={styles.secondaryButton}
              />
            )}
          </View>
          
          {isBlocking && (
            <View style={styles.blockingNotice}>
              <Text style={styles.blockingNoticeText}>
                ⚠️ This must be completed to continue
              </Text>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: colors.background.dark,
    borderRadius: 12,
    padding: 20,
    maxWidth: 350,
    width: '100%',
    elevation: 10,
    shadowColor: colors.common.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  header: {
    marginBottom: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text.primary,
    textAlign: 'center',
  },
  content: {
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.text.primary,
    textAlign: 'left',
    marginBottom: 16,
  },
  instructions: {
    backgroundColor: colors.background.card,
    padding: 14,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: colors.button.primary,
  },
  instructionsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.common.black,
    marginBottom: 8,
  },
  instructionsText: {
    fontSize: 13,
    lineHeight: 18,
    color: colors.common.black,
  },
  buttons: {
    gap: 12,
  },
  primaryButton: {
    backgroundColor: colors.button.primary,
  },
  secondaryButton: {
    borderColor: colors.text.secondary,
  },
  blockingNotice: {
    marginTop: 16,
    padding: 12,
    backgroundColor: 'rgba(255, 160, 0, 0.1)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.status.warning,
  },
  blockingNoticeText: {
    fontSize: 13,
    color: colors.status.warning,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default AppLinksPrompt;