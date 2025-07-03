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
import TwilioAuthService from '../auth/services/TwilioAuthService';
import IntegrationEmailService from '../../services/IntegrationEmailService';
import { useAuth } from '../../auth/AuthContext';

interface TwilioCredentials {
  accountSid: string;
  apiKey: string;
  apiSecret: string;
  phoneNumber: string;
}

interface TwilioCredentialsModalProps {
  visible: boolean;
  integrationId?: string;
  onClose: () => void;
  onSuccess: () => void;
  onSubmit: (credentials: TwilioCredentials) => Promise<void>;
  onEmailSent?: () => void; // Called when email is sent
}

const TwilioCredentialsModal: React.FC<TwilioCredentialsModalProps> = ({
  visible,
  integrationId,
  onClose,
  onSuccess,
  onSubmit,
  onEmailSent,
}) => {
  const { user } = useAuth();
  const [credentials, setCredentials] = useState<TwilioCredentials>({
    accountSid: '',
    apiKey: '',
    apiSecret: '',
    phoneNumber: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);

  const handleSubmit = async () => {
    // Validate required fields
    if (!credentials.accountSid.trim() || !credentials.apiKey.trim() || 
        !credentials.apiSecret.trim() || !credentials.phoneNumber.trim()) {
      Alert.alert('Missing Information', 'Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit({
        accountSid: credentials.accountSid.trim(),
        apiKey: credentials.apiKey.trim(),
        apiSecret: credentials.apiSecret.trim(),
        phoneNumber: credentials.phoneNumber.trim(),
      });
      
      // Clear form on success
      setCredentials({
        accountSid: '',
        apiKey: '',
        apiSecret: '',
        phoneNumber: '',
      });
      onSuccess();
    } catch (error) {
      console.error('Twilio credentials submission error:', error);
      // Error handling is done in the parent component
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setCredentials({
      accountSid: '',
      apiKey: '',
      apiSecret: '',
      phoneNumber: '',
    });
    setShowSecrets(false);
    onClose();
  };

  const updateCredential = (field: keyof TwilioCredentials, value: string) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return credentials.accountSid.trim() && 
           credentials.apiKey.trim() && 
           credentials.apiSecret.trim() && 
           credentials.phoneNumber.trim();
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
        serviceName: 'Twilio',
        userEmail: user.email
      });

      if (result.success) {
        Alert.alert(
          'Email Sent! 📧',
          'We\'ve sent you a setup link. Please check your email and complete the setup on desktop; then return here to finalize the integration.',
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
          <Text style={styles.title}>Connect Twilio</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* Complete on Desktop Option - Moved to Top */}
          <View style={styles.emailOptionContainer}>
            <View style={styles.emailOptionHeader}>
              <Ionicons name="desktop-outline" size={20} color="#4A90E2" />
              <Text style={styles.emailOptionTitle}>Complete on Desktop (Recommended)</Text>
            </View>
            <Text style={styles.emailOptionDescription}>
              Get a setup link sent to your email. Complete the comprehensive setup guide on desktop, then return here to finalize.
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

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or enter credentials manually below</Text>
            <View style={styles.divider} />
          </View>

          {/* Instructions */}
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionsTitle}>Manual Setup Instructions</Text>
            <Text style={styles.instructionsText}>{TwilioAuthService.getUserGuide()}</Text>
          </View>

          {/* Account SID Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Account SID</Text>
            <TextInput
              style={styles.textInput}
              value={credentials.accountSid}
              onChangeText={(value) => updateCredential('accountSid', value)}
              placeholder="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>

          {/* API Key Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>API Key SID</Text>
            <TextInput
              style={styles.textInput}
              value={credentials.apiKey}
              onChangeText={(value) => updateCredential('apiKey', value)}
              placeholder="SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
              placeholderTextColor="#999"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>

          {/* API Secret Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>API Key Secret</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                value={credentials.apiSecret}
                onChangeText={(value) => updateCredential('apiSecret', value)}
                placeholder="Your API secret"
                placeholderTextColor="#999"
                secureTextEntry={!showSecrets}
                autoCapitalize="none"
                autoCorrect={false}
                editable={!isLoading}
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowSecrets(!showSecrets)}
              >
                <Ionicons
                  name={showSecrets ? 'eye-off' : 'eye'}
                  size={20}
                  color="#666"
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Phone Number Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Twilio Phone Number</Text>
            <TextInput
              style={styles.textInput}
              value={credentials.phoneNumber}
              onChangeText={(value) => updateCredential('phoneNumber', value)}
              placeholder="+1234567890"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
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
            style={[styles.button, styles.connectButton, (!isFormValid() || isLoading) && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={!isFormValid() || isLoading}
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
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 8,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  instructionsText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  eyeButton: {
    padding: 12,
    position: 'absolute',
    right: 0,
  },
  securityNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E8',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  securityText: {
    fontSize: 12,
    color: '#4CAF50',
    marginLeft: 8,
    flex: 1,
  },
  pricingNote: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  pricingText: {
    fontSize: 12,
    color: '#FF9800',
    marginLeft: 8,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#F5F5F5',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  connectButton: {
    backgroundColor: '#4A90E2',
  },
  connectButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
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

export default TwilioCredentialsModal; 