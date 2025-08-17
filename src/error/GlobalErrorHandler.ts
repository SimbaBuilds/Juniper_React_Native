import ErrorReportingService from './ErrorReportingService';

// Safely import ErrorUtils (might not be available in all environments)
let ErrorUtils: any;
try {
  ErrorUtils = require('react-native').ErrorUtils;
} catch (error) {
  console.warn('Failed to import ErrorUtils from react-native');
}

class GlobalErrorHandler {
  private static instance: GlobalErrorHandler;
  private originalHandler?: (error: any, isFatal?: boolean) => void;
  private unhandledRejectionHandler?: (event: any) => void;

  public static getInstance(): GlobalErrorHandler {
    if (!GlobalErrorHandler.instance) {
      GlobalErrorHandler.instance = new GlobalErrorHandler();
    }
    return GlobalErrorHandler.instance;
  }

  public initialize(): void {
    this.setupGlobalErrorHandler();
    this.setupUnhandledPromiseRejection();
    
    console.log('✅ Global error handlers initialized');
  }

  private setupGlobalErrorHandler(): void {
    // Check if ErrorUtils is available (it might not be in some environments)
    if (typeof ErrorUtils === 'undefined' || !ErrorUtils) {
      return;
    }

    this.originalHandler = ErrorUtils.getGlobalHandler();

    ErrorUtils.setGlobalHandler((error: any, isFatal?: boolean) => {
      console.error('🚨 Global Error Caught:', {
        message: error?.message || 'Unknown error',
        stack: error?.stack,
        isFatal,
        error: error
      });

      ErrorReportingService.getInstance().reportError(
        error instanceof Error ? error : new Error(error?.message || 'Unknown global error'),
        'GlobalErrorHandler',
        { isFatal, originalError: error }
      );

      if (this.originalHandler && isFatal !== false) {
        try {
          this.originalHandler(error, false);
        } catch (handlerError) {
          console.error('Error in original error handler:', handlerError);
        }
      }
    });
  }

  private setupUnhandledPromiseRejection(): void {
    if (typeof global !== 'undefined' && global.process?.on) {
      this.unhandledRejectionHandler = (reason: any) => {
        console.error('🚨 Unhandled Promise Rejection:', reason);
        
        const error = reason instanceof Error 
          ? reason 
          : new Error(`Unhandled Promise Rejection: ${reason}`);

        ErrorReportingService.getInstance().reportError(
          error,
          'UnhandledPromiseRejection',
          { originalReason: reason }
        );
      };

      global.process.on('unhandledRejection', this.unhandledRejectionHandler);
    }

    if (typeof global !== 'undefined' && global.addEventListener) {
      const rejectionHandler = (event: any) => {
        console.error('🚨 Unhandled Promise Rejection (addEventListener):', event.reason);
        
        const error = event.reason instanceof Error 
          ? event.reason 
          : new Error(`Unhandled Promise Rejection: ${event.reason}`);

        ErrorReportingService.getInstance().reportError(
          error,
          'UnhandledPromiseRejection',
          { originalReason: event.reason }
        );

        event.preventDefault?.();
      };

      global.addEventListener('unhandledrejection', rejectionHandler);
    }
  }

  public cleanup(): void {
    if (this.originalHandler && typeof ErrorUtils !== 'undefined' && ErrorUtils) {
      ErrorUtils.setGlobalHandler(this.originalHandler);
    }

    if (this.unhandledRejectionHandler && global.process?.removeListener) {
      global.process.removeListener('unhandledRejection', this.unhandledRejectionHandler);
    }
  }
}

export default GlobalErrorHandler;