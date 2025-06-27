import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PerplexityAuthService from '../auth/PerplexityAuthService';
import IntegrationEmailService from '../../services/IntegrationEmailService';
import { useAuth } from '../../auth/AuthContext';

interface ApiKeyModalProps {
  visible: boolean;
  serviceName: string;
  integrationId?: string;
  onClose: () => void;
  onSuccess: () => void;
  onSubmit: (apiKey: string) => Promise<void>;
  onEmailSent?: () => void; // Called when email is sent
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  visible,
  serviceName,
  integrationId,
  onClose,
  onSuccess,
  onSubmit,
  onEmailSent,
}) => {
  const { user } = useAuth();
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = async () => {
    if (!apiKey.trim()) {
      Alert.alert('Missing API Key', 'Please enter your API key.');
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit(apiKey.trim());
      setApiKey('');
      onSuccess();
    } catch (error) {
      console.error('API key submission error:', error);
      // Error handling is done in the parent component
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setApiKey('');
    setShowKey(false);
    onClose();
  };

  const handleSendEmail = async () => {
    if (!user?.id || !user?.email || !integrationId) {
      Alert.alert('Error', 'Missing user information or integration ID.');
      return;
    }

    setIsEmailLoading(true);
    try {
      const emailService = IntegrationEmailService.getInstance();
      const result = await emailService.sendSetupEmail({
        userId: user.id,
        integrationId,
        serviceName,
        userEmail: user.email
      });

      if (result.success) {
        Alert.alert(
          'Email Sent! 📧',
          'We\'ve sent you a setup link. Check your email and complete the setup on desktop, then return here to finalize the integration.',
          [
            {
              text: 'Got it',
              onPress: () => {
                onEmailSent?.();
                handleClose();
              }
            }
          ]
        );
      } else {
        Alert.alert('Error', result.message || 'Failed to send setup email.');
      }
    } catch (error) {
      console.error('Error sending setup email:', error);
      Alert.alert('Error', 'Failed to send setup email. Please try again.');
    } finally {
      setIsEmailLoading(false);
    }
  };

  const getInstructions = () => {
    if (serviceName.toLowerCase() === 'perplexity') {
      return PerplexityAuthService.getApiKeyInstructions();
    }
    return 'Please enter your API key for this service.';
  };

  const getPlaceholder = () => {
    if (serviceName.toLowerCase() === 'perplexity') {
      return 'pplx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    }
    return 'Enter your API key';
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>
          <Text style={styles.title}>Connect {serviceName}</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Instructions */}
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionsTitle}>Setup Instructions</Text>
            <Text style={styles.instructionsText}>{getInstructions()}</Text>
          </View>

          {/* API Key Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>API Key</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                value={apiKey}
                onChangeText={setApiKey}
                placeholder={getPlaceholder()}
                placeholderTextColor="#999"
                secureTextEntry={!showKey}
                autoCapitalize="none"
                autoCorrect={false}
                multiline={false}
                editable={!isLoading}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowKey(!showKey)}
              >
                <Ionicons
                  name={showKey ? 'eye-off' : 'eye'}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Security Note */}
          <View style={styles.securityNote}>
            <Ionicons name="shield-checkmark" size={16} color="#4CAF50" />
            <Text style={styles.securityText}>
              Your API key is stored securely and encrypted on your device.
            </Text>
          </View>

          {/* Divider and Email Option */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
          </View>

          <View style={styles.emailOptionContainer}>
            <View style={styles.emailOptionHeader}>
              <Ionicons name="desktop-outline" size={20} color="#4A90E2" />
              <Text style={styles.emailOptionTitle}>Complete on Desktop</Text>
            </View>
            <Text style={styles.emailOptionDescription}>
              Get a setup link sent to your email. Complete the form on desktop, then return here to finalize.
            </Text>
            <TouchableOpacity
              style={[styles.emailButton, isEmailLoading && styles.disabledButton]}
              onPress={handleSendEmail}
              disabled={isEmailLoading || !integrationId}
            >
              {isEmailLoading ? (
                <ActivityIndicator color="#4A90E2" size="small" />
              ) : (
                <>
                  <Ionicons name="mail-outline" size={16} color="#4A90E2" />
                  <Text style={styles.emailButtonText}>Send Setup Link</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={handleClose}
            disabled={isLoading}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.connectButton, isLoading && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={isLoading || !apiKey.trim()}
          >
            {isLoading ? (
              <ActivityIndicator color="#FFFFFF" size="small" />
            ) : (
              <Text style={styles.connectButtonText}>Connect</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  closeButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  instructionsContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  instructionsText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333',
  },
  eyeButton: {
    padding: 12,
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#F0F8F0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  securityText: {
    fontSize: 12,
    color: '#4CAF50',
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F5F5F5',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  connectButton: {
    backgroundColor: '#4A90E2',
  },
  connectButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  disabledButton: {
    backgroundColor: '#B0B0B0',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    marginHorizontal: 16,
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
  emailOptionContainer: {
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E8EBFF',
  },
  emailOptionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  emailOptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
  },
  emailOptionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  emailButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A90E2',
  },
});

export default ApiKeyModal; 