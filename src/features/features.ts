export interface TickersSettings {
  enabled: boolean;
  tickers: string[];
}

export interface NewsSource {
  id: string;
  name: string;
  affiliation?: string;
  medium?: string;
}

export interface NewsCategory {
  id: string;
  name: string;
  sources: NewsSource[];
}

export interface NewsSettings {
  enabled: boolean;
  xaiLiveSearchEnabled: boolean;
  twitterSearchEnabled: boolean;
  categories: NewsCategory[];
}

export interface CalendarSettings {
  enabled: boolean;
  refreshToken: string;
}

export interface TellMeThingsSettings {
  enabled: boolean;
  triggerPhrases: string[];
  includeTickers: boolean;
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
  tickers: TickersSettings;
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
  tickers: {
    enabled: false,
    tickers: ['SPX'],
  },
  news: {
    enabled: false,
    xaiLiveSearchEnabled: false,
    twitterSearchEnabled: false,
    categories: [],
  },
  calendar: {
    enabled: false,
    refreshToken: ''
  },
  tellMeThings: {
    enabled: false,
    triggerPhrases: ['Ok Jarvis tell me the things', 'Julie, do the thing', 'Morning'],
    includeTickers: true,
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