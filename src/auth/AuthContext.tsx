import React, { createContext, useState, useEffect, useContext } from 'react';
import { AppState } from 'react-native';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '../supabase/supabase';
import { UserProfileService } from '../services/userProfileService';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, name?: string) => Promise<{ error: Error | null }>;
  signInWithPhone: (phone: string) => Promise<{ error: Error | null }>;
  signUpWithPhone: (phone: string) => Promise<{ error: Error | null }>;
  verifyOtp: (phone: string, token: string, type: 'sms' | 'phone_change') => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  resetPasswordForEmail: (email: string) => Promise<{ error: Error | null }>;
  updateUserPassword: (password: string) => Promise<{ error: Error | null }>;
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
      async (event, currentSession) => {
        console.log('Auth state changed:', event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        // Handle profile creation for new users
        if (event === 'SIGNED_IN' && currentSession?.user) {
          try {
            // Check if this is a new user by comparing created_at with current time
            const userCreatedAt = new Date(currentSession.user.created_at);
            const now = new Date();
            const timeDiff = now.getTime() - userCreatedAt.getTime();
            const isNewUser = timeDiff < 60000; // User created within last minute
            
            if (isNewUser) {
              console.log('New user detected, creating profile...');
              const displayName = currentSession.user.user_metadata?.display_name || 
                                 currentSession.user.user_metadata?.full_name;
              
              // Check if profile already exists to avoid duplicates
              const profileExists = await UserProfileService.profileExists(currentSession.user.id);
              
              if (!profileExists) {
                await UserProfileService.createUserProfile(
                  currentSession.user.id, 
                  displayName
                );
              }
            }
          } catch (error) {
            console.error('Failed to create user profile:', error);
            // Don't throw here - we don't want to break the auth flow
          }
        }
        
        // Handle password recovery event
        if (event === 'PASSWORD_RECOVERY') {
          console.log('Password recovery event triggered');
          // The user has clicked on the password reset link
          // We should navigate to the reset password screen
          setLoading(false);
        }

        // Handle loading state for auth events
        if (event === 'SIGNED_IN' || event === 'SIGNED_OUT' || event === 'TOKEN_REFRESHED') {
          setLoading(false);
        }
      }
    );

    // Tells Supabase Auth to continuously refresh the session automatically if
    // the app is in the foreground. When this is added, you will continue to receive
    // `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
    // if the user's session is terminated. This should only be registered once.
    const appStateSubscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        supabase.auth.startAutoRefresh()
      } else {
        supabase.auth.stopAutoRefresh()
      }
    });

    return () => {
      subscription.unsubscribe();
      appStateSubscription?.remove();
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
    signInWithGoogle: async () => {
      try {
        setLoading(true);
        
        // Import and use GoogleAuthService
        const { GoogleAuthService } = await import('./GoogleAuthService');
        const googleService = GoogleAuthService.getInstance();
        
        // Initialize if needed
        await googleService.initialize();
        
        // Start OAuth flow
        const success = await googleService.authenticate();
        
        if (!success) {
          return { error: new Error('Failed to start Google authentication') };
        }
        
        return { error: null };
      } catch (error) {
        console.error('Google sign in exception:', error);
        return { error: error as Error };
      } finally {
        setLoading(false);
      }
    },
    resetPasswordForEmail: async (email: string) => {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: 'com.mobilejarvislanding://reset-password',
        });
        
        if (error) {
          console.error('Reset password error:', error);
          return { error };
        }
        
        return { error: null };
      } catch (error) {
        console.error('Reset password exception:', error);
        return { error: error as Error };
      }
    },
    updateUserPassword: async (password: string) => {
      try {
        const { error } = await supabase.auth.updateUser({
          password,
        });
        
        if (error) {
          console.error('Update password error:', error);
          return { error };
        }
        
        return { error: null };
      } catch (error) {
        console.error('Update password exception:', error);
        return { error: error as Error };
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