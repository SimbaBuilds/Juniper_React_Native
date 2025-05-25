import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useGoogleCalendar } from './useGoogleCalendar';

interface GoogleCalendarManagerProps {
  onConfigChange?: () => void;
}

export const GoogleCalendarManager: React.FC<GoogleCalendarManagerProps> = ({
  onConfigChange,
}) => {
  const {
    isAuthenticated,
    isLoading,
    error,
    events,
    authenticate,
    signOut,
    refreshEvents,
  } = useGoogleCalendar();

  const formatEventTime = (event: any) => {
    const start = event.start?.dateTime || event.start?.date;
    if (!start) return 'No time specified';
    
    const date = new Date(start);
    return date.toLocaleString();
  };

  if (error?.includes('credentials not configured')) {
    return (
      <View style={styles.container}>
        <View style={styles.errorContainer}>
          <Ionicons name="warning-outline" size={24} color="#E74C3C" />
          <Text style={styles.errorTitle}>Google Calendar Not Configured</Text>
          <Text style={styles.errorText}>
            The Google Calendar integration requires developer setup. Please configure the Google Cloud Console credentials in GoogleCalendarService.ts
          </Text>
          <Text style={styles.instructionText}>
            Follow the setup instructions at:{'\n'}
            https://developers.google.com/workspace/calendar/api/quickstart/js
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!isAuthenticated ? (
        <View style={styles.authSection}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={authenticate}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#4A90E2" />
            ) : (
              <>
                <Ionicons name="logo-google" size={20} color="#4A90E2" />
                <Text style={styles.addButtonText}>Connect Google Calendar</Text>
              </>
            )}
          </TouchableOpacity>
          
          <Text style={styles.helpText}>
            Authorize access to your Google Calendar to view upcoming events and sync calendar data with your assistant.
          </Text>
        </View>
      ) : (
        <View style={styles.connectedSection}>
          <View style={styles.statusRow}>
            <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
            <Text style={styles.connectedText}>Google Calendar Connected</Text>
          </View>

          <View style={styles.actionsRow}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={refreshEvents}
              disabled={isLoading}
            >
              <Ionicons name="refresh-outline" size={16} color="#4A90E2" />
              <Text style={styles.actionButtonText}>Refresh</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.signOutButton]}
              onPress={signOut}
              disabled={isLoading}
            >
              <Ionicons name="log-out-outline" size={16} color="#E74C3C" />
              <Text style={[styles.actionButtonText, styles.signOutText]}>Sign Out</Text>
            </TouchableOpacity>
          </View>

          {events.length > 0 && (
            <View style={styles.eventsSection}>
              <Text style={styles.eventsTitle}>Upcoming Events</Text>
              <ScrollView style={styles.eventsList} nestedScrollEnabled>
                {events.slice(0, 3).map((event) => (
                  <View key={event.id} style={styles.eventItem}>
                    <Text style={styles.eventTitle}>{event.summary}</Text>
                    <Text style={styles.eventTime}>{formatEventTime(event)}</Text>
                    {event.location && (
                      <Text style={styles.eventLocation}>{event.location}</Text>
                    )}
                  </View>
                ))}
                {events.length > 3 && (
                  <Text style={styles.moreEventsText}>
                    +{events.length - 3} more events...
                  </Text>
                )}
              </ScrollView>
            </View>
          )}

          {events.length === 0 && !isLoading && (
            <View style={styles.noEventsContainer}>
              <Text style={styles.noEventsText}>No upcoming events found</Text>
            </View>
          )}
        </View>
      )}

      {error && !error.includes('credentials not configured') && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  authSection: {
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#2A2A2A',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderStyle: 'dashed',
    width: '100%',
    marginBottom: 12,
  },
  addButtonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  helpText: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 8,
  },
  connectedSection: {
    width: '100%',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  connectedText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  actionButtonText: {
    color: '#4A90E2',
    fontSize: 14,
    marginLeft: 4,
  },
  signOutButton: {
    // No additional styles needed
  },
  signOutText: {
    color: '#E74C3C',
  },
  eventsSection: {
    marginTop: 8,
  },
  eventsTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  eventsList: {
    maxHeight: 200,
  },
  eventItem: {
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
  moreEventsText: {
    color: '#B0B0B0',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingVertical: 8,
  },
  noEventsContainer: {
    padding: 16,
    alignItems: 'center',
  },
  noEventsText: {
    color: '#B0B0B0',
    fontSize: 14,
    fontStyle: 'italic',
  },
  errorContainer: {
    backgroundColor: '#4D2020',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  errorTitle: {
    color: '#E74C3C',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 8,
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  instructionText: {
    color: '#B0B0B0',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
}); 