import { useState, useEffect, useCallback } from 'react';
import { OneDriveService } from './OneDriveService';
import { Alert } from 'react-native';

interface DriveItem {
  id: string;
  name: string;
  size?: number;
  lastModifiedDateTime: string;
  createdDateTime: string;
  webUrl: string;
  file?: {
    mimeType: string;
    hashes?: {
      quickXorHash?: string;
    };
  };
  folder?: {
    childCount: number;
  };
  createdBy: {
    user: {
      displayName: string;
      email?: string;
    };
  };
  lastModifiedBy: {
    user: {
      displayName: string;
      email?: string;
    };
  };
}

interface UseOneDriveReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  files: DriveItem[];
  storageInfo: any;
  authenticate: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshFiles: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useOneDrive = (): UseOneDriveReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<DriveItem[]>([]);
  const [storageInfo, setStorageInfo] = useState<any>(null);

  const driveService = OneDriveService.getInstance();

  useEffect(() => {
    const initializeService = async () => {
      try {
        await driveService.initialize();
        setIsAuthenticated(driveService.isAuthenticated());
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize OneDrive';
        setError(errorMessage);
        console.error('Error initializing OneDrive service:', err);
      }
    };

    initializeService();
  }, []);

  const initialize = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await driveService.initialize();
      setIsAuthenticated(driveService.isAuthenticated());
      
      console.log('OneDrive service initialized');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize OneDrive';
      setError(errorMessage);
      console.error('Error initializing OneDrive:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const authenticate = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await driveService.authenticate();
      
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
      
      await driveService.signOut();
      setIsAuthenticated(false);
      setFiles([]);
      setStorageInfo(null);
      
      Alert.alert('Success', 'Signed out of OneDrive');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
      setError(errorMessage);
      console.error('Error during sign out:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshFiles = useCallback(async () => {
    if (!isAuthenticated) {
      setError('Not authenticated with OneDrive');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const recentFiles = await driveService.getRecentFiles(10);
      setFiles(recentFiles);
      
      const storage = await driveService.getStorageInfo();
      setStorageInfo(storage);
      
      console.log('Files refreshed:', recentFiles.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch files';
      setError(errorMessage);
      console.error('Error fetching files:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  // Auto-refresh files when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshFiles();
    }
  }, [isAuthenticated, refreshFiles]);

  return {
    isAuthenticated,
    isLoading,
    error,
    files,
    storageInfo,
    authenticate,
    signOut,
    refreshFiles,
    initialize,
  };
}; 