import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  Alert,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MAX_TAG_LENGTH, MAX_MEMORY_TAGS } from '../constants/tags';
import { DatabaseService } from '../../supabase/supabase';

interface TagSelectorProps {
  selectedTags: any[]; // Array of tag objects
  userId: string;
  onTagsChange: (tags: any[]) => void;
  onAddUserTag?: (tag: any) => void;
  disabled?: boolean;
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  selectedTags,
  userId,
  onTagsChange,
  onAddUserTag,
  disabled = false
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAddTagInput, setShowAddTagInput] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');
  const [isAddingTag, setIsAddingTag] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Tag state from database
  const [serviceTags, setServiceTags] = useState<any[]>([]);
  const [serviceTypeTags, setServiceTypeTags] = useState<any[]>([]);
  const [userTags, setUserTags] = useState<any[]>([]);

  // Load tags from database
  useEffect(() => {
    const loadTags = async () => {
      if (!isModalVisible || !userId) return;
      
      try {
        setLoading(true);
        
        // Initialize service tags if needed
        await DatabaseService.initializeServiceTags();
        
        // Load all tag types
        const [services, serviceTypes, userCreated] = await Promise.all([
          DatabaseService.getTags(undefined, ['service']),
          DatabaseService.getTags(undefined, ['service_type']),
          DatabaseService.getUserTags(userId)
        ]);
        
        setServiceTags(services);
        setServiceTypeTags(serviceTypes);
        setUserTags(userCreated);
      } catch (error) {
        console.error('Error loading tags:', error);
        Alert.alert('Error', 'Failed to load tags');
      } finally {
        setLoading(false);
      }
    };

    loadTags();
  }, [isModalVisible, userId]);

  const handleTagToggle = (tag: any) => {
    const isSelected = selectedTags.some(t => t.id === tag.id);
    
    if (isSelected) {
      onTagsChange(selectedTags.filter(t => t.id !== tag.id));
    } else {
      if (selectedTags.length >= MAX_MEMORY_TAGS) {
        Alert.alert('Tag Limit', `You can only select up to ${MAX_MEMORY_TAGS} tags per memory.`);
        return;
      }
      onTagsChange([...selectedTags, tag]);
    }
  };

  const handleAddNewTag = async () => {
    const trimmedTag = newTagInput.trim();
    
    if (!trimmedTag) {
      Alert.alert('Error', 'Please enter a tag name.');
      return;
    }
    
    if (trimmedTag.length > MAX_TAG_LENGTH) {
      Alert.alert('Error', `Tag must be ${MAX_TAG_LENGTH} characters or less.`);
      return;
    }
    
    try {
      setIsAddingTag(true);
      
      const newTag = await DatabaseService.addUserTag(userId, trimmedTag);
      
      // Update local user tags
      setUserTags(prev => [...prev, newTag]);
      
      // Call parent callback
      if (onAddUserTag) {
        await onAddUserTag(newTag);
      }
      
      // Also add it to selected tags if under limit
      if (selectedTags.length < MAX_MEMORY_TAGS) {
        onTagsChange([...selectedTags, newTag]);
      }
      
      setNewTagInput('');
      setShowAddTagInput(false);
      
      // Show success feedback
      Alert.alert('Success', `Tag "${trimmedTag}" added successfully!`);
    } catch (error) {
      console.error('Error adding tag:', error);
      Alert.alert('Error', 'Failed to add tag. Please try again.');
    } finally {
      setIsAddingTag(false);
    }
  };

  const renderTagSection = (title: string, tags: any[], sectionKey: string) => (
    <View key={sectionKey} style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.tagGrid}>
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag.id}
            style={[
              styles.tagButton,
              selectedTags.some(t => t.id === tag.id) && styles.selectedTagButton
            ]}
            onPress={() => handleTagToggle(tag)}
          >
            <Text
              style={[
                styles.tagButtonText,
                selectedTags.some(t => t.id === tag.id) && styles.selectedTagButtonText
              ]}
            >
              {tag.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tags ({selectedTags.length}/{MAX_MEMORY_TAGS})</Text>
      
      <TouchableOpacity
        style={[styles.selector, disabled && styles.disabledSelector]}
        onPress={() => !disabled && setIsModalVisible(true)}
        disabled={disabled}
      >
        <View style={styles.selectedTagsContainer}>
          {selectedTags.length === 0 ? (
            <Text style={styles.placeholder}>Select tags...</Text>
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.selectedTagsRow}>
                {selectedTags.map((tag) => (
                  <View key={tag.id} style={styles.selectedTag}>
                    <Text style={styles.selectedTagText}>{tag.name}</Text>
                    <TouchableOpacity
                      onPress={() => handleTagToggle(tag)}
                      style={styles.removeTagButton}
                    >
                      <Ionicons name="close" size={14} color="#666" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
        <Ionicons name="chevron-down" size={20} color="#666" />
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Select Tags</Text>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalContent} contentContainerStyle={styles.modalScrollContent}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading tags...</Text>
              </View>
            ) : (
              <>
                {renderTagSection('Services', serviceTags, 'services')}
                {renderTagSection('Service Types', serviceTypeTags, 'types')}
                {userTags.length > 0 && renderTagSection('My Tags', userTags, 'user')}

                <View style={styles.addTagSection}>
                  <TouchableOpacity
                    style={styles.addTagButton}
                    onPress={() => {
                      console.log('Add New Tag button pressed, current state:', showAddTagInput);
                      setShowAddTagInput(!showAddTagInput);
                    }}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="add" size={20} color="#4A90E2" />
                    <Text style={styles.addTagButtonText}>
                      {showAddTagInput ? 'Cancel' : 'Add New Tag'}
                    </Text>
                  </TouchableOpacity>

                  {showAddTagInput && (
                    <View style={styles.addTagInputContainer}>
                      <TextInput
                        style={styles.addTagInput}
                        placeholder="Enter new tag..."
                        value={newTagInput}
                        onChangeText={setNewTagInput}
                        maxLength={MAX_TAG_LENGTH}
                        returnKeyType="done"
                        onSubmitEditing={handleAddNewTag}
                        editable={!isAddingTag}
                        autoFocus
                      />
                      <TouchableOpacity
                        style={[
                          styles.addTagSubmitButton,
                          isAddingTag && styles.addTagSubmitButtonDisabled
                        ]}
                        onPress={handleAddNewTag}
                        disabled={isAddingTag}
                      >
                        <Text style={styles.addTagSubmitText}>
                          {isAddingTag ? 'Adding...' : 'Add'}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </>
            )}
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  selector: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  disabledSelector: {
    backgroundColor: '#F5F5F5',
    opacity: 0.6,
  },
  selectedTagsContainer: {
    flex: 1,
  },
  placeholder: {
    color: '#999999',
    fontSize: 16,
  },
  selectedTagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedTag: {
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedTagText: {
    color: '#1976D2',
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
  removeTagButton: {
    padding: 2,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  cancelText: {
    color: '#666666',
    fontSize: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  doneText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  modalScrollContent: {
    paddingBottom: 50,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  loadingText: {
    fontSize: 16,
    color: '#666666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 12,
  },
  tagGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tagButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8,
  },
  selectedTagButton: {
    backgroundColor: '#4A90E2',
  },
  tagButtonText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
  },
  selectedTagButtonText: {
    color: '#FFFFFF',
  },
  addTagSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  addTagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  addTagButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  addTagInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  addTagInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginRight: 12,
  },
  addTagSubmitButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  addTagSubmitButtonDisabled: {
    backgroundColor: '#CCCCCC',
    opacity: 0.6,
  },
  addTagSubmitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 