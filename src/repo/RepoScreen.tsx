import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, ActivityIndicator, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import { TagSelector } from './components/TagSelector';
import { MAX_MEMORY_TAGS } from './constants/tags';

interface DisplayResource {
  id: string;
  content: string;
  title?: string;
  instructions?: string;
  type: string;
  relevance_score: number;
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
    instructions: '',
    type: 'memory',
    tags: [] as any[]
  });
  const [showTypeSelector, setShowTypeSelector] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedFilterTags, setSelectedFilterTags] = useState<any[]>([]);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [expandedResources, setExpandedResources] = useState<Set<string>>(new Set());

  // Helper function to ensure resources have proper tags arrays
  const ensureResourceTags = (resources: any[]): DisplayResource[] => {
    return resources.map(resource => ({
      ...resource,
      tags: Array.isArray(resource.tags) ? resource.tags : []
    }));
  };

  // Load resources from database
  const loadResourcesFromDatabase = async () => {
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
          instructions: resource.instructions,
          type: resource.type || 'memory',
          relevance_score: resource.relevance_score || 100,
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
            relevance_score: 100,
            last_accessed: '2024-05-30',
            created_at: '2024-05-30',
            tags: [],
          },
          {
            id: '2',
            content: 'Meeting with design team every Tuesday at 2 PM in conference room B',
            type: 'notes',
            relevance_score: 100,
            last_accessed: '2024-05-29',
            created_at: '2024-05-29',
            tags: [],
          },
          {
            id: '3',
            content: 'Preferred news sources: TechCrunch, The Verge, Hacker News for tech updates',
            type: 'memory',
            relevance_score: 100,
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

  // Initial load
  useEffect(() => {
    loadResourcesFromDatabase();
  }, [user?.id]);

  // Refresh when screen is focused
  useFocusEffect(
    React.useCallback(() => {
      loadResourcesFromDatabase();
    }, [user?.id])
  );

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
        instructions: newResource.instructions.trim() || null,
        type: newResource.type,
        relevance_score: 100,
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
        instructions: savedResource.instructions,
        type: savedResource.type,
        relevance_score: savedResource.relevance_score || 100,
        last_accessed: savedResource.last_accessed,
        created_at: savedResource.created_at,
        tags: resourceTags
      };

      setResources(prev => ensureResourceTags([formattedResource, ...prev]));
      
      // Reset form
      setNewResource({ title: '', content: '', instructions: '', type: 'memory', tags: [] });
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

  const toggleResourceExpansion = (resourceId: string) => {
    const newExpanded = new Set(expandedResources);
    if (newExpanded.has(resourceId)) {
      newExpanded.delete(resourceId);
    } else {
      newExpanded.add(resourceId);
    }
    setExpandedResources(newExpanded);
  };

  // Separate expiring and regular resources
  const regularResources = resources.filter(resource => resource.relevance_score >= 10);
  const expiringResources = resources.filter(resource => resource.relevance_score < 10);

  // Filter resources by selected tags (AND logic - resource must have all selected tags)
  const filteredRegularResources = selectedFilterTags.length === 0 
    ? regularResources 
    : regularResources.filter(resource => 
        selectedFilterTags.every(filterTag => 
          resource.tags && resource.tags.some(tag => tag.id === filterTag.id)
        )
      );

  const filteredExpiringResources = selectedFilterTags.length === 0 
    ? expiringResources 
    : expiringResources.filter(resource => 
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

  const deleteResource = async (resourceId: string) => {
    Alert.alert(
      'Delete Resource',
      'Are you sure you want to delete this resource? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await DatabaseService.deleteResource(resourceId);
              setResources(prev => prev.filter(resource => resource.id !== resourceId));
              Alert.alert('Success', 'Resource deleted successfully');
            } catch (err) {
              console.error('Error deleting resource:', err);
              Alert.alert('Error', 'Failed to delete resource');
            }
          },
        },
      ]
    );
  };

  const resetRelevanceScore = async (resourceId: string) => {
    try {
      await DatabaseService.updateResource(resourceId, { relevance_score: 100 });
      setResources(prev => prev.map(resource => 
        resource.id === resourceId 
          ? { ...resource, relevance_score: 100 }
          : resource
      ));
      Alert.alert('Success', 'Relevance score reset to 100%');
    } catch (err) {
      console.error('Error resetting relevance score:', err);
      Alert.alert('Error', 'Failed to reset relevance score');
    }
  };

  const groupedResources = groupResourcesByType(filteredRegularResources);
  const groupedExpiringResources = groupResourcesByType(filteredExpiringResources);

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
          <Text style={styles.instructionsSectionText}>
            Add resources by telling your assistant e.g.{'\n'}
            "Save this document for future reference."
            {'\n\n'}
            Or use the + button above. Adding tags helps organize and retrieve resources better.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.repoHeader}>
            <Text style={styles.sectionTitle}>Juniper's Resource Repository</Text>
            <View style={styles.repoActions}>
              {selectedFilterTags.length > 0 && (
                <Text style={styles.filterStatus}>
                  Showing {filteredRegularResources.length + filteredExpiringResources.length} of {resources.length} resources
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
          
          {/* Expiring Resources Section */}
          {filteredExpiringResources.length > 0 && (
            <View style={styles.expiringSection}>
              <View style={styles.expiringSectionHeader}>
                <Ionicons name="warning" size={20} color="#FF6B35" />
                <Text style={styles.expiringSectionTitle}>
                  Expiring Resources ({filteredExpiringResources.length})
                </Text>
              </View>
              <Text style={styles.expiringSectionSubtitle}>
                These resources have low relevance scores and may be outdated
              </Text>
              
              {filteredExpiringResources.map((resource) => {
                const isExpanded = expandedResources.has(resource.id);
                const shouldTruncate = resource.content.length > 500;
                const displayContent = shouldTruncate && !isExpanded 
                  ? resource.content.substring(0, 500) + '...' 
                  : resource.content;

                return (
                  <View key={resource.id} style={styles.expiringResourceCard}>
                    <View style={styles.resourceHeader}>
                      <View style={styles.resourceTypeIndicator}>
                        <Ionicons 
                          name={RESOURCE_ICONS[resource.type as keyof typeof RESOURCE_ICONS] as any} 
                          size={16} 
                          color="#FF6B35" 
                        />
                      </View>
                      {resource.title && (
                        <Text style={styles.resourceTitle}>{resource.title}</Text>
                      )}
                      <Text style={styles.relevanceScore}>
                        {Math.round(resource.relevance_score)}%
                      </Text>
                    </View>
                    
                    {resource.instructions && (
                      <View style={styles.instructionsContainer}>
                        <Text style={styles.instructionsLabel}>Instructions:</Text>
                        <Text style={styles.instructionsText}>{resource.instructions}</Text>
                      </View>
                    )}
                    
                    <TouchableOpacity
                      style={styles.resourceContent}
                      onPress={() => shouldTruncate && toggleResourceExpansion(resource.id)}
                      activeOpacity={shouldTruncate ? 0.7 : 1}
                    >
                      {isExpanded ? (
                        <ScrollView
                          style={styles.expandedContentScroll}
                          showsVerticalScrollIndicator={true}
                          nestedScrollEnabled={true}
                          contentContainerStyle={styles.expandedContentContainer}
                        >
                          <Text style={styles.resourceText}>{resource.content}</Text>
                        </ScrollView>
                      ) : (
                        <Text style={styles.resourceText}>{displayContent}</Text>
                      )}
                      
                      {shouldTruncate && (
                        <View style={styles.expandToggle}>
                          <Text style={styles.expandToggleText}>
                            {isExpanded ? 'Show less' : 'Show more'}
                          </Text>
                          <Ionicons
                            name={isExpanded ? 'chevron-up' : 'chevron-down'}
                            size={16}
                            color="#4A90E2"
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                    
                    <View style={styles.expiringResourceActions}>
                      <TouchableOpacity
                        style={styles.resetScoreButton}
                        onPress={() => resetRelevanceScore(resource.id)}
                        activeOpacity={0.7}
                      >
                        <Ionicons name="refresh" size={16} color="#4A90E2" />
                        <Text style={styles.resetScoreButtonText}>Reset Score</Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity
                        style={styles.deleteResourceButton}
                        onPress={() => deleteResource(resource.id)}
                        activeOpacity={0.7}
                      >
                        <Ionicons name="trash-outline" size={16} color="#FF6B35" />
                        <Text style={styles.deleteResourceButtonText}>Delete</Text>
                      </TouchableOpacity>
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
                );
              })}
            </View>
          )}

          {filteredRegularResources.length === 0 && filteredExpiringResources.length === 0 && resources.length > 0 ? (
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
              
              // Debug logging for memory category
              if (resourceType.value === 'memory') {
                console.log('Memory resources:', categoryResources);
                console.log('Display resources for memory:', displayResources);
                console.log('Memory category expanded:', isExpanded);
              }
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
                  
                  {displayResources.map((resource) => {
                    const isExpanded = expandedResources.has(resource.id);
                    const shouldTruncate = resource.content.length > 500;
                    const displayContent = shouldTruncate && !isExpanded 
                      ? resource.content.substring(0, 500) + '...' 
                      : resource.content;

                    return (
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
                        
                        {resource.instructions && (
                          <View style={styles.instructionsContainer}>
                            <Text style={styles.instructionsLabel}>Instructions:</Text>
                            <Text style={styles.instructionsText}>{resource.instructions}</Text>
                          </View>
                        )}
                        
                        <TouchableOpacity
                          style={styles.resourceContent}
                          onPress={() => shouldTruncate && toggleResourceExpansion(resource.id)}
                          activeOpacity={shouldTruncate ? 0.7 : 1}
                        >
                          {isExpanded ? (
                            <ScrollView
                              style={styles.expandedContentScroll}
                              showsVerticalScrollIndicator={true}
                              nestedScrollEnabled={true}
                              contentContainerStyle={styles.expandedContentContainer}
                            >
                              <Text style={styles.resourceText}>{resource.content}</Text>
                            </ScrollView>
                          ) : (
                            <Text style={styles.resourceText}>{displayContent}</Text>
                          )}
                          
                          {shouldTruncate && (
                            <View style={styles.expandToggle}>
                              <Text style={styles.expandToggleText}>
                                {isExpanded ? 'Show less' : 'Show more'}
                              </Text>
                              <Ionicons
                                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                                size={16}
                                color="#4A90E2"
                              />
                            </View>
                          )}
                        </TouchableOpacity>
                        
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
                    );
                  })}
                  
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
                  onChangeText={(text) => {
                    if (text.length <= 2000) {
                      setNewResource(prev => ({ ...prev, content: text }));
                    }
                  }}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  editable={!saving}
                  maxLength={2000}
                />
                <Text style={styles.characterCount}>
                  {newResource.content.length}/2000 characters
                </Text>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.inputLabel}>Instructions (Optional)</Text>
                <TextInput
                  style={styles.titleInput}
                  placeholder="e.g. read this when..."
                  value={newResource.instructions}
                  onChangeText={(text) => {
                    if (text.length <= 100) {
                      setNewResource(prev => ({ ...prev, instructions: text }));
                    }
                  }}
                  editable={!saving}
                  returnKeyType="next"
                  maxLength={100}
                />
                <Text style={styles.characterCount}>
                  {newResource.instructions.length}/100 characters
                </Text>
              </View>

              <TagSelector
                selectedTags={newResource.tags}
                userId={user!.id}
                onTagsChange={(tags) => setNewResource(prev => ({ ...prev, tags }))}
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
  instructionsSectionText: {
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
  characterCount: {
    fontSize: 12,
    color: '#666666',
    textAlign: 'right',
    marginTop: 4,
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
  instructionsContainer: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#2A2A2A',
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: '#4A90E2',
  },
  instructionsLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 4,
  },
  instructionsText: {
    fontSize: 13,
    color: '#B0B0B0',
    fontStyle: 'italic',
  },
  expandedContentScroll: {
    maxHeight: 300,
    backgroundColor: '#1A1A1A',
    borderRadius: 6,
    padding: 8,
  },
  expandedContentContainer: {
    paddingBottom: 8,
  },
  expandToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  expandToggleText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
    marginRight: 4,
  },
  expiringSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#2A1A1A',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FF6B35',
  },
  expiringSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  expiringSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF6B35',
    marginLeft: 8,
  },
  expiringSectionSubtitle: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 16,
  },
  expiringResourceCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FF6B35',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  relevanceScore: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF6B35',
    marginLeft: 'auto',
  },
  expiringResourceActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#333333',
  },
  resetScoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  resetScoreButtonText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
    marginLeft: 4,
  },
  deleteResourceButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE5E0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  deleteResourceButtonText: {
    fontSize: 14,
    color: '#FF6B35',
    fontWeight: '500',
    marginLeft: 4,
  },
}); 