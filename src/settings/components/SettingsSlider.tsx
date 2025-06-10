import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface SettingsSliderProps {
  label: string;
  value: number;
  onValueChange: (value: number) => void;
  minimumValue?: number;
  maximumValue?: number;
  step?: number;
  description?: string;
  formatValue?: (value: number) => string;
}

export const SettingsSlider: React.FC<SettingsSliderProps> = ({
  label,
  value,
  onValueChange,
  minimumValue = 0,
  maximumValue = 1,
  step = 0.1,
  description,
  formatValue,
}) => {
  const displayValue = formatValue ? formatValue(value) : value.toFixed(1);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{displayValue}</Text>
      </View>
      
      {description && (
        <Text style={styles.description}>{description}</Text>
      )}
      
      <View style={styles.sliderContainer}>
        <Text style={styles.minLabel}>{minimumValue}</Text>
        <Slider
          style={styles.slider}
          value={value}
          onValueChange={onValueChange}
          minimumValue={minimumValue}
          maximumValue={maximumValue}
          step={step}
          minimumTrackTintColor="#4A90E2"
          maximumTrackTintColor="#666666"
        />
        <Text style={styles.maxLabel}>{maximumValue}</Text>
      </View>
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
  value: {
    fontSize: 16,
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
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 12,
  },
  thumb: {
    backgroundColor: '#4A90E2',
    width: 20,
    height: 20,
  },
  minLabel: {
    fontSize: 12,
    color: '#B0B0B0',
    minWidth: 20,
    textAlign: 'center',
  },
  maxLabel: {
    fontSize: 12,
    color: '#B0B0B0',
    minWidth: 20,
    textAlign: 'center',
  },
}); 