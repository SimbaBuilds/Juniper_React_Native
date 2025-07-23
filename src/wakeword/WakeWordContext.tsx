import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import WakeWordService from './WakeWordService';
import { Alert } from 'react-native';
import { checkWakeWordPermissions, requestWakeWordPermissions } from '../settings/permissions';
import { VoiceState } from '../voice/VoiceService';
import { useVoiceState } from '../voice/hooks/useVoiceState';
import { useVoice } from '../voice/VoiceContext';

interface WakeWordContextType {
    isEnabled: boolean;
    isRunning: boolean;
    setEnabled: (enabled: boolean) => Promise<void>;
    startDetection: () => Promise<void>;
    stopDetection: () => Promise<void>;
    onWakeWordDetected?: (timestamp: number) => void;
}

const WakeWordContext = createContext<WakeWordContextType | null>(null);

export const useWakeWord = () => {
    const context = useContext(WakeWordContext);
    if (!context) {
        throw new Error('useWakeWord must be used within a WakeWordProvider');
    }
    return context;
};

export const WakeWordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isRunning, setIsRunning] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);
    const wakeWordService = WakeWordService.getInstance();
    
    // Get voice state to coordinate with ongoing conversations
    const { voiceState } = useVoiceState();
    
    // Get voice settings to sync wake word configuration - this is the database-backed source of truth
    const { voiceSettings, settingsLoading, updateVoiceSettings } = useVoice();

    // Sync wake word enabled state with database-backed voice settings
    useEffect(() => {
        if (!settingsLoading && voiceSettings?.wakeWordDetectionEnabled !== undefined) {
            const databaseEnabledState = voiceSettings.wakeWordDetectionEnabled;
            
            console.log('🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings');
            console.log('🔄 WAKE_WORD_CONTEXT: Database wake word enabled:', databaseEnabledState);
            console.log('🔄 WAKE_WORD_CONTEXT: Current local enabled:', isEnabled);
            
            // Only sync if the database value is different from local state
            if (databaseEnabledState !== isEnabled) {
                console.log('🔄 WAKE_WORD_CONTEXT: Database state differs from local, syncing...');
                syncWithDatabaseState(databaseEnabledState);
            }
        }
    }, [voiceSettings?.wakeWordDetectionEnabled, settingsLoading]);

    // Sync with database state without triggering database updates
    const syncWithDatabaseState = useCallback(async (databaseEnabledState: boolean) => {
        try {
            console.log('🔄 WAKE_WORD_CONTEXT: Syncing to database state:', databaseEnabledState);
            
            // Update local state first
            setIsEnabled(databaseEnabledState);
            
            // Sync native layer to match database state
            const nativeSuccess = await wakeWordService.setWakeWordEnabled(databaseEnabledState);
            
            if (nativeSuccess) {
                console.log('✅ WAKE_WORD_CONTEXT: Native layer synced with database state');
                
                if (databaseEnabledState) {
                    // If enabled, start detection
                    const runningState = await wakeWordService.isWakeWordDetectionRunning();
                    setIsRunning(runningState);
                    
                    if (!runningState) {
                        console.log('🎤 WAKE_WORD_CONTEXT: Starting detection to match enabled state');
                        await wakeWordService.startWakeWordDetection();
                        setIsRunning(true);
                    }
                } else {
                    // If disabled, stop detection
                    setIsRunning(false);
                }
            } else {
                console.error('❌ WAKE_WORD_CONTEXT: Failed to sync native layer with database state');
                // Re-sync state on failure
                await syncState();
            }
        } catch (error) {
            console.error('❌ WAKE_WORD_CONTEXT: Error syncing with database state:', error);
            await syncState();
        }
    }, []);

    // Sync state with native module (fallback method)
    const syncState = useCallback(async () => {
        try {
            const status = await wakeWordService.isWakeWordEnabled();
            console.log('🔄 WAKE_WORD_CONTEXT: Native wake word state:', status);
            
            // Only update state if it's different to avoid unnecessary re-renders
            if (isEnabled !== status) {
                console.log('📝 WAKE_WORD_CONTEXT: Updating enabled state from native:', status);
                setIsEnabled(status);
            }
            
            if (status) {
                const running = await wakeWordService.isWakeWordDetectionRunning();
                console.log('🔄 WAKE_WORD_CONTEXT: Native running state:', running);
                
                if (isRunning !== running) {
                    console.log('📝 WAKE_WORD_CONTEXT: Updating running state from native:', running);
                    setIsRunning(running);
                }
                
                if (!running && status) {
                    console.log('🔄 WAKE_WORD_CONTEXT: Auto-starting wake word detection');
                    await wakeWordService.startWakeWordDetection();
                    setIsRunning(true);
                }
            } else {
                // If not enabled, ensure running is false
                if (isRunning) {
                    console.log('📝 WAKE_WORD_CONTEXT: Setting running to false because enabled is false');
                    setIsRunning(false);
                }
            }
        } catch (error) {
            console.error('❌ WAKE_WORD_CONTEXT: Error syncing wake word state:', error);
        }
    }, [isEnabled, isRunning]);

    // Initialize state on mount
    useEffect(() => {
        let mounted = true;
        
        const initialize = async () => {
            try {
                console.log('🚀 WAKE_WORD_CONTEXT: Initializing wake word context...');
                
                // Wait for voice settings to load if they're still loading
                if (settingsLoading) {
                    console.log('🚀 WAKE_WORD_CONTEXT: Waiting for voice settings to load...');
                    return; // This effect will re-run when settingsLoading changes
                }
                
                // If voice settings are available, use them as the source of truth
                if (voiceSettings?.wakeWordDetectionEnabled !== undefined) {
                    const databaseEnabledState = voiceSettings.wakeWordDetectionEnabled;
                    console.log('🚀 WAKE_WORD_CONTEXT: Using database state as initial state:', databaseEnabledState);
                    
                    if (mounted) {
                        await syncWithDatabaseState(databaseEnabledState);
                        setIsInitialized(true);
                    }
                } else {
                    // Fallback to native state if database settings aren't available
                    console.log('🚀 WAKE_WORD_CONTEXT: Database settings not available, using native state');
                    const status = await wakeWordService.isWakeWordEnabled();
                    console.log('🚀 WAKE_WORD_CONTEXT: Initial native wake word state:', status);
                    
                    if (mounted) {
                        setIsEnabled(status);
                        
                        if (status) {
                            const running = await wakeWordService.isWakeWordDetectionRunning();
                            console.log('🚀 WAKE_WORD_CONTEXT: Initial native running state:', running);
                            setIsRunning(running);
                            
                            if (!running) {
                                console.log('🚀 WAKE_WORD_CONTEXT: Starting wake word detection during initialization');
                                await wakeWordService.startWakeWordDetection();
                                setIsRunning(true);
                            }
                        }
                        
                        setIsInitialized(true);
                    }
                }
            } catch (error) {
                console.error('❌ WAKE_WORD_CONTEXT: Error during initialization:', error);
                if (mounted) {
                    setIsEnabled(false);
                    setIsRunning(false);
                    setIsInitialized(true);
                }
            }
        };
        
        initialize();
        
        return () => {
            mounted = false;
        };
    }, [settingsLoading, voiceSettings?.wakeWordDetectionEnabled]);

    // Subscribe to wake word detection events
    useEffect(() => {
        const subscription = WakeWordService.addListener('wakeWordDetected', (event) => {
            const eventTime = event.timestamp ? new Date(event.timestamp) : new Date();
            const timeString = eventTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
            const wakeWord = event.wakeWord || 'Hey Jarvis';
            
            console.log('\n');
            console.log(`⏰ Time: ${timeString}, 🎤 WAKE WORD "${wakeWord}" DETECTED in React Native! 🎤`);
            
            // Skip wake word activation if not in IDLE state
            // More specific check using enum values rather than string comparison
            if (voiceState !== VoiceState.IDLE) {
                console.log('Conversation already in progress, ignoring wake word');
                return;
            }
            
            // Ensure running state is accurate
            setIsRunning(true);
        });

        return () => {
            subscription?.remove();
        };
    }, [voiceState]);

    const setEnabled = async (enabled: boolean) => {
        try {
            console.log('🔄 WAKE_WORD_CONTEXT: Setting wake word enabled via context:', enabled);
            
            if (enabled) {
                // Check permissions first
                const permissionsResult = await checkWakeWordPermissions();
                if (!permissionsResult.granted) {
                    console.log('📝 WAKE_WORD_CONTEXT: Need to request wake word permissions');
                    const requestResult = await requestWakeWordPermissions();
                    if (!requestResult.granted) {
                        console.error('❌ WAKE_WORD_CONTEXT: Permission request denied');
                        throw new Error('Microphone permission is required for wake word detection');
                    }
                }
            }
            
            // Update both local state and database-backed voice settings
            console.log('🔄 WAKE_WORD_CONTEXT: ========== DATABASE UPDATE STARTED ==========');
            console.log('🔄 WAKE_WORD_CONTEXT: About to call updateVoiceSettings with:', { wakeWordDetectionEnabled: enabled });
            console.log('🔄 WAKE_WORD_CONTEXT: Timestamp:', new Date().toISOString());
            
            const updateStartTime = Date.now();
            try {
                await updateVoiceSettings({ wakeWordDetectionEnabled: enabled });
                const updateEndTime = Date.now();
                console.log('✅ WAKE_WORD_CONTEXT: ========== DATABASE UPDATE COMPLETED ==========');
                console.log('✅ WAKE_WORD_CONTEXT: updateVoiceSettings completed successfully in', (updateEndTime - updateStartTime), 'ms');
                console.log('✅ WAKE_WORD_CONTEXT: Database should now have wakeWordDetectionEnabled:', enabled);
            } catch (updateError) {
                const updateEndTime = Date.now();
                console.error('❌ WAKE_WORD_CONTEXT: ========== DATABASE UPDATE FAILED ==========');
                console.error('❌ WAKE_WORD_CONTEXT: updateVoiceSettings failed after', (updateEndTime - updateStartTime), 'ms');
                console.error('❌ WAKE_WORD_CONTEXT: Update error:', updateError);
                throw updateError; // Re-throw the error
            }
            
            // The database update will trigger the useEffect above which will sync the native layer
            console.log('✅ WAKE_WORD_CONTEXT: Wake word state update initiated');
        } catch (error) {
            console.error('❌ WAKE_WORD_CONTEXT: Error setting wake word enabled state:', error);
            
            // Show user-friendly error message
            if (error instanceof Error && error.message.includes('permission')) {
                Alert.alert(
                    'Permission Required',
                    'Microphone permission is required for wake word detection. Please enable it in your device settings.',
                    [
                        { text: 'OK' }
                    ]
                );
            }
            
            await syncState(); // Resync state on error
            throw error; // Re-throw to let parent components handle it
        }
    };

    const startDetection = async () => {
        try {
            console.log('🎤 WAKE_WORD_CONTEXT: Starting wake word detection');
            await wakeWordService.startWakeWordDetection();
            setIsRunning(true);
            console.log('✅ WAKE_WORD_CONTEXT: Wake word detection started');
        } catch (error) {
            console.error('❌ WAKE_WORD_CONTEXT: Error starting wake word detection:', error);
            await syncState(); // Resync state on error
            throw error;
        }
    };

    const stopDetection = async () => {
        try {
            console.log('🛑 WAKE_WORD_CONTEXT: Stopping wake word detection');
            await wakeWordService.stopWakeWordDetection();
            setIsRunning(false);
            console.log('✅ WAKE_WORD_CONTEXT: Wake word detection stopped');
        } catch (error) {
            console.error('❌ WAKE_WORD_CONTEXT: Error stopping wake word detection:', error);
            await syncState(); // Resync state on error
            throw error;
        }
    };

    const value = {
        isEnabled,
        isRunning,
        setEnabled,
        startDetection,
        stopDetection,
    };

    if (!isInitialized) {
        return null; // Or a loading indicator
    }

    return (
        <WakeWordContext.Provider value={value}>
            {children}
        </WakeWordContext.Provider>
    );
}; 