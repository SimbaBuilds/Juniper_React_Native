import { Platform } from 'react-native';
import HealthKit, { 
  queryQuantitySamples, 
  getMostRecentQuantitySample,
  queryStatisticsForQuantity 
} from '@kingstinct/react-native-healthkit';
import type { 
  QuantityTypeIdentifier, 
  QuantitySample,
  StatisticsOptions 
} from '@kingstinct/react-native-healthkit';
import AppleHealthKitAuthService from '../auth/services/AppleHealthKitAuthService';

export interface HealthMetric {
  type: string;
  value: number;
  unit: string;
  timestamp: Date;
  source?: string;
}

export interface HealthDataOptions {
  from?: string;
  to?: string;
  limit?: number;
}

export interface HealthDataOptions {
  startDate?: Date;
  endDate?: Date;
  limit?: number;
  ascending?: boolean;
}

export interface VitalSigns {
  heartRate?: number;
  restingHeartRate?: number;
  heartRateVariability?: number;
  bloodPressureSystolic?: number;
  bloodPressureDiastolic?: number;
  respiratoryRate?: number;
  bodyTemperature?: number;
  oxygenSaturation?: number;
}

export interface ActivityData {
  steps?: number;
  distance?: number;
  activeEnergyBurned?: number;
  basalEnergyBurned?: number;
  flightsClimbed?: number;
  exerciseTime?: number;
  standTime?: number;
  moveTime?: number;
}

export interface BodyMeasurements {
  weight?: number;
  height?: number;
  bmi?: number;
  bodyFatPercentage?: number;
  leanBodyMass?: number;
  waistCircumference?: number;
}

export interface NutritionData {
  calories?: number;
  protein?: number;
  carbohydrates?: number;
  fat?: number;
  sugar?: number;
  fiber?: number;
  water?: number;
  caffeine?: number;
}

export class AppleHealthKitDataService {
  private static instance: AppleHealthKitDataService;
  private authService: AppleHealthKitAuthService;

  private constructor() {
    this.authService = AppleHealthKitAuthService.getInstance();
  }

  static getInstance(): AppleHealthKitDataService {
    if (!AppleHealthKitDataService.instance) {
      AppleHealthKitDataService.instance = new AppleHealthKitDataService();
    }
    return AppleHealthKitDataService.instance;
  }

  /**
   * Ensure iOS platform and authentication
   */
  private async ensureAvailable(integrationId: string): Promise<void> {
    if (Platform.OS !== 'ios') {
      throw new Error('HealthKit is only available on iOS');
    }

    const isAuth = await this.authService.isAuthenticated(integrationId);
    if (!isAuth) {
      throw new Error('Not authenticated with HealthKit. Please authorize access first.');
    }
  }

  /**
   * Get comprehensive health data summary
   */
  async getHealthDataSummary(integrationId: string, options?: HealthDataOptions): Promise<any> {
    await this.ensureAvailable(integrationId);

    const endDate = options?.endDate || new Date();
    const startDate = options?.startDate || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    const [vitals, activity, body, sleep] = await Promise.allSettled([
      this.getVitalSigns(integrationId, { startDate, endDate }),
      this.getActivityData(integrationId, { startDate, endDate }),
      this.getBodyMeasurements(integrationId),
      this.getSleepData(integrationId, { startDate, endDate })
    ]);

    return {
      period: {
        start: startDate,
        end: endDate
      },
      vitals: vitals.status === 'fulfilled' ? vitals.value : null,
      activity: activity.status === 'fulfilled' ? activity.value : null,
      body: body.status === 'fulfilled' ? body.value : null,
      sleep: sleep.status === 'fulfilled' ? sleep.value : null,
      timestamp: new Date()
    };
  }

