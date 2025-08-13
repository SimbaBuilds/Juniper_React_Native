import ErrorReportingService from '../error/ErrorReportingService';

interface SafeExecuteOptions {
  context?: string;
  fallbackValue?: any;
  silent?: boolean;
}

export class ProductionSafeWrapper {
  public static async safeAsyncExecute<T>(
    operation: () => Promise<T>,
    options: SafeExecuteOptions = {}
  ): Promise<T | null> {
    const { context = 'Unknown', fallbackValue = null, silent = false } = options;
    
    try {
      return await operation();
    } catch (error) {
      const errorInstance = error instanceof Error ? error : new Error(String(error));
      
      if (!silent) {
        console.error(`Safe async execute failed in ${context}:`, errorInstance);
      }

      ErrorReportingService.getInstance().reportError(
        errorInstance,
        `ProductionSafeWrapper:${context}`,
        { operation: 'safeAsyncExecute' }
      );

      return fallbackValue;
    }
  }

  public static safeExecute<T>(
    operation: () => T,
    options: SafeExecuteOptions = {}
  ): T | null {
    const { context = 'Unknown', fallbackValue = null, silent = false } = options;
    
    try {
      return operation();
    } catch (error) {
      const errorInstance = error instanceof Error ? error : new Error(String(error));
      
      if (!silent) {
        console.error(`Safe execute failed in ${context}:`, errorInstance);
      }

      ErrorReportingService.getInstance().reportError(
        errorInstance,
        `ProductionSafeWrapper:${context}`,
        { operation: 'safeExecute' }
      );

      return fallbackValue;
    }
  }

  public static safeJsonParse<T = any>(
    jsonString: string,
    fallbackValue: T | null = null,
    context = 'JSON Parse'
  ): T | null {
    return this.safeExecute(
      () => JSON.parse(jsonString),
      { context, fallbackValue, silent: true }
    );
  }

  public static safeStorageOperation<T>(
    operation: () => T,
    context = 'Storage Operation',
    fallbackValue: T | null = null
  ): T | null {
    return this.safeExecute(operation, { context, fallbackValue, silent: true });
  }

  public static withRetry<T>(
    operation: () => Promise<T>,
    maxRetries = 3,
    delay = 1000,
    context = 'Retry Operation'
  ): Promise<T | null> {
    return new Promise(async (resolve) => {
      let lastError: Error | null = null;

      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          const result = await operation();
          resolve(result);
          return;
        } catch (error) {
          lastError = error instanceof Error ? error : new Error(String(error));
          
          if (attempt === maxRetries) {
            console.error(`All ${maxRetries} attempts failed for ${context}:`, lastError);
            
            ErrorReportingService.getInstance().reportError(
              lastError,
              `ProductionSafeWrapper:${context}`,
              { operation: 'withRetry', attempts: maxRetries }
            );
            
            resolve(null);
            return;
          }

          console.warn(`Attempt ${attempt}/${maxRetries} failed for ${context}, retrying in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    });
  }
}

export const safe = ProductionSafeWrapper;