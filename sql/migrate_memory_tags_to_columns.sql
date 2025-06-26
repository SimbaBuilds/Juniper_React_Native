-- Migration: Replace memory.tags array with individual tag_id columns
-- Date: Current
-- Purpose: Convert memory tags from array to foreign key columns like service table

BEGIN;

-- Add the new tag columns to the memory table
ALTER TABLE memory 
ADD COLUMN tag_1_id UUID REFERENCES tag(id),
ADD COLUMN tag_2_id UUID REFERENCES tag(id),
ADD COLUMN tag_3_id UUID REFERENCES tag(id),
ADD COLUMN tag_4_id UUID REFERENCES tag(id),
ADD COLUMN tag_5_id UUID REFERENCES tag(id);

-- Optional: Create indexes for better query performance
CREATE INDEX idx_memory_tag_1_id ON memory(tag_1_id);
CREATE INDEX idx_memory_tag_2_id ON memory(tag_2_id);
CREATE INDEX idx_memory_tag_3_id ON memory(tag_3_id);
CREATE INDEX idx_memory_tag_4_id ON memory(tag_4_id);
CREATE INDEX idx_memory_tag_5_id ON memory(tag_5_id);

-- Data migration would go here if needed
-- Note: This assumes you want to handle data migration separately
-- If you have existing data in the tags array, you would need additional
-- logic to migrate that data to the new columns

-- Remove the old tags column
ALTER TABLE memory DROP COLUMN tags;

COMMIT; 