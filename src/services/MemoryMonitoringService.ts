import { Platform, NativeModules } from 'react-native';
import ErrorReportingService from '../error/ErrorReportingService';

interface MemorySnapshot {
  timestamp: number;
  totalMemory: number;
  usedMemory: number;
  freeMemory: number;
  jsHeapSize?: number;
  nativeHeapSize?: number;
  context: string;
}

interface MemoryAlert {
  type: 'warning' | 'critical';
  threshold: number;
  currentUsage: number;
  message: string;
  timestamp: number;
}

interface MemoryTrend {
  direction: 'increasing' | 'decreasing' | 'stable';
  rate: number; // MB per second
  duration: number; // milliseconds
}

interface MemoryStats {
  currentSnapshot: MemorySnapshot | null;
  peakUsage: number;
  averageUsage: number;
  recentTrend: MemoryTrend | null;
  totalAlerts: number;
  recentAlerts: MemoryAlert[];
}

class MemoryMonitoringService {
  private static instance: MemoryMonitoringService;
  private snapshots: MemorySnapshot[] = [];
  private alerts: MemoryAlert[] = [];
  private monitoring = false;
  private monitoringInterval: NodeJS.Timeout | null = null;
  
  // Configuration
  private readonly maxSnapshots = 100;
  private readonly monitoringIntervalMs = 5000; // 5 seconds
  private readonly warningThreshold = 0.7; // 70% memory usage
  private readonly criticalThreshold = 0.85; // 85% memory usage
  private readonly maxAlerts = 50;

  // Device-specific thresholds
  private readonly deviceThresholds = {
    iPhone14Pro: {
      warningMB: 4500,    // iPhone 14 Pro has 6GB RAM
      criticalMB: 5100,
    },
    default: {
      warningMB: 1500,
      criticalMB: 2000,
    }
  };

  public static getInstance(): MemoryMonitoringService {
    if (!MemoryMonitoringService.instance) {
      MemoryMonitoringService.instance = new MemoryMonitoringService();
    }
    return MemoryMonitoringService.instance;
  }

  /**
   * Start memory monitoring
   */
  public startMonitoring(): void {
    if (this.monitoring) {
      console.log('Memory monitoring already active');
      return;
    }

    this.monitoring = true;
    console.log('🧠 Starting memory monitoring');

    // Take initial snapshot
    this.takeSnapshot('monitoring_start');

    // Start periodic monitoring
    this.monitoringInterval = setInterval(() => {
      this.takeSnapshot('periodic_check');
      this.analyzeMemoryTrends();
      this.checkMemoryThresholds();
    }, this.monitoringIntervalMs);
  }

  /**
   * Stop memory monitoring
   */
  public stopMonitoring(): void {
    if (!this.monitoring) return;

    this.monitoring = false;
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }

