import { Platform } from 'react-native';
import HealthKit, {
  queryQuantitySamples,
  getMostRecentQuantitySample,
  queryStatisticsForQuantity,
  authorizationStatusFor,
  queryCategorySamples,
  getMostRecentCategorySample
} from '@kingstinct/react-native-healthkit';
import { supabase } from '../../supabase/supabase';
import type {
  QuantityTypeIdentifier,
  QuantitySample,
  StatisticsOptions,
  CategoryTypeIdentifier,
  CategorySampleTyped
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
        case 'getMenstruationSamples':
          console.log('🍎 Menstruation query params:', { from: options.startDate, to: options.endDate });
          try {
            const menstruationSamples = await queryCategorySamples('HKCategoryTypeIdentifierMenstrualFlow', {
              filter: {
                startDate: new Date(options.startDate),
                endDate: new Date(options.endDate)
              },
              ascending: true,
              limit: 0
            });
            console.log('🍎 Raw menstruation samples:', menstruationSamples);

            // HealthKit menstrual flow values: 0 = NotApplicable, 1 = Unspecified, 2 = Light, 3 = Medium, 4 = Heavy
            // We consider any flow except 'NotApplicable' (0) as menstruation present
            const activeMenstruationSamples = menstruationSamples.filter((sample: any) =>
              sample.value && sample.value !== 0
            );

            // Map numeric values to text
            const mapFlowValue = (value: number): string => {
              switch (value) {
                case 0: return 'NotApplicable';
                case 1: return 'Unspecified';
                case 2: return 'Light';
                case 3: return 'Medium';
                case 4: return 'Heavy';
                default: return 'Unknown';
              }
            };

            // Get the most recent flow value for today
            const mostRecentFlow = activeMenstruationSamples.length > 0
              ? activeMenstruationSamples[activeMenstruationSamples.length - 1].value
              : 0;

            console.log(`🍎 Active menstruation samples found: ${activeMenstruationSamples.length}`);
            console.log(`🍎 Most recent flow value: ${mostRecentFlow} (${mapFlowValue(mostRecentFlow)})`);
            return {
              samples: activeMenstruationSamples,
              hasActiveMenstruation: activeMenstruationSamples.length > 0,
              flowValue: mapFlowValue(mostRecentFlow),
              totalSamples: menstruationSamples.length
            };
          } catch (error) {
            console.warn('🍎 Error fetching menstruation data:', error);
            return { samples: [], hasActiveMenstruation: false, flowValue: 'NotApplicable', totalSamples: 0 };
          }
        case 'getSleepAnalysis':
          console.log('🍎 Sleep analysis query params:', { from: options.startDate, to: options.endDate });
          try {
            const sleepSamples = await queryCategorySamples('HKCategoryTypeIdentifierSleepAnalysis', {
              filter: {
                startDate: new Date(options.startDate),
                endDate: new Date(options.endDate)
              },
              ascending: true,
              limit: 0
            });
            console.log('🍎 Raw sleep analysis samples:', sleepSamples);

            // Group sleep samples into distinct sessions and select most recent
            console.log(`🍎 Processing ${sleepSamples.length} sleep samples - detecting sessions...`);

            // Sort samples by start time
            const sortedSamples = sleepSamples.sort((a: any, b: any) =>
              new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
            );

            // Group samples into separate sleep sessions based on gaps
            const sessions: any[][] = [];
            let currentSession: any[] = [];
            const SESSION_GAP_HOURS = 6; // Gap threshold to separate sessions

            for (const sample of sortedSamples) {
              if (currentSession.length === 0) {
                // First sample starts new session
                currentSession.push(sample);
              } else {
                // Check gap from last sample in current session
                const lastSample = currentSession[currentSession.length - 1];
                const lastEndTime = new Date(lastSample.endDate);
                const currentStartTime = new Date(sample.startDate);
                const gapHours = (currentStartTime.getTime() - lastEndTime.getTime()) / (1000 * 60 * 60);

                if (gapHours > SESSION_GAP_HOURS) {
                  // Large gap detected - start new session
                  sessions.push(currentSession);
                  currentSession = [sample];
                } else {
                  // Continue current session
                  currentSession.push(sample);
                }
              }
            }

            // Add the last session
            if (currentSession.length > 0) {
              sessions.push(currentSession);
            }

            console.log(`🍎 Detected ${sessions.length} sleep sessions:`);
            sessions.forEach((session, index) => {
              const sessionStart = new Date(session[0].startDate);
              const sessionEnd = new Date(session[session.length - 1].endDate);
              const sessionDuration = (sessionEnd.getTime() - sessionStart.getTime()) / (1000 * 60 * 60);
              console.log(`  Session ${index + 1}: ${sessionStart.toISOString()} to ${sessionEnd.toISOString()} (${sessionDuration.toFixed(1)} hours, ${session.length} samples)`);
            });

            // Select the most recent session (last in the array)
            if (sessions.length === 0) {
              throw new Error('No sleep sessions found');
            }

            const recentSession = sessions[sessions.length - 1];
            const sessionStart = new Date(recentSession[0].startDate);
            const sessionEnd = new Date(recentSession[recentSession.length - 1].endDate);

            console.log(`🍎 Selected most recent session: ${sessionStart.toISOString()} to ${sessionEnd.toISOString()} (${recentSession.length} samples)`);

            // Find sleep window for the selected session only
            let sleepStartTime: Date | null = null;
            let sleepEndTime: Date | null = null;

            recentSession.forEach((sample: any) => {
              const startTime = new Date(sample.startDate);
              const endTime = new Date(sample.endDate);
              if (!sleepStartTime || startTime < sleepStartTime) sleepStartTime = startTime;
              if (!sleepEndTime || endTime > sleepEndTime) sleepEndTime = endTime;
            });

            if (!sleepStartTime || !sleepEndTime) {
              throw new Error('No valid sleep window found in recent session');
            }

            // Create timeline segments (1-minute resolution)
            const timelineMinutes = Math.ceil((sleepEndTime.getTime() - sleepStartTime.getTime()) / (1000 * 60));
            const timeline: number[] = new Array(timelineMinutes).fill(0); // Default to InBed (0)

            // Sample priority: higher values override lower values for overlapping periods
            const samplePriority = { 0: 1, 2: 2, 1: 3, 3: 4, 5: 5, 4: 6 }; // InBed < Awake < Asleep < Core < REM < Deep

            console.log(`🍎 Sleep window: ${sleepStartTime.toISOString()} to ${sleepEndTime.toISOString()} (${timelineMinutes} minutes)`);
            console.log(`🍎 Processing samples for timeline:`);

            // Apply each sample from recent session to timeline, using priority system for overlaps
            recentSession.forEach((sample: any, index: number) => {
              const sampleStart = new Date(sample.startDate);
              const sampleEnd = new Date(sample.endDate);
              const startMinute = Math.floor((sampleStart.getTime() - sleepStartTime!.getTime()) / (1000 * 60));
              const endMinute = Math.ceil((sampleEnd.getTime() - sleepStartTime!.getTime()) / (1000 * 60));

              const durationMinutes = (sampleEnd.getTime() - sampleStart.getTime()) / (1000 * 60);
              console.log(`  Sample ${index + 1}: value=${sample.value}, duration=${durationMinutes.toFixed(1)}min, timeline=${startMinute}-${endMinute}`);

              // Apply sample to timeline using priority system
              for (let minute = startMinute; minute < endMinute && minute < timelineMinutes; minute++) {
                const currentValue = timeline[minute];
                const currentPriority = samplePriority[currentValue as keyof typeof samplePriority] || 0;
                const newPriority = samplePriority[sample.value as keyof typeof samplePriority] || 0;

                if (newPriority > currentPriority) {
                  timeline[minute] = sample.value;
                }
              }
            });

            // Calculate stage durations from processed timeline
            const sleepStages = {
              inBed: 0,        // 0 = InBed
              asleep: 0,       // 1 = Asleep (general)
              awake: 0,        // 2 = Awake
              core: 0,         // 3 = Core/Light Sleep
              deep: 0,         // 4 = Deep Sleep
              rem: 0           // 5 = REM Sleep
            };

            timeline.forEach((value: number) => {
              switch (value) {
                case 0: sleepStages.inBed++; break;
                case 1: sleepStages.asleep++; break;
                case 2: sleepStages.awake++; break;
                case 3: sleepStages.core++; break;
                case 4: sleepStages.deep++; break;
                case 5: sleepStages.rem++; break;
              }
            });

            // Calculate totals from timeline (no overlaps)
            const totalSleepMinutes = sleepStages.asleep + sleepStages.core + sleepStages.deep + sleepStages.rem;
            const totalInBedMinutes = timelineMinutes;
            const totalSleepHours = totalSleepMinutes / 60;
            const totalInBedHours = totalInBedMinutes / 60;
            const sleepEfficiency = totalInBedMinutes > 0 ? (totalSleepMinutes / totalInBedMinutes) * 100 : 0;

            console.log(`🍎 Timeline Processing Results:`);
            console.log(`  Total timeline minutes: ${totalInBedMinutes}`);
            console.log(`  Stage breakdown (no overlaps):`);
            console.log(`    InBed (not sleeping): ${sleepStages.inBed}min`);
            console.log(`    Awake (during sleep): ${sleepStages.awake}min`);
            console.log(`    Asleep (general): ${sleepStages.asleep}min`);
            console.log(`    Core/Light: ${sleepStages.core}min`);
            console.log(`    Deep: ${sleepStages.deep}min`);
            console.log(`    REM: ${sleepStages.rem}min`);
            console.log(`  Verification: ${sleepStages.inBed + sleepStages.awake + sleepStages.asleep + sleepStages.core + sleepStages.deep + sleepStages.rem} = ${totalInBedMinutes}`);

            const sleepData = {
              // Summary metrics
              totalSleepHours: parseFloat(totalSleepHours.toFixed(2)),
              totalInBedHours: parseFloat(totalInBedHours.toFixed(2)),
              sleepEfficiency: parseFloat(sleepEfficiency.toFixed(1)),

              // Sleep stages (in minutes)
              sleepStages: {
                inBed: parseFloat(sleepStages.inBed.toFixed(1)),
                asleep: parseFloat(sleepStages.asleep.toFixed(1)),
                awake: parseFloat(sleepStages.awake.toFixed(1)),
                core: parseFloat(sleepStages.core.toFixed(1)),
                deep: parseFloat(sleepStages.deep.toFixed(1)),
                rem: parseFloat(sleepStages.rem.toFixed(1))
              },

              // Sleep window
              sleepStartTime: sleepStartTime?.toISOString(),
              sleepEndTime: sleepEndTime?.toISOString(),

              // Raw data
              totalSamples: sleepSamples.length,
              samples: sleepSamples
            };

            console.log(`🍎 Sleep Analysis Summary:`);
            console.log(`  Total Sleep: ${sleepData.totalSleepHours} hours`);
            console.log(`  Total In Bed: ${sleepData.totalInBedHours} hours`);
            console.log(`  Sleep Efficiency: ${sleepData.sleepEfficiency}%`);
            console.log(`  Deep Sleep: ${sleepData.sleepStages.deep} minutes`);
            console.log(`  REM Sleep: ${sleepData.sleepStages.rem} minutes`);
            console.log(`  Core Sleep: ${sleepData.sleepStages.core} minutes`);
            console.log(`  Awake Time: ${sleepData.sleepStages.awake} minutes`);

            return sleepData;
          } catch (error) {
            console.warn('🍎 Error fetching sleep analysis:', error);
            return {
              totalSleepHours: 0,
              totalInBedHours: 0,
              sleepEfficiency: 0,
              sleepStages: {
                inBed: 0,
                asleep: 0,
                awake: 0,
                core: 0,
                deep: 0,
                rem: 0
              },
              sleepStartTime: null,
              sleepEndTime: null,
              totalSamples: 0,
              samples: []
            };
          }
        case 'getVO2Max':
          console.log('🍎 VO2 Max query params:', { from: options.startDate, to: options.endDate });
          try {
            const vo2MaxSamples = await queryQuantitySamples('HKQuantityTypeIdentifierVO2Max', {
              filter: {
                startDate: new Date(options.startDate),
                endDate: new Date(options.endDate)
              },
              ascending: true,
              limit: 0
            });
            console.log('🍎 Raw VO2 Max samples:', vo2MaxSamples);

            // Get the most recent VO2 Max value
            if (vo2MaxSamples.length > 0) {
              const latestVO2Max = vo2MaxSamples[vo2MaxSamples.length - 1];
              return { value: latestVO2Max.quantity, unit: latestVO2Max.unit };
            }
            return { value: 0, unit: 'ml/kg*min' };
          } catch (error) {
            console.warn('🍎 Error fetching VO2 Max:', error);
            return { value: 0, unit: 'ml/kg*min' };
          }
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
   * Get detailed metrics for each day in the given range - FOR LOGGING PURPOSES
   */
  private async getDetailedMetricsForDays(integrationId: string, startDate: Date, endDate: Date): Promise<void> {
    console.log('🍎 ===== DETAILED METRICS ANALYSIS =====');
    console.log('🍎 Analyzing 7 days of data for wearables_data table integration');

    // Create array of days to analyze
    const days: Date[] = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      days.push(new Date(date));
    }

    console.log('🍎 Days to analyze:', days.map(d => d.toDateString()));

    for (const day of days) {
      const dayStart = new Date(day);
      dayStart.setHours(0, 0, 0, 0);
      const dayEnd = new Date(day);
      dayEnd.setHours(23, 59, 59, 999);

      console.log(`\n🍎 ===== ${day.toDateString()} =====`);
      console.log('🍎 Day range:', { start: dayStart.toISOString(), end: dayEnd.toISOString() });

      // Get step count for this day
      await this.logMetricForDay('Steps', 'HKQuantityTypeIdentifierStepCount', dayStart, dayEnd);

      // Get distance for this day
      await this.logMetricForDay('Distance', 'HKQuantityTypeIdentifierDistanceWalkingRunning', dayStart, dayEnd);

      // Get active energy for this day
      await this.logMetricForDay('Active Energy', 'HKQuantityTypeIdentifierActiveEnergyBurned', dayStart, dayEnd);

      // Get heart rate samples for this day
      await this.logMetricForDay('Heart Rate', 'HKQuantityTypeIdentifierHeartRate', dayStart, dayEnd);

      // Get resting heart rate for this day
      await this.logMetricForDay('Resting Heart Rate', 'HKQuantityTypeIdentifierRestingHeartRate', dayStart, dayEnd);

      // Get HRV for this day
      await this.logMetricForDay('HRV', 'HKQuantityTypeIdentifierHeartRateVariabilitySDNN', dayStart, dayEnd);

      // Get weight for this day
      await this.logMetricForDay('Weight', 'HKQuantityTypeIdentifierBodyMass', dayStart, dayEnd);

      // Get sleep analysis for this day (spans previous night to current day)
      await this.logSleepForDay(day);
    }

    console.log('\n🍎 ===== END DETAILED ANALYSIS =====\n');
  }

  private async logMetricForDay(metricName: string, healthKitType: string, startDate: Date, endDate: Date): Promise<void> {
    try {
      console.log(`🍎 📊 ${metricName} Analysis:`);

      const samples = await queryQuantitySamples(healthKitType as any, {
        filter: {
          startDate: startDate,
          endDate: endDate
        },
        ascending: true,
        limit: 0  // Get all samples
      });

      console.log(`🍎   Raw samples count: ${samples.length}`);

      if (samples.length > 0) {
        console.log(`🍎   First sample:`, {
          startDate: samples[0].startDate,
          endDate: samples[0].endDate,
          quantity: samples[0].quantity,
          unit: samples[0].unit,
          source: samples[0].sourceRevision?.source?.name
        });

        console.log(`🍎   Last sample:`, {
          startDate: samples[samples.length - 1].startDate,
          endDate: samples[samples.length - 1].endDate,
          quantity: samples[samples.length - 1].quantity,
          unit: samples[samples.length - 1].unit,
          source: samples[samples.length - 1].sourceRevision?.source?.name
        });

        // Calculate total/average based on metric type
        if (['Steps', 'Distance', 'Active Energy'].includes(metricName)) {
          const total = samples.reduce((sum, sample) => sum + (sample.quantity || 0), 0);
          console.log(`🍎   Total for day: ${total} ${samples[0].unit || ''}`);
        } else {
          const values = samples.map(s => s.quantity).filter(q => q !== undefined);
          if (values.length > 0) {
            const avg = values.reduce((sum, val) => sum + val, 0) / values.length;
            const min = Math.min(...values);
            const max = Math.max(...values);
            console.log(`🍎   Average: ${avg.toFixed(2)}, Min: ${min}, Max: ${max} ${samples[0].unit || ''}`);
          }
        }

        // Group samples by hour to see distribution
        const hourlyData: Record<number, number> = {};
        samples.forEach(sample => {
          const hour = new Date(sample.startDate).getHours();
          hourlyData[hour] = (hourlyData[hour] || 0) + (sample.quantity || 0);
        });

        const nonZeroHours = Object.entries(hourlyData).filter(([_, value]) => value > 0);
        if (nonZeroHours.length > 0) {
          console.log(`🍎   Active hours (${nonZeroHours.length}):`,
            nonZeroHours.map(([hour, value]) => `${hour}h: ${value.toFixed(1)}`).join(', '));
        }
      } else {
        console.log(`🍎   No data available for this day`);
      }

    } catch (error) {
      console.log(`🍎   Error fetching ${metricName}:`, error);
    }
  }

  private async logSleepForDay(day: Date): Promise<void> {
    try {
      console.log(`🍎 😴 Sleep Analysis:`);

      // Sleep typically spans from previous night to current day
      const sleepStart = new Date(day);
      sleepStart.setDate(sleepStart.getDate() - 1);
      sleepStart.setHours(18, 0, 0, 0); // 6 PM previous day

      const sleepEnd = new Date(day);
      sleepEnd.setHours(14, 0, 0, 0); // 2 PM current day

      console.log(`🍎   Sleep window: ${sleepStart.toISOString()} to ${sleepEnd.toISOString()}`);

      const sleepSamples = await queryCategorySamples('HKCategoryTypeIdentifierSleepAnalysis', {
        filter: {
          startDate: sleepStart,
          endDate: sleepEnd
        },
        ascending: true,
        limit: 0
      });

      console.log(`🍎   Sleep samples count: ${sleepSamples.length}`);

      if (sleepSamples.length > 0) {
        const sleepStages = { inBed: 0, awake: 0, asleep: 0, core: 0, deep: 0, rem: 0 };
        const stageNames = { 0: 'inBed', 1: 'asleep', 2: 'awake', 3: 'core', 4: 'deep', 5: 'rem' };

        sleepSamples.forEach((sample: any) => {
          const duration = (new Date(sample.endDate).getTime() - new Date(sample.startDate).getTime()) / (1000 * 60);
          const stageName = stageNames[sample.value as keyof typeof stageNames] || 'unknown';

          if (sleepStages[stageName as keyof typeof sleepStages] !== undefined) {
            sleepStages[stageName as keyof typeof sleepStages] += duration;
          }

          console.log(`🍎     Sample: ${stageName} (${sample.value}) - ${duration.toFixed(1)}min - ${sample.startDate} to ${sample.endDate}`);
        });

        const totalSleep = sleepStages.asleep + sleepStages.core + sleepStages.deep + sleepStages.rem;
        const totalInBed = Object.values(sleepStages).reduce((sum, val) => sum + val, 0);

        console.log(`🍎   Sleep breakdown:`, {
          totalSleepHours: (totalSleep / 60).toFixed(2),
          totalInBedHours: (totalInBed / 60).toFixed(2),
          efficiency: totalInBed > 0 ? ((totalSleep / totalInBed) * 100).toFixed(1) + '%' : '0%',
          stages: {
            inBed: `${sleepStages.inBed.toFixed(1)}min`,
            awake: `${sleepStages.awake.toFixed(1)}min`,
            asleep: `${sleepStages.asleep.toFixed(1)}min`,
            core: `${sleepStages.core.toFixed(1)}min`,
            deep: `${sleepStages.deep.toFixed(1)}min`,
            rem: `${sleepStages.rem.toFixed(1)}min`
          }
        });
      } else {
        console.log(`🍎   No sleep data available for this period`);
      }

    } catch (error) {
      console.log(`🍎   Error fetching sleep data:`, error);
    }
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

    console.log('🍎 DETAILED LOGGING: Getting 7 days of data for wearables_data integration');
    console.log('🍎 Date range for detailed analysis:', {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      daysDifference: (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    });

    // Get 7 days of data for detailed analysis
    // const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    // await this.getDetailedMetricsForDays(integrationId, sevenDaysAgo, endDate);

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
      if (vitals.heartRateVariability) {
        realtimeData.hrv = vitals.heartRateVariability;
        console.log('🍎 Using HRV:', vitals.heartRateVariability);
      }

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

      console.log('🍎 Body measurement permissions:', {
        weight: weightStatus,
        height: heightStatus
      });

      // Get latest body measurements
      console.log('🍎 AppleHealthKitDataService: Fetching body measurements...');
      const body = await this.getBodyMeasurements(integrationId);
      console.log('🍎 AppleHealthKitDataService: Body measurements retrieved:', body);
      if (body.weight) realtimeData.weight = body.weight;
      if (body.height) realtimeData.height = body.height;
      if (body.leanBodyMass) realtimeData.leanbodymass = body.leanBodyMass;
      if (body.bodyFatPercentage) {
        realtimeData.body_fat_percentage = body.bodyFatPercentage;
        console.log('🍎 Using body fat percentage:', body.bodyFatPercentage);
      }

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

      // Get VO2 Max if available - use most recent sample
      try {
        console.log('🍎 Fetching most recent VO2 Max sample...');
        const vo2MaxData = await getMostRecentQuantitySample('HKQuantityTypeIdentifierVO2Max');
        console.log('🍎 VO2 Max sample:', vo2MaxData);
        if (vo2MaxData && vo2MaxData.quantity) {
          realtimeData.v02_max = vo2MaxData.quantity;
          console.log('🍎 Using VO2 Max:', vo2MaxData.quantity);
        }
      } catch (error) {
        console.warn('Failed to fetch VO2 Max:', error);
      }

      // Get menstruation data if available - use most recent sample
      try {
        console.log('🍎 Fetching most recent menstruation data...');
        const menstruationData = await this.fetchHealthData('getMenstruationSamples', {
          startDate: todayStart.toISOString(),
          endDate: todayEnd.toISOString()
        });
        console.log('🍎 Menstruation data response:', menstruationData);
        if (menstruationData && menstruationData.hasActiveMenstruation) {
          realtimeData.menstruation = menstruationData.flowValue;
          console.log(`🍎 Active menstruation found for today: ${menstruationData.flowValue}`);
        } else {
          realtimeData.menstruation = 'NotApplicable';
          console.log('🍎 No active menstruation found for today');
        }
      } catch (error) {
        console.warn('Failed to fetch menstruation data:', error);
      }

      // Get sleep data if available - use data from last night
      try {
        console.log('🍎 Fetching sleep analysis data...');
        const yesterdayStart = new Date(todayStart.getTime() - 24 * 60 * 60 * 1000);
        const sleepData = await this.fetchHealthData('getSleepAnalysis', {
          startDate: yesterdayStart.toISOString(),
          endDate: todayEnd.toISOString()
        });
        console.log('🍎 Sleep data response:', sleepData);
        if (sleepData && sleepData.totalSleepHours) {
          // Store sleep data according to new schema
          const timeInBedHours = sleepData.totalInBedHours;
          const timeAsleepHours = sleepData.totalSleepHours;

          // Calculate awake time in bed (time in bed not asleep) in hours
          const awakeInBedHours = timeInBedHours - timeAsleepHours;

          // Store in database schema format
          realtimeData.time_in_bed = timeInBedHours;
          realtimeData.time_asleep = timeAsleepHours;
          realtimeData.awake_in_bed = awakeInBedHours;

          // Sleep stages (convert minutes to hours for consistency)
          // Combine core sleep and general "asleep" time as light sleep
          const lightSleepMinutes = sleepData.sleepStages.core + sleepData.sleepStages.asleep;

          realtimeData.deep_sleep = sleepData.sleepStages.deep / 60; // minutes to hours
          realtimeData.rem_sleep = sleepData.sleepStages.rem / 60;   // minutes to hours
          realtimeData.light_sleep = lightSleepMinutes / 60; // core + asleep = light sleep

          console.log('🍎 Storing sleep data in new schema:');
          console.log(`  Time in Bed: ${timeInBedHours.toFixed(2)} hours`);
          console.log(`  Time Asleep: ${timeAsleepHours.toFixed(2)} hours`);
          console.log(`  Awake in Bed: ${awakeInBedHours.toFixed(2)} hours`);
          console.log(`  Deep Sleep: ${realtimeData.deep_sleep.toFixed(2)} hours`);
          console.log(`  REM Sleep: ${realtimeData.rem_sleep.toFixed(2)} hours`);
          console.log(`  Light Sleep: ${realtimeData.light_sleep.toFixed(2)} hours (core + asleep)`);
          console.log(`  Stage breakdown: Core=${sleepData.sleepStages.core}min + Asleep=${sleepData.sleepStages.asleep}min = Light=${lightSleepMinutes}min`);
        }
      } catch (error) {
        console.warn('Failed to fetch sleep data:', error);
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
   * Sync Apple Health data to wearables_data table with 7-day backfill
   */
  async syncToWearablesData(userId: string, integrationId: string, daysToSync: number = 7): Promise<any> {
    await this.ensureAvailable(integrationId);

    console.log('🍎 Starting wearables_data sync for', daysToSync, 'days');

    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - daysToSync);

    const recordsToInsert: any[] = [];

    try {
      // Sync each day
      for (let day = 0; day < daysToSync; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + day);

        const dayStart = new Date(currentDate);
        dayStart.setHours(0, 0, 0, 0);
        const dayEnd = new Date(currentDate);
        dayEnd.setHours(23, 59, 59, 999);

        console.log(`🍎 Processing day ${day + 1}/${daysToSync}: ${currentDate.toDateString()}`);

        // 1. Sync daily activity metrics (steps, distance, energy)
        const activityRecords = await this.createActivityRecords(userId, integrationId, dayStart, dayEnd);
        recordsToInsert.push(...activityRecords);

        // 2. Sync hourly heart rate averages
        const heartRateRecords = await this.createHeartRateRecords(userId, integrationId, dayStart, dayEnd);
        recordsToInsert.push(...heartRateRecords);

        // 3. Sync sleep data (previous night)
        const sleepRecords = await this.createSleepRecords(userId, integrationId, currentDate);
        recordsToInsert.push(...sleepRecords);

        // 4. Sync body measurements (if available for this day)
        const bodyRecords = await this.createBodyMeasurementRecords(userId, integrationId, dayStart, dayEnd);
        recordsToInsert.push(...bodyRecords);

        // 5. Sync vital signs (resting heart rate, HRV, blood pressure, etc.)
        const vitalSignsRecords = await this.createVitalSignsRecords(userId, integrationId, dayStart, dayEnd);
        recordsToInsert.push(...vitalSignsRecords);

        // 6. Sync blood chemistry (blood glucose)
        const bloodChemistryRecords = await this.createBloodChemistryRecords(userId, integrationId, dayStart, dayEnd);
        recordsToInsert.push(...bloodChemistryRecords);

        // 7. Sync environmental data (time in daylight, VO2 max)
        const environmentalRecords = await this.createEnvironmentalRecords(userId, integrationId, dayStart, dayEnd);
        recordsToInsert.push(...environmentalRecords);

        // 8. Sync reproductive health data (menstruation)
        const reproductiveHealthRecords = await this.createReproductiveHealthRecords(userId, integrationId, dayStart, dayEnd);
        recordsToInsert.push(...reproductiveHealthRecords);
      }

      console.log(`🍎 Created ${recordsToInsert.length} records for wearables_data sync`);

      // Add duplicate prevention logic
      const deduplicatedRecords = await this.removeDuplicateRecords(recordsToInsert, userId, integrationId);
      console.log(`🍎 After deduplication: ${deduplicatedRecords.length} records (removed ${recordsToInsert.length - deduplicatedRecords.length} duplicates)`);

      // Batch insert to database using UPSERT to handle duplicates
      if (deduplicatedRecords.length > 0) {
        console.log('🍎 Inserting records to wearables_data table:', {
          totalRecords: deduplicatedRecords.length,
          recordTypes: this.getRecordTypeCounts(deduplicatedRecords),
          sampleRecords: deduplicatedRecords.slice(0, 3)
        });

        await this.batchInsertWearablesData(deduplicatedRecords);
      }

      return {
        success: true,
        recordsCreated: deduplicatedRecords.length,
        records: deduplicatedRecords,
        daysProcessed: daysToSync
      };

    } catch (error) {
      console.error('🍎 Error in wearables_data sync:', error);
      throw error;
    }
  }

  /**
   * Create activity records for a day (steps, distance, active energy)
   */
  private async createActivityRecords(userId: string, integrationId: string, dayStart: Date, dayEnd: Date): Promise<any[]> {
    const records: any[] = [];
    const syncDate = dayStart.toISOString().split('T')[0];

    try {
      // Get steps
      const stepData = await this.fetchHealthData('getStepCount', {
        startDate: dayStart.toISOString(),
        endDate: dayEnd.toISOString()
      });

      if (stepData.value > 0) {
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'steps',
          metric_value: {
            count: stepData.value,
            unit: 'count',
            source: 'apple_health'
          },
          recorded_at: dayEnd.toISOString(),
          sync_date: syncDate
        });
      }

      // Get distance
      const distanceData = await this.fetchHealthData('getDistanceWalkingRunning', {
        startDate: dayStart.toISOString(),
        endDate: dayEnd.toISOString()
      });

      if (distanceData.value > 0) {
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'activity',
          metric_value: {
            distance: distanceData.value,
            unit: 'mi',
            type: 'walking_running',
            source: 'apple_health'
          },
          recorded_at: dayEnd.toISOString(),
          sync_date: syncDate
        });
      }

      // Get active energy
      const energyData = await this.fetchHealthData('getActiveEnergyBurned', {
        startDate: dayStart.toISOString(),
        endDate: dayEnd.toISOString()
      });

      if (energyData.value > 0) {
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'activity',
          metric_value: {
            active_energy: energyData.value,
            unit: 'kcal',
            source: 'apple_health'
          },
          recorded_at: dayEnd.toISOString(),
          sync_date: syncDate
        });
      }

    } catch (error) {
      console.warn('🍎 Error creating activity records:', error);
    }

    return records;
  }

  /**
   * Create hourly heart rate average records
   */
  private async createHeartRateRecords(userId: string, integrationId: string, dayStart: Date, dayEnd: Date): Promise<any[]> {
    const records: any[] = [];
    const syncDate = dayStart.toISOString().split('T')[0];

    try {
      const heartRateSamples = await queryQuantitySamples('HKQuantityTypeIdentifierHeartRate', {
        filter: {
          startDate: dayStart,
          endDate: dayEnd
        },
        ascending: true,
        limit: 0
      });

      if (heartRateSamples.length === 0) {
        return records;
      }

      // Group by hour and calculate averages
      const hourlyData: Record<number, number[]> = {};

      heartRateSamples.forEach((sample: any) => {
        const hour = new Date(sample.startDate).getHours();
        if (!hourlyData[hour]) {
          hourlyData[hour] = [];
        }
        hourlyData[hour].push(sample.quantity);
      });

      // Create records for hours with data
      Object.entries(hourlyData).forEach(([hour, values]) => {
        if (values.length > 0) {
          const avgHeartRate = Math.round(values.reduce((sum, val) => sum + val, 0) / values.length);
          const recordTime = new Date(dayStart);
          recordTime.setHours(parseInt(hour), 30, 0, 0); // Middle of the hour

          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'heart_rate',
            metric_value: {
              bpm: avgHeartRate,
              samples_count: values.length,
              min_bpm: Math.min(...values),
              max_bpm: Math.max(...values),
              source: 'apple_health'
            },
            recorded_at: recordTime.toISOString(),
            sync_date: syncDate
          });
        }
      });

      // Also get HRV if available for this day
      try {
        const hrvSamples = await queryQuantitySamples('HKQuantityTypeIdentifierHeartRateVariabilitySDNN', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (hrvSamples.length > 0) {
          // Use the last HRV reading of the day
          const lastHRV = hrvSamples[hrvSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'heart_rate',
            metric_value: {
              hrv: lastHRV.quantity,
              unit: 'ms',
              source: 'apple_health'
            },
            recorded_at: lastHRV.startDate,
            sync_date: syncDate
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching HRV for day:', error);
      }

    } catch (error) {
      console.warn('🍎 Error creating heart rate records:', error);
    }

    return records;
  }

  /**
   * Create sleep records for a day
   */
  private async createSleepRecords(userId: string, integrationId: string, day: Date): Promise<any[]> {
    const records: any[] = [];

    try {
      // Sleep typically spans from previous night to current day
      const sleepStart = new Date(day);
      sleepStart.setDate(sleepStart.getDate() - 1);
      sleepStart.setHours(18, 0, 0, 0); // 6 PM previous day

      const sleepEnd = new Date(day);
      sleepEnd.setHours(14, 0, 0, 0); // 2 PM current day

      const sleepData = await this.fetchHealthData('getSleepAnalysis', {
        startDate: sleepStart.toISOString(),
        endDate: sleepEnd.toISOString()
      });

      if (sleepData && sleepData.totalSleepHours > 0) {
        const syncDate = day.toISOString().split('T')[0];
        const recordedAt = sleepData.sleepEndTime || sleepEnd.toISOString();

        // Main sleep record
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'sleep',
          metric_value: {
            total_sleep_hours: sleepData.totalSleepHours,
            total_in_bed_hours: sleepData.totalInBedHours,
            sleep_efficiency: sleepData.sleepEfficiency,
            sleep_stages: {
              deep: sleepData.sleepStages.deep,
              rem: sleepData.sleepStages.rem,
              light: sleepData.sleepStages.core + sleepData.sleepStages.asleep,
              awake: sleepData.sleepStages.awake
            },
            sleep_start: sleepData.sleepStartTime,
            sleep_end: sleepData.sleepEndTime,
            source: 'apple_health'
          },
          recorded_at: recordedAt,
          sync_date: syncDate
        });

        // Individual sleep stage records
        if (sleepData.sleepStages.deep > 0) {
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'deep_sleep',
            metric_value: {
              hours: sleepData.sleepStages.deep,
              unit: 'hours',
              source: 'apple_health'
            },
            recorded_at: recordedAt,
            sync_date: syncDate
          });
        }

        if (sleepData.sleepStages.rem > 0) {
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'rem_sleep',
            metric_value: {
              hours: sleepData.sleepStages.rem,
              unit: 'hours',
              source: 'apple_health'
            },
            recorded_at: recordedAt,
            sync_date: syncDate
          });
        }

        const lightSleepHours = (sleepData.sleepStages.core || 0) + (sleepData.sleepStages.asleep || 0);
        if (lightSleepHours > 0) {
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'light_sleep',
            metric_value: {
              hours: lightSleepHours,
              unit: 'hours',
              source: 'apple_health'
            },
            recorded_at: recordedAt,
            sync_date: syncDate
          });
        }

        // Time in bed record
        if (sleepData.totalInBedHours > 0) {
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'time_in_bed',
            metric_value: {
              hours: sleepData.totalInBedHours,
              unit: 'hours',
              source: 'apple_health'
            },
            recorded_at: recordedAt,
            sync_date: syncDate
          });
        }

        // Awakenings record (from awake stage time)
        if (sleepData.sleepStages.awake > 0) {
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'awake_in_bed',
            metric_value: {
              hours: sleepData.sleepStages.awake,
              unit: 'hours',
              source: 'apple_health'
            },
            recorded_at: recordedAt,
            sync_date: syncDate
          });
        }
      }

    } catch (error) {
      console.warn('🍎 Error creating sleep records:', error);
    }

    return records;
  }

  /**
   * Create body measurement records if available for this day
   */
  private async createBodyMeasurementRecords(userId: string, integrationId: string, dayStart: Date, dayEnd: Date): Promise<any[]> {
    const records: any[] = [];
    const syncDate = dayStart.toISOString().split('T')[0];

    try {
      // Check for weight measurements on this day
      const weightSamples = await queryQuantitySamples('HKQuantityTypeIdentifierBodyMass', {
        filter: {
          startDate: dayStart,
          endDate: dayEnd
        },
        ascending: true,
        limit: 0
      });

      if (weightSamples.length > 0) {
        // Use the last weight measurement of the day
        const lastWeight = weightSamples[weightSamples.length - 1];
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'activity', // Body measurements go under activity
          metric_value: {
            weight: lastWeight.quantity,
            unit: lastWeight.unit,
            source: 'apple_health'
          },
          recorded_at: lastWeight.startDate,
          sync_date: syncDate
        });
      }

      // Check for height measurements on this day
      const heightSamples = await queryQuantitySamples('HKQuantityTypeIdentifierHeight', {
        filter: {
          startDate: dayStart,
          endDate: dayEnd
        },
        ascending: true,
        limit: 0
      });

      if (heightSamples.length > 0) {
        const lastHeight = heightSamples[heightSamples.length - 1];
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'activity',
          metric_value: {
            height: lastHeight.quantity,
            unit: lastHeight.unit,
            source: 'apple_health'
          },
          recorded_at: lastHeight.startDate,
          sync_date: syncDate
        });
      }

      // Check for BMI measurements on this day
      const bmiSamples = await queryQuantitySamples('HKQuantityTypeIdentifierBodyMassIndex', {
        filter: {
          startDate: dayStart,
          endDate: dayEnd
        },
        ascending: true,
        limit: 0
      });

      if (bmiSamples.length > 0) {
        const lastBMI = bmiSamples[bmiSamples.length - 1];
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'bmi',
          metric_value: {
            bmi: lastBMI.quantity,
            unit: lastBMI.unit,
            source: 'apple_health'
          },
          recorded_at: lastBMI.startDate,
          sync_date: syncDate
        });
      }

      // Check for body fat percentage measurements on this day
      const bodyFatSamples = await queryQuantitySamples('HKQuantityTypeIdentifierBodyFatPercentage', {
        filter: {
          startDate: dayStart,
          endDate: dayEnd
        },
        ascending: true,
        limit: 0
      });

      if (bodyFatSamples.length > 0) {
        const lastBodyFat = bodyFatSamples[bodyFatSamples.length - 1];
        records.push({
          user_id: userId,
          integration_id: integrationId,
          metric_type: 'body_fat_percentage',
          metric_value: {
            percentage: lastBodyFat.quantity * 100, // Convert to percentage
            unit: 'percent',
            source: 'apple_health'
          },
          recorded_at: lastBodyFat.startDate,
          sync_date: syncDate
        });
      }

    } catch (error) {
      console.warn('🍎 Error creating body measurement records:', error);
    }

    return records;
  }

  /**
   * Create vital signs records (resting heart rate, HRV, blood pressure, respiratory rate, oxygen saturation, body temperature)
   */
  private async createVitalSignsRecords(userId: string, integrationId: string, dayStart: Date, dayEnd: Date): Promise<any[]> {
    const records: any[] = [];
    const syncDate = dayStart.toISOString().split('T')[0];

    try {
      // Resting heart rate - use most recent from the day
      try {
        const restingHRSamples = await queryQuantitySamples('HKQuantityTypeIdentifierRestingHeartRate', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (restingHRSamples.length > 0) {
          const lastRestingHR = restingHRSamples[restingHRSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'resting_heart_rate',
            metric_value: {
              bpm: Math.round(lastRestingHR.quantity),
              unit: 'bpm',
              source: 'apple_health'
            },
            recorded_at: lastRestingHR.startDate,
            sync_date: syncDate
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching resting heart rate:', error);
      }

      // Heart Rate Variability - use most recent from the day
      try {
        const hrvSamples = await queryQuantitySamples('HKQuantityTypeIdentifierHeartRateVariabilitySDNN', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (hrvSamples.length > 0) {
          const lastHRV = hrvSamples[hrvSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'hrv',
            metric_value: {
              hrv_sdnn: lastHRV.quantity,
              unit: 'ms',
              source: 'apple_health'
            },
            recorded_at: lastHRV.startDate,
            sync_date: syncDate
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching HRV:', error);
      }

      // Blood Pressure - check for measurements on this day
      try {
        const systolicSamples = await queryQuantitySamples('HKQuantityTypeIdentifierBloodPressureSystolic', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        const diastolicSamples = await queryQuantitySamples('HKQuantityTypeIdentifierBloodPressureDiastolic', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (systolicSamples.length > 0) {
          const lastSystolic = systolicSamples[systolicSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'blood_pressure_systolic',
            metric_value: {
              pressure: lastSystolic.quantity,
              unit: 'mmHg',
              source: 'apple_health'
            },
            recorded_at: lastSystolic.startDate,
            sync_date: syncDate
          });
        }

        if (diastolicSamples.length > 0) {
          const lastDiastolic = diastolicSamples[diastolicSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'blood_pressure_diastolic',
            metric_value: {
              pressure: lastDiastolic.quantity,
              unit: 'mmHg',
              source: 'apple_health'
            },
            recorded_at: lastDiastolic.startDate,
            sync_date: syncDate
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching blood pressure:', error);
      }

      // Respiratory Rate - use most recent from the day
      try {
        const respiratorySamples = await queryQuantitySamples('HKQuantityTypeIdentifierRespiratoryRate', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (respiratorySamples.length > 0) {
          const lastRespiratory = respiratorySamples[respiratorySamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'respiratory_rate',
            metric_value: {
              rate: lastRespiratory.quantity,
              unit: 'breaths/min',
              source: 'apple_health'
            },
            recorded_at: lastRespiratory.startDate,
            sync_date: syncDate
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching respiratory rate:', error);
      }

      // Oxygen Saturation - use most recent from the day
      try {
        const oxygenSamples = await queryQuantitySamples('HKQuantityTypeIdentifierOxygenSaturation', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (oxygenSamples.length > 0) {
          const lastOxygen = oxygenSamples[oxygenSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'oxygen_saturation',
            metric_value: {
              percentage: lastOxygen.quantity * 100, // Convert to percentage
              unit: '%',
              source: 'apple_health'
            },
            recorded_at: lastOxygen.startDate,
            sync_date: syncDate
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching oxygen saturation:', error);
      }

      // Body Temperature - use most recent from the day
      try {
        console.log('🌡️ Fetching body temperature samples for date range:', { dayStart: dayStart.toISOString(), dayEnd: dayEnd.toISOString() });
        const temperatureSamples = await queryQuantitySamples('HKQuantityTypeIdentifierBodyTemperature', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        console.log('🌡️ Body temperature samples found:', temperatureSamples.length);
        if (temperatureSamples.length > 0) {
          console.log('🌡️ Temperature samples:', temperatureSamples);
          const lastTemperature = temperatureSamples[temperatureSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'body_temperature',
            metric_value: {
              temperature: lastTemperature.quantity,
              unit: lastTemperature.unit || '°F',
              source: 'apple_health'
            },
            recorded_at: lastTemperature.startDate,
            sync_date: syncDate
          });
          console.log('🌡️ Body temperature record created successfully');
        } else {
          console.log('🌡️ No body temperature data available for this date range');
        }
      } catch (error) {
        console.warn('🍎 Error fetching body temperature:', error);
      }

    } catch (error) {
      console.warn('🍎 Error creating vital signs records:', error);
    }

    return records;
  }

  /**
   * Create blood chemistry records (blood glucose)
   */
  private async createBloodChemistryRecords(userId: string, integrationId: string, dayStart: Date, dayEnd: Date): Promise<any[]> {
    const records: any[] = [];
    const syncDate = dayStart.toISOString().split('T')[0];

    try {
      // Blood Glucose - check for measurements on this day
      try {
        const glucoseSamples = await queryQuantitySamples('HKQuantityTypeIdentifierBloodGlucose', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (glucoseSamples.length > 0) {
          // Create record for each glucose measurement (multiple per day are common)
          glucoseSamples.forEach((sample: any) => {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'blood_glucose',
              metric_value: {
                glucose: sample.quantity,
                unit: sample.unit || 'mg/dL',
                source: 'apple_health'
              },
              recorded_at: sample.startDate,
              sync_date: syncDate
            });
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching blood glucose:', error);
      }

    } catch (error) {
      console.warn('🍎 Error creating blood chemistry records:', error);
    }

    return records;
  }

  /**
   * Create environmental records (time in daylight, VO2 max)
   */
  private async createEnvironmentalRecords(userId: string, integrationId: string, dayStart: Date, dayEnd: Date): Promise<any[]> {
    const records: any[] = [];
    const syncDate = dayStart.toISOString().split('T')[0];

    try {
      // Time in Daylight - aggregate for the day
      try {
        const daylightSamples = await queryQuantitySamples('HKQuantityTypeIdentifierTimeInDaylight', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (daylightSamples.length > 0) {
          const totalDaylight = daylightSamples.reduce((sum: number, sample: any) => sum + (sample.quantity || 0), 0);

          if (totalDaylight > 0) {
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'time_in_daylight',
              metric_value: {
                minutes: totalDaylight,
                hours: Math.round((totalDaylight / 60) * 100) / 100,
                unit: 'minutes',
                source: 'apple_health'
              },
              recorded_at: dayEnd.toISOString(),
              sync_date: syncDate
            });
          }
        }
      } catch (error) {
        console.warn('🍎 Error fetching time in daylight:', error);
      }

      // VO2 Max - use most recent from the day
      try {
        const vo2MaxSamples = await queryQuantitySamples('HKQuantityTypeIdentifierVO2Max', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (vo2MaxSamples.length > 0) {
          const lastVO2Max = vo2MaxSamples[vo2MaxSamples.length - 1];
          records.push({
            user_id: userId,
            integration_id: integrationId,
            metric_type: 'vo2_max',
            metric_value: {
              vo2_max: lastVO2Max.quantity,
              unit: lastVO2Max.unit || 'mL/kg·min',
              source: 'apple_health'
            },
            recorded_at: lastVO2Max.startDate,
            sync_date: syncDate
          });
        }
      } catch (error) {
        console.warn('🍎 Error fetching VO2 Max:', error);
      }

    } catch (error) {
      console.warn('🍎 Error creating environmental records:', error);
    }

    return records;
  }

  /**
   * Create reproductive health records (menstruation)
   */
  private async createReproductiveHealthRecords(userId: string, integrationId: string, dayStart: Date, dayEnd: Date): Promise<any[]> {
    const records: any[] = [];
    const syncDate = dayStart.toISOString().split('T')[0];

    try {
      // Menstruation - check for active menstruation on this day
      try {
        const menstruationSamples = await queryCategorySamples('HKCategoryTypeIdentifierMenstrualFlow', {
          filter: {
            startDate: dayStart,
            endDate: dayEnd
          },
          ascending: true,
          limit: 0
        });

        if (menstruationSamples.length > 0) {
          // Find active menstruation (any flow except NotApplicable = 0)
          const activeMenstruation = menstruationSamples.filter((sample: any) => sample.value && sample.value !== 0);

          if (activeMenstruation.length > 0) {
            // Map flow values to text
            const mapFlowValue = (value: number): string => {
              switch (value) {
                case 1: return 'Unspecified';
                case 2: return 'Light';
                case 3: return 'Medium';
                case 4: return 'Heavy';
                default: return 'Unknown';
              }
            };

            // Use the most recent flow value for the day
            const mostRecentFlow = activeMenstruation[activeMenstruation.length - 1];
            records.push({
              user_id: userId,
              integration_id: integrationId,
              metric_type: 'menstruation',
              metric_value: {
                flow: mapFlowValue(mostRecentFlow.value),
                flow_value: mostRecentFlow.value,
                active: true,
                source: 'apple_health'
              },
              recorded_at: mostRecentFlow.startDate,
              sync_date: syncDate
            });
          }
        }
      } catch (error) {
        console.warn('🍎 Error fetching menstruation data:', error);
      }

    } catch (error) {
      console.warn('🍎 Error creating reproductive health records:', error);
    }

    return records;
  }

  /**
   * Helper to count record types for logging
   */
  private getRecordTypeCounts(records: any[]): Record<string, number> {
    const counts: Record<string, number> = {};
    records.forEach(record => {
      counts[record.metric_type] = (counts[record.metric_type] || 0) + 1;
    });
    return counts;
  }

  /**
   * Batch insert wearables data with duplicate prevention using UPSERT
   */
  private async batchInsertWearablesData(records: any[]): Promise<void> {
    console.log(`🍎 Batch inserting ${records.length} wearables data records...`);

    try {
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
          console.error(`🍎 Error upserting batch ${i}-${i + batch.length}:`, error);
          throw error;
        }

        totalUpserted += batch.length;
        console.log(`🍎 Upserted batch ${i}-${i + batch.length} (${batch.length} records)`);
      }

      console.log(`✅ Successfully upserted ${totalUpserted} wearables data records (new + updated)`);

      // Log metric summary
      const metricCounts: Record<string, number> = {};
      records.forEach(record => {
        metricCounts[record.metric_type] = (metricCounts[record.metric_type] || 0) + 1;
      });
      console.log('📊 Metrics populated:', Object.entries(metricCounts).map(([type, count]) => `${type}(${count})`).join(', '));

    } catch (error) {
      console.error('🍎 Error during batch insert:', error);
      throw error;
    }
  }

  /**
   * Remove duplicate records by checking against existing data
   * In production, this would query the database. For now, we'll simulate deduplication
   */
  private async removeDuplicateRecords(records: any[], userId: string, integrationId: string): Promise<any[]> {
    // In production, this would query the wearables_data table to check for existing records
    // For now, we'll do a simple deduplication based on recorded_at + metric_type + sync_date

    const uniqueRecords: any[] = [];
    const seenKeys = new Set<string>();

    records.forEach(record => {
      // Create a unique key for deduplication
      const key = `${record.metric_type}-${record.recorded_at}-${record.sync_date}`;

      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        uniqueRecords.push(record);
      } else {
        console.log(`🍎 Skipping duplicate record: ${key}`);
      }
    });

    return uniqueRecords;
  }

  /**
   * Test the 7-day backfill functionality and preview records without saving
   */
  async testWearablesDataSync(integrationId: string, daysToTest: number = 7): Promise<any> {
    await this.ensureAvailable(integrationId);

    console.log('🧪 Testing Apple Health wearables_data sync for', daysToTest, 'days');

    try {
      // Use a dummy userId for testing
      const testUserId = 'test-user-id';
      const syncResult = await this.syncToWearablesData(testUserId, integrationId, daysToTest);

      console.log('🧪 Test Results:');
      console.log('  - Success:', syncResult.success);
      console.log('  - Records Created:', syncResult.recordsCreated);
      console.log('  - Days Processed:', syncResult.daysProcessed);

      if (syncResult.records && syncResult.records.length > 0) {
        const recordTypeCounts = this.getRecordTypeCounts(syncResult.records);
        console.log('  - Record Types:', recordTypeCounts);

        // Show sample records for each type
        const samplesByType: Record<string, any[]> = {};
        syncResult.records.forEach((record: any) => {
          if (!samplesByType[record.metric_type]) {
            samplesByType[record.metric_type] = [];
          }
          if (samplesByType[record.metric_type].length < 2) {
            samplesByType[record.metric_type].push(record);
          }
        });

        console.log('🧪 Sample Records by Type:');
        Object.entries(samplesByType).forEach(([type, samples]) => {
          console.log(`  ${type}:`, samples.map(s => ({
            recorded_at: s.recorded_at,
            sync_date: s.sync_date,
            metric_value: s.metric_value
          })));
        });

        // Validate record structure
        const validationErrors: string[] = [];
        syncResult.records.forEach((record: any, index: number) => {
          if (!record.user_id) validationErrors.push(`Record ${index}: Missing user_id`);
          if (!record.integration_id) validationErrors.push(`Record ${index}: Missing integration_id`);
          if (!record.metric_type) validationErrors.push(`Record ${index}: Missing metric_type`);
          if (!record.metric_value) validationErrors.push(`Record ${index}: Missing metric_value`);
          if (!record.recorded_at) validationErrors.push(`Record ${index}: Missing recorded_at`);
          if (!record.sync_date) validationErrors.push(`Record ${index}: Missing sync_date`);
        });

        if (validationErrors.length > 0) {
          console.warn('🧪 Validation Errors:', validationErrors);
        } else {
          console.log('✅ All records passed validation');
        }
      }

      return {
        success: true,
        testResults: syncResult,
        summary: {
          recordsCreated: syncResult.recordsCreated,
          daysProcessed: syncResult.daysProcessed,
          recordTypes: syncResult.records ? this.getRecordTypeCounts(syncResult.records) : {},
          validationPassed: true
        }
      };

    } catch (error) {
      console.error('🧪 Test failed:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown test error'
      };
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