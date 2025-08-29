interface ErrorReport {
  error: Error;
  errorInfo?: any;
  context?: string;
  userId?: string;
  timestamp: number;
  deviceInfo: {
    platform: string;
    version: string;
    model?: string;
    isIPhone14Pro?: boolean;
    memoryCapacity?: number;
    screenDensity?: number;
  };
  appState: {
    isBackground: boolean;
    memoryUsage?: number;
    networkStatus?: string;
    locale?: string;
    accessibilityEnabled?: boolean;
    crashResilienceMode?: string;
  };
  crashContext?: {
    crashType?: string;
    severity?: string;
    recoveryAttempts?: number;
    isRecovering?: boolean;
    relatedCrashes?: number;
    memoryTrend?: string;
    bridgeState?: string;
  };
  localeContext?: {
    currentLocale?: string;
    safeLocale?: string;
    localeValidationWarnings?: string[];
    icuCompatible?: boolean;
  };
}

interface ErrorHandler {
  onError: (report: ErrorReport) => void;
}

class ErrorReportingService {
  private static instance: ErrorReportingService;
  private handlers: ErrorHandler[] = [];
  private errorQueue: ErrorReport[] = [];
  private isProcessing = false;
  private crashPatternTracker: Map<string, { count: number; lastSeen: number }> = new Map();
  private sessionStartTime: number = Date.now();
  
  // Configuration
  private readonly maxErrorQueue = 100;
  private readonly crashPatternThreshold = 3;
  private readonly crashPatternWindow = 5 * 60 * 1000; // 5 minutes

  public static getInstance(): ErrorReportingService {
    if (!ErrorReportingService.instance) {
      ErrorReportingService.instance = new ErrorReportingService();
    }
    return ErrorReportingService.instance;
  }

  public addHandler(handler: ErrorHandler): void {
    this.handlers.push(handler);
  }

  public async reportError(
    error: Error,
    context?: string,
    errorInfo?: any,
    userId?: string
  ): Promise<void> {
    const report: ErrorReport = {
      error,
      errorInfo,
      context,
      userId,
      timestamp: Date.now(),
      deviceInfo: await this.getEnhancedDeviceInfo(),
      appState: await this.getEnhancedAppState(),
      crashContext: await this.getCrashContext(error, context),
      localeContext: await this.getLocaleContext(),
    };

    // Track crash patterns
    this.trackCrashPattern(error, context);

    this.errorQueue.push(report);
    
    // Maintain queue size
    if (this.errorQueue.length > this.maxErrorQueue) {
      this.errorQueue = this.errorQueue.slice(-this.maxErrorQueue);
    }
    
    if (!this.isProcessing) {
      this.processErrorQueue();
    }
  }

  private async processErrorQueue(): Promise<void> {
    this.isProcessing = true;

    while (this.errorQueue.length > 0) {
      const report = this.errorQueue.shift();
      if (report) {
        await this.processError(report);
      }
    }

    this.isProcessing = false;
  }

  private async processError(report: ErrorReport): Promise<void> {
    try {
      // Enhanced error logging with crash analysis
      const logData = {
        message: report.error.message,
        stack: report.error.stack,
        context: report.context,
        timestamp: new Date(report.timestamp).toISOString(),
        sessionDuration: Date.now() - this.sessionStartTime,
        deviceInfo: report.deviceInfo,
        appState: report.appState,
        crashContext: report.crashContext,
        localeContext: report.localeContext,
      };

      // Different log levels based on crash context
      if (report.crashContext?.severity === 'critical') {
        console.error('🚨 CRITICAL ERROR REPORT:', logData);
      } else if (report.crashContext?.severity === 'high') {
        console.error('⚠️ HIGH SEVERITY ERROR REPORT:', logData);
      } else {
        console.error('📊 Error Report:', logData);
      }

      // Call handlers with enhanced context
      this.handlers.forEach(handler => {
        try {
          handler.onError(report);
        } catch (handlerError) {
          console.error('Error in error handler:', handlerError);
        }
      });

      // Check for critical crash patterns
      this.checkCriticalPatterns(report);

    } catch (processingError) {
      console.error('Error processing error report:', processingError);
    }
  }

  private async getEnhancedDeviceInfo(): Promise<ErrorReport['deviceInfo']> {
    const { Platform, Dimensions } = require('react-native');
    const screen = Dimensions.get('screen');
    
    // Detect iPhone 14 Pro
    const isIPhone14Pro = Platform.OS === 'ios' && (
      (screen.width === 393 && screen.height === 852) ||
      (screen.width === 852 && screen.height === 393)
    );
    
    return {
      platform: Platform.OS,
      version: Platform.Version.toString(),
      model: Platform.OS === 'ios' ? (isIPhone14Pro ? 'iPhone14,2' : 'iPhone') : 'Android',
      isIPhone14Pro,
      memoryCapacity: isIPhone14Pro ? 6 * 1024 * 1024 * 1024 : undefined,
      screenDensity: screen.scale,
    };
  }

