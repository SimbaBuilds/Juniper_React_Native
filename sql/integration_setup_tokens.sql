-- Integration Setup Tokens Table
-- Stores secure tokens for email-based integration setup

CREATE TABLE integration_setup_tokens (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    integration_id UUID NOT NULL REFERENCES integrations(id) ON DELETE CASCADE,
    service_name TEXT NOT NULL,
    token TEXT NOT NULL UNIQUE,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT (NOW() + INTERVAL '24 hours'),
    is_used BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for performance
CREATE INDEX idx_integration_setup_tokens_token ON integration_setup_tokens(token);
CREATE INDEX idx_integration_setup_tokens_user_id ON integration_setup_tokens(user_id);
CREATE INDEX idx_integration_setup_tokens_expires_at ON integration_setup_tokens(expires_at);

-- RLS Policies
ALTER TABLE integration_setup_tokens ENABLE ROW LEVEL SECURITY;

-- Users can only see their own tokens
CREATE POLICY "Users can view own setup tokens" ON integration_setup_tokens
    FOR SELECT USING (auth.uid() = user_id);

-- Users can only create tokens for their own integrations
CREATE POLICY "Users can create own setup tokens" ON integration_setup_tokens
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only update their own tokens
CREATE POLICY "Users can update own setup tokens" ON integration_setup_tokens
    FOR UPDATE USING (auth.uid() = user_id);

-- Function to clean up expired tokens
CREATE OR REPLACE FUNCTION clean_expired_setup_tokens()
RETURNS void AS $$
BEGIN
    DELETE FROM integration_setup_tokens 
    WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;

-- Schedule cleanup to run daily (you'll need to set this up in your cron job or scheduler)
-- SELECT cron.schedule('cleanup-setup-tokens', '0 2 * * *', 'SELECT clean_expired_setup_tokens();'); 