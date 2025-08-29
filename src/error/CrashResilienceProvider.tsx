import React, { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';
import { Platform } from 'react-native';
import ErrorReportingService from './ErrorReportingService';

interface CrashEvent {
  id: string;
  timestamp: number;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  component: string;
  recovered: boolean;
  recoveryTime?: number;
}

interface CrashStats {
  totalCrashes: number;
  successfulRecoveries: number;
  criticalCrashes: number;
  recentCrashes: CrashEvent[];
  mostCommonCrashType: string | null;
  averageRecoveryTime: number;
}

interface CrashResilienceState {
  isRecovering: boolean;
  crashHistory: CrashEvent[];
  crashStats: CrashStats;
  deviceStability: 'stable' | 'unstable' | 'critical';
  recoveryMode: 'normal' | 'safe' | 'minimal';
}

interface CrashResilienceContextType extends CrashResilienceState {
  recordCrash: (type: string, component: string, severity: CrashEvent['severity']) => string;
  recordRecovery: (crashId: string) => void;
  setRecovering: (isRecovering: boolean) => void;
  getRecommendedAction: () => 'continue' | 'restart' | 'safe_mode' | 'minimal_mode';
  clearCrashHistory: () => void;
  shouldEnableFeature: (feature: string) => boolean;
}

const CrashResilienceContext = createContext<CrashResilienceContextType | null>(null);

interface CrashResilienceProviderProps {
  children: ReactNode;
  maxCrashHistory?: number;
  criticalCrashThreshold?: number;
}

export const CrashResilienceProvider: React.FC<CrashResilienceProviderProps> = ({
  children,
  maxCrashHistory = 50,
  criticalCrashThreshold = 3,
}) => {
  const [state, setState] = useState<CrashResilienceState>(() => ({
    isRecovering: false,
    crashHistory: [],
    crashStats: {
      totalCrashes: 0,
      successfulRecoveries: 0,
      criticalCrashes: 0,
      recentCrashes: [],
      mostCommonCrashType: null,
      averageRecoveryTime: 0,
    },
    deviceStability: 'stable',
    recoveryMode: 'normal',
  }));

  const generateCrashId = useCallback(() => {
    return `crash_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  const calculateDeviceStability = useCallback((crashes: CrashEvent[]): CrashResilienceState['deviceStability'] => {
    const recentCrashes = crashes.filter(crash => Date.now() - crash.timestamp < 10 * 60 * 1000); // Last 10 minutes
    const criticalRecentCrashes = recentCrashes.filter(crash => crash.severity === 'critical');

    if (criticalRecentCrashes.length >= 2) return 'critical';
    if (recentCrashes.length >= 5) return 'unstable';
    return 'stable';
  }, []);

  const calculateRecoveryMode = useCallback((stability: CrashResilienceState['deviceStability'], crashes: CrashEvent[]): CrashResilienceState['recoveryMode'] => {
    if (stability === 'critical') return 'minimal';
    if (stability === 'unstable') return 'safe';
    
    // Check for specific crash patterns
    const recentCrashes = crashes.filter(crash => Date.now() - crash.timestamp < 5 * 60 * 1000);
    const localeRelatedCrashes = recentCrashes.filter(crash => crash.type.includes('locale'));
    
    if (localeRelatedCrashes.length >= 2) return 'safe';
    
    return 'normal';
  }, []);

  const updateCrashStats = useCallback((crashes: CrashEvent[]): CrashStats => {
    const recentCrashes = crashes.filter(crash => Date.now() - crash.timestamp < 24 * 60 * 60 * 1000); // Last 24 hours
    const successfulRecoveries = crashes.filter(crash => crash.recovered).length;
    const criticalCrashes = crashes.filter(crash => crash.severity === 'critical').length;
    
    // Find most common crash type
    const crashTypeCounts: Record<string, number> = {};
    crashes.forEach(crash => {
      crashTypeCounts[crash.type] = (crashTypeCounts[crash.type] || 0) + 1;
    });
    
    const mostCommonCrashType = Object.keys(crashTypeCounts).reduce((a, b) => 
      crashTypeCounts[a] > crashTypeCounts[b] ? a : b, null
    );

    // Calculate average recovery time
    const recoveredCrashes = crashes.filter(crash => crash.recovered && crash.recoveryTime);
    const averageRecoveryTime = recoveredCrashes.length > 0 
      ? recoveredCrashes.reduce((sum, crash) => sum + (crash.recoveryTime || 0), 0) / recoveredCrashes.length
      : 0;

    return {
      totalCrashes: crashes.length,
      successfulRecoveries,
      criticalCrashes,
      recentCrashes,
      mostCommonCrashType,
      averageRecoveryTime,
    };
  }, []);

  const recordCrash = useCallback((type: string, component: string, severity: CrashEvent['severity']): string => {
    const crashId = generateCrashId();
    const crashEvent: CrashEvent = {
      id: crashId,
      timestamp: Date.now(),
      type,
      severity,
      component,
      recovered: false,
    };

    setState(prevState => {
      const newCrashHistory = [...prevState.crashHistory, crashEvent].slice(-maxCrashHistory);
      const newCrashStats = updateCrashStats(newCrashHistory);
      const newDeviceStability = calculateDeviceStability(newCrashHistory);
      const newRecoveryMode = calculateRecoveryMode(newDeviceStability, newCrashHistory);

      // Log crash event
      console.error('🚨 Crash Recorded:', {
        crashId,
        type,
        component,
        severity,
        deviceStability: newDeviceStability,
        recoveryMode: newRecoveryMode,
      });

      // Report to error service
      ErrorReportingService.getInstance().reportError(
        new Error(`Crash recorded: ${type} in ${component}`),
        'CrashResilienceProvider',
        {
          crashId,
          type,
          component,
          severity,
          deviceStability: newDeviceStability,
          recoveryMode: newRecoveryMode,
          crashStats: newCrashStats,
        }
      );

      return {
        ...prevState,
        crashHistory: newCrashHistory,
        crashStats: newCrashStats,
        deviceStability: newDeviceStability,
        recoveryMode: newRecoveryMode,
      };
    });

    return crashId;
  }, [generateCrashId, maxCrashHistory, updateCrashStats, calculateDeviceStability, calculateRecoveryMode]);

  const recordRecovery = useCallback((crashId: string) => {
    setState(prevState => {
      const newCrashHistory = prevState.crashHistory.map(crash => {
        if (crash.id === crashId && !crash.recovered) {
          const recoveryTime = Date.now() - crash.timestamp;
          console.log('✅ Crash Recovery Recorded:', { crashId, recoveryTime });
          
          return {
            ...crash,
            recovered: true,
            recoveryTime,
          };
        }
        return crash;
      });

      const newCrashStats = updateCrashStats(newCrashHistory);
      const newDeviceStability = calculateDeviceStability(newCrashHistory);
      const newRecoveryMode = calculateRecoveryMode(newDeviceStability, newCrashHistory);

      return {
        ...prevState,
        crashHistory: newCrashHistory,
        crashStats: newCrashStats,
        deviceStability: newDeviceStability,
        recoveryMode: newRecoveryMode,
      };
    });
  }, [updateCrashStats, calculateDeviceStability, calculateRecoveryMode]);

  const setRecovering = useCallback((isRecovering: boolean) => {
    setState(prevState => ({
      ...prevState,
      isRecovering,
    }));
  }, []);

  const getRecommendedAction = useCallback((): 'continue' | 'restart' | 'safe_mode' | 'minimal_mode' => {
    const { deviceStability, crashStats, recoveryMode } = state;

    if (deviceStability === 'critical') return 'minimal_mode';
    if (crashStats.criticalCrashes >= criticalCrashThreshold) return 'restart';
    if (deviceStability === 'unstable') return 'safe_mode';
    if (recoveryMode === 'safe') return 'safe_mode';
    
    return 'continue';
  }, [state, criticalCrashThreshold]);

  const clearCrashHistory = useCallback(() => {
    console.log('🧹 Clearing crash history');
    setState(prevState => ({
      ...prevState,
      crashHistory: [],
      crashStats: {
        totalCrashes: 0,
        successfulRecoveries: 0,
        criticalCrashes: 0,
        recentCrashes: [],
        mostCommonCrashType: null,
        averageRecoveryTime: 0,
      },
      deviceStability: 'stable',
      recoveryMode: 'normal',
    }));
  }, []);

  const shouldEnableFeature = useCallback((feature: string): boolean => {
    const { recoveryMode, deviceStability } = state;

    const featureRisks: Record<string, { minStability: string; allowedModes: string[] }> = {
      'voice_recognition': { minStability: 'stable', allowedModes: ['normal', 'safe'] },
      'background_processing': { minStability: 'stable', allowedModes: ['normal'] },
      'complex_ui_animations': { minStability: 'stable', allowedModes: ['normal'] },
      'locale_processing': { minStability: 'stable', allowedModes: ['normal'] },
      'accessibility_features': { minStability: 'unstable', allowedModes: ['normal', 'safe'] },
      'basic_functionality': { minStability: 'critical', allowedModes: ['normal', 'safe', 'minimal'] },
    };

    const featureConfig = featureRisks[feature];
    if (!featureConfig) return true; // Unknown features are allowed by default

    const stabilityOrder = ['critical', 'unstable', 'stable'];
    const deviceStabilityIndex = stabilityOrder.indexOf(deviceStability);
    const minStabilityIndex = stabilityOrder.indexOf(featureConfig.minStability);

    if (deviceStabilityIndex < minStabilityIndex) return false;
    if (!featureConfig.allowedModes.includes(recoveryMode)) return false;

    return true;
  }, [state]);

  // Device-specific adjustments
  useEffect(() => {
    if (Platform.OS === 'ios') {
      // iPhone 14 Pro specific considerations
      const isIPhone14Pro = true; // This would be enhanced with actual device detection
      
      if (isIPhone14Pro && state.crashStats.mostCommonCrashType === 'locale') {
        console.log('📱 iPhone 14 Pro locale crash pattern detected, adjusting recovery mode');
        setState(prevState => ({
          ...prevState,
          recoveryMode: prevState.recoveryMode === 'normal' ? 'safe' : prevState.recoveryMode,
        }));
      }
    }
  }, [state.crashStats.mostCommonCrashType, state.deviceStability]);

  const contextValue: CrashResilienceContextType = {
    ...state,
    recordCrash,
    recordRecovery,
    setRecovering,
    getRecommendedAction,
    clearCrashHistory,
    shouldEnableFeature,
  };

  return (
    <CrashResilienceContext.Provider value={contextValue}>
      {children}
    </CrashResilienceContext.Provider>
  );
};

export const useCrashResilience = (): CrashResilienceContextType => {
  const context = useContext(CrashResilienceContext);
  if (!context) {
    throw new Error('useCrashResilience must be used within a CrashResilienceProvider');
  }
  return context;
};

// Hook for components to report crashes
export const useCrashReporter = (componentName: string) => {
  const { recordCrash, recordRecovery } = useCrashResilience();

  const reportCrash = useCallback((type: string, severity: CrashEvent['severity'] = 'medium') => {
    return recordCrash(type, componentName, severity);
  }, [recordCrash, componentName]);

  return {
    reportCrash,
    recordRecovery,
  };
};