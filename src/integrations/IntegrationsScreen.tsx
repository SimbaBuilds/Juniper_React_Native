import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useVoice } from '../voice/VoiceContext';

interface Integration {
  id: string;
  name: string;
  credentials?: string;
  automations?: string[];
  connected: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export const IntegrationsScreen: React.FC = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const { sendTextMessage } = useVoice();
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [authReadyIntegrations, setAuthReadyIntegrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Modal state for new integration input
  const [showIntegrationModal, setShowIntegrationModal] = useState(false);
  const [integrationInput, setIntegrationInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load integrations from database
  const loadIntegrations = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const dbIntegrations = await DatabaseService.getIntegrations(user.id);
      const authReadyInts = await DatabaseService.getAuthenticationReadyIntegrations(user.id);
      
      // Filter out authentication_ready integrations from main list
      const activeIntegrations = dbIntegrations.filter((int: any) => int.status !== 'authentication_ready');
      
      // Convert database integrations to UI format
      const formattedIntegrations: Integration[] = activeIntegrations.map((integration: any) => ({
        id: integration.id,
        name: integration.service_name,
        credentials: integration.configuration?.credentials || 'Not configured',
        automations: integration.configuration?.automations || [],
        connected: integration.is_active,
        icon: getIconForIntegrationType(integration.service_name)
      }));

      // Set authentication ready integrations
      setAuthReadyIntegrations(authReadyInts);

      // Add default integrations if none exist
      if (formattedIntegrations.length === 0) {
        const defaultIntegrations: Integration[] = [
          {
            id: 'notion',
            name: 'Notion',
            credentials: 'Not configured',
            automations: [],
            connected: false,
            icon: 'document-text',
          },
        ];
        setIntegrations(defaultIntegrations);
      } else {
        setIntegrations(formattedIntegrations);
      }
    } catch (err) {
      console.error('Error loading integrations:', err);
      setError('Failed to load integrations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIntegrations();
  }, [user?.id]);

  // Refresh integrations when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      loadIntegrations();
    }, [user?.id])
  );

  const getIconForIntegrationType = (type: string): keyof typeof Ionicons.glyphMap => {
    switch (type.toLowerCase()) {
      case 'gmail':
      case 'email':
        return 'mail';
      case 'outlook':
        return 'mail-outline';
      case 'calendar':
        return 'calendar';
      case 'notion':
        return 'document-text';
      default:
        return 'link';
    }
  };

  // Handle Notion connection
  const handleConnectNotion = async () => {
    try {
      console.log('🔗 Initiating Notion connection conversation...');
      
      // Send the message to start the conversation
      await sendTextMessage("Connect with Notion");
      
      // Navigate to Home Screen (Voice Assistant)
      navigation.navigate('Home' as never);
    } catch (error) {
      console.error('Error initiating Notion connection:', error);
      Alert.alert('Error', 'Failed to initiate Notion connection. Please try again.');
    }
  };

  // Handle opening the integration modal
  const handleAddDifferentIntegration = () => {
    console.log('🔗 Opening new integration modal...');
    setShowIntegrationModal(true);
  };

  // Handle closing the integration modal
  const handleCloseIntegrationModal = () => {
    setShowIntegrationModal(false);
    setIntegrationInput('');
    setIsSubmitting(false);
  };

  // Handle submitting the integration request
  const handleSubmitIntegration = async () => {
    const trimmedInput = integrationInput.trim();
    
    if (!trimmedInput) {
      Alert.alert('Required', 'Please enter the service and how you want to use it.');
      return;
    }

    if (trimmedInput.length > 1000) {
      Alert.alert('Too Long', 'Please limit your message to 1000 characters or less.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('🔗 Submitting integration request:', trimmedInput);
      
      // Send the user's message to start the conversation
      await sendTextMessage(trimmedInput);
      
      // Close modal and reset
      handleCloseIntegrationModal();
      
      // Navigate to Home Screen (Voice Assistant)
      navigation.navigate('Home' as never);
    } catch (error) {
      console.error('Error submitting integration request:', error);
      Alert.alert('Error', 'Failed to submit integration request. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Loading integrations...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsTitle}>Adding Integrations</Text>
          <Text style={styles.instructionsText}>
            To add an integration, simply ask your assistant e.g. "Connect with Notion."
            {'\n\n'}
            Your assistant will make the connection or scope out setup options, time, and cost.
          </Text>
        </View>

        {/* Authentication Ready Section */}
        {authReadyIntegrations.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Complete Setup</Text>
            <Text style={styles.sectionSubtitle}>These integrations are ready for authentication</Text>
            
            {authReadyIntegrations.map((integration) => (
              <View key={integration.id} style={styles.authReadyItem}>
                <View style={styles.authReadyLeft}>
                  <Ionicons name={getIconForIntegrationType(integration.service_name)} size={24} color="#4A90E2" />
                  <View style={styles.authReadyInfo}>
                    <Text style={styles.authReadyName}>{integration.service_name}</Text>
                    <Text style={styles.authReadyDescription}>Tap to complete authentication</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.authButton}
                  onPress={() => {
                    if (integration.auth_flow_url) {
                      // Open external URL for authentication
                      console.log('Opening auth URL:', integration.auth_flow_url);
                      // You can use Linking.openURL(integration.auth_flow_url) here
                    }
                  }}
                >
                  <Text style={styles.authButtonText}>Authenticate</Text>
                  <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Integrations</Text>
          
          <View style={styles.emptyIntegrationsContainer}>
            <Ionicons name="apps-outline" size={48} color="#B0B0B0" />
            <Text style={styles.emptyIntegrationsTitle}>No Integrations Yet</Text>
            
            <View style={styles.suggestionContainer}>
              <Text style={styles.suggestionText}>
                Notion is a great platform for your assistant to manage tasks and projects for yourself and your team; it even has email and calendar services. Start by{' '}
                <Text 
                  style={styles.clickableLink}
                  onPress={handleConnectNotion}
                >
                  connecting with Notion
                </Text>
                {' '}in a few simple steps or by{' '}
                <Text 
                  style={styles.clickableLink}
                  onPress={handleAddDifferentIntegration}
                >
                  connecting with a different service
                </Text>
                {' '}(e.g. Slack, Gmail, Amazon Echo, Cursor, Tesla etc.)
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Integration Input Modal */}
      <Modal
        visible={showIntegrationModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={handleCloseIntegrationModal}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>New Integration</Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={handleCloseIntegrationModal}
              disabled={isSubmitting}
            >
              <Ionicons name="close" size={24} color="#888888" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.modalContent}>
            <Text style={styles.modalQuestion}>
              What service do you want to integrate with and what do you want to use it for?
            </Text>
            
            <TextInput
              style={styles.modalTextInput}
              value={integrationInput}
              onChangeText={setIntegrationInput}
              placeholder="e.g., I want to connect with Gmail to automatically sort and respond to emails based on priority..."
              placeholderTextColor="#666666"
              multiline
              maxLength={1000}
              editable={!isSubmitting}
              textAlignVertical="top"
            />
            
            <View style={styles.modalFooter}>
              <Text style={styles.characterCount}>
                {integrationInput.length}/1000 characters
              </Text>
              
              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={handleCloseIntegrationModal}
                  disabled={isSubmitting}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={[styles.modalButton, styles.submitButton, (!integrationInput.trim() || isSubmitting) && styles.submitButtonDisabled]}
                  onPress={handleSubmitIntegration}
                  disabled={!integrationInput.trim() || isSubmitting}
                >
                  {isSubmitting ? (
                    <ActivityIndicator size="small" color="#FFFFFF" />
                  ) : (
                    <Text style={styles.submitButtonText}>Submit</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  instructionsSection: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  instructionsText: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
  },
  expandableSection: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  sectionContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  servicesContainer: {
    gap: 16,
  },
  serviceSection: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 16,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  unifiedConnectSection: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  unifiedTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  unifiedDescription: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
    marginBottom: 16,
  },
  unifiedConnectButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 6,
    gap: 8,
  },
  unifiedConnectText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  integrationCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  integrationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  integrationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  integrationName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#2A2A2A',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  connectedText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '600',
  },
  disconnectedText: {
    color: '#757575', // Changed from red to grey as requested
  },
  integrationDetails: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 8,
  },
  connectButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#F44336',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 12,
  },
  emptyIntegrationsContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyIntegrationsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyIntegrationsText: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 20,
  },
  connectedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  disconnectButton: {
    backgroundColor: '#F44336',
  },
  suggestionContainer: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  suggestionText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
  },
  clickableLink: {
    color: '#4A90E2',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  modalCloseButton: {
    padding: 8,
  },
  modalContent: {
    padding: 16,
  },
  modalQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  modalTextInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
    height: 120,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#444444',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterCount: {
    color: '#888888',
    fontSize: 12,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  modalButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    minWidth: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: '#757575',
  },
  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#4A90E2',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  submitButtonDisabled: {
    backgroundColor: '#757575',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 16,
    marginTop: 4,
  },
  authReadyItem: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  authReadyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  authReadyInfo: {
    marginLeft: 12,
    flex: 1,
  },
  authReadyName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  authReadyDescription: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  authButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  authButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
}); 