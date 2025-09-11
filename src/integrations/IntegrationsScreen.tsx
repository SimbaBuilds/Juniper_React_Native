import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import IntegrationService from './IntegrationService';
import IntegrationEmailService from '../services/IntegrationEmailService';
import TwilioCredentialsModal from './components/TwilioCredentialsModal';
import TextbeltCredentialsModal from './components/TextbeltCredentialsModal';
import EpicProviderPickerModal from './components/EpicProviderPickerModal';
import { SettingsToggle } from '../settings/components/SettingsToggle';
import { colors } from '../shared/theme/colors';
import AppLinksPrompt from '../components/AppLinksPrompt';
import { checkAppLinksBeforeOAuth } from '../utils/appLinks';
import { MultiIssuerEpicAuthService, EpicIssuer, UserEpicConnection } from './auth/services/MultiIssuerEpicAuthService';
import { supabase } from '../supabase/supabase';

interface ServiceWithStatus {
  id: string;
  service_name: string;
  tags: string[];
  description?: string;
  isActive: boolean;
  isConnected: boolean;
  integration_id?: string;
  status?: string; // pending, active, etc.
  isPendingSetup?: boolean; // Waiting for online form completion
  isSystemIntegration?: boolean; // Flag for system integrations (based on type field)
  public: boolean; // Whether the service should be displayed publicly
  type: string; // "user" or "system" - from database
}

interface TwilioCredentials {
  accountSid: string;
  apiKey: string;
  apiSecret: string;
  phoneNumber: string;
}

interface TextbeltCredentials {
  phone_number: string;
}

interface ServiceCategory {
  name: string;
  services: ServiceWithStatus[];
}

// Epic Provider Item Component
interface EpicProviderItemProps {
  connection: UserEpicConnection & { issuer: EpicIssuer };
  onConnect: (connection: UserEpicConnection & { issuer: EpicIssuer }) => void;
  onReconnect: (connection: UserEpicConnection & { issuer: EpicIssuer }) => void;
  onDisconnect: (connection: UserEpicConnection & { issuer: EpicIssuer }) => void;
  isAuthenticated: boolean;
}

