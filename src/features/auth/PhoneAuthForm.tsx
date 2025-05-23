import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import Button from '../../shared/components/Button';

interface PhoneAuthFormProps {
  onSubmit: (phone: string) => void;
  isLoading?: boolean;
  title?: string;
  buttonText?: string;
}

const PhoneAuthForm: React.FC<PhoneAuthFormProps> = ({ 
  onSubmit,
  isLoading = false,
  title = "Enter your phone number",
  buttonText = "Send Code"
}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | null>(null);

  const formatPhoneNumber = (input: string): string => {
    // Remove all non-numeric characters except +
    const cleaned = input.replace(/[^\d+]/g, '');
    
    // If it doesn't start with +, add it
    if (cleaned && !cleaned.startsWith('+')) {
      return '+' + cleaned;
    }
    
    return cleaned;
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // Basic validation: should start with + and have at least 10 digits
    const phoneRegex = /^\+[1-9]\d{9,14}$/;
    return phoneRegex.test(phone);
  };

  const handlePhoneChange = (text: string) => {
    const formatted = formatPhoneNumber(text);
    setPhoneNumber(formatted);
    
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = () => {
    if (!phoneNumber.trim()) {
      setError('Phone number is required');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid phone number with country code (e.g., +1234567890)');
      return;
    }

    setError(null);
    onSubmit(phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          We'll send you a verification code via SMS
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          value={phoneNumber}
          onChangeText={handlePhoneChange}
          placeholder="+1234567890"
          keyboardType="phone-pad"
          autoComplete="tel"
          textContentType="telephoneNumber"
        />
        <Text style={styles.helperText}>
          Include your country code (e.g., +1 for US, +44 for UK)
        </Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <Button
        title={buttonText}
        onPress={handleSubmit}
        loading={isLoading}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  helperText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    marginTop: 8,
  },
});

export default PhoneAuthForm; 