import { HealthMetric } from '../constants/wellnessMetrics'

// Normalization function for chart data
export interface NormalizedDataResult {
  normalizedData: any[]
  originalRanges: Record<string, { min: number; max: number }>
}

export const normalizeChartData = (
  data: any[],
  metrics: string[]
): NormalizedDataResult => {
  if (data.length === 0 || metrics.length === 0) {
    return { normalizedData: data, originalRanges: {} }
  }

  // Calculate min/max for each metric
  const ranges = metrics.reduce((acc, metric) => {
    const values = data.map(d => d[metric]).filter(v => v != null && !isNaN(v))
    if (values.length > 0) {
      acc[metric] = {
        min: Math.min(...values),
        max: Math.max(...values)
      }
    }
    return acc
  }, {} as Record<string, { min: number; max: number }>)

  // Normalize data
  const normalizedData = data.map(row => {
    const normalized = { ...row }
    metrics.forEach(metric => {
      if (row[metric] != null && !isNaN(row[metric]) && ranges[metric]) {
        const { min, max } = ranges[metric]
        if (max !== min) {
          normalized[metric] = ((row[metric] - min) / (max - min)) * 100
        } else {
          normalized[metric] = 50 // If all values are the same, normalize to middle
        }
      }
    })
    return normalized
  })

  return { normalizedData, originalRanges: ranges }
}

// Calculate summary statistics
export const calculateAverage = (data: HealthMetric[], key: string): number | null => {
  const validData = data.filter(d => d[key] && d[key] > 0)
  if (validData.length === 0) return null
  return Math.round(validData.reduce((sum, d) => sum + (d[key] || 0), 0) / validData.length)
}

// Calculate all summary stats for available metrics
export const calculateSummaryStats = (data: HealthMetric[]) => {
  if (data.length === 0) return null

  return {
    // Recovery & Sleep
    sleep_score: calculateAverage(data, 'sleep_score'),
    readiness_score: calculateAverage(data, 'readiness_score'),
    recovery_score: calculateAverage(data, 'recovery_score'),

    // Activity & Exercise
    activity_score: calculateAverage(data, 'activity_score'),
    total_steps: calculateAverage(data, 'total_steps'),
    calories_burned: calculateAverage(data, 'calories_burned'),
    exercise_minutes: calculateAverage(data, 'exercise_minutes'),
    active_energy: calculateAverage(data, 'active_energy'),
    distance: calculateAverage(data, 'distance'),

    // Vitals & Health Metrics
    resting_hr: calculateAverage(data, 'resting_hr'),
    hrv_avg: calculateAverage(data, 'hrv_avg'),
    body_temperature: calculateAverage(data, 'body_temperature'),
    blood_pressure_systolic: calculateAverage(data, 'blood_pressure_systolic'),
    blood_pressure_diastolic: calculateAverage(data, 'blood_pressure_diastolic'),
    oxygen_saturation: calculateAverage(data, 'oxygen_saturation'),

    // Wellness & Mental Health
    stress_level: calculateAverage(data, 'stress_level'),
    resilience_score: calculateAverage(data, 'resilience_score'),

    // Body Composition
    weight: calculateAverage(data, 'weight'),
    body_fat_percentage: calculateAverage(data, 'body_fat_percentage'),
    lean_body_mass: calculateAverage(data, 'lean_body_mass'),
    basal_metabolic_rate: calculateAverage(data, 'basal_metabolic_rate'),

    // Sleep Details
    time_in_bed: calculateAverage(data, 'time_in_bed'),
    time_asleep: calculateAverage(data, 'time_asleep'),
    light_sleep: calculateAverage(data, 'light_sleep'),
    deep_sleep: calculateAverage(data, 'deep_sleep'),
    rem_sleep: calculateAverage(data, 'rem_sleep'),

    // Blood Metrics
    blood_glucose: calculateAverage(data, 'blood_glucose'),

    // Fitness & Performance
    vo2_max: calculateAverage(data, 'vo2_max'),
    time_in_daylight: calculateAverage(data, 'time_in_daylight'),

    // Nutrition
    hydration: calculateAverage(data, 'hydration'),
    nutrition_calories: calculateAverage(data, 'nutrition_calories'),

    // Women's Health
    menstruation_flow: calculateAverage(data, 'menstruation_flow')
  }
}

