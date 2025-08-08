import { supabase } from '../supabase/supabase';
import { UserProfile } from '../supabase/tables';
import { DEFAULT_WAKE_PHRASE } from '../wakeword/constants';

export class UserProfileService {
  /**
   * Create a new user profile with default values
   */
  static async createUserProfile(userId: string, displayName?: string): Promise<UserProfile> {
    try {
      const defaultProfile: Omit<UserProfile, 'created_at' | 'updated_at'> = {
        id: userId,
        display_name: displayName,
        deepgram_enabled: false,
        base_language_model: 'claude-sonnet-4-20250514',
        general_instructions: '',
        wake_word: DEFAULT_WAKE_PHRASE,
        wake_word_sensitivity: 0.3,
        wake_word_detection_enabled: true,
        selected_deepgram_voice: 'aura-2-mars-en',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        // Add missing properties
        requests_today: 0,
        requests_week: 0,
        requests_month: 0,
        // System integrations defaults
        enabled_system_integrations: {
          perplexity: true,
          textbelt: true,
          xai_live_search: true,
        },
        perplexity_usage_month: 0,
        textbelt_usage_month: 0,
        xai_live_search_month: 0,
        ubp_current: 0,
        ubp_max: 0
      };

      const { data, error } = await supabase
        .from('user_profiles')
        .insert(defaultProfile)
        .select()
        .single();

      if (error) {
        console.error('Error creating user profile:', error);
        throw error;
      }

      console.log('✅ User profile created successfully:', data);
      return data;
    } catch (error) {
      console.error('❌ Failed to create user profile:', error);
      throw error;
    }
  }

  /**
   * Get user profile by user ID
   */
  static async getUserProfile(userId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows found
          return null;
        }
        throw error;
      }

      return data;
    } catch (error) {
      console.error('❌ Failed to get user profile:', error);
      throw error;
    }
  }

  /**
   * Update user profile
   */
  static async updateUserProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        console.error('Error updating user profile:', error);
        throw error;
      }

      console.log('✅ User profile updated successfully:', data);
      return data;
    } catch (error) {
      console.error('❌ Failed to update user profile:', error);
      throw error;
    }
  }

  /**
   * Check if user profile exists
   */
  static async profileExists(userId: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('id', userId)
        .single();

      if (error && error.code === 'PGRST116') {
        return false;
      }

      return !!data;
    } catch (error) {
      console.error('❌ Failed to check if profile exists:', error);
      return false;
    }
  }
} 