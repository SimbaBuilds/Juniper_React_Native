import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GoogleCalendarManager } from './calendar/GoogleCalendarManager';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';

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
          name: integration.integration_type,
          credentials: integration.configuration?.credentials || 'Not configured',
          automations: integration.configuration?.automations || [],
          connected: integration.is_active,
          icon: getIconForIntegrationType(integration.integration_type)
        }));

        // Add default integrations if none exist
        if (formattedIntegrations.length === 0) {
          const defaultIntegrations: Integration[] = [
            {
              id: 'gmail',
              name: 'Gmail',
              credentials: 'Not configured',
              automations: [],
              connected: false,
              icon: 'mail',
            },
            {
              id: 'outlook-email',
              name: 'Outlook Email',
              credentials: 'Not configured',
              automations: [],
              connected: false,
              icon: 'mail-outline',
            },
            {
              id: 'outlook-calendar',
              name: 'Outlook Calendar',
              credentials: 'Not configured',
              automations: [],
              connected: false,
              icon: 'calendar-outline',
            },
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

  const handleConnectPlaceholder = (integrationName: string) => {
    console.log(`Connect ${integrationName} placeholder`);
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
        <View style={styles.header}>
          <Text style={styles.title}>Integrations</Text>
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsTitle}>How to Add Integrations</Text>
          <Text style={styles.instructionsText}>
            To add an integration, simply ask your assistant:{'\n'}
            "Connect with my Tesla so I can tell it when to pick up my daughter."
            {'\n\n'}
            Your assistant will make the connection or scope out integration time and cost.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Google Calendar</Text>
          <GoogleCalendarManager />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Integrations</Text>
          
          {integrations.filter(integration => integration.id !== 'google-calendar').map((integration) => (
            <View key={integration.id} style={styles.integrationCard}>
              <View style={styles.integrationHeader}>
                <View style={styles.integrationTitleRow}>
                  <Ionicons name={integration.icon} size={24} color="#4A90E2" />
                  <Text style={styles.integrationName}>{integration.name}</Text>
                </View>
                <View style={styles.statusBadge}>
                  <Text style={[styles.statusText, integration.connected ? styles.connectedText : styles.disconnectedText]}>
                    {integration.connected ? 'Connected' : 'Not Connected'}
                  </Text>
                </View>
              </View>
              
              <View style={styles.integrationDetails}>
                <Text style={styles.detailLabel}>Credentials:</Text>
                <Text style={styles.detailValue}>{integration.credentials || 'Not configured'}</Text>
                
                <Text style={styles.detailLabel}>Automations:</Text>
                <Text style={styles.detailValue}>
                  {integration.automations?.length ? integration.automations.join(', ') : 'None configured'}
                </Text>
              </View>

              {!integration.connected && (
                <TouchableOpacity
                  style={styles.connectButton}
                  onPress={() => handleConnectPlaceholder(integration.name)}
                >
                  <Text style={styles.connectButtonText}>Connect {integration.name}</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 16,
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
  },
  disconnectedText: {
    color: '#F44336',
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
}); 