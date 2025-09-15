import { Platform } from 'react-native';
import HealthKit, { 
  queryQuantitySamples, 
  getMostRecentQuantitySample,
  queryStatisticsForQuantity,
  authorizationStatusFor
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
  startDate?: Date;
  endDate?: Date;
  limit?: number;
  ascending?: boolean;
}

interface HealthKitOptions {
  startDate: string;
  endDate: string;
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

    const vitals: VitalSigns = {};

    // For vital signs, we want the most recent sample rather than a range
    // Use getMostRecentQuantitySample for point-in-time measurements
    
    // Fetch heart rate - get most recent sample
    try {
      console.log('🍎 Fetching most recent heart rate sample...');
      const heartRateData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierHeartRate');
      console.log('🍎 Heart rate sample:', heartRateData);
      if (heartRateData && heartRateData.quantity) {
        vitals.heartRate = heartRateData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch heart rate:', error);
    }

    // Fetch resting heart rate - get most recent sample with fallback to minimum heart rate
    try {
      console.log('🍎 Fetching most recent resting heart rate sample...');
      const restingHRData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierRestingHeartRate');
      console.log('🍎 Resting heart rate sample:', restingHRData);
      if (restingHRData && restingHRData.quantity) {
        vitals.restingHeartRate = restingHRData.quantity;
      } else {
        // Fallback: If no resting heart rate data, use minimum heart rate from last 24 hours
        console.log('🍎 No resting heart rate data, falling back to minimum heart rate...');
        try {
          const endDate = new Date();
          const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000);

          const heartRateSamples = await queryQuantitySamples('HKQuantityTypeIdentifierHeartRate', {
            filter: {
              startDate: startDate,
              endDate: endDate
            },
            ascending: true,
            limit: 0  // Get all samples
          });

          if (heartRateSamples && heartRateSamples.length > 0) {
            // Find the minimum heart rate value
            const minHeartRate = heartRateSamples.reduce((min: number, sample: any) => {
              const value = sample.quantity || Infinity;
              return value < min ? value : min;
            }, Infinity);

            if (minHeartRate !== Infinity && minHeartRate > 0) {
              console.log(`🍎 Using minimum heart rate (${minHeartRate}) as resting heart rate approximation`);
              vitals.restingHeartRate = minHeartRate;
            }
          }
        } catch (fallbackError) {
          console.warn('Failed to get minimum heart rate as fallback:', fallbackError);
        }
      }
    } catch (error) {
      console.warn('Failed to fetch resting heart rate:', error);
    }

