import React, { createContext, useState, useEffect, useContext } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../supabase/supabase';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, name?: string) => Promise<{ error: Error | null }>;
  signInWithPhone: (phone: string) => Promise<{ error: Error | null }>;
  signUpWithPhone: (phone: string) => Promise<{ error: Error | null }>;
  verifyOtp: (phone: string, token: string, type: 'sms' | 'phone_change') => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get session on mount
    const getSession = async () => {
      setLoading(true);
      try {
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        setUser(data.session?.user ?? null);
      } catch (error) {
        console.error('Error getting session:', error);
      } finally {
        setLoading(false);
      }
    };

    getSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('Auth state changed:', event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // Handle loading state for auth events
        if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
          setLoading(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user,
    loading,
    signIn: async (email: string, password: string) => {
      try {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ 
          email: email.toLowerCase().trim(), 
          password 
        });
        
        if (error) {
          console.error('Sign in error:', error);
          return { error };
        }
        
        return { error: null };
      } catch (error) {
        console.error('Sign in exception:', error);
        return { error: error as Error };
      } finally {
        setLoading(false);
      }
    },
    signUp: async (email: string, password: string, name?: string) => {
      try {
        setLoading(true);
        
        // Prepare signup options with user metadata
        const signUpOptions: any = {
          email: email.toLowerCase().trim(),
          password,
        };

        // Add user metadata if name is provided
        if (name?.trim()) {
          signUpOptions.options = {
            data: {
              full_name: name.trim(),
              display_name: name.trim(),
            }
          };
        }

        const { data, error } = await supabase.auth.signUp(signUpOptions);
        
        if (error) {
          console.error('Sign up error:', error);
          return { error };
        }

        // Log success for debugging
        console.log('Sign up successful:', {
          user: data.user?.id,
          email: data.user?.email,
          needsConfirmation: !data.session
        });
        
        return { error: null };
      } catch (error) {
        console.error('Sign up exception:', error);
        return { error: error as Error };
      } finally {
        setLoading(false);
      }
    },
    signInWithPhone: async (phone: string) => {
      try {
        setLoading(true);
        
        // Format phone number (ensure it starts with +)
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
        
        const { error } = await supabase.auth.signInWithOtp({
          phone: formattedPhone,
        });
        
        if (error) {
          console.error('Phone sign in error:', error);
          return { error };
        }

        console.log('OTP sent to phone:', formattedPhone);
        return { error: null };
      } catch (error) {
        console.error('Phone sign in exception:', error);
        return { error: error as Error };
      } finally {
        setLoading(false);
      }
    },
    signUpWithPhone: async (phone: string) => {
      try {
        setLoading(true);
        
        // Format phone number (ensure it starts with +)
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
        
        // For phone signup, we use the same signInWithOtp method
        // Supabase will create a new user if the phone doesn't exist
        const { error } = await supabase.auth.signInWithOtp({
          phone: formattedPhone,
        });
        
        if (error) {
          console.error('Phone sign up error:', error);
          return { error };
        }

        console.log('OTP sent to phone for signup:', formattedPhone);
        return { error: null };
      } catch (error) {
        console.error('Phone sign up exception:', error);
        return { error: error as Error };
      } finally {
        setLoading(false);
      }
    },
    verifyOtp: async (phone: string, token: string, type: 'sms' | 'phone_change' = 'sms') => {
      try {
        setLoading(true);
        
        // Format phone number (ensure it starts with +)
        const formattedPhone = phone.startsWith('+') ? phone : `+${phone}`;
        
        const { data, error } = await supabase.auth.verifyOtp({
          phone: formattedPhone,
          token: token.trim(),
          type,
        });
        
        if (error) {
          console.error('OTP verification error:', error);
          return { error };
        }

        console.log('Phone auth successful:', {
          user: data.user?.id,
          phone: data.user?.phone,
          session: !!data.session
        });
        
        return { error: null };
      } catch (error) {
        console.error('OTP verification exception:', error);
        return { error: error as Error };
      } finally {
        setLoading(false);
      }
    },
    signOut: async () => {
      try {
        setLoading(true);
        const { error } = await supabase.auth.signOut();
        if (error) {
          console.error('Sign out error:', error);
          throw error;
        }
      } catch (error) {
        console.error('Sign out exception:', error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 