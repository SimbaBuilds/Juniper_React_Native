-- Schema Cleanup Migration Script
-- This script consolidates redundant database columns while maintaining functionality

-- Step 1: Consolidate integration_type and type in integrations table  
-- Move integration_type values to service_name field (provider identification)
-- Set type to 'built_in' for all existing integrations (they are all built-in)
UPDATE integrations 
SET service_name = integration_type,
    type = 'built_in'
WHERE integration_type IS NOT NULL AND integration_type != '';

-- Step 2: Consolidate selected_wake_word and wake_word in user_profiles table  
-- Update all existing records to use 'wake_word' field
UPDATE user_profiles 
SET wake_word = COALESCE(selected_wake_word, wake_word, 'JARVIS')
WHERE selected_wake_word IS NOT NULL;

-- Step 3: Drop redundant columns after data migration
-- Drop integration_type from integrations table
ALTER TABLE integrations DROP COLUMN IF EXISTS integration_type;

-- Drop selected_wake_word from user_profiles table
ALTER TABLE user_profiles DROP COLUMN IF EXISTS selected_wake_word;

-- Drop assistant_name from user_profiles table (unused)
ALTER TABLE user_profiles DROP COLUMN IF EXISTS assistant_name;

-- Step 4: Update column comments for clarity
COMMENT ON COLUMN integrations.type IS 'Integration category: built_in or user_created';
COMMENT ON COLUMN integrations.service_name IS 'Provider/service identifier (google, microsoft, notion, etc.)';
COMMENT ON COLUMN user_profiles.wake_word IS 'Wake word for voice activation (consolidated from selected_wake_word)';

-- Step 5: Verify the changes
-- Check integrations table structure
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'integrations' 
ORDER BY ordinal_position;

-- Check user_profiles table structure  
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'user_profiles' 
ORDER BY ordinal_position;

-- Verify data integrity
SELECT COUNT(*) as total_integrations, 
       COUNT(CASE WHEN type IS NOT NULL THEN 1 END) as integrations_with_type,
       COUNT(CASE WHEN service_name IS NOT NULL THEN 1 END) as integrations_with_service_name
FROM integrations;

SELECT COUNT(*) as total_profiles,
       COUNT(CASE WHEN wake_word IS NOT NULL THEN 1 END) as profiles_with_wake_word  
FROM user_profiles; 