    console.log('🧠 Memory monitoring stopped');
    this.takeSnapshot('monitoring_stop');
  }

  /**
   * Take a memory snapshot
   */
  public async takeSnapshot(context: string = 'manual'): Promise<MemorySnapshot> {
    try {
      const memoryInfo = await this.getMemoryInfo();
      
      const snapshot: MemorySnapshot = {
        timestamp: Date.now(),
        totalMemory: memoryInfo.totalMemory,
        usedMemory: memoryInfo.usedMemory,
        freeMemory: memoryInfo.freeMemory,
        jsHeapSize: memoryInfo.jsHeapSize,
        nativeHeapSize: memoryInfo.nativeHeapSize,
        context,
      };

      // Add to snapshots array
      this.snapshots.push(snapshot);
      
      // Maintain max snapshots limit
      if (this.snapshots.length > this.maxSnapshots) {
        this.snapshots = this.snapshots.slice(-this.maxSnapshots);
      }

      // Log significant memory events
      if (context !== 'periodic_check') {
        console.log(`📊 Memory snapshot (${context}):`, {
          used: `${(memoryInfo.usedMemory / 1024 / 1024).toFixed(2)}MB`,
          total: `${(memoryInfo.totalMemory / 1024 / 1024).toFixed(2)}MB`,
          percentage: `${((memoryInfo.usedMemory / memoryInfo.totalMemory) * 100).toFixed(1)}%`
        });
      }

      return snapshot;

    } catch (error) {
      console.error('Failed to take memory snapshot:', error);
      
      // Return minimal snapshot on error
      return {
        timestamp: Date.now(),
        totalMemory: 0,
        usedMemory: 0,
        freeMemory: 0,
        context: `${context}_error`,
      };
    }
  }

  private async getMemoryInfo(): Promise<{
    totalMemory: number;
    usedMemory: number;
    freeMemory: number;
    jsHeapSize?: number;
    nativeHeapSize?: number;
  }> {
    const memoryInfo: any = {
      totalMemory: 0,
      usedMemory: 0,
      freeMemory: 0,
    };

    try {
      if (Platform.OS === 'ios') {
        // Use native module for iOS memory info
        const nativeMemory = await this.getIOSMemoryInfo();
        memoryInfo.totalMemory = nativeMemory.totalMemory;
        memoryInfo.usedMemory = nativeMemory.usedMemory;
        memoryInfo.freeMemory = nativeMemory.freeMemory;
        memoryInfo.nativeHeapSize = nativeMemory.nativeHeapSize;
      } else {
        // Use available React Native APIs
        memoryInfo.totalMemory = 2 * 1024 * 1024 * 1024; // 2GB default
        memoryInfo.usedMemory = memoryInfo.totalMemory * 0.5; // Estimate
        memoryInfo.freeMemory = memoryInfo.totalMemory - memoryInfo.usedMemory;
      }

      // Get JS heap size if available
      if (global.performance && (global.performance as any).memory) {
        const jsMemory = (global.performance as any).memory;
        memoryInfo.jsHeapSize = jsMemory.usedJSHeapSize || 0;
      }

    } catch (error) {
      console.error('Error getting memory info:', error);
    }

    return memoryInfo;
  }

  private async getIOSMemoryInfo(): Promise<any> {
    try {
      // This would use the StringProcessingWrapper we created
      const StringProcessingWrapper = NativeModules.StringProcessingWrapper;
      if (StringProcessingWrapper && StringProcessingWrapper.getMemoryUsage) {
        return new Promise((resolve, reject) => {
          StringProcessingWrapper.getMemoryUsage((error: any, result: any) => {
            if (error) {
              reject(error);
            } else {
              resolve({
                totalMemory: 6 * 1024 * 1024 * 1024, // iPhone 14 Pro: 6GB
                usedMemory: result.resident_size || 0,
                freeMemory: (6 * 1024 * 1024 * 1024) - (result.resident_size || 0),
                nativeHeapSize: result.virtual_size || 0,
              });
            }
          });
        });
      }
    } catch (error) {
      console.error('Failed to get iOS memory info:', error);
    }

    // Fallback values for iPhone 14 Pro
    return {
      totalMemory: 6 * 1024 * 1024 * 1024,
      usedMemory: 2 * 1024 * 1024 * 1024,
      freeMemory: 4 * 1024 * 1024 * 1024,
      nativeHeapSize: 0,
    };
  }

  /**
   * Analyze memory trends
   */
  private analyzeMemoryTrends(): MemoryTrend | null {
    if (this.snapshots.length < 3) return null;

    const recentSnapshots = this.snapshots.slice(-5);
    const timespan = recentSnapshots[recentSnapshots.length - 1].timestamp - recentSnapshots[0].timestamp;
    
    if (timespan === 0) return null;

    const usageStart = recentSnapshots[0].usedMemory;
    const usageEnd = recentSnapshots[recentSnapshots.length - 1].usedMemory;
    const usageChange = usageEnd - usageStart;
    
    const rate = (usageChange / 1024 / 1024) / (timespan / 1000); // MB per second
    
    let direction: MemoryTrend['direction'];
    if (Math.abs(rate) < 0.1) {
      direction = 'stable';
    } else if (rate > 0) {
      direction = 'increasing';
    } else {
      direction = 'decreasing';
    }

    const trend: MemoryTrend = {
      direction,
      rate: Math.abs(rate),
      duration: timespan,
    };

    // Log concerning trends
    if (direction === 'increasing' && rate > 1) {
      console.warn('⚠️ Memory usage increasing rapidly:', {
        rate: `${rate.toFixed(2)} MB/s`,
        duration: `${(timespan / 1000).toFixed(1)}s`
      });
    }

    return trend;
  }

  /**
   * Check memory thresholds and generate alerts
   */
  private checkMemoryThresholds(): void {
    const currentSnapshot = this.snapshots[this.snapshots.length - 1];
    if (!currentSnapshot) return;

    const usagePercentage = currentSnapshot.usedMemory / currentSnapshot.totalMemory;
    const usageMB = currentSnapshot.usedMemory / 1024 / 1024;

    // Get device-specific thresholds
    const thresholds = this.getDeviceThresholds();
    
    // Check percentage thresholds
    if (usagePercentage >= this.criticalThreshold) {
      this.createAlert('critical', this.criticalThreshold, usagePercentage,
        `Critical memory usage: ${(usagePercentage * 100).toFixed(1)}%`);
    } else if (usagePercentage >= this.warningThreshold) {
      this.createAlert('warning', this.warningThreshold, usagePercentage,
        `High memory usage: ${(usagePercentage * 100).toFixed(1)}%`);
    }

    // Check absolute MB thresholds
    if (usageMB >= thresholds.criticalMB) {
      this.createAlert('critical', thresholds.criticalMB, usageMB,
        `Critical memory usage: ${usageMB.toFixed(0)}MB`);
    } else if (usageMB >= thresholds.warningMB) {
      this.createAlert('warning', thresholds.warningMB, usageMB,
        `High memory usage: ${usageMB.toFixed(0)}MB`);
    }
  }

  private getDeviceThresholds() {
    // This would be enhanced with actual device detection
    if (Platform.OS === 'ios') {
      return this.deviceThresholds.iPhone14Pro;
    }
    return this.deviceThresholds.default;
  }

  private createAlert(type: MemoryAlert['type'], threshold: number, currentUsage: number, message: string): void {
    // Avoid duplicate alerts within short time
    const recentAlert = this.alerts.find(alert => 
      Date.now() - alert.timestamp < 30000 && // Within 30 seconds
      alert.type === type &&
      Math.abs(alert.currentUsage - currentUsage) < 0.1
    );

    if (recentAlert) return;

    const alert: MemoryAlert = {
      type,
      threshold,
      currentUsage,
      message,
      timestamp: Date.now(),
    };

    this.alerts.push(alert);

    // Maintain max alerts limit
    if (this.alerts.length > this.maxAlerts) {
      this.alerts = this.alerts.slice(-this.maxAlerts);
    }

    // Log the alert
    console.warn(`🚨 Memory Alert (${type}):`, message);

    // Report critical alerts
    if (type === 'critical') {
      ErrorReportingService.getInstance().reportError(
        new Error(`Critical memory usage: ${message}`),
        'MemoryMonitoringService',
        {
          currentUsage,
          threshold,
          memorySnapshot: this.snapshots[this.snapshots.length - 1],
          recentTrend: this.analyzeMemoryTrends(),
        }
      );
    }
  }

  /**
   * Get memory statistics
   */
  public getMemoryStats(): MemoryStats {
    const currentSnapshot = this.snapshots[this.snapshots.length - 1] || null;
    const recentTrend = this.analyzeMemoryTrends();
    
    let peakUsage = 0;
    let totalUsage = 0;
    
    this.snapshots.forEach(snapshot => {
      peakUsage = Math.max(peakUsage, snapshot.usedMemory);
      totalUsage += snapshot.usedMemory;
    });

    const averageUsage = this.snapshots.length > 0 ? totalUsage / this.snapshots.length : 0;
    const recentAlerts = this.alerts.filter(alert => Date.now() - alert.timestamp < 10 * 60 * 1000); // Last 10 minutes

    return {
      currentSnapshot,
      peakUsage,
      averageUsage,
      recentTrend,
      totalAlerts: this.alerts.length,
      recentAlerts,
    };
  }

  /**
   * Monitor memory during a specific operation
   */
  public async monitorOperation<T>(
    operationName: string,
    operation: () => Promise<T>
  ): Promise<{ result: T; memoryDelta: number; duration: number }> {
    
    const startSnapshot = await this.takeSnapshot(`${operationName}_start`);
    const startTime = Date.now();
    
    try {
      const result = await operation();
      const endTime = Date.now();
      const endSnapshot = await this.takeSnapshot(`${operationName}_end`);
      
      const memoryDelta = endSnapshot.usedMemory - startSnapshot.usedMemory;
      const duration = endTime - startTime;
      
      console.log(`📊 Operation monitoring (${operationName}):`, {
        duration: `${duration}ms`,
        memoryDelta: `${(memoryDelta / 1024 / 1024).toFixed(2)}MB`,
      });
      
      return { result, memoryDelta, duration };
      
    } catch (error) {
      await this.takeSnapshot(`${operationName}_error`);
      throw error;
    }
  }

  /**
   * Clear monitoring data
   */
  public clearData(): void {
    this.snapshots = [];
    this.alerts = [];
    console.log('🧠 Memory monitoring data cleared');
  }

  /**
   * Export monitoring data for analysis
   */
  public exportData() {
    return {
      snapshots: this.snapshots,
      alerts: this.alerts,
      stats: this.getMemoryStats(),
      configuration: {
        maxSnapshots: this.maxSnapshots,
        monitoringIntervalMs: this.monitoringIntervalMs,
        warningThreshold: this.warningThreshold,
        criticalThreshold: this.criticalThreshold,
      }
    };
  }
}

export default MemoryMonitoringService;