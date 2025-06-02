import { useState, useEffect, useCallback } from 'react';
import { OutlookCalendarService } from './OutlookCalendarService';
import { Alert } from 'react-native';

interface CalendarEvent {
  id: string;
  subject: string;
  body?: {
    content: string;
    contentType: string;
  };
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  location?: {
    displayName: string;
  };
}

interface UseOutlookCalendarReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  events: CalendarEvent[];
  authenticate: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshEvents: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useOutlookCalendar = (): UseOutlookCalendarReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  const calendarService = OutlookCalendarService.getInstance();

  useEffect(() => {
    const initializeService = async () => {
      try {
        await calendarService.initialize();
        setIsAuthenticated(calendarService.isAuthenticated());
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Outlook Calendar';
        setError(errorMessage);
        console.error('Error initializing Outlook Calendar service:', err);
      }
    };

    initializeService();
  }, []);

  const initialize = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await calendarService.initialize();
      setIsAuthenticated(calendarService.isAuthenticated());
      
      console.log('Outlook Calendar service initialized');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Outlook Calendar';
      setError(errorMessage);
      console.error('Error initializing Outlook Calendar:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const authenticate = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await calendarService.authenticate();
      
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
      
      await calendarService.signOut();
      setIsAuthenticated(false);
      setEvents([]);
      
      Alert.alert('Success', 'Signed out of Outlook Calendar');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
      setError(errorMessage);
      console.error('Error during sign out:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshEvents = useCallback(async () => {
    if (!isAuthenticated) {
      setError('Not authenticated with Outlook Calendar');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const upcomingEvents = await calendarService.getUpcomingEvents(5);
      setEvents(upcomingEvents);
      
      console.log('Events refreshed:', upcomingEvents.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch events';
      setError(errorMessage);
      console.error('Error fetching events:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  // Auto-refresh events when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshEvents();
    }
  }, [isAuthenticated, refreshEvents]);

  return {
    isAuthenticated,
    isLoading,
    error,
    events,
    authenticate,
    signOut,
    refreshEvents,
    initialize,
  };
}; 