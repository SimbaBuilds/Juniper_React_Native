import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { colors } from '../../shared/theme/colors';
interface SettingsToggleProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  description?: string;
  disabled?: boolean;
}

export const SettingsToggle: React.FC<SettingsToggleProps> = ({
  label,
  value,
  onValueChange,
  description,
  disabled = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>{label}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        <Switch
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          trackColor={{ false: '#767577', true: '#4A90E2' }}
          thumbColor={value ? colors.text.primary : '#f4f3f4'}
          ios_backgroundColor="#767577"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
  },
  description: {
    fontSize: 14,
    color: '#B0B0B0',
    marginTop: 4,
  },
}); 