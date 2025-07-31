import axios from 'axios';
import { Platform } from 'react-native';
import { supabase } from '../supabase/supabase';

// const supabase = createClient();

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_PYTHON_BACKEND_URL,
  timeout: Platform.OS === 'android' ? 300000 : 300000, // 5 minute timeout for both platforms to match ServerApiService
});

// Add request interceptor to add auth token
api.interceptors.request.use(async (config) => {
  try {
    console.log('🔍 API Interceptor: Starting auth check for request to:', config.url);
    console.log('📱 Platform:', Platform.OS);
    
    // Add extra delay for Android to ensure stability
    if (Platform.OS === 'android') {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    const { data: { user } } = await supabase.auth.getUser();
    console.log('🔍 API Interceptor: User check result:', user ? `User ID: ${user.id}` : 'No user');
    
    if (user) {
      // First try to get current session
      let { data: { session } } = await supabase.auth.getSession();
      console.log('🔍 API Interceptor: Session check result:', session ? `Token exists: ${!!session.access_token}` : 'No session');
      
      // If no session, try to refresh (with Android-specific handling)
      if (!session) {
        console.log('🔄 No session found, attempting refresh...');
        
        if (Platform.OS === 'android') {
          console.log('📱 Android: Using extended session refresh...');
          // Add delay before refresh for Android
          await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        const { data: refreshData, error } = await supabase.auth.refreshSession();
        if (!error && refreshData.session) {
          session = refreshData.session;
          console.log('✅ Session refreshed successfully');
          
          // Add delay after refresh for Android
          if (Platform.OS === 'android') {
            await new Promise(resolve => setTimeout(resolve, 100));
          }
        } else {
          console.warn('⚠️ Session refresh failed:', error?.message);
          
          if (Platform.OS === 'android') {
            console.log('📱 Android: Session refresh failed, this may cause 403 errors');
          }
        }
      }
      
      if (session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
        console.log('✅ API Interceptor: Auth token added to request');
        
        if (Platform.OS === 'android') {
          console.log('📱 Android: Token length:', session.access_token.length);
        }
      } else {
        console.warn('⚠️ API Interceptor: No access token available after refresh attempt');
        
        if (Platform.OS === 'android') {
          console.error('📱 Android: No token available - this will likely cause 403 error');
        }
      }
    } else {
      console.log('ℹ️ API Interceptor: No authenticated user found');
      
      if (Platform.OS === 'android') {
        console.error('📱 Android: No user found - this will cause 403 error');
      }
    }
    
    console.log('🔍 API Interceptor: Final headers:', {
      ...config.headers,
      Authorization: config.headers.Authorization ? '[REDACTED]' : 'Not set'
    });
    
    return config;
  } catch (error) {
    console.error('❌ API Interceptor Error:', error);
    
    if (Platform.OS === 'android') {
      console.error('📱 Android: API Interceptor failed - this will cause request failure');
    }
    
    return Promise.reject(error);
  }
});

// Add response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response Success:', response.status, response.config.url);
    
    if (Platform.OS === 'android') {
      console.log('📱 Android: API request completed successfully');
    }
    
    return response;
  },
  async (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.config?.url);
    
    if (Platform.OS === 'android') {
      console.error('📱 Android: API request failed with status:', error.response?.status);
    }
    
    if (error.response?.status === 401) {
      console.log('🔒 Received 401 error, signing out user');
      const { error: signOutError } = await supabase.auth.signOut();
      if (!signOutError) {
        console.log('User signed out due to 401 error');
      }
    } else if (error.response?.status === 403) {
      console.error('🚫 403 Forbidden - Auth token may be invalid or missing');
      console.error('Request headers:', error.config?.headers);
      
      if (Platform.OS === 'android') {
        console.error('📱 Android: 403 error detected - this is the main issue we\'re trying to fix');
        console.error('📱 Android: Request details:', {
          url: error.config?.url,
          method: error.config?.method,
          hasAuth: !!error.config?.headers?.Authorization
        });
      }
      
      // Try to refresh session on 403 error
      console.log('🔄 Attempting session refresh due to 403 error...');
      try {
        if (Platform.OS === 'android') {
          console.log('📱 Android: Attempting session refresh after 403...');
          await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();
        if (!refreshError && refreshData.session) {
          console.log('✅ Session refreshed after 403, but not retrying request automatically');
          
          if (Platform.OS === 'android') {
            console.log('📱 Android: Session refresh successful after 403');
          }
          // Note: We don't automatically retry here to avoid infinite loops
          // The calling code should handle retries
        } else {
          console.error('❌ Session refresh failed after 403:', refreshError?.message);
          
          if (Platform.OS === 'android') {
            console.error('📱 Android: Session refresh failed after 403 - user needs to re-authenticate');
          }
        }
      } catch (refreshErr) {
        console.error('❌ Exception during session refresh after 403:', refreshErr);
        
        if (Platform.OS === 'android') {
          console.error('📱 Android: Exception during session refresh - critical error');
        }
      }
    }
    
    return Promise.reject(error);
  }
);

export default api; 