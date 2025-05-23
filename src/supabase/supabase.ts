import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import Constants from 'expo-constants'

// Get environment variables from app.config.js via expo-constants
const supabaseUrl = Constants.expoConfig?.extra?.SUPABASE_URL || ""
const supabaseAnonKey = Constants.expoConfig?.extra?.SUPABASE_ANON_KEY || ""

// Fallback to process.env for development
const fallbackUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || ""
const fallbackKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || ""

// Use the constants first, then fallback to process.env
const finalUrl = supabaseUrl || fallbackUrl
const finalKey = supabaseAnonKey || fallbackKey

if (!finalUrl || !finalKey) {
  console.error('Supabase configuration missing:', {
    url: !!finalUrl,
    key: !!finalKey,
    fromConstants: { url: !!supabaseUrl, key: !!supabaseAnonKey },
    fromEnv: { url: !!fallbackUrl, key: !!fallbackKey }
  })
}

export const supabase = createClient(
  finalUrl,
  finalKey,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })
        