  private async getEnhancedAppState(): Promise<ErrorReport['appState']> {
    const { AppState } = require('react-native');
    
    return {
      isBackground: AppState.currentState !== 'active',
      locale: await this.getCurrentLocale(),
      accessibilityEnabled: await this.isAccessibilityEnabled(),
      crashResilienceMode: this.getCrashResilienceMode(),
    };
  }

  private async getCurrentLocale(): Promise<string> {
    try {
      // Get current locale from device or app settings
      return 'en-US'; // This would be enhanced with actual locale detection
    } catch {
      return 'unknown';
    }
  }

  private async isAccessibilityEnabled(): Promise<boolean> {
    try {
      // This would check actual accessibility status
      return false;
    } catch {
      return false;
    }
  }

  private getCrashResilienceMode(): string {
    // Check global crash resilience settings
    if (global.__BRIDGE_ISOLATION_MODE) return 'bridge_isolation';
    if (global.__SAFE_STRING_PROCESSING) return 'safe_processing';
    return 'normal';
  }

  public clearErrorQueue(): void {
    this.errorQueue = [];
  }

  public getQueueSize(): number {
    return this.errorQueue.length;
  }

  /**
   * Get crash context for enhanced error reporting
   */
  private async getCrashContext(error: Error, context?: string): Promise<ErrorReport['crashContext']> {
    const errorMessage = error.message.toLowerCase();
    const stackTrace = (error.stack || '').toLowerCase();
    const contextStr = (context || '').toLowerCase();
    
    // Determine crash type
    let crashType = 'unknown';
    let severity: 'low' | 'medium' | 'high' | 'critical' = 'medium';
    
    if (contextStr.includes('reactnativeexceptionboundary') || stackTrace.includes('exceptionsmanagerqueue')) {
      crashType = 'react_native_bridge';
      severity = 'high';
    } else if (errorMessage.includes('locale') || stackTrace.includes('icucore')) {
      crashType = 'locale_processing';
      severity = 'high';
    } else if (stackTrace.includes('axassetloader') || stackTrace.includes('accessibility')) {
      crashType = 'accessibility';
      severity = 'medium';
    } else if (stackTrace.includes('platform_str') || errorMessage.includes('memory')) {
      crashType = 'memory_management';
      severity = 'high';
    } else if (contextStr.includes('voice') || contextStr.includes('audio')) {
      crashType = 'voice_processing';
      severity = 'medium';
    }

    // Get recovery attempts from crash pattern tracker
    const patternKey = this.getCrashPatternKey(error, context);
    const patternData = this.crashPatternTracker.get(patternKey);
    const recoveryAttempts = patternData?.count || 0;
    
    // Determine if currently recovering
    const isRecovering = global.__CRASH_RECOVERY_MODE || false;
    
    // Get related crashes count
    const relatedCrashes = this.getRelatedCrashesCount(crashType);
    
    // Get memory trend
    const memoryTrend = await this.getMemoryTrend();
    
    // Get bridge state
    const bridgeState = this.getBridgeState();

    return {
      crashType,
      severity,
      recoveryAttempts,
      isRecovering,
      relatedCrashes,
      memoryTrend,
      bridgeState,
    };
  }

  /**
   * Get locale context for enhanced error reporting
   */
  private async getLocaleContext(): Promise<ErrorReport['localeContext']> {
    try {
      const currentLocale = await this.getCurrentLocale();
      const safeLocale = global.__SAFE_LOCALE_CONFIG?.locale || 'en-US';
      
      return {
        currentLocale,
        safeLocale,
        localeValidationWarnings: global.__LOCALE_VALIDATION_WARNINGS || [],
        icuCompatible: await this.isICUCompatible(currentLocale),
      };
    } catch {
      return {
        currentLocale: 'unknown',
        safeLocale: 'en-US',
        localeValidationWarnings: [],
        icuCompatible: false,
      };
    }
  }

