import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ErrorReportingService from './ErrorReportingService';

interface Props {
  children: ReactNode;
  screenName: string;
  fallbackComponent?: React.ComponentType<{ error: Error; retry: () => void; screenName: string }>;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ScreenErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`🚨 Screen Error in ${this.props.screenName}:`, error, errorInfo);
    
    ErrorReportingService.getInstance().reportError(
      error,
      `ScreenErrorBoundary:${this.props.screenName}`,
      {
        componentStack: errorInfo.componentStack,
        screenName: this.props.screenName
      }
    );
  }

  private handleRetry = () => {
    console.log(`🔄 Retrying screen: ${this.props.screenName}`);
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallbackComponent) {
        const FallbackComponent = this.props.fallbackComponent;
        return (
          <FallbackComponent 
            error={this.state.error!} 
            retry={this.handleRetry}
            screenName={this.props.screenName}
          />
        );
      }

      return (
        <View style={styles.container}>
          <View style={styles.errorContent}>
            <Ionicons name="alert-circle-outline" size={48} color="#FF6B6B" />
            
            <Text style={styles.title}>
              {this.props.screenName} Error
            </Text>
            
            <Text style={styles.message}>
              Something went wrong in this screen.
            </Text>
            
            <TouchableOpacity 
              style={styles.retryButton} 
              onPress={this.handleRetry}
              activeOpacity={0.7}
            >
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
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
    maxWidth: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});