const EpicProviderItem: React.FC<EpicProviderItemProps> = ({
  connection,
  onConnect,
  onReconnect,
  onDisconnect,
  isAuthenticated
}) => {
  const [authStatus, setAuthStatus] = useState<boolean>(isAuthenticated);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const epicService = MultiIssuerEpicAuthService.getInstance();
        const authenticated = await epicService.isAuthenticated(connection.integration_id);
        setAuthStatus(authenticated);
      } catch (error) {
        console.error('Error checking Epic auth status:', error);
        setAuthStatus(false);
      } finally {
        setChecking(false);
      }
    };

    checkAuthStatus();
  }, [connection.integration_id]);

  return (
    <View style={styles.epicProviderItem}>
      <View style={styles.epicProviderInfo}>
        <Text style={styles.epicProviderName}>{connection.issuer.organization_name}</Text>
        {connection.issuer.city && connection.issuer.state && (
          <Text style={styles.epicProviderLocation}>
            {connection.issuer.city}, {connection.issuer.state}
          </Text>
        )}
      </View>
      
      <View style={styles.epicProviderActions}>
        {checking ? (
          <ActivityIndicator size="small" color="#4A90E2" />
        ) : authStatus ? (
          <>
            <View style={styles.epicConnectedIndicator}>
              <Ionicons name="checkmark-circle" size={14} color="#4CAF50" />
              <Text style={styles.epicConnectedText}>Connected</Text>
            </View>
            <TouchableOpacity
              style={styles.epicReconnectButton}
              onPress={() => onReconnect(connection)}
              activeOpacity={0.7}
            >
              <Text style={styles.epicReconnectButtonText}>Reconnect</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.epicDisconnectButton}
              onPress={() => onDisconnect(connection)}
              activeOpacity={0.7}
            >
              <Text style={styles.epicDisconnectButtonText}>Disconnect</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.epicConnectButton}
            onPress={() => onConnect(connection)}
            activeOpacity={0.7}
          >
            <Text style={styles.epicConnectButtonText}>Connect</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export const IntegrationsScreen: React.FC = () => {
  const { user } = useAuth();
  const [services, setServices] = useState<ServiceWithStatus[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [twilioModalVisible, setTwilioModalVisible] = useState(false);
  const [textbeltModalVisible, setTextbeltModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceWithStatus | null>(null);
  const [expandedServices, setExpandedServices] = useState<Set<string>>(new Set());
  const [showAppLinksPrompt, setShowAppLinksPrompt] = useState(false);
  const [pendingOAuthService, setPendingOAuthService] = useState<ServiceWithStatus | null>(null);
  const [epicProviderModalVisible, setEpicProviderModalVisible] = useState(false);
  const [epicConnections, setEpicConnections] = useState<(UserEpicConnection & { issuer: EpicIssuer })[]>([]);
  const [myChartService, setMyChartService] = useState<ServiceWithStatus | null>(null);

  // Define service categories
  const getServiceCategory = (serviceName: string): string => {
    const name = serviceName.toLowerCase();
    
     // Health and Wellness
     if (['oura', 'fitbit', 'mychart', 'apple health', 'google fit'].includes(name)) {
      return 'Health and Wellness';
    }
    
     // Email
    if (['gmail', 'microsoft outlook email', 'microsoft outlook mail'].includes(name)) {
      return 'Email';
    }
    
    // Communications
    if (['slack', 'microsoft teams', 'twilio', 'textbelt'].includes(name)) {
      return 'Communications';
    }
    
    // Productivity and Task Management
    if (['notion', 'todoist', 'any.do'].includes(name)) {
      return 'Productivity and Task Management';
    }
    
    // Calendar
    if (['google calendar', 'microsoft outlook calendar', 'microsoft calendar'].includes(name)) {
      return 'Calendar';
    }
    
   
    // Video Conferencing
    if (['google meet'].includes(name)) {
      return 'Video Conferencing';
    }
    
    // Research
    if (['research', 'ai', 'search'].includes(name)) {
      return 'Research';
    }
    
    // Cloud Storage
    if (['dropbox'].includes(name)) {
      return 'Cloud Storage';
    }
    
    // Cloud Text Documents
    if (['google docs', 'microsoft word online'].includes(name)) {
      return 'Cloud Text Documents';
    }
    
    // Cloud Spreadsheets
    if (['google sheets', 'microsoft excel online'].includes(name)) {
      return 'Cloud Spreadsheets';
    }
    
    
    // Default category for uncategorized services
    return 'Other';
  };

  // Organize regular services into categories (excludes system integrations and non-public services)
  const organizeServicesByCategory = (services: ServiceWithStatus[]): ServiceCategory[] => {
    const categoryMap: { [key: string]: ServiceWithStatus[] } = {};
    
    // Filter out system integrations and non-public services from regular categories
    const regularServices = services.filter(service => !service.isSystemIntegration && service.public);
    
    regularServices.forEach(service => {
      const category = getServiceCategory(service.service_name);
      if (!categoryMap[category]) {
        categoryMap[category] = [];
      }
      categoryMap[category].push(service);
    });
    
    // Define the order of categories
    const categoryOrder = [
      'Health and Wellness',
      'Email',
      'Communications',
      'Productivity and Task Management',
      'Calendar',
      'Video Conferencing',
      'Cloud Storage',
      'Cloud Text Documents',
      'Cloud Spreadsheets',
      'Other'
    ];
    
    // Create sorted categories array
    const categories: ServiceCategory[] = [];
    categoryOrder.forEach(categoryName => {
      if (categoryMap[categoryName] && categoryMap[categoryName].length > 0) {
        // Sort services within each category
        const sortedServices = categoryMap[categoryName].sort((a, b) => {
          // Use reverse alphabetical order for Health and Wellness category
          if (categoryName === 'Health and Wellness') {
            return b.service_name.localeCompare(a.service_name);
          }
          // Use regular alphabetical order for all other categories
          return a.service_name.localeCompare(b.service_name);
        });
        categories.push({
          name: categoryName,
          services: sortedServices
        });
      }
    });
    
    return categories;
  };

  // Get system integrations (only public ones)
  const getSystemIntegrations = (services: ServiceWithStatus[]): ServiceWithStatus[] => {
    return services.filter(service => service.isSystemIntegration && service.public);
  };

  // Filter services based on platform compatibility
  const filterServicesByPlatform = (services: ServiceWithStatus[]): ServiceWithStatus[] => {
    return services.filter(service => {
      const serviceName = service.service_name.toLowerCase();
      
      // iOS-only services
      if (serviceName === 'apple health' || serviceName === 'apple healthkit') {
        return Platform.OS === 'ios';
      }
      
      // Android-only services
      if (serviceName === 'google fit') {
        return Platform.OS === 'android';
      }
      
      // All other services are cross-platform
      return true;
    });
  };

  // Helper function to get icon for integration type
  const getIconForIntegrationType = (serviceName: string): keyof typeof Ionicons.glyphMap => {
    switch (serviceName.toLowerCase()) {
      case 'gmail':
      case 'email':
        return 'mail';
      case 'microsoft outlook email':
      case 'microsoft outlook mail':
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
      case 'google meet':
        return 'videocam';
      case 'whatsapp':
        return 'chatbox';
      case 'dropbox':
        return 'cloud';
      case 'perplexity':
        return 'search';
      case 'twitter':
      case 'x':
        return 'logo-twitter';
      case 'google sheets':
      case 'microsoft excel online':
        return 'grid';
      case 'google docs':
      case 'microsoft word online':
        return 'document';
      case 'twilio':
        return 'chatbox-ellipses';
      case 'fitbit':
        return 'fitness';
      case 'oura':
        return 'heart';
      case 'mychart':
        return 'medical';
      case 'apple health':
        return 'heart';
      case 'google fit':
        return 'fitness';
      default:
        return 'link';
    }
  };

  // Helper function to get category icon
  const getCategoryIcon = (categoryName: string): keyof typeof Ionicons.glyphMap => {
    switch (categoryName) {
      case 'Productivity and Task Management':
        return 'checkbox-outline';
      case 'Calendar':
        return 'calendar-outline';
      case 'Email':
        return 'mail-outline';
      case 'Video Conferencing':
        return 'videocam-outline';
      case 'Research':
        return 'search-outline';
      case 'Cloud Storage':
        return 'cloud-outline';
      case 'Cloud Text Documents':
        return 'document-text-outline';
      case 'Cloud Spreadsheets':
        return 'grid-outline';
      case 'Communications':
        return 'chatbubbles-outline';
      case 'Health and Wellness':
        return 'fitness-outline';
      default:
        return 'apps-outline';
    }
  };

  // Load services and user integrations
  const loadServicesWithStatus = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      
      // Fetch all services, user integrations, and system integrations in parallel
      const [allServices, userIntegrations, systemIntegrations] = await Promise.all([
        DatabaseService.getAllServicesWithTags(),
        DatabaseService.getIntegrations(user.id),
        DatabaseService.getSystemIntegrations(user.id)
      ]);
      
      // Load Epic connections for current user
      let epicConnectionsData: (UserEpicConnection & { issuer: EpicIssuer })[] = [];
      try {
        const epicService = MultiIssuerEpicAuthService.getInstance();
        epicConnectionsData = await epicService.getUserEpicConnections(user.id);
        setEpicConnections(epicConnectionsData);
      } catch (error) {
        console.error('Error loading Epic connections:', error);
      }
      
      // Map services to their status
      const serviceResults = await Promise.all(
        allServices.map(async (service: any) => {
          const serviceName = service.service_name.toLowerCase();
          
          // Store MyChart service reference for special handling
          if (serviceName === 'mychart') {
            setMyChartService(service);
          }
          
          // Check if this is a system integration (based on service type from database)
          if (service.type === 'system') {
            // Map specific system services to their integration keys
            const serviceKeyMap: Record<string, string> = {
              'Perplexity': 'perplexity',
              'Textbelt': 'textbelt',
              'XAI Live Search': 'xai_live_search'
            };
            
            const integrationKey = serviceKeyMap[service.service_name];
            if (!integrationKey) {
              console.warn(`No integration key mapped for system service: ${service.service_name}`);
              return null;
            }
            
            const isActive = systemIntegrations[integrationKey] ?? true; // Default to true for system integrations
            
            return {
              id: service.id,
              service_name: service.service_name,
              tags: service.tagNames || [],
              description: service.description,
              isActive,
              isConnected: isActive,
              integration_id: undefined, // System integrations don't have integration_id
              status: isActive ? 'active' : 'inactive',
              isPendingSetup: false,
              isSystemIntegration: true, // Flag to identify system integrations
              public: service.public, // Use the public field from database
              type: service.type, // Use the type field from database
            };
          }
          
          // Special handling for MyChart
          if (serviceName === 'mychart') {
            const hasActiveConnections = epicConnectionsData.length > 0;
            
            return {
              ...service,
              isActive: hasActiveConnections,
              isConnected: hasActiveConnections,
              integration_id: hasActiveConnections ? epicConnectionsData[0].integration_id : undefined,
              status: hasActiveConnections ? 'active' : 'inactive',
              isPendingSetup: false,
              isSystemIntegration: false,
              public: service.public,
              type: service.type,
            };
          }
          
          // Handle regular integrations (type === 'user')
          const integration = userIntegrations.find(
            (int: any) => int.service_id === service.id
          );
          
          const isActive = integration?.is_active;
          let isPendingSetup = false;

          // For API key integrations (Twilio), check if setup is pending
          if (integration && !isActive && 
              ['twilio'].includes(service.service_name.toLowerCase())) {
            try {
              const emailService = IntegrationEmailService.getInstance();
              const integrationStatus = await emailService.getIntegrationStatus(integration.id);
              isPendingSetup = integrationStatus.hasPendingToken || false;
            } catch (error) {
              console.error('Error checking integration status:', error);
            }
          }
          
          return {
            id: service.id,
            service_name: service.service_name,
            tags: service.tagNames || [],
            description: service.description,
            isActive: !!isActive,
            isConnected: !!isActive,
            integration_id: integration?.id,
            status: integration?.status,
            isPendingSetup,
            isSystemIntegration: false, // Regular OAuth integrations
            public: service.public, // Use the public field from database
            type: service.type, // Use the type field from database
          };
        })
      );
      
      // Filter out null results for system services without mapped integration keys
      const servicesWithStatus: ServiceWithStatus[] = serviceResults.filter(Boolean) as ServiceWithStatus[];
      
      setServices(servicesWithStatus);
    } catch (err) {
      console.error('Error loading services:', err);
      setError('Failed to load services');
    } finally {
      setLoading(false);
    }
  };

  // Helper function to map service names (same as in IntegrationService)
  const mapServiceName = (dbServiceName: string): string => {
    const serviceMap: Record<string, string> = {
      'Notion': 'notion',
      'Slack': 'slack',
      'Perplexity': 'perplexity',
      'Google Sheets': 'google-sheets',
      'Google Docs': 'google-docs',
      'Gmail': 'gmail',
      'Google Calendar': 'google-calendar',
      'Microsoft Excel Online': 'microsoft-excel',
      'Microsoft Word Online': 'microsoft-word',
      'Microsoft Outlook Calendar': 'microsoft-outlook-calendar',
      'Microsoft Outlook Mail': 'microsoft-outlook-mail',
      'Microsoft Teams': 'microsoft-teams',
      'Twilio': 'twilio',
      'Todoist': 'todoist'
    };
    
    return serviceMap[dbServiceName] || dbServiceName.toLowerCase().replace(/\s+/g, '-');
  };

  // Handle connect button press
  const handleConnect = async (service: ServiceWithStatus) => {
    try {
      if (!user?.id) {
        Alert.alert('Error', 'User not authenticated. Please log in again.');
        return;
      }

      console.log('🔗 Connecting to service:', service.service_name);
      
      // Map service name to internal format
      const internalServiceName = mapServiceName(service.service_name);
      console.log('🔗 Mapped service name:', internalServiceName);
      
      // Initialize integration service
      const integrationService = IntegrationService.getInstance();
      
      // Check if this service is a system-managed service (no auth required)
      if (service.type === 'system') {
        // This should now be handled by handleSystemIntegrationToggle instead
        console.warn('System integration toggle should use handleSystemIntegrationToggle');
        return;
      }

      // Check if this service uses Twilio credentials
      if (internalServiceName === 'twilio') {
        // Ensure integration record exists for email functionality
        if (!service.integration_id) {
          const integration = await integrationService.createIntegrationRecord(service.id, user.id);
          service.integration_id = integration.id;
        }
        setSelectedService(service);
        setTwilioModalVisible(true);
        return;
      }

      // Check if this service uses textbelt credentials
      if (internalServiceName === 'textbelt') {
        // Ensure integration record exists for email functionality
        if (!service.integration_id) {
          const integration = await integrationService.createIntegrationRecord(service.id, user.id);
          service.integration_id = integration.id;
        }
        setSelectedService(service);
        setTextbeltModalVisible(true);
        return;
      }

      // Special handling for MyChart - show provider picker
      if (internalServiceName === 'epic-mychart') {
        setEpicProviderModalVisible(true);
        return;
      }
      
      // All other services use OAuth - Check App Links first
      console.log('🔗 Checking App Links before OAuth for:', service.service_name);
      const appLinksEnabled = await checkAppLinksBeforeOAuth();
      
      if (!appLinksEnabled) {
        console.log('🔗 App Links not enabled - showing prompt');
        setPendingOAuthService(service);
        setShowAppLinksPrompt(true);
        return;
      }

      console.log('🔗 App Links enabled - proceeding with OAuth');
      
      // Start the integration flow
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

  // Handle App Links prompt dismissal
  const handleAppLinksPromptDismiss = () => {
    setShowAppLinksPrompt(false);
    setPendingOAuthService(null);
  };

  // Handle App Links settings opened - continue with OAuth
  const handleAppLinksSettingsOpened = async () => {
    setShowAppLinksPrompt(false);
    
    if (pendingOAuthService) {
      console.log('🔗 Continuing with OAuth after settings opened:', pendingOAuthService.service_name);
      
      // Small delay to allow user to configure settings
      setTimeout(async () => {
        try {
          const integrationService = IntegrationService.getInstance();
          await integrationService.startIntegration({
            serviceId: pendingOAuthService.id,
            serviceName: pendingOAuthService.service_name,
            userId: user!.id
          });

          // Refresh the services list to show updated status
          await loadServicesWithStatus();
        } catch (error) {
          console.error('Error continuing with OAuth after App Links setup:', error);
          Alert.alert('Error', 'Failed to connect service. Please try again.');
        }
        
        setPendingOAuthService(null);
      }, 2000); // 2 second delay
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

  // Handle textbelt credentials submission
  const handleTextbeltCredentialsSubmit = async (credentials: TextbeltCredentials) => {
    try {
      if (!selectedService || !user?.id) {
        throw new Error('Missing service or user information');
      }

      console.log('🔑 Submitting textbelt credentials...');

      const integrationService = IntegrationService.getInstance();
      await integrationService.startTextbeltIntegration({
        serviceId: selectedService.id,
        serviceName: selectedService.service_name,
        userId: user.id,
        credentials: credentials
      });

      // Refresh the services list to show updated status
      await loadServicesWithStatus();

    } catch (error) {
      console.error('Error submitting textbelt credentials:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      Alert.alert('Error', `Failed to connect: ${errorMessage}`);
      throw error; // Re-throw to let modal handle it
    }
  };

  // Handle finalize integration
  const handleFinalizeIntegration = async (service: ServiceWithStatus) => {
    try {
      if (!service.integration_id) {
        Alert.alert('Error', 'No integration ID found.');
        return;
      }

      // Check if the integration is ready for finalization
      const emailService = IntegrationEmailService.getInstance();
      const isReady = await emailService.checkIntegrationReadyForFinalization(service.integration_id);

      if (!isReady) {
        Alert.alert(
          'Setup Not Complete',
          'Please complete the setup form that was sent to your email first, then try again.',
          [{ text: 'OK' }]
        );
        return;
      }

      // Complete the integration
      const integrationService = IntegrationService.getInstance();
      
      // Update integration status to active
      await integrationService.updateIntegrationStatus(service.integration_id, 'active', true);

      Alert.alert(
        'Integration Complete! ✅',
        `Your ${service.service_name} integration is now active and ready to use.`,
        [{ text: 'Great!' }]
      );

      // Refresh the services list
      await loadServicesWithStatus();

    } catch (error) {
      console.error('Error finalizing integration:', error);
      Alert.alert('Error', 'Failed to finalize integration. Please try again.');
    }
  };

  // Handle toggle description expansion
  const toggleDescriptionExpansion = (serviceId: string) => {
    setExpandedServices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  // Handle Epic provider selection
  const handleEpicProviderSelection = async (selectedIssuers: EpicIssuer[]) => {
    try {
      if (!user?.id) {
        Alert.alert('Error', 'User not authenticated. Please log in again.');
        return;
      }

      console.log('🏥 Creating Epic connections for selected providers:', selectedIssuers.length);
      
      const epicService = MultiIssuerEpicAuthService.getInstance();
      const issuerIds = selectedIssuers.map(issuer => issuer.id);
      
      // Create user Epic connections
      await epicService.createUserEpicConnections(user.id, issuerIds);
      
      // Refresh the services list to show updated status
      await loadServicesWithStatus();
      
      Alert.alert(
        'Providers Selected',
        `${selectedIssuers.length} healthcare provider(s) added. You can now connect to each one individually.`,
        [{ text: 'OK' }]
      );
      
    } catch (error) {
      console.error('Error selecting Epic providers:', error);
      Alert.alert('Error', 'Failed to select providers. Please try again.');
    }
  };

  // Handle individual Epic connection
  const handleEpicConnect = async (connection: UserEpicConnection & { issuer: EpicIssuer }) => {
    try {
      console.log('🏥 Connecting to Epic issuer:', connection.issuer.organization_name);
      
      // Check App Links first
      const appLinksEnabled = await checkAppLinksBeforeOAuth();
      
      if (!appLinksEnabled) {
        console.log('🔗 App Links not enabled - showing prompt');
        setShowAppLinksPrompt(true);
        return;
      }

      const epicService = MultiIssuerEpicAuthService.getInstance();
      await epicService.authenticate(connection.integration_id);
      
      // Refresh the services list
      await loadServicesWithStatus();
      
    } catch (error) {
      console.error('Error connecting Epic provider:', error);
      Alert.alert('Error', 'Failed to connect to provider. Please try again.');
    }
  };

  // Handle individual Epic disconnection
  const handleEpicDisconnect = async (connection: UserEpicConnection & { issuer: EpicIssuer }) => {
    try {
      Alert.alert(
        'Disconnect Provider',
        `Are you sure you want to disconnect from ${connection.issuer.organization_name}?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Disconnect', 
            style: 'destructive',
            onPress: async () => {
              console.log('🏥 Disconnecting Epic issuer:', connection.issuer.organization_name);
              
              const epicService = MultiIssuerEpicAuthService.getInstance();
              await epicService.disconnect(connection.integration_id);
              
              // Refresh the services list
              await loadServicesWithStatus();
              
              Alert.alert(
                'Provider Disconnected',
                `${connection.issuer.organization_name} has been disconnected.`,
                [{ text: 'OK' }]
              );
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error disconnecting Epic provider:', error);
      Alert.alert('Error', 'Failed to disconnect provider. Please try again.');
    }
  };

  // Handle individual Epic reconnection
  const handleEpicReconnect = async (connection: UserEpicConnection & { issuer: EpicIssuer }) => {
    try {
      Alert.alert(
        'Reconnect Provider',
        `Reconnect to ${connection.issuer.organization_name}?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Reconnect', 
            onPress: async () => {
              console.log('🏥 Reconnecting Epic issuer:', connection.issuer.organization_name);
              
              const epicService = MultiIssuerEpicAuthService.getInstance();
              epicService.setIsReconnection(true, connection.integration_id);
              await epicService.authenticate(connection.integration_id);
              
              // Refresh the services list
              await loadServicesWithStatus();
            }
          }
        ]
      );
    } catch (error) {
      console.error('Error reconnecting Epic provider:', error);
      Alert.alert('Error', 'Failed to reconnect provider. Please try again.');
    }
  };

  // Check if Epic connection is authenticated
  const isEpicConnectionAuthenticated = async (integrationId: string): Promise<boolean> => {
    try {
      const epicService = MultiIssuerEpicAuthService.getInstance();
      return await epicService.isAuthenticated(integrationId);
    } catch (error) {
      console.error('Error checking Epic authentication:', error);
      return false;
    }
  };

  // System integration toggle
  const handleSystemIntegrationToggle = async (service: ServiceWithStatus, enabled: boolean) => {
    try {
      if (!user?.id) {
        Alert.alert('Error', 'User not authenticated. Please log in again.');
        return;
      }

      console.log(`🔧 Toggling system integration: ${service.service_name} to ${enabled}`);
      
      // Map specific system services to their integration keys
      const serviceKeyMap: Record<string, string> = {
        'Perplexity': 'perplexity',
        'Textbelt': 'textbelt',
        'XAI Live Search': 'xai_live_search'
      };
      
      const integrationKey = serviceKeyMap[service.service_name];
      if (!integrationKey) {
        Alert.alert('Error', `No integration key mapped for system service: ${service.service_name}`);
        return;
      }
      
      await DatabaseService.updateSystemIntegration(user.id, integrationKey, enabled);
      
      // Refresh the services list
      await loadServicesWithStatus();
      
    } catch (error) {
      console.error('Error toggling system integration:', error);
      Alert.alert('Error', 'Failed to update integration. Please try again.');
    }
  };

  // Handle reconnect button press
  const handleReconnect = async (service: ServiceWithStatus) => {
    try {
      if (!service.integration_id) {
        Alert.alert('Error', 'No integration ID found.');
        return;
      }

      Alert.alert(
        'Reconnect Integration',
        `Are you sure you want to reconnect ${service.service_name}? This will start a new authentication flow.`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Reconnect', 
            onPress: async () => {
              const integrationService = IntegrationService.getInstance();
              await integrationService.reconnectIntegration(
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
      console.error('Error reconnecting service:', error);
      Alert.alert('Error', 'Failed to reconnect service. Please try again.');
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

  // Filter services by platform compatibility first
  const platformFilteredServices = filterServicesByPlatform(services);
  const categorizedServices = organizeServicesByCategory(platformFilteredServices);
  const systemIntegrations = getSystemIntegrations(platformFilteredServices);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          {/* <Text style={styles.title}>Integrations</Text> */}
          <Text style={styles.subtitle}>
            Integrations below can take up to 3 minutes each to complete.
          </Text>
        </View>

        <View style={styles.servicesSection}>
          {categorizedServices.map((category) => (
            <View key={category.name} style={styles.categorySection}>
              <View style={styles.categoryHeader}>
                <Ionicons 
                  name={getCategoryIcon(category.name)} 
                  size={20} 
                  color="#4A90E2" 
                />
                <Text style={styles.categoryTitle}>{category.name}</Text>
                <View style={styles.categoryDivider} />
              </View>
              
              <View style={styles.categoryServices}>
                {category.services.map((service) => (
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
                        {/* Special handling for MyChart */}
                        {service.service_name.toLowerCase() === 'mychart' ? (
                          <TouchableOpacity
                            style={styles.connectButton}
                            onPress={() => handleConnect(service)}
                            activeOpacity={0.7}
                          >
                            <Text style={styles.connectButtonText}>
                              {epicConnections.length > 0 ? 'Select Care Provider(s)' : 'Select Care Provider(s)'}
                            </Text>
                          </TouchableOpacity>
                        ) : (
                          <>
                            {service.isConnected ? (
                              <View style={styles.connectedContainer}>
                                <View style={styles.connectedIndicator}>
                                  <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
                                  <Text style={styles.connectedText}>Connected</Text>
                                </View>
                                <TouchableOpacity
                                  style={styles.reconnectButton}
                                  onPress={() => handleReconnect(service)}
                                  activeOpacity={0.7}
                                >
                                  <Text style={styles.reconnectButtonText}>Reconnect</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={styles.disconnectButton}
                                  onPress={() => handleDisconnect(service)}
                                  activeOpacity={0.7}
                                >
                                  <Text style={styles.disconnectButtonText}>Disconnect</Text>
                                </TouchableOpacity>
                              </View>
                            ) : service.isPendingSetup ? (
                              <View style={styles.pendingContainer}>
                                <View style={styles.pendingIndicator}>
                                  <Ionicons name="hourglass" size={16} color="#FF9800" />
                                  <Text style={styles.pendingText}>Setup In Progress</Text>
                                </View>
                                <TouchableOpacity
                                  style={styles.finalizeButton}
                                  onPress={() => handleFinalizeIntegration(service)}
                                  activeOpacity={0.7}
                                >
                                  <Text style={styles.finalizeButtonText}>Finalize Integration</Text>
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
                          </>
                        )}
                      </View>
                    </View>
                    
                    {/* Epic Connections expandable section - only for MyChart */}
                    {service.service_name.toLowerCase() === 'mychart' && epicConnections.length > 0 && (
                      <View style={styles.epicConnectionsSection}>
                        <TouchableOpacity
                          style={styles.descriptionToggle}
                          onPress={() => toggleDescriptionExpansion(service.id)}
                          activeOpacity={0.7}
                        >
                          <Text style={styles.descriptionToggleText}>
                            {expandedServices.has(service.id) ? 'Hide Providers' : `Show Providers (${epicConnections.length})`}
                          </Text>
                          <Ionicons 
                            name={expandedServices.has(service.id) ? 'chevron-up' : 'chevron-down'} 
                            size={16} 
                            color="#4A90E2" 
                          />
                        </TouchableOpacity>
                        
                        {expandedServices.has(service.id) && (
                          <View style={styles.epicProvidersContent}>
                            {epicConnections.map((connection) => (
                              <EpicProviderItem
                                key={connection.id}
                                connection={connection}
                                onConnect={handleEpicConnect}
                                onReconnect={handleEpicReconnect}
                                onDisconnect={handleEpicDisconnect}
                                isAuthenticated={false} // We'll need to check this async
                              />
                            ))}
                          </View>
                        )}
                      </View>
                    )}

                    {/* Description section - expandable */}
                    {service.description && (
                      <View style={styles.descriptionSection}>
                        <TouchableOpacity
                          style={styles.descriptionToggle}
                          onPress={() => toggleDescriptionExpansion(service.id)}
                          activeOpacity={0.7}
                        >
                          <Text style={styles.descriptionToggleText}>
                            {expandedServices.has(service.id) ? 'Hide Details' : 'Show Details'}
                          </Text>
                          <Ionicons 
                            name={expandedServices.has(service.id) ? 'chevron-up' : 'chevron-down'} 
                            size={16} 
                            color="#4A90E2" 
                          />
                        </TouchableOpacity>
                        
                        {expandedServices.has(service.id) && (
                          <View style={styles.descriptionContent}>
                            <Text style={styles.descriptionText}>{service.description}</Text>
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* System Integrations Section */}
        {systemIntegrations.length > 0 && (
          <View style={styles.systemIntegrationsSection}>
            <View style={styles.systemIntegrationsHeader}>
              <Ionicons name="settings-outline" size={20} color="#4A90E2" />
              <Text style={styles.systemIntegrationsTitle}>System Integrations</Text>
              <View style={styles.categoryDivider} />
            </View>
            <Text style={styles.systemIntegrationsDescription}>
              Built-in services that don't require separate authentication
            </Text>
            
            <View style={styles.systemIntegrationsServices}>
              {systemIntegrations.map((service) => (
                <View key={service.id} style={styles.systemServiceCard}>
                  <View style={styles.systemServiceHeader}>
                    <View style={styles.systemServiceLeft}>
                      <Ionicons 
                        name={getIconForIntegrationType(service.service_name)} 
                        size={24} 
                        color={service.isActive ? "#4A90E2" : "#666666"} 
                      />
                      <View style={styles.serviceInfo}>
                        <Text style={styles.serviceName}>{service.service_name}</Text>
                        <Text style={styles.systemServiceDescription}>
                          Gives Juniper advanced research capabilities
                        </Text>
                      </View>
                    </View>
                    
                    <View style={styles.systemServiceRight}>
                      <SettingsToggle
                        label=""
                        value={service.isActive}
                        onValueChange={(enabled) => handleSystemIntegrationToggle(service, enabled)}
                        description=""
                      />
                    </View>
                  </View>
                  
                  {/* Description section - expandable */}
                  {service.description && (
                    <View style={styles.descriptionSection}>
                      <TouchableOpacity
                        style={styles.descriptionToggle}
                        onPress={() => toggleDescriptionExpansion(service.id)}
                        activeOpacity={0.7}
                      >
                        <Text style={styles.descriptionToggleText}>
                          {expandedServices.has(service.id) ? 'Hide Details' : 'Show Details'}
                        </Text>
                        <Ionicons 
                          name={expandedServices.has(service.id) ? 'chevron-up' : 'chevron-down'} 
                          size={16} 
                          color="#4A90E2" 
                        />
                      </TouchableOpacity>
                      
                      {expandedServices.has(service.id) && (
                        <View style={styles.descriptionContent}>
                          <Text style={styles.descriptionText}>{service.description}</Text>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        )}

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


      {/* Twilio Credentials Modal */}
      <TwilioCredentialsModal
        visible={twilioModalVisible}
        integrationId={selectedService?.integration_id}
        onClose={() => {
          setTwilioModalVisible(false);
          setSelectedService(null);
        }}
        onSuccess={() => {
          setTwilioModalVisible(false);
          setSelectedService(null);
        }}
        onSubmit={handleTwilioCredentialsSubmit}
        onEmailSent={() => {
          // Handle email sent - set service to pending setup state
          loadServicesWithStatus();
        }}
      />

      {/* Textbelt Credentials Modal */}
      <TextbeltCredentialsModal
        visible={textbeltModalVisible}
        integrationId={selectedService?.integration_id}
        onClose={() => {
          setTextbeltModalVisible(false);
          setSelectedService(null);
        }}
        onSuccess={() => {
          setTextbeltModalVisible(false);
          setSelectedService(null);
        }}
        onSubmit={handleTextbeltCredentialsSubmit}
      />

      {/* Epic Provider Picker Modal */}
      <EpicProviderPickerModal
        visible={epicProviderModalVisible}
        onClose={() => setEpicProviderModalVisible(false)}
        onSave={handleEpicProviderSelection}
        existingConnections={epicConnections.map(conn => conn.issuer_id)}
      />

      {/* App Links Prompt - OAuth Blocking */}
      <AppLinksPrompt
        visible={showAppLinksPrompt}
        onDismiss={handleAppLinksPromptDismiss}
        onSettingsOpened={handleAppLinksSettingsOpened}
        isBlocking={true}
        title="App Links Required for Integration"
        message={`To connect ${pendingOAuthService?.service_name || 'this service'}, you must enable app links.\n\nWithout this setting, OAuth authentication will fail and you won't be able to connect your account.`}
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
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    lineHeight: 22,
  },
  servicesSection: {
    gap: 24,
  },
  categorySection: {
    marginBottom: 8,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginLeft: 8,
  },
  categoryDivider: {
    flex: 1,
    height: 1,
    backgroundColor: '#2A2A2A',
    marginLeft: 12,
  },
  categoryServices: {
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
    color: colors.text.primary,
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
    color: colors.text.primary,
    fontSize: 14,
    fontWeight: '500',
  },
  reconnectButton: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#4A90E2',
    marginBottom: 6,
  },
  reconnectButtonText: {
    color: '#4A90E2',
    fontSize: 12,
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
  pendingContainer: {
    alignItems: 'flex-end',
    gap: 8,
  },
  pendingIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pendingText: {
    fontSize: 14,
    color: '#FF9800',
    fontWeight: '500',
  },
  finalizeButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  finalizeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  // System Integrations Section Styles
  systemIntegrationsSection: {
    marginTop: 32,
    marginBottom: 24,
  },
  systemIntegrationsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  systemIntegrationsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginLeft: 8,
  },
  systemIntegrationsDescription: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 16,
    paddingHorizontal: 4,
    lineHeight: 20,
  },
  systemIntegrationsServices: {
    gap: 12,
  },
  systemServiceCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderLeftWidth: 4,
    borderLeftColor: '#4A90E2',
  },
  systemServiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  systemServiceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  systemServiceRight: {
    marginLeft: 16,
  },
  systemServiceDescription: {
    fontSize: 13,
    color: '#B0B0B0',
    marginTop: 4,
    lineHeight: 18,
  },
  // Description expansion styles
  descriptionSection: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  descriptionToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  descriptionToggleText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
  descriptionContent: {
    marginTop: 8,
    paddingHorizontal: 4,
  },
  descriptionText: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
  },
  // Epic provider styles
  epicConnectionsSection: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  epicProvidersContent: {
    marginTop: 8,
    gap: 8,
  },
  epicProviderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  epicProviderInfo: {
    flex: 1,
  },
  epicProviderName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 2,
  },
  epicProviderLocation: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  epicProviderActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  epicConnectedIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  epicConnectedText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  epicConnectButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  epicConnectButtonText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  epicReconnectButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  epicReconnectButtonText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  epicDisconnectButton: {
    backgroundColor: '#F44336',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  epicDisconnectButtonText: {
    fontSize: 11,
    color: '#FFFFFF',
    fontWeight: '600',
  },
}); 