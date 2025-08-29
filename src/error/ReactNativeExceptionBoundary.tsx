import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ErrorReportingService from './ErrorReportingService';

interface Props {
  children: ReactNode;
  fallbackComponent?: React.ComponentType<{ 
    error: Error; 
    retry: () => void; 
    reset: () => void;
    errorContext: string;
  }>;
  onCriticalError?: (error: Error) => void;
  maxRetries?: number;
}

interface State {
  hasError: boolean;
  error: Error | null;
  retryCount: number;
  errorTimestamp: number;
  isRecovering: boolean;
}

interface CrashPattern {
  type: 'locale' | 'swift_memory' | 'accessibility' | 'bridge' | 'unknown';
  severity: 'low' | 'medium' | 'high' | 'critical';
  recoveryStrategy: 'retry' | 'reset' | 'restart' | 'none';
}

export class ReactNativeExceptionBoundary extends Component<Props, State> {
  private recoveryTimeout: NodeJS.Timeout | null = null;
  private static readonly RECOVERY_DELAY = 1000;
  private static readonly MAX_RETRIES_DEFAULT = 3;

  public state: State = {
    hasError: false,
    error: null,
    retryCount: 0,
    errorTimestamp: 0,
    isRecovering: false,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
      error,
      errorTimestamp: Date.now(),
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const crashPattern = this.analyzeCrashPattern(error, errorInfo);
    const errorContext = this.buildErrorContext(error, errorInfo, crashPattern);

    console.error('🚨 React Native Exception Caught:', {
      error: error.message,
      stack: error.stack,
      crashPattern,
      errorInfo,
      deviceInfo: {
        platform: Platform.OS,
        version: Platform.Version,
      }
    });

    // Report to error service
    ErrorReportingService.getInstance().reportError(
      error,
      'ReactNativeExceptionBoundary',
      {
        ...errorInfo,
        crashPattern,
        retryCount: this.state.retryCount,
        deviceModel: this.getDeviceModel(),
      }
    );

    // Handle critical errors
    if (crashPattern.severity === 'critical') {
      this.props.onCriticalError?.(error);
    }

    // Auto-recovery for certain patterns
    if (crashPattern.recoveryStrategy === 'retry' && this.shouldAutoRecover(crashPattern)) {
      this.scheduleRecovery();
    }
  }

  private analyzeCrashPattern(error: Error, errorInfo: ErrorInfo): CrashPattern {
    const errorMessage = error.message.toLowerCase();
    const stackTrace = error.stack?.toLowerCase() || '';
    const componentStack = errorInfo.componentStack.toLowerCase();

    // Locale/Swift-related crashes
    if (this.isLocaleRelatedCrash(errorMessage, stackTrace)) {
      return {
        type: 'locale',
        severity: 'high',
        recoveryStrategy: 'retry'
      };
    }

    // Swift memory management crashes
    if (this.isSwiftMemoryCrash(errorMessage, stackTrace)) {
      return {
        type: 'swift_memory',
        severity: 'high',
        recoveryStrategy: 'reset'
      };
    }

    // Accessibility service conflicts
    if (this.isAccessibilityCrash(errorMessage, stackTrace)) {
      return {
        type: 'accessibility',
        severity: 'medium',
        recoveryStrategy: 'retry'
      };
    }

    // React Native bridge issues
    if (this.isBridgeCrash(errorMessage, stackTrace, componentStack)) {
      return {
        type: 'bridge',
        severity: 'high',
        recoveryStrategy: 'retry'
      };
    }

    return {
      type: 'unknown',
      severity: 'medium',
      recoveryStrategy: 'retry'
    };
  }

  private isLocaleRelatedCrash(message: string, stack: string): boolean {
    const localePatterns = [
      'locale.components.init',
      'ulocimp_forLanguageTag',
      'uloc_openKeywords',
      'icucore',
      'icu::ByteSink',
      'libicucore'
    ];
    
    return localePatterns.some(pattern => 
      message.includes(pattern) || stack.includes(pattern)
    );
  }

  private isSwiftMemoryCrash(message: string, stack: string): boolean {
    const swiftMemoryPatterns = [
      'swift_release',
      'swift_unknownObjectRelease',
      '_swift_release_dealloc',
      'swift reference counting',
      'platform_strlen',
      'platform_strcpy'
    ];

    return swiftMemoryPatterns.some(pattern => 
      message.includes(pattern) || stack.includes(pattern)
    );
  }

  private isAccessibilityCrash(message: string, stack: string): boolean {
    const axPatterns = [
      'axassetloader',
      'axassetcontroller',
      'accessibility asset',
      'mobileAsset',
      'AXAssetLoader'
    ];

    return axPatterns.some(pattern => 
      message.includes(pattern) || stack.includes(pattern)
    );
  }

  private isBridgeCrash(message: string, stack: string, componentStack: string): boolean {
    const bridgePatterns = [
      'com.facebook.react',
      'reactnative',
      'ExceptionsManagerQueue',
      'objc_exception_throw',
      'dispatch_call_block_and_release'
    ];

    return bridgePatterns.some(pattern => 
      message.includes(pattern) || stack.includes(pattern) || componentStack.includes(pattern)
    );
  }