  /**
   * Get vital signs data
   */
  async getVitalSigns(integrationId: string, options?: HealthDataOptions): Promise<VitalSigns> {
    await this.ensureAvailable(integrationId);

    const healthOptions: HealthInputOptions = {
      startDate: (options?.startDate || new Date(Date.now() - 24 * 60 * 60 * 1000)).toISOString(),
      endDate: (options?.endDate || new Date()).toISOString(),
      limit: options?.limit || 1,
      ascending: options?.ascending ?? false
    };

    const vitals: VitalSigns = {};

    // Fetch heart rate
    try {
      const heartRateData = await this.fetchHealthData('getHeartRateSamples', healthOptions);
      if (heartRateData.length > 0) {
        vitals.heartRate = heartRateData[heartRateData.length - 1].value;
      }
    } catch (error) {
      console.warn('Failed to fetch heart rate:', error);
    }

    // Fetch resting heart rate
    try {
      const restingHRData = await this.fetchHealthData('getRestingHeartRateSamples', healthOptions);
      if (restingHRData.length > 0) {
        vitals.restingHeartRate = restingHRData[restingHRData.length - 1].value;
      }
    } catch (error) {
      console.warn('Failed to fetch resting heart rate:', error);
    }

    // Fetch HRV
    try {
      const hrvData = await this.fetchHealthData('getHeartRateVariabilitySamples', healthOptions);
      if (hrvData.length > 0) {
        vitals.heartRateVariability = hrvData[hrvData.length - 1].value;
      }
    } catch (error) {
      console.warn('Failed to fetch HRV:', error);
    }

    // Fetch blood pressure
    try {
      const bpData = await this.fetchHealthData('getBloodPressureSamples', healthOptions);
      if (bpData.length > 0) {
        const latest = bpData[bpData.length - 1];
        vitals.bloodPressureSystolic = latest.bloodPressureSystolicValue;
        vitals.bloodPressureDiastolic = latest.bloodPressureDiastolicValue;
      }
    } catch (error) {
      console.warn('Failed to fetch blood pressure:', error);
    }

    // Fetch respiratory rate
    try {
      const respData = await this.fetchHealthData('getRespiratoryRateSamples', healthOptions);
      if (respData.length > 0) {
        vitals.respiratoryRate = respData[respData.length - 1].value;
      }
    } catch (error) {
      console.warn('Failed to fetch respiratory rate:', error);
    }

    // Fetch body temperature
    try {
      const tempData = await this.fetchHealthData('getBodyTemperatureSamples', healthOptions);
      if (tempData.length > 0) {
        vitals.bodyTemperature = tempData[tempData.length - 1].value;
      }
    } catch (error) {
      console.warn('Failed to fetch body temperature:', error);
    }

    // Fetch oxygen saturation
    try {
      const o2Data = await this.fetchHealthData('getOxygenSaturationSamples', healthOptions);
      if (o2Data.length > 0) {
        vitals.oxygenSaturation = o2Data[o2Data.length - 1].value;
      }
    } catch (error) {
      console.warn('Failed to fetch oxygen saturation:', error);
    }

    return vitals;
  }

  /**
   * Get activity data
   */
  async getActivityData(integrationId: string, options?: HealthDataOptions): Promise<ActivityData> {
    await this.ensureAvailable(integrationId);

    const healthOptions: HealthInputOptions = {
      startDate: (options?.startDate || new Date(Date.now() - 24 * 60 * 60 * 1000)).toISOString(),
      endDate: (options?.endDate || new Date()).toISOString()
    };

    const activity: ActivityData = {};

    // Get step count
    try {
      const stepData = await this.fetchHealthData('getStepCount', healthOptions);
      activity.steps = stepData.value || 0;
    } catch (error) {
      console.warn('Failed to fetch step count:', error);
    }

    // Get distance
    try {
      const distanceData = await this.fetchHealthData('getDistanceWalkingRunning', healthOptions);
      activity.distance = distanceData.value || 0;
    } catch (error) {
      console.warn('Failed to fetch distance:', error);
    }

    // Get active energy
    try {
      const activeEnergyData = await this.fetchHealthData('getActiveEnergyBurned', healthOptions);
      if (Array.isArray(activeEnergyData) && activeEnergyData.length > 0) {
        activity.activeEnergyBurned = activeEnergyData.reduce((sum, item) => sum + (item.value || 0), 0);
      } else if (activeEnergyData.value) {
        activity.activeEnergyBurned = activeEnergyData.value;
      }
    } catch (error) {
      console.warn('Failed to fetch active energy:', error);
    }

    // Get basal energy
    try {
      const basalEnergyData = await this.fetchHealthData('getBasalEnergyBurned', healthOptions);
      if (Array.isArray(basalEnergyData) && basalEnergyData.length > 0) {
        activity.basalEnergyBurned = basalEnergyData.reduce((sum, item) => sum + (item.value || 0), 0);
      } else if (basalEnergyData.value) {
        activity.basalEnergyBurned = basalEnergyData.value;
      }
    } catch (error) {
      console.warn('Failed to fetch basal energy:', error);
    }

    // Get flights climbed
    try {
      const flightsData = await this.fetchHealthData('getFlightsClimbed', healthOptions);
      activity.flightsClimbed = flightsData.value || 0;
    } catch (error) {
      console.warn('Failed to fetch flights climbed:', error);
    }

    // Get activity summary if available
    try {
      const activitySummary = await this.getActivitySummary(healthOptions);
      if (activitySummary) {
        activity.exerciseTime = activitySummary.appleExerciseTime;
        activity.standTime = activitySummary.appleStandHours;
        activity.moveTime = activitySummary.appleMoveTime;
      }
    } catch (error) {
      console.warn('Failed to fetch activity summary:', error);
    }

    return activity;
  }

