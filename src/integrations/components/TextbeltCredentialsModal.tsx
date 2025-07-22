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

interface TextbeltCredentials {
  phone_number: string;
}

interface TextbeltCredentialsModalProps {
  visible: boolean;
  integrationId?: string;
  onClose: () => void;
  onSuccess: () => void;
  onSubmit: (credentials: TextbeltCredentials) => Promise<void>;
}


const TextbeltCredentialsModal: React.FC<TextbeltCredentialsModalProps> = ({
  visible,
  integrationId,
  onClose,
  onSuccess,
  onSubmit,
}) => {
  const [credentials, setCredentials] = useState<TextbeltCredentials>({
    phone_number: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!credentials.phone_number.trim()) {
      Alert.alert('Missing Information', 'Please enter your phone number.');
      return;
    }

    setIsLoading(true);
    try {
      await onSubmit({
        phone_number: credentials.phone_number.trim(),
      });
      
      setCredentials({
        phone_number: '',
      });
      onSuccess();
    } catch (error) {
      console.error('textbelt credentials submission error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setCredentials({
      phone_number: '',
    });
    onClose();
  };

  const updateCredential = (field: keyof TextbeltCredentials, value: string) => {
    setCredentials(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = () => {
    return credentials.phone_number.trim();
  };


  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>
          <Text style={styles.title}>Connect Textbelt SMS</Text>
          <View style={styles.placeholder} />
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructionsTitle}>SMS Setup</Text>
            <Text style={styles.instructionsText}>
              Enter your phone number below so Juniper can send you text messages.{' '}
              <Text style={styles.boldText}>You will not receive promotional content or ads at this number.</Text>
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.textInput}
              value={credentials.phone_number}
              onChangeText={(value) => updateCredential('phone_number', value)}
              placeholder="1234567890"
              placeholderTextColor="#999"
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>



        </ScrollView>

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
  boldText: {
    fontWeight: 'bold',
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
  textInput: {
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    color: '#333',
  },
  benefitsContainer: {
    backgroundColor: '#F0F8FF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  benefitsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 14,
    color: '#666',
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

export default TextbeltCredentialsModal;