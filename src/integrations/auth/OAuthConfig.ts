import Constants from 'expo-constants';
import { Platform } from 'react-native';

export interface OAuthServiceConfig {
  serviceName: string;
  clientId: string;
  clientSecret?: string;
  scopes: string[];
  redirectUri: string;
  authEndpoint: string;
  tokenEndpoint: string;
  revokeEndpoint?: string;
  additionalParameters?: Record<string, string>;
  serviceConfiguration?: {
    authorizationEndpoint: string;
    tokenEndpoint: string;
  };
}

// Helper function to get site URL
const getSiteUrl = (): string => {
  const siteUrl = Constants.expoConfig?.extra?.EXPO_PUBLIC_SITE_URL || process.env.EXPO_PUBLIC_SITE_URL;
  if (!siteUrl) {
    console.warn('EXPO_PUBLIC_SITE_URL not configured, using placeholder');
    return 'https://juniperassistant.com';
  }
  return siteUrl;
};

// Helper function to generate HTTPS redirect URI
const generateRedirectUri = (serviceName: string): string => {
  return `${getSiteUrl()}/oauth/${serviceName}/callback`;
};

// Helper function to get Google Client ID
const getGoogleClientId = (): string => {
  const clientId = Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error('GOOGLE_CLIENT_ID not configured in environment');
  }
  return clientId;
};

// Helper function to get Google Client Secret
const getGoogleClientSecret = (): string => {
  const clientSecret = Constants.expoConfig?.extra?.GOOGLE_CLIENT_SECRET;
  if (!clientSecret) {
    throw new Error('GOOGLE_CLIENT_SECRET not configured in environment');
  }
  return clientSecret;
};

// Helper function to get Microsoft Client ID  
const getMicrosoftClientId = (): string => {
  const clientId = Constants.expoConfig?.extra?.MICROSOFT_CLIENT_ID;
  if (!clientId || clientId.includes('your_microsoft_app_client_id')) {
    console.warn('MICROSOFT_CLIENT_ID not configured, using placeholder');
    return 'placeholder-microsoft-client-id';
  }
  return clientId;
};

// Helper function to get Microsoft Client Secret
const getMicrosoftClientSecret = (): string => {
  const clientSecret = Constants.expoConfig?.extra?.MICROSOFT_CLIENT_SECRET;
  if (!clientSecret || clientSecret.includes('your_microsoft_app_client_secret')) {
    console.warn('MICROSOFT_CLIENT_SECRET not configured, using placeholder');
    return 'placeholder-microsoft-client-secret';
  }
  return clientSecret;
};

// Helper function to get other service client IDs
const getServiceClientId = (service: string): string => {
  const envKey = `${service.toUpperCase()}_CLIENT_ID`;
  const clientId = Constants.expoConfig?.extra?.[envKey] || process.env[`EXPO_PUBLIC_${envKey}`];
  if (!clientId) {
    console.warn(`${envKey} not configured, using placeholder`);
    return 'placeholder-client-id';
  }
  return clientId;
};

// Helper function to get other service client secrets
const getServiceClientSecret = (service: string): string | undefined => {
  const envKey = `${service.toUpperCase()}_CLIENT_SECRET`;
  const clientSecret = Constants.expoConfig?.extra?.[envKey] || process.env[`EXPO_PUBLIC_${envKey}`];
  if (!clientSecret) {
    console.warn(`${envKey} not configured, client secret will be undefined`);
    return undefined;
  }
  return clientSecret;
};

