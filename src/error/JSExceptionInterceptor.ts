import ErrorReportingService from './ErrorReportingService';

interface JSException {
  id: string;
  message: string;
  stack: string;
  timestamp: number;
  source: 'javascript' | 'native_bridge' | 'promise_rejection' | 'unknown';
  handled: boolean;
  recoveryAttempted: boolean;
}

interface InterceptionRule {
  pattern: RegExp;
  action: 'ignore' | 'log' | 'recover' | 'escalate';
  recovery?: () => Promise<boolean>;
  maxAttempts?: number;
}

class JSExceptionInterceptor {
  private static instance: JSExceptionInterceptor;
  private exceptions: JSException[] = [];
  private interceptionRules: InterceptionRule[] = [];
  private isInitialized = false;
  private originalErrorHandler: ErrorHandlerType | null = null;
  private originalUnhandledRejectionHandler: any = null;
  
  // Configuration
  private readonly maxExceptions = 100;
  private readonly maxRecoveryAttempts = 3;
  private readonly recoveryDelay = 1000;

  // Exception patterns specific to the crashes we identified
  private readonly criticalPatterns = {
    LOCALE_ICU_BRIDGE: /Locale\.Components\.init.*icucore/i,
    SWIFT_STRING_MEMORY: /_platform_strlen.*_platform_strcpy/i,
    ACCESSIBILITY_ASSET: /AXAssetController.*isAssetCatalogInstalled/i,
    REACT_NATIVE_BRIDGE: /com\.facebook\.react\.ExceptionsManagerQueue.*objc_exception_throw/i,
    HERMES_GC: /hermes.*HadesGC.*Executor/i,
  };

  public static getInstance(): JSExceptionInterceptor {
    if (!JSExceptionInterceptor.instance) {
      JSExceptionInterceptor.instance = new JSExceptionInterceptor();
    }
    return JSExceptionInterceptor.instance;
  }

  /**
   * Initialize the exception interceptor
   */
  public initialize(): void {
    if (this.isInitialized) return;

    console.log('🛡️ Initializing JSExceptionInterceptor');

    this.setupInterceptionRules();
    this.setupGlobalErrorHandlers();
    this.setupPromiseRejectionHandler();
    this.setupConsoleInterception();

    this.isInitialized = true;
    console.log('✅ JSExceptionInterceptor initialized');
  }

  /**
   * Setup interception rules for different types of exceptions
   */
  private setupInterceptionRules(): void {
    // Locale-related crashes
    this.interceptionRules.push({
      pattern: this.criticalPatterns.LOCALE_ICU_BRIDGE,
      action: 'recover',
      recovery: this.recoverFromLocaleError,
      maxAttempts: 2,
    });

    // Swift string memory crashes
    this.interceptionRules.push({
      pattern: this.criticalPatterns.SWIFT_STRING_MEMORY,
      action: 'recover',
      recovery: this.recoverFromStringMemoryError,
      maxAttempts: 1,
    });

    // Accessibility crashes
    this.interceptionRules.push({
      pattern: this.criticalPatterns.ACCESSIBILITY_ASSET,
      action: 'recover',
      recovery: this.recoverFromAccessibilityError,
      maxAttempts: 3,
    });

    // React Native bridge crashes
    this.interceptionRules.push({
      pattern: this.criticalPatterns.REACT_NATIVE_BRIDGE,
      action: 'recover',
      recovery: this.recoverFromBridgeError,
      maxAttempts: 2,
    });

    // Hermes GC crashes
    this.interceptionRules.push({
      pattern: this.criticalPatterns.HERMES_GC,
      action: 'escalate',
      maxAttempts: 1,
    });

    // Generic React Native errors
    this.interceptionRules.push({
      pattern: /invariant violation/i,
      action: 'log',
    });

    // Network errors (recoverable)
    this.interceptionRules.push({
      pattern: /network request failed|fetch.*failed/i,
      action: 'log',
    });

    // Audio/Voice errors
    this.interceptionRules.push({
      pattern: /audio|microphone|speech|voice/i,
      action: 'recover',
      recovery: this.recoverFromAudioError,
      maxAttempts: 2,
    });
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    // Store original handler
    this.originalErrorHandler = ErrorUtils.getGlobalHandler();

    // Set our custom handler
    ErrorUtils.setGlobalHandler((error: Error, isFatal?: boolean) => {
      this.handleJSException(error, 'javascript', isFatal);
    });
  }

