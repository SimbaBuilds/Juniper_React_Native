import { Platform } from 'react-native';
import {
  initialize,
  requestPermission,
  readRecords,
  getSdkStatus,
  HealthConnectRecord,
  TimeRangeFilter,
  SdkAvailabilityStatus
} from 'react-native-health-connect';
import { supabase } from '../../supabase/supabase';

export interface GoogleHealthData {
  active_calories_burned?: number;
  basal_metabolic_rate?: number;
  blood_glucose?: number;
  blood_pressure_systolic?: number;
  blood_pressure_diastolic?: number;
  body_fat?: number;
  body_temperature?: number;
  distance?: number;
  exercise_minutes?: number;
  heart_rate?: number;
  height?: number;
  hydration?: number;
  menstruation_flow?: number;
  nutrition_calories?: number;
  oxygen_saturation?: number;
  respiratory_rate?: number;
  resting_heart_rate?: number;
  sleep_hours?: number;
  steps?: number;
  weight?: number;
}

export interface WearablesDataRecord {
  user_id: string;
  integration_id: string;
  metric_type: string;
  metric_value: Record<string, any>;
  recorded_at: string;
  sync_date: string;
}

/**
 * Google Health Connect Data Service
 * Handles fetching health data from Google Health Connect on Android
 * 
 * Note: This implementation assumes a native Android module exists
 * that interfaces with Google Health Connect APIs
 */
export class GoogleHealthConnectDataService {
  private static instance: GoogleHealthConnectDataService;

  private constructor() {}

  static getInstance(): GoogleHealthConnectDataService {
    if (!GoogleHealthConnectDataService.instance) {
      GoogleHealthConnectDataService.instance = new GoogleHealthConnectDataService();
    }
    return GoogleHealthConnectDataService.instance;
  }

  /**
   * Get current realtime health data for syncing to database
   * DEPRECATED: Use syncToWearablesData instead for better data management
   */
  async getCurrentRealtimeData(integrationId: string): Promise<Record<string, any>> {
    if (Platform.OS !== 'android') {
      throw new Error('Google Health Connect is only available on Android');
    }

    console.log('🤖 GoogleHealthConnectDataService: Fetching current realtime data');

    try {
      // Initialize Health Connect client
      try {
        await initialize();
        console.log('🤖 Health Connect client initialized successfully');
      } catch (error) {
        console.error('🤖 Failed to initialize Health Connect client:', error);
        throw error;
      }

      // Get today's date range (local timezone)
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      todayStart.setMilliseconds(0);

      const todayEnd = new Date();

      console.log('🤖 DETAILED LOGGING: Getting 7 days of data for wearables_data integration');
      console.log('🤖 Date range for detailed analysis:', {
        startDate: todayStart.toISOString(),
        endDate: todayEnd.toISOString(),
        daysDifference: (todayEnd.getTime() - todayStart.getTime()) / (1000 * 60 * 60 * 24)
      });

      // Get 7 days of data for detailed analysis
      // const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      // await this.getDetailedMetricsForDays(integrationId, sevenDaysAgo, todayEnd);

      const realtimeData: Record<string, any> = {};

      // Fetch vital signs
      console.log('🤖 GoogleHealthConnectDataService: Fetching vital signs...');
      const vitals = await this.getVitalSigns(integrationId);
      console.log('🤖 GoogleHealthConnectDataService: Vitals retrieved:', vitals);
      
      if (vitals.heart_rate) realtimeData.heart_rate = vitals.heart_rate;
      if (vitals.resting_heart_rate) realtimeData.resting_heart_rate = vitals.resting_heart_rate;
      if (vitals.blood_pressure_systolic) realtimeData.blood_pressure_systolic = vitals.blood_pressure_systolic;
      if (vitals.blood_pressure_diastolic) realtimeData.blood_pressure_diastolic = vitals.blood_pressure_diastolic;
      if (vitals.oxygen_saturation) realtimeData.oxygen_saturation = vitals.oxygen_saturation;
      if (vitals.respiratory_rate) realtimeData.respiratory_rate = vitals.respiratory_rate;
      if (vitals.body_temperature) realtimeData.body_temperature = vitals.body_temperature;

      // Fetch activity data
      console.log('🤖 GoogleHealthConnectDataService: Fetching activity data...');
      const activity = await this.getActivityData(integrationId, todayStart, todayEnd);
      console.log('🤖 GoogleHealthConnectDataService: Activity retrieved:', activity);
      
      if (activity.steps) realtimeData.steps = activity.steps;
      if (activity.distance) realtimeData.distance = activity.distance;
      if (activity.active_calories_burned) realtimeData.active_calories_burned = activity.active_calories_burned;
      if (activity.exercise_minutes) realtimeData.exercise_minutes = activity.exercise_minutes;

      // Fetch body measurements
      console.log('🤖 GoogleHealthConnectDataService: Fetching body measurements...');
      const body = await this.getBodyMeasurements(integrationId);
      console.log('🤖 GoogleHealthConnectDataService: Body measurements retrieved:', body);
      
      if (body.weight) realtimeData.weight = body.weight;
      if (body.height) realtimeData.height = body.height;
      if (body.body_fat) realtimeData.body_fat = body.body_fat;

      // Fetch nutrition data
      console.log('🤖 GoogleHealthConnectDataService: Fetching nutrition data...');
      const nutrition = await this.getNutritionData(integrationId, todayStart, todayEnd);
      console.log('🤖 GoogleHealthConnectDataService: Nutrition retrieved:', nutrition);
      
      if (nutrition.nutrition_calories) realtimeData.nutrition_calories = nutrition.nutrition_calories;
      if (nutrition.hydration) realtimeData.hydration = nutrition.hydration;

      // Fetch sleep data
      console.log('🤖 GoogleHealthConnectDataService: Fetching sleep data...');
      const sleep = await this.getSleepData(integrationId, todayStart, todayEnd);
      console.log('🤖 GoogleHealthConnectDataService: Sleep retrieved:', sleep);
      
      if (sleep.sleep_hours) realtimeData.sleep_hours = sleep.sleep_hours;

      // Fetch other metrics
      console.log('🤖 GoogleHealthConnectDataService: Fetching other metrics...');
      const other = await this.getOtherMetrics(integrationId);
      console.log('🤖 GoogleHealthConnectDataService: Other metrics retrieved:', other);
      
      if (other.blood_glucose) realtimeData.blood_glucose = other.blood_glucose;
      if (other.basal_metabolic_rate) realtimeData.basal_metabolic_rate = other.basal_metabolic_rate;

      // Set sync timestamp
      realtimeData.last_sync_at = new Date();

      console.log('🤖 GoogleHealthConnectDataService: Retrieved realtime data keys:', Object.keys(realtimeData));
      console.log('🤖 GoogleHealthConnectDataService: Retrieved realtime data values:', realtimeData);
      
      return realtimeData;

    } catch (error) {
      console.error('🤖 GoogleHealthConnectDataService: Error fetching realtime data:', error);
      throw error;
    }
  }

