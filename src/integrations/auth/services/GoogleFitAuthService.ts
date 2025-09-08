import { Platform } from 'react-native';
import { BaseOAuthService, AuthResult } from '../BaseOAuthService';
import { supabase } from '../../../supabase/supabase';

export class GoogleFitAuthService extends BaseOAuthService {
  private static instance: GoogleFitAuthService;
  private authCallbacks: Array<(integrationId: string, isAuthenticated: boolean) => void> = [];

  static getInstance(): GoogleFitAuthService {
    if (!GoogleFitAuthService.instance) {
      GoogleFitAuthService.instance = new GoogleFitAuthService('google-fit');
    }
    return GoogleFitAuthService.instance;
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
   * Check if Health Connect is available on device
   */
  private async checkHealthConnectAvailability(): Promise<boolean> {
    if (Platform.OS !== 'android') {
      return false;
    }

    try {
      // This would use react-native-health-connect
      // const { isAvailable } = require('react-native-health-connect');
      // return await isAvailable();
      
      // For now, assume available on Android API 26+ (Android 8.0+)
      return true;
    } catch (error) {
      console.error('❌ Error checking Health Connect availability:', error);
      return false;
    }
  }

  /**
   * Request Health Connect permissions (authenticate equivalent)
   */
  async authenticate(integrationId: string): Promise<AuthResult> {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      if (Platform.OS !== 'android') {
        throw new Error('Google Fit/Health Connect is only available on Android devices');
      }

      console.log('🤖 Starting Health Connect permission request...');
      console.log('🤖 Integration ID:', integrationId);

      const isAvailable = await this.checkHealthConnectAvailability();
      if (!isAvailable) {
        throw new Error('Health Connect is not available on this device. Please install Health Connect from Google Play Store.');
      }

      // Initialize Health Connect
      await this.initializeHealthConnect();

      // Request Health Connect permissions
      const permissionsGranted = await this.requestHealthConnectPermissions();
      
      if (permissionsGranted) {
        // Create a synthetic token since Health Connect doesn't use OAuth
        const authResult = {
          accessToken: 'health-connect-permissions-granted',
          refreshToken: 'not-applicable',
          expiresAt: Date.now() + (365 * 24 * 60 * 60 * 1000), // 1 year
          scope: 'read'
        };

        await this.storeTokens(authResult, integrationId);
        await this.saveIntegrationToSupabase(authResult, integrationId);
        await this.completeIntegration(authResult, integrationId);
        
        console.log('✅ Health Connect permissions granted successfully');
        await this.notifyAuthCallbacks(integrationId);
        
        return authResult;
      } else {
        throw new Error('Health Connect permissions were not granted');
      }

    } catch (error) {
      console.error('❌ Error during Health Connect authentication:', error);
      throw error;
    }
  }

  /**
   * Initialize Health Connect
   */
  private async initializeHealthConnect(): Promise<void> {
    try {
      // This would initialize react-native-health-connect
      // const { initialize } = require('react-native-health-connect');
      // await initialize();
      
      console.log('🤖 Health Connect initialized');
    } catch (error) {
      console.error('❌ Error initializing Health Connect:', error);
      throw error;
    }
  }

  /**
   * Request specific Health Connect permissions
   */
  private async requestHealthConnectPermissions(): Promise<boolean> {
    try {
      // This would integrate with react-native-health-connect
      // const { requestPermission } = require('react-native-health-connect');
      
      // const permissions = [
      //   { accessType: 'read', recordType: 'Steps' },
      //   { accessType: 'read', recordType: 'HeartRate' },
      //   { accessType: 'read', recordType: 'Weight' },
      //   { accessType: 'read', recordType: 'Height' },
      //   { accessType: 'read', recordType: 'ActiveCaloriesBurned' },
      //   { accessType: 'read', recordType: 'SleepSession' },
      //   { accessType: 'read', recordType: 'BloodPressure' },
      //   { accessType: 'read', recordType: 'Distance' },
      // ];

      // const results = await requestPermission(permissions);
      // return results.every(result => result === 'granted');

      // For now, simulate permission grant
      console.log('🤖 Simulating Health Connect permission request...');
      return true;
      
    } catch (error) {
      console.error('❌ Error requesting Health Connect permissions:', error);
      return false;
    }
  }

  /**
   * Refresh token (not applicable for Health Connect, but required by base class)
   */
  async refreshToken(refreshToken: string, integrationId: string): Promise<AuthResult> {
    try {
      console.log('🤖 Health Connect permissions do not expire, returning existing auth...');

      // Check if permissions are still granted
      const isStillAuthorized = await this.checkPermissionStatus();
      
      if (isStillAuthorized) {
        return {
          accessToken: 'health-connect-permissions-granted',
          refreshToken: 'not-applicable',
          expiresAt: Date.now() + (365 * 24 * 60 * 60 * 1000), // 1 year
          scope: 'read'
        };
      } else {
        throw new Error('Health Connect permissions have been revoked');
      }
    } catch (error) {
      console.error('❌ Health Connect permission check failed:', error);
      throw new Error('Please re-authorize Health Connect access in the Health Connect app settings');
    }
  }

