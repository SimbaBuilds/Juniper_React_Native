import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HotPhrase } from '../supabase/tables';
import { DatabaseService } from '../supabase/supabase';
import { colors } from '../shared/theme/colors';

interface HotPhraseModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (hotPhrase: HotPhrase) => void;
  hotPhrase?: HotPhrase | null;
  userId: string;
}

interface ServiceOption {
  id: string;
  service_name: string;
  tools?: string[];
}

export const HotPhraseModal: React.FC<HotPhraseModalProps> = ({
  visible,
  onClose,
  onSave,
  hotPhrase,
  userId,
}) => {
  const [phrase, setPhrase] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [toolName, setToolName] = useState('');
  const [description, setDescription] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [services, setServices] = useState<ServiceOption[]>([]);
  const [showServicePicker, setShowServicePicker] = useState(false);
  const [showToolPicker, setShowToolPicker] = useState(false);

  const isEditing = !!hotPhrase;
  const selectedService = services.find(s => s.service_name === serviceName);
  const availableTools = selectedService?.tools || [];

  // Initialize form data
  useEffect(() => {
    if (hotPhrase) {
      setPhrase(hotPhrase.phrase);
      setServiceName(hotPhrase.service_name);
      setToolName(hotPhrase.tool_name);
      setDescription(hotPhrase.description);
      setIsActive(hotPhrase.is_active);
    } else {
      setPhrase('');
      setServiceName('');
      setToolName('');
      setDescription('');
      setIsActive(true);
    }
  }, [hotPhrase]);

  // Load services when modal opens
  useEffect(() => {
    if (visible) {
      loadServices();
    }
  }, [visible]);

  const loadServices = async () => {
    try {
      setLoading(true);
      // Get user's integrations to populate service options
      const integrations = await DatabaseService.getIntegrations(userId);
      const allServices = await DatabaseService.getAllServices();
      
      // Combine integrated services with all available services
      const serviceOptions: ServiceOption[] = allServices.map(service => ({
        id: service.id,
        service_name: service.service_name,
        tools: service.tools || [],
      }));
      
      setServices(serviceOptions);
    } catch (error) {
      console.error('Error loading services:', error);
      Alert.alert('Error', 'Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    // Validation
    if (!phrase.trim()) {
      Alert.alert('Error', 'Please enter a phrase');
      return;
    }
    if (!serviceName.trim()) {
      Alert.alert('Error', 'Please select a service');
      return;
    }
    if (!toolName.trim()) {
      Alert.alert('Error', 'Please select a tool');
      return;
    }
    if (!description.trim()) {
      Alert.alert('Error', 'Please enter a description');
      return;
    }

    try {
      setSaving(true);
      
      let savedHotPhrase: HotPhrase;
      
      if (isEditing && hotPhrase) {
        // Update existing hot phrase
        savedHotPhrase = await DatabaseService.updateHotPhrase(hotPhrase.id, {
          phrase: phrase.trim(),
          service_name: serviceName,
          tool_name: toolName,
          description: description.trim(),
          is_active: isActive,
        });
      } else {
        // Create new hot phrase
        savedHotPhrase = await DatabaseService.createHotPhrase({
          user_id: userId,
          phrase: phrase.trim(),
          service_name: serviceName,
          tool_name: toolName,
          description: description.trim(),
          is_built_in: false,
          is_active: isActive,
          execution_count: 0,
        });
      }
      
      onSave(savedHotPhrase);
      onClose();
    } catch (error) {
      console.error('Error saving hot phrase:', error);
      Alert.alert('Error', 'Failed to save hot phrase');
    } finally {
      setSaving(false);
    }
  };

  const handleServiceSelect = (service: ServiceOption) => {
    setServiceName(service.service_name);
    setToolName(''); // Reset tool when service changes
    setShowServicePicker(false);
  };

  const handleToolSelect = (tool: string) => {
    setToolName(tool);
    setShowToolPicker(false);
  };

  if (loading) {
    return (
      <Modal visible={visible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#4A90E2" />
            <Text style={styles.loadingText}>Loading services...</Text>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {isEditing ? 'Edit Hot Phrase' : 'Create Hot Phrase'}
            </Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phrase *</Text>
              <TextInput
                style={styles.input}
                value={phrase}
                onChangeText={setPhrase}
                placeholder="e.g., send a text"
                placeholderTextColor="#666666"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Service *</Text>
              <TouchableOpacity
                style={styles.picker}
                onPress={() => setShowServicePicker(true)}
              >
                <Text style={[styles.pickerText, !serviceName && styles.placeholderText]}>
                  {serviceName || 'Select a service'}
                </Text>
                <Ionicons name="chevron-down" size={20} color="#666666" />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tool *</Text>
              <TouchableOpacity
                style={[styles.picker, !serviceName && styles.disabledPicker]}
                onPress={() => serviceName && setShowToolPicker(true)}
                disabled={!serviceName}
              >
                <Text style={[styles.pickerText, !toolName && styles.placeholderText]}>
                  {toolName || (serviceName ? 'Select a tool' : 'Select service first')}
                </Text>
                <Ionicons name="chevron-down" size={20} color="#666666" />
              </TouchableOpacity>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description *</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="Brief description of what this hot phrase does"
                placeholderTextColor="#666666"
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.switchGroup}>
              <Text style={styles.label}>Active</Text>
              <TouchableOpacity
                style={[styles.switch, isActive && styles.switchActive]}
                onPress={() => setIsActive(!isActive)}
              >
                <View style={[styles.switchThumb, isActive && styles.switchThumbActive]} />
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.saveButton, saving && styles.savingButton]}
              onPress={handleSave}
              disabled={saving}
            >
              {saving ? (
                <ActivityIndicator size="small" color="#FFFFFF" />
              ) : (
                <Text style={styles.saveButtonText}>
                  {isEditing ? 'Update' : 'Create'}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {/* Service Picker Modal */}
          <Modal visible={showServicePicker} transparent animationType="fade">
            <View style={styles.pickerOverlay}>
              <View style={styles.pickerModal}>
                <View style={styles.pickerHeader}>
                  <Text style={styles.pickerTitle}>Select Service</Text>
                  <TouchableOpacity onPress={() => setShowServicePicker(false)}>
                    <Ionicons name="close" size={24} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.pickerList}>
                  {services.map((service) => (
                    <TouchableOpacity
                      key={service.id}
                      style={styles.pickerItem}
                      onPress={() => handleServiceSelect(service)}
                    >
                      <Text style={styles.pickerItemText}>{service.service_name}</Text>
                      {service.service_name === serviceName && (
                        <Ionicons name="checkmark" size={20} color="#4A90E2" />
                      )}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>

          {/* Tool Picker Modal */}
          <Modal visible={showToolPicker} transparent animationType="fade">
            <View style={styles.pickerOverlay}>
              <View style={styles.pickerModal}>
                <View style={styles.pickerHeader}>
                  <Text style={styles.pickerTitle}>Select Tool</Text>
                  <TouchableOpacity onPress={() => setShowToolPicker(false)}>
                    <Ionicons name="close" size={24} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
                <ScrollView style={styles.pickerList}>
                  {availableTools.map((tool) => (
                    <TouchableOpacity
                      key={tool}
                      style={styles.pickerItem}
                      onPress={() => handleToolSelect(tool)}
                    >
                      <Text style={styles.pickerItemText}>{tool}</Text>
                      {tool === toolName && (
                        <Ionicons name="checkmark" size={20} color="#4A90E2" />
                      )}
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    width: '90%',
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
  },
  closeButton: {
    padding: 4,
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  picker: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  disabledPicker: {
    opacity: 0.5,
  },
  pickerText: {
    color: '#FFFFFF',
    fontSize: 16,
    flex: 1,
  },
  placeholderText: {
    color: '#666666',
  },
  switchGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switch: {
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#333333',
    padding: 2,
    justifyContent: 'center',
  },
  switchActive: {
    backgroundColor: '#4A90E2',
  },
  switchThumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  switchThumbActive: {
    alignSelf: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#666666',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  saveButton: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: '#4A90E2',
    alignItems: 'center',
  },
  savingButton: {
    opacity: 0.7,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 12,
  },
  pickerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerModal: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    width: '80%',
    maxHeight: '60%',
  },
  pickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  pickerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
  },
  pickerList: {
    maxHeight: 300,
  },
  pickerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  pickerItemText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});