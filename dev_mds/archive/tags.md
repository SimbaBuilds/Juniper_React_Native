
Please create a tag UI and functionality with the following specs:
- There is now a user_tags (list of strings) column in the user_profiles table that contains tags specifc to each user.  
- When the user creates a memory there should be a tags dropdown with three sections: “Services”, “Service Types”, and “My Tags” with a simple "Add Tag" UI
- Services Section: All service names below
- Service Types: All types below (no duplicates) e.g. email, cloud storage, etc…
- Quietly enforce: max 25 characters for a tag, max 50 user specific tags
- When a user adds a tag to a new or existing memory, it must come from this combined list of tags with the ability to add a tag described above
- Quietly enforce: max 4 tags per memory 
- DB migration will be handled elsewhere - you do not need to perform it.

Services and Types:
----
Notion: Project Management, Task Management, Team Collaboration
Slack: Team Communication
Trello: Project Management, Task Management, Team Collaboration
Any.do: Task Management, Calendar Management, Reminders
Zoom: Video Conferencing
WhatsApp: Communication, Messaging
Dropbox: Cloud Storage
Todoist: Task Scheduling, Reminders, Task Management
Perplexity: Search, AI, Research
Google Sheets: Cloud Spreadsheets
Google Docs: Cloud Text Documents
Gmail: Email
Google Calendar: Calendar
Microsoft Excel Online: Cloud Spreadsheets
Microsoft Word Online: Cloud Text Documents
Microsoft Calendar: Calendar
Microsoft Email: Email
Microsoft Teams: Team Communication
Google Meet: Video Conferencing
Twilio: SMS, Text Message
----