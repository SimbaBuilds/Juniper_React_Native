import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SettingsNumberInputProps {
  label: string;
  value: number;
  onSave: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  description?: string;
  formatValue?: (value: number) => string;
}

export const SettingsNumberInput: React.FC<SettingsNumberInputProps> = ({
  label,
  value,
  onSave,
  minimumValue = 0,
  maximumValue = 1,
  step = 1e-5,
  description,
  formatValue,
}) => {
  const [localValue, setLocalValue] = useState(value.toString());
  const [hasChanges, setHasChanges] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Update local state when the value prop changes externally
  useEffect(() => {
    setLocalValue(value.toString());
    setHasChanges(false);
    setError(null);
  }, [value]);

  const validateAndUpdateValue = (text: string) => {
    setLocalValue(text);
    setError(null);

    if (text === '') {
      setHasChanges(value !== 0);
      return;
    }

    const numericValue = parseFloat(text);

    if (isNaN(numericValue)) {
      setError('Please enter a valid number');
      setHasChanges(true);
      return;
    }

    if (numericValue < minimumValue) {
      setError(`Value must be at least ${minimumValue}`);
      setHasChanges(true);
      return;
    }

    if (numericValue > maximumValue) {
      setError(`Value must be at most ${maximumValue}`);
      setHasChanges(true);
      return;
    }

    // Check if the value respects the step increment
    // Use a small tolerance for floating-point precision errors
    const remainder = Math.abs(numericValue % step);
    const tolerance = step * 1e-10; // Very small tolerance relative to step size
    
    if (remainder > tolerance && Math.abs(remainder - step) > tolerance) {
      setError(`Value must be in increments of ${step}`);
      setHasChanges(true);
      return;
    }

    setHasChanges(numericValue !== value);
  };

  const handleSave = () => {
    if (error) return;

    const numericValue = localValue === '' ? 0 : parseFloat(localValue);
    
    if (!isNaN(numericValue) && numericValue >= minimumValue && numericValue <= maximumValue) {
      onSave(numericValue);
      setHasChanges(false);
    }
  };

  const handleReset = () => {
    setLocalValue(value.toString());
    setHasChanges(false);
    setError(null);
  };

  const displayValue = formatValue ? formatValue(value) : value.toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.currentValue}>Current: {displayValue}</Text>
      </View>
      
      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, !!error && styles.inputError]}
          value={localValue}
          onChangeText={validateAndUpdateValue}
          placeholder={`${minimumValue} - ${maximumValue}`}
          placeholderTextColor="#666666"
          keyboardType="decimal-pad"
        />
        
        <View style={styles.buttonContainer}>
          {hasChanges && (
            <TouchableOpacity
              style={styles.resetButton}
              onPress={handleReset}
            >
              <Ionicons name="refresh-outline" size={16} color="#B0B0B0" />
            </TouchableOpacity>
          )}
          
          <TouchableOpacity
            style={[
              styles.saveButton,
              (!hasChanges || !!error) && styles.saveButtonDisabled
            ]}
            onPress={handleSave}
            disabled={!hasChanges || !!error}
          >
            <Ionicons name="save-outline" size={16} color="#FFFFFF" />
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
      
      <Text style={styles.rangeText}>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    flex: 1,
  },
  currentValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4A90E2',
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 16,
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 6,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  inputError: {
    borderColor: '#E74C3C',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  resetButton: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#2A2A2A',
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    minWidth: 70,
    justifyContent: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#333333',
    opacity: 0.5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 12,
    marginTop: 4,
  },
  rangeText: {
    fontSize: 12,
    color: '#B0B0B0',
    marginTop: 4,
  },
});