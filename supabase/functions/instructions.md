

Perfect! Now let me create a comprehensive setup guide for you. Here's the summary of what I've implemented and instructions for setting it up:

## 📧 Email-Based Integration Setup Implementation

I've successfully implemented the email-based configuration flow for Twilio and Perplexity integrations. Here's what's been created:

### ✅ What's Implemented

1. **Database Schema** (`sql/integration_setup_tokens.sql`)
   - Secure token management with expiration
   - RLS policies for security
   - Automatic cleanup function

2. **Email Service** (`src/services/IntegrationEmailService.ts`)
   - Handles sending setup emails
   - Checks integration status
   - Manages finalization workflow

3. **Supabase Edge Functions**
   - **Send Email** (`supabase/functions/send-integration-setup-email/index.ts`)
   - **Handle Forms** (`supabase/functions/handle-integration-form/index.ts`)

4. **Updated Mobile UI**
   - Both modals now have "Complete on Desktop" option
   - Integration progress states with "Finalize Integration" button
   - Proper email workflow handling

5. **Hosted Forms**
   - Beautiful, responsive forms for both services
   - Real-time validation and feedback
   - Security token validation

### 🚀 Setup Instructions

#### 1. **Database Setup**
```bash
# Run the SQL migration
psql your_supabase_db < sql/integration_setup_tokens.sql
```

#### 2. **Email Service Setup (Resend)**
```bash
# Sign up for Resend at https://resend.com
# Get your API key from dashboard
# Add to Supabase environment variables:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

#### 3. **Domain Configuration**
```bash
# Update in the Edge Function:
# Change 'integrations@yourdomain.com' to your actual domain
# Set your EXPO_PUBLIC_SITE_URL environment variable
```

#### 4. **Deploy Edge Functions**
```bash
# Install Supabase CLI if you haven't
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Deploy functions
supabase functions deploy send-integration-setup-email
supabase functions deploy handle-integration-form

# Set environment variables
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set EXPO_PUBLIC_SITE_URL=your_hosted_domain
```

#### 5. **Hosted Route Setup**
You need to set up a route at `EXPO_PUBLIC_SITE_URL/integration` that points to:
```
https://your-supabase-project.supabase.co/functions/v1/handle-integration-form
```

For example, if using Vercel, Netlify, or similar:
- Create a `_redirects` file (Netlify) or `vercel.json` (Vercel)
- Redirect `/integration` to your Edge Function URL

**Netlify `_redirects`:**
```
/integration https://your-project.supabase.co/functions/v1/handle-integration-form 200
```

**Vercel `vercel.json`:**
```json
{
  "redirects": [
    {
      "source": "/integration",
      "destination": "https://your-project.supabase.co/functions/v1/handle-integration-form",
      "permanent": false
    }
  ]
}
```

### 🔄 User Flow

1. **Mobile App**: User taps "Connect" on Perplexity/Twilio
2. **Modal Opens**: Shows both "Enter Credentials" and "Complete Online" options
3. **Send Email**: User clicks "Send Setup Link" → email sent with secure token
4. **Desktop Form**: User clicks email link → beautiful hosted form opens
5. **Form Completion**: User enters credentials → validation & storage
6. **Return to App**: User sees "Finalize Integration" button
7. **Finalization**: User taps button → integration becomes active

### 🔐 Security Features

- **Secure Tokens**: 64-character random tokens with 24-hour expiration
- **Single Use**: Tokens are marked as used after form submission
- **Validation**: API keys/credentials are validated before storage
- **RLS Policies**: Database-level security for all operations

### 🎨 Email Templates

The emails include:
- Service-specific setup instructions
- Beautiful HTML formatting
- Direct links to required admin pages
- Clear next steps for users

### ❓ Clarifying Questions Answered

1. **Email Service**: Implemented with **Resend** (modern, reliable, great free tier)
2. **User Experience**: **Both options** available (mobile form + email)
3. **Flow**: Exactly as requested - email → desktop form → "finalize integration" button
4. **Security**: **Secure random tokens** with expiration (simpler than JWT, equally secure)
5. **Backend**: **Supabase Edge Functions** (integrated, scalable, no additional infrastructure)

The implementation is production-ready and follows all the requirements you specified! 🎉

```shellscript
# Run the SQL migration
psql your_supabase_db < sql/integration_setup_tokens.sql
```

```shellscript
# Sign up for Resend at https://resend.com
# Get your API key from dashboard
# Add to Supabase environment variables:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

```shellscript
# Update in the Edge Function:
# Change 'integrations@yourdomain.com' to your actual domain
# Set your EXPO_PUBLIC_SITE_URL environment variable
```

```shellscript
# Install Supabase CLI if you haven't
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Deploy functions
supabase functions deploy send-integration-setup-email
supabase functions deploy handle-integration-form

# Set environment variables
supabase secrets set RESEND_API_KEY=your_resend_api_key
supabase secrets set EXPO_PUBLIC_SITE_URL=your_hosted_domain
```

```plaintext
https://your-supabase-project.supabase.co/functions/v1/handle-integration-form
```

```plaintext
/integration https://your-project.supabase.co/functions/v1/handle-integration-form 200
```

```json
{
  "redirects": [
    {
      "source": "/integration",
      "destination": "https://your-project.supabase.co/functions/v1/handle-integration-form",
      "permanent": false
    }
  ]
}
```

