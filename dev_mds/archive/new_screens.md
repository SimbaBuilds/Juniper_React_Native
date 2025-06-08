⸻
0. [x] Come up with a UI and navigation plan to implement the below. We need to keep the settings screen but add and integrations screen, automations screen, and memories screen.

1. Integrations Screen

1.1 UI and migration
    [x] 1.1.1 Display default integrations: email, calendar and Notion
    [x] 1.1.2 Move current Google Calendar integration to this screen
    [x] 1.1.3 Display a "Connect Outlook Calendar" button but do not implement logic yet
    [x] 1.1.4 Also display Gmail and Outlook email buttons and do not implement logic yet

1.2 Schema
    [x] 1.2.1 For each integration, display the following fields
        [x] 1.2.1.1 Integration name
        [x] 1.2.1.2 Credentials (optional)
        [x] 1.2.1.3 Automations (optional)

1.3 Instructions
    [x] Display the instructions below:
    To add an integration, simply ask your assistant:
    "Connect with my Tesla so I can tell it when to pick up my daughter."
    Your assistant will make the connection or scope out integration time and cost.

⸻

2. Memories Screen

2.1
    [x] 2.1.1 Create a memories screen with a list of memories organized by date -- put in some placeholder memories for now

2.2 Displayed Instructions
    [x] 2.2.1 Or add a memory by telling your assistant:
    "Remember my favorite news sources for future reference."

⸻

3. Automations Screen

3.1 Schema
    [x] 3.1.1 Automation name
    [x] 3.1.2 Integrations (optional)

3.2 Instructions
    [x] 3.2.1 To add an automation, simply ask your assistant e.g.
    "Whenever a new Starship mission date is announced, add it to my calendar."
    Your assistant will attempt to set up the automation or scope out implementation time and cost.

⸻

4. Settings

4.1 Updates
    [x] 4.1.1 Remove all features -- only voice and AI settings will be in this screen. You do not need to migrate tickers, news, and tell me the things as these can be added later by the developer or AI+user

4.2 Wake Word Explanation
    [x] 4.2.1 Implement wake word selection UI
    [x] 4.2.2 Display instructions:
    "The wake word is the word you will use to activate and speak to your assistant.
    You do not have to have the app open to activate your assistant."