  /**
   * Sync health data to wearables_data table with 7-day backfill
   */
  async syncToWearablesData(userId: string, integrationId: string, daysToSync: number = 7): Promise<void> {
    if (Platform.OS !== 'android') {
      throw new Error('Google Health Connect is only available on Android');
    }

    console.log('🤖 GoogleHealthConnectDataService: Starting wearables_data sync');
    console.log(`🤖 Syncing ${daysToSync} days of data for user ${userId}, integration ${integrationId}`);

    try {
      // Initialize Health Connect client
      try {
        await initialize();
        console.log('🤖 Health Connect client initialized successfully for wearables sync');
      } catch (error) {
        console.error('🤖 Failed to initialize Health Connect client for wearables sync:', error);
        throw error;
      }

      // Calculate date range for sync
      const endDate = new Date();
      const startDate = new Date();
      startDate.setDate(endDate.getDate() - daysToSync);
      startDate.setHours(0, 0, 0, 0);

      console.log(`🤖 Syncing data from ${startDate.toISOString()} to ${endDate.toISOString()}`);

      const allRecords: WearablesDataRecord[] = [];

      // Sync different metric types
      const heartRateRecords = await this.syncHeartRateData(userId, integrationId, startDate, endDate);
      allRecords.push(...heartRateRecords);

      const activityRecords = await this.syncActivityData(userId, integrationId, startDate, endDate);
      allRecords.push(...activityRecords);

      const sleepRecords = await this.syncSleepData(userId, integrationId, startDate, endDate);
      allRecords.push(...sleepRecords);

      const bodyRecords = await this.syncBodyMeasurements(userId, integrationId, startDate, endDate);
      allRecords.push(...bodyRecords);

      const nutritionRecords = await this.syncNutritionData(userId, integrationId, startDate, endDate);
      allRecords.push(...nutritionRecords);

      const vitalRecords = await this.syncVitalSigns(userId, integrationId, startDate, endDate);
      allRecords.push(...vitalRecords);

      console.log(`🤖 Total records to sync: ${allRecords.length}`);

      // Batch insert records with duplicate prevention
      if (allRecords.length > 0) {
        await this.batchInsertWearablesData(allRecords);
      }

      console.log('✅ Wearables data sync completed successfully');

    } catch (error) {
      console.error('🤖 Error during wearables data sync:', error);
      throw error;
    }
  }

