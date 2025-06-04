import { useState, useEffect, useCallback } from 'react';
import { GmailService } from './GmailService';
import { Alert } from 'react-native';

interface GmailMessage {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  payload: {
    headers: Array<{
      name: string;
      value: string;
    }>;
    parts?: Array<{
      mimeType: string;
      body: {
        data?: string;
      };
    }>;
    body?: {
      data?: string;
    };
  };
  internalDate: string;
}

interface UseGmailReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  emails: GmailMessage[];
  authenticate: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshEmails: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useGmail = (): UseGmailReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emails, setEmails] = useState<GmailMessage[]>([]);

  const gmailService = GmailService.getInstance();

  useEffect(() => {
    const initializeService = async () => {
      try {
        await gmailService.initialize();
        setIsAuthenticated(gmailService.isAuthenticated());
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Gmail';
        setError(errorMessage);
        console.error('Error initializing Gmail service:', err);
      }
    };

    initializeService();
  }, []);

  const initialize = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await gmailService.initialize();
      setIsAuthenticated(gmailService.isAuthenticated());
      
      console.log('Gmail service initialized');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Gmail';
      setError(errorMessage);
      console.error('Error initializing Gmail:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const authenticate = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await gmailService.authenticate();
      
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
      
      await gmailService.signOut();
      setIsAuthenticated(false);
      setEmails([]);
      
      Alert.alert('Success', 'Signed out of Gmail');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
      setError(errorMessage);
      console.error('Error during sign out:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshEmails = useCallback(async () => {
    if (!isAuthenticated) {
      setError('Not authenticated with Gmail');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const unreadEmails = await gmailService.getRecentUnreadEmails(5);
      setEmails(unreadEmails);
      
      console.log('Emails refreshed:', unreadEmails.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch emails';
      setError(errorMessage);
      console.error('Error fetching emails:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  // Auto-refresh emails when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshEmails();
    }
  }, [isAuthenticated, refreshEmails]);

  return {
    isAuthenticated,
    isLoading,
    error,
    emails,
    authenticate,
    signOut,
    refreshEmails,
    initialize,
  };
}; 