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
      
      console.log('🤖 Date range (local):', {
        start: todayStart.toString(),
        end: todayEnd.toString(),
        startISO: todayStart.toISOString(),
        endISO: todayEnd.toISOString()
      });

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

      return records;
    } catch (error) {
      console.warn(`❌ Failed to read ${recordType} records:`, error);
      return [];
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
      // Sort by time (most recent first)
      const sortedRecords = records.sort((a: any, b: any) => {
        const timeA = new Date(a.time || a.startTime || a.endTime).getTime();
        const timeB = new Date(b.time || b.startTime || b.endTime).getTime();
        return timeB - timeA;
      });

      const mostRecent = sortedRecords[0] as any;
      const value = mostRecent?.[valueField];

      if (value !== undefined) {
      }

      return value;
    } catch (error) {
      console.warn(`⚠️ getMostRecentValue error for ${valueField}:`, error);
      return undefined;
    }
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
      const heartRate = this.getMostRecentValue(heartRateRecords, 'beatsPerMinute');
      if (heartRate) vitals.heart_rate = heartRate;

      console.log('🤖 Fetching most recent resting heart rate sample...');
      const restingHeartRateRecords = await this.readHealthConnectRecords('RestingHeartRate', timeRangeFilter);
      const restingHeartRate = this.getMostRecentValue(restingHeartRateRecords, 'beatsPerMinute');
      if (restingHeartRate) vitals.resting_heart_rate = restingHeartRate;

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
      if (activeCaloriesRecords && activeCaloriesRecords.length > 0) {
        const totalActiveCalories = activeCaloriesRecords.reduce((sum: number, record: any) => {
          const energy = record.energy?.inCalories || record.energy || 0;
          return sum + energy;
        }, 0);
        activity.active_calories_burned = totalActiveCalories;
        console.log(`✅ Total active calories: ${totalActiveCalories}`);
      }

      console.log('🤖 Fetching exercise sessions for date range...');
      const exerciseRecords = await this.readHealthConnectRecords('ExerciseSession', timeRangeFilter);
      if (exerciseRecords && exerciseRecords.length > 0) {
        const totalMinutes = exerciseRecords.reduce((sum: number, record: any) => {
          if (record.startTime && record.endTime) {
            const duration = new Date(record.endTime).getTime() - new Date(record.startTime).getTime();
            return sum + (duration / (1000 * 60)); // Convert to minutes
          }
          return sum;
        }, 0);
        activity.exercise_minutes = totalMinutes;
        console.log(`✅ Total exercise minutes: ${totalMinutes}`);
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
        const totalCalories = nutritionRecords.reduce((sum: number, record: any) => {
          const energy = record.energy?.inCalories || record.energy || 0;
          return sum + energy;
        }, 0);
        if (totalCalories > 0) {
          nutrition.nutrition_calories = totalCalories;
          console.log(`✅ Total nutrition calories: ${totalCalories}`);
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
      if (sleepRecords && sleepRecords.length > 0) {
        const totalSleepHours = sleepRecords.reduce((sum: number, record: any) => {
          if (record.startTime && record.endTime) {
            const duration = new Date(record.endTime).getTime() - new Date(record.startTime).getTime();
            return sum + (duration / (1000 * 60 * 60)); // Convert to hours
          }
          return sum;
        }, 0);
        if (totalSleepHours > 0) {
          sleep.sleep_hours = totalSleepHours;
          console.log(`✅ Total sleep hours: ${totalSleepHours}`);
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
      const bloodGlucose = this.getMostRecentValue(bloodGlucoseRecords, 'level');
      if (bloodGlucose) other.blood_glucose = bloodGlucose;

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