import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native'
import { AVAILABLE_METRICS, METRIC_PRESETS, getGroupedMetrics } from '../../constants/wellnessMetrics'

export type MetricsSelectorMode = 'manual-entry' | 'summary-cards' | 'trends'

interface MetricsSelectorProps {
  selectedMetrics: string[]
  onSelectionChange: (metrics: string[]) => void
  isDarkMode?: boolean
  mode: MetricsSelectorMode
  onShowIntegrationSupport?: () => void
}

export const MetricsSelector: React.FC<MetricsSelectorProps> = ({
  selectedMetrics,
  onSelectionChange,
  isDarkMode = false,
  mode,
  onShowIntegrationSupport
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const metrics = selectedMetrics || []

  const toggleMetric = (metricKey: string) => {
    const newSelection = metrics.includes(metricKey)
      ? metrics.filter(m => m !== metricKey)
      : [...metrics, metricKey]
    onSelectionChange(newSelection)
  }

  const applyPreset = (presetKey: keyof typeof METRIC_PRESETS) => {
    onSelectionChange(METRIC_PRESETS[presetKey])
  }

  const groupedMetrics = getGroupedMetrics()

  // Filter metrics based on search query
  const filteredGroupedMetrics = Object.entries(groupedMetrics).reduce((acc, [group, groupMetrics]) => {
    const filtered = groupMetrics.filter(metric =>
      metric.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    if (filtered.length > 0) {
      acc[group] = filtered
    }
    return acc
  }, {} as Record<string, typeof AVAILABLE_METRICS>)

  const getDisplayText = () => {
    switch (mode) {
      case 'manual-entry':
        return {
          infoText: 'Select which metrics to manually enter',
          placeholder: 'Select metrics...',
          buttonText: `${metrics.length} metric${metrics.length !== 1 ? 's' : ''} selected`
        }
      case 'summary-cards':
        return {
          placeholder: 'Select cards...',
          buttonText: `${metrics.length} card${metrics.length !== 1 ? 's' : ''} selected`
        }
      case 'trends':
        return {
          infoText: 'See supported metrics by integration',
          placeholder: 'Select metrics...',
          buttonText: `${metrics.length} metric${metrics.length !== 1 ? 's' : ''} selected`
        }
      default:
        return {
          infoText: 'Select metrics',
          placeholder: 'Select metrics...',
          buttonText: `${metrics.length} selected`
        }
    }
  }

  const displayText = getDisplayText()

  return (
    <View style={styles.container}>
      {/* Info text */}
      {mode === 'trends' && onShowIntegrationSupport && (
        <TouchableOpacity onPress={onShowIntegrationSupport}>
          <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
            {displayText.infoText}
          </Text>
        </TouchableOpacity>
      )}
      {mode === 'manual-entry' && (
        <Text style={[styles.infoText, isDarkMode && styles.infoTextDark]}>
          {displayText.infoText}
        </Text>
      )}

      {/* Preset Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.presetsContainer}>
        <View style={styles.presetsRow}>
          {Object.keys(METRIC_PRESETS).map((presetKey) => (
            <TouchableOpacity
              key={presetKey}
              onPress={() => applyPreset(presetKey as keyof typeof METRIC_PRESETS)}
              style={[styles.presetButton, isDarkMode && styles.presetButtonDark]}
            >
              <Text style={[styles.presetButtonText, isDarkMode && styles.presetButtonTextDark]}>
                {presetKey.charAt(0).toUpperCase() + presetKey.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Main selector button */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[styles.selectorButton, isDarkMode && styles.selectorButtonDark]}
      >
        <Text style={[styles.selectorButtonText, isDarkMode && styles.selectorButtonTextDark]}>
          {metrics.length === 0 ? displayText.placeholder : displayText.buttonText}
        </Text>
      </TouchableOpacity>

      {/* Selected metrics badges - for trends mode */}
      {mode === 'trends' && metrics.length > 0 && (
        <View style={styles.badgesContainer}>
          {metrics.map(metricKey => {
            const metric = AVAILABLE_METRICS.find(m => m.key === metricKey)
            if (!metric) return null
            return (
              <View key={metricKey} style={[styles.badge, isDarkMode && styles.badgeDark]}>
                <View
                  style={[
                    styles.badgeColorIndicator,
                    { backgroundColor: isDarkMode ? metric.color.dark : metric.color.light }
                  ]}
                />
                <Text style={[styles.badgeText, isDarkMode && styles.badgeTextDark]}>
                  {metric.label}
                </Text>
                <TouchableOpacity onPress={() => toggleMetric(metricKey)} style={styles.badgeRemove}>
                  <Text style={styles.badgeRemoveText}>×</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      )}

      {/* Metrics Selection Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, isDarkMode && styles.modalContentDark]}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={[styles.modalTitle, isDarkMode && styles.modalTitleDark]}>
                Select Metrics
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.modalCloseButton}>×</Text>
              </TouchableOpacity>
            </View>

            {/* Search Input */}
            <TextInput
              style={[styles.searchInput, isDarkMode && styles.searchInputDark]}
              placeholder="Search metrics..."
              placeholderTextColor={isDarkMode ? '#888' : '#666'}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            {/* Metrics List */}
            <ScrollView style={styles.metricsListScroll}>
              {Object.entries(filteredGroupedMetrics).map(([group, groupMetrics]) => (
                <View key={group} style={styles.metricGroup}>
                  <Text style={[styles.groupHeader, isDarkMode && styles.groupHeaderDark]}>
                    {group}
                  </Text>
                  {groupMetrics.map((metric) => {
                    const isSelected = metrics.includes(metric.key)
                    return (
                      <TouchableOpacity
                        key={metric.key}
                        onPress={() => toggleMetric(metric.key)}
                        style={[styles.metricItem, isDarkMode && styles.metricItemDark]}
                      >
                        <View style={styles.metricItemLeft}>
                          {isDarkMode !== undefined && (
                            <View
                              style={[
                                styles.colorIndicator,
                                { backgroundColor: isDarkMode ? metric.color.dark : metric.color.light }
                              ]}
                            />
                          )}
                          <Text style={[styles.metricLabel, isDarkMode && styles.metricLabelDark]}>
                            {metric.label}
                          </Text>
                        </View>
                        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
                          {isSelected && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              ))}
            </ScrollView>

            {/* Done Button */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={[styles.doneButton, isDarkMode && styles.doneButtonDark]}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 12
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic'
  },
  infoTextDark: {
    color: '#999'
  },
  presetsContainer: {
    marginVertical: 4
  },
  presetsRow: {
    flexDirection: 'row',
    gap: 8
  },
  presetButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  presetButtonDark: {
    borderColor: '#444',
    backgroundColor: '#222'
  },
  presetButtonText: {
    fontSize: 12,
    color: '#333'
  },
  presetButtonTextDark: {
    color: '#ddd'
  },
  selectorButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  selectorButtonDark: {
    borderColor: '#444',
    backgroundColor: '#222'
  },
  selectorButtonText: {
    fontSize: 14,
    color: '#333'
  },
  selectorButtonTextDark: {
    color: '#ddd'
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    gap: 4
  },
  badgeDark: {
    backgroundColor: '#333'
  },
  badgeColorIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4
  },
  badgeText: {
    fontSize: 11,
    color: '#333'
  },
  badgeTextDark: {
    color: '#ddd'
  },
  badgeRemove: {
    marginLeft: 2
  },
  badgeRemoveText: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end'
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%'
  },
  modalContentDark: {
    backgroundColor: '#1a1a1a'
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  modalTitleDark: {
    color: '#fff'
  },
  modalCloseButton: {
    fontSize: 32,
    color: '#666',
    fontWeight: 'bold'
  },
  searchInput: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
    marginBottom: 16,
    fontSize: 14
  },
  searchInputDark: {
    borderColor: '#444',
    backgroundColor: '#222',
    color: '#fff'
  },
  metricsListScroll: {
    maxHeight: 400
  },
  metricGroup: {
    marginBottom: 16
  },
  groupHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    textTransform: 'uppercase'
  },
  groupHeaderDark: {
    color: '#999'
  },
  metricItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f8f8f8',
    marginBottom: 6
  },
  metricItemDark: {
    backgroundColor: '#222'
  },
  metricItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1
  },
  colorIndicator: {
    width: 12,
    height: 12,
    borderRadius: 3
  },
  metricLabel: {
    fontSize: 14,
    color: '#333',
    flex: 1
  },
  metricLabelDark: {
    color: '#ddd'
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkboxSelected: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF'
  },
  checkmark: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  doneButton: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16
  },
  doneButtonDark: {
    backgroundColor: '#0A84FF'
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  }
})
