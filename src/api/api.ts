import axios from 'axios';
import { supabase } from '../supabase/supabase';

// const supabase = createClient();

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_PYTHON_BACKEND_URL,
});

// Add request interceptor to add auth token
api.interceptors.request.use(async (config) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        config.headers.Authorization = `Bearer ${session.access_token}`;
      }
    }
    return config;
  } catch (error) {
    return Promise.reject(error);
  }
});

// Add response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized error - sign out user
      const { error: signOutError } = await supabase.auth.signOut();
      if (!signOutError) {
        // In React Native, we don't redirect with window.location
        // Instead, the auth state change will be handled by your navigation logic
        console.log('User signed out due to 401 error');
      }
    }
    return Promise.reject(error);
  }
);

export default api; 