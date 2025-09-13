import { Platform } from 'react-native';
import { HealthKit as AppleHealthKit, HealthKitPermissions, HealthValue, HealthInputOptions } from 'react-native-health';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';

export class AppleHealthKitAuthService extends BaseOAuthService {
  private static instance: AppleHealthKitAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): AppleHealthKitAuthService {
    if (!AppleHealthKitAuthService.instance) {
      AppleHealthKitAuthService.instance = new AppleHealthKitAuthService('apple-health');
    }
    return AppleHealthKitAuthService.instance;
  }

  private constructor(serviceName: string) {
    super(serviceName);
  }

  /**
   * Add a callback to be notified when authentication status changes
   */
  public addAuthCallback(callback: (integrationId: string, isAuthenticated: boolean) => void): void {
    this.authCallbacks.push(callback);
  }

  /**
   * Remove an authentication callback
   */
  public removeAuthCallback(callback: (integrationId: string, isAuthenticated: boolean) => void): void {
    const index = this.authCallbacks.indexOf(callback);
    if (index > -1) {
      this.authCallbacks.splice(index, 1);
    }
  }

  /**
   * Notify all callbacks of authentication status change
   */
  private async notifyAuthCallbacks(integrationId: string): Promise<void> {
    const isAuth = await this.isAuthenticated(integrationId);
    this.authCallbacks.forEach(callback => {
      try {
        callback(integrationId, isAuth);
      } catch (error) {
        console.error('Error in auth callback:', error);
      }
    });
  }

  /**
   * Check if HealthKit is available on device
   */
  private async checkHealthKitAvailability(): Promise<boolean> {
    if (Platform.OS !== 'ios') {
      return false;
    }

    return new Promise((resolve) => {
      AppleHealthKit.isAvailable((error: Error | null, results: boolean) => {
        if (error) {
          console.error('❌ Error checking HealthKit availability:', error);
          resolve(false);
        } else {
          resolve(results);
        }
      });
    });
  }

  /**
   * Request HealthKit permissions (authenticate equivalent)
   */
  async authenticate(integrationId: string): Promise<AuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      if (Platform.OS !== 'ios') {
        throw new Error('HealthKit is only available on iOS devices');
      }

      console.log('🍎 Starting Apple HealthKit permission request...');
      console.log('🍎 Integration ID:', integrationId);

      const isAvailable = await this.checkHealthKitAvailability();
      if (!isAvailable) {
        throw new Error('HealthKit is not available on this device');
      }

      // Request HealthKit permissions
      const permissionsGranted = await this.requestHealthKitPermissions();
      
      if (permissionsGranted) {
        // Create a synthetic token since HealthKit doesn't use OAuth
        const authResult = {
          accessToken: 'healthkit-permissions-granted',
          refreshToken: 'not-applicable',
          expiresAt: Date.now() + (365 * 24 * 60 * 60 * 1000), // 1 year
          scope: 'read'
        };

        await this.storeTokens(authResult, integrationId);
        await this.saveIntegrationToSupabase(authResult, integrationId);
        await this.completeIntegration(authResult, integrationId);
        
        console.log('✅ Apple HealthKit permissions granted successfully');
        await this.notifyAuthCallbacks(integrationId);
        
        return authResult;
      } else {
        throw new Error('HealthKit permissions were not granted');
      }

    } catch (error) {
      console.error('❌ Error during Apple HealthKit authentication:', error);
      throw error;
    }
  }

  /**
   * Request specific HealthKit permissions
   */
  private async requestHealthKitPermissions(): Promise<boolean> {
    const permissions: HealthKitPermissions = {
      permissions: {
        read: [
          AppleHealthKit.Constants.Permissions.Steps,
          AppleHealthKit.Constants.Permissions.StepCount,
          AppleHealthKit.Constants.Permissions.HeartRate,
          AppleHealthKit.Constants.Permissions.Weight,
          AppleHealthKit.Constants.Permissions.Height,
          AppleHealthKit.Constants.Permissions.BodyMassIndex,
          AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
          AppleHealthKit.Constants.Permissions.SleepAnalysis,
          AppleHealthKit.Constants.Permissions.BloodPressureDiastolic,
          AppleHealthKit.Constants.Permissions.BloodPressureSystolic,
          AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
          AppleHealthKit.Constants.Permissions.FlightsClimbed,
          AppleHealthKit.Constants.Permissions.RestingHeartRate,
          AppleHealthKit.Constants.Permissions.HeartRateVariability,
          AppleHealthKit.Constants.Permissions.BodyFatPercentage,
          AppleHealthKit.Constants.Permissions.RespiratoryRate,
          AppleHealthKit.Constants.Permissions.BodyTemperature,
          AppleHealthKit.Constants.Permissions.BloodGlucose,
          AppleHealthKit.Constants.Permissions.OxygenSaturation,
        ],
        write: [] // Only request write permissions if needed
      }
    };

    return new Promise((resolve) => {
      AppleHealthKit.initHealthKit(permissions, (error: Error | null) => {
        if (error) {
          console.error('❌ Error requesting HealthKit permissions:', error);
          resolve(false);
        } else {
          console.log('✅ HealthKit permissions granted');
          resolve(true);
        }
      });
    });
  }

  /**
   * Refresh token (not applicable for HealthKit, but required by base class)
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('🍎 HealthKit permissions do not expire, returning existing auth...');

      // Check if permissions are still granted
      const isStillAuthorized = await this.checkPermissionStatus();
      
      if (isStillAuthorized) {
        return {
          accessToken: 'healthkit-permissions-granted',
          refreshToken: 'not-applicable',
          expiresAt: Date.now() + (365 * 24 * 60 * 60 * 1000), // 1 year
          scope: 'read'
        };
      } else {
        throw new Error('HealthKit permissions have been revoked');
      }
    } catch (error) {
      console.error('❌ HealthKit permission check failed:', error);
      throw new Error('Please re-authorize HealthKit access in the Health app settings');
    }
  }

  /**
   * Check current permission status
   */
  private async checkPermissionStatus(): Promise<boolean> {
    if (Platform.OS !== 'ios') {
      return false;
    }

    return new Promise((resolve) => {
      AppleHealthKit.getAuthStatus(
        { permissions: { read: [AppleHealthKit.Constants.Permissions.Steps] } },
        (error: Error | null, results: any) => {
          if (error) {
            console.error('❌ Error checking HealthKit permission status:', error);
            resolve(false);
          } else {
            // Check if at least one permission is granted
            const isAuthorized = results?.permissions?.read?.some(
              (permission: any) => permission.status === 'SharingAuthorized'
            );
            resolve(isAuthorized || false);
          }
        }
      );
    });
  }

  /**
   * Save integration to Supabase
   */
  private async saveIntegrationToSupabase(tokenData: any, integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error('User not authenticated with Supabase');
      }

      const expiresAt = new Date(tokenData.expiresAt);
      
      const { error } = await supabase
        .from('integrations')
        .update({
          access_token: tokenData.accessToken,
          refresh_token: tokenData.refreshToken,
          expires_at: expiresAt.toISOString(),
          scope: 'read',
          is_active: true,
          configuration: {
            platform: Platform.OS,
            permissions_granted: true,
          },
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Apple HealthKit integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving Apple HealthKit integration to Supabase:', error);
    }
  }

  /**
   * Disconnect and deactivate integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🍎 Disconnecting Apple HealthKit integration...');
      
      // Note: We cannot programmatically revoke HealthKit permissions
      // Users must do this manually in the Health app
      console.log('ℹ️ Note: HealthKit permissions must be revoked manually in the Health app');
      
      await this.clearStoredTokens(integrationId);
      await this.deactivateIntegrationInSupabase(integrationId);
      await this.notifyAuthCallbacks(integrationId);
      
      console.log('✅ Apple HealthKit integration disconnected locally');
    } catch (error) {
      console.error('❌ Error during Apple HealthKit disconnect:', error);
      await this.notifyAuthCallbacks(integrationId);
      throw error;
    }
  }

  /**
   * Deactivate integration in Supabase
   */
  private async deactivateIntegrationInSupabase(integrationId: string): Promise<void> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        console.warn('User not authenticated with Supabase during sign out');
        return;
      }

      const { error } = await supabase
        .from('integrations')
        .update({ is_active: false })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Apple HealthKit integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating Apple HealthKit integration in Supabase:', error);
    }
  }

  /**
   * Get health data from HealthKit
   */
  async getHealthData(dataType: string, integrationId: string, startDate?: Date, endDate?: Date): Promise<any> {
    if (Platform.OS !== 'ios') {
      throw new Error('HealthKit is only available on iOS');
    }

    const isAuth = await this.isAuthenticated(integrationId);
    if (!isAuth) {
      throw new Error('Not authenticated with HealthKit');
    }

    const options: HealthInputOptions = {
      startDate: (startDate || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).toISOString(),
      endDate: (endDate || new Date()).toISOString(),
    };

    return new Promise((resolve, reject) => {
      // Map common data types to their HealthKit methods
      switch (dataType.toLowerCase()) {
        case 'steps':
        case 'stepcount':
          AppleHealthKit.getDailyStepCountSamples(options, (error: Error | null, results: HealthValue[]) => {
            if (error) {
              reject(error);
            } else {
              resolve({ dataType, samples: results });
            }
          });
          break;

        case 'heartrate':
          AppleHealthKit.getHeartRateSamples(options, (error: Error | null, results: HealthValue[]) => {
            if (error) {
              reject(error);
            } else {
              resolve({ dataType, samples: results });
            }
          });
          break;

        case 'weight':
          AppleHealthKit.getWeightSamples(options, (error: Error | null, results: HealthValue[]) => {
            if (error) {
              reject(error);
            } else {
              resolve({ dataType, samples: results });
            }
          });
          break;

        case 'sleep':
        case 'sleepanalysis':
          AppleHealthKit.getSleepSamples(options, (error: Error | null, results: any[]) => {
            if (error) {
              reject(error);
            } else {
              resolve({ dataType, samples: results });
            }
          });
          break;

        case 'bloodpressure':
          AppleHealthKit.getBloodPressureSamples(options, (error: Error | null, results: any[]) => {
            if (error) {
              reject(error);
            } else {
              resolve({ dataType, samples: results });
            }
          });
          break;

        case 'activeenergy':
        case 'activeenergyburned':
          AppleHealthKit.getActiveEnergyBurned(options, (error: Error | null, results: HealthValue[]) => {
            if (error) {
              reject(error);
            } else {
              resolve({ dataType, samples: results });
            }
          });
          break;

        case 'distance':
        case 'distancewalkingrunning':
          AppleHealthKit.getDistanceWalkingRunning(options, (error: Error | null, results: HealthValue[]) => {
            if (error) {
              reject(error);
            } else {
              resolve({ dataType, samples: results });
            }
          });
          break;

        default:
          reject(new Error(`Unsupported data type: ${dataType}`));
      }
    });
  }

  /**
   * Test the connection by checking permission status
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      if (Platform.OS !== 'ios') {
        throw new Error('HealthKit is only available on iOS');
      }

      const isAvailable = await this.checkHealthKitAvailability();
      const isAuthorized = await this.checkPermissionStatus();
      
      return {
        available: isAvailable,
        authorized: isAuthorized,
        platform: Platform.OS,
        connectionStatus: isAvailable && isAuthorized ? 'active' : 'inactive'
      };
    } catch (error) {
      console.error('🔴 Apple HealthKit connection test failed:', error);
      throw error;
    }
  }

  /**
   * Get latest health metrics summary
   */
  async getHealthSummary(integrationId: string): Promise<any> {
    if (Platform.OS !== 'ios') {
      throw new Error('HealthKit is only available on iOS');
    }

    const isAuth = await this.isAuthenticated(integrationId);
    if (!isAuth) {
      throw new Error('Not authenticated with HealthKit');
    }

    const endDate = new Date();
    const startDate = new Date(Date.now() - 24 * 60 * 60 * 1000); // Last 24 hours

    const summary: any = {};

    // Get latest values for various metrics
    const metricsToFetch = [
      { key: 'steps', method: 'getStepCount' },
      { key: 'heartRate', method: 'getLatestHeartRate' },
      { key: 'weight', method: 'getLatestWeight' },
      { key: 'height', method: 'getLatestHeight' },
      { key: 'bmi', method: 'getLatestBmi' },
    ];

    for (const metric of metricsToFetch) {
      try {
        const data = await this.getLatestMetric(metric.method, { startDate: startDate.toISOString(), endDate: endDate.toISOString() });
        summary[metric.key] = data;
      } catch (error) {
        console.warn(`Failed to fetch ${metric.key}:`, error);
        summary[metric.key] = null;
      }
    }

    return summary;
  }

  /**
   * Helper method to get latest metric value
   */
  private getLatestMetric(method: string, options: any): Promise<any> {
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
   * Get available data types that the user has granted access to
   */
  async getAvailableDataTypes(integrationId: string): Promise<string[]> {
    if (Platform.OS !== 'ios') {
      throw new Error('HealthKit is only available on iOS');
    }

    const isAuth = await this.isAuthenticated(integrationId);
    if (!isAuth) {
      throw new Error('Not authenticated with HealthKit');
    }

    // Check which permissions are actually granted
    const availableTypes: string[] = [];
    const typesToCheck = [
      'Steps', 'HeartRate', 'Weight', 'Height', 'BodyMassIndex',
      'ActiveEnergyBurned', 'SleepAnalysis', 'BloodPressureDiastolic',
      'BloodPressureSystolic', 'DistanceWalkingRunning'
    ];

    for (const type of typesToCheck) {
      const isAvailable = await this.checkSpecificPermission(type);
      if (isAvailable) {
        availableTypes.push(type);
      }
    }

    return availableTypes;
  }

  /**
   * Check if a specific data type permission is granted
   */
  private async checkSpecificPermission(dataType: string): Promise<boolean> {
    return new Promise((resolve) => {
      const permission = (AppleHealthKit.Constants.Permissions as any)[dataType];
      if (!permission) {
        resolve(false);
        return;
      }

      AppleHealthKit.getAuthStatus(
        { permissions: { read: [permission] } },
        (error: Error | null, results: any) => {
          if (error) {
            resolve(false);
          } else {
            const isAuthorized = results?.permissions?.read?.some(
              (p: any) => p.status === 'SharingAuthorized'
            );
            resolve(isAuthorized || false);
          }
        }
      );
    });
  }
}

export default AppleHealthKitAuthService;