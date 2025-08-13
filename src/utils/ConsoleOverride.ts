interface ConsoleLevel {
  NONE: 0;
  ERROR: 1;
  WARN: 2;
  INFO: 3;
  LOG: 4;
  DEBUG: 5;
}

class ConsoleOverride {
  private static instance: ConsoleOverride;
  private isProduction: boolean;
  private logLevel: number;
  private originalConsole: Console;

  private readonly levels: ConsoleLevel = {
    NONE: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    LOG: 4,
    DEBUG: 5,
  };

  private constructor() {
    this.isProduction = !__DEV__;
    this.logLevel = this.isProduction ? this.levels.ERROR : this.levels.DEBUG;
    this.originalConsole = { ...console };
  }

  public static getInstance(): ConsoleOverride {
    if (!ConsoleOverride.instance) {
      ConsoleOverride.instance = new ConsoleOverride();
    }
    return ConsoleOverride.instance;
  }

  public initialize(): void {
    if (!this.isProduction) {
      return;
    }

    console.log = this.createLogFunction(this.levels.LOG);
    console.info = this.createLogFunction(this.levels.INFO);
    console.warn = this.createLogFunction(this.levels.WARN);
    console.error = this.createLogFunction(this.levels.ERROR);
    console.debug = this.createLogFunction(this.levels.DEBUG);

    console.log('✅ Console override initialized for production');
  }

  private createLogFunction(level: number) {
    return (...args: any[]) => {
      if (level <= this.logLevel) {
        switch (level) {
          case this.levels.ERROR:
            this.originalConsole.error(...args);
            break;
          case this.levels.WARN:
            this.originalConsole.warn(...args);
            break;
          case this.levels.INFO:
            if (!this.isProduction) {
              this.originalConsole.info(...args);
            }
            break;
          case this.levels.LOG:
            if (!this.isProduction) {
              this.originalConsole.log(...args);
            }
            break;
          case this.levels.DEBUG:
            if (!this.isProduction) {
              this.originalConsole.debug(...args);
            }
            break;
        }
      }
    };
  }

  public setLogLevel(level: keyof ConsoleLevel): void {
    this.logLevel = this.levels[level];
  }

  public restore(): void {
    Object.assign(console, this.originalConsole);
  }
}

export default ConsoleOverride;