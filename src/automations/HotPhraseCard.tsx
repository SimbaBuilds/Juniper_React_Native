import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HotPhrase } from '../supabase/tables';

interface HotPhraseCardProps {
  hotPhrase: HotPhrase;
  onEdit?: (hotPhrase: HotPhrase) => void;
  onDelete?: (hotPhrase: HotPhrase) => void;
  onToggle?: (hotPhrase: HotPhrase) => void;
}

export const HotPhraseCard: React.FC<HotPhraseCardProps> = ({
  hotPhrase,
  onEdit,
  onDelete,
  onToggle,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.phraseRow}>
          <Ionicons 
            name={hotPhrase.is_active ? "flash" : "flash-off"} 
            size={20} 
            color={hotPhrase.is_active ? "#4A90E2" : "#666666"} 
          />
          <Text style={styles.phraseText}>"{hotPhrase.phrase}"</Text>
        </View>
        
        <View style={styles.actionButtons}>
          {onToggle && (
            <TouchableOpacity
              style={[styles.toggleButton, hotPhrase.is_active ? styles.activeToggle : styles.inactiveToggle]}
              onPress={() => onToggle(hotPhrase)}
            >
              <Text style={[styles.toggleText, hotPhrase.is_active ? styles.activeToggleText : styles.inactiveToggleText]}>
                {hotPhrase.is_active ? 'Active' : 'Inactive'}
              </Text>
            </TouchableOpacity>
          )}
          
          {!hotPhrase.is_built_in && onEdit && (
            <TouchableOpacity style={styles.iconButton} onPress={() => onEdit(hotPhrase)}>
              <Ionicons name="pencil" size={18} color="#4A90E2" />
            </TouchableOpacity>
          )}
          
          {!hotPhrase.is_built_in && onDelete && (
            <TouchableOpacity style={styles.iconButton} onPress={() => onDelete(hotPhrase)}>
              <Ionicons name="trash" size={18} color="#F44336" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Service:</Text>
          <Text style={styles.detailValue}>{hotPhrase.service_name}</Text>
        </View>
        
        {/* <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Tool:</Text>
          <Text style={styles.detailValue}>{hotPhrase.tool_name}</Text>
        </View> */}
        
        <Text style={styles.description}>{hotPhrase.description}</Text>
        
        {hotPhrase.is_built_in && (
          <View style={styles.builtInBadge}>
            <Text style={styles.builtInText}>Built-in</Text>
          </View>
        )}
        
        {hotPhrase.execution_count > 0 && (
          <View style={styles.statsRow}>
            <Text style={styles.statsText}>
              Used {hotPhrase.execution_count} time{hotPhrase.execution_count !== 1 ? 's' : ''}
              {hotPhrase.last_used && ` • Last used ${new Date(hotPhrase.last_used).toLocaleDateString()}`}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  phraseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  phraseText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginLeft: 8,
    flex: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  toggleButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  activeToggle: {
    backgroundColor: 'rgba(74, 144, 226, 0.2)',
  },
  inactiveToggle: {
    backgroundColor: 'rgba(102, 102, 102, 0.2)',
  },
  toggleText: {
    fontSize: 12,
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#4A90E2',
  },
  inactiveToggleText: {
    color: '#666666',
  },
  iconButton: {
    padding: 4,
  },
  details: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
    width: 60,
  },
  detailValue: {
    fontSize: 14,
    color: '#B0B0B0',
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#B0B0B0',
    lineHeight: 20,
    marginTop: 4,
  },
  builtInBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 8,
  },
  builtInText: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '500',
  },
  statsRow: {
    marginTop: 8,
  },
  statsText: {
    fontSize: 12,
    color: '#666666',
  },
});