import { registerRootComponent } from 'expo';
import App from './App';
import GlobalErrorHandler from './src/error/GlobalErrorHandler';
import ConsoleOverride from './src/utils/ConsoleOverride';

// Initialize production-safe console logging
ConsoleOverride.getInstance().initialize();

// Initialize global error handling before app starts
GlobalErrorHandler.getInstance().initialize();

// Add enhanced unhandled promise rejection handler specifically for React Native
const setupReactNativePromiseHandlers = () => {
  // React Native specific promise rejection handler
  if (typeof global !== 'undefined') {
    const globalAny = global as any;
    const originalHandler = globalAny.__onUnhandledRejection;
    globalAny.__onUnhandledRejection = (id: string, rejection: any) => {
      console.error('🚨 RN Unhandled Promise Rejection (ID:', id, '):', rejection);
      
      // Prevent crash and report safely
      try {
        const { ErrorReportingService } = require('./src/error/ErrorReportingService');
        ErrorReportingService.getInstance().reportError(
          rejection instanceof Error ? rejection : new Error(String(rejection)),
          'ReactNativeUnhandledPromiseRejection',
          { rejectionId: id }
        );
      } catch (reportingError) {
        console.error('Error reporting RN promise rejection:', reportingError);
      }
      
      // Call original handler but suppress crash
      if (originalHandler) {
        try {
          // Pass false for isFatal to prevent crash
          originalHandler(id, rejection);
        } catch (handlerError) {
          console.error('Error in original RN promise rejection handler:', handlerError);
        }
      }
    };
  }
};

setupReactNativePromiseHandlers();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
