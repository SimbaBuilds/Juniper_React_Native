import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { useNavigation } from '@react-navigation/native';
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load integrations from database
  useEffect(() => {
    const loadIntegrations = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const dbIntegrations = await DatabaseService.getIntegrations(user.id);
        
        // Convert database integrations to UI format
        const formattedIntegrations: Integration[] = dbIntegrations.map((integration: any) => ({
          id: integration.id,
          name: integration.service_name,
          credentials: integration.configuration?.credentials || 'Not configured',
          automations: integration.configuration?.automations || [],
          connected: integration.is_active,
          icon: getIconForIntegrationType(integration.service_name)
        }));

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
        
        // Cleanup callbacks on unmount
        return () => {};
      } catch (err) {
        console.error('Error loading integrations:', err);
        setError('Failed to load integrations');
      } finally {
        setLoading(false);
      }
    };

    loadIntegrations();
  }, [user?.id]);

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
    }
  };

  // Handle adding different integration
  const handleAddDifferentIntegration = async () => {
    try {
      console.log('🔗 Initiating new integration conversation...');
      
      // Send the first message to start the conversation
      await sendTextMessage("I want to add a new integration");
      
      // Note: The assistant will respond automatically through the normal conversation flow
      // No need to manually add the assistant response here
      
      // Navigate to Home Screen (Voice Assistant)
      navigation.navigate('Home' as never);
    } catch (error) {
      console.error('Error initiating new integration conversation:', error);
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
}); 