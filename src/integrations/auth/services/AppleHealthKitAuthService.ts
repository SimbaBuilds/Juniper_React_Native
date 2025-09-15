import { Platform } from 'react-native';
import HealthKit, { 
  isHealthDataAvailable, 
  requestAuthorization, 
  authorizationStatusFor,
  queryQuantitySamples,
  getMostRecentQuantitySample
} from '@kingstinct/react-native-healthkit';
import type { 
  ObjectTypeIdentifier, 
  QuantityTypeIdentifier, 
  AuthorizationRequestStatus,
  QuantitySample
} from '@kingstinct/react-native-healthkit';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';
import HealthSyncService from '../../data/HealthSyncService';

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

    try {
      return isHealthDataAvailable();
    } catch (error) {
      console.error('❌ Error checking HealthKit availability:', error);
      return false;
    }
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

        // Trigger immediate health data sync after all database operations complete
        try {
          const { data: { user } } = await supabase.auth.getUser();
          if (user) {
            console.log('🔄 Apple Health: Triggering immediate health sync after auth...');
            // Use bypassDebounce=true for post-auth sync to ensure it runs immediately
            const syncResult = await HealthSyncService.getInstance().syncHealthData(user.id, true);
            console.log('🔄 Apple Health: Post-auth sync result:', syncResult);
          }
        } catch (syncError) {
          console.warn('⚠️ Apple Health: Post-auth sync failed (auth still successful):', syncError);
        }

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
    const readPermissions: ObjectTypeIdentifier[] = [
      'HKQuantityTypeIdentifierStepCount',
      'HKQuantityTypeIdentifierHeartRate',
      'HKQuantityTypeIdentifierBodyMass',
      'HKQuantityTypeIdentifierHeight',
      'HKQuantityTypeIdentifierBodyMassIndex',
      'HKQuantityTypeIdentifierActiveEnergyBurned',
      'HKQuantityTypeIdentifierBasalEnergyBurned',
      'HKCategoryTypeIdentifierSleepAnalysis',
      'HKQuantityTypeIdentifierBloodPressureDiastolic',
      'HKQuantityTypeIdentifierBloodPressureSystolic',
      'HKQuantityTypeIdentifierDistanceWalkingRunning',
      'HKQuantityTypeIdentifierFlightsClimbed',
      'HKQuantityTypeIdentifierRestingHeartRate',
      'HKQuantityTypeIdentifierHeartRateVariabilitySDNN',
      'HKQuantityTypeIdentifierBodyFatPercentage',
      'HKQuantityTypeIdentifierLeanBodyMass',
      'HKQuantityTypeIdentifierRespiratoryRate',
      'HKQuantityTypeIdentifierBodyTemperature',
      'HKQuantityTypeIdentifierBloodGlucose',
      'HKQuantityTypeIdentifierOxygenSaturation',
      'HKQuantityTypeIdentifierTimeInDaylight',
    ];

    try {
      const success = await requestAuthorization([], readPermissions);
      if (success) {
        console.log('✅ HealthKit permissions granted');
        return true;
      } else {
        console.error('❌ HealthKit permissions denied');
        return false;
      }
    } catch (error) {
      console.error('❌ Error requesting HealthKit permissions:', error);
      return false;
    }
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

    try {
      // Check if at least one basic permission is granted
      const stepCountStatus = authorizationStatusFor('HKQuantityTypeIdentifierStepCount');
      return stepCountStatus === 'SharingAuthorized';
    } catch (error) {
      console.error('❌ Error checking HealthKit permission status:', error);
      return false;
    }
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

    // Map common data types to their HealthKit identifiers
    const typeMapping: Record<string, QuantityTypeIdentifier> = {
      'steps': 'HKQuantityTypeIdentifierStepCount',
      'stepcount': 'HKQuantityTypeIdentifierStepCount',
      'heartrate': 'HKQuantityTypeIdentifierHeartRate',
      'weight': 'HKQuantityTypeIdentifierBodyMass',
      'height': 'HKQuantityTypeIdentifierHeight',
      'bmi': 'HKQuantityTypeIdentifierBodyMassIndex',
      'activeenergy': 'HKQuantityTypeIdentifierActiveEnergyBurned',
      'activeenergyburned': 'HKQuantityTypeIdentifierActiveEnergyBurned',
      'distance': 'HKQuantityTypeIdentifierDistanceWalkingRunning',
      'distancewalkingrunning': 'HKQuantityTypeIdentifierDistanceWalkingRunning',
      'bloodglucose': 'HKQuantityTypeIdentifierBloodGlucose',
      'oxygensaturation': 'HKQuantityTypeIdentifierOxygenSaturation',
    };

    const quantityTypeIdentifier = typeMapping[dataType.toLowerCase()];
    if (!quantityTypeIdentifier) {
      throw new Error(`Unsupported data type: ${dataType}`);
    }

    try {
      const from = startDate || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const to = endDate || new Date();

      const samples = await queryQuantitySamples(quantityTypeIdentifier, {
        from: from.toISOString(),
        to: to.toISOString(),
      });

      return { dataType, samples };
    } catch (error) {
      console.error(`❌ Error fetching ${dataType} data:`, error);
      throw error;
    }
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

    const summary: any = {};

    // Get latest values for various metrics
    const metricsToFetch: Array<{key: string, identifier: QuantityTypeIdentifier}> = [
      { key: 'steps', identifier: 'HKQuantityTypeIdentifierStepCount' },
      { key: 'heartRate', identifier: 'HKQuantityTypeIdentifierHeartRate' },
      { key: 'weight', identifier: 'HKQuantityTypeIdentifierBodyMass' },
      { key: 'height', identifier: 'HKQuantityTypeIdentifierHeight' },
      { key: 'bmi', identifier: 'HKQuantityTypeIdentifierBodyMassIndex' },
    ];

    for (const metric of metricsToFetch) {
      try {
        const data = await getMostRecentQuantitySample(metric.identifier);
        summary[metric.key] = data;
      } catch (error) {
        console.warn(`Failed to fetch ${metric.key}:`, error);
        summary[metric.key] = null;
      }
    }

    return summary;
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
    const typesToCheck: Array<{name: string, identifier: ObjectTypeIdentifier}> = [
      { name: 'Steps', identifier: 'HKQuantityTypeIdentifierStepCount' },
      { name: 'HeartRate', identifier: 'HKQuantityTypeIdentifierHeartRate' },
      { name: 'Weight', identifier: 'HKQuantityTypeIdentifierBodyMass' },
      { name: 'Height', identifier: 'HKQuantityTypeIdentifierHeight' },
      { name: 'BodyMassIndex', identifier: 'HKQuantityTypeIdentifierBodyMassIndex' },
      { name: 'ActiveEnergyBurned', identifier: 'HKQuantityTypeIdentifierActiveEnergyBurned' },
      { name: 'SleepAnalysis', identifier: 'HKCategoryTypeIdentifierSleepAnalysis' },
      { name: 'BloodPressureDiastolic', identifier: 'HKQuantityTypeIdentifierBloodPressureDiastolic' },
      { name: 'BloodPressureSystolic', identifier: 'HKQuantityTypeIdentifierBloodPressureSystolic' },
      { name: 'DistanceWalkingRunning', identifier: 'HKQuantityTypeIdentifierDistanceWalkingRunning' }
    ];

    for (const type of typesToCheck) {
      try {
        const status = authorizationStatusFor(type.identifier);
        if (status === 'SharingAuthorized') {
          availableTypes.push(type.name);
        }
      } catch (error) {
        console.warn(`Error checking ${type.name} permission:`, error);
      }
    }

    return availableTypes;
  }
}

export default AppleHealthKitAuthService;