// Prepare chart data from health metrics
export const prepareChartData = (healthData: HealthMetric[]) => {
  return healthData.map(d => ({
    date: new Date(d.date + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    // Recovery & Sleep scores
    sleep_score: (d.sleep_score && d.sleep_score > 0) ? d.sleep_score : null,
    readiness_score: (d.readiness_score && d.readiness_score > 0) ? d.readiness_score : null,
    recovery_score: (d.recovery_score && d.recovery_score > 0) ? d.recovery_score : null,

    // Activity metrics
    activity_score: (d.activity_score && d.activity_score > 0) ? d.activity_score : null,
    total_steps: (d.total_steps && d.total_steps > 0) ? d.total_steps : null,
    calories_burned: (d.calories_burned && d.calories_burned > 0) ? d.calories_burned : null,
    exercise_minutes: (d.exercise_minutes && d.exercise_minutes > 0) ? d.exercise_minutes : null,
    active_energy: (d.active_energy && d.active_energy > 0) ? d.active_energy : null,
    distance: (d.distance && d.distance > 0) ? d.distance : null,

    // Vitals
    resting_hr: (d.resting_hr && d.resting_hr > 0) ? d.resting_hr : null,
    hrv_avg: (d.hrv_avg && d.hrv_avg > 0) ? d.hrv_avg : null,
    body_temperature: (d.body_temperature && d.body_temperature > 0) ? d.body_temperature : null,
    blood_glucose: (d.blood_glucose && d.blood_glucose > 0) ? d.blood_glucose : null,
    blood_pressure_systolic: (d.blood_pressure_systolic && d.blood_pressure_systolic > 0) ? d.blood_pressure_systolic : null,
    blood_pressure_diastolic: (d.blood_pressure_diastolic && d.blood_pressure_diastolic > 0) ? d.blood_pressure_diastolic : null,
    oxygen_saturation: (d.oxygen_saturation && d.oxygen_saturation > 0) ? d.oxygen_saturation : null,
    respiratory_rate: (d.respiratory_rate && d.respiratory_rate > 0) ? d.respiratory_rate : null,

    // Wellness
    stress_level: (d.stress_level && d.stress_level > 0) ? d.stress_level : null,
    resilience_score: (d.resilience_score && d.resilience_score > 0) ? d.resilience_score : null,

    // Body composition
    weight: (d.weight && d.weight > 0) ? d.weight : null,
    height: (d.height && d.height > 0) ? d.height : null,
    body_fat_percentage: (d.body_fat_percentage && d.body_fat_percentage > 0) ? d.body_fat_percentage : null,
    basal_metabolic_rate: (d.basal_metabolic_rate && d.basal_metabolic_rate > 0) ? d.basal_metabolic_rate : null,
    lean_body_mass: (d.lean_body_mass && d.lean_body_mass > 0) ? d.lean_body_mass : null,

    // Sleep details
    time_in_bed: (d.time_in_bed && d.time_in_bed > 0) ? d.time_in_bed : null,
    time_asleep: (d.time_asleep && d.time_asleep > 0) ? d.time_asleep : null,
    awake_in_bed: (d.awake_in_bed && d.awake_in_bed > 0) ? d.awake_in_bed : null,
    light_sleep: (d.light_sleep && d.light_sleep > 0) ? d.light_sleep : null,
    deep_sleep: (d.deep_sleep && d.deep_sleep > 0) ? d.deep_sleep : null,
    rem_sleep: (d.rem_sleep && d.rem_sleep > 0) ? d.rem_sleep : null,

    // Fitness
    vo2_max: (d.vo2_max && d.vo2_max > 0) ? d.vo2_max : null,
    time_in_daylight: (d.time_in_daylight && d.time_in_daylight > 0) ? d.time_in_daylight : null,

    // Nutrition
    hydration: (d.hydration && d.hydration > 0) ? d.hydration : null,
    nutrition_calories: (d.nutrition_calories && d.nutrition_calories > 0) ? d.nutrition_calories : null,

    // Women's health
    menstruation_flow: (d.menstruation_flow && d.menstruation_flow > 0) ? d.menstruation_flow : null
  }))
}

// Format date for display
export const formatChartDate = (dateString: string): string => {
  const date = new Date(dateString + 'T12:00:00')
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

// Get date range for time range filter
export const getDateRange = (timeRange: string): { startDate: string | null; endDate: string } => {
  const today = new Date().toISOString().split('T')[0]

  if (timeRange === 'max') {
    return { startDate: null, endDate: today }
  }

  const daysBack = parseInt(timeRange)
  const startDate = new Date(Date.now() - daysBack * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  return { startDate, endDate: today }
}
