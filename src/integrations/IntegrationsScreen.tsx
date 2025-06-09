import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { GoogleAuthService } from './google/GoogleAuthService';
import { MicrosoftAuthService } from './microsoft/MicrosoftAuthService';
import { NotionManager } from './notion/NotionManager';
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

interface ExpandableSection {
  id: string;
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  expanded: boolean;
  integrations: string[];
}

export const IntegrationsScreen: React.FC = () => {
  const { user } = useAuth();
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [googleAuthService] = useState(() => GoogleAuthService.getInstance());
  const [microsoftAuthService] = useState(() => MicrosoftAuthService.getInstance());
  const [googleAuthenticated, setGoogleAuthenticated] = useState(false);
  const [microsoftAuthenticated, setMicrosoftAuthenticated] = useState(false);
  const [sections, setSections] = useState<ExpandableSection[]>([
    {
      id: 'google',
      title: 'Google Services',
      icon: 'logo-google',
      expanded: false,
      integrations: ['google-calendar', 'gmail', 'google-drive']
    },
    {
      id: 'microsoft',
      title: 'Microsoft Services',
      icon: 'logo-microsoft',
      expanded: false,
      integrations: ['outlook-calendar', 'outlook-email', 'onedrive']
    },
    {
      id: 'notion',
      title: 'Notion',
      icon: 'document-text-outline',
      expanded: false,
      integrations: ['notion']
    }
  ]);

  // Load integrations from database
  useEffect(() => {
    const loadIntegrations = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Initialize auth services
        await googleAuthService.initialize();
        await microsoftAuthService.initialize();
        
        // Set initial auth states
        setGoogleAuthenticated(googleAuthService.isAuthenticated());
        setMicrosoftAuthenticated(microsoftAuthService.isAuthenticated());
        
        // Set up auth callbacks
        const handleGoogleAuthChange = (isAuth: boolean) => setGoogleAuthenticated(isAuth);
        const handleMicrosoftAuthChange = (isAuth: boolean) => setMicrosoftAuthenticated(isAuth);
        
        googleAuthService.addAuthCallback(handleGoogleAuthChange);
        microsoftAuthService.addAuthCallback(handleMicrosoftAuthChange);
        
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
              id: 'outlook-email',
              name: 'Outlook Email',
              credentials: 'Not configured',
              automations: [],
              connected: false,
              icon: 'mail-outline',
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
        
        // Cleanup callbacks on unmount
        return () => {
          googleAuthService.removeAuthCallback(handleGoogleAuthChange);
          microsoftAuthService.removeAuthCallback(handleMicrosoftAuthChange);
        };
      } catch (err) {
        console.error('Error loading integrations:', err);
        setError('Failed to load integrations');
      } finally {
        setLoading(false);
      }
    };

    loadIntegrations();
  }, [user?.id, googleAuthService, microsoftAuthService]);

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

  const toggleSection = (sectionId: string) => {
    setSections(prev => prev.map(section => 
      section.id === sectionId 
        ? { ...section, expanded: !section.expanded }
        : section
    ));
  };

  const handleConnectPlaceholder = (integrationName: string) => {
    console.log(`Connect ${integrationName} placeholder`);
  };

  const renderGoogleServices = () => (
    <View style={styles.servicesContainer}>
      <View style={styles.unifiedConnectSection}>
        <Text style={styles.unifiedTitle}>Connect Google Services</Text>
        <Text style={styles.unifiedDescription}>
          Connect to Google Calendar, Gmail, Google Drive, and Google Contacts with a single authentication flow.
          Grants read/write for calendar, read/draft/send for email, read/write for contacts, and read-only for drive.
        </Text>
        {googleAuthenticated ? (
          <View style={styles.connectedContainer}>
            <Text style={styles.connectedText}>✅ Connected to Google</Text>
            <TouchableOpacity
              style={[styles.unifiedConnectButton, styles.disconnectButton]}
              onPress={async () => {
                try {
                  await googleAuthService.signOut();
                } catch (error) {
                  console.error('Error signing out of Google:', error);
                }
              }}
            >
              <Text style={styles.unifiedConnectText}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.unifiedConnectButton}
            onPress={async () => {
              try {
                await googleAuthService.authenticate();
              } catch (error) {
                console.error('Error authenticating with Google:', error);
              }
            }}
          >
            <Ionicons name="logo-google" size={20} color="#FFFFFF" />
            <Text style={styles.unifiedConnectText}>Connect Google</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderMicrosoftServices = () => (
    <View style={styles.servicesContainer}>
      <View style={styles.unifiedConnectSection}>
        <Text style={styles.unifiedTitle}>Connect Microsoft Services</Text>
        <Text style={styles.unifiedDescription}>
          Connect to Outlook Calendar, Outlook Email, OneDrive, and Microsoft Contacts with a single authentication flow.
          Grants read/write for calendar, read/draft/send for email, read/write for contacts, and read-only for drive.
        </Text>
        {microsoftAuthenticated ? (
          <View style={styles.connectedContainer}>
            <Text style={styles.connectedText}>✅ Connected to Microsoft</Text>
            <TouchableOpacity
              style={[styles.unifiedConnectButton, styles.disconnectButton]}
              onPress={async () => {
                try {
                  await microsoftAuthService.signOut();
                } catch (error) {
                  console.error('Error signing out of Microsoft:', error);
                }
              }}
            >
              <Text style={styles.unifiedConnectText}>Disconnect</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.unifiedConnectButton}
            onPress={async () => {
              try {
                await microsoftAuthService.authenticate();
              } catch (error) {
                console.error('Error authenticating with Microsoft:', error);
              }
            }}
          >
            <Ionicons name="logo-microsoft" size={20} color="#FFFFFF" />
            <Text style={styles.unifiedConnectText}>Connect Microsoft</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  const renderNotionServices = () => (
    <View style={styles.servicesContainer}>
      <View style={styles.serviceSection}>
        <Text style={styles.serviceTitle}>Notion Tasks</Text>
        <NotionManager />
      </View>
    </View>
  );

  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'google':
        return renderGoogleServices();
      case 'microsoft':
        return renderMicrosoftServices();
      case 'notion':
        return renderNotionServices();
      default:
        return null;
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
        <View style={styles.header}>
          {/* <Text style={styles.title}>Integrations</Text> */}
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsTitle}>How to Add Integrations</Text>
          <Text style={styles.instructionsText}>
            To add an integration, authenticate with one of the default services below or simply ask your assistant:{'\n'}
            "Connect with my Tesla so we can tell it when to pick up my son."
            {'\n\n'}
            Your assistant will make the connection or scope out integration time and cost.
          </Text>
        </View>

        {sections.map((section) => (
          <View key={section.id} style={styles.expandableSection}>
            <TouchableOpacity 
              style={styles.sectionHeader}
              onPress={() => toggleSection(section.id)}
            >
              <View style={styles.sectionTitleRow}>
                <Ionicons name={section.icon} size={24} color="#4A90E2" />
                <Text style={styles.sectionTitle}>{section.title}</Text>
              </View>
              <Ionicons 
                name={section.expanded ? 'chevron-up' : 'chevron-down'} 
                size={20} 
                color="#B0B0B0" 
              />
            </TouchableOpacity>
            
            {section.expanded && (
              <View style={styles.sectionContent}>
                {renderSectionContent(section.id)}
              </View>
            )}
          </View>
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Integrations</Text>
          
          <View style={styles.emptyIntegrationsContainer}>
            <Ionicons name="apps-outline" size={48} color="#B0B0B0" />
            <Text style={styles.emptyIntegrationsTitle}>No Integrations Yet</Text>
            {/* <Text style={styles.emptyIntegrationsText}>
              Your connected integrations will appear here once you authenticate with the services above
            </Text> */}
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
}); 