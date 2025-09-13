import { Platform } from 'react-native';
import { DatabaseService } from '../../supabase/supabase';
import { IntegrationService } from '../IntegrationService';
import AppleHealthKitDataService from './AppleHealthKitDataService';
import { useAuth } from '../../auth/AuthContext';

interface HealthSyncResult {
  success: boolean;
  platform: 'ios' | 'android' | 'unsupported';
  synced: boolean;
  error?: string;
  recordsUpdated?: number;
}

/**
 * Service to sync health data from platform-specific sources to the database
 * Handles both Apple HealthKit (iOS) and Google Health Connect (Android)
 */
export class HealthSyncService {
  private static instance: HealthSyncService;
  private lastSyncTime: { [userId: string]: number } = {};
  private readonly SYNC_DEBOUNCE_MS = 30000; // 30 seconds

  private constructor() {}

  static getInstance(): HealthSyncService {
    if (!HealthSyncService.instance) {
      HealthSyncService.instance = new HealthSyncService();
    }
    return HealthSyncService.instance;
  }

  /**
   * Sync health data for the current user
   */
  async syncHealthData(userId: string): Promise<HealthSyncResult> {
    try {
      console.log('🏥 HealthSync: Starting health data sync for user:', userId);

      // Check debounce
      const now = Date.now();
      const lastSync = this.lastSyncTime[userId] || 0;
      if (now - lastSync < this.SYNC_DEBOUNCE_MS) {
        console.log('🏥 HealthSync: Debounced - too soon since last sync');
        return {
          success: true,
          platform: Platform.OS as 'ios' | 'android',
          synced: false,
          error: 'Debounced - too soon since last sync'
        };
      }

      // Update sync time
      this.lastSyncTime[userId] = now;

      console.log('🏥 HealthSync: Platform detected:', Platform.OS);

      // Platform-specific sync
      if (Platform.OS === 'ios') {
        const result = await this.syncAppleHealth(userId);
        console.log('🏥 HealthSync: Sync completed - success:', result.success, 'synced:', result.synced);
        return result;
      } else if (Platform.OS === 'android') {
        const result = await this.syncGoogleHealth(userId);
        console.log('🏥 HealthSync: Sync completed - success:', result.success, 'synced:', result.synced);
        return result;
      } else {
        console.log('🏥 HealthSync: Platform not supported for health sync');
        return {
          success: false,
          platform: 'unsupported',
          synced: false,
          error: 'Platform not supported for health sync'
        };
      }

    } catch (error) {
      console.error('🏥 HealthSync: Error syncing health data:', error);
      return {
        success: false,
        platform: Platform.OS as 'ios' | 'android',
        synced: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Sync Apple HealthKit data (iOS)
   */
  private async syncAppleHealth(userId: string): Promise<HealthSyncResult> {
    try {
      console.log('🍎 HealthSync: Starting Apple Health sync');

      // Check if Apple Health integration exists and is active
      console.log('🍎 HealthSync: Checking for active integration');
      const integrations = await DatabaseService.getIntegrations(userId);
      const appleHealthIntegration = integrations.find(
        (integration: any) => 
          integration.service?.service_name === 'Apple Health' && integration.is_active
      );

      if (!appleHealthIntegration) {
        console.log('🍎 HealthSync: No active Apple Health integration found');
        return {
          success: true,
          platform: 'ios',
          synced: false,
          error: 'No active Apple Health integration'
        };
      }

      console.log('🍎 HealthSync: Active integration found, fetching health data');

      // Get current health data
      const healthKitDataService = AppleHealthKitDataService.getInstance();
      const healthData = await healthKitDataService.getCurrentRealtimeData(appleHealthIntegration.id);

      if (!healthData || Object.keys(healthData).length === 0) {
        console.log('🍎 HealthSync: No health data available');
        return {
          success: true,
          platform: 'ios',
          synced: false,
          error: 'No health data available'
        };
      }

      console.log('🍎 HealthSync: Health data retrieved, filtering valid values');

      // Filter out null/zero/empty values
      const filteredData = this.filterValidHealthData(healthData);

      if (Object.keys(filteredData).length === 0) {
        console.log('🍎 HealthSync: No valid health data after filtering');
        return {
          success: true,
          platform: 'ios',
          synced: false,
          error: 'No valid health data after filtering'
        };
      }

      console.log('🍎 HealthSync: Valid data found, upserting to database');

      // Upsert to database
      await DatabaseService.upsertAppleHealthRealtime(userId, appleHealthIntegration.id, filteredData);

      console.log('🍎 HealthSync: Successfully synced Apple Health data');
      return {
        success: true,
        platform: 'ios',
        synced: true,
        recordsUpdated: 1
      };

    } catch (error) {
      console.error('🍎 HealthSync: Error syncing Apple Health:', error);
      return {
        success: false,
        platform: 'ios',
        synced: false,
        error: error instanceof Error ? error.message : 'Apple Health sync failed'
      };
    }
  }

  /**
   * Sync Google Health Connect data (Android)
   */
  private async syncGoogleHealth(userId: string): Promise<HealthSyncResult> {
    try {
      console.log('🤖 HealthSync: Starting Google Health sync');

      // Check if Google Health Connect integration exists and is active
      console.log('🤖 HealthSync: Checking for active integration');
      const integrations = await DatabaseService.getIntegrations(userId);
      const googleHealthIntegration = integrations.find(
        (integration: any) => 
          integration.service?.service_name === 'Google Health Connect' && integration.is_active
      );

      if (!googleHealthIntegration) {
        console.log('🤖 HealthSync: No active Google Health Connect integration found');
        return {
          success: true,
          platform: 'android',
          synced: false,
          error: 'No active Google Health Connect integration'
        };
      }

      console.log('🤖 HealthSync: Active integration found, but data service not implemented');

      // TODO: Implement Google Health Connect data service
      console.log('🤖 HealthSync: Google Health Connect data service not yet implemented');
      return {
        success: true,
        platform: 'android',
        synced: false,
        error: 'Google Health Connect not yet implemented'
      };

    } catch (error) {
      console.error('🤖 HealthSync: Error syncing Google Health:', error);
      return {
        success: false,
        platform: 'android',
        synced: false,
        error: error instanceof Error ? error.message : 'Google Health sync failed'
      };
    }
  }

  /**
   * Filter out null, zero, empty, or invalid health data values
   */
  private filterValidHealthData(data: Record<string, any>): Record<string, any> {
    const filtered: Record<string, any> = {};

    for (const [key, value] of Object.entries(data)) {
      // Skip if null, undefined, empty string, or zero (for numeric values)
      if (value === null || value === undefined || value === '') {
        continue;
      }

      // For numeric values, skip if zero or negative (health metrics shouldn't be zero)
      if (typeof value === 'number') {
        if (value <= 0 || !isFinite(value)) {
          continue;
        }
      }

      // For arrays, skip if empty
      if (Array.isArray(value) && value.length === 0) {
        continue;
      }

      // Value passed all filters
      filtered[key] = value;
    }

    return filtered;
  }

  /**
   * Check if health sync is available for the current platform
   */
  isHealthSyncAvailable(): boolean {
    return Platform.OS === 'ios' || Platform.OS === 'android';
  }

  /**
   * Get the last sync time for a user
   */
  getLastSyncTime(userId: string): number | null {
    return this.lastSyncTime[userId] || null;
  }

  /**
   * Force clear debounce for a user (useful for testing)
   */
  clearDebounce(userId: string): void {
    delete this.lastSyncTime[userId];
  }
}

export default HealthSyncService;