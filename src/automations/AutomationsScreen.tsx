import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { HotPhraseSection } from './HotPhraseSection';
import { colors } from '../shared/theme/colors';

interface Automation {
  id: string;
  name: string;
  trigger_conditions?: Record<string, any>;
  actions?: Record<string, any>;
  integrations?: string[];
  enabled: boolean;
  execution_count?: number;
  last_executed?: Date;
}

export const AutomationsScreen: React.FC = () => {
  const { user } = useAuth();
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load automations from database
  const loadAutomations = async () => {
    if (!user?.id) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const dbAutomations = await DatabaseService.getAutomations(user.id);
      
      // Convert database automations to UI format
      const formattedAutomations: Automation[] = dbAutomations.map((automation: any) => ({
        id: automation.id,
        name: automation.name,
        trigger_conditions: automation.trigger_conditions,
        actions: automation.actions,
        integrations: automation.actions?.integrations || [],
        enabled: automation.is_active,
        execution_count: automation.execution_count || 0,
        last_executed: automation.last_executed,
      }));

      // Add default automations if none exist
      if (formattedAutomations.length === 0) {
        const defaultAutomations: Automation[] = [
          {
            id: '1',
            name: 'Add Starship missions to calendar',
            integrations: ['Google Calendar', 'SpaceX API'],
            enabled: true,
          },
          {
            id: '2',
            name: 'Daily stock briefing',
            integrations: ['Finance API'],
            enabled: true,
          },
          {
            id: '3',
            name: 'Weather-based reminders',
            integrations: ['Weather API', 'Push Notifications'],
            enabled: false,
          },
        ];
        setAutomations(defaultAutomations);
      } else {
        setAutomations(formattedAutomations);
      }
    } catch (err) {
      console.error('Error loading automations:', err);
      setError('Failed to load automations');
    } finally {
      setLoading(false);
    }
  };

  // Load automations on mount
  useEffect(() => {
    loadAutomations();
  }, [user?.id]);

  // Refresh when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      loadAutomations();
    }, [user?.id])
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Loading automations...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadAutomations}>
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
          {/* <Text style={styles.title}>Automations</Text> */}
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsTitle}>Event-Driven Automations</Text>
          <Text style={styles.instructionsText}>
            To add an automation, simply ask your assistant e.g.{'\n'}
            "Whenever a new Starship mission date is announced, add it to my calendar."
            {'\n\n'}
            Your assistant will create and manage these automations automatically. You cannot edit them manually.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Event-Driven Automations</Text>
          
          {automations.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="construct-outline" size={48} color="#666666" />
              <Text style={styles.emptyStateText}>No automations configured yet</Text>
              <Text style={styles.emptyStateSubtext}>
                Ask your assistant to set up your first automation
              </Text>
            </View>
          ) : (
            automations.map((automation) => (
              <View key={automation.id} style={styles.automationCard}>
                <View style={styles.automationHeader}>
                  <View style={styles.automationTitleRow}>
                    <Ionicons 
                      name={automation.enabled ? "checkmark-circle" : "pause-circle"} 
                      size={24} 
                      color={automation.enabled ? "#4CAF50" : "#F44336"} 
                    />
                    <Text style={styles.automationName}>{automation.name}</Text>
                  </View>
                  <View style={[styles.statusBadge, automation.enabled ? styles.enabledBadge : styles.disabledBadge]}>
                    <Text style={[styles.statusText, automation.enabled ? styles.enabledText : styles.disabledText]}>
                      {automation.enabled ? 'Active' : 'Inactive'}
                    </Text>
                  </View>
                </View>
                
                <View style={styles.automationDetails}>
                  <Text style={styles.detailLabel}>Integrations:</Text>
                  <Text style={styles.detailValue}>
                    {automation.integrations?.length ? automation.integrations.join(', ') : 'None configured'}
                  </Text>
                  
                  {automation.execution_count !== undefined && automation.execution_count > 0 && (
                    <View style={styles.statsRow}>
                      <Text style={styles.statsText}>
                        Executed {automation.execution_count} time{automation.execution_count !== 1 ? 's' : ''}
                        {automation.last_executed && ` • Last: ${new Date(automation.last_executed).toLocaleDateString()}`}
                      </Text>
                    </View>
                  )}
                  
                  <View style={styles.createdByBadge}>
                    <Text style={styles.createdByText}>Created by Assistant</Text>
                  </View>
                </View>
              </View>
            ))
          )}
        </View>

        {/* Hot Phrases Section */}
        {/* <View style={styles.divider} /> */}
        
        {/* <HotPhraseSection userId={user?.id || ''} /> */}
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
    color: colors.text.primary,
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
    color: colors.text.primary,
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
    color: colors.text.primary,
    marginBottom: 16,
  },
  automationCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  automationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  automationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  automationName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginLeft: 12,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  enabledBadge: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
  },
  disabledBadge: {
    backgroundColor: 'rgba(244, 67, 54, 0.2)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  enabledText: {
    color: '#4CAF50',
  },
  disabledText: {
    color: '#F44336',
  },
  automationDetails: {
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  emptyState: {
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
  },
  exampleCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  exampleTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    fontSize: 16,
    color: '#F44336',
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
  divider: {
    height: 1,
    backgroundColor: '#333333',
    marginVertical: 32,
  },
  statsRow: {
    marginTop: 8,
  },
  statsText: {
    fontSize: 12,
    color: '#666666',
  },
  createdByBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(74, 144, 226, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 8,
  },
  createdByText: {
    fontSize: 12,
    color: '#4A90E2',
    fontWeight: '500',
  },
}); 