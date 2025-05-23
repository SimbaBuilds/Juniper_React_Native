import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SettingsArrayInputProps {
  label: string;
  values: string[];
  onValuesChange: (values: string[]) => void;
  placeholder?: string;
  description?: string;
  maxItems?: number;
}

export const SettingsArrayInput: React.FC<SettingsArrayInputProps> = ({
  label,
  values,
  onValuesChange,
  placeholder = 'Enter item...',
  description,
  maxItems = 10,
}) => {
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() && values.length < maxItems && !values.includes(inputValue.trim())) {
      onValuesChange([...values, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeItem = (index: number) => {
    const newValues = values.filter((_, i) => i !== index);
    onValuesChange(newValues);
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity onPress={() => removeItem(index)} style={styles.removeButton}>
        <Ionicons name="close-circle" size={20} color="#E74C3C" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder={placeholder}
          placeholderTextColor="#666666"
          onSubmitEditing={addItem}
          returnKeyType="done"
        />
        <TouchableOpacity 
          onPress={addItem} 
          style={[styles.addButton, (!inputValue.trim() || values.length >= maxItems) && styles.addButtonDisabled]}
          disabled={!inputValue.trim() || values.length >= maxItems}
        >
          <Ionicons name="add" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {values.length > 0 && (
        <FlatList
          data={values}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item}-${index}`}
          style={styles.list}
          scrollEnabled={false}
        />
      )}

      {values.length === 0 && (
        <Text style={styles.emptyText}>No items added yet</Text>
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
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  input: {
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
  list: {
    maxHeight: 200,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginBottom: 6,
  },
  itemText: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  removeButton: {
    marginLeft: 8,
  },
  emptyText: {
    color: '#666666',
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  },
}); 