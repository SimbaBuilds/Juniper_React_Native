import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  StyleSheet,
  useColorScheme,
  Dimensions,
  SafeAreaView,
  ActivityIndicator,
  Linking
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { supabase } from './supabase/supabase'
import { colors } from './shared/theme/colors'
import {
  FilterPrefs,
  ChartInstance,
  HealthMetric,
  AVAILABLE_METRICS
} from './constants/wellnessMetrics'
import {
  calculateSummaryStats,
  prepareChartData,
  getDateRange
} from './utils/wellnessData'
import {
  loadWellnessPrefs,
  saveWellnessPrefs,
  DEFAULT_FILTER_PREFS
} from './utils/wellnessStorage'
import { SummaryCard, getMetricIcon } from './components/wellness/SummaryCard'
import { TrendChart } from './components/wellness/TrendChart'
import { MetricsSelector } from './components/wellness/MetricsSelector'

// Time range picker component
const TimeRangePicker: React.FC<{
  value: string
  onValueChange: (value: string) => void
  isDarkMode: boolean
}> = ({ value, onValueChange, isDarkMode }) => {
  const options = [
    { label: '7d', value: '7' },
    { label: '30d', value: '30' },
    { label: '90d', value: '90' },
    { label: '1yr', value: '365' },
    { label: 'Max', value: 'max' }
  ]

  return (
    <View style={styles.timeRangeContainer}>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onValueChange(option.value)}
          style={[
            styles.timeRangeButton,
            value === option.value && styles.timeRangeButtonActive,
            isDarkMode && styles.timeRangeButtonDark
          ]}
        >
          <Text style={[
            styles.timeRangeButtonText,
            value === option.value && styles.timeRangeButtonTextActive,
            isDarkMode && styles.timeRangeButtonTextDark
          ]}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default function WellnessScreen() {
  const colorScheme = useColorScheme()
  const isDarkMode = colorScheme === 'dark'

  const [user, setUser] = useState<{ id: string } | null>(null)
  const [summaryHealthData, setSummaryHealthData] = useState<HealthMetric[]>([])
  const [chartHealthData, setChartHealthData] = useState<Record<string, HealthMetric[]>>({})
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [filterPrefs, setFilterPrefs] = useState<FilterPrefs>(DEFAULT_FILTER_PREFS)

  // Load user and preferences on mount
  useEffect(() => {
    async function initialize() {
      try {
        setLoading(true)

        // Get current user
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        if (userError || !user) {
          console.error('Error getting user:', userError)
          return
        }

        setUser(user)

        // Load saved preferences
        const prefs = await loadWellnessPrefs()
        setFilterPrefs(prefs)
      } catch (error) {
        console.error('Error initializing wellness screen:', error)
      } finally {
        setLoading(false)
      }
    }

    initialize()
  }, [])

  // Save preferences whenever they change
  useEffect(() => {
    if (user) {
      saveWellnessPrefs(filterPrefs)
    }
  }, [filterPrefs, user])

  // Fetch health data for a specific time range
  const fetchHealthDataForRange = useCallback(async (timeRange: string): Promise<HealthMetric[]> => {
    if (!user) return []

    try {
      const { startDate, endDate } = getDateRange(timeRange)

      let query = supabase
        .from('health_metrics_daily')
        .select('*')
        .eq('user_id', user.id)
        .lte('date', endDate)
        .order('date', { ascending: true })

      if (startDate) {
        query = query.gte('date', startDate)
      }

      const { data, error } = await query

      if (error) {
        console.error('Error fetching health metrics:', error)
        return []
      }

      console.log('📊 Fetched health data:', {
        recordCount: data?.length || 0,
        timeRange,
        firstDate: data?.[0]?.date,
        lastDate: data?.[data.length - 1]?.date
      })

      return data || []
    } catch (error) {
      console.error('Error in fetchHealthDataForRange:', error)
      return []
    }
  }, [user])

  // Load summary data when summary time range changes
  useEffect(() => {
    async function loadSummaryData() {
      if (!user) return

      try {
        const data = await fetchHealthDataForRange(filterPrefs.summaryTimeRange)
        setSummaryHealthData(data)
      } catch (error) {
        console.error('Error loading summary data:', error)
      }
    }

    loadSummaryData()
  }, [user, filterPrefs.summaryTimeRange, fetchHealthDataForRange])

  // Load chart data when chart time ranges change
  useEffect(() => {
    async function loadChartData() {
      if (!user) return

      try {
        const newChartData: Record<string, HealthMetric[]> = {}

        // Get unique time ranges to avoid duplicate fetches
        const uniqueTimeRanges = [...new Set(filterPrefs.trendCharts.map(chart => chart.timeRange))]

        // Fetch data for each unique time range
        const dataPromises = uniqueTimeRanges.map(async (timeRange) => {
          const data = await fetchHealthDataForRange(timeRange)
          return { timeRange, data }
        })

        const results = await Promise.all(dataPromises)
        const dataByTimeRange: Record<string, HealthMetric[]> = {}

        results.forEach(({ timeRange, data }) => {
          dataByTimeRange[timeRange] = data
        })

        // Assign data to each chart based on its time range
        filterPrefs.trendCharts.forEach(chart => {
          newChartData[chart.id] = dataByTimeRange[chart.timeRange] || []
        })

        setChartHealthData(newChartData)
      } catch (error) {
        console.error('Error loading chart data:', error)
      }
    }

    loadChartData()
  }, [user, filterPrefs.trendCharts, fetchHealthDataForRange])

  // Refresh function
  const onRefresh = useCallback(async () => {
    setRefreshing(true)
    // Reload summary data
    if (user) {
      const data = await fetchHealthDataForRange(filterPrefs.summaryTimeRange)
      setSummaryHealthData(data)
    }
    setRefreshing(false)
  }, [user, filterPrefs.summaryTimeRange, fetchHealthDataForRange])

  // Chart management functions
  const addTrendChart = () => {
    const newChart: ChartInstance = {
      id: Date.now().toString(),
      name: `Trend Chart ${filterPrefs.trendCharts.length + 1}`,
      selectedMetrics: ['sleep_score', 'activity_score'],
      isExpanded: true,
      timeRange: '30',
      isNormalized: false
    }
    setFilterPrefs(prev => ({
      ...prev,
      trendCharts: [...prev.trendCharts, newChart]
    }))
  }

  const removeTrendChart = (chartId: string) => {
    if (filterPrefs.trendCharts.length <= 1) return // Keep at least one chart
    setFilterPrefs(prev => ({
      ...prev,
      trendCharts: prev.trendCharts.filter(chart => chart.id !== chartId)
    }))
  }

  const updateTrendChart = (chartId: string, updates: Partial<ChartInstance>) => {
    setFilterPrefs(prev => ({
      ...prev,
      trendCharts: prev.trendCharts.map(chart =>
        chart.id === chartId ? { ...chart, ...updates } : chart
      )
    }))
  }

  const updateFilterPref = <K extends keyof FilterPrefs>(key: K, value: FilterPrefs[K]) => {
    setFilterPrefs(prev => ({ ...prev, [key]: value }))
  }

  // Get chart data for a specific chart
  const getChartData = (chartId: string) => {
    const healthData = chartHealthData[chartId] || []
    return prepareChartData(healthData)
  }

  // Calculate summary stats
  const summaryStats = summaryHealthData.length > 0
    ? calculateSummaryStats(summaryHealthData)
    : null

  // Add focus effect to refresh data when screen is focused
  useFocusEffect(
    useCallback(() => {
      async function refreshData() {
        if (!user) return
        try {
          const data = await fetchHealthDataForRange(filterPrefs.summaryTimeRange)
          setSummaryHealthData(data)
        } catch (error) {
          console.error('Error refreshing wellness data:', error)
        }
      }
      refreshData()
    }, [user, filterPrefs.summaryTimeRange, fetchHealthDataForRange])
  )

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.text.primary} />
          <Text style={styles.loadingText}>Loading wellness data...</Text>
        </View>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>
          Wellness Dashboard
        </Text>
        <Text style={[styles.subtitle, isDarkMode && styles.subtitleDark]}>
          Track your health metrics and wellness journey
        </Text>
      </View> */}

      {/* Summary Section */}
      {summaryStats && filterPrefs.showSummaryStats && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
              Summary
            </Text>
            <View style={styles.sectionHeaderRight}>
              <TimeRangePicker
                value={filterPrefs.summaryTimeRange}
                onValueChange={(value) => updateFilterPref('summaryTimeRange', value)}
                isDarkMode={isDarkMode}
              />
            </View>
          </View>

          {/* Metrics Selector */}
          <MetricsSelector
            selectedMetrics={filterPrefs.selectedSummaryCards || []}
            onSelectionChange={(cards) => updateFilterPref('selectedSummaryCards', cards)}
            mode="summary-cards"
            isDarkMode={isDarkMode}
          />

          {/* Summary Cards Grid */}
          <View style={styles.summaryGrid}>
            {(filterPrefs.selectedSummaryCards || []).map((cardKey) => {
              const cardConfig = AVAILABLE_METRICS.find(m => m.key === cardKey)
              if (!cardConfig) return null

              const value = summaryStats[cardKey]

              return (
                <View key={cardKey} style={styles.summaryCardWrapper}>
                  <SummaryCard
                    metricKey={cardKey}
                    label={cardConfig.label}
                    value={value}
                    icon={getMetricIcon(cardKey, cardConfig.group)}
                    isDarkMode={isDarkMode}
                  />
                </View>
              )
            })}
          </View>
        </View>
      )}

      {/* Trend Charts Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={[styles.sectionTitle, isDarkMode && styles.sectionTitleDark]}>
            Trend Charts
          </Text>
          <TouchableOpacity
            onPress={addTrendChart}
            style={[styles.addButton, isDarkMode && styles.addButtonDark]}
          >
            <Text style={[styles.addButtonText, isDarkMode && styles.addButtonTextDark]}>
              + Add Chart
            </Text>
          </TouchableOpacity>
        </View>

        {/* Render all trend chart instances */}
        {filterPrefs.trendCharts.map((chart) => (
          <TrendChart
            key={chart.id}
            chart={chart}
            chartData={getChartData(chart.id)}
            isDarkMode={isDarkMode}
            onUpdateChart={updateTrendChart}
            onRemoveChart={removeTrendChart}
            canRemove={filterPrefs.trendCharts.length > 1}
          />
        ))}
      </View>

      {/* No Data Message */}
      {summaryHealthData.length === 0 && (
        <View style={[styles.noDataCard, isDarkMode && styles.noDataCardDark]}>
          <Text style={[styles.noDataTitle, isDarkMode && styles.noDataTitleDark]}>
            Connect a service to see health metrics
          </Text>
          <Text style={[styles.noDataText, isDarkMode && styles.noDataTextDark]}>
            Connect your wearable devices to start tracking your wellness metrics.
          </Text>
        </View>
      )}

      {/* Export Data Footer */}
      <View style={styles.exportFooter}>
        <Text style={[styles.exportText, isDarkMode && styles.exportTextDark]}>
          Export data and view goal progress in the{' '}
          <Text
            style={styles.exportLink}
            onPress={() => Linking.openURL('https://juniperassistant.com/wellness')}
          >
            web app
          </Text>
        </Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212'
  },
  containerDark: {
    backgroundColor: '#121212'
  },
  scrollContent: {
    flexGrow: 1
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 16,
    color: colors.text.primary,
    marginTop: 16
  },
  header: {
    padding: 20,
    paddingBottom: 16
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4
  },
  titleDark: {
    color: colors.text.primary
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary
  },
  subtitleDark: {
    color: colors.text.secondary
  },
  section: {
    paddingHorizontal: 20,
    paddingBottom: 24
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  sectionHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary
  },
  sectionTitleDark: {
    color: colors.text.primary
  },
  timeRangeContainer: {
    flexDirection: 'row',
    gap: 4
  },
  timeRangeButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  timeRangeButtonActive: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF'
  },
  timeRangeButtonDark: {
    backgroundColor: '#222',
    borderColor: '#444'
  },
  timeRangeButtonText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500'
  },
  timeRangeButtonTextActive: {
    color: '#fff'
  },
  timeRangeButtonTextDark: {
    color: '#ddd'
  },
  summaryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12
  },
  summaryCardWrapper: {
    width: (Dimensions.get('window').width - 64) / 2
  },
  addButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: '#007AFF'
  },
  addButtonDark: {
    backgroundColor: '#0A84FF'
  },
  addButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600'
  },
  addButtonTextDark: {
    color: '#fff'
  },
  noDataCard: {
    margin: 20,
    padding: 24,
    borderRadius: 12,
    backgroundColor: '#1E1E1E',
    alignItems: 'center'
  },
  noDataCardDark: {
    backgroundColor: '#1E1E1E'
  },
  noDataTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 8,
    textAlign: 'center'
  },
  noDataTitleDark: {
    color: colors.text.primary
  },
  noDataText: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: 'center'
  },
  noDataTextDark: {
    color: colors.text.secondary
  },
  exportFooter: {
    padding: 20,
    paddingTop: 8,
    paddingBottom: 32,
    alignItems: 'center'
  },
  exportText: {
    fontSize: 13,
    color: colors.text.secondary,
    textAlign: 'center'
  },
  exportTextDark: {
    color: colors.text.secondary
  },
  exportLink: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    fontWeight: '600'
  }
})
