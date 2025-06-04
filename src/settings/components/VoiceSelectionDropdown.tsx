import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VoiceService from '../../voice/VoiceService';

interface VoiceOption {
  label: string;
  value: string;
}

interface VoiceSelectionDropdownProps {
  label: string;
  value: string;
  options: VoiceOption[];
  onValueChange: (value: string) => void;
  description?: string;
  disabled?: boolean;
}

export const VoiceSelectionDropdown: React.FC<VoiceSelectionDropdownProps> = ({
  label,
  value,
  options,
  onValueChange,
  description,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [previewingVoice, setPreviewingVoice] = useState<string | null>(null);

  const selectedOption = options.find(option => option.value === value);

  const handleSelect = (selectedValue: string) => {
    console.log('🔽 VOICE_DROPDOWN: Voice selected:', selectedValue);
    onValueChange(selectedValue);
    setIsOpen(false);
  };

  const handlePreview = async (voiceValue: string) => {
    try {
      setPreviewingVoice(voiceValue);
      
      const voiceService = VoiceService.getInstance();
      const success = await voiceService.previewDeepgramVoice(
        voiceValue,
        "Hello! This is a preview of the selected voice. How does it sound?"
      );
      
      if (!success) {
        Alert.alert('Preview Failed', 'Unable to preview this voice. Please try again.');
      }
    } catch (error) {
      console.error('Error previewing voice:', error);
      Alert.alert('Preview Error', 'An error occurred while previewing the voice.');
    } finally {
      setPreviewingVoice(null);
    }
  };

  const renderOption = ({ item }: { item: VoiceOption }) => (
    <View style={[styles.optionContainer, item.value === value && styles.selectedOption]}>
      <TouchableOpacity
        style={styles.optionTouchable}
        onPress={() => handleSelect(item.value)}
      >
        <Text style={[
          styles.optionText,
          item.value === value && styles.selectedOptionText
        ]}>
          {item.label}
        </Text>
        {item.value === value && (
          <Ionicons name="checkmark" size={20} color="#4A90E2" />
        )}
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.previewButton, previewingVoice === item.value && styles.previewButtonActive]}
        onPress={() => handlePreview(item.value)}
        disabled={previewingVoice !== null}
      >
        {previewingVoice === item.value ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Ionicons name="play-circle-outline" size={16} color="#4A90E2" />
        )}
        <Text style={styles.previewButtonText}>
          {previewingVoice === item.value ? 'Playing...' : 'Preview'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      
      <TouchableOpacity
        style={[styles.dropdownButton, disabled && styles.disabledButton]}
        onPress={() => !disabled && setIsOpen(true)}
        disabled={disabled}
      >
        <Text style={[styles.dropdownButtonText, disabled && styles.disabledText]}>
          {selectedOption?.label || 'Select...'}
        </Text>
        <Ionicons 
          name={isOpen ? "chevron-up" : "chevron-down"} 
          size={20} 
          color={disabled ? "#666666" : "#FFFFFF"} 
        />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setIsOpen(false)}
          activeOpacity={1}
        >
          <View style={styles.dropdown}>
            <View style={styles.dropdownHeader}>
              <Text style={styles.dropdownTitle}>{label}</Text>
              <TouchableOpacity onPress={() => setIsOpen(false)}>
                <Ionicons name="close" size={24} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            
            {previewingVoice && (
              <View style={styles.previewNotice}>
                <ActivityIndicator size="small" color="#4A90E2" />
                <Text style={styles.previewNoticeText}>
                  Playing voice preview...
                </Text>
              </View>
            )}
            
            <FlatList
              data={options}
              renderItem={renderOption}
              keyExtractor={(item) => item.value}
              style={styles.optionsList}
            />
          </View>
        </TouchableOpacity>
      </Modal>
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
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 8,
  },
  dropdownButton: {
    backgroundColor: '#2A2A2A',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#1A1A1A',
    borderColor: '#2A2A2A',
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  disabledText: {
    color: '#666666',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    width: '90%',
    maxHeight: '70%',
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  previewNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#2A2A2A',
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  previewNoticeText: {
    fontSize: 14,
    color: '#4A90E2',
    marginLeft: 8,
    fontWeight: '500',
  },
  optionsList: {
    maxHeight: 400,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  selectedOption: {
    backgroundColor: '#2A2A2A',
  },
  optionTouchable: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#FFFFFF',
    flex: 1,
  },
  selectedOptionText: {
    color: '#4A90E2',
    fontWeight: '500',
  },
  previewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#333333',
    borderRadius: 6,
    marginRight: 12,
    minWidth: 80,
  },
  previewButtonActive: {
    backgroundColor: '#4A90E2',
  },
  previewButtonText: {
    fontSize: 12,
    color: '#4A90E2',
    marginLeft: 4,
    fontWeight: '500',
  },
}); 