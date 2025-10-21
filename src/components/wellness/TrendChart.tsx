import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory-native'
import { ChartInstance, AVAILABLE_METRICS, getMetricColor } from '../../constants/wellnessMetrics'
import { normalizeChartData } from '../../utils/wellnessData'
import { MetricsSelector } from './MetricsSelector'

interface TrendChartProps {
  chart: ChartInstance
  chartData: any[]
  isDarkMode: boolean
  onUpdateChart: (chartId: string, updates: Partial<ChartInstance>) => void
  onRemoveChart: (chartId: string) => void
  canRemove: boolean
  onShowIntegrationSupport?: () => void
}

// Time range picker component
const TimeRangePicker: React.FC<{
  value: string
  onValueChange: (value: string) => void
  isDarkMode: boolean
}> = ({ value, onValueChange, isDarkMode }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const options = [
    { label: '7 days', value: '7' },
    { label: '30 days', value: '30' },
    { label: '90 days', value: '90' },
    { label: '1 Year', value: '365' },
    { label: 'Max', value: 'max' }
  ]

  const selectedLabel = options.find(opt => opt.value === value)?.label || '30 days'

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={[styles.pickerButton, isDarkMode && styles.pickerButtonDark]}
      >
        <Text style={[styles.pickerButtonText, isDarkMode && styles.pickerButtonTextDark]}>
          {selectedLabel}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <TouchableOpacity
          style={styles.pickerModalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={[styles.pickerModalContent, isDarkMode && styles.pickerModalContentDark]}>
            {options.map(option => (
              <TouchableOpacity
                key={option.value}
                onPress={() => {
                  onValueChange(option.value)
                  setModalVisible(false)
                }}
                style={[
                  styles.pickerOption,
                  value === option.value && styles.pickerOptionSelected
                ]}
              >
                <Text style={[
                  styles.pickerOptionText,
                  isDarkMode && styles.pickerOptionTextDark,
                  value === option.value && styles.pickerOptionTextSelected
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

export const TrendChart: React.FC<TrendChartProps> = ({
  chart,
  chartData,
  isDarkMode,
  onUpdateChart,
  onRemoveChart,
  canRemove,
  onShowIntegrationSupport
}) => {
  const [isEditingName, setIsEditingName] = useState(false)
  const [tempName, setTempName] = useState(chart.name)

  const handleNameSave = () => {
    onUpdateChart(chart.id, { name: tempName })
    setIsEditingName(false)
  }

  const handleNameCancel = () => {
    setTempName(chart.name)
    setIsEditingName(false)
  }

  // Prepare chart data with normalization if needed
  const prepareData = () => {
    if (chartData.length === 0 || chart.selectedMetrics.length === 0) {
      return { data: [], ranges: {} }
    }

    if (chart.isNormalized) {
      const { normalizedData, originalRanges } = normalizeChartData(chartData, chart.selectedMetrics)
      return { data: normalizedData, ranges: originalRanges }
    }

    return { data: chartData, ranges: {} }
  }

  const { data, ranges } = prepareData()

  // Get appropriate tick count based on time range
  const getTickCount = (timeRange: string): number => {
    switch (timeRange) {
      case '7':
        return 7 // Show all days
      case '30':
        return 5 // ~1 per week
      case '90':
        return 6 // ~1 per 2 weeks
      case '365':
        return 12 // ~1 per month
      case 'max':
        return 12 // Evenly distributed
      default:
        return 7
    }
  }

  // Format date tick labels based on time range
  const formatDateTick = (tick: any, timeRange: string): string => {
    if (!tick) return ''

    const date = new Date(tick)
    if (isNaN(date.getTime())) return tick.toString()

    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear().toString().slice(-2)

    // For longer ranges, show month/year format
    if (timeRange === '365' || timeRange === 'max') {
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      return `${monthNames[date.getMonth()]} '${year}`
    }

    // For shorter ranges, show month/day format
    return `${month}/${day}`
  }

  return (
    <View style={[styles.card, isDarkMode && styles.cardDark]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {isEditingName ? (
            <View style={styles.editNameContainer}>
              <TextInput
                value={tempName}
                onChangeText={setTempName}
                style={[styles.nameInput, isDarkMode && styles.nameInputDark]}
                onSubmitEditing={handleNameSave}
                autoFocus
              />
              <TouchableOpacity onPress={handleNameSave} style={styles.iconButton}>
                <Text style={styles.iconButtonText}>✓</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNameCancel} style={styles.iconButton}>
                <Text style={styles.iconButtonText}>✕</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.nameContainer}>
              <Text style={[styles.chartName, isDarkMode && styles.chartNameDark]}>
                {chart.name}
              </Text>
              <TouchableOpacity onPress={() => setIsEditingName(true)} style={styles.iconButton}>
                <Text style={styles.iconButtonTextSmall}>✎</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => onUpdateChart(chart.id, { isExpanded: !chart.isExpanded })}
            style={[styles.expandButton, isDarkMode && styles.expandButtonDark]}
          >
            <Text style={[styles.expandButtonText, isDarkMode && styles.expandButtonTextDark]}>
              {chart.isExpanded ? '▲ Collapse' : '▼ Expand'}
            </Text>
          </TouchableOpacity>
          {canRemove && (
            <TouchableOpacity onPress={() => onRemoveChart(chart.id)} style={styles.removeButton}>
              <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Description */}
      <Text style={[styles.description, isDarkMode && styles.descriptionDark]}>
        {chart.selectedMetrics.length > 0
          ? `Showing ${chart.selectedMetrics.length} metric${chart.selectedMetrics.length !== 1 ? 's' : ''}`
          : 'No metrics selected'}
      </Text>

      {/* Expanded Controls */}
      {chart.isExpanded && (
        <View style={styles.controls}>
          {/* Time Range */}
          <View style={styles.controlRow}>
            <Text style={[styles.controlLabel, isDarkMode && styles.controlLabelDark]}>
              Time Range
            </Text>
            <TimeRangePicker
              value={chart.timeRange}
              onValueChange={(value) => onUpdateChart(chart.id, { timeRange: value })}
              isDarkMode={isDarkMode}
            />
          </View>

          {/* Metrics Selector */}
          <MetricsSelector
            selectedMetrics={chart.selectedMetrics}
            onSelectionChange={(metrics) => onUpdateChart(chart.id, { selectedMetrics: metrics })}
            isDarkMode={isDarkMode}
            mode="trends"
            onShowIntegrationSupport={onShowIntegrationSupport}
          />

          {/* Normalize Toggle */}
          <View style={styles.normalizeContainer}>
            <TouchableOpacity
              onPress={() => onUpdateChart(chart.id, { isNormalized: !chart.isNormalized })}
              style={[
                styles.normalizeButton,
                chart.isNormalized && styles.normalizeButtonActive,
                isDarkMode && styles.normalizeButtonDark
              ]}
            >
              <Text style={[
                styles.normalizeButtonText,
                chart.isNormalized && styles.normalizeButtonTextActive,
                isDarkMode && styles.normalizeButtonTextDark
              ]}>
                ≈ {chart.isNormalized ? 'Original Scale' : 'Normalize'}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.normalizeHint, isDarkMode && styles.normalizeHintDark]}>
              {chart.isNormalized
                ? 'Showing normalized values (0-100 scale)'
                : 'Normalize all metrics to 0-100 scale for comparison'}
            </Text>
          </View>
        </View>
      )}

      {/* Chart */}
      {chart.isExpanded && (
        <View style={styles.chartContainer}>
          {data.length > 0 && chart.selectedMetrics.length > 0 ? (
            <VictoryChart
              width={Dimensions.get('window').width - 60}
              height={300}
              containerComponent={<VictoryVoronoiContainer />}
            >
              <VictoryAxis
                tickCount={getTickCount(chart.timeRange)}
                tickFormat={(t) => formatDateTick(t, chart.timeRange)}
                style={{
                  axis: { stroke: isDarkMode ? '#444' : '#ccc' },
                  tickLabels: { fill: isDarkMode ? '#999' : '#666', fontSize: 10, angle: 0 }
                }}
              />
              <VictoryAxis
                dependentAxis
                label={chart.isNormalized ? 'Normalized (%)' : undefined}
                style={{
                  axis: { stroke: isDarkMode ? '#444' : '#ccc' },
                  tickLabels: { fill: isDarkMode ? '#999' : '#666', fontSize: 10 },
                  axisLabel: { fill: isDarkMode ? '#999' : '#666', fontSize: 12, padding: 35 }
                }}
              />
              {chart.selectedMetrics.map((metricKey) => {
                const metric = AVAILABLE_METRICS.find(m => m.key === metricKey)
                if (!metric) return null

                return (
                  <VictoryLine
                    key={metricKey}
                    data={data.filter(d => d[metricKey] != null)}
                    x="date"
                    y={metricKey}
                    style={{
                      data: {
                        stroke: getMetricColor(metricKey, isDarkMode),
                        strokeWidth: 2
                      }
                    }}
                    labels={({ datum }) => {
                      const originalValue = chart.isNormalized && chartData
                        ? chartData.find((d: any) => d.date === datum.date)?.[metricKey]
                        : datum[metricKey]

                      if (chart.isNormalized && originalValue !== undefined) {
                        return `${metric.label}: ${originalValue} (${datum[metricKey]?.toFixed(1)}%)`
                      }
                      return `${metric.label}: ${datum[metricKey]}`
                    }}
                    labelComponent={
                      <VictoryTooltip
                        renderInPortal={false}
                        style={{ fill: isDarkMode ? '#fff' : '#333', fontSize: 10 }}
                        flyoutStyle={{
                          fill: isDarkMode ? '#1a1a1a' : '#fff',
                          stroke: isDarkMode ? '#444' : '#ccc'
                        }}
                      />
                    }
                  />
                )
              })}
            </VictoryChart>
          ) : (
            <View style={styles.emptyState}>
              <Text style={[styles.emptyStateText, isDarkMode && styles.emptyStateTextDark]}>
                {chart.selectedMetrics.length === 0
                  ? 'Select metrics to display trends'
                  : 'No data available for selected metrics'}
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardDark: {
    backgroundColor: '#1E1E1E'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  headerLeft: {
    flex: 1
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center'
  },
  editNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  chartName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  chartNameDark: {
    color: '#fff'
  },
  nameInput: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#007AFF',
    padding: 4
  },
  nameInputDark: {
    color: '#fff',
    borderBottomColor: '#0A84FF'
  },
  iconButton: {
    padding: 4
  },
  iconButtonText: {
    fontSize: 18,
    color: '#007AFF'
  },
  iconButtonTextSmall: {
    fontSize: 14,
    color: '#007AFF'
  },
  expandButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#2A2A2A'
  },
  expandButtonDark: {
    backgroundColor: '#2A2A2A'
  },
  expandButtonText: {
    fontSize: 12,
    color: '#ddd',
    fontWeight: '500'
  },
  expandButtonTextDark: {
    color: '#ddd'
  },
  removeButton: {
    padding: 6
  },
  removeButtonText: {
    fontSize: 20,
    color: '#ff3b30',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 13,
    color: '#999',
    marginBottom: 12
  },
  descriptionDark: {
    color: '#999'
  },
  controls: {
    gap: 16,
    marginTop: 8
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ddd'
  },
  controlLabelDark: {
    color: '#ddd'
  },
  normalizeContainer: {
    alignItems: 'flex-end',
    gap: 4
  },
  normalizeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#2A2A2A'
  },
  normalizeButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF'
  },
  normalizeButtonDark: {
    borderColor: '#444',
    backgroundColor: '#2A2A2A'
  },
  normalizeButtonText: {
    fontSize: 14,
    color: '#ddd',
    fontWeight: '500'
  },
  normalizeButtonTextActive: {
    color: '#fff'
  },
  normalizeButtonTextDark: {
    color: '#ddd'
  },
  normalizeHint: {
    fontSize: 11,
    color: '#999',
    textAlign: 'right'
  },
  normalizeHintDark: {
    color: '#666'
  },
  chartContainer: {
    marginTop: 16,
    alignItems: 'center'
  },
  emptyState: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  emptyStateText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center'
  },
  emptyStateTextDark: {
    color: '#999'
  },
  pickerButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#444',
    backgroundColor: '#2A2A2A',
    minWidth: 100,
    alignItems: 'center'
  },
  pickerButtonDark: {
    borderColor: '#444',
    backgroundColor: '#2A2A2A'
  },
  pickerButtonText: {
    fontSize: 14,
    color: '#ddd'
  },
  pickerButtonTextDark: {
    color: '#ddd'
  },
  pickerModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end'
  },
  pickerModalContent: {
    backgroundColor: '#1E1E1E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20
  },
  pickerModalContentDark: {
    backgroundColor: '#1E1E1E'
  },
  pickerOption: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 8
  },
  pickerOptionSelected: {
    backgroundColor: '#007AFF'
  },
  pickerOptionText: {
    fontSize: 16,
    color: '#ddd',
    textAlign: 'center'
  },
  pickerOptionTextDark: {
    color: '#ddd'
  },
  pickerOptionTextSelected: {
    color: '#fff',
    fontWeight: '600'
  }
})
