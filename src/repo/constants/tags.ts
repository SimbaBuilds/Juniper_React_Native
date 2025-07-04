export const SERVICES = [
  'Notion',
  'Slack', 
  'Trello',
  'Zoom',
  'WhatsApp',
  'Dropbox',
  'Todoist',
  'Perplexity',
  'Google Sheets',
  'Google Docs',
  'Gmail',
  'Google Calendar',
  'Microsoft Excel Online',
  'Microsoft Word Online',
  'Microsoft Calendar',
  'Microsoft Email',
  'Microsoft Teams',
  'Twilio'
] as const;

export const SERVICE_TYPES = [
  'Project Management',
  'Note-Taking', 
  'Team Collaboration',
  'Team Communication',
  'Calendar Management',
  'Reminders',
  'Video Conferencing',
  'Communication',
  'Messaging',
  'Cloud Storage',
  'Task Scheduling',
  'Search',
  'AI',
  'Research',
  'Cloud Spreadsheets',
  'Cloud Text Documents',
  'Email',
  'Calendar',
  'SMS',
  'Text Message'
] as const;

export const MAX_TAG_LENGTH = 25;
export const MAX_USER_TAGS = 50;
export const MAX_MEMORY_TAGS = 4;

export type ServiceTag = typeof SERVICES[number];
export type ServiceTypeTag = typeof SERVICE_TYPES[number]; 