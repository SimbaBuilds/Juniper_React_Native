import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { OutlookCalendarService } from './OutlookCalendarService';

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

export const OutlookCalendarManager: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [error, setError] = useState<string | null>(null);

  const calendarService = OutlookCalendarService.getInstance();

  useEffect(() => {
    initializeService();
    
    const handleAuthChange = (isAuth: boolean) => {
      setIsAuthenticated(isAuth);
      if (isAuth) {
        loadEvents();
      }
    };
    
    calendarService.addAuthCallback(handleAuthChange);
    
    return () => {
      calendarService.removeAuthCallback(handleAuthChange);
    };
  }, []);

  const initializeService = async () => {
    try {
      setIsLoading(true);
      
      await calendarService.initialize();
      const authenticated = calendarService.isAuthenticated();
      
      setIsAuthenticated(authenticated);
      
      if (authenticated) {
        await loadEvents();
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthenticate = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await calendarService.authenticate();
      
      if (success) {
        Alert.alert(
          'Authentication Started',
          'Please complete the authentication in your browser. The app will automatically continue when you return.',
          [{ text: 'OK' }]
        );
      } else {
        throw new Error('Failed to start authentication flow');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      Alert.alert('Authentication Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const loadEvents = async () => {
    try {
      setIsLoading(true);
      
      const upcomingEvents = await calendarService.getUpcomingEvents(5);
      setEvents(upcomingEvents);
      
      setIsAuthenticated(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      
      if (errorMessage.includes('Not authenticated') || errorMessage.includes('401')) {
        setIsAuthenticated(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      
      await calendarService.signOut();
      setIsAuthenticated(false);
      setEvents([]);
      
      Alert.alert('Signed Out', 'You have been signed out of Outlook Calendar.');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const formatEventTime = (event: CalendarEvent): string => {
    try {
      const date = new Date(event.start.dateTime);
      return date.toLocaleString();
    } catch {
      return event.start.dateTime;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Outlook Calendar Integration</Text>
        <Text style={styles.subtitle}>
          Status: {isAuthenticated ? '✅ Connected' : '❌ Not Connected'}
        </Text>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        {!isAuthenticated ? (
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={handleAuthenticate}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Connect to Outlook Calendar</Text>
            )}
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={loadEvents}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#007AFF" />
              ) : (
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                  Refresh Events
                </Text>
              )}
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, styles.dangerButton]}
              onPress={handleSignOut}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {isAuthenticated && events.length > 0 && (
        <View style={styles.eventsContainer}>
          <Text style={styles.sectionTitle}>Upcoming Events ({events.length})</Text>
          {events.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <Text style={styles.eventTitle}>{event.subject}</Text>
              <Text style={styles.eventTime}>{formatEventTime(event)}</Text>
              {event.location?.displayName && (
                <Text style={styles.eventLocation}>📍 {event.location.displayName}</Text>
              )}
              {event.body?.content && (
                <Text style={styles.eventDescription} numberOfLines={2}>
                  {event.body.content.replace(/<[^>]*>/g, '')} {/* Strip HTML tags */}
                </Text>
              )}
            </View>
          ))}
        </View>
      )}

      {isAuthenticated && events.length === 0 && !isLoading && (
        <View style={styles.noEventsContainer}>
          <Text style={styles.noEventsText}>No upcoming events found</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  subtitle: {
    color: '#B0B0B0',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2A2A2A',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderStyle: 'dashed',
    width: '40%',
  },
  primaryButton: {
    borderColor: '#4CAF50',
  },
  secondaryButton: {
    borderColor: '#007AFF',
  },
  dangerButton: {
    borderColor: '#E74C3C',
  },
  buttonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
  eventsContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  eventCard: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  eventTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  eventTime: {
    color: '#B0B0B0',
    fontSize: 12,
    marginBottom: 2,
  },
  eventLocation: {
    color: '#B0B0B0',
    fontSize: 12,
    fontStyle: 'italic',
  },
  eventDescription: {
    color: '#B0B0B0',
    fontSize: 12,
    marginTop: 4,
  },
  errorContainer: {
    backgroundColor: '#4D2020',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  noEventsContainer: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  noEventsText: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
  },
}); 