import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';

interface Automation {
  id: string;
  name: string;
  integrations?: string[];
  enabled: boolean;
}

export const AutomationsScreen: React.FC = () => {
  const { user } = useAuth();
  const [automations, setAutomations] = useState<Automation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load automations from database
  useEffect(() => {
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
          integrations: automation.actions?.integrations || [],
          enabled: automation.is_active,
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

    loadAutomations();
  }, [user?.id]);

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
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Automations</Text>
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsTitle}>How to Add Automations</Text>
          <Text style={styles.instructionsText}>
            To add an automation, simply ask your assistant e.g.{'\n'}
            "Whenever a new Starship mission date is announced, add it to my calendar."
            {'\n\n'}
            Your assistant will attempt to set up the automation or scope out implementation time and cost.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Automations</Text>
          
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
                </View>
              </View>
            ))
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Automation Examples</Text>
          
          <View style={styles.exampleCard}>
            <Text style={styles.exampleTitle}>Calendar Automations</Text>
            <Text style={styles.exampleText}>
              • Add meetings automatically from email invites{'\n'}
              • Block focus time based on workload{'\n'}
              • Send pre-meeting reminders
            </Text>
          </View>

          <View style={styles.exampleCard}>
            <Text style={styles.exampleTitle}>Communication Automations</Text>
            <Text style={styles.exampleText}>
              • Auto-respond to urgent emails{'\n'}
              • Daily digest of important messages{'\n'}
              • Schedule message sending for optimal times
            </Text>
          </View>

          <View style={styles.exampleCard}>
            <Text style={styles.exampleTitle}>Smart Home Integrations</Text>
            <Text style={styles.exampleText}>
              • Adjust lights based on calendar{'\n'}
              • Pre-heat car before leaving{'\n'}
              • Set thermostat based on schedule
            </Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
    color: '#FFFFFF',
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
  },
  errorText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 16,
  },
}); 