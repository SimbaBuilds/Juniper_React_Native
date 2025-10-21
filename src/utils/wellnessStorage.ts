import AsyncStorage from '@react-native-async-storage/async-storage'
import { FilterPrefs, ChartInstance } from '../constants/wellnessMetrics'

const WELLNESS_PREFS_KEY = 'wellness-filter-prefs'

// Default filter preferences
export const DEFAULT_FILTER_PREFS: FilterPrefs = {
  showSummaryStats: true,
  selectedSummaryCards: ['sleep_score', 'activity_score', 'resilience_score', 'total_steps'],
  summaryTimeRange: '30',
  trendCharts: [{
    id: '1',
    name: 'Overall Trends',
    selectedMetrics: ['sleep_score', 'activity_score', 'readiness_score', 'stress_level'],
    isExpanded: true,
    timeRange: '30',
    isNormalized: false
  }]
}

// Load wellness preferences from AsyncStorage
export const loadWellnessPrefs = async (): Promise<FilterPrefs> => {
  try {
    const saved = await AsyncStorage.getItem(WELLNESS_PREFS_KEY)
    if (saved) {
      const parsedPrefs = JSON.parse(saved)

      // Ensure trendCharts exists for backward compatibility
      if (!parsedPrefs.trendCharts) {
        parsedPrefs.trendCharts = DEFAULT_FILTER_PREFS.trendCharts
      }

      // Ensure selectedSummaryCards exists for backward compatibility
      if (!parsedPrefs.selectedSummaryCards) {
        parsedPrefs.selectedSummaryCards = DEFAULT_FILTER_PREFS.selectedSummaryCards
      }

      // Ensure summaryTimeRange exists for backward compatibility
      if (!parsedPrefs.summaryTimeRange) {
        parsedPrefs.summaryTimeRange = DEFAULT_FILTER_PREFS.summaryTimeRange
      }

      // Ensure each chart has timeRange and isNormalized for backward compatibility
      if (parsedPrefs.trendCharts) {
        parsedPrefs.trendCharts = parsedPrefs.trendCharts.map((chart: ChartInstance) => ({
          ...chart,
          timeRange: chart.timeRange || '30',
          isNormalized: chart.isNormalized ?? false
        }))
      }

      // Remove old timeRange property if it exists
      if ('timeRange' in parsedPrefs) {
        delete parsedPrefs.timeRange
      }

      return parsedPrefs
    }
  } catch (error) {
    console.error('Failed to load wellness preferences:', error)
  }

  return DEFAULT_FILTER_PREFS
}

// Save wellness preferences to AsyncStorage
export const saveWellnessPrefs = async (prefs: FilterPrefs): Promise<void> => {
  try {
    await AsyncStorage.setItem(WELLNESS_PREFS_KEY, JSON.stringify(prefs))
  } catch (error) {
    console.error('Failed to save wellness preferences:', error)
  }
}

// Clear wellness preferences
export const clearWellnessPrefs = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(WELLNESS_PREFS_KEY)
  } catch (error) {
    console.error('Failed to clear wellness preferences:', error)
  }
}
