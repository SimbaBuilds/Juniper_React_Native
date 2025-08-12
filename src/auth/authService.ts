// This is a mock authentication service
// In a real app, this would make API calls to your backend

import { supabase } from '../supabase/supabase';
import { User as SupabaseUser } from '@supabase/supabase-js';

interface AuthUser {
  id: string;
  email: string;
  name?: string;
}

interface LoginResponse {
  user: AuthUser;
  token: string;
}

interface AuthError {
  message: string;
  code?: string;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const authService = {
  /**
   * Sign in with email and password
   */
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    return {
      user: {
        id: data.user?.id || '',
        email: data.user?.email || '',
        name: data.user?.user_metadata?.name,
      },
      token: data.session?.access_token || '',
    };
  },
  
  /**
   * Sign up with email and password
   */
  register: async (email: string, password: string, name: string): Promise<LoginResponse> => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });
    
    if (error) throw error;
    
    return {
      user: {
        id: data.user?.id || '',
        email: data.user?.email || '',
        name,
      },
      token: data.session?.access_token || '',
    };
  },
  
  /**
   * Sign out
   */
  logout: async (): Promise<void> => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },
  
  /**
   * Get current user
   */
  getCurrentUser: async (): Promise<AuthUser | null> => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) return null;
    
    return {
      id: data.user.id,
      email: data.user.email || '',
      name: data.user.user_metadata?.name,
    };
  },
  
  /**
   * Get current session
   */
  getSession: async () => {
    const { data } = await supabase.auth.getSession();
    return data.session;
  },

  /**
   * Send password reset email
   */
  resetPasswordForEmail: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'com.mobilejarvislanding://reset-password',
    });
    
    return { data, error };
  },

  /**
   * Update user password
   */
  updateUserPassword: async (password: string) => {
    const { data, error } = await supabase.auth.updateUser({
      password,
    });
    
    return { data, error };
  },
}; 