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
import TwilioAuthService from '../auth/TwilioAuthService';

interface TwilioCredentials {
  accountSid: string;
  apiKey: string;
  apiSecret: string;
  phoneNumber: string;
}

interface TwilioCredentialsModalProps {
  visible: boolean;
  onClose: () => void;
  onSuccess: () => void;
  onSubmit: (credentials: TwilioCredentials) => Promise<void>;
}

const TwilioCredentialsModal: React.FC<TwilioCredentialsModalProps> = ({
  visible,
  onClose,
  onSuccess,
  onSubmit,
}) => {
  const [credentials, setCredentials] = useState<TwilioCredentials>({
    accountSid: '',
    apiKey: '',
    apiSecret: '',
    phoneNumber: '',
  });
  const [isLoading, setIsLoading] = useState(false);
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
          {/* Instructions */}
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionsTitle}>Setup Instructions</Text>
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
            <Text style={styles.inputLabel}>API Key</Text>
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
            <Text style={styles.inputLabel}>API Secret</Text>
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

          {/* Security Note */}
          <View style={styles.securityNote}>
            <Ionicons name="shield-checkmark" size={16} color="#4CAF50" />
            <Text style={styles.securityText}>
              Your credentials are stored securely and encrypted on your device.
            </Text>
          </View>

          {/* Pricing Info */}
          <View style={styles.pricingNote}>
            <Ionicons name="information-circle" size={16} color="#FF9800" />
            <Text style={styles.pricingText}>
              Note: Twilio charges ~$1/month for phone numbers + SMS usage fees.
            </Text>
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
});

export default TwilioCredentialsModal; 