  /**
   * Check current permission status
   */
  private async checkPermissionStatus(): Promise<boolean> {
    try {
      if (Platform.OS !== 'android') {
        return false;
      }

      // This would check actual Health Connect permission status
      // const { getGrantedPermissions } = require('react-native-health-connect');
      // const permissions = await getGrantedPermissions();
      // return permissions.length > 0;

      // For now, assume authorized
      return true;
    } catch (error) {
      console.error('❌ Error checking Health Connect permission status:', error);
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
            api_type: 'health_connect',
            permissions_granted: true,
          },
        })
        .eq('id', integrationId)
        .eq('user_id', user.id);

      if (error) {
        throw error;
      }

      console.log('✅ Health Connect integration saved to Supabase');
    } catch (error) {
      console.error('❌ Error saving Health Connect integration to Supabase:', error);
    }
  }

  /**
   * Disconnect and deactivate integration
   */
  async disconnect(integrationId: string): Promise<void> {
    try {
      console.log('🤖 Disconnecting Health Connect integration...');
      
      // Note: We cannot programmatically revoke Health Connect permissions
      // Users must do this manually in the Health Connect app
      console.log('ℹ️ Note: Health Connect permissions must be revoked manually in the Health Connect app');
      
      await this.clearStoredTokens(integrationId);
      await this.deactivateIntegrationInSupabase(integrationId);
      await this.notifyAuthCallbacks(integrationId);
      
      console.log('✅ Health Connect integration disconnected locally');
    } catch (error) {
      console.error('❌ Error during Health Connect disconnect:', error);
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

      console.log('✅ Health Connect integration deactivated in Supabase');
    } catch (error) {
      console.error('❌ Error deactivating Health Connect integration in Supabase:', error);
    }
  }

  /**
   * Get health data from Health Connect
   */
  async getHealthData(recordType: string, integrationId: string, startTime?: Date, endTime?: Date): Promise<any> {
    try {
      if (Platform.OS !== 'android') {
        throw new Error('Health Connect is only available on Android');
      }

      const isAuth = await this.isAuthenticated(integrationId);
      if (!isAuth) {
        throw new Error('Not authenticated with Health Connect');
      }

      // This would use the Health Connect library to fetch data
      // const { readRecords } = require('react-native-health-connect');
      // const options = {
      //   timeRangeFilter: {
      //     operator: 'between',
      //     startTime: startTime?.toISOString(),
      //     endTime: endTime?.toISOString(),
      //   },
      // };
      // return await readRecords(recordType, options);

      // For now, return mock data
      console.log(`🤖 Fetching ${recordType} data from Health Connect...`);
      return {
        recordType,
        records: [],
        message: 'Health Connect integration would provide real data here'
      };

    } catch (error) {
      console.error('🔴 Error fetching Health Connect data:', error);
      throw error;
    }
  }

  /**
   * Get aggregated health data
   */
  async getAggregatedData(recordType: string, integrationId: string, startTime?: Date, endTime?: Date): Promise<any> {
    try {
      if (Platform.OS !== 'android') {
        throw new Error('Health Connect is only available on Android');
      }

      const isAuth = await this.isAuthenticated(integrationId);
      if (!isAuth) {
        throw new Error('Not authenticated with Health Connect');
      }

      // This would use Health Connect aggregation
      // const { aggregate } = require('react-native-health-connect');
      // const options = {
      //   recordType,
      //   timeRangeFilter: {
      //     operator: 'between',
      //     startTime: startTime?.toISOString(),
      //     endTime: endTime?.toISOString(),
      //   },
      // };
      // return await aggregate(options);

      console.log(`🤖 Fetching aggregated ${recordType} data from Health Connect...`);
      return {
        recordType,
        aggregation: {},
        message: 'Health Connect integration would provide real aggregated data here'
      };

    } catch (error) {
      console.error('🔴 Error fetching aggregated Health Connect data:', error);
      throw error;
    }
  }

  /**
   * Test the connection by checking permission status
   */
  async testConnection(integrationId: string): Promise<any> {
    try {
      if (Platform.OS !== 'android') {
        throw new Error('Health Connect is only available on Android');
      }

      const isAvailable = await this.checkHealthConnectAvailability();
      const isAuthorized = await this.checkPermissionStatus();
      
      return {
        available: isAvailable,
        authorized: isAuthorized,
        platform: Platform.OS,
        apiType: 'health_connect',
        connectionStatus: isAvailable && isAuthorized ? 'active' : 'inactive'
      };
    } catch (error) {
      console.error('🔴 Health Connect connection test failed:', error);
      throw error;
    }
  }
}

export default GoogleFitAuthService;