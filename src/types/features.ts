export interface PortfolioSettings {
  enabled: boolean;
}

export interface NewsSettings {
  enabled: boolean;
  xaiLiveSearchEnabled: boolean;
  twitterSearchEnabled: boolean;
  favoriteSources: string[];
}

export interface CalendarSettings {
  enabled: boolean;
}

export interface TellMeThingsSettings {
  enabled: boolean;
  triggerPhrases: string[];
  includePortfolio: boolean;
  includeNews: boolean;
  includeCalendar: boolean;
}

export interface ProjectUnderstandingSettings {
  enabled: boolean;
  googleKeepEnabled: boolean;
  icloudNotesEnabled: boolean;
  googleDocsEnabled: boolean;
  emailToSelfEnabled: boolean;
}

export interface VoiceSettings {
  deepgramEnabled: boolean;
  baseLanguageModel: 'gpt-4o' | 'gpt-4o-mini' | 'Grok 3' | 'Grok 3.5';
  generalInstructions: string;
}

export interface GroceriesSettings {
  enabled: boolean;
}

export interface AlarmClockSettings {
  enabled: boolean;
}

export interface FeatureSettings {
  portfolio: PortfolioSettings;
  news: NewsSettings;
  calendar: CalendarSettings;
  tellMeThings: TellMeThingsSettings;
  projectUnderstanding: ProjectUnderstandingSettings;
  voice: VoiceSettings;
  groceries: GroceriesSettings;
  alarmClock: AlarmClockSettings;
}

// Default settings
export const defaultFeatureSettings: FeatureSettings = {
  portfolio: {
    enabled: false,
  },
  news: {
    enabled: false,
    xaiLiveSearchEnabled: false,
    twitterSearchEnabled: false,
    favoriteSources: [],
  },
  calendar: {
    enabled: false,
  },
  tellMeThings: {
    enabled: false,
    triggerPhrases: ['Ok Jarvis tell me the things', 'Julie, do the thing', 'Morning'],
    includePortfolio: true,
    includeNews: true,
    includeCalendar: true,
  },
  projectUnderstanding: {
    enabled: false,
    googleKeepEnabled: false,
    icloudNotesEnabled: false,
    googleDocsEnabled: true,
    emailToSelfEnabled: false,
  },
  voice: {
    deepgramEnabled: false,
    baseLanguageModel: 'gpt-4o',
    generalInstructions: '',
  },
  groceries: {
    enabled: false,
  },
  alarmClock: {
    enabled: false,
  },
}; 