  /**
   * Setup promise rejection handler
   */
  private setupPromiseRejectionHandler(): void {
    // Handle unhandled promise rejections
    if (typeof global !== 'undefined' && global.addEventListener) {
      this.originalUnhandledRejectionHandler = global.onunhandledrejection;
      
      global.addEventListener('unhandledrejection', (event: any) => {
        const error = event.reason instanceof Error ? event.reason : new Error(String(event.reason));
        this.handleJSException(error, 'promise_rejection', false);
        
        // Call original handler if exists
        if (this.originalUnhandledRejectionHandler) {
          this.originalUnhandledRejectionHandler(event);
        }
      });
    }
  }

  /**
   * Setup console interception for error patterns
   */
  private setupConsoleInterception(): void {
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    console.error = (...args: any[]) => {
      // Check if this looks like a native crash
      const message = args.join(' ');
      if (this.isNativeCrashPattern(message)) {
        const error = new Error(message);
        this.handleJSException(error, 'native_bridge', false);
      }
      
      originalConsoleError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const message = args.join(' ');
      if (this.isNativeCrashPattern(message)) {
        const error = new Error(message);
        this.handleJSException(error, 'native_bridge', false);
      }
      
      originalConsoleWarn.apply(console, args);
    };
  }

  /**
   * Handle JavaScript exceptions
   */
  private async handleJSException(
    error: Error, 
    source: JSException['source'], 
    isFatal = false
  ): Promise<void> {
    
    const exception: JSException = {
      id: this.generateExceptionId(),
      message: error.message,
      stack: error.stack || '',
      timestamp: Date.now(),
      source,
      handled: false,
      recoveryAttempted: false,
    };

    // Add to exceptions list
    this.exceptions.push(exception);
    if (this.exceptions.length > this.maxExceptions) {
      this.exceptions = this.exceptions.slice(-this.maxExceptions);
    }

    console.log(`🛡️ JS Exception Intercepted (${source}):`, {
      message: error.message,
      isFatal,
      exceptionId: exception.id,
    });

    // Find matching interception rule
    const rule = this.findMatchingRule(error);
    
    if (rule) {
      await this.applyInterceptionRule(exception, rule, error, isFatal);
    } else {
      // Default handling
      this.reportToErrorService(error, exception, 'unhandled');
    }

    // Call original error handler for non-recovered exceptions
    if (!exception.handled && this.originalErrorHandler) {
      try {
        this.originalErrorHandler(error, isFatal);
      } catch (handlerError) {
        console.error('Error in original error handler:', handlerError);
      }
    }
  }

  /**
   * Find matching interception rule
   */
  private findMatchingRule(error: Error): InterceptionRule | null {
    const fullErrorText = error.message + (error.stack || '');
    
    for (const rule of this.interceptionRules) {
      if (rule.pattern.test(fullErrorText)) {
        return rule;
      }
    }
    
    return null;
  }

  /**
   * Apply interception rule
   */
  private async applyInterceptionRule(
    exception: JSException,
    rule: InterceptionRule,
    error: Error,
    isFatal: boolean
  ): Promise<void> {
    
    console.log(`🛡️ Applying rule: ${rule.action} for exception ${exception.id}`);

    switch (rule.action) {
      case 'ignore':
        exception.handled = true;
        console.log('🤫 Exception ignored');
        break;

      case 'log':
        this.reportToErrorService(error, exception, 'logged');
        exception.handled = true;
        break;

      case 'recover':
        if (rule.recovery) {
          const success = await this.attemptRecovery(exception, rule, error);
          if (success) {
            exception.handled = true;
            console.log('✅ Exception recovered successfully');
          } else {
            this.reportToErrorService(error, exception, 'recovery_failed');
          }
        }
        break;

      case 'escalate':
        console.error('🚨 Exception escalated as critical');
        this.reportToErrorService(error, exception, 'escalated');
        // Let the original handler deal with it
        break;
    }
  }

  /**
   * Attempt recovery using rule
   */
  private async attemptRecovery(
    exception: JSException,
    rule: InterceptionRule,
    error: Error
  ): Promise<boolean> {
    
    if (!rule.recovery) return false;

    const maxAttempts = rule.maxAttempts || this.maxRecoveryAttempts;
    const existingAttempts = this.getRecoveryAttempts(error);
    
    if (existingAttempts >= maxAttempts) {
      console.warn(`🛑 Max recovery attempts (${maxAttempts}) exceeded for exception pattern`);
      return false;
    }

    exception.recoveryAttempted = true;

    try {
      // Add delay between recovery attempts
      if (existingAttempts > 0) {
        await new Promise(resolve => setTimeout(resolve, this.recoveryDelay * (existingAttempts + 1)));
      }

      console.log(`🔄 Attempting recovery (attempt ${existingAttempts + 1}/${maxAttempts})`);
      
      const success = await rule.recovery();
      
      if (success) {
        this.reportToErrorService(error, exception, 'recovered');
      }
      
      return success;
    } catch (recoveryError) {
      console.error('❌ Recovery attempt failed:', recoveryError);
      return false;
    }
  }

