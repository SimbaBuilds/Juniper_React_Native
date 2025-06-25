export { default as NotionAuthService } from './NotionAuthService';
export { default as SlackAuthService } from './SlackAuthService';
export { default as TrelloAuthService } from './TrelloAuthService';
export { default as PerplexityAuthService } from './PerplexityAuthService';
export { default as TodoistAuthService } from './TodoistAuthService';
export { default as DropboxAuthService } from './DropboxAuthService';
export { default as GoogleSheetsAuthService } from './GoogleSheetsAuthService';
export { default as GoogleDocsAuthService } from './GoogleDocsAuthService';
export { default as GmailAuthService } from './GmailAuthService';
export { default as GoogleCalendarAuthService } from './GoogleCalendarAuthService';
export { default as GoogleMeetAuthService } from './GoogleMeetAuthService';
export { default as ZoomAuthService } from './ZoomAuthService';
export { default as TwilioAuthService } from './TwilioAuthService';
export { default as MicrosoftExcelAuthService } from './MicrosoftExcelAuthService';
export { default as MicrosoftWordAuthService } from './MicrosoftWordAuthService';
export { default as MicrosoftOutlookCalendarAuthService } from './MicrosoftOutlookCalendarAuthService';
export { default as MicrosoftOutlookMailAuthService } from './MicrosoftOutlookMailAuthService';
export { default as MicrosoftTeamsAuthService } from './MicrosoftTeamsAuthService';

// Import services for use in getAuthService
import NotionAuthService from './NotionAuthService';
import SlackAuthService from './SlackAuthService';
import TrelloAuthService from './TrelloAuthService';
import PerplexityAuthService from './PerplexityAuthService';
import DropboxAuthService from './DropboxAuthService';
import GoogleSheetsAuthService from './GoogleSheetsAuthService';
import GoogleDocsAuthService from './GoogleDocsAuthService';
import GmailAuthService from './GmailAuthService';
import GoogleCalendarAuthService from './GoogleCalendarAuthService';
import GoogleMeetAuthService from './GoogleMeetAuthService';
import ZoomAuthService from './ZoomAuthService';
import TwilioAuthService from './TwilioAuthService';
import MicrosoftExcelAuthService from './MicrosoftExcelAuthService';
import MicrosoftWordAuthService from './MicrosoftWordAuthService';
import MicrosoftOutlookCalendarAuthService from './MicrosoftOutlookCalendarAuthService';
import MicrosoftOutlookMailAuthService from './MicrosoftOutlookMailAuthService';
import MicrosoftTeamsAuthService from './MicrosoftTeamsAuthService';

// Export types for external use
export type { NotionAuthService } from './NotionAuthService';
export type { SlackAuthService } from './SlackAuthService';
export type { TrelloAuthService } from './TrelloAuthService';
export type { PerplexityAuthService } from './PerplexityAuthService';
export type { DropboxAuthService } from './DropboxAuthService';
export type { GoogleSheetsAuthService } from './GoogleSheetsAuthService';
export type { GoogleDocsAuthService } from './GoogleDocsAuthService';
export type { GmailAuthService } from './GmailAuthService';
export type { GoogleCalendarAuthService } from './GoogleCalendarAuthService';
export type { GoogleMeetAuthService } from './GoogleMeetAuthService';
export type { ZoomAuthService } from './ZoomAuthService';
export type { TwilioAuthService } from './TwilioAuthService';
export type { MicrosoftExcelAuthService } from './MicrosoftExcelAuthService';
export type { MicrosoftWordAuthService } from './MicrosoftWordAuthService';
export type { MicrosoftOutlookCalendarAuthService } from './MicrosoftOutlookCalendarAuthService';
export type { MicrosoftOutlookMailAuthService } from './MicrosoftOutlookMailAuthService';
export type { MicrosoftTeamsAuthService } from './MicrosoftTeamsAuthService';

// Service factory function for easier access
export const getAuthService = (serviceName: string) => {
  switch (serviceName.toLowerCase()) {
    case 'notion':
      return NotionAuthService.getInstance();
    case 'slack':
      return SlackAuthService.getInstance();
    case 'trello':
      return TrelloAuthService.getInstance();
    case 'perplexity':
      return PerplexityAuthService.getInstance();
    case 'todoist':
      return TodoistAuthService.getInstance();
    case 'dropbox':
      return DropboxAuthService.getInstance();
    case 'google-sheets':
      return GoogleSheetsAuthService.getInstance();
    case 'google-docs':
      return GoogleDocsAuthService.getInstance();
    case 'gmail':
      return GmailAuthService.getInstance();
    case 'google-calendar':
      return GoogleCalendarAuthService.getInstance();
    case 'google-meet':
      return GoogleMeetAuthService.getInstance();
    case 'zoom':
      return ZoomAuthService.getInstance();
    case 'twilio':
      return TwilioAuthService.getInstance();
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