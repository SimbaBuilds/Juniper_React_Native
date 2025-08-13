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
  };
  appState: {
    isBackground: boolean;
    memoryUsage?: number;
    networkStatus?: string;
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
      deviceInfo: await this.getDeviceInfo(),
      appState: await this.getAppState(),
    };

    this.errorQueue.push(report);
    
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
      console.error('Error Report:', {
        message: report.error.message,
        stack: report.error.stack,
        context: report.context,
        timestamp: new Date(report.timestamp).toISOString(),
        deviceInfo: report.deviceInfo,
        appState: report.appState,
      });

      this.handlers.forEach(handler => {
        try {
          handler.onError(report);
        } catch (handlerError) {
          console.error('Error in error handler:', handlerError);
        }
      });

    } catch (processingError) {
      console.error('Error processing error report:', processingError);
    }
  }

  private async getDeviceInfo(): Promise<ErrorReport['deviceInfo']> {
    const { Platform } = require('react-native');
    
    return {
      platform: Platform.OS,
      version: Platform.Version.toString(),
    };
  }

  private async getAppState(): Promise<ErrorReport['appState']> {
    const { AppState } = require('react-native');
    
    return {
      isBackground: AppState.currentState !== 'active',
    };
  }

  public clearErrorQueue(): void {
    this.errorQueue = [];
  }

  public getQueueSize(): number {
    return this.errorQueue.length;
  }
}

export default ErrorReportingService;