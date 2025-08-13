import { registerRootComponent } from 'expo';
import App from './App';
import GlobalErrorHandler from './src/error/GlobalErrorHandler';
import ConsoleOverride from './src/utils/ConsoleOverride';

// Initialize production-safe console logging
ConsoleOverride.getInstance().initialize();

// Initialize global error handling before app starts
GlobalErrorHandler.getInstance().initialize();

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
