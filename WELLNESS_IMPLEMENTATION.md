# Wellness Screen Implementation

This document describes the implementation of the Wellness Screen feature for the React Native app, ported from the web version.

## Overview

The Wellness Screen provides users with health metrics visualization through:
- **Summary Cards**: Configurable metric cards showing averages over selected time ranges
- **Trend Charts**: Multiple customizable line charts with metric selection, normalization, and time range controls
- **Persistent Preferences**: User preferences saved locally via AsyncStorage
- **Dark Mode Support**: Full dark/light theme support

## File Structure

```
src/
├── constants/
│   └── wellnessMetrics.ts          # Metric definitions, presets, and helpers
├── utils/
│   ├── wellnessData.ts             # Data normalization and calculation functions
│   └── wellnessStorage.ts          # AsyncStorage wrapper for preferences
├── components/
│   └── wellness/
│       ├── index.ts                # Component exports
│       ├── MetricsSelector.tsx     # Multi-select metric picker component
│       ├── SummaryCard.tsx         # Individual summary card component
│       └── TrendChart.tsx          # Trend chart with controls component
└── WellnessScreen.tsx              # Main screen component
```

## Key Features

### 1. Summary Section

Displays configurable summary cards showing metric averages:
- **Time Range Selection**: 7 days, 30 days, 90 days, 1 year, or max
- **Metric Selection**: Choose which metrics to display via MetricsSelector
- **Quick Presets**: Vitals, Activity, Recovery, Wellness, Sleep, Body, Blood, Fitness, Nutrition
- **Responsive Grid**: 2-column grid layout that adapts to screen size

### 2. Trend Charts

Multiple chart instances with individual configurations:
- **Editable Chart Names**: Tap to rename any chart
- **Multi-Metric Selection**: Display multiple metrics on the same chart
- **Independent Time Ranges**: Each chart has its own time range setting
- **Normalization**: Toggle to scale all metrics to 0-100 for easy comparison
- **Expand/Collapse**: Show or hide chart details
- **Add/Remove Charts**: Create multiple charts, minimum of 1 required

### 3. Data Management

- **Supabase Integration**: Fetches data from `health_metrics_daily` table
- **Optimized Fetching**: Deduplicates time range requests across charts
- **Pull-to-Refresh**: Swipe down to reload data
- **Local Caching**: Preferences saved to AsyncStorage automatically

## Components

### MetricsSelector

Reusable component for metric selection with three modes:

```typescript
<MetricsSelector
  selectedMetrics={['sleep_score', 'activity_score']}
  onSelectionChange={(metrics) => console.log(metrics)}
  mode="trends" // 'manual-entry' | 'summary-cards' | 'trends'
  isDarkMode={isDarkMode}
/>
```

**Features:**
- Preset buttons for quick selection
- Searchable modal with grouped metrics
- Selected metrics display with badges (trends mode)
- 40+ metrics organized by category

### SummaryCard

Individual metric summary card:

```typescript
<SummaryCard
  metricKey="sleep_score"
  label="Sleep Score"
  value={85}
  icon="🌙"
  isDarkMode={isDarkMode}
/>
```

**Features:**
- Automatic unit display
- Tooltip with metric description
- Responsive sizing
- Dark mode support

### TrendChart

Chart component with full controls:

```typescript
<TrendChart
  chart={chartInstance}
  chartData={preparedData}
  isDarkMode={isDarkMode}
  onUpdateChart={(id, updates) => handleUpdate(id, updates)}
  onRemoveChart={(id) => handleRemove(id)}
  canRemove={true}
/>
```

**Features:**
- Victory-native line charts
- Custom tooltips showing original and normalized values
- Metric color-coding
- Responsive width

## Data Flow

### 1. Initialization
```
User opens screen
  → Load user from Supabase auth
  → Load preferences from AsyncStorage
  → Fetch initial health data
```

### 2. Summary Data
```
User changes summary time range
  → Fetch health data for time range
  → Calculate averages for all metrics
  → Render selected summary cards
```

### 3. Chart Data
```
User changes chart time range or adds chart
  → Identify unique time ranges across all charts
  → Fetch data for each unique time range (avoid duplicates)
  → Map data to each chart by its time range
  → Prepare and normalize data if needed
  → Render charts
```

