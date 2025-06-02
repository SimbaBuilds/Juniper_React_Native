-- Google Calendar Integration Table
-- This table stores OAuth tokens and integration status for Google Calendar

CREATE TABLE google_calendar_integrations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    access_token TEXT NOT NULL,
    refresh_token TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    scope TEXT NOT NULL DEFAULT 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/calendar.events',
    is_active BOOLEAN NOT NULL DEFAULT true,
    last_sync TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    
    -- Ensure one active integration per user
    CONSTRAINT unique_active_integration_per_user UNIQUE (user_id, is_active) DEFERRABLE INITIALLY DEFERRED
);

-- Add indexes for performance
CREATE INDEX idx_google_calendar_integrations_user_id ON google_calendar_integrations(user_id);
CREATE INDEX idx_google_calendar_integrations_active ON google_calendar_integrations(user_id, is_active) WHERE is_active = true;
CREATE INDEX idx_google_calendar_integrations_expires_at ON google_calendar_integrations(expires_at);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_google_calendar_integrations_updated_at
    BEFORE UPDATE ON google_calendar_integrations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE google_calendar_integrations ENABLE ROW LEVEL SECURITY;

-- Users can only access their own integrations
CREATE POLICY "Users can view their own Google Calendar integrations"
    ON google_calendar_integrations FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own Google Calendar integrations"
    ON google_calendar_integrations FOR INSERT
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own Google Calendar integrations"
    ON google_calendar_integrations FOR UPDATE
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own Google Calendar integrations"
    ON google_calendar_integrations FOR DELETE
    USING (auth.uid() = user_id);

-- Grant permissions to authenticated users
GRANT ALL ON google_calendar_integrations TO authenticated;
GRANT USAGE ON SEQUENCE google_calendar_integrations_id_seq TO authenticated;

-- Comments for documentation
COMMENT ON TABLE google_calendar_integrations IS 'Stores Google Calendar OAuth integration data for users';
COMMENT ON COLUMN google_calendar_integrations.access_token IS 'OAuth access token for Google Calendar API';
COMMENT ON COLUMN google_calendar_integrations.refresh_token IS 'OAuth refresh token for renewing access';
COMMENT ON COLUMN google_calendar_integrations.expires_at IS 'When the access token expires';
COMMENT ON COLUMN google_calendar_integrations.scope IS 'OAuth scopes granted for this integration';
COMMENT ON COLUMN google_calendar_integrations.is_active IS 'Whether this integration is currently active';
COMMENT ON COLUMN google_calendar_integrations.last_sync IS 'Last time calendar data was synchronized'; 