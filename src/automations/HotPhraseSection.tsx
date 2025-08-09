import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HotPhrase } from '../supabase/tables';
import { DatabaseService } from '../supabase/supabase';
import { HotPhraseCard } from './HotPhraseCard';
import { HotPhraseModal } from './HotPhraseModal';
import { colors } from '../shared/theme/colors';

interface HotPhraseSectionProps {
  userId: string;
}

// Built-in hot phrases that are created for all users
const BUILT_IN_HOT_PHRASES = [
  {
    phrase: "send a text",
    service_name: "Textbelt",
    tool_name: "send_text",
    description: "Send a text message to any phone number",
    is_built_in: true,
    is_active: true,
    execution_count: 0,
  },
];

export const HotPhraseSection: React.FC<HotPhraseSectionProps> = ({ userId }) => {
  const [hotPhrases, setHotPhrases] = useState<HotPhrase[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingHotPhrase, setEditingHotPhrase] = useState<HotPhrase | null>(null);

  useEffect(() => {
    loadHotPhrases();
  }, [userId]);

  const loadHotPhrases = async () => {
    try {
      setLoading(true);
      const userHotPhrases = await DatabaseService.getHotPhrases(userId);
      
      // Check if user has built-in hot phrases
      const hasBuiltIns = userHotPhrases.some(hp => hp.is_built_in);
      
      if (!hasBuiltIns) {
        // Create built-in hot phrases for this user
        for (const builtIn of BUILT_IN_HOT_PHRASES) {
          try {
            await DatabaseService.createHotPhrase({
              user_id: userId,
              ...builtIn,
            });
          } catch (error) {
            console.error('Error creating built-in hot phrase:', error);
          }
        }
        // Reload to include built-ins
        const updatedHotPhrases = await DatabaseService.getHotPhrases(userId);
        setHotPhrases(updatedHotPhrases);
      } else {
        setHotPhrases(userHotPhrases);
      }
    } catch (error) {
      console.error('Error loading hot phrases:', error);
      Alert.alert('Error', 'Failed to load hot phrases');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateHotPhrase = () => {
    setEditingHotPhrase(null);
    setModalVisible(true);
  };

  const handleEditHotPhrase = (hotPhrase: HotPhrase) => {
    setEditingHotPhrase(hotPhrase);
    setModalVisible(true);
  };

  const handleDeleteHotPhrase = (hotPhrase: HotPhrase) => {
    Alert.alert(
      'Delete Hot Phrase',
      `Are you sure you want to delete "${hotPhrase.phrase}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await DatabaseService.deleteHotPhrase(hotPhrase.id);
              setHotPhrases(prev => prev.filter(hp => hp.id !== hotPhrase.id));
            } catch (error) {
              console.error('Error deleting hot phrase:', error);
              Alert.alert('Error', 'Failed to delete hot phrase');
            }
          },
        },
      ]
    );
  };

  const handleToggleHotPhrase = async (hotPhrase: HotPhrase) => {
    try {
      const updatedHotPhrase = await DatabaseService.updateHotPhrase(hotPhrase.id, {
        is_active: !hotPhrase.is_active,
      });
      
      setHotPhrases(prev =>
        prev.map(hp => hp.id === hotPhrase.id ? updatedHotPhrase : hp)
      );
    } catch (error) {
      console.error('Error toggling hot phrase:', error);
      Alert.alert('Error', 'Failed to update hot phrase');
    }
  };

  const handleSaveHotPhrase = (savedHotPhrase: HotPhrase) => {
    if (editingHotPhrase) {
      // Update existing
      setHotPhrases(prev =>
        prev.map(hp => hp.id === savedHotPhrase.id ? savedHotPhrase : hp)
      );
    } else {
      // Add new
      setHotPhrases(prev => [savedHotPhrase, ...prev]);
    }
  };

  const activeHotPhrases = hotPhrases.filter(hp => hp.is_active);
  const inactiveHotPhrases = hotPhrases.filter(hp => !hp.is_active);
  const builtInHotPhrases = hotPhrases.filter(hp => hp.is_built_in);
  const userHotPhrases = hotPhrases.filter(hp => !hp.is_built_in);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Hot Phrases</Text>
        <TouchableOpacity style={styles.addButton} onPress={handleCreateHotPhrase}>
          <Ionicons name="add" size={20} color="#FFFFFF" />
          <Text style={styles.addButtonText}>Add Phrase</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.instructionsCard}>
        <Text style={styles.instructionsTitle}>Quick Actions</Text>
        <Text style={styles.instructionsText}>
          Hot phrases allow Juniper to complete frequent tasks at double the speed. 
          You can ask you assistant to create a hot phrase or begin creating one manually below.
        </Text>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Loading hot phrases...</Text>
        </View>
      ) : (
        <>
          {hotPhrases.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="flash-outline" size={48} color="#666666" />
              <Text style={styles.emptyStateText}>No hot phrases configured</Text>
              <Text style={styles.emptyStateSubtext}>
                Create your first hot phrase for quick actions
              </Text>
            </View>
          ) : (
            <>
              {/* Active Hot Phrases */}
              {activeHotPhrases.length > 0 && (
                <View style={styles.subsection}>
                  <Text style={styles.subsectionTitle}>
                    Active ({activeHotPhrases.length})
                  </Text>
                  {activeHotPhrases.map((hotPhrase) => (
                    <HotPhraseCard
                      key={hotPhrase.id}
                      hotPhrase={hotPhrase}
                      onEdit={!hotPhrase.is_built_in ? handleEditHotPhrase : undefined}
                      onDelete={!hotPhrase.is_built_in ? handleDeleteHotPhrase : undefined}
                      onToggle={handleToggleHotPhrase}
                    />
                  ))}
                </View>
              )}

              {/* Inactive Hot Phrases */}
              {inactiveHotPhrases.length > 0 && (
                <View style={styles.subsection}>
                  <Text style={styles.subsectionTitle}>
                    Inactive ({inactiveHotPhrases.length})
                  </Text>
                  {inactiveHotPhrases.map((hotPhrase) => (
                    <HotPhraseCard
                      key={hotPhrase.id}
                      hotPhrase={hotPhrase}
                      onEdit={!hotPhrase.is_built_in ? handleEditHotPhrase : undefined}
                      onDelete={!hotPhrase.is_built_in ? handleDeleteHotPhrase : undefined}
                      onToggle={handleToggleHotPhrase}
                    />
                  ))}
                </View>
              )}
            </>
          )}
        </>
      )}

      {/* Examples */}
      <View style={styles.examplesSection}>
        <Text style={styles.subsectionTitle}>Hot Phrase Examples</Text>
        
        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>Communication</Text>
          <Text style={styles.exampleText}>
            • "send a text" → Send SMS message{'\n'}
            • "call someone" → Make phone call{'\n'}
            • "email John" → Send email to contact
          </Text>
        </View>

        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>Productivity</Text>
          <Text style={styles.exampleText}>
            • "add task" → Create new task{'\n'}
            • "check calendar" → View today's events{'\n'}
            • "take note" → Create quick note
          </Text>
        </View>

        <View style={styles.exampleCard}>
          <Text style={styles.exampleTitle}>Information</Text>
          <Text style={styles.exampleText}>
            • "weather today" → Get weather forecast{'\n'}
            • "stock price" → Check stock information{'\n'}
            • "quick search" → Web search
          </Text>
        </View>
      </View>

      <HotPhraseModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          setEditingHotPhrase(null);
        }}
        onSave={handleSaveHotPhrase}
        hotPhrase={editingHotPhrase}
        userId={userId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text.primary,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  instructionsCard: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  instructionsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 8,
  },
  instructionsText: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
  },
  loadingContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  loadingText: {
    color: '#FFFFFF',
    marginTop: 12,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
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
  subsection: {
    marginBottom: 24,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text.primary,
    marginBottom: 12,
  },
  examplesSection: {
    marginTop: 24,
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
});