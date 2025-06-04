## email+ calendar integration

1. Using the google calendar integration and service as a guide, implement the following integrations
    1.1 [✅] Outlook Calendar
       [✅]1.1.1 Implement service, hook, and manager 
       [✅]1.1.2 Display 5 upcoming events
    1.2 [✅] Gmail
       [✅]1.2.1 Implement service, hook, and manager 
       [✅]1.2.2 Display 5 most recent unread emails
    1.3 [✅] Outlook Mail
       [✅]1.3.1 Implement service, hook, and manager 
       [✅]1.3.2 Display 5 most recent unread emails
    1.4 [✅] Notion
       [✅]1.4.1 Implement service, hook, and manager, requesting read/write scopes
       [✅]1.4.2 Display 5 upcoming tasks
    1.5 [✅] UX changes
        [✅]1.5.1 The integrations screen should have three expandable sections: Google Services, Microsoft Services, and Notion
        [✅]1.5.2 Google should have a single connect Google button with the same flow but requesting connections read/write for calendar, read/draft/send for email, and drive.readonly

            Be sure to maintain current URL SearchParam format:
            ```
            const requestBody = new URLSearchParams();
            requestBody.append('client_id', GOOGLE_CONFIG.CLIENT_ID!);
            requestBody.append('code', code);
            requestBody.append('grant_type', 'authorization_code');
            requestBody.append('redirect_uri', GOOGLE_CONFIG.REDIRECT_URI);
            
            console.log('Request body:', Object.fromEntries(requestBody.entries()));
            
            const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: requestBody.toString(),
            });
            ```
        [✅]1.5.3 Microsoft should have a single connect Microsoft button with the same flow requesting connections read/write for calendar, read/draft/send for email, and drive read-only access

    


## Implementation Summary

✅ **Completed:**
- **Outlook Calendar**: Full service, hook, and manager with 5 upcoming events display
- **Gmail**: Full service, hook, and manager with 5 unread emails display  
- **Outlook Email**: Full service, hook, and manager with 5 unread emails display
- **Notion**: Full service, hook, and manager with 5 upcoming tasks display
- **UX Changes**: Expandable sections and unified authentication flows implemented

🎉 **All Tasks Complete!**

## Files Created

### Outlook Calendar
- `src/integrations/calendar/OutlookCalendarService.ts`
- `src/integrations/calendar/useOutlookCalendar.ts`
- `src/integrations/calendar/OutlookCalendarManager.tsx`

### Gmail
- `src/integrations/email/GmailService.ts`
- `src/integrations/email/useGmail.ts`
- `src/integrations/email/GmailManager.tsx`
- `src/integrations/email/index.ts`

### Outlook Email
- `src/integrations/email/OutlookEmailService.ts`
- `src/integrations/email/useOutlookEmail.ts`
- `src/integrations/email/OutlookEmailManager.tsx`

### Notion
- `src/integrations/notion/NotionService.ts`
- `src/integrations/notion/useNotion.ts`
- `src/integrations/notion/NotionManager.tsx`
- `src/integrations/notion/index.ts`

### Updated Files
- `src/integrations/calendar/index.ts` - Added Outlook Calendar exports
- `src/integrations/email/index.ts` - Added Outlook Email exports
- `src/integrations/IntegrationsScreen.tsx` - Implemented expandable sections with unified authentication flows
- `src/supabase/tables.ts` - Updated NotionIntegration type
