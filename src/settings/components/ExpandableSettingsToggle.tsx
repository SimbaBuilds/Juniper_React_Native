import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../shared/theme/colors';

interface ExpandableSettingsToggleProps {
  label: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
  description?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  hasSubSettings?: boolean;
}

export const ExpandableSettingsToggle: React.FC<ExpandableSettingsToggleProps> = ({
  label,
  value,
  onValueChange,
  description,
  disabled = false,
  children,
  hasSubSettings = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    if (hasSubSettings) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {hasSubSettings && (
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={toggleExpansion}
          >
            <Ionicons
              name={isExpanded ? "chevron-down" : "chevron-forward"}
              size={20}
              color="#B0B0B0"
            />
          </TouchableOpacity>
        )}
        
        <View style={[styles.textContainer, !hasSubSettings && styles.textContainerNoArrow]}>
          <Text style={styles.label}>{label}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
        </View>
        
        <Switch
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          trackColor={{ false: '#767577', true: '#4A90E2' }}
          thumbColor={value ? '#FFFFFF' : '#f4f3f4'}
          ios_backgroundColor="#767577"
        />
      </View>
      
      {hasSubSettings && isExpanded && children && (
        <View style={styles.subSettingsContainer}>
          {children}
        </View>
      )}
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
    alignItems: 'center',
    padding: 16,
  },
  arrowButton: {
    padding: 4,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  textContainerNoArrow: {
    marginLeft: 32, // Align with settings that have arrows
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
  subSettingsContainer: {
    marginLeft: 24,
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: '#4A90E2',
    backgroundColor: '#181818',
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 8,
    paddingVertical: 8,
  },
}); 