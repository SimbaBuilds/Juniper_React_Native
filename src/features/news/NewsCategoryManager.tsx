import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NewsCategory, NewsSource } from '../../features/features';

interface NewsCategoryManagerProps {
  categories: NewsCategory[];
  onCategoriesChange: (categories: NewsCategory[]) => void;
  description?: string;
}

interface NewSourceForm {
  name: string;
  affiliation: string;
  medium: string;
}

export const NewsCategoryManager: React.FC<NewsCategoryManagerProps> = ({
  categories,
  onCategoriesChange,
  description,
}) => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [newSourceForms, setNewSourceForms] = useState<Record<string, NewSourceForm>>({});

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const addCategory = () => {
    if (newCategoryName.trim() && !categories.find(cat => cat.name === newCategoryName.trim())) {
      const newCategory: NewsCategory = {
        id: generateId(),
        name: newCategoryName.trim(),
        sources: [],
      };
      onCategoriesChange([...categories, newCategory]);
      setNewCategoryName('');
    }
  };

  const removeCategory = (categoryId: string) => {
    Alert.alert(
      'Remove Category',
      'Are you sure you want to remove this category and all its sources?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            onCategoriesChange(categories.filter(cat => cat.id !== categoryId));
            if (expandedCategory === categoryId) {
              setExpandedCategory(null);
            }
          },
        },
      ]
    );
  };

  const addSource = (categoryId: string) => {
    const form = newSourceForms[categoryId];
    if (!form?.name.trim()) return;

    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return;

    // Check for duplicate source names within the category
    if (category.sources.find(source => source.name === form.name.trim())) {
      Alert.alert('Duplicate Source', 'A source with this name already exists in this category.');
      return;
    }

    const newSource: NewsSource = {
      id: generateId(),
      name: form.name.trim(),
      affiliation: form.affiliation.trim() || undefined,
      medium: form.medium.trim() || undefined,
    };

    const updatedCategories = categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, sources: [...cat.sources, newSource] }
        : cat
    );

    onCategoriesChange(updatedCategories);
    
    // Clear the form
    setNewSourceForms(prev => ({ ...prev, [categoryId]: { name: '', affiliation: '', medium: '' } }));
  };

  const removeSource = (categoryId: string, sourceId: string) => {
    const updatedCategories = categories.map(cat =>
      cat.id === categoryId
        ? { ...cat, sources: cat.sources.filter(source => source.id !== sourceId) }
        : cat
    );
    onCategoriesChange(updatedCategories);
  };

  const updateSourceForm = (categoryId: string, field: keyof NewSourceForm, value: string) => {
    setNewSourceForms(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId] || { name: '', affiliation: '', medium: '' },
        [field]: value,
      },
    }));
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>News Categories & Sources</Text>
      {description && <Text style={styles.description}>{description}</Text>}

      {/* Add Category Section */}
      <View style={styles.addCategorySection}>
        <Text style={styles.subLabel}>Add Category</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.categoryInput}
            value={newCategoryName}
            onChangeText={setNewCategoryName}
            placeholder="Category name (e.g., Technology, Politics)"
            placeholderTextColor="#666666"
            returnKeyType="done"
            onSubmitEditing={addCategory}
          />
          <TouchableOpacity
            onPress={addCategory}
            style={[styles.addButton, !newCategoryName.trim() && styles.addButtonDisabled]}
            disabled={!newCategoryName.trim()}
          >
            <Ionicons name="add" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Categories List */}
      {categories.length === 0 ? (
        <Text style={styles.emptyText}>No categories added yet</Text>
      ) : (
        categories.map(category => (
          <View key={category.id} style={styles.categoryContainer}>
            <TouchableOpacity
              style={styles.categoryHeader}
              onPress={() => toggleCategory(category.id)}
            >
              <View style={styles.categoryInfo}>
                <Ionicons
                  name={expandedCategory === category.id ? 'chevron-down' : 'chevron-forward'}
                  size={20}
                  color="#FFFFFF"
                />
                <Text style={styles.categoryName}>{category.name}</Text>
                <Text style={styles.sourceCount}>({category.sources.length} sources)</Text>
              </View>
              <TouchableOpacity
                onPress={() => removeCategory(category.id)}
                style={styles.removeButton}
              >
                <Ionicons name="trash-outline" size={18} color="#E74C3C" />
              </TouchableOpacity>
            </TouchableOpacity>

            {expandedCategory === category.id && (
              <View style={styles.sourcesContainer}>
                {/* Add Source Form */}
                <View style={styles.addSourceSection}>
                  <Text style={styles.sourceSubLabel}>Add Source</Text>
                  
                  <TextInput
                    style={styles.sourceInput}
                    value={newSourceForms[category.id]?.name || ''}
                    onChangeText={(value) => updateSourceForm(category.id, 'name', value)}
                    placeholder="Source name (required)"
                    placeholderTextColor="#666666"
                  />
                  
                  <TextInput
                    style={styles.sourceInput}
                    value={newSourceForms[category.id]?.affiliation || ''}
                    onChangeText={(value) => updateSourceForm(category.id, 'affiliation', value)}
                    placeholder="Affiliation (optional)"
                    placeholderTextColor="#666666"
                  />
                  
                  <TextInput
                    style={styles.sourceInput}
                    value={newSourceForms[category.id]?.medium || ''}
                    onChangeText={(value) => updateSourceForm(category.id, 'medium', value)}
                    placeholder="Medium (optional)"
                    placeholderTextColor="#666666"
                  />
                  
                  <TouchableOpacity
                    onPress={() => addSource(category.id)}
                    style={[
                      styles.addSourceButton,
                      !newSourceForms[category.id]?.name?.trim() && styles.addButtonDisabled
                    ]}
                    disabled={!newSourceForms[category.id]?.name?.trim()}
                  >
                    <Ionicons name="add" size={16} color="#FFFFFF" />
                    <Text style={styles.addSourceButtonText}>Add Source</Text>
                  </TouchableOpacity>
                </View>

                {/* Sources List */}
                {category.sources.length === 0 ? (
                  <Text style={styles.noSourcesText}>No sources in this category</Text>
                ) : (
                  category.sources.map(source => (
                    <View key={source.id} style={styles.sourceItem}>
                      <View style={styles.sourceInfo}>
                        <Text style={styles.sourceName}>{source.name}</Text>
                        {source.affiliation && (
                          <Text style={styles.sourceDetail}>Affiliation: {source.affiliation}</Text>
                        )}
                        {source.medium && (
                          <Text style={styles.sourceDetail}>Medium: {source.medium}</Text>
                        )}
                      </View>
                      <TouchableOpacity
                        onPress={() => removeSource(category.id, source.id)}
                        style={styles.removeSourceButton}
                      >
                        <Ionicons name="close-circle" size={20} color="#E74C3C" />
                      </TouchableOpacity>
                    </View>
                  ))
                )}
              </View>
            )}
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#B0B0B0',
    marginBottom: 16,
  },
  subLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  addCategorySection: {
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryInput: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    borderRadius: 6,
    padding: 12,
    color: '#FFFFFF',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 6,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#666666',
  },
  emptyText: {
    color: '#666666',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  },
  categoryContainer: {
    marginBottom: 8,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  categoryName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  sourceCount: {
    color: '#B0B0B0',
    fontSize: 14,
    marginLeft: 8,
  },
  removeButton: {
    padding: 4,
  },
  sourcesContainer: {
    backgroundColor: '#1A1A1A',
    padding: 12,
  },
  addSourceSection: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  sourceSubLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#B0B0B0',
    marginBottom: 8,
  },
  sourceInput: {
    backgroundColor: '#2A2A2A',
    borderRadius: 6,
    padding: 10,
    color: '#FFFFFF',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#3A3A3A',
    marginBottom: 8,
  },
  addSourceButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addSourceButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  noSourcesText: {
    color: '#666666',
    fontSize: 12,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  sourceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#2A2A2A',
    padding: 10,
    borderRadius: 6,
    marginBottom: 6,
  },
  sourceInfo: {
    flex: 1,
  },
  sourceName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  sourceDetail: {
    color: '#B0B0B0',
    fontSize: 12,
    marginTop: 2,
  },
  removeSourceButton: {
    marginLeft: 8,
    padding: 2,
  },
}); 