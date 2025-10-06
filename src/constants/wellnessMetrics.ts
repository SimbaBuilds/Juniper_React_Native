// TypeScript Interfaces
export interface HealthMetric {
  id: string
  user_id: string
  date: string
  sleep_score: number | null
  activity_score: number | null
  readiness_score: number | null
  stress_level: number | null
  recovery_score: number | null
  total_steps: number | null
  calories_burned: number | null
  resting_hr: number | null
  hrv_avg: number | null
  resilience_score: number | null
  exercise_minutes?: number | null
  active_energy?: number | null
  distance?: number | null
  body_temperature?: number | null
  blood_glucose?: number | null
  blood_pressure_systolic?: number | null
  blood_pressure_diastolic?: number | null
  oxygen_saturation?: number | null
  respiratory_rate?: number | null
  weight?: number | null
  height?: number | null
  body_fat_percentage?: number | null
  basal_metabolic_rate?: number | null
  lean_body_mass?: number | null
  time_in_bed?: number | null
  time_asleep?: number | null
  awake_in_bed?: number | null
  light_sleep?: number | null
  deep_sleep?: number | null
  rem_sleep?: number | null
  vo2_max?: number | null
  time_in_daylight?: number | null
  hydration?: number | null
  nutrition_calories?: number | null
  menstruation_flow?: number | null
  created_at: string
  updated_at: string
  native_scores: any
  normalized_scores: any
}

export interface ChartInstance {
  id: string
  name: string
  selectedMetrics: string[]
  isExpanded: boolean
  timeRange: string
  isNormalized: boolean
}

export interface MetricDefinition {
  key: string
  label: string
  group: string
  color: {
    light: string
    dark: string
  }
}

export interface FilterPrefs {
  showSummaryStats: boolean
  selectedSummaryCards: string[]
  summaryTimeRange: string
  trendCharts: ChartInstance[]
}