  /**
   * Track crash patterns for analysis
   */
  private trackCrashPattern(error: Error, context?: string): void {
    const patternKey = this.getCrashPatternKey(error, context);
    const now = Date.now();
    
    // Clean up old patterns
    for (const [key, data] of this.crashPatternTracker.entries()) {
      if (now - data.lastSeen > this.crashPatternWindow) {
        this.crashPatternTracker.delete(key);
      }
    }
    
    // Update or create pattern
    const existing = this.crashPatternTracker.get(patternKey);
    if (existing) {
      existing.count += 1;
      existing.lastSeen = now;
    } else {
      this.crashPatternTracker.set(patternKey, { count: 1, lastSeen: now });
    }
  }

  /**
   * Generate crash pattern key
   */
  private getCrashPatternKey(error: Error, context?: string): string {
    const errorType = error.constructor.name;
    const errorMessage = error.message.substring(0, 100); // First 100 chars
    const contextKey = context ? context.split(':')[0] : 'unknown'; // First part of context
    
    return `${errorType}:${contextKey}:${this.hashString(errorMessage)}`;
  }

  /**
   * Hash string for pattern matching
   */
  private hashString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(36);
  }

  /**
   * Check for critical crash patterns
   */
  private checkCriticalPatterns(report: ErrorReport): void {
    const { crashContext } = report;
    if (!crashContext) return;

    // Check for critical conditions
    const isCritical = 
      crashContext.severity === 'critical' ||
      (crashContext.recoveryAttempts || 0) >= this.crashPatternThreshold ||
      (crashContext.relatedCrashes || 0) >= this.crashPatternThreshold;

    if (isCritical) {
      console.error('🚨 CRITICAL CRASH PATTERN DETECTED:', {
        crashType: crashContext.crashType,
        recoveryAttempts: crashContext.recoveryAttempts,
        relatedCrashes: crashContext.relatedCrashes,
        timestamp: new Date(report.timestamp).toISOString(),
      });

      // Trigger emergency recovery mode
      global.__CRASH_RECOVERY_MODE = true;
      setTimeout(() => {
        global.__CRASH_RECOVERY_MODE = false;
      }, 30000); // 30 seconds
    }
  }

  /**
   * Get related crashes count
   */
  private getRelatedCrashesCount(crashType: string): number {
    let count = 0;
    const now = Date.now();
    
    for (const [key, data] of this.crashPatternTracker.entries()) {
      if (key.includes(crashType) && now - data.lastSeen <= this.crashPatternWindow) {
        count += data.count;
      }
    }
    
    return count;
  }

  /**
   * Get memory trend information
   */
  private async getMemoryTrend(): Promise<string> {
    try {
      // This would integrate with MemoryMonitoringService
      if (global.performance && (global.performance as any).memory) {
        const memory = (global.performance as any).memory;
        const used = memory.usedJSHeapSize || 0;
        const total = memory.totalJSHeapSize || 0;
        const percentage = total > 0 ? (used / total) * 100 : 0;
        
        if (percentage > 90) return 'critical_high';
        if (percentage > 70) return 'high';
        if (percentage > 50) return 'medium';
        return 'normal';
      }
      return 'unknown';
    } catch {
      return 'unknown';
    }
  }

  /**
   * Get React Native bridge state
   */
  private getBridgeState(): string {
    if (global.__BRIDGE_ISOLATION_MODE) return 'isolated';
    if (global.__BRIDGE_RECOVERY_MODE) return 'recovering';
    return 'normal';
  }

  /**
   * Check ICU compatibility
   */
  private async isICUCompatible(locale: string): Promise<boolean> {
    try {
      new Intl.DateTimeFormat(locale);
      new Intl.NumberFormat(locale);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get crash statistics
   */
  public getCrashStatistics() {
    const patterns = Array.from(this.crashPatternTracker.entries());
    const totalCrashes = patterns.reduce((sum, [, data]) => sum + data.count, 0);
    const recentPatterns = patterns.filter(([, data]) => 
      Date.now() - data.lastSeen <= this.crashPatternWindow
    );
    
    return {
      totalPatterns: patterns.length,
      recentPatterns: recentPatterns.length,
      totalCrashes,
      recentCrashes: recentPatterns.reduce((sum, [, data]) => sum + data.count, 0),
      sessionDuration: Date.now() - this.sessionStartTime,
      queueSize: this.errorQueue.length,
    };
  }

  /**
   * Reset crash pattern tracking
   */
  public resetCrashPatterns(): void {
    this.crashPatternTracker.clear();
    console.log('📊 Crash pattern tracking reset');
  }
}

// Extend global types for crash recovery
declare global {
  var __CRASH_RECOVERY_MODE: boolean;
  var __BRIDGE_RECOVERY_MODE: boolean;
  var __LOCALE_VALIDATION_WARNINGS: string[];
}

export default ErrorReportingService;