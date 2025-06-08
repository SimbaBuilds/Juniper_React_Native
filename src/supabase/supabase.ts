import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

// Database service functions
export const DatabaseService = {
  // User Profile (now contains voice settings)
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      throw error
    }
    
    return data
  },

  async updateUserProfile(userId: string, updates: any) {
    // First check if profile exists
    const existingProfile = await this.getUserProfile(userId);
    
    if (!existingProfile) {
      // If profile doesn't exist, create it with complete defaults first
      const defaultProfile = {
        id: userId,
        display_name: updates.display_name || null,
        deepgram_enabled: updates.deepgram_enabled ?? false,
        base_language_model: updates.base_language_model || 'claude-3-5-sonnet-20241022',
        general_instructions: updates.general_instructions || 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.',
        wake_word: updates.wake_word || 'JARVIS',
        wake_word_sensitivity: updates.wake_word_sensitivity ?? 0.3,
        wake_word_detection_enabled: updates.wake_word_detection_enabled ?? false,
        selected_deepgram_voice: updates.selected_deepgram_voice || 'aura-2-arcas-en',
        timezone: updates.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        preferences: updates.preferences || {},
        // XAI LiveSearch defaults
        xai_live_search_enabled: updates.xai_live_search_enabled ?? false,
        xai_live_search_sources: updates.xai_live_search_sources ?? [],
        xai_live_search_country: updates.xai_live_search_country ?? 'US',
        xai_live_search_x_handles: updates.xai_live_search_x_handles ?? [],
        xai_live_search_safe_search: updates.xai_live_search_safe_search ?? true,
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('user_profiles')
        .insert(defaultProfile)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } else {
      // Profile exists, do a regular update
      const updateData = {
        ...updates,
        updated_at: new Date().toISOString()
      };
      
      // Ensure general_instructions is never set to null or empty
      if ('general_instructions' in updateData && (!updateData.general_instructions || updateData.general_instructions.trim() === '')) {
        updateData.general_instructions = 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.';
      }
      
      const { data, error } = await supabase
        .from('user_profiles')
        .update(updateData)
        .eq('id', userId)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  },

  // Voice settings helpers (now part of user_profiles)
  async getVoiceSettings(userId: string) {
    const profile = await this.getUserProfile(userId)
    if (!profile) return null
    
    return {
      deepgram_enabled: profile.deepgram_enabled,
      base_language_model: profile.base_language_model,
      general_instructions: profile.general_instructions,
      selectedWakeWord: profile.wake_word, // Map wake_word to selectedWakeWord for frontend
      wake_word_sensitivity: profile.wake_word_sensitivity,
      wake_word_detection_enabled: profile.wake_word_detection_enabled,
      selected_deepgram_voice: profile.selected_deepgram_voice,
      // XAI LiveSearch settings
      xai_live_search_enabled: profile.xai_live_search_enabled,
      xai_live_search_safe_search: profile.xai_live_search_safe_search,
    }
  },

  async updateVoiceSettings(userId: string, voiceSettings: {
    deepgram_enabled?: boolean;
    base_language_model?: string;
    general_instructions?: string;
  }) {
    // First, ensure the user profile exists with all required fields
    let profile = await this.getUserProfile(userId);
    
    if (!profile) {
      // Create a complete profile with defaults if it doesn't exist
      const defaultProfile = {
        id: userId,
        display_name: null,
        deepgram_enabled: false,
        base_language_model: 'claude-3-5-sonnet-20241022',
        general_instructions: 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.',
        wake_word: 'JARVIS',
        wake_word_sensitivity: 0.3,
        wake_word_detection_enabled: false,
        selected_deepgram_voice: 'aura-2-arcas-en',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        preferences: {},
        // XAI LiveSearch defaults
        xai_live_search_enabled: false,
        xai_live_search_sources: [],
        xai_live_search_country: 'US',
        xai_live_search_x_handles: [],
        xai_live_search_safe_search: true,
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('user_profiles')
        .insert(defaultProfile)
        .select()
        .single();
      
      if (error) throw error;
      profile = data;
    }
    
    // Now safely update with the voice settings, ensuring general_instructions is never null
    const updates = {
      ...voiceSettings,
      updated_at: new Date().toISOString()
    };
    
    // Ensure general_instructions always has a value
    if ('general_instructions' in updates && (!updates.general_instructions || updates.general_instructions.trim() === '')) {
      updates.general_instructions = 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.';
    }
    
    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Legacy methods for backward compatibility (deprecated)
  async getSettings(userId: string) {
    console.warn('getSettings is deprecated, use getUserProfile instead')
    return await this.getUserProfile(userId)
  },

  async updateSettings(userId: string, settings: any) {
    console.warn('updateSettings is deprecated, use updateUserProfile instead')
    return await this.updateUserProfile(userId, settings)
  },

  // Memories
  async getMemories(userId: string) {
    const { data, error } = await supabase
      .from('memories')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async createMemory(userId: string, memory: any) {
    const { data, error } = await supabase
      .from('memories')
      .insert({
        user_id: userId,
        ...memory,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async updateMemory(memoryId: string, updates: any) {
    const { data, error } = await supabase
      .from('memories')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', memoryId)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async deleteMemory(memoryId: string) {
    const { error } = await supabase
      .from('memories')
      .delete()
      .eq('id', memoryId)
    
    if (error) throw error
  },

  // Integrations
  async getIntegrations(userId: string) {
    const { data, error } = await supabase
      .from('integrations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Automations
  async getAutomations(userId: string) {
    const { data, error } = await supabase
      .from('automations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Utility method to fix any existing profiles with null general_instructions
  async fixNullGeneralInstructions() {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .update({
          general_instructions: 'You are a helpful AI assistant. Be concise, accurate, and friendly in your responses.',
          updated_at: new Date().toISOString()
        })
        .is('general_instructions', null)
        .select();
      
      if (error) throw error;
      
      console.log('✅ Fixed null general_instructions for profiles:', data?.length || 0);
      return data;
    } catch (error) {
      console.error('❌ Error fixing null general_instructions:', error);
      throw error;
    }
  },
}
        