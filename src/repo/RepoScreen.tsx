import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { TagSelector } from './components/TagSelector';
import { MAX_MEMORY_TAGS } from './constants/tags';
import { Resource } from '../supabase/tables';

interface DisplayResource {
  id: string;
  content: string;
  title?: string;
  type: string;
  last_accessed: string;
  created_at: string;
  tags: any[]; // Array of tag objects with id and name
}

const RESOURCE_TYPES = [
  { value: 'memory', label: 'Memory' },
  { value: 'samples', label: 'Sample' },
  { value: 'notes', label: 'Note' },
  { value: 'files', label: 'File' },
  { value: 'media', label: 'Media' },
  { value: 'other', label: 'Other' }
];

const RESOURCE_ICONS = {
  memory: 'bulb-outline' as const,
  samples: 'cube-outline' as const,
  notes: 'document-text-outline' as const,
  files: 'folder-outline' as const,
  media: 'image-outline' as const,
  other: 'ellipsis-horizontal-outline' as const
};

export const RepoScreen: React.FC = () => {
  const { user } = useAuth();
  const [resources, setResources] = useState<DisplayResource[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newResource, setNewResource] = useState({
    title: '',
    content: '',
    type: 'memory',
    tags: [] as any[]
  });
  const [showTypeSelector, setShowTypeSelector] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedFilterTags, setSelectedFilterTags] = useState<any[]>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  // Helper function to ensure resources have proper tags arrays
  const ensureResourceTags = (resources: any[]): DisplayResource[] => {
    return resources.map(resource => ({
      ...resource,
      tags: Array.isArray(resource.tags) ? resource.tags : []
    }));
  };

  // Load resources from database
  useEffect(() => {
    const loadData = async () => {
      if (!user?.id) return;
      
      try {
        setLoading(true);
        setError(null);
        
        // Load resources
        const dbResources = await DatabaseService.getResources(user.id);
        
        // Convert database resources to UI format with tag objects
        const formattedResources: DisplayResource[] = dbResources.map((resource: any) => {
          // Collect tags from tag_1 through tag_5 columns
          const tags = [
            resource.tag_1,
            resource.tag_2, 
            resource.tag_3,
            resource.tag_4,
            resource.tag_5
          ].filter(Boolean); // Remove null/undefined tags
          
          return {
            id: resource.id,
            content: resource.content,
            title: resource.title,
            type: resource.type || 'memory',
            last_accessed: resource.last_accessed,
            created_at: resource.created_at,
            tags: tags
          };
        });

        // Add default resources if none exist
        if (formattedResources.length === 0) {
          const defaultResources: DisplayResource[] = [
            {
              id: '1',
              content: 'Favorite coffee shop is Blue Bottle Coffee on Market Street - they make excellent cortados',
              type: 'memory',
              last_accessed: '2024-05-30',
              created_at: '2024-05-30',
              tags: [],
            },
            {
              id: '2',
              content: 'Meeting with design team every Tuesday at 2 PM in conference room B',
              type: 'notes',
              last_accessed: '2024-05-29',
              created_at: '2024-05-29',
              tags: [],
            },
            {
              id: '3',
              content: 'Preferred news sources: TechCrunch, The Verge, Hacker News for tech updates',
              type: 'memory',
              last_accessed: '2024-05-28',
              created_at: '2024-05-28',
              tags: [],
            },
          ];
          setResources(ensureResourceTags(defaultResources));
        } else {
          setResources(ensureResourceTags(formattedResources));
        }
      } catch (err) {
        console.error('Error loading resources:', err);
        setError('Failed to load resources');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user?.id]);

  const handleAddResource = async () => {
    if (!user?.id || !newResource.content.trim()) {
      Alert.alert('Error', 'Please enter resource content');
      return;
    }

    if (newResource.tags.length > MAX_MEMORY_TAGS) {
      Alert.alert('Error', `You can only select up to ${MAX_MEMORY_TAGS} tags per resource.`);
      return;
    }

    try {
      setSaving(true);
      
      // Extract tag IDs from tag objects
      const tagIds = newResource.tags.map(tag => tag.id);
      
      const resourceData = {
        title: newResource.title.trim() || null,
        content: newResource.content.trim(),
        type: newResource.type,
        importance_score: 5,
        decay_factor: 1.0,
        auto_committed: false,
        tags: tagIds,
        last_accessed: new Date().toISOString()
      };

      const savedResource = await DatabaseService.createResource(user.id, resourceData);
      
      // Get full tag details for UI display
      const resourceTags = await DatabaseService.getResourceTags(savedResource.id);
      
      // Add to local state
      const formattedResource: DisplayResource = {
        id: savedResource.id,
        content: savedResource.content,
        title: savedResource.title,
        type: savedResource.type,
        last_accessed: savedResource.last_accessed,
        created_at: savedResource.created_at,
        tags: resourceTags
      };

      setResources(prev => ensureResourceTags([formattedResource, ...prev]));
      
      // Reset form
      setNewResource({ title: '', content: '', type: 'memory', tags: [] });
      setShowAddModal(false);
      
      Alert.alert('Success', 'Resource saved successfully');
    } catch (err) {
      console.error('Error saving resource:', err);
      Alert.alert('Error', 'Failed to save resource');
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

  const groupResourcesByType = (resources: DisplayResource[]) => {
    const grouped: { [key: string]: DisplayResource[] } = {};
    
    // Initialize all categories
    RESOURCE_TYPES.forEach(type => {
      grouped[type.value] = [];
    });
    
    resources.forEach(resource => {
      if (grouped[resource.type]) {
        grouped[resource.type].push(resource);
      } else {
        grouped['other'].push(resource);
      }
    });
    
    // Sort each category by last_accessed (most recent first)
    Object.keys(grouped).forEach(type => {
      grouped[type].sort((a, b) => 
        new Date(b.last_accessed).getTime() - new Date(a.last_accessed).getTime()
      );
    });
    
    return grouped;
  };

  const getRecentResources = (resources: DisplayResource[], limit: number = 5) => {
    return resources.slice(0, limit);
  };

  const getResourcesFromPast30Days = (resources: DisplayResource[]) => {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    return resources.filter(resource => 
      new Date(resource.last_accessed) >= thirtyDaysAgo
    );
  };

  const toggleCategoryExpansion = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  // Filter resources by selected tags (AND logic - resource must have all selected tags)
  const filteredResources = selectedFilterTags.length === 0 
    ? resources 
    : resources.filter(resource => 
        selectedFilterTags.every(filterTag => 
          resource.tags && resource.tags.some(tag => tag.id === filterTag.id)
        )
      );

  // Get all unique tags from resources for filter options
  const getAllTagsFromResources = () => {
    const tagMap = new Map<string, any>();
    resources.forEach(resource => {
      if (resource.tags) {
        resource.tags.forEach(tag => tagMap.set(tag.id, tag));
      }
    });
    return Array.from(tagMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  };

  const groupedResources = groupResourcesByType(filteredResources);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Loading resources...</Text>
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
            Add resources by telling your assistant e.g.{'\n'}
            "Save this document for future reference."
            {'\n\n'}
            Or use the + button above. Adding tags helps organize and retrieve resources better.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.repoHeader}>
            <Text style={styles.sectionTitle}>Your Resource Repository</Text>
            <View style={styles.repoActions}>
              {selectedFilterTags.length > 0 && (
                <Text style={styles.filterStatus}>
                  Showing {filteredResources.length} of {resources.length} resources
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
          
          {filteredResources.length === 0 && resources.length > 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="filter" size={48} color="#666666" />
              <Text style={styles.emptyStateText}>No resources match your filters</Text>
              <Text style={styles.emptyStateSubtext}>
                Try removing some tags or clear all filters
              </Text>
            </View>
          ) : resources.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="folder-outline" size={48} color="#666666" />
              <Text style={styles.emptyStateText}>No resources saved yet</Text>
              <Text style={styles.emptyStateSubtext}>
                Tell your assistant to save something or tap the + button
              </Text>
            </View>
          ) : (
            RESOURCE_TYPES.map((resourceType) => {
              const categoryResources = groupedResources[resourceType.value];
              const isExpanded = expandedCategories.has(resourceType.value);
              const displayResources = isExpanded 
                ? getResourcesFromPast30Days(categoryResources)
                : getRecentResources(categoryResources);
              
              if (categoryResources.length === 0) return null;
              
              return (
                <View key={resourceType.value} style={styles.categorySection}>
                  <TouchableOpacity 
                    style={styles.categoryHeader}
                    onPress={() => toggleCategoryExpansion(resourceType.value)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.categoryTitleContainer}>
                      <Ionicons 
                        name={RESOURCE_ICONS[resourceType.value as keyof typeof RESOURCE_ICONS] as any} 
                        size={20} 
                        color="#4A90E2" 
                      />
                      <Text style={styles.categoryTitle}>{resourceType.label}</Text>
                      <View style={styles.categoryCount}>
                        <Text style={styles.categoryCountText}>{categoryResources.length}</Text>
                      </View>
                    </View>
                    <Ionicons 
                      name={isExpanded ? 'chevron-up' : 'chevron-down'} 
                      size={20} 
                      color="#666666" 
                    />
                  </TouchableOpacity>
                  
                  {displayResources.map((resource) => (
                    <View key={resource.id} style={styles.resourceCard}>
                      <View style={styles.resourceHeader}>
                        <View style={styles.resourceTypeIndicator}>
                          <Ionicons 
                            name={RESOURCE_ICONS[resource.type as keyof typeof RESOURCE_ICONS] as any} 
                            size={16} 
                            color="#4A90E2" 
                          />
                        </View>
                        {resource.title && (
                          <Text style={styles.resourceTitle}>{resource.title}</Text>
                        )}
                      </View>
                      <View style={styles.resourceContent}>
                        <Text style={styles.resourceText}>{resource.content}</Text>
                      </View>
                      <View style={styles.resourceFooter}>
                        <Text style={styles.resourceDate}>
                          Last accessed: {formatDate(resource.last_accessed)}
                        </Text>
                        {resource.tags && Array.isArray(resource.tags) && resource.tags.length > 0 && (
                          <View style={styles.tagsContainer}>
                            {(resource.tags || []).map((tag, index) => (
                              <View key={tag.id || index} style={styles.tag}>
                                <Text style={styles.tagText}>{tag.name || tag}</Text>
                              </View>
                            ))}
                          </View>
                        )}
                      </View>
                    </View>
                  ))}
                  
                  {!isExpanded && categoryResources.length > 5 && (
                    <TouchableOpacity 
                      style={styles.showMoreButton}
                      onPress={() => toggleCategoryExpansion(resourceType.value)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.showMoreText}>
                        Show {categoryResources.length - 5} more from past 30 days
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })
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
              
              {getAllTagsFromResources().length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Tags in Your Resources</Text>
                  <View style={styles.tagsContainer}>
                    {getAllTagsFromResources().map((tag: any) => (
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
              <Text style={styles.modalTitle}>Add Resource</Text>
              <TouchableOpacity
                onPress={handleAddResource}
                style={[
                  styles.modalSaveButton,
                  saving && styles.modalSaveButtonDisabled
                ]}
                disabled={saving || !newResource.content.trim()}
              >
                <Text style={[
                  styles.modalSaveText,
                  (!newResource.content.trim() || saving) && styles.modalSaveTextDisabled
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
                  value={newResource.title}
                  onChangeText={(text) => setNewResource(prev => ({ ...prev, title: text }))}
                  editable={!saving}
                  returnKeyType="next"
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Resource Type *</Text>
                <TouchableOpacity
                  style={styles.pickerContainer}
                  onPress={() => setShowTypeSelector(true)}
                  disabled={saving}
                >
                  <Text style={styles.pickerText}>
                    {RESOURCE_TYPES.find(type => type.value === newResource.type)?.label || 'Select Type'}
                  </Text>
                  <Ionicons name="chevron-down" size={20} color="#666666" />
                </TouchableOpacity>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Resource Content *</Text>
                <TextInput
                  style={styles.contentInput}
                  placeholder="What would you like to save?"
                  value={newResource.content}
                  onChangeText={(text) => setNewResource(prev => ({ ...prev, content: text }))}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  editable={!saving}
                />
              </View>

              <TagSelector
                selectedTags={newResource.tags}
                userId={user!.id}
                onTagsChange={(tags) => setNewResource(prev => ({ ...prev, tags }))}
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

        {/* Resource Type Selector Modal */}
        <Modal
          visible={showTypeSelector}
          animationType="slide"
          presentationStyle="pageSheet"
          onRequestClose={() => setShowTypeSelector(false)}
        >
          <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setShowTypeSelector(false)}>
                <Text style={styles.modalCloseText}>Cancel</Text>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Select Resource Type</Text>
              <TouchableOpacity onPress={() => setShowTypeSelector(false)}>
                <Text style={styles.modalCloseText}>Done</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.typeSelector}>
              {RESOURCE_TYPES.map((type) => (
                <TouchableOpacity
                  key={type.value}
                  style={[
                    styles.typeOption,
                    newResource.type === type.value && styles.typeOptionSelected
                  ]}
                  onPress={() => {
                    setNewResource(prev => ({ ...prev, type: type.value }));
                    setShowTypeSelector(false);
                  }}
                >
                  <Ionicons 
                    name={RESOURCE_ICONS[type.value as keyof typeof RESOURCE_ICONS] as any} 
                    size={24} 
                    color={newResource.type === type.value ? '#FFFFFF' : '#4A90E2'} 
                  />
                  <Text style={[
                    styles.typeOptionText,
                    newResource.type === type.value && styles.typeOptionTextSelected
                  ]}>
                    {type.label}
                  </Text>
                  {newResource.type === type.value && (
                    <Ionicons name="checkmark" size={20} color="#FFFFFF" />
                  )}
                </TouchableOpacity>
              ))}
            </View>
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
  repoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    flexWrap: 'wrap',
  },
  repoActions: {
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
  categorySection: {
    marginBottom: 24,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  categoryCount: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  categoryCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  resourceCard: {
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
  resourceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  resourceTypeIndicator: {
    marginRight: 8,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    flex: 1,
  },
  resourceContent: {
    marginBottom: 12,
  },
  resourceText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  resourceFooter: {
    marginTop: 8,
  },
  resourceDate: {
    fontSize: 12,
    color: '#B0B0B0',
    marginBottom: 8,
  },
  showMoreButton: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  showMoreText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#3A3A3A',
    borderRadius: 8,
    backgroundColor: '#1E1E1E',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  typeSelector: {
    padding: 16,
  },
  typeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#1E1E1E',
  },
  typeOptionSelected: {
    backgroundColor: '#4A90E2',
  },
  typeOptionText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 12,
    flex: 1,
  },
  typeOptionTextSelected: {
    color: '#FFFFFF',
    fontWeight: '600',
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