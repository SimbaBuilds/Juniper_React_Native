// Base OAuth system
export { BaseOAuthService } from './BaseOAuthService';
export { OAUTH_CONFIGS, getOAuthConfig, getRedirectUri, buildAuthUrl } from './OAuthConfig';
export type { OAuthServiceConfig } from './OAuthConfig';
export type { AuthResult, StoredTokenData } from './BaseOAuthService';

// OAuth Service implementations
export { default as NotionAuthService } from './services/NotionAuthService';
export { default as SlackAuthService } from './services/SlackAuthService';
export { default as PerplexityAuthService } from './services/PerplexityAuthService';
export { default as TodoistAuthService } from './services/TodoistAuthService';
export { default as GoogleSheetsAuthService } from './services/GoogleSheetsAuthService';
export { default as GoogleDocsAuthService } from './services/GoogleDocsAuthService';
export { default as GmailAuthService } from './services/GmailAuthService';
export { default as GoogleCalendarAuthService } from './services/GoogleCalendarAuthService';
export { default as ZoomAuthService } from './services/ZoomAuthService';
export { default as TwilioAuthService } from './services/TwilioAuthService';
export { default as TextbeltAuthService } from './services/TextbeltAuthService';
export { default as MicrosoftExcelAuthService } from './services/MicrosoftExcelAuthService';
export { default as MicrosoftWordAuthService } from './services/MicrosoftWordAuthService';
export { default as MicrosoftOutlookCalendarAuthService } from './services/MicrosoftOutlookCalendarAuthService';
export { default as MicrosoftOutlookMailAuthService } from './services/MicrosoftOutlookMailAuthService';
export { default as MicrosoftTeamsAuthService } from './services/MicrosoftTeamsAuthService';

// Import services for use in getAuthService
import NotionAuthService from './services/NotionAuthService';
import SlackAuthService from './services/SlackAuthService';
import PerplexityAuthService from './services/PerplexityAuthService';
import TodoistAuthService from './services/TodoistAuthService';
import GoogleSheetsAuthService from './services/GoogleSheetsAuthService';
import GoogleDocsAuthService from './services/GoogleDocsAuthService';
import GmailAuthService from './services/GmailAuthService';
import GoogleCalendarAuthService from './services/GoogleCalendarAuthService';
import ZoomAuthService from './services/ZoomAuthService';
import TwilioAuthService from './services/TwilioAuthService';
import TextbeltAuthService from './services/TextbeltAuthService';
import MicrosoftExcelAuthService from './services/MicrosoftExcelAuthService';
import MicrosoftWordAuthService from './services/MicrosoftWordAuthService';
import MicrosoftOutlookCalendarAuthService from './services/MicrosoftOutlookCalendarAuthService';
import MicrosoftOutlookMailAuthService from './services/MicrosoftOutlookMailAuthService';
import MicrosoftTeamsAuthService from './services/MicrosoftTeamsAuthService';

// Export types for external use
export type { NotionAuthService as NotionAuthServiceType } from './services/NotionAuthService';
export type { SlackAuthService as SlackAuthServiceType } from './services/SlackAuthService';
export type { PerplexityAuthService as PerplexityAuthServiceType } from './services/PerplexityAuthService';
export type { GoogleSheetsAuthService as GoogleSheetsAuthServiceType } from './services/GoogleSheetsAuthService';
export type { GoogleDocsAuthService as GoogleDocsAuthServiceType } from './services/GoogleDocsAuthService';
export type { GmailAuthService as GmailAuthServiceType } from './services/GmailAuthService';
export type { GoogleCalendarAuthService as GoogleCalendarAuthServiceType } from './services/GoogleCalendarAuthService';
export type { ZoomAuthService as ZoomAuthServiceType } from './services/ZoomAuthService';
export type { TwilioAuthService as TwilioAuthServiceType } from './services/TwilioAuthService';
export type { TextbeltAuthService as TextbeltAuthServiceType } from './services/TextbeltAuthService';
export type { MicrosoftExcelAuthService as MicrosoftExcelAuthServiceType } from './services/MicrosoftExcelAuthService';
export type { MicrosoftWordAuthService as MicrosoftWordAuthServiceType } from './services/MicrosoftWordAuthService';
export type { MicrosoftOutlookCalendarAuthService as MicrosoftOutlookCalendarAuthServiceType } from './services/MicrosoftOutlookCalendarAuthService';
export type { MicrosoftOutlookMailAuthService as MicrosoftOutlookMailAuthServiceType } from './services/MicrosoftOutlookMailAuthService';
export type { MicrosoftTeamsAuthService as MicrosoftTeamsAuthServiceType } from './services/MicrosoftTeamsAuthService';

// Service factory function for easier access
export const getAuthService = (serviceName: string) => {
  switch (serviceName.toLowerCase()) {
    case 'notion':
      return NotionAuthService.getInstance();
    case 'slack':
      return SlackAuthService.getInstance();
    case 'perplexity':
      return PerplexityAuthService.getInstance();
    case 'todoist':
      return TodoistAuthService.getInstance();
    case 'google-sheets':
      return GoogleSheetsAuthService.getInstance();
    case 'google-docs':
      return GoogleDocsAuthService.getInstance();
    case 'gmail':
      return GmailAuthService.getInstance();
    case 'google-calendar':
      return GoogleCalendarAuthService.getInstance();
    case 'zoom':
      return ZoomAuthService.getInstance();
    case 'twilio':
      return TwilioAuthService.getInstance();
    case 'textbelt':
      return TextbeltAuthService.getInstance();
    case 'microsoft-excel':
    case 'microsoft_excel':
      return MicrosoftExcelAuthService.getInstance();
    case 'microsoft-word':
    case 'microsoft_word':
      return MicrosoftWordAuthService.getInstance();
    case 'microsoft-outlook-calendar':
    case 'microsoft_outlook_calendar':
      return MicrosoftOutlookCalendarAuthService.getInstance();
    case 'microsoft-outlook-mail':
    case 'microsoft_outlook_mail':
      return MicrosoftOutlookMailAuthService.getInstance();
    case 'microsoft-teams':
    case 'microsoft_teams':
      return MicrosoftTeamsAuthService.getInstance();
    default:
      throw new Error(`OAuth service not implemented for: ${serviceName}`);
  }
}; 