import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../shared/theme/colors';

interface PermissionsCardProps {
  hasMicrophonePermission: boolean;
  hasBatteryOptimizationExemption: boolean;
  requestMicrophone: () => Promise<any>;
  requestBatteryExemption: () => Promise<any>;
}

export const PermissionsCard: React.FC<PermissionsCardProps> = ({
  hasMicrophonePermission,
  hasBatteryOptimizationExemption,
  requestMicrophone,
  requestBatteryExemption,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Permissions</Text>
        <TouchableOpacity
          style={styles.infoIcon}
          onPress={() => setShowTooltip(!showTooltip)}
        >
          <Ionicons name="information-circle-outline" size={20} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
      
      {showTooltip && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>
            Your assistant cannot change permissions for you
          </Text>
        </View>
      )}
      
      <View style={styles.permissionsContainer}>
        <View style={styles.permissionItem}>
          <Text style={styles.permissionTitle}>Microphone Access</Text>
          <Text style={styles.permissionStatus}>
            Status: {hasMicrophonePermission ? '✅ Granted' : '❌ Denied'}
          </Text>
          {!hasMicrophonePermission && (
            <TouchableOpacity
              style={styles.permissionButton}
              onPress={requestMicrophone}
            >
              <Text style={styles.permissionButtonText}>Request Permission</Text>
            </TouchableOpacity>
          )}
        </View>

        {Platform.OS === 'android' && (
          <View style={styles.permissionItem}>
            <Text style={styles.permissionTitle}>Battery Optimization</Text>
            <Text style={styles.permissionStatus}>
              Status: {hasBatteryOptimizationExemption ? '✅ Optimized' : '❌ Not Optimized'}
            </Text>
            {!hasBatteryOptimizationExemption && (
              <TouchableOpacity
                style={styles.permissionButton}
                onPress={requestBatteryExemption}
              >
                <Text style={styles.permissionButtonText}>Optimize Battery Usage</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
    flex: 1,
  },
  infoIcon: {
    padding: 4,
  },
  tooltip: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#4A90E2',
  },
  tooltipText: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
  },
  permissionsContainer: {
    gap: 16,
  },
  permissionItem: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 4,
  },
  permissionStatus: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 8,
  },
  permissionButton: {
    backgroundColor: '#4A90E2',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  permissionButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
}); 