// Define all available metrics with their configuration
export const AVAILABLE_METRICS: MetricDefinition[] = [
  // Recovery & Sleep
  {
    key: 'sleep_score',
    label: 'Sleep Score',
    group: 'Recovery',
    color: { light: '#1e40af', dark: '#60a5fa' }
  },
  {
    key: 'readiness_score',
    label: 'Readiness Score',
    group: 'Recovery',
    color: { light: '#f59e0b', dark: '#fbbf24' }
  },
  {
    key: 'recovery_score',
    label: 'Recovery Score',
    group: 'Recovery',
    color: { light: '#059669', dark: '#10b981' }
  },

  // Activity & Exercise
  {
    key: 'activity_score',
    label: 'Activity Score',
    group: 'Activity',
    color: { light: '#166534', dark: '#bbf7d0' }
  },
  {
    key: 'total_steps',
    label: 'Total Steps',
    group: 'Activity',
    color: { light: '#7c3aed', dark: '#8b5cf6' }
  },
  {
    key: 'calories_burned',
    label: 'Calories Burned',
    group: 'Activity',
    color: { light: '#dc2626', dark: '#ef4444' }
  },
  {
    key: 'exercise_minutes',
    label: 'Exercise Minutes',
    group: 'Activity',
    color: { light: '#16a34a', dark: '#4ade80' }
  },
  {
    key: 'active_energy',
    label: 'Active Energy',
    group: 'Activity',
    color: { light: '#ea580c', dark: '#fb923c' }
  },
  {
    key: 'distance',
    label: 'Distance',
    group: 'Activity',
    color: { light: '#9333ea', dark: '#c084fc' }
  },

  // Vitals & Health Metrics
  {
    key: 'resting_hr',
    label: 'Resting Heart Rate',
    group: 'Vitals',
    color: { light: '#8b5cf6', dark: '#a78bfa' }
  },
  {
    key: 'hrv_avg',
    label: 'HRV Average',
    group: 'Vitals',
    color: { light: '#ec4899', dark: '#fb7185' }
  },
  {
    key: 'body_temperature',
    label: 'Body Temperature',
    group: 'Vitals',
    color: { light: '#dc2626', dark: '#f87171' }
  },
  {
    key: 'blood_glucose',
    label: 'Blood Glucose',
    group: 'Vitals',
    color: { light: '#c2410c', dark: '#fb923c' }
  },
  {
    key: 'blood_pressure_systolic',
    label: 'Blood Pressure (Systolic)',
    group: 'Vitals',
    color: { light: '#b91c1c', dark: '#ef4444' }
  },
  {
    key: 'blood_pressure_diastolic',
    label: 'Blood Pressure (Diastolic)',
    group: 'Vitals',
    color: { light: '#991b1b', dark: '#dc2626' }
  },
  {
    key: 'oxygen_saturation',
    label: 'Oxygen Saturation',
    group: 'Vitals',
    color: { light: '#0ea5e9', dark: '#38bdf8' }
  },
  {
    key: 'respiratory_rate',
    label: 'Respiratory Rate',
    group: 'Vitals',
    color: { light: '#0284c7', dark: '#0ea5e9' }
  },

  // Wellness & Mental Health
  {
    key: 'stress_level',
    label: 'Stress Level',
    group: 'Wellness',
    color: { light: '#ef4444', dark: '#f87171' }
  },
  {
    key: 'resilience_score',
    label: 'Resilience Score',
    group: 'Wellness',
    color: { light: '#0891b2', dark: '#0ea5e9' }
  },

  // Body Composition
  {
    key: 'weight',
    label: 'Weight',
    group: 'Body Composition',
    color: { light: '#7c2d12', dark: '#f97316' }
  },
  {
    key: 'height',
    label: 'Height',
    group: 'Body Composition',
    color: { light: '#854d0e', dark: '#eab308' }
  },
  {
    key: 'body_fat_percentage',
    label: 'Body Fat Percentage',
    group: 'Body Composition',
    color: { light: '#a16207', dark: '#fbbf24' }
  },
  {
    key: 'basal_metabolic_rate',
    label: 'Basal Metabolic Rate',
    group: 'Body Composition',
    color: { light: '#92400e', dark: '#f59e0b' }
  },
  {
    key: 'lean_body_mass',
    label: 'Lean Body Mass',
    group: 'Body Composition',
    color: { light: '#065f46', dark: '#10b981' }
  },

  // Sleep Details
  {
    key: 'time_in_bed',
    label: 'Time in Bed',
    group: 'Sleep',
    color: { light: '#1e3a8a', dark: '#3b82f6' }
  },
  {
    key: 'time_asleep',
    label: 'Time Asleep',
    group: 'Sleep',
    color: { light: '#1e40af', dark: '#60a5fa' }
  },
  {
    key: 'awake_in_bed',
    label: 'Awake in Bed',
    group: 'Sleep',
    color: { light: '#1d4ed8', dark: '#6366f1' }
  },
  {
    key: 'light_sleep',
    label: 'Light Sleep',
    group: 'Sleep',
    color: { light: '#2563eb', dark: '#8b5cf6' }
  },
  {
    key: 'deep_sleep',
    label: 'Deep Sleep',
    group: 'Sleep',
    color: { light: '#3730a3', dark: '#7c3aed' }
  },
  {
    key: 'rem_sleep',
    label: 'REM Sleep',
    group: 'Sleep',
    color: { light: '#581c87', dark: '#a855f7' }
  },

  // Fitness & Performance
  {
    key: 'vo2_max',
    label: 'VO2 Max',
    group: 'Fitness',
    color: { light: '#be123c', dark: '#f43f5e' }
  },
  {
    key: 'time_in_daylight',
    label: 'Time in Daylight',
    group: 'Fitness',
    color: { light: '#ca8a04', dark: '#facc15' }
  },

  // Nutrition & Hydration
  {
    key: 'hydration',
    label: 'Hydration',
    group: 'Nutrition',
    color: { light: '#0369a1', dark: '#0ea5e9' }
  },
  {
    key: 'nutrition_calories',
    label: 'Nutrition Calories',
    group: 'Nutrition',
    color: { light: '#c2410c', dark: '#f97316' }
  },

  // Women's Health
  {
    key: 'menstruation_flow',
    label: 'Menstruation Flow',
    group: "Women's Health",
    color: { light: '#be185d', dark: '#ec4899' }
  }
]

// Metric presets for quick selection
export const METRIC_PRESETS: Record<string, string[]> = {
  vitals: ['resting_hr', 'hrv_avg', 'body_temperature', 'blood_pressure_systolic', 'oxygen_saturation'],
  activity: ['activity_score', 'total_steps', 'calories_burned', 'exercise_minutes', 'active_energy', 'distance'],
  recovery: ['sleep_score', 'readiness_score', 'recovery_score'],
  wellness: ['stress_level', 'resilience_score'],
  sleep: ['time_in_bed', 'time_asleep', 'light_sleep', 'deep_sleep', 'rem_sleep'],
  body: ['weight', 'body_fat_percentage', 'lean_body_mass', 'basal_metabolic_rate'],
  blood: ['blood_glucose', 'blood_pressure_systolic', 'blood_pressure_diastolic'],
  fitness: ['vo2_max', 'time_in_daylight'],
  nutrition: ['hydration', 'nutrition_calories'],
  all: AVAILABLE_METRICS.map(m => m.key)
}