  /**
   * Get body measurements
   */
  async getBodyMeasurements(integrationId: string): Promise<BodyMeasurements> {
    await this.ensureAvailable(integrationId);

    const measurements: BodyMeasurements = {};

    // Get latest weight
    try {
      const weightData = await this.fetchHealthData('getLatestWeight', {});
      if (weightData) {
        measurements.weight = weightData.value;
      }
    } catch (error) {
      console.warn('Failed to fetch weight:', error);
    }

    // Get latest height
    try {
      const heightData = await this.fetchHealthData('getLatestHeight', {});
      if (heightData) {
        measurements.height = heightData.value;
      }
    } catch (error) {
      console.warn('Failed to fetch height:', error);
    }

    // Get latest BMI
    try {
      const bmiData = await this.fetchHealthData('getLatestBmi', {});
      if (bmiData) {
        measurements.bmi = bmiData.value;
      }
    } catch (error) {
      console.warn('Failed to fetch BMI:', error);
    }

    // Get latest body fat percentage
    try {
      const bodyFatData = await this.fetchHealthData('getLatestBodyFatPercentage', {});
      if (bodyFatData) {
        measurements.bodyFatPercentage = bodyFatData.value;
      }
    } catch (error) {
      console.warn('Failed to fetch body fat percentage:', error);
    }

    // Get latest lean body mass
    try {
      const leanMassData = await this.fetchHealthData('getLatestLeanBodyMass', {});
      if (leanMassData) {
        measurements.leanBodyMass = leanMassData.value;
      }
    } catch (error) {
      console.warn('Failed to fetch lean body mass:', error);
    }

    return measurements;
  }

  /**
   * Get sleep data
   */
  async getSleepData(integrationId: string, options?: HealthDataOptions): Promise<any> {
    await this.ensureAvailable(integrationId);

    const healthOptions: HealthInputOptions = {
      startDate: (options?.startDate || new Date(Date.now() - 24 * 60 * 60 * 1000)).toISOString(),
      endDate: (options?.endDate || new Date()).toISOString(),
      limit: options?.limit || 50
    };

    try {
      const sleepSamples = await this.fetchHealthData('getSleepSamples', healthOptions);
      
      // Process sleep samples to calculate total sleep time and breakdown
      const sleepAnalysis = this.analyzeSleepData(sleepSamples);
      
      return {
        samples: sleepSamples,
        analysis: sleepAnalysis
      };
    } catch (error) {
      console.error('Failed to fetch sleep data:', error);
      return { samples: [], analysis: null };
    }
  }

