-- Migration: Add new integration tables
-- Date: 2024-01-XX
-- Description: Add Outlook Calendar, Gmail, Outlook Email, and Notion integration tables

-- Create Outlook Calendar Integration table
CREATE TABLE IF NOT EXISTS outlook_calendar_integrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    access_token TEXT NOT NULL,
    refresh_token TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    scope TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_sync TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create Gmail Integration table
CREATE TABLE IF NOT EXISTS gmail_integrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    access_token TEXT NOT NULL,
    refresh_token TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    scope TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    email_address TEXT NOT NULL,
    last_sync TIMESTAMPTZ,
    sync_settings JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create Outlook Email Integration table
CREATE TABLE IF NOT EXISTS outlook_email_integrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    access_token TEXT NOT NULL,
    refresh_token TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    scope TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    email_address TEXT NOT NULL,
    last_sync TIMESTAMPTZ,
    sync_settings JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create Notion Integration table
CREATE TABLE IF NOT EXISTS notion_integrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    access_token TEXT NOT NULL,
    bot_id TEXT NOT NULL,
    workspace_name TEXT NOT NULL,
    workspace_id TEXT NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    permissions TEXT[] NOT NULL DEFAULT '{}',
    last_sync TIMESTAMPTZ,
    sync_settings JSONB NOT NULL DEFAULT '{}',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_outlook_calendar_integrations_user_id ON outlook_calendar_integrations(user_id);
CREATE INDEX IF NOT EXISTS idx_outlook_calendar_integrations_is_active ON outlook_calendar_integrations(is_active);
CREATE INDEX IF NOT EXISTS idx_outlook_calendar_integrations_expires_at ON outlook_calendar_integrations(expires_at);

CREATE INDEX IF NOT EXISTS idx_gmail_integrations_user_id ON gmail_integrations(user_id);
CREATE INDEX IF NOT EXISTS idx_gmail_integrations_is_active ON gmail_integrations(is_active);
CREATE INDEX IF NOT EXISTS idx_gmail_integrations_email_address ON gmail_integrations(email_address);
CREATE INDEX IF NOT EXISTS idx_gmail_integrations_expires_at ON gmail_integrations(expires_at);

CREATE INDEX IF NOT EXISTS idx_outlook_email_integrations_user_id ON outlook_email_integrations(user_id);
CREATE INDEX IF NOT EXISTS idx_outlook_email_integrations_is_active ON outlook_email_integrations(is_active);
CREATE INDEX IF NOT EXISTS idx_outlook_email_integrations_email_address ON outlook_email_integrations(email_address);
CREATE INDEX IF NOT EXISTS idx_outlook_email_integrations_expires_at ON outlook_email_integrations(expires_at);

CREATE INDEX IF NOT EXISTS idx_notion_integrations_user_id ON notion_integrations(user_id);
CREATE INDEX IF NOT EXISTS idx_notion_integrations_is_active ON notion_integrations(is_active);
CREATE INDEX IF NOT EXISTS idx_notion_integrations_workspace_id ON notion_integrations(workspace_id);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_outlook_calendar_integrations_updated_at
    BEFORE UPDATE ON outlook_calendar_integrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_gmail_integrations_updated_at
    BEFORE UPDATE ON gmail_integrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_outlook_email_integrations_updated_at
    BEFORE UPDATE ON outlook_email_integrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_notion_integrations_updated_at
    BEFORE UPDATE ON notion_integrations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE outlook_calendar_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE gmail_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE outlook_email_integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE notion_integrations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies - users can only access their own integrations

-- Outlook Calendar Integration policies
CREATE POLICY "Users can view their own outlook calendar integrations"
    ON outlook_calendar_integrations FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own outlook calendar integrations"
    ON outlook_calendar_integrations FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own outlook calendar integrations"
    ON outlook_calendar_integrations FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own outlook calendar integrations"
    ON outlook_calendar_integrations FOR DELETE
    USING (auth.uid() = user_id);

-- Gmail Integration policies
CREATE POLICY "Users can view their own gmail integrations"
    ON gmail_integrations FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own gmail integrations"
    ON gmail_integrations FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own gmail integrations"
    ON gmail_integrations FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own gmail integrations"
    ON gmail_integrations FOR DELETE
    USING (auth.uid() = user_id);

-- Outlook Email Integration policies
CREATE POLICY "Users can view their own outlook email integrations"
    ON outlook_email_integrations FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own outlook email integrations"
    ON outlook_email_integrations FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own outlook email integrations"
    ON outlook_email_integrations FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own outlook email integrations"
    ON outlook_email_integrations FOR DELETE
    USING (auth.uid() = user_id);

-- Notion Integration policies
CREATE POLICY "Users can view their own notion integrations"
    ON notion_integrations FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own notion integrations"
    ON notion_integrations FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own notion integrations"
    ON notion_integrations FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own notion integrations"
    ON notion_integrations FOR DELETE
    USING (auth.uid() = user_id);

-- Add unique constraints to prevent multiple active integrations of the same type per user
ALTER TABLE outlook_calendar_integrations 
ADD CONSTRAINT unique_active_outlook_calendar_per_user 
UNIQUE (user_id) DEFERRABLE INITIALLY DEFERRED;

ALTER TABLE gmail_integrations 
ADD CONSTRAINT unique_active_gmail_per_user 
UNIQUE (user_id, email_address) DEFERRABLE INITIALLY DEFERRED;

ALTER TABLE outlook_email_integrations 
ADD CONSTRAINT unique_active_outlook_email_per_user 
UNIQUE (user_id, email_address) DEFERRABLE INITIALLY DEFERRED;

ALTER TABLE notion_integrations 
ADD CONSTRAINT unique_active_notion_per_user 
UNIQUE (user_id, workspace_id) DEFERRABLE INITIALLY DEFERRED;

-- Grant necessary permissions to authenticated users
GRANT ALL ON outlook_calendar_integrations TO authenticated;
GRANT ALL ON gmail_integrations TO authenticated;
GRANT ALL ON outlook_email_integrations TO authenticated;
GRANT ALL ON notion_integrations TO authenticated;

-- Grant usage on sequences
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated; 