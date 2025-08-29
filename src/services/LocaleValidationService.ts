import { Platform, NativeModules } from 'react-native';
import ErrorReportingService from '../error/ErrorReportingService';

interface LocaleValidationResult {
  isValid: boolean;
  safeLocale: string;
  warnings: string[];
  riskLevel: 'low' | 'medium' | 'high';
}

interface LocaleConfig {
  locale: string;
  region?: string;
  language: string;
  script?: string;
  fallbacks: string[];
}

class LocaleValidationService {
  private static instance: LocaleValidationService;
  private validatedLocales: Map<string, LocaleValidationResult> = new Map();
  private problematicLocales: Set<string> = new Set();
  
  // Known problematic locale patterns based on crash logs
  private static readonly PROBLEMATIC_PATTERNS = [
    /^[a-z]{2}-[A-Z]{2}$/,  // Basic locale patterns that cause ICU issues
    /.*_.*_.*/, // Complex locale with multiple underscores
    /.*[@#].*/, // Locales with special characters
  ];

  // Safe fallback locales
  private static readonly SAFE_FALLBACKS = [
    'en-US',
    'en-GB', 
    'en',
    'C',
  ];

  // iPhone 14 Pro specific locale issues
  private static readonly IPHONE14PRO_PROBLEMATIC_LOCALES = [
    'zh-Hans-CN', // Simplified Chinese has caused issues
    'ar-SA',      // Arabic RTL issues
    'hi-IN',      // Complex scripts
  ];

  public static getInstance(): LocaleValidationService {
    if (!LocaleValidationService.instance) {
      LocaleValidationService.instance = new LocaleValidationService();
    }
    return LocaleValidationService.instance;
  }

  /**
   * Validate a locale string before use in native operations
   */
  public async validateLocale(locale: string): Promise<LocaleValidationResult> {
    // Check cache first
    const cached = this.validatedLocales.get(locale);
    if (cached) {
      return cached;
    }

    const result = await this.performLocaleValidation(locale);
    
    // Cache the result
    this.validatedLocales.set(locale, result);
    
    // Track problematic locales
    if (result.riskLevel === 'high' || !result.isValid) {
      this.problematicLocales.add(locale);
    }

    return result;
  }

  private async performLocaleValidation(locale: string): Promise<LocaleValidationResult> {
    const warnings: string[] = [];
    let riskLevel: LocaleValidationResult['riskLevel'] = 'low';
    let safeLocale = locale;

    try {
      // Basic format validation
      if (!this.isValidLocaleFormat(locale)) {
        warnings.push(`Invalid locale format: ${locale}`);
        riskLevel = 'high';
        safeLocale = this.getSafeFallback(locale);
      }

      // Check against known problematic patterns
      if (this.isProblematicPattern(locale)) {
        warnings.push(`Locale matches problematic pattern: ${locale}`);
        riskLevel = Math.max(riskLevel === 'low' ? 'medium' : riskLevel, 'medium') as LocaleValidationResult['riskLevel'];
      }

      // Device-specific checks
      if (Platform.OS === 'ios' && this.isIPhone14ProProblematic(locale)) {
        warnings.push(`Locale known to cause issues on iPhone 14 Pro: ${locale}`);
        riskLevel = 'high';
        safeLocale = this.getSafeFallback(locale);
      }

      // Test locale with native module if available
      const nativeValidation = await this.testLocaleNatively(locale);
      if (!nativeValidation.isValid) {
        warnings.push(`Native locale test failed: ${nativeValidation.error}`);
        riskLevel = 'high';
        safeLocale = this.getSafeFallback(locale);
      }

      // ICU library compatibility check
      if (!(await this.isICUCompatible(locale))) {
        warnings.push(`Locale not compatible with ICU library`);
        riskLevel = 'medium';
      }

      const result: LocaleValidationResult = {
        isValid: warnings.length === 0 || riskLevel !== 'high',
        safeLocale,
        warnings,
        riskLevel,
      };

      // Log validation results
      if (warnings.length > 0) {
        console.warn('🌍 Locale Validation Issues:', {
          locale,
          warnings,
          riskLevel,
          safeLocale,
        });

        ErrorReportingService.getInstance().reportError(
          new Error(`Locale validation issues for ${locale}`),
          'LocaleValidationService',
          {
            locale,
            warnings,
            riskLevel,
            safeLocale,
            platform: Platform.OS,
            version: Platform.Version,
          }
        );
      }

      return result;

    } catch (error) {
      console.error('❌ Locale validation error:', error);
      
      return {
        isValid: false,
        safeLocale: LocaleValidationService.SAFE_FALLBACKS[0],
        warnings: [`Validation error: ${error instanceof Error ? error.message : 'Unknown error'}`],
        riskLevel: 'high',
      };
    }
  }

  private isValidLocaleFormat(locale: string): boolean {
    // Basic format validation
    if (!locale || typeof locale !== 'string') return false;
    if (locale.length < 2 || locale.length > 35) return false;
    
    // Should contain only alphanumeric, hyphens, underscores
    const validFormat = /^[a-zA-Z0-9_-]+$/.test(locale);
    return validFormat;
  }

  private isProblematicPattern(locale: string): boolean {
    return LocaleValidationService.PROBLEMATIC_PATTERNS.some(pattern => pattern.test(locale));
  }

  private isIPhone14ProProblematic(locale: string): boolean {
    if (Platform.OS !== 'ios') return false;
    
    return LocaleValidationService.IPHONE14PRO_PROBLEMATIC_LOCALES.includes(locale) ||
           locale.includes('Hans') || // Simplified Chinese variants
           locale.startsWith('ar-') || // Arabic variants
           locale.includes('Deva'); // Devanagari script
  }

  private async testLocaleNatively(locale: string): Promise<{ isValid: boolean; error?: string }> {
    try {
      // Try to use the locale with native modules if available
      if (Platform.OS === 'ios') {
        // This would be enhanced with actual native module calls
        return { isValid: true };
      }
      
      // Basic JavaScript locale test
      try {
        new Intl.Locale(locale);
        return { isValid: true };
      } catch (error) {
        return { 
          isValid: false, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        };
      }
    } catch (error) {
      return { 
        isValid: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }

  private async isICUCompatible(locale: string): Promise<boolean> {
    try {
      // Test common ICU operations that cause crashes
      const testOperations = [
        () => new Intl.DateTimeFormat(locale),
        () => new Intl.NumberFormat(locale),
        () => new Intl.Collator(locale),
      ];

      for (const operation of testOperations) {
        try {
          operation();
        } catch (error) {
          console.warn(`ICU operation failed for locale ${locale}:`, error);
          return false;
        }
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  private getSafeFallback(originalLocale: string): string {
    // Try to extract language part and find safe variant
    const languagePart = originalLocale.split(/[-_]/)[0].toLowerCase();
    
    const languageFallbacks: Record<string, string> = {
      'zh': 'en-US', // Chinese -> English (safer for iPhone 14 Pro)
      'ar': 'en-US', // Arabic -> English
      'hi': 'en-US', // Hindi -> English
      'ja': 'en-US', // Japanese -> English
      'ko': 'en-US', // Korean -> English
    };

    return languageFallbacks[languagePart] || LocaleValidationService.SAFE_FALLBACKS[0];
  }

  /**
   * Get a safe locale configuration for the current device
   */
  public async getSafeLocaleConfig(): Promise<LocaleConfig> {
    let deviceLocale = 'en-US';
    
    try {
      if (Platform.OS === 'ios') {
        // This would be enhanced with actual device locale detection
        deviceLocale = 'en-US'; // Default safe locale
      } else {
        deviceLocale = 'en-US';
      }
    } catch (error) {
      console.warn('Failed to get device locale, using default');
    }

    const validation = await this.validateLocale(deviceLocale);
    
    return {
      locale: validation.safeLocale,
      language: validation.safeLocale.split('-')[0],
      region: validation.safeLocale.split('-')[1],
      fallbacks: LocaleValidationService.SAFE_FALLBACKS,
    };
  }

  /**
   * Safely execute a locale-dependent operation
   */
  public async safeLocaleOperation<T>(
    operation: (locale: string) => T,
    locale: string,
    fallbackResult?: T
  ): Promise<T> {
    const validation = await this.validateLocale(locale);
    
    try {
      return operation(validation.safeLocale);
    } catch (error) {
      console.error('Locale operation failed, trying fallback:', error);
      
      ErrorReportingService.getInstance().reportError(
        error instanceof Error ? error : new Error('Locale operation failed'),
        'LocaleValidationService:safeLocaleOperation',
        {
          originalLocale: locale,
          safeLocale: validation.safeLocale,
          operation: operation.toString(),
        }
      );

      // Try with first safe fallback
      try {
        return operation(LocaleValidationService.SAFE_FALLBACKS[0]);
      } catch (fallbackError) {
        if (fallbackResult !== undefined) {
          return fallbackResult;
        }
        throw fallbackError;
      }
    }
  }

  /**
   * Clear validation cache (useful for testing or after locale changes)
   */
  public clearCache(): void {
    this.validatedLocales.clear();
    this.problematicLocales.clear();
  }

  /**
   * Get statistics about validated locales
   */
  public getValidationStats() {
    return {
      totalValidated: this.validatedLocales.size,
      problematicCount: this.problematicLocales.size,
      problematicLocales: Array.from(this.problematicLocales),
      cacheSize: this.validatedLocales.size,
    };
  }
}

export default LocaleValidationService;