import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface SettingsTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  description?: string;
  multiline?: boolean;
  disabled?: boolean;
  maxCharacters?: number;
}

export const SettingsTextInput: React.FC<SettingsTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  description,
  multiline = false,
  disabled = false,
  maxCharacters,
}) => {
  const currentCharCount = value.length;
  const isAtLimit = maxCharacters ? currentCharCount >= maxCharacters : false;

  const handleTextChange = (text: string) => {
    if (maxCharacters && text.length > maxCharacters) {
      // Don't allow input beyond the limit
      return;
    }
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.label}>{label}</Text>
        {maxCharacters && (
          <Text style={[styles.counter, isAtLimit && styles.counterAtLimit]}>
            {currentCharCount}/{maxCharacters}
          </Text>
        )}
      </View>
      {description && <Text style={styles.description}>{description}</Text>}
      <TextInput
        style={[
          styles.input, 
          multiline && styles.multilineInput,
          isAtLimit && styles.inputAtLimit
        ]}
        value={value}
        onChangeText={handleTextChange}
        placeholder={placeholder}
        placeholderTextColor="#666666"
        multiline={multiline}
        numberOfLines={multiline ? 4 : 1}
        editable={!disabled}
      />
      {maxCharacters && isAtLimit && (
        <Text style={styles.limitWarning}>
          Character limit reached. Please shorten your text.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  counter: {
    fontSize: 14,
    color: '#B0B0B0',
    fontWeight: '500',
  },
  counterAtLimit: {
    color: '#E74C3C',
  },
  description: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2A2A2A',
    borderRadius: 6,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  inputAtLimit: {
    borderColor: '#E74C3C',
  },
  limitWarning: {
    color: '#E74C3C',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
    backgroundColor: '#2A1A1A',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#E74C3C',
  },
}); 