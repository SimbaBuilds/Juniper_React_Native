import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return {
    user: context.user,
    session: context.session,
    isLoading: context.loading,
    error: null,
    
    // Email authentication
    login: async (email: string, password: string) => {
      const { error } = await context.signIn(email, password);
      if (error) throw error;
    },
    register: async (email: string, password: string, name: string) => {
      const { error } = await context.signUp(email, password, name);
      if (error) throw error;
    },
    
    // Phone authentication
    loginWithPhone: async (phone: string) => {
      const { error } = await context.signInWithPhone(phone);
      if (error) throw error;
    },
    signUpWithPhone: async (phone: string) => {
      const { error } = await context.signUpWithPhone(phone);
      if (error) throw error;
    },
    verifyOtp: async (phone: string, token: string, type: 'sms' | 'phone_change' = 'sms') => {
      const { error } = await context.verifyOtp(phone, token, type);
      if (error) throw error;
    },
    
    // Common
    logout: async () => {
      await context.signOut();
    }
  };
}; 