### 4. Preferences
```
User changes any preference
  → Update state
  → Auto-save to AsyncStorage
```

## Metrics

### Available Metrics (40+)

Organized into 9 categories:
- **Recovery**: Sleep Score, Readiness Score, Recovery Score
- **Activity**: Activity Score, Steps, Calories, Exercise Minutes, etc.
- **Vitals**: Heart Rate, HRV, Blood Pressure, Oxygen Saturation, etc.
- **Wellness**: Stress Level, Resilience Score
- **Body Composition**: Weight, Body Fat %, Lean Mass, BMR
- **Sleep**: Time in Bed, Sleep Stages (Light, Deep, REM)
- **Fitness**: VO2 Max, Time in Daylight
- **Nutrition**: Hydration, Calories
- **Women's Health**: Menstruation Flow

### Metric Presets

Quick-select presets for common use cases:
```typescript
METRIC_PRESETS = {
  vitals: ['resting_hr', 'hrv_avg', 'body_temperature', ...],
  activity: ['activity_score', 'total_steps', 'calories_burned', ...],
  recovery: ['sleep_score', 'readiness_score', 'recovery_score'],
  // ... and more
}
```

## Styling

All components support dark mode and follow consistent styling:
- **Colors**: Automatic switching between light/dark variants
- **Spacing**: Consistent padding and margins
- **Typography**: Clear hierarchy with appropriate font sizes
- **Shadows**: Subtle elevation for depth
- **Accessibility**: Proper contrast ratios

## Usage

### Adding to Navigation

```typescript
import WellnessScreen from './src/WellnessScreen'

// Add to your navigation stack
<Stack.Screen
  name="Wellness"
  component={WellnessScreen}
  options={{ title: 'Wellness Dashboard' }}
/>
```

### Database Schema

Requires a `health_metrics_daily` table with:
```sql
- user_id: UUID (foreign key to auth.users)
- date: DATE
- sleep_score: INTEGER
- activity_score: INTEGER
- readiness_score: INTEGER
- stress_level: INTEGER
- recovery_score: INTEGER
- total_steps: INTEGER
- calories_burned: INTEGER
- resting_hr: INTEGER
- hrv_avg: INTEGER
- resilience_score: INTEGER
- ... (40+ metric columns)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP
- native_scores: JSONB
- normalized_scores: JSONB
```

## Dependencies

New dependencies added:
- `victory-native@^41.20.1`: For charting

Existing dependencies used:
- `@react-native-async-storage/async-storage`: For local storage
- `@supabase/supabase-js`: For data fetching
- `react-native-svg`: For chart rendering (victory-native dependency)

## Performance Considerations

1. **Data Fetching Optimization**:
   - Deduplicates time range requests
   - Only fetches when time range changes

2. **Memoization**:
   - Chart data preparation is done once per data change
   - Avoids unnecessary re-renders

3. **Lazy Loading**:
   - Charts can be collapsed to reduce rendering load
   - Only expanded charts render chart components

## Future Enhancements

Potential improvements:
- [ ] Add export functionality (CSV, PDF)
- [ ] Add manual data entry
- [ ] Integration support modal
- [ ] Offline mode with cache
- [ ] Data sharing/comparisons
- [ ] Goal setting and tracking
- [ ] Insights and recommendations

## Testing

To test the implementation:

1. Ensure you have health data in the `health_metrics_daily` table
2. Run the app: `npm run ios` or `npm run android`
3. Navigate to the Wellness screen
4. Test features:
   - Change time ranges for summary and charts
   - Add/remove/rename charts
   - Select different metrics
   - Toggle normalization
   - Test dark mode
   - Test pull-to-refresh

## Troubleshooting

### Charts not displaying
- Check that data exists for the selected time range
- Verify metrics are selected for the chart
- Check console for data fetching errors

### Preferences not saving
- Ensure AsyncStorage is properly configured
- Check for errors in console
- Verify write permissions

### Dark mode not working
- Ensure device/simulator is set to dark mode
- Check `useColorScheme()` is supported on your platform

## Credits

Ported from the web version with adaptations for React Native platform and native UI patterns.
