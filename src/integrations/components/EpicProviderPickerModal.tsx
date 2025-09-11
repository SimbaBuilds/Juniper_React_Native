import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  TextInput,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../shared/theme/colors';
import { EpicIssuer, MultiIssuerEpicAuthService } from '../auth/services/MultiIssuerEpicAuthService';

interface EpicProviderPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (selectedIssuers: EpicIssuer[]) => void;
  existingConnections?: string[]; // Array of issuer IDs that are already connected
}

const EpicProviderPickerModal: React.FC<EpicProviderPickerModalProps> = ({
  visible,
  onClose,
  onSave,
  existingConnections = [],
}) => {
  const [issuers, setIssuers] = useState<EpicIssuer[]>([]);
  const [filteredIssuers, setFilteredIssuers] = useState<EpicIssuer[]>([]);
  const [selectedIssuers, setSelectedIssuers] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const epicService = MultiIssuerEpicAuthService.getInstance();

  useEffect(() => {
    if (visible) {
      loadIssuers();
      setSelectedIssuers(new Set());
      setSearchTerm('');
      setError(null);
    }
  }, [visible]);

  useEffect(() => {
    filterIssuers();
  }, [searchTerm, issuers]);

  const loadIssuers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await epicService.getEpicIssuers();
      setIssuers(data);
      setFilteredIssuers(data);
    } catch (err) {
      console.error('Error loading Epic issuers:', err);
      setError('Failed to load healthcare providers. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filterIssuers = () => {
    if (!searchTerm.trim()) {
      setFilteredIssuers(issuers);
      return;
    }

    const filtered = issuers.filter(issuer =>
      issuer.organization_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issuer.city?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      issuer.state?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredIssuers(filtered);
  };

  const toggleIssuerSelection = (issuerId: string) => {
    const newSelected = new Set(selectedIssuers);
    if (newSelected.has(issuerId)) {
      newSelected.delete(issuerId);
    } else {
      newSelected.add(issuerId);
    }
    setSelectedIssuers(newSelected);
  };

  const handleSave = () => {
    if (selectedIssuers.size === 0) {
      Alert.alert('No Selection', 'Please select at least one healthcare provider.');
      return;
    }

    const selectedIssuerObjects = issuers.filter(issuer => selectedIssuers.has(issuer.id));
    onSave(selectedIssuerObjects);
    onClose();
  };

  const renderIssuerItem = ({ item }: { item: EpicIssuer }) => {
    const isSelected = selectedIssuers.has(item.id);
    const isAlreadyConnected = existingConnections.includes(item.id);
    const isDisabled = isAlreadyConnected;

    return (
      <TouchableOpacity
        style={[
          styles.issuerItem,
          { 
            backgroundColor: colors.background.card,
            borderColor: isSelected ? colors.button.primary : colors.border.primary,
            opacity: isDisabled ? 0.5 : 1,
          }
        ]}
        onPress={() => !isDisabled && toggleIssuerSelection(item.id)}
        disabled={isDisabled}
      >
        <View style={styles.issuerInfo}>
          <Text style={[styles.issuerName, { color: colors.text.primary }]}>
            {item.organization_name}
          </Text>
          {(item.city || item.state) && (
            <Text style={[styles.issuerLocation, { color: colors.text.secondary }]}>
              {[item.city, item.state].filter(Boolean).join(', ')}
            </Text>
          )}
          {isAlreadyConnected && (
            <Text style={[styles.connectedLabel, { color: colors.status.mutedGreen }]}>
              Already Connected
            </Text>
          )}
        </View>
        <View style={[
          styles.checkbox,
          { 
            borderColor: isSelected ? colors.button.primary : colors.border.primary,
            backgroundColor: isSelected ? colors.button.primary : 'transparent',
          }
        ]}>
          {isSelected && (
            <Ionicons name="checkmark" size={16} color={colors.common.white} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = () => (
    <View style={[styles.header, { backgroundColor: colors.background.card, borderBottomColor: colors.border.primary }]}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Ionicons name="close" size={24} color={colors.text.primary} />
      </TouchableOpacity>
      <Text style={[styles.headerTitle, { color: colors.text.primary }]}>
        Select Healthcare Providers
      </Text>
      <TouchableOpacity 
        onPress={handleSave} 
        style={[styles.saveButton, { backgroundColor: colors.button.primary }]}
        disabled={selectedIssuers.size === 0}
      >
        <Text style={[styles.saveButtonText, { color: colors.common.white }]}>
          Save ({selectedIssuers.size})
        </Text>
      </TouchableOpacity>
    </View>
  );

  const renderSearchBar = () => (
    <View style={[styles.searchContainer, { backgroundColor: colors.background.card }]}>
      <Ionicons name="search" size={20} color={colors.text.secondary} style={styles.searchIcon} />
      <TextInput
        style={[styles.searchInput, { color: colors.text.primary }]}
        placeholder="Search by name, city, or state..."
        placeholderTextColor={colors.text.secondary}
        value={searchTerm}
        onChangeText={setSearchTerm}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {searchTerm.length > 0 && (
        <TouchableOpacity onPress={() => setSearchTerm('')} style={styles.clearButton}>
          <Ionicons name="close-circle" size={20} color={colors.text.secondary} />
        </TouchableOpacity>
      )}
    </View>
  );

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={colors.button.primary} />
          <Text style={[styles.loadingText, { color: colors.text.secondary }]}>
            Loading healthcare providers...
          </Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centerContainer}>
          <Ionicons name="alert-circle" size={48} color={colors.button.error} />
          <Text style={[styles.errorText, { color: colors.button.error }]}>{error}</Text>
          <TouchableOpacity 
            onPress={loadIssuers} 
            style={[styles.retryButton, { backgroundColor: colors.button.primary }]}
          >
            <Text style={[styles.retryButtonText, { color: colors.common.white }]}>
              Try Again
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (filteredIssuers.length === 0) {
      return (
        <View style={styles.centerContainer}>
          <Ionicons name="search" size={48} color={colors.text.secondary} />
          <Text style={[styles.emptyText, { color: colors.text.secondary }]}>
            {searchTerm ? 'No providers found matching your search.' : 'No healthcare providers available.'}
          </Text>
          {searchTerm && (
            <TouchableOpacity onPress={() => setSearchTerm('')} style={styles.clearSearchButton}>
              <Text style={[styles.clearSearchText, { color: colors.button.primary }]}>
                Clear search
              </Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }

    return (
      <FlatList
        data={filteredIssuers}
        renderItem={renderIssuerItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <SafeAreaView style={[styles.container, { backgroundColor: colors.background.primary }]}>
        {renderHeader()}
        {renderSearchBar()}
        {renderContent()}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  closeButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginHorizontal: 16,
  },
  saveButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 4,
  },
  clearButton: {
    padding: 4,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  issuerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  issuerInfo: {
    flex: 1,
  },
  issuerName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  issuerLocation: {
    fontSize: 14,
    marginBottom: 2,
  },
  connectedLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  emptyText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  clearSearchButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  clearSearchText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default EpicProviderPickerModal;