  /**
   * Sync heart rate data (hourly samples)
   */
  private async syncHeartRateData(userId: string, integrationId: string, startDate: Date, endDate: Date): Promise<WearablesDataRecord[]> {
    console.log('🤖 Syncing heart rate data...');
    const records: WearablesDataRecord[] = [];

    try {
      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
      };

      const heartRateRecords = await this.readHealthConnectRecords('HeartRate', timeRangeFilter);

      if (heartRateRecords && heartRateRecords.length > 0) {
        // Group by hour and take average
        const hourlyData = this.groupRecordsByHour(heartRateRecords, 'beatsPerMinute');

        for (const [hourKey, samples] of Object.entries(hourlyData)) {
          if (samples.length > 0) {
            const avgBpm = samples.reduce((sum, val) => sum + val.value, 0) / samples.length;
            const timestamp = new Date(hourKey);

            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'heart_rate',
              metric_value: {
                bpm: Math.round(avgBpm),
                source: samples[0].source,
                sample_count: samples.length,
                min_bpm: Math.min(...samples.map(s => s.value)),
                max_bpm: Math.max(...samples.map(s => s.value)),
                timestamp: timestamp.toISOString()
              },
              recorded_at: timestamp.toISOString(),
              sync_date: timestamp.toISOString().split('T')[0]
            });
          }
        }
      }

      console.log(`🤖 Created ${records.length} heart rate records`);
    } catch (error) {
      console.warn('🤖 Error syncing heart rate data:', error);
    }

    return records;
  }

  /**
   * Sync activity data (daily aggregates)
   */
  private async syncActivityData(userId: string, integrationId: string, startDate: Date, endDate: Date): Promise<WearablesDataRecord[]> {
    console.log('🤖 Syncing activity data...');
    const records: WearablesDataRecord[] = [];

    try {
      // Group by day for activity data
      const days = this.getDaysInRange(startDate, endDate);

      for (const day of days) {
        const dayStart = new Date(day);
        dayStart.setHours(0, 0, 0, 0);
        const dayEnd = new Date(day);
        dayEnd.setHours(23, 59, 59, 999);

        const timeRangeFilter: TimeRangeFilter = {
          operator: 'between',
          startTime: dayStart.toISOString(),
          endTime: dayEnd.toISOString(),
        };

        // Steps
        const stepsRecords = await this.readHealthConnectRecords('Steps', timeRangeFilter);
        if (stepsRecords && stepsRecords.length > 0) {
          const totalSteps = stepsRecords.reduce((sum, record: any) => sum + (record.count || 0), 0);
          if (totalSteps > 0) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'steps',
              metric_value: {
                count: totalSteps,
                source: this.getMostCommonSource(stepsRecords),
                timestamp: dayStart.toISOString()
              },
              recorded_at: dayStart.toISOString(),
              sync_date: dayStart.toISOString().split('T')[0]
            });
          }
        }

        // Distance
        const distanceRecords = await this.readHealthConnectRecords('Distance', timeRangeFilter);
        if (distanceRecords && distanceRecords.length > 0) {
          const totalDistance = distanceRecords.reduce((sum, record: any) => {
            const distance = record.distance?.inMeters || record.distance || 0;
            return sum + distance;
          }, 0);
          if (totalDistance > 0) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'distance',
              metric_value: {
                meters: totalDistance,
                source: this.getMostCommonSource(distanceRecords),
                timestamp: dayStart.toISOString()
              },
              recorded_at: dayStart.toISOString(),
              sync_date: dayStart.toISOString().split('T')[0]
            });
          }
        }

        // Active calories
        const caloriesRecords = await this.readHealthConnectRecords('ActiveCaloriesBurned', timeRangeFilter);
        if (caloriesRecords && caloriesRecords.length > 0) {
          const totalCalories = caloriesRecords.reduce((sum, record: any) => {
            const energy = record.energy?.inCalories || record.energy || 0;
            return sum + energy;
          }, 0);
          if (totalCalories > 0) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'active_calories',
              metric_value: {
                calories: totalCalories,
                source: this.getMostCommonSource(caloriesRecords),
                timestamp: dayStart.toISOString()
              },
              recorded_at: dayStart.toISOString(),
              sync_date: dayStart.toISOString().split('T')[0]
            });
          }
        }

        // Exercise sessions
        const exerciseRecords = await this.readHealthConnectRecords('ExerciseSession', timeRangeFilter);
        if (exerciseRecords && exerciseRecords.length > 0) {
          const totalMinutes = exerciseRecords.reduce((sum, record: any) => {
            if (record.startTime && record.endTime) {
              const duration = new Date(record.endTime).getTime() - new Date(record.startTime).getTime();
              return sum + (duration / (1000 * 60));
            }
            return sum;
          }, 0);
          if (totalMinutes > 0) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'exercise',
              metric_value: {
                minutes: Math.round(totalMinutes),
                sessions: exerciseRecords.length,
                source: this.getMostCommonSource(exerciseRecords),
                timestamp: dayStart.toISOString()
              },
              recorded_at: dayStart.toISOString(),
              sync_date: dayStart.toISOString().split('T')[0]
            });
          }
        }
      }

      console.log(`🤖 Created ${records.length} activity records`);
    } catch (error) {
      console.warn('🤖 Error syncing activity data:', error);
    }

    return records;
  }

  /**
   * Sync sleep data (daily sessions)
   */
  private async syncSleepData(userId: string, integrationId: string, startDate: Date, endDate: Date): Promise<WearablesDataRecord[]> {
    console.log('🤖 Syncing sleep data...');
    const records: WearablesDataRecord[] = [];

    try {
      // Extend range slightly for sleep that spans multiple days
      const extendedStart = new Date(startDate);
      extendedStart.setDate(extendedStart.getDate() - 1);

      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: extendedStart.toISOString(),
        endTime: endDate.toISOString(),
      };

      const sleepRecords = await this.readHealthConnectRecords('SleepSession', timeRangeFilter);

      if (sleepRecords && sleepRecords.length > 0) {
        for (const record of sleepRecords) {
          if ((record as any).startTime && (record as any).endTime) {
            const startTime = new Date((record as any).startTime);
            const endTime = new Date((record as any).endTime);
            const duration = endTime.getTime() - startTime.getTime();
            const hours = duration / (1000 * 60 * 60);

            // Only include if sleep ended within our date range
            if (endTime >= startDate && endTime <= endDate) {
              records.push({
                user_id: userId,
                integration_id: integrationId,
                metric_type: 'sleep',
                metric_value: {
                  hours: Math.round(hours * 100) / 100,
                  start_time: startTime.toISOString(),
                  end_time: endTime.toISOString(),
                  source: (record as any).metadata?.dataOrigin || 'unknown',
                  timestamp: endTime.toISOString()
                },
                recorded_at: endTime.toISOString(),
                sync_date: endTime.toISOString().split('T')[0]
              });
            }
          }
        }
      }

      console.log(`🤖 Created ${records.length} sleep records`);
    } catch (error) {
      console.warn('🤖 Error syncing sleep data:', error);
    }

    return records;
  }

  /**
   * Sync body measurements (most recent values)
   */
  private async syncBodyMeasurements(userId: string, integrationId: string, startDate: Date, endDate: Date): Promise<WearablesDataRecord[]> {
    console.log('🤖 Syncing body measurements...');
    const records: WearablesDataRecord[] = [];

    try {
      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
      };

      // Weight
      const weightRecords = await this.readHealthConnectRecords('Weight', timeRangeFilter);
      if (weightRecords && weightRecords.length > 0) {
        const mostRecent = weightRecords.sort((a: any, b: any) =>
          new Date(b.time || b.startTime).getTime() - new Date(a.time || a.startTime).getTime()
        )[0] as any;

        if (mostRecent.weight) {
          const weight = mostRecent.weight.inKilograms || mostRecent.weight;
          const timestamp = new Date(mostRecent.time || mostRecent.startTime);

          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'weight',
            metric_value: {
              kg: weight,
              source: mostRecent.metadata?.dataOrigin || 'unknown',
              timestamp: timestamp.toISOString()
            },
            recorded_at: timestamp.toISOString(),
            sync_date: timestamp.toISOString().split('T')[0]
          });
        }
      }

      // Height
      const heightRecords = await this.readHealthConnectRecords('Height', timeRangeFilter);
      if (heightRecords && heightRecords.length > 0) {
        const mostRecent = heightRecords.sort((a: any, b: any) =>
          new Date(b.time || b.startTime).getTime() - new Date(a.time || a.startTime).getTime()
        )[0] as any;

        if (mostRecent.height) {
          const height = mostRecent.height.inMeters || mostRecent.height;
          const timestamp = new Date(mostRecent.time || mostRecent.startTime);

          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'height',
            metric_value: {
              meters: height,
              source: mostRecent.metadata?.dataOrigin || 'unknown',
              timestamp: timestamp.toISOString()
            },
            recorded_at: timestamp.toISOString(),
            sync_date: timestamp.toISOString().split('T')[0]
          });
        }
      }

      console.log(`🤖 Created ${records.length} body measurement records`);
    } catch (error) {
      console.warn('🤖 Error syncing body measurements:', error);
    }

    return records;
  }

  /**
   * Sync nutrition data (daily aggregates)
   */
  private async syncNutritionData(userId: string, integrationId: string, startDate: Date, endDate: Date): Promise<WearablesDataRecord[]> {
    console.log('🤖 Syncing nutrition data...');
    const records: WearablesDataRecord[] = [];

    try {
      const days = this.getDaysInRange(startDate, endDate);

      for (const day of days) {
        const dayStart = new Date(day);
        dayStart.setHours(0, 0, 0, 0);
        const dayEnd = new Date(day);
        dayEnd.setHours(23, 59, 59, 999);

        const timeRangeFilter: TimeRangeFilter = {
          operator: 'between',
          startTime: dayStart.toISOString(),
          endTime: dayEnd.toISOString(),
        };

        // Nutrition calories
        const nutritionRecords = await this.readHealthConnectRecords('Nutrition', timeRangeFilter);
        if (nutritionRecords && nutritionRecords.length > 0) {
          const totalCalories = nutritionRecords.reduce((sum, record: any) => {
            let calories = 0;
            if (record.energy?.inKilocalories) {
              calories = record.energy.inKilocalories;
            } else if (record.energy?.inCalories) {
              calories = record.energy.inCalories;
            } else if (record.energy) {
              calories = record.energy;
            }
            return sum + calories;
          }, 0);

          if (totalCalories > 0) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'nutrition',
              metric_value: {
                calories: totalCalories,
                source: this.getMostCommonSource(nutritionRecords),
                timestamp: dayStart.toISOString()
              },
              recorded_at: dayStart.toISOString(),
              sync_date: dayStart.toISOString().split('T')[0]
            });
          }
        }

        // Hydration
        const hydrationRecords = await this.readHealthConnectRecords('Hydration', timeRangeFilter);
        if (hydrationRecords && hydrationRecords.length > 0) {
          const totalHydration = hydrationRecords.reduce((sum, record: any) => {
            const volume = record.volume?.inMilliliters || record.volume || 0;
            return sum + volume;
          }, 0);

          if (totalHydration > 0) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'hydration',
              metric_value: {
                ml: totalHydration,
                source: this.getMostCommonSource(hydrationRecords),
                timestamp: dayStart.toISOString()
              },
              recorded_at: dayStart.toISOString(),
              sync_date: dayStart.toISOString().split('T')[0]
            });
          }
        }
      }

      console.log(`🤖 Created ${records.length} nutrition records`);
    } catch (error) {
      console.warn('🤖 Error syncing nutrition data:', error);
    }

    return records;
  }

  /**
   * Sync vital signs data (daily most recent values)
   */
  private async syncVitalSigns(userId: string, integrationId: string, startDate: Date, endDate: Date): Promise<WearablesDataRecord[]> {
    console.log('🤖 Syncing vital signs data...');
    const records: WearablesDataRecord[] = [];

    try {
      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
      };

      // Blood pressure
      const bpRecords = await this.readHealthConnectRecords('BloodPressure', timeRangeFilter);
      if (bpRecords && bpRecords.length > 0) {
        for (const record of bpRecords) {
          const timestamp = new Date((record as any).time);
          if ((record as any).systolic && (record as any).diastolic) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'blood_pressure',
              metric_value: {
                systolic: (record as any).systolic.inMillimetersOfMercury || (record as any).systolic,
                diastolic: (record as any).diastolic.inMillimetersOfMercury || (record as any).diastolic,
                source: (record as any).metadata?.dataOrigin || 'unknown',
                timestamp: timestamp.toISOString()
              },
              recorded_at: timestamp.toISOString(),
              sync_date: timestamp.toISOString().split('T')[0]
            });
          }
        }
      }

      // Other vital signs (blood glucose, oxygen saturation, respiratory rate, body temperature)
      const vitalTypes = [
        { type: 'BloodGlucose', metric: 'blood_glucose', field: 'level' },
        { type: 'OxygenSaturation', metric: 'oxygen_saturation', field: 'percentage' },
        { type: 'RespiratoryRate', metric: 'respiratory_rate', field: 'rate' },
        { type: 'BodyTemperature', metric: 'body_temperature', field: 'temperature' }
      ];

      for (const vital of vitalTypes) {
        const vitalRecords = await this.readHealthConnectRecords(vital.type, timeRangeFilter);
        if (vitalRecords && vitalRecords.length > 0) {
          for (const record of vitalRecords) {
            const value = this.getMostRecentValue([record], vital.field);
            if (value !== undefined) {
              const timestamp = new Date((record as any).time || (record as any).startTime);
              records.push({
                user_id: userId,
                integration_id: integrationId,
                metric_type: vital.metric,
                metric_value: {
                  value: value,
                  source: (record as any).metadata?.dataOrigin || 'unknown',
                  timestamp: timestamp.toISOString()
                },
                recorded_at: timestamp.toISOString(),
                sync_date: timestamp.toISOString().split('T')[0]
              });
            }
          }
        }
      }

      console.log(`🤖 Created ${records.length} vital signs records`);
    } catch (error) {
      console.warn('🤖 Error syncing vital signs data:', error);
    }

    return records;
  }

  /**
   * Helper methods for data processing
   */
  private groupRecordsByHour(records: HealthConnectRecord[], valueField: string): Record<string, Array<{value: number, source: string}>> {
    const grouped: Record<string, Array<{value: number, source: string}>> = {};

    records.forEach((record: any) => {
      const timestamp = record.startTime || record.time;
      if (timestamp) {
        const hour = new Date(timestamp);
        hour.setMinutes(0, 0, 0);
        const hourKey = hour.toISOString();

        if (!grouped[hourKey]) {
          grouped[hourKey] = [];
        }

        const value = this.extractValueFromRecord(record, valueField);
        if (value !== undefined) {
          grouped[hourKey].push({
            value: value,
            source: record.metadata?.dataOrigin || 'unknown'
          });
        }
      }
    });

    return grouped;
  }

  private getDaysInRange(startDate: Date, endDate: Date): Date[] {
    const days: Date[] = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Date(date));
    }
    return days;
  }

  private getMostCommonSource(records: HealthConnectRecord[]): string {
    const sources: Record<string, number> = {};
    records.forEach((record: any) => {
      const source = record.metadata?.dataOrigin || 'unknown';
      sources[source] = (sources[source] || 0) + 1;
    });

    return Object.entries(sources).reduce((a, b) => sources[a[0]] > sources[b[0]] ? a : b)[0];
  }

  /**
   * Batch insert wearables data with duplicate prevention
   */
  private async batchInsertWearablesData(records: WearablesDataRecord[]): Promise<void> {
    console.log(`🤖 Batch inserting ${records.length} wearables data records...`);

    try {
      // First, check for existing records to prevent duplicates
      const existingChecks = records.map(record => ({
        user_id: record.user_id,
        integration_id: record.integration_id,
        metric_type: record.metric_type,
        recorded_at: record.recorded_at
      }));

      // Use UPSERT to handle duplicates gracefully
      const batchSize = 100;
      let totalUpserted = 0;

      for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);

        const { error } = await supabase
          .from('wearables_data')
          .upsert(batch, {
            onConflict: 'user_id,integration_id,metric_type,recorded_at',
            ignoreDuplicates: false  // Update existing records
          });

        if (error) {
          console.error(`🤖 Error upserting batch ${i}-${i + batch.length}:`, error);
          throw error;
        }

        totalUpserted += batch.length;
        console.log(`🤖 Upserted batch ${i}-${i + batch.length} (${batch.length} records)`);
      }

      console.log(`✅ Successfully upserted ${totalUpserted} wearables data records (new + updated)`)

      // Log metric summary
      const metricCounts: Record<string, number> = {};
      records.forEach(record => {
        metricCounts[record.metric_type] = (metricCounts[record.metric_type] || 0) + 1;
      });
      console.log('📊 Metrics populated:', Object.entries(metricCounts).map(([type, count]) => `${type}(${count})`).join(', '))

    } catch (error) {
      console.error('🤖 Error during batch insert:', error);
      throw error;
    }
  }

  /**
   * Get detailed metrics for each day in the given range - FOR LOGGING PURPOSES
   */
  private async getDetailedMetricsForDays(integrationId: string, startDate: Date, endDate: Date): Promise<void> {
    console.log('🤖 ===== DETAILED METRICS ANALYSIS =====');
    console.log('🤖 Analyzing 7 days of data for wearables_data table integration');

    // Create array of days to analyze
    const days: Date[] = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Date(date));
    }

    console.log('🤖 Days to analyze:', days.map(d => d.toDateString()));

    for (const day of days) {
      const dayStart = new Date(day);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(day);
      dayEnd.setHours(23, 59, 59, 999);

      console.log(`\n🤖 ===== ${day.toDateString()} =====`);
      console.log('🤖 Day range:', { start: dayStart.toISOString(), end: dayEnd.toISOString() });

      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: dayStart.toISOString(),
        endTime: dayEnd.toISOString(),
      };

      // Get step count for this day
      await this.logMetricForDay('Steps', 'Steps', timeRangeFilter);

      // Get distance for this day
      await this.logMetricForDay('Distance', 'Distance', timeRangeFilter);

      // Get active calories for this day
      await this.logMetricForDay('Active Calories', 'ActiveCaloriesBurned', timeRangeFilter);

      // Get heart rate samples for this day
      await this.logMetricForDay('Heart Rate', 'HeartRate', timeRangeFilter);

      // Get resting heart rate for this day
      await this.logMetricForDay('Resting Heart Rate', 'RestingHeartRate', timeRangeFilter);

      // Get weight for this day
      await this.logMetricForDay('Weight', 'Weight', timeRangeFilter);

      // Get sleep data for this day
      await this.logMetricForDay('Sleep Sessions', 'SleepSession', timeRangeFilter);

      // Get exercise sessions for this day
      await this.logMetricForDay('Exercise Sessions', 'ExerciseSession', timeRangeFilter);

      // Get nutrition for this day
      await this.logMetricForDay('Nutrition', 'Nutrition', timeRangeFilter);

      // Get hydration for this day
      await this.logMetricForDay('Hydration', 'Hydration', timeRangeFilter);

      // Get blood glucose for this day
      await this.logMetricForDay('Blood Glucose', 'BloodGlucose', timeRangeFilter);
    }

    console.log('\n🤖 ===== END DETAILED ANALYSIS =====\n');
  }

  private async logMetricForDay(metricName: string, recordType: string, timeRangeFilter: TimeRangeFilter): Promise<void> {
    try {
      console.log(`🤖 📊 ${metricName} Analysis:`);

      const records = await this.readHealthConnectRecords(recordType, timeRangeFilter);
      console.log(`🤖   Raw records count: ${records.length}`);

      if (records.length > 0) {
        console.log(`🤖   First record:`, {
          startTime: records[0].startTime || records[0].time,
          endTime: records[0].endTime,
          data: this.extractRecordData(records[0]),
          source: (records[0] as any).metadata?.dataOrigin
        });

        console.log(`🤖   Last record:`, {
          startTime: records[records.length - 1].startTime || records[records.length - 1].time,
          endTime: records[records.length - 1].endTime,
          data: this.extractRecordData(records[records.length - 1]),
          source: (records[records.length - 1] as any).metadata?.dataOrigin
        });

        // Calculate totals/summaries based on metric type
        if (['Steps', 'Distance', 'Active Calories', 'Nutrition', 'Hydration'].includes(metricName)) {
          let total = 0;
          let unit = '';

          records.forEach(record => {
            const value = this.extractNumericValue(record, recordType);
            if (value !== undefined) {
              total += value;
              if (!unit) unit = this.extractUnit(record, recordType);
            }
          });

          console.log(`🤖   Total for day: ${total} ${unit}`);
        } else if (['Heart Rate', 'Resting Heart Rate'].includes(metricName)) {
          const values = records.map(record => this.extractNumericValue(record, recordType)).filter(v => v !== undefined);
          if (values.length > 0) {
            const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
            const min = Math.min(...values);
            const max = Math.max(...values);
            console.log(`🤖   Average: ${avg.toFixed(2)}, Min: ${min}, Max: ${max} bpm`);
          }
        } else if (['Sleep Sessions', 'Exercise Sessions'].includes(metricName)) {
          let totalMinutes = 0;
          records.forEach(record => {
            if ((record as any).startTime && (record as any).endTime) {
              const duration = new Date((record as any).endTime).getTime() - new Date((record as any).startTime).getTime();
              const minutes = duration / (1000 * 60);
              totalMinutes += minutes;
              console.log(`🤖     Session: ${minutes.toFixed(1)} minutes (${(record as any).startTime} to ${(record as any).endTime})`);
            }
          });
          console.log(`🤖   Total session time: ${totalMinutes.toFixed(1)} minutes (${(totalMinutes / 60).toFixed(2)} hours)`);
        }

        // Group records by hour to see distribution
        const hourlyData: Record<number, number> = {};
        records.forEach(record => {
          const timestamp = (record as any).startTime || (record as any).time;
          if (timestamp) {
            const hour = new Date(timestamp).getHours();
            const value = this.extractNumericValue(record, recordType) || 1; // For sessions, count as 1
            hourlyData[hour] = (hourlyData[hour] || 0) + value;
          }
        });

        const nonZeroHours = Object.entries(hourlyData).filter(([_, value]) => value > 0);
        if (nonZeroHours.length > 0) {
          console.log(`🤖   Active hours (${nonZeroHours.length}):`,
            nonZeroHours.map(([hour, value]) => `${hour}h: ${value.toFixed(1)}`).join(', '));
        }

        // Show data source distribution
        const sources: Record<string, number> = {};
        records.forEach(record => {
          const source = (record as any).metadata?.dataOrigin || 'unknown';
          sources[source] = (sources[source] || 0) + 1;
        });
        console.log(`🤖   Data sources:`, Object.entries(sources).map(([source, count]) => `${source}: ${count}`).join(', '));

      } else {
        console.log(`🤖   No data available for this day`);
      }

    } catch (error) {
      console.log(`🤖   Error fetching ${metricName}:`, error);
    }
  }

  private extractRecordData(record: any): any {
    // Extract relevant data fields from the record
    const data: any = {};

    if (record.count !== undefined) data.count = record.count;
    if (record.distance !== undefined) data.distance = record.distance;
    if (record.energy !== undefined) data.energy = record.energy;
    if (record.beatsPerMinute !== undefined) data.beatsPerMinute = record.beatsPerMinute;
    if (record.weight !== undefined) data.weight = record.weight;
    if (record.height !== undefined) data.height = record.height;
    if (record.percentage !== undefined) data.percentage = record.percentage;
    if (record.level !== undefined) data.level = record.level;
    if (record.volume !== undefined) data.volume = record.volume;
    if (record.samples !== undefined && Array.isArray(record.samples)) {
      data.samplesCount = record.samples.length;
      if (record.samples.length > 0) data.firstSample = record.samples[0];
    }

    return data;
  }

  private extractNumericValue(record: any, recordType: string): number | undefined {
    switch (recordType) {
      case 'Steps':
        return record.count;
      case 'Distance':
        return record.distance?.inMeters || record.distance;
      case 'ActiveCaloriesBurned':
        return record.energy?.inCalories || record.energy;
      case 'HeartRate':
      case 'RestingHeartRate':
        if (record.samples && Array.isArray(record.samples) && record.samples.length > 0) {
          return record.samples[record.samples.length - 1].beatsPerMinute;
        }
        return record.beatsPerMinute;
      case 'Weight':
        return record.weight?.inKilograms || record.weight;
      case 'Nutrition':
        return record.energy?.inKilocalories || record.energy?.inCalories || record.energy;
      case 'Hydration':
        return record.volume?.inMilliliters || record.volume;
      case 'BloodGlucose':
        return record.level?.inMillimolesPerLiter || record.level?.inMilligramsPerDeciliter || record.level;
      default:
        return record.value || record.amount || record.quantity;
    }
  }

  private extractUnit(record: any, recordType: string): string {
    switch (recordType) {
      case 'Steps':
        return 'steps';
      case 'Distance':
        return 'meters';
      case 'ActiveCaloriesBurned':
        return 'cal';
      case 'HeartRate':
      case 'RestingHeartRate':
        return 'bpm';
      case 'Weight':
        return 'kg';
      case 'Nutrition':
        return 'kcal';
      case 'Hydration':
        return 'ml';
      case 'BloodGlucose':
        return 'mg/dL';
      default:
        return '';
    }
  }

  /**
   * Helper method to read Health Connect records
   */
  private async readHealthConnectRecords(recordType: string, timeRangeFilter?: TimeRangeFilter): Promise<HealthConnectRecord[]> {
    try {
      console.log(`🔍 Reading ${recordType} records with filter:`, timeRangeFilter);

      // readRecords returns an object with a 'records' property
      const result = await readRecords(recordType, { timeRangeFilter });
      console.log(`📊 ${recordType} result:`, result ? 'object returned' : 'null/undefined');

      // Extract the records array from the result
      const records = result?.records;
      console.log(`📊 ${recordType} records:`, records ? `${records.length} records` : 'no records array');

      // Ensure we always return an array
      if (!records || !Array.isArray(records)) {
        console.warn(`⚠️ ${recordType} has no records array:`, result);
        return [];
      }

      // Sort records to prioritize Google/native sources over Fitbit
      const sortedRecords = this.prioritizeDataSources(records);
      return sortedRecords;
    } catch (error) {
      console.warn(`❌ Failed to read ${recordType} records:`, error);
      return [];
    }
  }

  /**
   * Prioritize data sources - prefer Google/native over third-party
   */
  private prioritizeDataSources(records: HealthConnectRecord[]): HealthConnectRecord[] {
    return records.sort((a: any, b: any) => {
      const sourceA = a.metadata?.dataOrigin || '';
      const sourceB = b.metadata?.dataOrigin || '';

      // Priority order: Google Health Connect native > Google apps > Other sources > Fitbit
      const getPriority = (source: string): number => {
        if (source.includes('com.google.android.apps.healthdata')) return 1; // Native Health Connect
        if (source.includes('com.google.android.apps.fitness')) return 2; // Google Fit
        if (source.includes('com.google')) return 3; // Other Google apps
        if (source.includes('com.fitbit')) return 5; // Fitbit (lowest priority)
        return 4; // Other sources
      };

      const priorityDiff = getPriority(sourceA) - getPriority(sourceB);
      if (priorityDiff !== 0) return priorityDiff;

      // If same priority, sort by time (most recent first)
      const timeA = new Date(a.time || a.startTime || a.endTime).getTime();
      const timeB = new Date(b.time || b.startTime || b.endTime).getTime();
      return timeB - timeA;
    });
  }

  /**
   * Get minimum value from records
   */
  private getMinimumValue(records: HealthConnectRecord[], valueField: string): number | undefined {
    // Ensure records is a valid array
    if (!records || !Array.isArray(records) || records.length === 0) {
      console.log(`🔍 getMinimumValue: No records for field ${valueField}`);
      return undefined;
    }

    try {
      let values: number[] = [];

      // Extract values from all records using the unified extraction method
      records.forEach((record: any) => {
        // For heart rate, we want to extract all samples if they exist
        if (valueField === 'beatsPerMinute' && record.samples && Array.isArray(record.samples)) {
          record.samples.forEach((sample: any) => {
            const heartRate = sample.beatsPerMinute || sample.bpm || sample.value;
            if (heartRate && typeof heartRate === 'number') {
              values.push(heartRate);
            }
          });
        } else {
          // Use unified extraction for other metrics
          const value = this.extractValueFromRecord(record, valueField);
          if (value !== undefined && typeof value === 'number') {
            values.push(value);
          }
        }
      });

      if (values.length === 0) {
        console.log(`🔍 getMinimumValue: No valid values found for field ${valueField}`);
        return undefined;
      }

      const minValue = Math.min(...values);
      console.log(`🔍 getMinimumValue: Found minimum ${valueField}: ${minValue} from ${values.length} values`);
      return minValue;
    } catch (error) {
      console.warn(`⚠️ getMinimumValue error for ${valueField}:`, error);
      return undefined;
    }
  }

  /**
   * Get most recent value from records
   */
  private getMostRecentValue(records: HealthConnectRecord[], valueField: string): number | undefined {
    // Ensure records is a valid array
    if (!records || !Array.isArray(records) || records.length === 0) {
      console.log(`🔍 getMostRecentValue: No records for field ${valueField}`);
      return undefined;
    }

    try {
      // Records are already prioritized by data source from readHealthConnectRecords
      // Try to extract value from each record until we find one
      for (const record of records) {
        const value = this.extractValueFromRecord(record, valueField);
        if (value !== undefined) {
          const source = (record as any).metadata?.dataOrigin || 'unknown';
          console.log(`✅ Extracted ${valueField}: ${value} from source: ${source}`);
          return value;
        }
      }

      console.log(`⚠️ No value found for ${valueField} in any record`);
      return undefined;
    } catch (error) {
      console.warn(`⚠️ getMostRecentValue error for ${valueField}:`, error);
      return undefined;
    }
  }

  /**
   * Extract value from a record, handling different data formats
   */
  private extractValueFromRecord(record: any, valueField: string): number | undefined {
    if (!record) return undefined;

    const source = record.metadata?.dataOrigin || '';

    // Handle special cases for different metrics
    switch (valueField) {
      case 'beatsPerMinute':
        // Fitbit format: samples array
        if (record.samples && Array.isArray(record.samples) && record.samples.length > 0) {
          const lastSample = record.samples[record.samples.length - 1];
          const heartRate = lastSample.beatsPerMinute || lastSample.bpm || lastSample.value;
          if (heartRate) {
            console.log(`🔍 Heart rate from samples (${source}):`, heartRate);
            return heartRate;
          }
        }
        // Direct field format (Google/native)
        if (record.beatsPerMinute !== undefined) return record.beatsPerMinute;
        if (record.bpm !== undefined) return record.bpm;
        if (record.heartRate !== undefined) return record.heartRate;
        break;

      case 'level': // Blood glucose
        // Handle different glucose units
        if (record.level?.inMillimolesPerLiter) return record.level.inMillimolesPerLiter;
        if (record.level?.inMilligramsPerDeciliter) return record.level.inMilligramsPerDeciliter;
        if (record.level) return record.level;
        if (record.glucose) return record.glucose;
        break;

      case 'percentage': // Oxygen saturation, body fat
        if (record.percentage) return record.percentage;
        if (record.percent) return record.percent;
        if (record.value) return record.value;
        break;

      case 'rate': // Respiratory rate
        if (record.rate) return record.rate;
        if (record.breathsPerMinute) return record.breathsPerMinute;
        if (record.respiratoryRate) return record.respiratoryRate;
        break;

      default:
        // Try direct field access
        if (record[valueField] !== undefined) return record[valueField];

        // Try common alternative names
        if (record.value !== undefined) return record.value;
        if (record.amount !== undefined) return record.amount;
        if (record.count !== undefined) return record.count;
    }

    return undefined;
  }

  /**
   * Get vital signs data
   */
  private async getVitalSigns(integrationId: string): Promise<GoogleHealthData> {
    const vitals: GoogleHealthData = {};

    try {
      // Get last 7 days of data for vital signs
      const endTime = new Date();
      const startTime = new Date();
      startTime.setDate(endTime.getDate() - 7);

      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      };

      console.log('🤖 Fetching most recent heart rate sample...');
      const heartRateRecords = await this.readHealthConnectRecords('HeartRate', timeRangeFilter);
      console.log('🔍 Heart rate records sample:', heartRateRecords.slice(0, 2));

      // Try multiple possible field names for heart rate
      let heartRate = this.getMostRecentValue(heartRateRecords, 'beatsPerMinute');
      if (!heartRate) {
        console.log('🔍 Trying alternative field names for heart rate...');
        heartRate = this.getMostRecentValue(heartRateRecords, 'bpm') ||
                   this.getMostRecentValue(heartRateRecords, 'heartRate') ||
                   this.getMostRecentValue(heartRateRecords, 'rate');
      }

      if (heartRate) {
        vitals.heart_rate = heartRate;
        console.log(`✅ Heart rate: ${heartRate} bpm`);
      } else {
        console.log('⚠️ No heart rate value extracted - checking record structure...');
        if (heartRateRecords && heartRateRecords.length > 0) {
          console.log('🔍 Heart rate record keys:', Object.keys(heartRateRecords[0]));
        }
      }

      console.log('🤖 Fetching most recent resting heart rate sample...');
      const restingHeartRateRecords = await this.readHealthConnectRecords('RestingHeartRate', timeRangeFilter);
      const restingHeartRate = this.getMostRecentValue(restingHeartRateRecords, 'beatsPerMinute');
      if (restingHeartRate) {
        vitals.resting_heart_rate = restingHeartRate;
        console.log(`✅ Resting heart rate (direct): ${restingHeartRate} bpm`);
      } else {
        // Calculate resting heart rate as minimum heart rate from today's data
        console.log('🤖 No direct resting HR data, calculating from daily minimum...');
        if (heartRateRecords && heartRateRecords.length > 0) {
          const dailyMinHR = this.getMinimumValue(heartRateRecords, 'beatsPerMinute');
          if (dailyMinHR) {
            vitals.resting_heart_rate = dailyMinHR;
            console.log(`✅ Resting heart rate (calculated min): ${dailyMinHR} bpm`);
          }
        }
      }

      console.log('🤖 Fetching most recent blood pressure sample...');
      const bloodPressureRecords = await this.readHealthConnectRecords('BloodPressure', timeRangeFilter);
      if (bloodPressureRecords && bloodPressureRecords.length > 0) {
        const mostRecent = bloodPressureRecords.sort((a: any, b: any) =>
          new Date(b.time).getTime() - new Date(a.time).getTime()
        )[0] as any;
        if (mostRecent.systolic) {
          vitals.blood_pressure_systolic = mostRecent.systolic.inMillimetersOfMercury || mostRecent.systolic;
          console.log(`✅ Systolic BP: ${vitals.blood_pressure_systolic} mmHg`);
        }
        if (mostRecent.diastolic) {
          vitals.blood_pressure_diastolic = mostRecent.diastolic.inMillimetersOfMercury || mostRecent.diastolic;
          console.log(`✅ Diastolic BP: ${vitals.blood_pressure_diastolic} mmHg`);
        }
      }

      console.log('🤖 Fetching most recent respiratory rate sample...');
      const respiratoryRateRecords = await this.readHealthConnectRecords('RespiratoryRate', timeRangeFilter);
      const respiratoryRate = this.getMostRecentValue(respiratoryRateRecords, 'rate');
      if (respiratoryRate) vitals.respiratory_rate = respiratoryRate;

      console.log('🤖 Fetching most recent oxygen saturation sample...');
      const oxygenSaturationRecords = await this.readHealthConnectRecords('OxygenSaturation', timeRangeFilter);
      const oxygenSaturation = this.getMostRecentValue(oxygenSaturationRecords, 'percentage');
      if (oxygenSaturation) vitals.oxygen_saturation = oxygenSaturation;

      console.log('🤖 Fetching most recent body temperature sample...');
      const bodyTemperatureRecords = await this.readHealthConnectRecords('BodyTemperature', timeRangeFilter);
      const bodyTemperature = this.getMostRecentValue(bodyTemperatureRecords, 'temperature');
      if (bodyTemperature) {
        // Extract Celsius value from temperature object
        vitals.body_temperature = bodyTemperature.inCelsius || bodyTemperature;
        console.log(`✅ Body temperature: ${vitals.body_temperature}°C`);
      }

    } catch (error) {
      console.warn('Failed to fetch vital signs:', error);
    }

    return vitals;
  }

  /**
   * Get activity data for a date range
   */
  private async getActivityData(integrationId: string, startDate: Date, endDate: Date): Promise<GoogleHealthData> {
    const activity: GoogleHealthData = {};

    try {
      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
      };

      console.log('🤖 Fetching steps for date range...');
      const stepsRecords = await this.readHealthConnectRecords('Steps', timeRangeFilter);
      if (stepsRecords && stepsRecords.length > 0) {
        const totalSteps = stepsRecords.reduce((sum: number, record: any) => sum + (record.count || 0), 0);
        activity.steps = totalSteps;
        console.log(`✅ Total steps: ${totalSteps}`);
      }

      console.log('🤖 Fetching distance for date range...');
      const distanceRecords = await this.readHealthConnectRecords('Distance', timeRangeFilter);
      if (distanceRecords && distanceRecords.length > 0) {
        const totalDistance = distanceRecords.reduce((sum: number, record: any) => {
          const distance = record.distance?.inMeters || record.distance || 0;
          return sum + distance;
        }, 0);
        activity.distance = totalDistance;
        console.log(`✅ Total distance: ${totalDistance} meters`);
      }

      console.log('🤖 Fetching active calories for date range...');
      const activeCaloriesRecords = await this.readHealthConnectRecords('ActiveCaloriesBurned', timeRangeFilter);
      console.log(`🔍 Active calories records found: ${activeCaloriesRecords?.length || 0}`);
      if (activeCaloriesRecords && activeCaloriesRecords.length > 0) {
        console.log('🔍 Active calories sample record:', activeCaloriesRecords[0]);
        const totalActiveCalories = activeCaloriesRecords.reduce((sum: number, record: any) => {
          const energy = record.energy?.inCalories || record.energy || 0;
          console.log(`🔍 Processing active calories record: energy=${JSON.stringify(record.energy)}, extracted=${energy}`);
          return sum + energy;
        }, 0);
        activity.active_calories_burned = totalActiveCalories;
        console.log(`✅ Total active calories: ${totalActiveCalories}`);
      } else {
        console.log('⚠️ No active calories data found for current day, trying extended range...');
        // Try last 7 days
        const extendedStart = new Date(startDate);
        extendedStart.setDate(extendedStart.getDate() - 7);
        const extendedFilter: TimeRangeFilter = {
          operator: 'between',
          startTime: extendedStart.toISOString(),
          endTime: endDate.toISOString(),
        };
        const extendedRecords = await this.readHealthConnectRecords('ActiveCaloriesBurned', extendedFilter);
        console.log(`🔍 Extended active calories records (7 days): ${extendedRecords?.length || 0}`);
        if (extendedRecords && extendedRecords.length > 0) {
          console.log('🔍 Extended active calories sample:', extendedRecords[0]);
        }
      }

      console.log('🤖 Fetching exercise sessions for date range...');
      const exerciseRecords = await this.readHealthConnectRecords('ExerciseSession', timeRangeFilter);
      console.log(`🔍 Exercise records found: ${exerciseRecords?.length || 0}`);
      if (exerciseRecords && exerciseRecords.length > 0) {
        console.log('🔍 Exercise sample record:', exerciseRecords[0]);
        const totalMinutes = exerciseRecords.reduce((sum: number, record: any) => {
          if (record.startTime && record.endTime) {
            const duration = new Date(record.endTime).getTime() - new Date(record.startTime).getTime();
            const minutes = duration / (1000 * 60);
            console.log(`🔍 Exercise session: ${minutes} minutes (${record.startTime} to ${record.endTime})`);
            return sum + minutes;
          }
          return sum;
        }, 0);
        activity.exercise_minutes = totalMinutes;
        console.log(`✅ Total exercise minutes: ${totalMinutes}`);
      } else {
        console.log('⚠️ No exercise data found for current day, trying extended range...');
        // Try last 7 days
        const extendedStart = new Date(startDate);
        extendedStart.setDate(extendedStart.getDate() - 7);
        const extendedFilter: TimeRangeFilter = {
          operator: 'between',
          startTime: extendedStart.toISOString(),
          endTime: endDate.toISOString(),
        };
        const extendedRecords = await this.readHealthConnectRecords('ExerciseSession', extendedFilter);
        console.log(`🔍 Extended exercise records (7 days): ${extendedRecords?.length || 0}`);
        if (extendedRecords && extendedRecords.length > 0) {
          console.log('🔍 Extended exercise sample:', extendedRecords[0]);

          // Get today's exercise minutes from extended records
          const todayExerciseMinutes = extendedRecords
            .filter((record: any) => {
              if (!record.startTime) return false;
              const sessionDate = new Date(record.startTime);
              return sessionDate.toDateString() === new Date().toDateString();
            })
            .reduce((sum: number, record: any) => {
              if (record.startTime && record.endTime) {
                const duration = new Date(record.endTime).getTime() - new Date(record.startTime).getTime();
                const minutes = duration / (1000 * 60);
                console.log(`🔍 Today's exercise session: ${minutes} minutes`);
                return sum + minutes;
              }
              return sum;
            }, 0);

          if (todayExerciseMinutes > 0) {
            activity.exercise_minutes = todayExerciseMinutes;
            console.log(`✅ Today's total exercise minutes: ${todayExerciseMinutes}`);
          }
        }
      }

    } catch (error) {
      console.warn('Failed to fetch activity data:', error);
    }

    return activity;
  }

  /**
   * Get body measurements
   */
  private async getBodyMeasurements(integrationId: string): Promise<GoogleHealthData> {
    const measurements: GoogleHealthData = {};

    try {
      // Get last 30 days of data for body measurements (less frequent updates)
      const endTime = new Date();
      const startTime = new Date();
      startTime.setDate(endTime.getDate() - 30);

      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      };

      console.log('🤖 Fetching most recent weight sample...');
      const weightRecords = await this.readHealthConnectRecords('Weight', timeRangeFilter);
      if (weightRecords && weightRecords.length > 0) {
        const mostRecent = weightRecords.sort((a: any, b: any) =>
          new Date(b.time).getTime() - new Date(a.time).getTime()
        )[0] as any;
        if (mostRecent.weight) {
          measurements.weight = mostRecent.weight.inKilograms || mostRecent.weight;
          console.log(`✅ Weight: ${measurements.weight} kg`);
        }
      }

      console.log('🤖 Fetching most recent height sample...');
      const heightRecords = await this.readHealthConnectRecords('Height', timeRangeFilter);
      if (heightRecords && heightRecords.length > 0) {
        const mostRecent = heightRecords.sort((a: any, b: any) =>
          new Date(b.time).getTime() - new Date(a.time).getTime()
        )[0] as any;
        if (mostRecent.height) {
          measurements.height = mostRecent.height.inMeters || mostRecent.height;
          console.log(`✅ Height: ${measurements.height} m`);
        }
      }

      console.log('🤖 Fetching most recent body fat sample...');
      const bodyFatRecords = await this.readHealthConnectRecords('BodyFat', timeRangeFilter);
      if (bodyFatRecords && bodyFatRecords.length > 0) {
        const mostRecent = bodyFatRecords.sort((a: any, b: any) =>
          new Date(b.time).getTime() - new Date(a.time).getTime()
        )[0] as any;
        if (mostRecent.percentage) {
          measurements.body_fat = mostRecent.percentage;
        }
      }

    } catch (error) {
      console.warn('Failed to fetch body measurements:', error);
    }

    return measurements;
  }

  /**
   * Get nutrition data for a date range
   */
  private async getNutritionData(integrationId: string, startDate: Date, endDate: Date): Promise<GoogleHealthData> {
    const nutrition: GoogleHealthData = {};

    try {
      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
      };

      console.log('🤖 Fetching nutrition calories for date range...');
      const nutritionRecords = await this.readHealthConnectRecords('Nutrition', timeRangeFilter);
      if (nutritionRecords && nutritionRecords.length > 0) {
        console.log('🔍 Nutrition sample record:', nutritionRecords[0]);
        const totalCalories = nutritionRecords.reduce((sum: number, record: any) => {
          // Check if energy is an object with different units
          let calories = 0;
          if (record.energy?.inKilocalories) {
            calories = record.energy.inKilocalories; // This is already in kcal
          } else if (record.energy?.inCalories) {
            calories = record.energy.inCalories; // This might be in cal (not kcal)
          } else if (record.energy?.inJoules) {
            calories = record.energy.inJoules / 4184; // Convert joules to kcal
          } else if (record.energy) {
            calories = record.energy;
          }

          // Sanity check - if single meal is over 10,000 calories, it's likely in wrong units
          if (calories > 10000) {
            console.warn(`⚠️ Suspicious calorie value: ${calories}, might be in calories instead of kilocalories`);
            calories = calories / 1000; // Convert cal to kcal
          }

          console.log(`🔍 Nutrition record energy: ${JSON.stringify(record.energy)}, extracted: ${calories} kcal`);
          return sum + calories;
        }, 0);
        if (totalCalories > 0) {
          nutrition.nutrition_calories = totalCalories;
          console.log(`✅ Total nutrition calories: ${totalCalories} kcal`);
        }
      }

      console.log('🤖 Fetching hydration for date range...');
      const hydrationRecords = await this.readHealthConnectRecords('Hydration', timeRangeFilter);
      if (hydrationRecords && hydrationRecords.length > 0) {
        const totalHydration = hydrationRecords.reduce((sum: number, record: any) => {
          const volume = record.volume?.inMilliliters || record.volume || 0;
          return sum + volume;
        }, 0);
        if (totalHydration > 0) {
          nutrition.hydration = totalHydration;
          console.log(`✅ Total hydration: ${totalHydration} ml`);
        }
      }

    } catch (error) {
      console.warn('Failed to fetch nutrition data:', error);
    }

    return nutrition;
  }

  /**
   * Get sleep data for a date range
   */
  private async getSleepData(integrationId: string, startDate: Date, endDate: Date): Promise<GoogleHealthData> {
    const sleep: GoogleHealthData = {};

    try {
      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startDate.toISOString(),
        endTime: endDate.toISOString(),
      };

      console.log('🤖 Fetching sleep hours for date range...');
      const sleepRecords = await this.readHealthConnectRecords('SleepSession', timeRangeFilter);
      console.log(`🔍 Sleep records found: ${sleepRecords?.length || 0}`);
      if (sleepRecords && sleepRecords.length > 0) {
        console.log('🔍 Sleep sample record:', sleepRecords[0]);
        const totalSleepHours = sleepRecords.reduce((sum: number, record: any) => {
          if (record.startTime && record.endTime) {
            const duration = new Date(record.endTime).getTime() - new Date(record.startTime).getTime();
            const hours = duration / (1000 * 60 * 60);
            console.log(`🔍 Sleep session: ${hours} hours (${record.startTime} to ${record.endTime})`);
            return sum + hours;
          }
          return sum;
        }, 0);
        if (totalSleepHours > 0) {
          sleep.sleep_hours = totalSleepHours;
          console.log(`✅ Total sleep hours: ${totalSleepHours}`);
        }
      } else {
        console.log('⚠️ No sleep data found for current day, trying extended range...');
        // Try last 3 days (sleep often spans multiple days)
        const extendedStart = new Date(startDate);
        extendedStart.setDate(extendedStart.getDate() - 1);
        const extendedFilter: TimeRangeFilter = {
          operator: 'between',
          startTime: extendedStart.toISOString(),
          endTime: endDate.toISOString(),
        };
        const extendedRecords = await this.readHealthConnectRecords('SleepSession', extendedFilter);
        console.log(`🔍 Extended sleep records (1 days): ${extendedRecords?.length || 0}`);
        if (extendedRecords && extendedRecords.length > 0) {
          console.log('🔍 Extended sleep sample:', extendedRecords[0]);
          // Get most recent sleep session that ended within last 24 hours
          const recentSleep = extendedRecords
            .filter((record: any) => record.endTime && new Date(record.endTime).getTime() > Date.now() - (24 * 60 * 60 * 1000))
            .sort((a: any, b: any) => new Date(b.endTime).getTime() - new Date(a.endTime).getTime())[0];

          if (recentSleep && recentSleep.startTime && recentSleep.endTime) {
            const duration = new Date(recentSleep.endTime).getTime() - new Date(recentSleep.startTime).getTime();
            const hours = duration / (1000 * 60 * 60);
            sleep.sleep_hours = hours;
            console.log(`✅ Recent sleep session: ${hours} hours (${recentSleep.startTime} to ${recentSleep.endTime})`);
          }
        }
      }

    } catch (error) {
      console.warn('Failed to fetch sleep data:', error);
    }

    return sleep;
  }

  /**
   * Get other metrics (blood glucose, BMR, etc.)
   */
  private async getOtherMetrics(integrationId: string): Promise<GoogleHealthData> {
    const other: GoogleHealthData = {};

    try {
      // Get last 7 days of data for other metrics
      const endTime = new Date();
      const startTime = new Date();
      startTime.setDate(endTime.getDate() - 7);

      const timeRangeFilter: TimeRangeFilter = {
        operator: 'between',
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
      };

      console.log('🤖 Fetching most recent blood glucose sample...');
      const bloodGlucoseRecords = await this.readHealthConnectRecords('BloodGlucose', timeRangeFilter);
      console.log(`🔍 Blood glucose records found: ${bloodGlucoseRecords?.length || 0}`);
      if (bloodGlucoseRecords && bloodGlucoseRecords.length > 0) {
        console.log('🔍 Blood glucose sample record:', bloodGlucoseRecords[0]);
      }
      const bloodGlucose = this.getMostRecentValue(bloodGlucoseRecords, 'level');
      if (bloodGlucose) {
        other.blood_glucose = bloodGlucose;
        console.log(`✅ Blood glucose: ${bloodGlucose}`);
      } else {
        console.log('⚠️ No blood glucose data found, trying extended range...');
        // Try last 30 days
        const extendedStart = new Date();
        extendedStart.setDate(extendedStart.getDate() - 30);
        const extendedFilter: TimeRangeFilter = {
          operator: 'between',
          startTime: extendedStart.toISOString(),
          endTime: endTime.toISOString(),
        };
        const extendedRecords = await this.readHealthConnectRecords('BloodGlucose', extendedFilter);
        console.log(`🔍 Extended blood glucose records (30 days): ${extendedRecords?.length || 0}`);
        if (extendedRecords && extendedRecords.length > 0) {
          console.log('🔍 Extended blood glucose sample:', extendedRecords[0]);
          const recentGlucose = this.getMostRecentValue(extendedRecords, 'level');
          if (recentGlucose) {
            other.blood_glucose = recentGlucose;
            console.log(`✅ Recent blood glucose (extended): ${recentGlucose}`);
          }
        }
      }

      console.log('🤖 Fetching basal metabolic rate...');
      const bmrRecords = await this.readHealthConnectRecords('BasalMetabolicRate', timeRangeFilter);
      const bmr = this.getMostRecentValue(bmrRecords, 'basalMetabolicRate');
      if (bmr) {
        // Extract kilocalories per day from BMR object
        other.basal_metabolic_rate = bmr.inKilocaloriesPerDay || bmr;
        console.log(`✅ BMR: ${other.basal_metabolic_rate} kcal/day`);
      }

      console.log('🤖 Fetching menstruation flow data...');
      const menstruationRecords = await this.readHealthConnectRecords('MenstruationFlow', timeRangeFilter);
      const menstruationFlow = this.getMostRecentValue(menstruationRecords, 'flow');
      if (menstruationFlow) other.menstruation_flow = menstruationFlow;

    } catch (error) {
      console.warn('Failed to fetch other metrics:', error);
    }

    return other;
  }

  /**
   * Check if Google Health Connect is available and authorized
   */
  async isAvailable(): Promise<boolean> {
    if (Platform.OS !== 'android') {
      return false;
    }

    try {
      await initialize();
      const sdkStatus = await getSdkStatus();
      const isAvailable = sdkStatus === SdkAvailabilityStatus.SDK_AVAILABLE;
      console.log('🤖 GoogleHealthConnectDataService: Health Connect SDK status:', sdkStatus);
      console.log('🤖 GoogleHealthConnectDataService: Health Connect available:', isAvailable);
      return isAvailable;
    } catch (error) {
      console.error('🤖 Error checking availability:', error);
      return false;
    }
  }

  /**
   * Request permissions for health data access
   */
  async requestPermissions(): Promise<boolean> {
    if (Platform.OS !== 'android') {
      throw new Error('Google Health Connect is only available on Android');
    }

    try {
      // TODO: Implement permission request flow
      // const granted = await NativeModules.GoogleHealthConnect.requestPermissions();
      // return granted;
      console.log('🤖 GoogleHealthConnectDataService: Requesting permissions');
      return false; // Return false until native module is implemented
    } catch (error) {
      console.error('🤖 Error requesting permissions:', error);
      return false;
    }
  }

  /**
   * Get available data types
   */
  async getAvailableDataTypes(): Promise<string[]> {
    if (Platform.OS !== 'android') {
      return [];
    }

    try {
      // TODO: Query available data types from Health Connect
      // const dataTypes = await NativeModules.GoogleHealthConnect.getAvailableDataTypes();
      // return dataTypes;
      console.log('🤖 GoogleHealthConnectDataService: Getting available data types');
      
      // Return expected data types for now
      return [
        'active_calories_burned',
        'basal_metabolic_rate', 
        'blood_glucose',
        'blood_pressure',
        'body_fat',
        'body_temperature',
        'distance',
        'exercise_minutes',
        'heart_rate',
        'height',
        'hydration',
        'nutrition_calories',
        'oxygen_saturation',
        'respiratory_rate',
        'resting_heart_rate',
        'sleep_hours',
        'steps',
        'weight'
      ];
    } catch (error) {
      console.error('🤖 Error getting available data types:', error);
      return [];
    }
  }
}

export default GoogleHealthConnectDataService;