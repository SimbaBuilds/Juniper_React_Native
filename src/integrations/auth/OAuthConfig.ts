import Constants from 'expo-constants';
import { Platform } from 'react-native';

export interface OAuthServiceConfig {
  serviceName: string;
  clientId: string;
  scopes: string[];
  redirectUri: {
    android: string;
    ios: string;
  };
  authEndpoint: string;
  tokenEndpoint: string;
  revokeEndpoint?: string;
  additionalParameters?: Record<string, string>;
  serviceConfiguration?: {
    authorizationEndpoint: string;
    tokenEndpoint: string;
  };
}

// Helper function to get Google Client ID
const getGoogleClientId = (): string => {
  const clientId = Constants.expoConfig?.extra?.GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error('GOOGLE_CLIENT_ID not configured in environment');
  }
  return clientId;
};

// Helper function to get Microsoft Client ID  
const getMicrosoftClientId = (): string => {
  const clientId = Constants.expoConfig?.extra?.MICROSOFT_CLIENT_ID;
  if (!clientId) {
    throw new Error('MICROSOFT_CLIENT_ID not configured in environment');
  }
  return clientId;
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

export const OAUTH_CONFIGS: Record<string, OAuthServiceConfig> = {
  'google-calendar': {
    serviceName: 'google-calendar',
    clientId: getGoogleClientId(),
    scopes: ['https://www.googleapis.com/auth/calendar'],
    redirectUri: {
      android: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/calendar`,
      ios: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/calendar`
    },
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
    scopes: ['https://www.googleapis.com/auth/gmail.modify'],
    redirectUri: {
      android: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/gmail`,
      ios: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/gmail`
    },
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
    scopes: ['https://www.googleapis.com/auth/documents'],
    redirectUri: {
      android: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/docs`,
      ios: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/docs`
    },
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
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    redirectUri: {
      android: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/sheets`,
      ios: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/sheets`
    },
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
    scopes: [
      'https://www.googleapis.com/auth/meetings',
      'https://www.googleapis.com/auth/calendar.events'
    ],
    redirectUri: {
      android: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/meet`,
      ios: `com.googleusercontent.apps.${getGoogleClientId()}:/oauth2redirect/meet`
    },
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
    scopes: [
      'https://graph.microsoft.com/Mail.ReadWrite',
      'https://graph.microsoft.com/Mail.Send',
      'https://graph.microsoft.com/User.Read',
      'offline_access'
    ],
    redirectUri: {
      android: `msauth.com.anonymous.MobileJarvisNative://com.microsoft.identity.client.sample.local`,
      ios: `msauth.com.anonymous.MobileJarvisNative://auth`
    },
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'outlook-calendar': {
    serviceName: 'outlook-calendar',
    clientId: getMicrosoftClientId(),
    scopes: [
      'https://graph.microsoft.com/Calendars.ReadWrite',
      'https://graph.microsoft.com/User.Read',
      'offline_access'
    ],
    redirectUri: {
      android: `msauth.com.anonymous.MobileJarvisNative://com.microsoft.identity.client.sample.local`,
      ios: `msauth.com.anonymous.MobileJarvisNative://auth`
    },
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'microsoft-teams': {
    serviceName: 'microsoft-teams',
    clientId: getMicrosoftClientId(),
    scopes: [
      'https://graph.microsoft.com/Chat.ReadWrite',
      'https://graph.microsoft.com/Team.ReadBasic.All',
      'https://graph.microsoft.com/Channel.ReadBasic.All',
      'https://graph.microsoft.com/TeamMember.Read.All',
      'https://graph.microsoft.com/User.Read',
      'offline_access'
    ],
    redirectUri: {
      android: `msauth.com.anonymous.MobileJarvisNative://com.microsoft.identity.client.sample.local`,
      ios: `msauth.com.anonymous.MobileJarvisNative://auth`
    },
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'microsoft-excel': {
    serviceName: 'microsoft-excel',
    clientId: getMicrosoftClientId(),
    scopes: [
      'https://graph.microsoft.com/Files.ReadWrite',
      'https://graph.microsoft.com/Sites.ReadWrite.All',
      'offline_access'
    ],
    redirectUri: {
      android: `msauth.com.anonymous.MobileJarvisNative://com.microsoft.identity.client.sample.local`,
      ios: `msauth.com.anonymous.MobileJarvisNative://auth`
    },
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'microsoft-word': {
    serviceName: 'microsoft-word',
    clientId: getMicrosoftClientId(),
    scopes: [
      'https://graph.microsoft.com/Files.ReadWrite',
      'https://graph.microsoft.com/Sites.ReadWrite.All',
      'offline_access'
    ],
    redirectUri: {
      android: `msauth.com.anonymous.MobileJarvisNative://com.microsoft.identity.client.sample.local`,
      ios: `msauth.com.anonymous.MobileJarvisNative://auth`
    },
    authEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    additionalParameters: {
      prompt: 'consent'
    }
  },

  'slack': {
    serviceName: 'slack',
    clientId: getServiceClientId('SLACK'),
    scopes: [
      'channels:read',
      'chat:write',
      'users:read',
      'team:read'
    ],
    redirectUri: {
      android: 'slack://oauth/callback',
      ios: 'slack://oauth/callback'
    },
    authEndpoint: 'https://slack.com/oauth/v2/authorize',
    tokenEndpoint: 'https://slack.com/api/oauth.v2.access'
  },

  'notion': {
    serviceName: 'notion',
    clientId: getServiceClientId('NOTION'),
    scopes: [],
    redirectUri: {
      android: 'notion://oauth/callback',
      ios: 'notion://oauth/callback'
    },
    authEndpoint: 'https://api.notion.com/v1/oauth/authorize',
    tokenEndpoint: 'https://api.notion.com/v1/oauth/token',
    additionalParameters: {
      owner: 'user'
    }
  },

  'dropbox': {
    serviceName: 'dropbox',
    clientId: getServiceClientId('DROPBOX'),
    scopes: [
      'account_info.read',
      'files.metadata.read',
      'files.metadata.write',
      'files.content.read',
      'files.content.write'
    ],
    redirectUri: {
      android: `db-${getServiceClientId('DROPBOX')}://oauth/callback`,
      ios: `db-${getServiceClientId('DROPBOX')}://oauth/callback`
    },
    authEndpoint: 'https://www.dropbox.com/oauth2/authorize',
    tokenEndpoint: 'https://www.dropbox.com/oauth2/token',
    additionalParameters: {
      token_access_type: 'offline'
    }
  },

  'todoist': {
    serviceName: 'todoist',
    clientId: getServiceClientId('TODOIST'),
    scopes: ['data:read_write'],
    redirectUri: {
      android: 'todoist://oauth/callback',
      ios: 'todoist://oauth/callback'
    },
    authEndpoint: 'https://todoist.com/oauth/authorize',
    tokenEndpoint: 'https://todoist.com/oauth/access_token'
  },

  'trello': {
    serviceName: 'trello',
    clientId: getServiceClientId('TRELLO'),
    scopes: ['read', 'write'],
    redirectUri: {
      android: 'trello://oauth/callback',
      ios: 'trello://oauth/callback'
    },
    authEndpoint: 'https://trello.com/1/authorize',
    tokenEndpoint: 'https://trello.com/1/OAuthGetAccessToken'
  },

  'zoom': {
    serviceName: 'zoom',
    clientId: getServiceClientId('ZOOM'),
    scopes: [
      'meeting:write',
      'meeting:read',
      'webinar:write',
      'webinar:read',
      'user:read'
    ],
    redirectUri: {
      android: 'zoom://oauth/callback',
      ios: 'zoom://oauth/callback'
    },
    authEndpoint: 'https://zoom.us/oauth/authorize',
    tokenEndpoint: 'https://zoom.us/oauth/token'
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
 * Get platform-specific redirect URI for a service
 */
export const getRedirectUri = (serviceName: string): string => {
  const config = getOAuthConfig(serviceName);
  return Platform.OS === 'ios' ? config.redirectUri.ios : config.redirectUri.android;
};

/**
 * Build authorization URL for a service
 */
export const buildAuthUrl = (serviceName: string, integrationId: string): string => {
  const config = getOAuthConfig(serviceName);
  
  const params = new URLSearchParams({
    client_id: config.clientId,
    redirect_uri: getRedirectUri(serviceName),
    response_type: 'code',
    scope: config.scopes.join(' '),
    state: integrationId,
    ...config.additionalParameters
  });

  return `${config.authEndpoint}?${params}`;
};

export default OAUTH_CONFIGS; 