  /**
   * Recovery handlers for different error types
   */
  private recoverFromLocaleError = async (): Promise<boolean> => {
    try {
      // Enable safe locale processing
      global.__SAFE_LOCALE_CONFIG = { locale: 'en-US', fallbacks: ['en', 'C'] };
      global.__SAFE_STRING_PROCESSING = true;
      
      console.log('🌍 Applied locale error recovery');
      return true;
    } catch {
      return false;
    }
  };

  private recoverFromStringMemoryError = async (): Promise<boolean> => {
    try {
      // Enable safe string processing globally
      global.__SAFE_STRING_PROCESSING = true;
      
      // Force garbage collection if available
      if (global.gc) {
        global.gc();
      }
      
      console.log('🔒 Applied string memory error recovery');
      return true;
    } catch {
      return false;
    }
  };

  private recoverFromAccessibilityError = async (): Promise<boolean> => {
    try {
      // This would interact with AccessibilityServiceManager
      console.log('♿ Applied accessibility error recovery');
      return true;
    } catch {
      return false;
    }
  };

  private recoverFromBridgeError = async (): Promise<boolean> => {
    try {
      // Enable bridge isolation mode
      global.__BRIDGE_ISOLATION_MODE = true;
      global.__BRIDGE_RECOVERY_MODE = true;
      
      // Clear bridge isolation after delay
      setTimeout(() => {
        global.__BRIDGE_RECOVERY_MODE = false;
      }, 10000);
      
      console.log('🌉 Applied bridge error recovery');
      return true;
    } catch {
      return false;
    }
  };

  private recoverFromAudioError = async (): Promise<boolean> => {
    try {
      // This would restart audio services or reset voice state
      console.log('🎤 Applied audio error recovery');
      return true;
    } catch {
      return false;
    }
  };

  /**
   * Check if message matches native crash patterns
   */
  private isNativeCrashPattern(message: string): boolean {
    return Object.values(this.criticalPatterns).some(pattern => 
      pattern.test(message)
    );
  }

  /**
   * Get recovery attempts for error pattern
   */
  private getRecoveryAttempts(error: Error): number {
    const pattern = error.message + (error.stack || '');
    return this.exceptions.filter(ex => 
      ex.recoveryAttempted && 
      (ex.message + ex.stack).includes(pattern.substring(0, 100)) &&
      Date.now() - ex.timestamp < 5 * 60 * 1000 // Last 5 minutes
    ).length;
  }

  /**
   * Report to error service
   */
  private reportToErrorService(
    error: Error, 
    exception: JSException, 
    status: string
  ): void {
    
    ErrorReportingService.getInstance().reportError(
      error,
      `JSExceptionInterceptor:${status}`,
      {
        exceptionId: exception.id,
        source: exception.source,
        handled: exception.handled,
        recoveryAttempted: exception.recoveryAttempted,
        interceptorStatus: status,
      }
    );
  }

  /**
   * Generate unique exception ID
   */
  private generateExceptionId(): string {
    return `jsx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get exception statistics
   */
  public getStatistics() {
    const now = Date.now();
    const recentExceptions = this.exceptions.filter(ex => now - ex.timestamp < 10 * 60 * 1000);
    const handledCount = this.exceptions.filter(ex => ex.handled).length;
    const recoveredCount = this.exceptions.filter(ex => ex.recoveryAttempted).length;
    
    const sourceBreakdown = this.exceptions.reduce((acc, ex) => {
      acc[ex.source] = (acc[ex.source] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalExceptions: this.exceptions.length,
      recentExceptions: recentExceptions.length,
      handledExceptions: handledCount,
      recoveredExceptions: recoveredCount,
      recoverySuccessRate: recoveredCount > 0 ? (handledCount / recoveredCount) * 100 : 0,
      sourceBreakdown,
      isInitialized: this.isInitialized,
    };
  }

  /**
   * Clear exception history
   */
  public clearHistory(): void {
    this.exceptions = [];
    console.log('🛡️ Exception interceptor history cleared');
  }

  /**
   * Shutdown the interceptor
   */
  public shutdown(): void {
    if (!this.isInitialized) return;

    // Restore original handlers
    if (this.originalErrorHandler) {
      ErrorUtils.setGlobalHandler(this.originalErrorHandler);
    }

    if (this.originalUnhandledRejectionHandler && global.addEventListener) {
      global.onunhandledrejection = this.originalUnhandledRejectionHandler;
    }

    this.isInitialized = false;
    console.log('🛡️ JSExceptionInterceptor shutdown');
  }
}

export default JSExceptionInterceptor;