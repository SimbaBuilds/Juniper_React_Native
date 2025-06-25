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
import { SERVICES, SERVICE_TYPES, MAX_TAG_LENGTH, MAX_MEMORY_TAGS } from '../constants/tags';

interface TagSelectorProps {
  selectedTags: string[];
  userTags: string[];
  onTagsChange: (tags: string[]) => void;
  onAddUserTag?: (tag: string) => void;
  disabled?: boolean;
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  selectedTags,
  userTags,
  onTagsChange,
  onAddUserTag,
  disabled = false
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAddTagInput, setShowAddTagInput] = useState(false);
  const [newTagInput, setNewTagInput] = useState('');
  const [isAddingTag, setIsAddingTag] = useState(false);

  const allAvailableTags = [
    ...SERVICES,
    ...SERVICE_TYPES,
    ...userTags
  ];

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      onTagsChange(selectedTags.filter(t => t !== tag));
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
    
    if (allAvailableTags.includes(trimmedTag)) {
      Alert.alert('Error', 'This tag already exists.');
      return;
    }
    
    try {
      setIsAddingTag(true);
      
      if (onAddUserTag) {
        await onAddUserTag(trimmedTag);
      }
      
      // Also add it to selected tags if under limit
      if (selectedTags.length < MAX_MEMORY_TAGS) {
        onTagsChange([...selectedTags, trimmedTag]);
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

  const renderTagSection = (title: string, tags: string[], sectionKey: string) => (
    <View key={sectionKey} style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.tagGrid}>
        {tags.map((tag) => (
          <TouchableOpacity
            key={tag}
            style={[
              styles.tagButton,
              selectedTags.includes(tag) && styles.selectedTagButton
            ]}
            onPress={() => handleTagToggle(tag)}
          >
            <Text
              style={[
                styles.tagButtonText,
                selectedTags.includes(tag) && styles.selectedTagButtonText
              ]}
            >
              {tag}
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
                  <View key={tag} style={styles.selectedTag}>
                    <Text style={styles.selectedTagText}>{tag}</Text>
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
            {renderTagSection('Services', [...SERVICES], 'services')}
            {renderTagSection('Service Types', [...SERVICE_TYPES], 'types')}
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