  /**
   * Analyze sleep data to provide insights
   */
  private analyzeSleepData(samples: any[]): any {
    if (!samples || samples.length === 0) {
      return null;
    }

    const sleepStages = {
      INBED: 0,
      ASLEEP: 0,
      AWAKE: 0,
      CORE: 0,
      DEEP: 0,
      REM: 0
    };

    samples.forEach(sample => {
      const duration = (new Date(sample.endDate).getTime() - new Date(sample.startDate).getTime()) / (1000 * 60); // in minutes
      const stage = sample.value || sample.sleepStage || 'UNKNOWN';
      
      if (sleepStages.hasOwnProperty(stage)) {
        sleepStages[stage as keyof typeof sleepStages] += duration;
      }
    });

    const totalSleep = sleepStages.ASLEEP + sleepStages.CORE + sleepStages.DEEP + sleepStages.REM;
    const sleepEfficiency = sleepStages.INBED > 0 ? (totalSleep / sleepStages.INBED) * 100 : 0;

    return {
      totalSleepMinutes: Math.round(totalSleep),
      totalSleepHours: Math.round(totalSleep / 60 * 10) / 10,
      sleepEfficiency: Math.round(sleepEfficiency),
      stages: sleepStages,
      sampleCount: samples.length
    };
  }

  /**
   * Get workout data
   */
  async getWorkouts(integrationId: string, options?: HealthDataOptions): Promise<any[]> {
    await this.ensureAvailable(integrationId);

    const healthOptions: HealthInputOptions = {
      startDate: (options?.startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).toISOString(),
      endDate: (options?.endDate || new Date()).toISOString()
    };

    try {
      const workouts = await this.fetchHealthData('getWorkouts', healthOptions);
      return workouts.map((workout: any) => ({
        type: workout.activityType,
        duration: workout.duration,
        energy: workout.energy,
        distance: workout.distance,
        startDate: workout.startDate,
        endDate: workout.endDate,
        source: workout.sourceName
      }));
    } catch (error) {
      console.error('Failed to fetch workouts:', error);
      return [];
    }
  }

  /**
   * Get mindfulness/meditation sessions
   */
  async getMindfulnessSessions(integrationId: string, options?: HealthDataOptions): Promise<any[]> {
    await this.ensureAvailable(integrationId);

    const healthOptions: HealthInputOptions = {
      startDate: (options?.startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).toISOString(),
      endDate: (options?.endDate || new Date()).toISOString()
    };

    try {
      const sessions = await this.fetchHealthData('getMindfulnessSamples', healthOptions);
      return sessions;
    } catch (error) {
      console.warn('Failed to fetch mindfulness sessions:', error);
      return [];
    }
  }

  /**
   * Helper method to fetch data from HealthKit
   */
  private fetchHealthData(method: string, options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const healthKitMethod = (AppleHealthKit as any)[method];
      if (typeof healthKitMethod === 'function') {
        healthKitMethod(options, (error: Error | null, results: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      } else {
        reject(new Error(`Method ${method} not found in AppleHealthKit`));
      }
    });
  }

  /**
   * Get activity summary
   */
  private getActivitySummary(options: HealthInputOptions): Promise<HealthActivitySummary | null> {
    return new Promise((resolve) => {
      AppleHealthKit.getActivitySummary(options, (error: Error | null, results: HealthActivitySummary[]) => {
        if (error || !results || results.length === 0) {
          resolve(null);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  /**
   * Subscribe to real-time health data updates
   */
  subscribeToHealthUpdates(
    dataType: string,
    callback: (data: any) => void,
    integrationId: string
  ): () => void {
    // Note: react-native-health doesn't support real-time subscriptions
    // This would need to be implemented with background fetch or a timer
    console.warn('Real-time health data subscriptions are not yet implemented');
    
    // Return a no-op unsubscribe function
    return () => {};
  }

  /**
   * Export health data in a structured format
   */
  async exportHealthData(
    integrationId: string,
    options?: HealthDataOptions
  ): Promise<any> {
    await this.ensureAvailable(integrationId);

    const exportData = {
      exportDate: new Date(),
      period: {
        start: options?.startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        end: options?.endDate || new Date()
      },
      data: {} as any
    };

    // Gather all available data
    const dataPromises = [
      this.getHealthDataSummary(integrationId, options).then(data => ({ key: 'summary', data })),
      this.getWorkouts(integrationId, options).then(data => ({ key: 'workouts', data })),
      this.getMindfulnessSessions(integrationId, options).then(data => ({ key: 'mindfulness', data }))
    ];

    const results = await Promise.allSettled(dataPromises);
    
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        exportData.data[result.value.key] = result.value.data;
      }
    });

    return exportData;
  }
}

export default AppleHealthKitDataService;