export const OAUTH_CONFIGS: Record<string, OAuthServiceConfig> = {
  'google-calendar': {
    serviceName: 'google-calendar',
    clientId: getGoogleClientId(),
    clientSecret: getGoogleClientSecret(),
    scopes: ['https://www.googleapis.com/auth/calendar.events'],
    redirectUri: generateRedirectUri('google-calendar'),
    authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revokeEndpoint: 'https://oauth2.googleapis.com/revoke',
    additionalParameters: {
      access_type: 'offline',
      prompt: 'consent'
    }
  },

  'gmail': {
    serviceName: 'gmail',
    clientId: getGoogleClientId(),
    clientSecret: getGoogleClientSecret(),
    scopes: ['https://www.googleapis.com/auth/gmail.send', 'https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/userinfo.email'],
    redirectUri: generateRedirectUri('gmail'),
    authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revokeEndpoint: 'https://oauth2.googleapis.com/revoke',
    additionalParameters: {
      access_type: 'offline',
      prompt: 'consent'
    }
  },

  'google-docs': {
    serviceName: 'google-docs',
    clientId: getGoogleClientId(),
    clientSecret: getGoogleClientSecret(),
    scopes: ['https://www.googleapis.com/auth/documents'],
    redirectUri: generateRedirectUri('google-docs'),
    authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revokeEndpoint: 'https://oauth2.googleapis.com/revoke',
    additionalParameters: {
      access_type: 'offline',
      prompt: 'consent'
    }
  },

  'google-sheets': {
    serviceName: 'google-sheets',
    clientId: getGoogleClientId(),
    clientSecret: getGoogleClientSecret(),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    redirectUri: generateRedirectUri('google-sheets'),
    authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revokeEndpoint: 'https://oauth2.googleapis.com/revoke',
    additionalParameters: {
      access_type: 'offline',
      prompt: 'consent'
    }
  },

  'google-meet': {
    serviceName: 'google-meet',
    clientId: getGoogleClientId(),
    clientSecret: getGoogleClientSecret(),
    scopes: [
      'https://www.googleapis.com/auth/meetings',
      'https://www.googleapis.com/auth/calendar.events'
    ],
    redirectUri: generateRedirectUri('google-meet'),
    authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revokeEndpoint: 'https://oauth2.googleapis.com/revoke',
    additionalParameters: {
      access_type: 'offline',
      prompt: 'consent'
    }
  },

  'outlook-mail': {
    serviceName: 'outlook-mail',
    clientId: getMicrosoftClientId(),
    clientSecret: getMicrosoftClientSecret(),
    scopes: [
      'https://graph.microsoft.com/Mail.ReadWrite',
      'https://graph.microsoft.com/Mail.Send',
      'https://graph.microsoft.com/User.Read',
      'offline_access'
    ],
    redirectUri: generateRedirectUri('outlook-mail'),
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'outlook-calendar': {
    serviceName: 'outlook-calendar',
    clientId: getMicrosoftClientId(),
    clientSecret: getMicrosoftClientSecret(),
    scopes: [
      'https://graph.microsoft.com/Calendars.ReadWrite',
      'https://graph.microsoft.com/User.Read',
      'offline_access'
    ],
    redirectUri: generateRedirectUri('outlook-calendar'),
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'microsoft-teams': {
    serviceName: 'microsoft-teams',
    clientId: getMicrosoftClientId(),
    clientSecret: getMicrosoftClientSecret(),
    scopes: [
      'https://graph.microsoft.com/Chat.ReadWrite',
      'https://graph.microsoft.com/Team.ReadBasic.All',
      'https://graph.microsoft.com/Channel.ReadBasic.All',
      'https://graph.microsoft.com/TeamMember.Read.All',
      'https://graph.microsoft.com/User.Read',
      'offline_access'
    ],
    redirectUri: generateRedirectUri('microsoft-teams'),
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'microsoft-excel': {
    serviceName: 'microsoft-excel',
    clientId: getMicrosoftClientId(),
    clientSecret: getMicrosoftClientSecret(),
    scopes: [
      'https://graph.microsoft.com/Files.ReadWrite.All',
      'https://graph.microsoft.com/Sites.ReadWrite.All',
      'offline_access'
    ],
    redirectUri: generateRedirectUri('microsoft-excel'),
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'microsoft-word': {
    serviceName: 'microsoft-word',
    clientId: getMicrosoftClientId(),
    clientSecret: getMicrosoftClientSecret(),
    scopes: [
      'https://graph.microsoft.com/Files.ReadWrite.All',
      'https://graph.microsoft.com/Sites.ReadWrite.All',
      'offline_access'
    ],
    redirectUri: generateRedirectUri('microsoft-word'),
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'slack': {
    serviceName: 'slack',
    clientId: getServiceClientId('SLACK'),
    clientSecret: getServiceClientSecret('SLACK'),
    scopes: [
      'channels:read',
      'chat:write',
      'users:read',
      'team:read',
      "assistant:write", 
      "channels:history", 
      "channels:read", 
      "chat:write", 
      "chat:write.public", 
      "files:read", 
      "files:write", 
      "groups:history", 
      "groups:read", 
      "groups:write", 
      "im:history", 
      "im:read", 
      "im:write", 
      "mpim:history", 
      "mpim:read", 
      "mpim:write", 
      "team:read", 
      "users:read", 
      "users:read.email",
      "reactions:read",
      "reactions:write",
      "channels:join",
      "channels:manage",
      "channels:write.topic",
      "groups:write.topic"
    ],
    redirectUri: generateRedirectUri('slack'),
    authEndpoint: 'https://slack.com/oauth/v2/authorize',
    tokenEndpoint: 'https://slack.com/api/oauth.v2.access'
  },

  'notion': {
    serviceName: 'notion',
    clientId: getServiceClientId('NOTION'),
    clientSecret: getServiceClientSecret('NOTION'),
    scopes: [],
    redirectUri: generateRedirectUri('notion'),
    authEndpoint: 'https://api.notion.com/v1/oauth/authorize',
    tokenEndpoint: 'https://api.notion.com/v1/oauth/token',
    additionalParameters: {
      owner: 'user'
    }
  },

  'todoist': {
    serviceName: 'todoist',
    clientId: getServiceClientId('TODOIST'),
    clientSecret: getServiceClientSecret('TODOIST'),
    scopes: ['data:read_write'],
    redirectUri: generateRedirectUri('todoist'),
    authEndpoint: 'https://todoist.com/oauth/authorize',
    tokenEndpoint: 'https://todoist.com/oauth/access_token'
  },

  'zoom': {
    serviceName: 'zoom',
    clientId: getServiceClientId('ZOOM'),
    clientSecret: getServiceClientSecret('ZOOM'),
    scopes: [
      'meeting:write',
      'meeting:read',
      'webinar:write',
      'webinar:read',
      'user:read'
    ],
    redirectUri: generateRedirectUri('zoom'),
    authEndpoint: 'https://zoom.us/oauth/authorize',
    tokenEndpoint: 'https://zoom.us/oauth/token'
  },

  'google': {
    serviceName: 'google',
    clientId: getGoogleClientId(),
    clientSecret: getGoogleClientSecret(),
    scopes: ['openid', 'email', 'profile'],
    redirectUri: generateRedirectUri('google'),
    authEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
    tokenEndpoint: 'https://oauth2.googleapis.com/token',
    revokeEndpoint: 'https://oauth2.googleapis.com/revoke',
    additionalParameters: {
      access_type: 'offline',
      prompt: 'consent'
    }
  },

  'fitbit': {
    serviceName: 'fitbit',
    clientId: getServiceClientId('FITBIT'),
    clientSecret: getServiceClientSecret('FITBIT'),
    scopes: [
      'activity',
      'heartrate',
      'location',
      'nutrition',
      'profile',
      'settings',
      'sleep',
      'social',
      'weight'
    ],
    redirectUri: generateRedirectUri('fitbit'),
    authEndpoint: 'https://www.fitbit.com/oauth2/authorize',
    tokenEndpoint: 'https://api.fitbit.com/oauth2/token',
    revokeEndpoint: 'https://api.fitbit.com/oauth2/revoke',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'oura': {
    serviceName: 'oura',
    clientId: getServiceClientId('OURA'),
    clientSecret: getServiceClientSecret('OURA'),
    scopes: [
      'email',
      'personal',
      'daily',
      'heartrate',
      'workout',
      'tag',
      'session',
      'spo2',
      'stress',
    ],
    redirectUri: generateRedirectUri('oura'),
    authEndpoint: 'https://cloud.ouraring.com/oauth/authorize',
    tokenEndpoint: 'https://api.ouraring.com/oauth/token',
    additionalParameters: {
      prompt: 'consent'
    }
  }
};

/**
 * Get OAuth configuration for a service
 */
export const getOAuthConfig = (serviceName: string): OAuthServiceConfig => {
  const config = OAUTH_CONFIGS[serviceName];
  if (!config) {
    throw new Error(`OAuth config not found for service: ${serviceName}`);
  }
  return config;
};

/**
 * Get redirect URI for a service (now returns the single HTTPS URI)
 */
export const getRedirectUri = (serviceName: string): string => {
  const config = getOAuthConfig(serviceName);
  return config.redirectUri;
};

/**
 * Build authorization URL for a service
 */
export const buildAuthUrl = (serviceName: string, integrationId: string): string => {
  const config = getOAuthConfig(serviceName);
  
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: config.redirectUri,
    response_type: 'code',
    scope: config.scopes.join(' '),
    state: integrationId,
    ...config.additionalParameters
  });

  return `${config.authEndpoint}?${params}`;
};

export default OAUTH_CONFIGS; 