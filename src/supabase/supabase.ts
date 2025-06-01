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
  // Settings
  async getSettings(userId: string) {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .eq('user_id', userId)
      .single()
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      throw error
    }
    
    return data
  },

  async updateSettings(userId: string, settings: any) {
    const { data, error } = await supabase
      .from('settings')
      .upsert({
        user_id: userId,
        ...settings,
        updated_at: new Date().toISOString()
      })
      .select()
      .single()
    
    if (error) throw error
    return data
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
        