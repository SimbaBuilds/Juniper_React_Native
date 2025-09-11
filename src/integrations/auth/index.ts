// Base OAuth system
export { BaseOAuthService } from './BaseOAuthService';
export { OAUTH_CONFIGS, getOAuthConfig, getRedirectUri, buildAuthUrl } from './OAuthConfig';
export type { OAuthServiceConfig } from './OAuthConfig';
export type { AuthResult, StoredTokenData } from './BaseOAuthService';

// OAuth Service implementations
export { default as NotionAuthService } from './services/NotionAuthService';
export { default as SlackAuthService } from './services/SlackAuthService';
export { default as TwitterAuthService } from './services/TwitterAuthService';
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
export { default as FitbitAuthService } from './services/FitbitAuthService';
export { default as OuraAuthService } from './services/OuraAuthService';
export { default as EpicMyChartAuthService } from './services/EpicMyChartAuthService';
export { MultiIssuerEpicAuthService } from './services/MultiIssuerEpicAuthService';
export { default as AppleHealthKitAuthService } from './services/AppleHealthKitAuthService';
export { default as GoogleFitAuthService } from './services/GoogleFitAuthService';

// Import services for use in getAuthService
import NotionAuthService from './services/NotionAuthService';
import SlackAuthService from './services/SlackAuthService';
import TwitterAuthService from './services/TwitterAuthService';
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
import FitbitAuthService from './services/FitbitAuthService';
import OuraAuthService from './services/OuraAuthService';
import EpicMyChartAuthService from './services/EpicMyChartAuthService';
import { MultiIssuerEpicAuthService } from './services/MultiIssuerEpicAuthService';
import AppleHealthKitAuthService from './services/AppleHealthKitAuthService';
import GoogleFitAuthService from './services/GoogleFitAuthService';

// Export types for external use
export type { NotionAuthService as NotionAuthServiceType } from './services/NotionAuthService';
export type { SlackAuthService as SlackAuthServiceType } from './services/SlackAuthService';
export type { TwitterAuthService as TwitterAuthServiceType } from './services/TwitterAuthService';
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
export type { FitbitAuthService as FitbitAuthServiceType } from './services/FitbitAuthService';
export type { OuraAuthService as OuraAuthServiceType } from './services/OuraAuthService';
export type { EpicMyChartAuthService as EpicMyChartAuthServiceType } from './services/EpicMyChartAuthService';
export type { AppleHealthKitAuthService as AppleHealthKitAuthServiceType } from './services/AppleHealthKitAuthService';
export type { GoogleFitAuthService as GoogleFitAuthServiceType } from './services/GoogleFitAuthService';

// Service factory function for easier access
export const getAuthService = (serviceName: string) => {
  switch (serviceName.toLowerCase()) {
    case 'notion':
      return NotionAuthService.getInstance();
    case 'slack':
      return SlackAuthService.getInstance();
    case 'twitter':
      return TwitterAuthService.getInstance();
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
    case 'fitbit':
      return FitbitAuthService.getInstance();
    case 'oura':
      return OuraAuthService.getInstance();
    case 'epic-mychart':
    case 'epic_mychart':
    case 'mychart':
      return MultiIssuerEpicAuthService.getInstance();
    case 'apple-health':
    case 'apple_health':
    case 'healthkit':
      return AppleHealthKitAuthService.getInstance();
    case 'google-fit':
    case 'google_fit':
    case 'googlefit':
      return GoogleFitAuthService.getInstance();
    default:
      throw new Error(`OAuth service not implemented for: ${serviceName}`);
  }
}; 