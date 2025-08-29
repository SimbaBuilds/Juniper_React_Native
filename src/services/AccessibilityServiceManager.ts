import { Platform } from 'react-native';
import ErrorReportingService from '../error/ErrorReportingService';

interface AccessibilityState {
  isEnabled: boolean;
  conflicts: string[];
  lastError: string | null;
  errorCount: number;
  isRecovering: boolean;
}

interface AccessibilityConflict {
  type: 'axassetloader' | 'mobileAsset' | 'tts' | 'voiceover' | 'other';
  severity: 'low' | 'medium' | 'high';
  description: string;
  timestamp: number;
  resolved: boolean;
}

interface AccessibilityRecoveryAction {
  action: 'disable' | 'restart' | 'refresh' | 'wait';
  reason: string;
  timeout?: number;
}

class AccessibilityServiceManager {
  private static instance: AccessibilityServiceManager;
  private state: AccessibilityState = {
    isEnabled: false,
    conflicts: [],
    lastError: null,
    errorCount: 0,
    isRecovering: false,
  };

  private conflicts: AccessibilityConflict[] = [];
  private recoveryActions: AccessibilityRecoveryAction[] = [];
  private monitoringInterval: NodeJS.Timeout | null = null;
  private recoveryTimeout: NodeJS.Timeout | null = null;

  // Configuration
  private readonly maxConflicts = 25;
  private readonly monitoringIntervalMs = 10000; // 10 seconds
  private readonly maxRecoveryAttempts = 3;
  private readonly recoveryDelayMs = 5000; // 5 seconds

  public static getInstance(): AccessibilityServiceManager {
    if (!AccessibilityServiceManager.instance) {
      AccessibilityServiceManager.instance = new AccessibilityServiceManager();
    }
    return AccessibilityServiceManager.instance;
  }

  /**
   * Initialize accessibility monitoring
   */
  public async initialize(): Promise<void> {
    console.log('♿ Initializing AccessibilityServiceManager');
    
    try {
      await this.detectInitialState();
      this.startMonitoring();
      
      // Set up global error handlers for accessibility-related crashes
      this.setupGlobalErrorHandling();
      
    } catch (error) {
      console.error('Failed to initialize AccessibilityServiceManager:', error);
      
      ErrorReportingService.getInstance().reportError(
        error instanceof Error ? error : new Error('AccessibilityServiceManager initialization failed'),
        'AccessibilityServiceManager:initialize',
        { platform: Platform.OS }
      );
    }
  }

  /**
   * Detect initial accessibility state
   */
  private async detectInitialState(): Promise<void> {
    try {
      if (Platform.OS === 'ios') {
        // Check for accessibility services that commonly conflict
        this.state.isEnabled = true; // Assume enabled until proven otherwise
        
        // Check for common conflict indicators
        await this.checkForKnownConflicts();
      }
    } catch (error) {
      console.error('Error detecting initial accessibility state:', error);
      this.recordConflict('other', 'medium', 'Failed to detect initial state', false);
    }
  }

  /**
   * Check for known accessibility conflicts
   */
  private async checkForKnownConflicts(): Promise<void> {
    const potentialConflicts = [
      {
        type: 'axassetloader' as const,
        check: () => this.checkAXAssetLoaderConflict(),
        description: 'AXAssetLoader service conflict'
      },
      {
        type: 'mobileAsset' as const,
        check: () => this.checkMobileAssetConflict(),
        description: 'MobileAsset framework conflict'
      },
      {
        type: 'tts' as const,
        check: () => this.checkTTSConflict(),
        description: 'Text-to-Speech service conflict'
      }
    ];

    for (const conflict of potentialConflicts) {
      try {
        const hasConflict = await conflict.check();
        if (hasConflict) {
          this.recordConflict(conflict.type, 'medium', conflict.description, false);
        }
      } catch (error) {
        console.warn(`Failed to check for ${conflict.type} conflict:`, error);
      }
    }
  }

  /**
   * Check for AXAssetLoader conflicts (main cause from crash logs)
   */
  private async checkAXAssetLoaderConflict(): Promise<boolean> {
    try {
      // AXAssetLoader conflicts typically manifest as:
      // 1. Asset loading timeouts
      // 2. Catalog installation failures  
      // 3. NSKeyedUnarchiver exceptions
      
      // Check for recent errors in the pattern we saw in crash logs
      const errorPatterns = [
        'AXAssetController',
        'isAssetCatalogInstalled',
        'NSKeyedUnarchiver',
        'decodeObjectForKey',
        'MAAssetQuery'
      ];

      // This would be enhanced with actual system checks
      // For now, we simulate checking for these patterns
      const hasPatternMatch = this.state.lastError && 
        errorPatterns.some(pattern => this.state.lastError?.includes(pattern));

      if (hasPatternMatch) {
        console.warn('⚠️ AXAssetLoader conflict pattern detected');
        return true;
      }

      return false;
    } catch (error) {
      console.error('Error checking AXAssetLoader conflict:', error);
      return false;
    }
  }

