import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { getMetricUnit, getMetricTooltip } from '../../constants/wellnessMetrics'

interface SummaryCardProps {
  metricKey: string
  label: string
  value: number | null
  icon?: string // Emoji or icon identifier
  isDarkMode?: boolean
}

export const SummaryCard: React.FC<SummaryCardProps> = ({
  metricKey,
  label,
  value,
  icon = '📊',
  isDarkMode = false
}) => {
  const [showTooltip, setShowTooltip] = useState(false)

  const hasData = value !== null && value !== undefined
  const unit = getMetricUnit(metricKey)
  const tooltip = getMetricTooltip(metricKey)

  const formatValue = (val: number) => {
    if (metricKey === 'total_steps') {
      return val.toLocaleString()
    }
    return val.toString()
  }

  return (
    <>
      <View style={[styles.card, isDarkMode && styles.cardDark]}>
        <View style={styles.header}>
          <View style={styles.labelContainer}>
            <Text style={[styles.label, isDarkMode && styles.labelDark]} numberOfLines={2}>
              {label}
            </Text>
            <TouchableOpacity
              onPress={() => setShowTooltip(true)}
              style={styles.infoButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Text style={styles.infoIcon}>ⓘ</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.icon}>{icon}</Text>
        </View>

        <View style={styles.content}>
          <Text style={[styles.value, isDarkMode && styles.valueDark]}>
            {hasData ? formatValue(value) : 'N/A'}
          </Text>
          <Text style={[styles.unit, isDarkMode && styles.unitDark]}>
            {hasData ? unit : 'No data'}
          </Text>
        </View>
      </View>

      {/* Tooltip Modal */}
      <Modal
        visible={showTooltip}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowTooltip(false)}
      >
        <TouchableOpacity
          style={styles.tooltipOverlay}
          activeOpacity={1}
          onPress={() => setShowTooltip(false)}
        >
          <View style={[styles.tooltipContent, isDarkMode && styles.tooltipContentDark]}>
            <Text style={[styles.tooltipTitle, isDarkMode && styles.tooltipTitleDark]}>
              {label}
            </Text>
            <Text style={[styles.tooltipText, isDarkMode && styles.tooltipTextDark]}>
              {tooltip}
            </Text>
            <TouchableOpacity
              onPress={() => setShowTooltip(false)}
              style={[styles.tooltipButton, isDarkMode && styles.tooltipButtonDark]}
            >
              <Text style={styles.tooltipButtonText}>Got it</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

// Get icon based on metric key or group
export const getMetricIcon = (metricKey: string, group?: string): string => {
  // Sleep metrics
  if (group === 'Sleep' || metricKey.includes('sleep') || metricKey.includes('bed')) {
    return '🌙'
  }

  // Activity metrics
  if (
    group === 'Activity' ||
    metricKey.includes('steps') ||
    metricKey.includes('calories') ||
    metricKey.includes('exercise') ||
    metricKey.includes('distance')
  ) {
    return '🏃'
  }

  // Vitals / Heart metrics
  if (
    group === 'Vitals' ||
    metricKey.includes('hr') ||
    metricKey.includes('blood') ||
    metricKey.includes('oxygen') ||
    metricKey.includes('respiratory')
  ) {
    return '❤️'
  }

  // Recovery / Score metrics
  if (group === 'Recovery' || metricKey.includes('score') || metricKey.includes('readiness')) {
    return '📈'
  }

  // Wellness / Stress
  if (group === 'Wellness' || metricKey.includes('stress') || metricKey.includes('resilience')) {
    return '🧘'
  }

  // Body Composition
  if (group === 'Body Composition' || metricKey.includes('weight') || metricKey.includes('fat')) {
    return '⚖️'
  }

  // Nutrition
  if (group === 'Nutrition' || metricKey.includes('nutrition') || metricKey.includes('hydration')) {
    return '🍎'
  }

  // Fitness
  if (group === 'Fitness' || metricKey.includes('vo2')) {
    return '💪'
  }

  // Default
  return '📊'
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardDark: {
    backgroundColor: '#1E1E1E',
    shadowOpacity: 0.3
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
    color: '#999',
    flex: 1
  },
  labelDark: {
    color: '#999'
  },
  infoButton: {
    padding: 2
  },
  infoIcon: {
    fontSize: 12,
    color: '#999'
  },
  icon: {
    fontSize: 14,
    marginLeft: 4
  },
  content: {
    marginTop: 4
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2
  },
  valueDark: {
    color: '#fff'
  },
  unit: {
    fontSize: 11,
    color: '#999'
  },
  unitDark: {
    color: '#666'
  },
  tooltipOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  tooltipContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 20,
    maxWidth: 300,
    width: '100%'
  },
  tooltipContentDark: {
    backgroundColor: '#1E1E1E'
  },
  tooltipTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12
  },
  tooltipTitleDark: {
    color: '#fff'
  },
  tooltipText: {
    fontSize: 14,
    color: '#999',
    lineHeight: 20,
    marginBottom: 16
  },
  tooltipTextDark: {
    color: '#999'
  },
  tooltipButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  tooltipButtonDark: {
    backgroundColor: '#0A84FF'
  },
  tooltipButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600'
  }
})
