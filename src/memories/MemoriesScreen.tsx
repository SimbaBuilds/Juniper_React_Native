import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { TagSelector } from './components/TagSelector';
import { MAX_MEMORY_TAGS } from './constants/tags';

interface Memory {
  id: string;
  content: string;
  date: string;
  tags: any[]; // Array of tag objects with id and name
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
    tags: [] as any[]
  });
  const [saving, setSaving] = useState(false);
  const [selectedFilterTags, setSelectedFilterTags] = useState<any[]>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Helper function to ensure memories have proper tags arrays
  const ensureMemoryTags = (memories: any[]): Memory[] => {
    return memories.map(memory => ({
      ...memory,
      tags: Array.isArray(memory.tags) ? memory.tags : []
    }));
  };

  // Load memories from database
  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Load memories
        const dbMemories = await DatabaseService.getMemories(user.id);
        
        // Convert database memories to UI format with tag objects
        const formattedMemories: Memory[] = dbMemories.map((memory: any) => {
          // Collect tags from tag_1 through tag_5 columns
          const tags = [
            memory.tag_1,
            memory.tag_2, 
            memory.tag_3,
            memory.tag_4,
            memory.tag_5
          ].filter(Boolean); // Remove null/undefined tags
          
          return {
            id: memory.id,
            content: memory.content,
            title: memory.title,
            date: new Date(memory.created_at).toISOString().split('T')[0],
            tags: tags
          };
        });

        // Add default memories if none exist
        if (formattedMemories.length === 0) {
          const defaultMemories: Memory[] = [
            {
              id: '1',
              content: 'Favorite coffee shop is Blue Bottle Coffee on Market Street - they make excellent cortados',
              date: '2024-05-30',
              tags: [],
            },
            {
              id: '2',
              content: 'Meeting with design team every Tuesday at 2 PM in conference room B',
              date: '2024-05-29',
              tags: [],
            },
            {
              id: '3',
              content: 'Preferred news sources: TechCrunch, The Verge, Hacker News for tech updates',
              date: '2024-05-28',
              tags: [],
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

    loadData();
  }, [user?.id]);

  const handleAddMemory = async () => {
    if (!user?.id || !newMemory.content.trim()) {
      Alert.alert('Error', 'Please enter memory content');
      return;
    }

    if (newMemory.tags.length > MAX_MEMORY_TAGS) {
      Alert.alert('Error', `You can only select up to ${MAX_MEMORY_TAGS} tags per memory.`);
      return;
    }

    try {
      setSaving(true);
      
      // Extract tag IDs from tag objects
      const tagIds = newMemory.tags.map(tag => tag.id);
      
      const memoryData = {
        title: newMemory.title.trim() || null,
        content: newMemory.content.trim(),
        memory_type: 'user_created',
        importance_score: 5,
        decay_factor: 1.0,
        auto_committed: false,
        tags: tagIds,
        last_accessed: new Date().toISOString()
      };

      const savedMemory = await DatabaseService.createMemory(user.id, memoryData);
      
      // Get full tag details for UI display
      const memoryTags = await DatabaseService.getMemoryTags(savedMemory.id);
      
      // Add to local state
      const formattedMemory: Memory = {
        id: savedMemory.id,
        content: savedMemory.content,
        title: savedMemory.title,
        date: new Date(savedMemory.created_at).toISOString().split('T')[0],
        tags: memoryTags
      };

      setMemories(prev => ensureMemoryTags([formattedMemory, ...prev]));
      
      // Reset form
      setNewMemory({ title: '', content: '', tags: [] });
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

  // Filter memories by selected tags (AND logic - memory must have all selected tags)
  const filteredMemories = selectedFilterTags.length === 0 
    ? memories 
    : memories.filter(memory => 
        selectedFilterTags.every(filterTag => 
          memory.tags && memory.tags.some(tag => tag.id === filterTag.id)
        )
      );

  // Get all unique tags from memories for filter options
  const getAllTagsFromMemories = () => {
    const tagMap = new Map<string, any>();
    memories.forEach(memory => {
      if (memory.tags) {
        memory.tags.forEach(tag => tagMap.set(tag.id, tag));
      }
    });
    return Array.from(tagMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  };

  const groupedMemories = groupMemoriesByDate(filteredMemories);
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
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => setShowAddModal(true)}
            activeOpacity={0.7}
          >
            <Ionicons name="add" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsText}>
            Add a memory by telling your assistant e.g.{'\n'}
            "Remember these news sources for future reference."
            {'\n\n'}
            Or use the + button above.  Adding tags helps the assistant retrieve the memory better.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.memoriesHeader}>
            <Text style={styles.sectionTitle}>Your Memories</Text>
            <View style={styles.memoriesActions}>
              {selectedFilterTags.length > 0 && (
                <Text style={styles.filterStatus}>
                  Showing {filteredMemories.length} of {memories.length} memories
                </Text>
              )}
              <TouchableOpacity
                style={styles.filterButton}
                onPress={() => setShowFilterModal(true)}
                activeOpacity={0.7}
              >
                <Ionicons name="funnel" size={18} color="#4A90E2" />
                <Text style={styles.filterButtonText}>
                  Filter {selectedFilterTags.length > 0 ? `(${selectedFilterTags.length})` : ''}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {filteredMemories.length === 0 && memories.length > 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="filter" size={48} color="#666666" />
              <Text style={styles.emptyStateText}>No memories match your filters</Text>
              <Text style={styles.emptyStateSubtext}>
                Try removing some tags or clear all filters
              </Text>
            </View>
          ) : memories.length === 0 ? (
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
                          <View key={tag.id || index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag.name || tag}</Text>
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

        {/* Filter Modal */}
        <Modal
          visible={showFilterModal}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setShowFilterModal(false)}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setShowFilterModal(false)}>
                <Text style={styles.modalCloseText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Filter by Tags</Text>
              <TouchableOpacity 
                onPress={() => {
                  setSelectedFilterTags([]);
                  setShowFilterModal(false);
                }}
              >
                <Text style={styles.modalCloseText}>Clear All</Text>
              </TouchableOpacity>
            </View>
            
            <ScrollView style={styles.modalContent}>
              <TagSelector
                selectedTags={selectedFilterTags}
                userId={user!.id}
                onTagsChange={setSelectedFilterTags}
                onAddUserTag={async (tag) => {
                  try {
                    // Tag is now already created in the database
                    console.log('Tag added:', tag);
                  } catch (err) {
                    console.error('Error adding user tag:', err);
                    Alert.alert('Error', 'Failed to add tag');
                  }
                }}
              />
              
              {getAllTagsFromMemories().length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Tags in Your Memories</Text>
                  <View style={styles.tagsContainer}>
                    {getAllTagsFromMemories().map((tag) => (
                      <TouchableOpacity
                        key={tag.id}
                        style={[
                          styles.filterTag,
                          selectedFilterTags.some(t => t.id === tag.id) && styles.filterTagSelected
                        ]}
                        onPress={() => {
                          if (selectedFilterTags.some(t => t.id === tag.id)) {
                            setSelectedFilterTags(prev => prev.filter(t => t.id !== tag.id));
                          } else {
                            setSelectedFilterTags(prev => [...prev, tag]);
                          }
                        }}
                      >
                        <Text
                          style={[
                            styles.filterTagText,
                            selectedFilterTags.some(t => t.id === tag.id) && styles.filterTagTextSelected
                          ]}
                        >
                          {tag.name}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              )}
            </ScrollView>
          </SafeAreaView>
        </Modal>

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
                style={[
                  styles.modalSaveButton,
                  saving && styles.modalSaveButtonDisabled
                ]}
                disabled={saving || !newMemory.content.trim()}
              >
                <Text style={[
                  styles.modalSaveText,
                  (!newMemory.content.trim() || saving) && styles.modalSaveTextDisabled
                ]}>
                  {saving ? 'Saving...' : 'Save'}
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalContent}>
              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Title (Optional)</Text>
                <TextInput
                  style={styles.titleInput}
                  placeholder="Add a title..."
                  value={newMemory.title}
                  onChangeText={(text) => setNewMemory(prev => ({ ...prev, title: text }))}
                  editable={!saving}
                  returnKeyType="next"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Memory Content *</Text>
                <TextInput
                  style={styles.contentInput}
                  placeholder="What would you like to remember?"
                  value={newMemory.content}
                  onChangeText={(text) => setNewMemory(prev => ({ ...prev, content: text }))}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  editable={!saving}
                />
              </View>

              <TagSelector
                selectedTags={newMemory.tags}
                userId={user!.id}
                onTagsChange={(tags) => setNewMemory(prev => ({ ...prev, tags }))}
                onAddUserTag={async (tag) => {
                  try {
                    // Tag is now already created in the database
                    console.log('Tag added:', tag);
                  } catch (err) {
                    console.error('Error adding user tag:', err);
                    Alert.alert('Error', 'Failed to add tag');
                  }
                }}
                disabled={saving}
              />
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
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  instructionsSection: {
    margin: 16,
    padding: 16,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#4A90E2',
  },
  instructionsText: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
  },
  section: {
    margin: 16,
  },
  memoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  memoriesActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  filterStatus: {
    fontSize: 12,
    color: '#666666',
    fontStyle: 'italic',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
  },
  filterButtonText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginTop: 12,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
    marginTop: 4,
    paddingHorizontal: 20,
  },
  dateSection: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  memoryCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  memoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  memoryContent: {
    marginBottom: 12,
  },
  memoryText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#FFFFFF',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#E53E3E',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  modalCloseButton: {
    padding: 4,
  },
  modalCloseText: {
    color: '#4A90E2',
    fontSize: 16,
  },
  modalSaveButton: {
    padding: 4,
  },
  modalSaveButtonDisabled: {
    opacity: 0.5,
  },
  modalSaveText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  modalSaveTextDisabled: {
    opacity: 0.5,
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
  },
  contentInput: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    minHeight: 100,
  },
  filterTag: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#4A4A4A',
  },
  filterTagSelected: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
  filterTagText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  filterTagTextSelected: {
    color: '#FFFFFF',
  },
}); 