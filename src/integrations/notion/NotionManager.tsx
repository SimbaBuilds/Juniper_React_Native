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
import { NotionService } from './NotionService';

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

export const NotionManager: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<NotionTask[]>([]);
  const [error, setError] = useState<string | null>(null);

  const notionService = NotionService.getInstance();

  useEffect(() => {
    initializeService();
    
    const handleAuthChange = (isAuth: boolean) => {
      setIsAuthenticated(isAuth);
      if (isAuth) {
        loadTasks();
      }
    };
    
    notionService.addAuthCallback(handleAuthChange);
    
    return () => {
      notionService.removeAuthCallback(handleAuthChange);
    };
  }, []);

  const initializeService = async () => {
    try {
      setIsLoading(true);
      
      await notionService.initialize();
      const authenticated = notionService.isAuthenticated();
      
      setIsAuthenticated(authenticated);
      
      if (authenticated) {
        await loadTasks();
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
      
      const success = await notionService.authenticate();
      
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

  const loadTasks = async () => {
    try {
      setIsLoading(true);
      
      const upcomingTasks = await notionService.getUpcomingTasks(5);
      setTasks(upcomingTasks);
      
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
      
      await notionService.signOut();
      setIsAuthenticated(false);
      setTasks([]);
      
      Alert.alert('Signed Out', 'You have been signed out of Notion.');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTaskDate = (task: NotionTask): string => {
    if (!task.dueDate) return 'No due date';
    
    try {
      const date = new Date(task.dueDate);
      return date.toLocaleDateString();
    } catch {
      return 'Invalid date';
    }
  };

  const getStatusColor = (status: string): string => {
    const lowerStatus = status.toLowerCase();
    if (lowerStatus.includes('done') || lowerStatus.includes('complete')) {
      return '#4CAF50'; // Green
    } else if (lowerStatus.includes('progress') || lowerStatus.includes('doing')) {
      return '#FF9800'; // Orange
    } else if (lowerStatus.includes('todo') || lowerStatus.includes('not started')) {
      return '#757575'; // Gray
    }
    return '#2196F3'; // Blue (default)
  };

  const getPriorityColor = (priority: string | null): string => {
    if (!priority) return '#757575';
    
    const lowerPriority = priority.toLowerCase();
    if (lowerPriority.includes('high') || lowerPriority.includes('urgent')) {
      return '#F44336'; // Red
    } else if (lowerPriority.includes('medium') || lowerPriority.includes('normal')) {
      return '#FF9800'; // Orange
    } else if (lowerPriority.includes('low')) {
      return '#4CAF50'; // Green
    }
    return '#757575'; // Gray (default)
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notion Integration</Text>
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
              <Text style={styles.buttonText}>Connect to Notion</Text>
            )}
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={loadTasks}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#007AFF" />
              ) : (
                <Text style={[styles.buttonText, { color: '#007AFF' }]}>
                  Refresh Tasks
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

      {isAuthenticated && (
        <View style={styles.tasksContainer}>
          <Text style={styles.sectionTitle}>Upcoming Tasks ({tasks.length})</Text>
          {tasks.length === 0 ? (
            <View style={styles.noTasksContainer}>
              <Text style={styles.noTasksText}>No tasks found</Text>
              <Text style={styles.noTasksSubtext}>
                Create task databases in Notion to see them here
              </Text>
            </View>
          ) : (
            tasks.map((task) => (
              <View key={task.id} style={styles.taskItem}>
                <View style={styles.taskHeader}>
                  <Text style={styles.taskTitle}>
                    {truncateText(task.title, 40)}
                  </Text>
                  <View style={styles.taskMeta}>
                    <View 
                      style={[
                        styles.statusBadge, 
                        { backgroundColor: getStatusColor(task.status) }
                      ]}
                    >
                      <Text style={styles.statusText}>{task.status}</Text>
                    </View>
                  </View>
                </View>
                
                <View style={styles.taskDetails}>
                  <Text style={styles.taskDate}>
                    📅 {formatTaskDate(task)}
                  </Text>
                  {task.priority && (
                    <View style={styles.priorityContainer}>
                      <View 
                        style={[
                          styles.priorityDot, 
                          { backgroundColor: getPriorityColor(task.priority) }
                        ]}
                      />
                      <Text style={styles.priorityText}>{task.priority}</Text>
                    </View>
                  )}
                </View>
                
                <View style={styles.taskFooter}>
                  <Text style={styles.taskTimestamp}>
                    Last edited: {new Date(task.last_edited_time).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            ))
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    backgroundColor: '#fee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#fcc',
  },
  errorText: {
    color: '#c00',
    fontSize: 14,
  },
  buttonContainer: {
    gap: 12,
    marginBottom: 20,
  },
  button: {
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },
  tasksContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  noTasksContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  noTasksText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  noTasksSubtext: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  taskItem: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
  },
  taskDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskDate: {
    fontSize: 14,
    color: '#666',
  },
  priorityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priorityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  priorityText: {
    fontSize: 12,
    color: '#666',
  },
  taskFooter: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 8,
  },
  taskTimestamp: {
    fontSize: 12,
    color: '#999',
  },
}); 