// Helper function to get metric definition by key
export const getMetricDefinition = (key: string): MetricDefinition | undefined => {
  return AVAILABLE_METRICS.find(m => m.key === key)
}

// Helper function to get metric color
export const getMetricColor = (metricKey: string, isDark: boolean): string => {
  const metric = AVAILABLE_METRICS.find(m => m.key === metricKey)
  return metric ? (isDark ? metric.color.dark : metric.color.light) : '#999'
}

// Helper function to get metric unit
export const getMetricUnit = (key: string): string => {
  const units: Record<string, string> = {
    total_steps: 'per day',
    resting_hr: 'bpm',
    hrv_avg: 'ms',
    calories_burned: 'kcal',
    active_energy: 'kcal',
    nutrition_calories: 'kcal',
    exercise_minutes: 'min',
    distance: 'km',
    body_temperature: '°F',
    blood_pressure_systolic: 'mmHg',
    blood_pressure_diastolic: 'mmHg',
    oxygen_saturation: '%',
    weight: 'lbs',
    body_fat_percentage: '%',
    lean_body_mass: 'lbs',
    basal_metabolic_rate: 'kcal/day',
    time_in_bed: 'hours',
    time_asleep: 'hours',
    light_sleep: 'hours',
    deep_sleep: 'hours',
    rem_sleep: 'hours',
    blood_glucose: 'mg/dL',
    vo2_max: 'ml/kg/min',
    time_in_daylight: 'hours',
    hydration: 'ml',
    menstruation_flow: 'level'
  }

  if (key.includes('score')) return '/100'
  return units[key] || ''
}

// Helper function to get metric tooltip/description
export const getMetricTooltip = (key: string): string => {
  const tooltips: Record<string, string> = {
    sleep_score: 'Your sleep quality score based on duration, efficiency, and sleep stages.',
    activity_score: 'Your daily activity level based on movement and exercise.',
    resilience_score: "Your body's ability to handle stress and recover.",
    readiness_score: 'Your readiness for physical and mental challenges.',
    recovery_score: 'Your recovery status from previous activities.',
    total_steps: 'Your average daily step count.',
    calories_burned: 'Average calories burned per day.',
    exercise_minutes: 'Average exercise minutes per day.',
    active_energy: 'Average active energy expenditure per day.',
    distance: 'Average distance covered per day.',
    resting_hr: 'Your resting heart rate during sleep or rest.',
    hrv_avg: 'Heart Rate Variability - higher is typically better.',
    body_temperature: 'Your average body temperature.',
    blood_pressure_systolic: 'Systolic blood pressure (pressure when heart beats).',
    blood_pressure_diastolic: 'Diastolic blood pressure (pressure when heart rests).',
    oxygen_saturation: 'Blood oxygen saturation level.',
    stress_level: 'Your stress level based on physiological markers.',
    weight: 'Your average body weight.',
    body_fat_percentage: 'Your body fat percentage.',
    lean_body_mass: 'Your lean body mass (muscle, bones, organs).',
    basal_metabolic_rate: 'Calories burned at rest per day.',
    time_in_bed: 'Average time spent in bed per night.',
    time_asleep: 'Average actual sleep time per night.',
    light_sleep: 'Average light sleep duration per night.',
    deep_sleep: 'Average deep sleep duration per night.',
    rem_sleep: 'Average REM sleep duration per night.',
    blood_glucose: 'Average blood glucose level.',
    vo2_max: 'Maximum oxygen consumption during exercise.',
    time_in_daylight: 'Average time spent in daylight per day.',
    hydration: 'Average daily water intake.',
    nutrition_calories: 'Average calories consumed per day.',
    menstruation_flow: 'Menstruation flow intensity level.'
  }

  return tooltips[key] || 'Health metric average for selected period.'
}

// Group metrics by category
export const getGroupedMetrics = (): Record<string, MetricDefinition[]> => {
  return AVAILABLE_METRICS.reduce((acc, metric) => {
    if (!acc[metric.group]) acc[metric.group] = []
    acc[metric.group].push(metric)
    return acc
  }, {} as Record<string, MetricDefinition[]>)
}
