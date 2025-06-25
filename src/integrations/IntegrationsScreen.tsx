import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import IntegrationService from './IntegrationService';
import ApiKeyModal from './components/ApiKeyModal';
import TwilioCredentialsModal from './components/TwilioCredentialsModal';

interface ServiceWithStatus {
  id: string;
  service_name: string;
  tags: string[];
  description?: string;
  isActive: boolean;
  isConnected: boolean;
  integration_id?: string;
}

interface TwilioCredentials {
  accountSid: string;
  apiKey: string;
  apiSecret: string;
  phoneNumber: string;
}

export const IntegrationsScreen: React.FC = () => {
  const { user } = useAuth();
  const [services, setServices] = useState<ServiceWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiKeyModalVisible, setApiKeyModalVisible] = useState(false);
  const [twilioModalVisible, setTwilioModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceWithStatus | null>(null);

  // Helper function to get icon for integration type
  const getIconForIntegrationType = (serviceName: string): keyof typeof Ionicons.glyphMap => {
    switch (serviceName.toLowerCase()) {
      case 'gmail':
      case 'email':
        return 'mail';
      case 'microsoft outlook email':
        return 'mail-outline';
      case 'google calendar':
      case 'microsoft outlook calendar':
        return 'calendar';
      case 'notion':
        return 'document-text';
      case 'slack':
        return 'chatbubbles';
      case 'microsoft teams':
        return 'people';
      case 'trello':
        return 'grid';
      case 'any.do':
      case 'todoist':
        return 'checkbox';
      case 'zoom':
      case 'google meet':
        return 'videocam';
      case 'whatsapp':
        return 'chatbox';
      case 'dropbox':
        return 'cloud';
      case 'perplexity':
        return 'search';
      case 'google sheets':
      case 'microsoft excel online':
        return 'grid';
      case 'google docs':
      case 'microsoft word online':
        return 'document';
      case 'twilio':
        return 'chatbox-ellipses';
      default:
        return 'link';
    }
  };

  // Load services and user integrations
  const loadServicesWithStatus = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      
      // Fetch all services and user integrations in parallel
      const [allServices, userIntegrations] = await Promise.all([
        DatabaseService.getAllServices(),
        DatabaseService.getIntegrations(user.id)
      ]);
      
      // Map services to their status
      const servicesWithStatus: ServiceWithStatus[] = allServices.map((service: any) => {
        const integration = userIntegrations.find(
          (int: any) => int.service_id === service.id && int.is_active
        );
        
        return {
          id: service.id,
          service_name: service.service_name,
          tags: service.tags || [],
          description: service.description,
          isActive: !!integration,
          isConnected: !!integration,
          integration_id: integration?.id,
        };
      });
      
      setServices(servicesWithStatus);
    } catch (err) {
      console.error('Error loading services:', err);
      setError('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  // Handle connect button press
  const handleConnect = async (service: ServiceWithStatus) => {
    try {
      if (!user?.id) {
        Alert.alert('Error', 'User not authenticated. Please log in again.');
        return;
      }

      console.log('🔗 Connecting to service:', service.service_name);
      
      // Check if this service uses API key authentication
      if (service.service_name.toLowerCase() === 'perplexity') {
        setSelectedService(service);
        setApiKeyModalVisible(true);
        return;
      }

      // Check if this service uses Twilio credentials
      if (service.service_name.toLowerCase() === 'twilio') {
        setSelectedService(service);
        setTwilioModalVisible(true);
        return;
      }
      
      // Check if this is a supported OAuth service
      const supportedServices = ['notion', 'slack', 'trello', 'zoom'];
      const isSupported = supportedServices.includes(service.service_name.toLowerCase());

      if (!isSupported) {
        Alert.alert(
          'Integration Not Available',
          `Integration for ${service.service_name} is not yet implemented. Please check back later.`,
          [{ text: 'OK' }]
        );
        return;
      }

      // Start the integration flow
      const integrationService = IntegrationService.getInstance();
      await integrationService.startIntegration({
        serviceId: service.id,
        serviceName: service.service_name,
        userId: user.id
      });

      // Refresh the services list to show updated status
      await loadServicesWithStatus();

    } catch (error) {
      console.error('Error connecting service:', error);
      Alert.alert('Error', 'Failed to connect service. Please try again.');
    }
  };

  // Handle API key submission
  const handleApiKeySubmit = async (apiKey: string) => {
    try {
      if (!selectedService || !user?.id) {
        throw new Error('Missing service or user information');
      }

      console.log('🔑 Submitting API key for:', selectedService.service_name);

      const integrationService = IntegrationService.getInstance();
      await integrationService.startApiKeyIntegration({
        serviceId: selectedService.id,
        serviceName: selectedService.service_name,
        userId: user.id,
        apiKey: apiKey
      });

      // Refresh the services list to show updated status
      await loadServicesWithStatus();

    } catch (error) {
      console.error('Error submitting API key:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      Alert.alert('Error', `Failed to connect: ${errorMessage}`);
      throw error; // Re-throw to let modal handle it
    }
  };

  // Handle Twilio credentials submission
  const handleTwilioCredentialsSubmit = async (credentials: TwilioCredentials) => {
    try {
      if (!selectedService || !user?.id) {
        throw new Error('Missing service or user information');
      }

      console.log('🔑 Submitting Twilio credentials...');

      const integrationService = IntegrationService.getInstance();
      await integrationService.startTwilioIntegration({
        serviceId: selectedService.id,
        serviceName: selectedService.service_name,
        userId: user.id,
        credentials: credentials
      });

      // Refresh the services list to show updated status
      await loadServicesWithStatus();

    } catch (error) {
      console.error('Error submitting Twilio credentials:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      Alert.alert('Error', `Failed to connect: ${errorMessage}`);
      throw error; // Re-throw to let modal handle it
    }
  };

  // Handle disconnect button press
  const handleDisconnect = async (service: ServiceWithStatus) => {
    try {
      if (!service.integration_id) {
        Alert.alert('Error', 'No integration ID found.');
        return;
      }

      Alert.alert(
        'Disconnect Integration',
        `Are you sure you want to disconnect ${service.service_name}? This will revoke access and you'll need to reconnect to use this service again.`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Disconnect', 
            style: 'destructive',
            onPress: async () => {
              const integrationService = IntegrationService.getInstance();
              await integrationService.disconnectIntegration(
                service.integration_id!,
                service.service_name
              );
              
              // Refresh the services list
              await loadServicesWithStatus();
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error disconnecting service:', error);
      Alert.alert('Error', 'Failed to disconnect service. Please try again.');
    }
  };

  // Effects
  useEffect(() => {
    loadServicesWithStatus();
  }, [user?.id]);

  // Refresh when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      loadServicesWithStatus();
    }, [user?.id])
  );

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
          <TouchableOpacity 
            style={styles.retryButton}
            onPress={loadServicesWithStatus}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          {/* <Text style={styles.title}>Integrations</Text> */}
          <Text style={styles.subtitle}>
            Connect your favorite services to unlock powerful automations
          </Text>
        </View>

        <View style={styles.servicesSection}>
          {services.map((service) => (
            <View key={service.id} style={styles.serviceCard}>
              <View style={styles.serviceHeader}>
                <View style={styles.serviceLeft}>
                  <Ionicons 
                    name={getIconForIntegrationType(service.service_name)} 
                    size={24} 
                    color={service.isConnected ? "#4CAF50" : "#666666"} 
                  />
                  <View style={styles.serviceInfo}>
                    <Text style={styles.serviceName}>{service.service_name}</Text>
                    {service.tags && service.tags.length > 0 && (
                      <View style={styles.tagsContainer}>
                        {service.tags.map((tag, index) => (
                          <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                </View>
                
                <View style={styles.serviceRight}>
                  {service.isConnected ? (
                    <View style={styles.connectedContainer}>
                      <View style={styles.connectedIndicator}>
                        <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                        <Text style={styles.connectedText}>Connected</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.disconnectButton}
                        onPress={() => handleDisconnect(service)}
                        activeOpacity={0.7}
                      >
                        <Text style={styles.disconnectButtonText}>Disconnect</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={styles.connectButton}
                      onPress={() => handleConnect(service)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.connectButtonText}>Connect</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>

        {services.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="apps-outline" size={48} color="#666666" />
            <Text style={styles.emptyStateText}>No services available</Text>
            <Text style={styles.emptyStateSubtext}>
              Services will appear here when they're added to the database
            </Text>
          </View>
        )}
      </ScrollView>

      {/* API Key Modal for Perplexity */}
      <ApiKeyModal
        visible={apiKeyModalVisible}
        serviceName={selectedService?.service_name || ''}
        onClose={() => {
          setApiKeyModalVisible(false);
          setSelectedService(null);
        }}
        onSuccess={() => {
          setApiKeyModalVisible(false);
          setSelectedService(null);
        }}
        onSubmit={handleApiKeySubmit}
      />

      {/* Twilio Credentials Modal */}
      <TwilioCredentialsModal
        visible={twilioModalVisible}
        onClose={() => {
          setTwilioModalVisible(false);
          setSelectedService(null);
        }}
        onSuccess={() => {
          setTwilioModalVisible(false);
          setSelectedService(null);
        }}
        onSubmit={handleTwilioCredentialsSubmit}
      />
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
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    lineHeight: 22,
  },
  servicesSection: {
    gap: 12,
  },
  serviceCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  serviceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  serviceLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  serviceInfo: {
    marginLeft: 12,
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  tag: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  tagText: {
    fontSize: 12,
    color: '#4A90E2',
    fontWeight: '500',
  },
  serviceRight: {
    alignItems: 'flex-end',
  },
  connectedContainer: {
    alignItems: 'flex-end',
    gap: 8,
  },
  connectedIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  connectedText: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: '500',
  },
  connectButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  connectButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  disconnectButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F44336',
  },
  disconnectButtonText: {
    color: '#F44336',
    fontSize: 12,
    fontWeight: '500',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 12,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    color: '#F44336',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  emptyState: {
    alignItems: 'center',
    padding: 32,
    marginTop: 32,
  },
  emptyStateText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 20,
  },
}); 