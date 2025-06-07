-- Migration: Update integrations table to combine all integration types
-- Date: 2025-01-XX
-- Description: Add all fields from separate integration tables to the main integrations table

-- Add new required fields
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS type TEXT NOT NULL DEFAULT 'user_added';
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS service_name TEXT NOT NULL DEFAULT '';
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS notes TEXT;

-- Add OAuth fields (for calendar and email integrations)
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS access_token TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS refresh_token TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS scope TEXT;

-- Add email specific fields
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS email_address TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS sync_settings JSONB DEFAULT '{}';

-- Add Notion specific fields
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS bot_id TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS workspace_name TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS workspace_icon TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS workspace_id TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS owner_info JSONB;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS duplicated_template_id TEXT;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS permissions TEXT[];

-- Add common sync fields
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS last_sync TIMESTAMPTZ;
ALTER TABLE integrations ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Create trigger to automatically update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Drop trigger if it exists and recreate
DROP TRIGGER IF EXISTS update_integrations_updated_at ON integrations;
CREATE TRIGGER update_integrations_updated_at
    BEFORE UPDATE ON integrations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_integrations_user_id ON integrations(user_id);
CREATE INDEX IF NOT EXISTS idx_integrations_type ON integrations(type);
CREATE INDEX IF NOT EXISTS idx_integrations_service_name ON integrations(service_name);
CREATE INDEX IF NOT EXISTS idx_integrations_is_active ON integrations(is_active);
CREATE INDEX IF NOT EXISTS idx_integrations_integration_type ON integrations(integration_type);
CREATE INDEX IF NOT EXISTS idx_integrations_expires_at ON integrations(expires_at);
CREATE INDEX IF NOT EXISTS idx_integrations_email_address ON integrations(email_address);

-- Migrate data from existing integration tables to the main integrations table
-- Note: This should be done carefully in production with proper data validation

-- Migrate Google Calendar integrations
INSERT INTO integrations (
    user_id, integration_type, type, service_name, configuration, is_active, 
    last_used, created_at, access_token, refresh_token, expires_at, scope, 
    last_sync, updated_at
)
SELECT 
    user_id, 
    'google_calendar' as integration_type,
    'built_in' as type,
    'Google Calendar' as service_name,
    '{}' as configuration,
    is_active,
    last_sync as last_used,
    created_at,
    access_token,
    refresh_token,
    expires_at,
    scope,
    last_sync,
    updated_at
FROM google_calendar_integrations
ON CONFLICT DO NOTHING;

-- Migrate Outlook Calendar integrations
INSERT INTO integrations (
    user_id, integration_type, type, service_name, configuration, is_active, 
    last_used, created_at, access_token, refresh_token, expires_at, scope, 
    last_sync, updated_at
)
SELECT 
    user_id, 
    'outlook_calendar' as integration_type,
    'built_in' as type,
    'Outlook Calendar' as service_name,
    '{}' as configuration,
    is_active,
    last_sync as last_used,
    created_at,
    access_token,
    refresh_token,
    expires_at,
    scope,
    last_sync,
    updated_at
FROM outlook_calendar_integrations
ON CONFLICT DO NOTHING;

-- Migrate Gmail integrations
INSERT INTO integrations (
    user_id, integration_type, type, service_name, configuration, is_active, 
    last_used, created_at, access_token, refresh_token, expires_at, scope, 
    email_address, sync_settings, last_sync, updated_at
)
SELECT 
    user_id, 
    'gmail' as integration_type,
    'built_in' as type,
    'Gmail' as service_name,
    '{}' as configuration,
    is_active,
    last_sync as last_used,
    created_at,
    access_token,
    refresh_token,
    expires_at,
    scope,
    email_address,
    sync_settings,
    last_sync,
    updated_at
FROM gmail_integrations
ON CONFLICT DO NOTHING;

-- Migrate Outlook Email integrations
INSERT INTO integrations (
    user_id, integration_type, type, service_name, configuration, is_active, 
    last_used, created_at, access_token, refresh_token, expires_at, scope, 
    email_address, sync_settings, last_sync, updated_at
)
SELECT 
    user_id, 
    'outlook_email' as integration_type,
    'built_in' as type,
    'Outlook Email' as service_name,
    '{}' as configuration,
    is_active,
    last_sync as last_used,
    created_at,
    access_token,
    refresh_token,
    expires_at,
    scope,
    email_address,
    sync_settings,
    last_sync,
    updated_at
FROM outlook_email_integrations
ON CONFLICT DO NOTHING;

-- Migrate Notion integrations
INSERT INTO integrations (
    user_id, integration_type, type, service_name, configuration, is_active, 
    last_used, created_at, access_token, bot_id, workspace_name, workspace_id, 
    last_sync, updated_at
)
SELECT 
    user_id, 
    'notion' as integration_type,
    'built_in' as type,
    'Notion' as service_name,
    '{}' as configuration,
    is_active,
    last_sync as last_used,
    created_at,
    access_token,
    bot_id,
    workspace_name,
    workspace_id,
    last_sync,
    updated_at
FROM notion_integrations
ON CONFLICT DO NOTHING;

-- After successful migration, you can optionally drop the old tables
-- WARNING: Only do this after verifying the migration was successful!
-- DROP TABLE IF EXISTS google_calendar_integrations;
-- DROP TABLE IF EXISTS outlook_calendar_integrations;
-- DROP TABLE IF EXISTS gmail_integrations;
-- DROP TABLE IF EXISTS outlook_email_integrations;
-- DROP TABLE IF EXISTS notion_integrations; 