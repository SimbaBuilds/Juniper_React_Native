import React, { useState, useEffect } from 'react';
import { Alert, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { DatabaseService, supabase } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { useVoice } from '../voice/VoiceContext';

interface Integration {
  id: string;
  name: string;
  credentials?: string;
  automations?: string[];
  connected: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export const useIntegrations = () => {
  const { user } = useAuth();
  const navigation = useNavigation();
  const { sendTextMessage } = useVoice();

  // State management
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [authReadyIntegrations, setAuthReadyIntegrations] = useState<any[]>([]);
  const [formReadyIntegrations, setFormReadyIntegrations] = useState<any[]>([]);
  const [completedIntegrations, setCompletedIntegrations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Modal state for new integration input
  const [showIntegrationModal, setShowIntegrationModal] = useState(false);
  const [integrationInput, setIntegrationInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to get icon for integration type
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

  // Load integrations from database
  const loadIntegrations = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const dbIntegrations = await DatabaseService.getIntegrations(user.id);
      const authReadyInts = await DatabaseService.getAuthenticationReadyIntegrations(user.id);
      const formReadyInts = await DatabaseService.getFormReadyIntegrations(user.id);
      const completedInts = await DatabaseService.getCompletedIntegrations(user.id);
      
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

      // Set authentication ready integrations, form ready integrations, and completed integrations
      setAuthReadyIntegrations(authReadyInts);
      setFormReadyIntegrations(formReadyInts);
      setCompletedIntegrations(completedInts);

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

  // Handle form completion for form_ready integrations
  const handleCompleteForm = async (buildState: any) => {
    try {
      console.log('🔗 Handling form completion for:', buildState.service_name);
      
      // Get service information to find the config form
      const service = await DatabaseService.getServiceByName(buildState.service_name);
      if (!service) {
        Alert.alert('Error', 'Service information not found');
        return;
      }

      // Get config form by service ID
      const configForm = await DatabaseService.getConfigFormByServiceId(service.id);
      if (!configForm) {
        Alert.alert('Error', 'Configuration form not found');
        return;
      }

      // Open the config form URL
      const formUrl = `/integration/setup/${configForm.id}`;
      console.log('🔗 Opening config form URL:', formUrl);
      
      // For web-based config forms, we would typically open in a web browser
      // Since this is a React Native app, you might want to:
      // 1. Open in an in-app browser
      // 2. Navigate to a dedicated form screen
      // 3. Open in external browser
      
      // For now, let's open in external browser
      const webBaseUrl = process.env.EXPO_PUBLIC_WEB_URL || 'https://your-web-app.com';
      const fullUrl = `${webBaseUrl}${formUrl}`;
      console.log('🔗 Opening full URL:', fullUrl);
      
      // Check if URL can be opened
      const canOpen = await Linking.canOpenURL(fullUrl);
      if (canOpen) {
        await Linking.openURL(fullUrl);
      } else {
        Alert.alert('Error', 'Unable to open configuration form. Please check your internet connection.');
      }
      
    } catch (error) {
      console.error('Error handling form completion:', error);
      Alert.alert('Error', 'Failed to open configuration form. Please try again.');
    }
  };

  // Handle completed integration activation
  const handleActivateIntegration = async (buildState: any) => {
    try {
      console.log('✅ Activating completed integration:', buildState.service_name);
      
      // Get the actual integration record
      const dbIntegrations = await DatabaseService.getIntegrations(user!.id);
      const integration = dbIntegrations.find((int: any) => 
        int.service_name === buildState.service_name
      );
      
      if (!integration) {
        Alert.alert('Error', 'Integration record not found');
        return;
      }

      // Update integration to active status
      const { error } = await supabase
        .from('integrations')
        .update({ 
          is_active: true,
          status: 'active',
          updated_at: new Date().toISOString()
        })
        .eq('id', integration.id);

      if (error) {
        throw error;
      }

      // Show success message
      Alert.alert(
        'Integration Activated!',
        `Your ${buildState.service_name} integration is now active and ready to use.`,
        [{ text: 'OK', onPress: () => loadIntegrations() }]
      );
      
    } catch (error) {
      console.error('Error activating integration:', error);
      Alert.alert('Error', 'Failed to activate integration. Please try again.');
    }
  };

  // Handle authentication for auth_ready integrations
  const handleAuthenticate = async (buildState: any) => {
    try {
      console.log('🔗 Handling authentication for:', buildState.service_name);
      console.log('🔗 Integration ID:', buildState.id);
      
      // Get service information to find the auth script
      const service = await DatabaseService.getServiceByName(buildState.service_name);
      if (!service) {
        Alert.alert('Error', 'Service information not found');
        return;
      }

      if (!service.auth_script) {
        Alert.alert('Error', 'Authentication script not found for this service');
        return;
      }

      console.log('🔗 Executing auth script for:', service.service_name);
      
      // For OAuth flows, we need to call the backend to generate the proper OAuth URL
      // with the integration ID embedded in the state parameter
      try {
        // Check if this is an OAuth URL or script
        if (service.auth_script.includes('http')) {
          console.log('🔗 Detected OAuth URL, generating proper OAuth flow with integration ID');
          
          // Call backend to generate OAuth URL with integration ID
          const oauthUrlResponse = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/integrations/${buildState.id}/oauth-url`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service_name: buildState.service_name,
              integration_id: buildState.id
            })
          });

          if (!oauthUrlResponse.ok) {
            throw new Error('Failed to generate OAuth URL');
          }

          const oauthData = await oauthUrlResponse.json();
          const oauthUrl = oauthData.authorization_url || service.auth_script;
          
          console.log('🔗 Opening OAuth URL with integration ID:', oauthUrl);
          
          const canOpen = await Linking.canOpenURL(oauthUrl);
          if (canOpen) {
            await Linking.openURL(oauthUrl);
          } else {
            Alert.alert('Error', 'Unable to open authentication URL. Please check your internet connection.');
          }
        } else {
          // If it's actual script code, you'd need to execute it
          // This would require a more sophisticated implementation
          console.log('🔗 Auth script content:', service.auth_script.substring(0, 100) + '...');
          console.log('🔗 Script-based auth execution not yet implemented');
          Alert.alert(
            'Authentication Required', 
            'This integration requires custom authentication setup. Please contact support for assistance.',
            [
              { text: 'OK', style: 'default' },
              { text: 'Contact Support', style: 'default', onPress: () => {
                // You could open a support URL or email here
                console.log('🔗 User requested support for auth setup');
              }}
            ]
          );
        }
      } catch (linkError) {
        console.error('Error handling auth script:', linkError);
        Alert.alert('Error', 'Failed to start authentication flow. Please try again.');
      }
      
    } catch (error) {
      console.error('Error handling authentication:', error);
      Alert.alert('Error', 'Failed to start authentication. Please try again.');
    }
  };

  // Effects
  useEffect(() => {
    loadIntegrations();
  }, [user?.id]);

  // Refresh integrations when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      loadIntegrations();
    }, [user?.id])
  );

  return {
    // State
    integrations,
    authReadyIntegrations,
    formReadyIntegrations,
    completedIntegrations,
    loading,
    error,
    showIntegrationModal,
    integrationInput,
    isSubmitting,
    
    // Functions
    getIconForIntegrationType,
    handleConnectNotion,
    handleAddDifferentIntegration,
    handleCloseIntegrationModal,
    handleSubmitIntegration,
    handleCompleteForm,
    handleActivateIntegration,
    handleAuthenticate,
    setIntegrationInput,
    loadIntegrations,
  };
};
