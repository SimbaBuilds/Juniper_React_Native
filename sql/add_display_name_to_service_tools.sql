-- Migration: Add display_name column to service_tools table
-- Date: 2024-01-XX
-- Description: Adds an optional display_name column to service_tools table for user-friendly tool names

-- Add display_name column to service_tools table
ALTER TABLE service_tools 
ADD COLUMN display_name TEXT;

-- Add comment to explain the column purpose
COMMENT ON COLUMN service_tools.display_name IS 'User-friendly display name for the service tool, used in UI components';

-- Optional: Update existing records with display_name based on name (if needed)
-- UPDATE service_tools 
-- SET display_name = INITCAP(REPLACE(name, '_', ' ')) 
-- WHERE display_name IS NULL;

-- Verify the change
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'service_tools' 
AND column_name = 'display_name'; 