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
import { OutlookEmailService } from './OutlookEmailService';

interface OutlookMessage {
  id: string;
  subject: string;
  body: {
    content: string;
    contentType: string;
  };
  from: {
    emailAddress: {
      name: string;
      address: string;
    };
  };
  receivedDateTime: string;
  isRead: boolean;
  importance: string;
  hasAttachments: boolean;
  bodyPreview: string;
}

export const OutlookEmailManager: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState<OutlookMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const outlookEmailService = OutlookEmailService.getInstance();

  useEffect(() => {
    initializeService();
    
    const handleAuthChange = (isAuth: boolean) => {
      setIsAuthenticated(isAuth);
      if (isAuth) {
        loadEmails();
      }
    };
    
    outlookEmailService.addAuthCallback(handleAuthChange);
    
    return () => {
      outlookEmailService.removeAuthCallback(handleAuthChange);
    };
  }, []);

  const initializeService = async () => {
    try {
      setIsLoading(true);
      
      await outlookEmailService.initialize();
      const authenticated = outlookEmailService.isAuthenticated();
      
      setIsAuthenticated(authenticated);
      
      if (authenticated) {
        await loadEmails();
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
      
      const success = await outlookEmailService.authenticate();
      
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

  const loadEmails = async () => {
    try {
      setIsLoading(true);
      
      const unreadEmails = await outlookEmailService.getRecentUnreadEmails(5);
      setEmails(unreadEmails);
      
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
      
      await outlookEmailService.signOut();
      setIsAuthenticated(false);
      setEmails([]);
      
      Alert.alert('Signed Out', 'You have been signed out of Outlook Email.');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const formatEmailDate = (message: OutlookMessage): string => {
    try {
      const date = new Date(message.receivedDateTime);
      return date.toLocaleString();
    } catch {
      return 'Unknown Date';
    }
  };

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Outlook Email Integration</Text>
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
              <Text style={styles.buttonText}>Connect to Outlook Email</Text>
            )}
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={loadEmails}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#007AFF" />
              ) : (
                <Text style={[styles.buttonText, { color: '#007AFF' }]}>
                  Refresh Emails
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
        <View style={styles.emailsContainer}>
          <Text style={styles.sectionTitle}>Recent Unread Emails ({emails.length})</Text>
          {emails.length === 0 ? (
            <View style={styles.noEmailsContainer}>
              <Text style={styles.noEmailsText}>No unread emails found</Text>
            </View>
          ) : (
            emails.map((email) => (
              <View key={email.id} style={styles.emailItem}>
                <View style={styles.emailHeader}>
                  <Text style={styles.emailSender}>
                    {email.from.emailAddress.name || email.from.emailAddress.address}
                  </Text>
                  <Text style={styles.emailDate}>
                    {formatEmailDate(email)}
                  </Text>
                </View>
                <Text style={styles.emailSubject}>
                  {email.subject || 'No Subject'}
                </Text>
                <Text style={styles.emailPreview}>
                  {truncateText(email.bodyPreview || '', 100)}
                </Text>
                {email.hasAttachments && (
                  <View style={styles.attachmentIndicator}>
                    <Text style={styles.attachmentText}>📎 Has attachments</Text>
                  </View>
                )}
                {email.importance === 'High' && (
                  <View style={styles.importanceIndicator}>
                    <Text style={styles.importanceText}>❗ High importance</Text>
                  </View>
                )}
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
  emailsContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  noEmailsContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  noEmailsText: {
    fontSize: 16,
    color: '#666',
  },
  emailItem: {
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
  emailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  emailSender: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  emailDate: {
    fontSize: 12,
    color: '#666',
  },
  emailSubject: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
  },
  emailPreview: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  attachmentIndicator: {
    marginTop: 8,
  },
  attachmentText: {
    fontSize: 12,
    color: '#007AFF',
  },
  importanceIndicator: {
    marginTop: 4,
  },
  importanceText: {
    fontSize: 12,
    color: '#FF3B30',
  },
}); 