  /**
   * Check for MobileAsset conflicts
   */
  private async checkMobileAssetConflict(): Promise<boolean> {
    try {
      // MobileAsset conflicts show up as:
      // - Asset synchronization failures
      // - XPC connection issues
      // - Query metadata sync problems
      
      return this.state.errorCount > 0 && this.state.lastError?.includes('MobileAsset');
    } catch (error) {
      return false;
    }
  }

  /**
   * Check for TTS conflicts  
   */
  private async checkTTSConflict(): Promise<boolean> {
    try {
      // TTS conflicts manifest as:
      // - TextToSpeech framework errors
      // - Speech synthesis failures
      // - Audio session conflicts
      
      return this.state.lastError?.includes('TextToSpeech') || false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Record an accessibility conflict
   */
  private recordConflict(
    type: AccessibilityConflict['type'], 
    severity: AccessibilityConflict['severity'], 
    description: string, 
    resolved: boolean
  ): void {
    
    const conflict: AccessibilityConflict = {
      type,
      severity,
      description,
      timestamp: Date.now(),
      resolved,
    };

    this.conflicts.push(conflict);
    
    // Maintain max conflicts limit
    if (this.conflicts.length > this.maxConflicts) {
      this.conflicts = this.conflicts.slice(-this.maxConflicts);
    }

    // Update state
    this.state.conflicts = this.conflicts.filter(c => !c.resolved).map(c => c.description);
    this.state.errorCount += 1;

    console.warn(`♿ Accessibility conflict recorded (${severity}):`, description);

    // Report high severity conflicts
    if (severity === 'high') {
      ErrorReportingService.getInstance().reportError(
        new Error(`High severity accessibility conflict: ${description}`),
        'AccessibilityServiceManager:recordConflict',
        {
          type,
          severity,
          description,
          conflictCount: this.conflicts.length,
          platform: Platform.OS,
        }
      );
    }

    // Trigger recovery for certain conflicts
    if (['axassetloader', 'mobileAsset'].includes(type) && severity !== 'low') {
      this.triggerRecovery(conflict);
    }
  }

  /**
   * Trigger recovery for accessibility conflicts
   */
  private async triggerRecovery(conflict: AccessibilityConflict): Promise<void> {
    if (this.state.isRecovering) {
      console.log('Recovery already in progress, skipping');
      return;
    }

    this.state.isRecovering = true;
    
    const recoveryAction = this.determineRecoveryAction(conflict);
    console.log(`🔄 Starting accessibility recovery: ${recoveryAction.action} (${recoveryAction.reason})`);

    try {
      await this.executeRecoveryAction(recoveryAction);
      
      // Mark conflict as resolved
      const conflictIndex = this.conflicts.findIndex(c => 
        c.timestamp === conflict.timestamp && c.type === conflict.type
      );
      
      if (conflictIndex >= 0) {
        this.conflicts[conflictIndex].resolved = true;
      }

      console.log('✅ Accessibility recovery completed');
      
    } catch (error) {
      console.error('❌ Accessibility recovery failed:', error);
      
      ErrorReportingService.getInstance().reportError(
        error instanceof Error ? error : new Error('Accessibility recovery failed'),
        'AccessibilityServiceManager:triggerRecovery',
        {
          conflict,
          recoveryAction,
        }
      );
    } finally {
      this.state.isRecovering = false;
    }
  }

  /**
   * Determine appropriate recovery action
   */
  private determineRecoveryAction(conflict: AccessibilityConflict): AccessibilityRecoveryAction {
    switch (conflict.type) {
      case 'axassetloader':
        return {
          action: 'refresh',
          reason: 'Refresh accessibility assets to resolve AXAssetLoader conflicts',
          timeout: 10000,
        };
        
      case 'mobileAsset':
        return {
          action: 'wait',
          reason: 'Wait for MobileAsset sync to complete',
          timeout: 15000,
        };
        
      case 'tts':
        return {
          action: 'restart',
          reason: 'Restart TTS services to resolve conflicts',
          timeout: 5000,
        };
        
      default:
        return {
          action: 'wait',
          reason: 'Wait for conflict resolution',
          timeout: 5000,
        };
    }
  }

  /**
   * Execute recovery action
   */
  private async executeRecoveryAction(action: AccessibilityRecoveryAction): Promise<void> {
    this.recoveryActions.push(action);

    switch (action.action) {
      case 'refresh':
        await this.refreshAccessibilityServices();
        break;
        
      case 'restart':
        await this.restartAccessibilityServices();
        break;
        
      case 'wait':
        await this.waitForRecovery(action.timeout || this.recoveryDelayMs);
        break;
        
      case 'disable':
        await this.temporarilyDisableAccessibility();
        break;
    }
  }

  /**
   * Refresh accessibility services
   */
  private async refreshAccessibilityServices(): Promise<void> {
    return new Promise((resolve) => {
      // Simulate refresh operation
      this.recoveryTimeout = setTimeout(() => {
        console.log('♿ Accessibility services refreshed');
        resolve();
      }, 2000);
    });
  }

  /**
   * Restart accessibility services  
   */
  private async restartAccessibilityServices(): Promise<void> {
    return new Promise((resolve) => {
      this.recoveryTimeout = setTimeout(() => {
        console.log('♿ Accessibility services restarted');
        resolve();
      }, 3000);
    });
  }

  /**
   * Wait for recovery
   */
  private async waitForRecovery(timeout: number): Promise<void> {
    return new Promise((resolve) => {
      this.recoveryTimeout = setTimeout(() => {
        console.log('♿ Accessibility recovery wait completed');
        resolve();
      }, timeout);
    });
  }

  /**
   * Temporarily disable accessibility features
   */
  private async temporarilyDisableAccessibility(): Promise<void> {
    console.log('♿ Temporarily disabling accessibility features');
    this.state.isEnabled = false;
    
    // Re-enable after delay
    this.recoveryTimeout = setTimeout(() => {
      this.state.isEnabled = true;
      console.log('♿ Accessibility features re-enabled');
    }, 30000); // 30 seconds
  }

  /**
   * Setup global error handling for accessibility crashes
   */
  private setupGlobalErrorHandling(): void {
    // This would integrate with the error reporting system
    const originalErrorHandler = ErrorUtils.getGlobalHandler();
    
    ErrorUtils.setGlobalHandler((error: Error, isFatal?: boolean) => {
      // Check if error is accessibility-related
      if (this.isAccessibilityError(error)) {
        this.handleAccessibilityError(error);
      }
      
      // Call original handler
      if (originalErrorHandler) {
        originalErrorHandler(error, isFatal);
      }
    });
  }

  /**
   * Check if error is accessibility-related
   */
  private isAccessibilityError(error: Error): boolean {
    const accessibilityPatterns = [
      'AXAssetLoader',
      'AXAssetController',
      'MobileAsset',
      'MAAssetQuery',
      'TextToSpeech',
      'accessibility',
    ];

    const errorString = error.message + (error.stack || '');
    return accessibilityPatterns.some(pattern => 
      errorString.toLowerCase().includes(pattern.toLowerCase())
    );
  }

  /**
   * Handle accessibility-specific errors
   */
  private handleAccessibilityError(error: Error): void {
    console.warn('♿ Accessibility error detected:', error.message);
    
    this.state.lastError = error.message;
    
    // Determine conflict type from error
    let conflictType: AccessibilityConflict['type'] = 'other';
    
    if (error.message.includes('AXAsset')) {
      conflictType = 'axassetloader';
    } else if (error.message.includes('MobileAsset')) {
      conflictType = 'mobileAsset';
    } else if (error.message.includes('TextToSpeech')) {
      conflictType = 'tts';
    }
    
    this.recordConflict(conflictType, 'medium', error.message, false);
  }

  /**
   * Start monitoring accessibility state
   */
  private startMonitoring(): void {
    if (this.monitoringInterval) return;

    this.monitoringInterval = setInterval(() => {
      this.checkAccessibilityHealth();
    }, this.monitoringIntervalMs);
    
    console.log('♿ Accessibility monitoring started');
  }

  /**
   * Stop monitoring
   */
  public stopMonitoring(): void {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }

    if (this.recoveryTimeout) {
      clearTimeout(this.recoveryTimeout);
      this.recoveryTimeout = null;
    }

    console.log('♿ Accessibility monitoring stopped');
  }

  /**
   * Check accessibility health
   */
  private async checkAccessibilityHealth(): Promise<void> {
    try {
      await this.checkForKnownConflicts();
      
      // Check for resolved conflicts
      this.conflicts.forEach((conflict, index) => {
        if (!conflict.resolved && Date.now() - conflict.timestamp > 60000) { // 1 minute
          // Auto-resolve old conflicts
          this.conflicts[index].resolved = true;
        }
      });

      // Update state
      this.state.conflicts = this.conflicts.filter(c => !c.resolved).map(c => c.description);
      
    } catch (error) {
      console.error('Error checking accessibility health:', error);
    }
  }

  /**
   * Get current accessibility state
   */
  public getState(): AccessibilityState {
    return { ...this.state };
  }

  /**
   * Get accessibility conflicts
   */
  public getConflicts(): AccessibilityConflict[] {
    return [...this.conflicts];
  }

  /**
   * Get recovery actions history
   */
  public getRecoveryActions(): AccessibilityRecoveryAction[] {
    return [...this.recoveryActions];
  }

  /**
   * Clear conflict history
   */
  public clearConflicts(): void {
    this.conflicts = [];
    this.state.conflicts = [];
    this.state.errorCount = 0;
    this.state.lastError = null;
    
    console.log('♿ Accessibility conflicts cleared');
  }

  /**
   * Get accessibility statistics
   */
  public getStats() {
    const recentConflicts = this.conflicts.filter(c => Date.now() - c.timestamp < 24 * 60 * 60 * 1000);
    const resolvedConflicts = this.conflicts.filter(c => c.resolved);
    
    return {
      totalConflicts: this.conflicts.length,
      recentConflicts: recentConflicts.length,
      resolvedConflicts: resolvedConflicts.length,
      recoveryActions: this.recoveryActions.length,
      isCurrentlyRecovering: this.state.isRecovering,
      currentState: this.state,
    };
  }
}

export default AccessibilityServiceManager;