  private shouldAutoRecover(crashPattern: CrashPattern): boolean {
    const maxRetries = this.props.maxRetries || ReactNativeExceptionBoundary.MAX_RETRIES_DEFAULT;
    
    return (
      this.state.retryCount < maxRetries &&
      crashPattern.recoveryStrategy === 'retry' &&
      crashPattern.severity !== 'critical'
    );
  }

  private scheduleRecovery = () => {
    this.setState({ isRecovering: true });
    
    this.recoveryTimeout = setTimeout(() => {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        retryCount: prevState.retryCount + 1,
        isRecovering: false,
      }));
    }, ReactNativeExceptionBoundary.RECOVERY_DELAY);
  };

  private buildErrorContext(error: Error, errorInfo: ErrorInfo, crashPattern: CrashPattern): string {
    return [
      `Type: ${crashPattern.type}`,
      `Severity: ${crashPattern.severity}`,
      `Recovery: ${crashPattern.recoveryStrategy}`,
      `Retries: ${this.state.retryCount}`,
      `Device: ${this.getDeviceModel()}`,
      `Platform: ${Platform.OS} ${Platform.Version}`
    ].join(' | ');
  }

  private getDeviceModel(): string {
    if (Platform.OS === 'ios') {
      // This would be enhanced with actual device detection
      return 'iOS Device';
    }
    return Platform.OS;
  }

  private handleRetry = () => {
    console.log('🔄 Manual retry triggered for React Native exception');
    this.setState(prevState => ({ 
      hasError: false, 
      error: null,
      retryCount: prevState.retryCount + 1,
      isRecovering: false,
    }));
  };

  private handleReset = () => {
    console.log('🔄 Reset triggered for React Native exception');
    this.setState({
      hasError: false,
      error: null,
      retryCount: 0,
      errorTimestamp: 0,
      isRecovering: false,
    });
  };

  private getErrorTitle(crashPattern: CrashPattern): string {
    const typeMap = {
      locale: 'Locale Processing Error',
      swift_memory: 'Memory Management Error',
      accessibility: 'Accessibility Service Error',
      bridge: 'React Native Bridge Error',
      unknown: 'Application Error'
    };
    
    return typeMap[crashPattern.type] || 'Application Error';
  }

  private getErrorMessage(crashPattern: CrashPattern): string {
    const messageMap = {
      locale: 'An issue occurred while processing language settings. This may be related to your device\'s region settings.',
      swift_memory: 'A memory management issue occurred. The app will attempt to recover automatically.',
      accessibility: 'A conflict with accessibility services occurred. Try disabling and re-enabling accessibility features.',
      bridge: 'Communication between JavaScript and native code failed. This is usually temporary.',
      unknown: 'An unexpected error occurred. The app will attempt to recover.'
    };
    
    return messageMap[crashPattern.type] || messageMap.unknown;
  }

  private getRecoveryStatus(): string {
    const maxRetries = this.props.maxRetries || ReactNativeExceptionBoundary.MAX_RETRIES_DEFAULT;
    return `Recovery attempt ${this.state.retryCount + 1} of ${maxRetries}`;
  }

  public componentWillUnmount() {
    if (this.recoveryTimeout) {
      clearTimeout(this.recoveryTimeout);
    }
  }

  public render() {
    if (this.state.hasError && this.state.error) {
      const crashPattern = this.analyzeCrashPattern(this.state.error, { componentStack: '' });
      const errorContext = this.buildErrorContext(this.state.error, { componentStack: '' }, crashPattern);

      if (this.props.fallbackComponent) {
        const FallbackComponent = this.props.fallbackComponent;
        return (
          <FallbackComponent 
            error={this.state.error} 
            retry={this.handleRetry}
            reset={this.handleReset}
            errorContext={errorContext}
          />
        );
      }

      return (
        <View style={styles.container}>
          <View style={styles.errorContent}>
            {this.state.isRecovering ? (
              <>
                <Ionicons name="refresh" size={48} color="#FFA726" />
                <Text style={styles.title}>Recovering...</Text>
                <Text style={styles.message}>
                  The app is attempting to recover from the error.
                </Text>
              </>
            ) : (
              <>
                <Ionicons 
                  name={crashPattern.severity === 'critical' ? 'alert-circle' : 'warning'} 
                  size={48} 
                  color={crashPattern.severity === 'critical' ? '#FF5252' : '#FF9800'} 
                />
                
                <Text style={styles.title}>
                  {this.getErrorTitle(crashPattern)}
                </Text>
                
                <Text style={styles.message}>
                  {this.getErrorMessage(crashPattern)}
                </Text>

                <Text style={styles.technicalInfo}>
                  {this.state.error.message}
                </Text>

                {this.state.retryCount > 0 && (
                  <Text style={styles.retryStatus}>
                    {this.getRecoveryStatus()}
                  </Text>
                )}

                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={styles.retryButton} 
                    onPress={this.handleRetry}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.buttonText}>Try Again</Text>
                  </TouchableOpacity>
                  
                  {this.state.retryCount > 1 && (
                    <TouchableOpacity 
                      style={styles.resetButton} 
                      onPress={this.handleReset}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.buttonText}>Reset</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </>
            )}
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorContent: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    maxWidth: 350,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  message: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  technicalInfo: {
    color: '#666666',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  retryStatus: {
    color: '#FFA726',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap: 12,
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    flex: 1,
  },
  resetButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});