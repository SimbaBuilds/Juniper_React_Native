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
    const { data, error } = await supabase
      .from('user_profiles')
      .upsert({
        id: userId,
        ...updates,
        updated_at: new Date().toISOString()
      })
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  // Voice settings helpers (now part of user_profiles)
  async getVoiceSettings(userId: string) {
    const profile = await this.getUserProfile(userId)
    if (!profile) return null
    
    return {
      deepgram_enabled: profile.deepgram_enabled,
      base_language_model: profile.base_language_model,
      general_instructions: profile.general_instructions
    }
  },

  async updateVoiceSettings(userId: string, voiceSettings: {
    deepgram_enabled?: boolean;
    base_language_model?: string;
    general_instructions?: string;
  }) {
    return await this.updateUserProfile(userId, voiceSettings)
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
}
        