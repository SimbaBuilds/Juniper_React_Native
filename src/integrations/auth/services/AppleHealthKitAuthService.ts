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
        // Set a very long expiration (10 years) since HealthKit permissions don't expire
        const authResult = {
          accessToken: 'healthkit-permissions-granted',
          refreshToken: 'not-applicable',
          expiresAt: Date.now() + (10 * 365 * 24 * 60 * 60 * 1000), // 10 years
          scope: 'read'
        };

        await this.storeTokens(authResult, integrationId);
        await this.saveIntegrationToSupabase(authResult, integrationId);
        await this.completeIntegration(authResult, integrationId);

        console.log('✅ Apple HealthKit permissions granted successfully');
        await this.notifyAuthCallbacks(integrationId);

        // Edge function will be called after integration is saved to Supabase in saveIntegrationToSupabase

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
      'HKQuantityTypeIdentifierVO2Max',
      'HKCategoryTypeIdentifierMenstrualFlow',
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
   * For HealthKit, we trust stored tokens and only invalidate on actual data access failures
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('🍎 HealthKit permissions do not expire, returning refreshed auth token...');

      // For HealthKit, we always return a valid token since permissions don't expire
      // and we can't reliably check permission status due to iOS privacy restrictions.
      // If permissions were actually revoked, we'll catch that during data access attempts.
      return {
        accessToken: 'healthkit-permissions-granted',
        refreshToken: 'not-applicable',
        expiresAt: Date.now() + (10 * 365 * 24 * 60 * 60 * 1000), // 10 years
        scope: 'read'
      };
    } catch (error) {
      console.error('❌ HealthKit token refresh failed:', error);
      throw new Error('HealthKit token refresh failed');
    }
  }

  /**
   * Check current permission status
   * Note: authorizationStatusFor() cannot determine read permission status for privacy reasons.
   * iOS always returns 'NotDetermined' for read permissions even when granted.
   * We should trust stored tokens instead of relying on this unreliable check.
   */
  private async checkPermissionStatus(): Promise<boolean> {
    if (Platform.OS !== 'ios') {
      return false;
    }

    // For HealthKit read permissions, we cannot reliably check permission status
    // due to iOS privacy restrictions. authorizationStatusFor() returns 'NotDetermined'
    // even when permissions are granted. We should trust that if we have a stored token,
    // permissions are still valid until proven otherwise by actual data access failures.
    console.log('🍎 HealthKit: Trusting stored token for permission status (iOS limitation)');
    return true;
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

      // First sync raw data to wearables_data table
      try {
        console.log('🔄 Apple Health: Syncing raw data to wearables_data table...');
        const { AppleHealthKitDataService } = await import('../../../integrations/data/AppleHealthKitDataService');
        const dataService = AppleHealthKitDataService.getInstance();
        const syncResult = await dataService.syncToWearablesData(user.id, integrationId, 7);
        console.log('✅ Apple Health: Raw data synced to wearables_data table:', syncResult);

        // Then trigger health-data-sync edge function for daily metrics processing
        console.log('🔄 Apple Health: Triggering health-data-sync edge function for daily metrics...');
        const response = await fetch('https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/health-data-sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
          },
          body: JSON.stringify({
            action: 'backfill',
            user_id: user.id,
            service_name: 'Apple Health',
            days: 7
          })
        });

        if (response.ok) {
          const result = await response.json();
          console.log('✅ Apple Health: Edge function sync triggered successfully:', result);
        } else {
          console.warn('⚠️ Apple Health: Edge function sync failed:', response.status, response.statusText);
        }
      } catch (syncError) {
        console.warn('⚠️ Apple Health: Sync failed (integration saved, auth still successful):', syncError);
      }
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
      throw new Error('Not authenticated with HealthKit. Please authorize access first.');
    }

    // Map common data types to their HealthKit identifiers
    const typeMapping: Record<string, QuantityTypeIdentifier> = {
      'steps': 'HKQuantityTypeIdentifierStepCount',
      'stepcount': 'HKQuantityTypeIdentifierStepCount',
      'heartrate': 'HKQuantityTypeIdentifierHeartRate',
      'weight': 'HKQuantityTypeIdentifierBodyMass',
      'height': 'HKQuantityTypeIdentifierHeight',
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

      // Check if this is a permission error vs other types of errors
      const errorMessage = error instanceof Error ? error.message : String(error);
      if (errorMessage.includes('permission') || errorMessage.includes('authorization') ||
          errorMessage.includes('denied') || errorMessage.includes('not authorized')) {
        // This is likely a permission error - clear stored tokens and require re-auth
        console.error('🍎 HealthKit permission error detected, clearing stored tokens');
        await this.clearStoredTokens(integrationId);
        throw new Error('HealthKit permissions have been revoked. Please re-authorize access in the Health app settings.');
      }

      // For other errors, re-throw as-is
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
      throw new Error('Not authenticated with HealthKit. Please authorize access first.');
    }

    const summary: any = {};
    let permissionErrorDetected = false;

    // Get latest values for various metrics
    const metricsToFetch: Array<{key: string, identifier: QuantityTypeIdentifier}> = [
      { key: 'steps', identifier: 'HKQuantityTypeIdentifierStepCount' },
      { key: 'heartRate', identifier: 'HKQuantityTypeIdentifierHeartRate' },
      { key: 'weight', identifier: 'HKQuantityTypeIdentifierBodyMass' },
      { key: 'height', identifier: 'HKQuantityTypeIdentifierHeight' },
    ];

    for (const metric of metricsToFetch) {
      try {
        const data = await getMostRecentQuantitySample(metric.identifier);
        summary[metric.key] = data;
      } catch (error) {
        console.warn(`Failed to fetch ${metric.key}:`, error);

        // Check if this is a permission error
        const errorMessage = error instanceof Error ? error.message : String(error);
        if (errorMessage.includes('permission') || errorMessage.includes('authorization') ||
            errorMessage.includes('denied') || errorMessage.includes('not authorized')) {
          permissionErrorDetected = true;
        }

        summary[metric.key] = null;
      }
    }

    // If we detected permission errors, clear tokens and throw
    if (permissionErrorDetected) {
      console.error('🍎 HealthKit permission error detected during summary fetch, clearing stored tokens');
      await this.clearStoredTokens(integrationId);
      throw new Error('HealthKit permissions have been revoked. Please re-authorize access in the Health app settings.');
    }

    return summary;
  }

  /**
   * Override getStoredTokens to prevent unnecessary refresh attempts for HealthKit
   * HealthKit permissions don't expire, so we should always trust stored tokens
   */
  async getStoredTokens(integrationId: string, skipRefresh: boolean = true): Promise<any> {
    // Always skip refresh for HealthKit since permissions don't expire
    return super.getStoredTokens(integrationId, true);
  }

  /**
   * Check if authenticated - overrides base class to avoid permission status checks
   * For HealthKit, we trust stored tokens since permission status can't be reliably checked
   */
  async isAuthenticated(integrationId: string): Promise<boolean> {
    try {
      const tokens = await this.getStoredTokens(integrationId, true); // Skip refresh to avoid circular calls
      return !!tokens?.accessToken;
    } catch (error) {
      console.error('🍎 Error checking HealthKit authentication status:', error);
      return false;
    }
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