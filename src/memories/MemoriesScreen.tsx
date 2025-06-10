import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';

interface Memory {
  id: string;
  content: string;
  date: string;
  tags: string[];
  title?: string;
}

export const MemoriesScreen: React.FC = () => {
  const { user } = useAuth();
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMemory, setNewMemory] = useState({
    title: '',
    content: '',
    tags: ''
  });
  const [saving, setSaving] = useState(false);

  // Helper function to ensure memories have proper tags arrays
  const ensureMemoryTags = (memories: any[]): Memory[] => {
    return memories.map(memory => ({
      ...memory,
      tags: Array.isArray(memory.tags) ? memory.tags : []
    }));
  };

  // Load memories from database
  useEffect(() => {
    const loadMemories = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const dbMemories = await DatabaseService.getMemories(user.id);
        
        // Convert database memories to UI format
        const formattedMemories: Memory[] = dbMemories.map((memory: any) => ({
          id: memory.id,
          content: memory.content,
          title: memory.title,
          date: new Date(memory.created_at).toISOString().split('T')[0],
          tags: Array.isArray(memory.tags) ? memory.tags : []
        }));

        // Add default memories if none exist
        if (formattedMemories.length === 0) {
          const defaultMemories: Memory[] = [
            {
              id: '1',
              content: 'Favorite coffee shop is Blue Bottle Coffee on Market Street - they make excellent cortados',
              date: '2024-05-30',
              tags: ['coffee', 'location', 'preferences'],
            },
            {
              id: '2',
              content: 'Meeting with design team every Tuesday at 2 PM in conference room B',
              date: '2024-05-29',
              tags: ['meetings', 'schedule', 'work'],
            },
            {
              id: '3',
              content: 'Preferred news sources: TechCrunch, The Verge, Hacker News for tech updates',
              date: '2024-05-28',
              tags: ['news', 'tech', 'preferences'],
            },
          ];
          setMemories(ensureMemoryTags(defaultMemories));
        } else {
          setMemories(ensureMemoryTags(formattedMemories));
        }
      } catch (err) {
        console.error('Error loading memories:', err);
        setError('Failed to load memories');
      } finally {
        setLoading(false);
      }
    };

    loadMemories();
  }, [user?.id]);

  const handleAddMemory = async () => {
    if (!user?.id || !newMemory.content.trim()) {
      Alert.alert('Error', 'Please enter memory content');
      return;
    }

    try {
      setSaving(true);
      
      const memoryData = {
        title: newMemory.title.trim() || null,
        content: newMemory.content.trim(),
        memory_type: 'user_created',
        importance_score: 5,
        decay_factor: 1.0,
        auto_committed: false,
        tags: newMemory.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
        last_accessed: new Date().toISOString()
      };

      const savedMemory = await DatabaseService.createMemory(user.id, memoryData);
      
      // Add to local state
      const formattedMemory: Memory = {
        id: savedMemory.id,
        content: savedMemory.content,
        title: savedMemory.title,
        date: new Date(savedMemory.created_at).toISOString().split('T')[0],
        tags: Array.isArray(savedMemory.tags) ? savedMemory.tags : []
      };

      setMemories(prev => ensureMemoryTags([formattedMemory, ...prev]));
      
      // Reset form
      setNewMemory({ title: '', content: '', tags: '' });
      setShowAddModal(false);
      
      Alert.alert('Success', 'Memory saved successfully');
    } catch (err) {
      console.error('Error saving memory:', err);
      Alert.alert('Error', 'Failed to save memory');
    } finally {
      setSaving(false);
    }
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const groupMemoriesByDate = (memories: Memory[]) => {
    const grouped: { [key: string]: Memory[] } = {};
    
    memories.forEach(memory => {
      const date = formatDate(memory.date);
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(memory);
    });
    
    return grouped;
  };

  const groupedMemories = groupMemoriesByDate(memories);
  const sortedDates = Object.keys(groupedMemories).sort((a, b) => 
    new Date(groupedMemories[b][0].date).getTime() - new Date(groupedMemories[a][0].date).getTime()
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Loading memories...</Text>
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
          {/* <Text style={styles.title}>Memories</Text> */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShowAddModal(true)}
            activeOpacity={0.7}
          >
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsTitle}>How to Add Memories</Text>
          <Text style={styles.instructionsText}>
            Add a memory by telling your assistant e.g.{'\n'}
            "Remember these news sources for future reference."
            {'\n\n'}
            Or use the + button to add a memory manually.  Use tags to help the assistant retrieve the memory.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Memories</Text>
          
          {memories.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="bulb-outline" size={48} color="#666666" />
              <Text style={styles.emptyStateText}>No memories saved yet</Text>
              <Text style={styles.emptyStateSubtext}>
                Tell your assistant something to remember or tap the + button
              </Text>
            </View>
          ) : (
            sortedDates.map((date) => (
              <View key={date} style={styles.dateSection}>
                <Text style={styles.dateHeader}>{date}</Text>
                {groupedMemories[date].map((memory) => (
                  <View key={memory.id} style={styles.memoryCard}>
                    {memory.title && (
                      <Text style={styles.memoryTitle}>{memory.title}</Text>
                    )}
                    <View style={styles.memoryContent}>
                      <Text style={styles.memoryText}>{memory.content}</Text>
                    </View>
                    {memory.tags && Array.isArray(memory.tags) && memory.tags.length > 0 && (
                      <View style={styles.tagsContainer}>
                        {(memory.tags || []).map((tag, index) => (
                          <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            ))
          )}
        </View>

        {/* Add Memory Modal */}
        <Modal
          visible={showAddModal}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setShowAddModal(false)}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => setShowAddModal(false)}
                style={styles.modalCloseButton}
              >
                <Text style={styles.modalCloseText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Add Memory</Text>
              <TouchableOpacity
                onPress={handleAddMemory}
                style={[styles.modalSaveButton, saving && styles.modalSaveButtonDisabled]}
                disabled={saving}
              >
                {saving ? (
                  <ActivityIndicator size="small" color="#FFFFFF" />
                ) : (
                  <Text style={styles.modalSaveText}>Save</Text>
                )}
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalContent}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Title (Optional)</Text>
                <TextInput
                  style={styles.textInput}
                  value={newMemory.title}
                  onChangeText={(text) => setNewMemory(prev => ({ ...prev, title: text }))}
                  placeholder="Enter a title for this memory"
                  placeholderTextColor="#666666"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Content *</Text>
                <TextInput
                  style={[styles.textInput, styles.textArea]}
                  value={newMemory.content}
                  onChangeText={(text) => setNewMemory(prev => ({ ...prev, content: text }))}
                  placeholder="What would you like to remember?"
                  placeholderTextColor="#666666"
                  multiline
                  numberOfLines={4}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Tags (Optional)</Text>
                <TextInput
                  style={styles.textInput}
                  value={newMemory.tags}
                  onChangeText={(text) => setNewMemory(prev => ({ ...prev, tags: text }))}
                  placeholder="Separate tags with commas"
                  placeholderTextColor="#666666"
                />
              </View>
            </ScrollView>
          </SafeAreaView>
        </Modal>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
  dateSection: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A90E2',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  memoryCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  memoryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  memoryContent: {
    marginBottom: 12,
  },
  memoryText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
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
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  modalCloseButton: {
    padding: 8,
  },
  modalCloseText: {
    color: '#4A90E2',
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  modalSaveButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  modalSaveButtonDisabled: {
    opacity: 0.5,
  },
  modalSaveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#3A3A3A',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
}); 