    // Fetch HRV - get most recent sample
    try {
      const hrvData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierHeartRateVariabilitySDNN');
      if (hrvData && hrvData.quantity) {
        vitals.heartRateVariability = hrvData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch HRV:', error);
    }

    // Fetch blood pressure - need to get both systolic and diastolic
    try {
      const systolicData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierBloodPressureSystolic');
      const diastolicData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierBloodPressureDiastolic');
      if (systolicData && systolicData.quantity) {
        vitals.bloodPressureSystolic = systolicData.quantity;
      }
      if (diastolicData && diastolicData.quantity) {
        vitals.bloodPressureDiastolic = diastolicData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch blood pressure:', error);
    }

    // Fetch respiratory rate - get most recent sample
    try {
      console.log('🍎 Fetching most recent respiratory rate sample...');
      const respData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierRespiratoryRate');
      console.log('🍎 Respiratory rate sample:', respData);
      if (respData && respData.quantity) {
        vitals.respiratoryRate = respData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch respiratory rate:', error);
    }

    // Fetch body temperature - get most recent sample
    try {
      const tempData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierBodyTemperature');
      if (tempData && tempData.quantity) {
        vitals.bodyTemperature = tempData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch body temperature:', error);
    }

    // Fetch oxygen saturation - get most recent sample
    try {
      const o2Data = await getMostRecentQuantitySample('HKQuantityTypeIdentifierOxygenSaturation');
      if (o2Data && o2Data.quantity) {
        vitals.oxygenSaturation = o2Data.quantity;
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

    const healthOptions: HealthKitOptions = {
      startDate: (options?.startDate || new Date(Date.now() - 24 * 60 * 60 * 1000)).toISOString(),
      endDate: (options?.endDate || new Date()).toISOString()
    };

    console.log('🍎 Activity data date range:', {
      startDate: healthOptions.startDate,
      endDate: healthOptions.endDate
    });

    const activity: ActivityData = {};

    // Get step count
    try {
      const stepData = await this.fetchHealthData('getStepCount', healthOptions);
      console.log('🍎 Step data response:', stepData);
      activity.steps = stepData.value || stepData.sumQuantity?.quantity || 0;
    } catch (error) {
      console.warn('Failed to fetch step count:', error);
    }

    // Get distance
    try {
      const distanceData = await this.fetchHealthData('getDistanceWalkingRunning', healthOptions);
      console.log('🍎 Distance data response:', distanceData);
      activity.distance = distanceData.value || distanceData.sumQuantity?.quantity || 0;
    } catch (error) {
      console.warn('Failed to fetch distance:', error);
    }

    // Get active energy
    try {
      const activeEnergyData = await this.fetchHealthData('getActiveEnergyBurned', healthOptions);
      console.log('🍎 Active energy data response:', activeEnergyData);
      activity.activeEnergyBurned = activeEnergyData.value || activeEnergyData.sumQuantity?.quantity || 0;
    } catch (error) {
      console.warn('Failed to fetch active energy:', error);
    }

    // Get basal energy
    try {
      const basalEnergyData = await this.fetchHealthData('getBasalEnergyBurned', healthOptions);
      console.log('🍎 Basal energy data response:', basalEnergyData);
      activity.basalEnergyBurned = basalEnergyData.value || basalEnergyData.sumQuantity?.quantity || 0;
    } catch (error) {
      console.warn('Failed to fetch basal energy:', error);
    }

    // Get flights climbed
    try {
      const flightsData = await this.fetchHealthData('getFlightsClimbed', healthOptions);
      console.log('🍎 Flights data response:', flightsData);
      activity.flightsClimbed = flightsData.value || flightsData.sumQuantity?.quantity || 0;
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
      console.log('🍎 Fetching most recent weight sample...');
      const weightData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierBodyMass');
      console.log('🍎 Weight sample:', weightData);
      if (weightData && weightData.quantity) {
        measurements.weight = weightData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch weight:', error);
    }

    // Get latest height
    try {
      console.log('🍎 Fetching most recent height sample...');
      const heightData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierHeight');
      console.log('🍎 Height sample:', heightData);
      if (heightData && heightData.quantity) {
        // Height is typically in meters, might need to convert based on unit
        measurements.height = heightData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch height:', error);
    }

    // Get latest BMI
    try {
      console.log('🍎 Fetching most recent BMI sample...');
      const bmiData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierBodyMassIndex');
      console.log('🍎 BMI sample:', bmiData);
      if (bmiData && bmiData.quantity) {
        measurements.bmi = bmiData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch BMI:', error);
    }

    // Get latest body fat percentage
    try {
      const bodyFatData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierBodyFatPercentage');
      if (bodyFatData && bodyFatData.quantity) {
        measurements.bodyFatPercentage = bodyFatData.quantity;
      }
    } catch (error) {
      console.warn('Failed to fetch body fat percentage:', error);
    }

    // Get latest lean body mass
    try {
      const leanMassData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierLeanBodyMass');
      if (leanMassData && leanMassData.quantity) {
        measurements.leanBodyMass = leanMassData.quantity;
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

    const healthOptions: HealthKitOptions = {
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

    const healthOptions: HealthKitOptions = {
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

    const healthOptions: HealthKitOptions = {
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
   * Helper method to fetch data from HealthKit using @kingstinct/react-native-healthkit
   */
  private async fetchHealthData(method: string, options: any): Promise<any> {
    try {
      // Map old method names to new @kingstinct/react-native-healthkit methods with correct enum values
      switch (method) {
        case 'getHeartRateSamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierHeartRate', options);
        case 'getRestingHeartRateSamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierRestingHeartRate', options);
        case 'getHeartRateVariabilitySamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierHeartRateVariabilitySDNN', options);
        case 'getBloodPressureSamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierBloodPressureSystolic', options);
        case 'getRespiratoryRateSamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierRespiratoryRate', options);
        case 'getBodyTemperatureSamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierBodyTemperature', options);
        case 'getOxygenSaturationSamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierOxygenSaturation', options);
        case 'getStepCount':
          console.log('🍎 Step query params:', { from: options.startDate, to: options.endDate });
          const stepSamples = await queryQuantitySamples('HKQuantityTypeIdentifierStepCount', {
            filter: {
              startDate: new Date(options.startDate),
              endDate: new Date(options.endDate)
            },
            ascending: true,
            limit: 0  // 0 means no limit - get all samples
          });
          console.log('🍎 Raw step samples count:', stepSamples.length);
          const totalSteps = stepSamples.reduce((sum: number, sample: any) => sum + (sample.quantity || 0), 0);
          console.log('🍎 Total steps for today:', totalSteps);
          return { value: totalSteps };
        case 'getDistanceWalkingRunning':
          console.log('🍎 Distance query params:', { from: options.startDate, to: options.endDate });
          const distanceSamples = await queryQuantitySamples('HKQuantityTypeIdentifierDistanceWalkingRunning', {
            filter: {
              startDate: new Date(options.startDate),
              endDate: new Date(options.endDate)
            },
            ascending: true,
            limit: 0
          });
          console.log('🍎 Raw distance samples:', distanceSamples);
          const totalDistance = distanceSamples.reduce((sum: number, sample: any) => sum + (sample.quantity || 0), 0);
          return { value: totalDistance };
        case 'getActiveEnergyBurned':
          console.log('🍎 Active energy query params:', { from: options.startDate, to: options.endDate });
          const activeEnergySamples = await queryQuantitySamples('HKQuantityTypeIdentifierActiveEnergyBurned', {
            filter: {
              startDate: new Date(options.startDate),
              endDate: new Date(options.endDate)
            },
            ascending: true,
            limit: 0
          });
          console.log('🍎 Raw active energy samples count:', activeEnergySamples.length);
          console.log('🍎 First few samples:', activeEnergySamples.slice(0, 3));
          // Sum up the values - HealthKit returns kilocalories as "Cal"
          const totalActiveEnergy = activeEnergySamples.reduce((sum: number, sample: any) => {
            const value = sample.quantity || 0;
            // The "Cal" unit from HealthKit actually represents kilocalories
            return sum + value;
          }, 0);
          // Round to avoid floating point precision issues
          const roundedEnergy = Math.round(totalActiveEnergy);
          console.log('🍎 Total active energy (kcal):', roundedEnergy);
          return { value: roundedEnergy };
        case 'getBasalEnergyBurned':
          console.log('🍎 Basal energy query params:', { from: options.startDate, to: options.endDate });
          const basalEnergySamples = await queryQuantitySamples('HKQuantityTypeIdentifierBasalEnergyBurned', {
            filter: {
              startDate: new Date(options.startDate),
              endDate: new Date(options.endDate)
            },
            ascending: true,
            limit: 0
          });
          console.log('🍎 Raw basal energy samples:', basalEnergySamples);
          const totalBasalEnergy = basalEnergySamples.reduce((sum: number, sample: any) => sum + (sample.quantity || 0), 0);
          return { value: totalBasalEnergy };
        case 'getFlightsClimbed':
          console.log('🍎 Flights query params:', { from: options.startDate, to: options.endDate });
          const flightsSamples = await queryQuantitySamples('HKQuantityTypeIdentifierFlightsClimbed', {
            filter: {
              startDate: new Date(options.startDate),
              endDate: new Date(options.endDate)
            },
            ascending: true,
            limit: 0
          });
          const totalFlights = flightsSamples.reduce((sum: number, sample: any) => sum + (sample.quantity || 0), 0);
          return { value: totalFlights };
        case 'getLatestWeight':
          return await getMostRecentQuantitySample('HKQuantityTypeIdentifierBodyMass');
        case 'getLatestHeight':
          return await getMostRecentQuantitySample('HKQuantityTypeIdentifierHeight');
        case 'getLatestBmi':
          return await getMostRecentQuantitySample('HKQuantityTypeIdentifierBodyMassIndex');
        case 'getLatestBodyFatPercentage':
          return await getMostRecentQuantitySample('HKQuantityTypeIdentifierBodyFatPercentage');
        case 'getLatestLeanBodyMass':
          return await getMostRecentQuantitySample('HKQuantityTypeIdentifierLeanBodyMass');
        case 'getBloodGlucoseSamples':
          return await queryQuantitySamples('HKQuantityTypeIdentifierBloodGlucose', options);
        case 'getTimeInDaylight':
          console.log('🍎 Time in daylight query params:', { from: options.startDate, to: options.endDate });
          const timeInDaylightSamples = await queryQuantitySamples('HKQuantityTypeIdentifierTimeInDaylight', {
            filter: {
              startDate: new Date(options.startDate),
              endDate: new Date(options.endDate)
            },
            ascending: true,
            limit: 0
          });
          console.log('🍎 Raw time in daylight samples:', timeInDaylightSamples);
          const totalTimeInDaylight = timeInDaylightSamples.reduce((sum: number, sample: any) => sum + (sample.quantity || 0), 0);
          return { value: totalTimeInDaylight };
        default:
          throw new Error(`Method ${method} not implemented`);
      }
    } catch (error) {
      throw new Error(`HealthKit method ${method} failed: ${error}`);
    }
  }

  /**
   * Get activity summary using @kingstinct/react-native-healthkit
   */
  private async getActivitySummary(options: any): Promise<any | null> {
    try {
      // Note: @kingstinct/react-native-healthkit doesn't have direct activity summary
      // We'll need to query individual activity metrics instead
      console.warn('Activity summary not directly available in @kingstinct/react-native-healthkit');
      return null;
    } catch (error) {
      console.warn('Failed to get activity summary:', error);
      return null;
    }
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
   * Get current realtime health data for syncing to database
   */
  async getCurrentRealtimeData(integrationId: string): Promise<Record<string, any>> {
    await this.ensureAvailable(integrationId);

    console.log('🍎 AppleHealthKitDataService: Fetching current realtime data');

    // Get most recent data from the last 24 hours
    const endDate = new Date();
    const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const realtimeData: Record<string, any> = {};

    try {
      // Check permissions for vital signs
      console.log('🍎 AppleHealthKitDataService: Checking vital signs permissions...');
      const heartRateStatus = authorizationStatusFor('HKQuantityTypeIdentifierHeartRate');
      const restingHeartRateStatus = authorizationStatusFor('HKQuantityTypeIdentifierRestingHeartRate');
      const bloodPressureStatus = authorizationStatusFor('HKQuantityTypeIdentifierBloodPressureSystolic');
      const oxygenSaturationStatus = authorizationStatusFor('HKQuantityTypeIdentifierOxygenSaturation');
      
      console.log('🍎 Permissions status:', {
        heartRate: heartRateStatus,
        restingHeartRate: restingHeartRateStatus,
        bloodPressure: bloodPressureStatus,
        oxygenSaturation: oxygenSaturationStatus
      });

      // Get most recent vital signs
      console.log('🍎 AppleHealthKitDataService: Fetching vital signs...');
      const vitals = await this.getVitalSigns(integrationId, { startDate, endDate, limit: 1 });
      console.log('🍎 AppleHealthKitDataService: Vitals retrieved:', vitals);
      if (vitals.heartRate) realtimeData.heartrate = vitals.heartRate;

      // Use resting heart rate (which may include fallback value from getVitalSigns)
      if (vitals.restingHeartRate) {
        realtimeData.restingheartrate = vitals.restingHeartRate;
        console.log('🍎 Using resting heart rate (may be fallback):', vitals.restingHeartRate);
      }
      if (vitals.bloodPressureSystolic) realtimeData.bloodpressure_systolic = vitals.bloodPressureSystolic;
      if (vitals.bloodPressureDiastolic) realtimeData.bloodpressure_diastolic = vitals.bloodPressureDiastolic;
      if (vitals.oxygenSaturation) realtimeData.oxygensaturation = vitals.oxygenSaturation;
      if (vitals.respiratoryRate) realtimeData.respiratoryrate = vitals.respiratoryRate;

      // Get most recent activity data (today's totals)
      // Use local midnight for correct date boundaries
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      todayStart.setMilliseconds(0);
      
      const todayEnd = new Date();
      
      console.log('🍎 AppleHealthKitDataService: Fetching activity data...');
      console.log('🍎 Date range (local):', {
        start: todayStart.toString(),
        end: todayEnd.toString(),
        startISO: todayStart.toISOString(),
        endISO: todayEnd.toISOString()
      });
      const activity = await this.getActivityData(integrationId, { startDate: todayStart, endDate: todayEnd });
      console.log('🍎 AppleHealthKitDataService: Activity retrieved:', activity);
      if (activity.steps) realtimeData.steps = activity.steps;
      if (activity.distance) realtimeData.distance = activity.distance;
      if (activity.activeEnergyBurned) realtimeData.activeenergy = activity.activeEnergyBurned;

      // Check permissions for body measurements
      console.log('🍎 AppleHealthKitDataService: Checking body measurement permissions...');
      const weightStatus = authorizationStatusFor('HKQuantityTypeIdentifierBodyMass');
      const heightStatus = authorizationStatusFor('HKQuantityTypeIdentifierHeight');
      const bmiStatus = authorizationStatusFor('HKQuantityTypeIdentifierBodyMassIndex');
      
      console.log('🍎 Body measurement permissions:', {
        weight: weightStatus,
        height: heightStatus,
        bmi: bmiStatus
      });

      // Get latest body measurements
      console.log('🍎 AppleHealthKitDataService: Fetching body measurements...');
      const body = await this.getBodyMeasurements(integrationId);
      console.log('🍎 AppleHealthKitDataService: Body measurements retrieved:', body);
      if (body.weight) realtimeData.weight = body.weight;
      if (body.height) realtimeData.height = body.height;
      if (body.bmi) realtimeData.bmi = body.bmi;

      // Get blood glucose if available - use most recent sample
      try {
        console.log('🍎 Fetching most recent blood glucose sample...');
        const glucoseData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierBloodGlucose');
        console.log('🍎 Blood glucose sample:', glucoseData);
        if (glucoseData && glucoseData.quantity) {
          realtimeData.bloodglucose = glucoseData.quantity;
        }
      } catch (error) {
        console.warn('Failed to fetch blood glucose:', error);
      }

      // Get time in daylight for today
      try {
        const timeInDaylightData = await this.fetchHealthData('getTimeInDaylight', {
          startDate: todayStart.toISOString(),
          endDate: todayEnd.toISOString()
        });
        console.log('🍎 Time in daylight data response:', timeInDaylightData);
        if (timeInDaylightData && timeInDaylightData.value) {
          realtimeData.timeindaylight = timeInDaylightData.value;
        }
      } catch (error) {
        console.warn('Failed to fetch time in daylight:', error);
      }

      // Set sync timestamp
      realtimeData.last_sync_at = new Date();

      console.log('🍎 AppleHealthKitDataService: Retrieved realtime data keys:', Object.keys(realtimeData));
      console.log('🍎 AppleHealthKitDataService: Retrieved realtime data values:', realtimeData);
      return realtimeData;

    } catch (error) {
      console.error('🍎 AppleHealthKitDataService: Error fetching realtime data:', error);
      throw error;
    }
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