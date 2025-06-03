import { useState, useEffect, useCallback } from 'react';
import { NotionService } from './NotionService';
import { Alert } from 'react-native';

interface NotionTask {
  id: string;
  title: string;
  status: string;
  dueDate: string | null;
  priority: string | null;
  url: string;
  created_time: string;
  last_edited_time: string;
}

interface UseNotionReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  tasks: NotionTask[];
  authenticate: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshTasks: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useNotion = (): UseNotionReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tasks, setTasks] = useState<NotionTask[]>([]);

  const notionService = NotionService.getInstance();

  useEffect(() => {
    const initializeService = async () => {
      try {
        await notionService.initialize();
        setIsAuthenticated(notionService.isAuthenticated());
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Notion';
        setError(errorMessage);
        console.error('Error initializing Notion service:', err);
      }
    };

    initializeService();
  }, []);

  const initialize = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await notionService.initialize();
      setIsAuthenticated(notionService.isAuthenticated());
      
      console.log('Notion service initialized');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Notion';
      setError(errorMessage);
      console.error('Error initializing Notion:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const authenticate = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await notionService.authenticate();
      
      if (success) {
        Alert.alert(
          'Authentication Started',
          'Please complete the authentication in your browser and return to the app.',
          [{ text: 'OK' }]
        );
      } else {
        throw new Error('Failed to start authentication');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
      setError(errorMessage);
      Alert.alert('Error', errorMessage);
      console.error('Error during authentication:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await notionService.signOut();
      setIsAuthenticated(false);
      setTasks([]);
      
      Alert.alert('Success', 'Signed out of Notion');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
      setError(errorMessage);
      console.error('Error during sign out:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshTasks = useCallback(async () => {
    if (!isAuthenticated) {
      setError('Not authenticated with Notion');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const upcomingTasks = await notionService.getUpcomingTasks(5);
      setTasks(upcomingTasks);
      
      console.log('Tasks refreshed:', upcomingTasks.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch tasks';
      setError(errorMessage);
      console.error('Error fetching tasks:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  // Auto-refresh tasks when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshTasks();
    }
  }, [isAuthenticated, refreshTasks]);

  return {
    isAuthenticated,
    isLoading,
    error,
    tasks,
    authenticate,
    signOut,
    refreshTasks,
    initialize,
  };
}; 