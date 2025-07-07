# Auto-Embedding Implementation Guide for Supabase

## Overview
This guide provides step-by-step instructions for implementing automatic embedding generation for the `resources` table using Supabase Edge Functions, database triggers, and vector storage.

## Prerequisites
- Supabase Pro plan (required for pgvector extension)
- Database admin access
- OpenAI API key or Hugging Face API access
- Supabase CLI installed locally

## Phase 1: Database Setup & Configuration

### 1.1 Enable pgvector Extension
Execute in your Supabase SQL editor:

```sql
-- Enable the pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;
```

### 1.2 Verify Current Resources Table Schema
The `resources` table should already have an `embedding` column of type `vector` or `float[]`. If not, add it:

```sql
-- Add embedding column if it doesn't exist
ALTER TABLE resources 
ADD COLUMN IF NOT EXISTS embedding vector(384); -- For all-MiniLM-L6-v2 model

-- Create index for vector similarity search
CREATE INDEX IF NOT EXISTS idx_resources_embedding 
ON resources USING ivfflat (embedding vector_cosine_ops)
WITH (lists = 100);
```

### 1.3 Create Embedding Queue Table
Create a table to manage embedding generation jobs:

```sql
-- Create embedding queue table
CREATE TABLE IF NOT EXISTS embedding_queue (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    resource_id uuid REFERENCES resources(id) ON DELETE CASCADE,
    content text NOT NULL,
    status text DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
    retry_count integer DEFAULT 0,
    error_message text,
    created_at timestamp with time zone DEFAULT NOW(),
    processed_at timestamp with time zone
);

-- Create index for efficient querying
CREATE INDEX idx_embedding_queue_status ON embedding_queue(status);
CREATE INDEX idx_embedding_queue_created_at ON embedding_queue(created_at);
```

## Phase 2: Edge Function Implementation

### 2.1 Create Edge Function Directory Structure
```bash
# In your project root
mkdir -p supabase/functions/generate-embeddings
```

### 2.2 Create Edge Function Code
Create `supabase/functions/generate-embeddings/index.ts`:

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface EmbeddingRequest {
  resource_id: string;
  content: string;
}

interface OpenAIEmbeddingResponse {
  data: Array<{
    embedding: number[];
  }>;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { resource_id, content }: EmbeddingRequest = await req.json()

    if (!resource_id || !content) {
      throw new Error('Missing resource_id or content')
    }

    // Generate embedding using OpenAI
    const openaiResponse = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: content,
        model: 'text-embedding-3-small', // 1536 dimensions
        // model: 'text-embedding-ada-002', // 1536 dimensions (legacy)
      }),
    })

    if (!openaiResponse.ok) {
      const error = await openaiResponse.text()
      throw new Error(`OpenAI API error: ${error}`)
    }

    const embeddingData: OpenAIEmbeddingResponse = await openaiResponse.json()
    const embedding = embeddingData.data[0].embedding

    // Update the resource with the embedding
    const { error: updateError } = await supabaseClient
      .from('resources')
      .update({ embedding })
      .eq('id', resource_id)

    if (updateError) {
      throw new Error(`Database update error: ${updateError.message}`)
    }

    // Update queue status to completed
    await supabaseClient
      .from('embedding_queue')
      .update({ 
        status: 'completed', 
        processed_at: new Date().toISOString() 
      })
      .eq('resource_id', resource_id)

    return new Response(
      JSON.stringify({ 
        success: true, 
        resource_id,
        embedding_length: embedding.length 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error generating embedding:', error)
    
    // Update queue status to failed if we have resource_id
    try {
      const { resource_id } = await req.json()
      if (resource_id) {
        const supabaseClient = createClient(
          Deno.env.get('SUPABASE_URL') ?? '',
          Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        )
        
        await supabaseClient
          .from('embedding_queue')
          .update({ 
            status: 'failed',
            error_message: error.message,
            processed_at: new Date().toISOString()
          })
          .eq('resource_id', resource_id)
      }
    } catch (updateError) {
      console.error('Failed to update queue status:', updateError)
    }

    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
```

### 2.3 Deploy Edge Function
```bash
# Deploy the Edge Function
supabase functions deploy generate-embeddings

# Set environment variables
supabase secrets set OPENAI_API_KEY=your_openai_api_key_here
```

## Phase 3: Database Triggers & Automation

### 3.1 Create Trigger Function
```sql
-- Function to queue embedding generation
CREATE OR REPLACE FUNCTION queue_embedding_generation()
RETURNS trigger AS $$
BEGIN
    -- Only queue if content has changed or embedding is null
    IF (TG_OP = 'INSERT' AND NEW.content IS NOT NULL) OR 
       (TG_OP = 'UPDATE' AND (OLD.content IS DISTINCT FROM NEW.content OR NEW.embedding IS NULL)) THEN
        
        -- Remove any existing queue entries for this resource
        DELETE FROM embedding_queue WHERE resource_id = NEW.id;
        
        -- Add new queue entry
        INSERT INTO embedding_queue (resource_id, content)
        VALUES (NEW.id, NEW.content);
        
        -- Set embedding to NULL to indicate it needs to be generated
        NEW.embedding = NULL;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### 3.2 Create Database Triggers
```sql
-- Create trigger for INSERT operations
CREATE TRIGGER trigger_queue_embedding_on_insert
    BEFORE INSERT ON resources
    FOR EACH ROW
    EXECUTE FUNCTION queue_embedding_generation();

-- Create trigger for UPDATE operations  
CREATE TRIGGER trigger_queue_embedding_on_update
    BEFORE UPDATE ON resources
    FOR EACH ROW
    EXECUTE FUNCTION queue_embedding_generation();
```

### 3.3 Create Embedding Processor Function
```sql
-- Function to process embedding queue (called by cron job)
CREATE OR REPLACE FUNCTION process_embedding_queue()
RETURNS void AS $$
DECLARE
    queue_item record;
    function_url text;
BEGIN
    -- Get the Edge Function URL (update this with your actual function URL)
    function_url := 'https://your-project-ref.supabase.co/functions/v1/generate-embeddings';
    
    -- Process pending items (limit to avoid timeout)
    FOR queue_item IN 
        SELECT id, resource_id, content
        FROM embedding_queue 
        WHERE status = 'pending' 
        AND retry_count < 3
        ORDER BY created_at
        LIMIT 5
    LOOP
        -- Update status to processing
        UPDATE embedding_queue 
        SET status = 'processing', retry_count = retry_count + 1
        WHERE id = queue_item.id;
        
        -- Call the Edge Function using pg_net
        PERFORM net.http_post(
            url := function_url,
            headers := jsonb_build_object(
                'Content-Type', 'application/json',
                'Authorization', 'Bearer ' || current_setting('app.service_role_key', true)
            ),
            body := jsonb_build_object(
                'resource_id', queue_item.resource_id,
                'content', queue_item.content
            )
        );
    END LOOP;
END;
$$ LANGUAGE plpgsql;
```

### 3.4 Set up Cron Job for Processing
```sql
-- Enable pg_cron extension
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule embedding processing every minute
SELECT cron.schedule(
    'process-embeddings',
    '* * * * *', -- Every minute
    'SELECT process_embedding_queue();'
);
```

## Phase 4: Environment Configuration

### 4.1 Required Environment Variables
Set these in your Supabase dashboard under Settings > API:

```bash
# OpenAI API Key
OPENAI_API_KEY=sk-your-openai-api-key

# Service Role Key (should already be set)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4.2 Update Vector Dimension
If using different embedding models, update the vector dimension:

```sql
-- For text-embedding-3-small (1536 dimensions)
ALTER TABLE resources ALTER COLUMN embedding TYPE vector(1536);

-- For all-MiniLM-L6-v2 (384 dimensions) 
ALTER TABLE resources ALTER COLUMN embedding TYPE vector(384);
```

## Phase 5: Testing & Validation

### 5.1 Test Embedding Generation
```sql
-- Insert a test resource
INSERT INTO resources (user_id, content, type, relevance_score, decay_factor, auto_committed)
VALUES (
    'your-user-id',
    'This is a test resource for embedding generation',
    'memory',
    100,
    1.0,
    false
);

-- Check if embedding was queued
SELECT * FROM embedding_queue ORDER BY created_at DESC LIMIT 5;

-- Wait a few minutes, then check if embedding was generated
SELECT id, content, embedding IS NOT NULL as has_embedding 
FROM resources 
ORDER BY created_at DESC 
LIMIT 5;
```

### 5.2 Test Vector Similarity Search
```sql
-- Function to find similar resources
CREATE OR REPLACE FUNCTION find_similar_resources(
    query_embedding vector(1536), -- Adjust dimension as needed
    match_threshold float DEFAULT 0.7,
    match_count int DEFAULT 10
)
RETURNS TABLE (
    id uuid,
    content text,
    similarity float
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        r.id,
        r.content,
        1 - (r.embedding <=> query_embedding) as similarity
    FROM resources r
    WHERE r.embedding IS NOT NULL
        AND 1 - (r.embedding <=> query_embedding) > match_threshold
    ORDER BY r.embedding <=> query_embedding
    LIMIT match_count;
END;
$$ LANGUAGE plpgsql;
```

## Phase 6: Monitoring & Maintenance

### 6.1 Monitor Embedding Queue
```sql
-- Check queue status
SELECT status, COUNT(*) 
FROM embedding_queue 
GROUP BY status;

-- Check failed embeddings
SELECT resource_id, error_message, retry_count
FROM embedding_queue 
WHERE status = 'failed'
ORDER BY created_at DESC;
```

### 6.2 Cleanup Old Queue Entries
```sql
-- Clean up completed entries older than 7 days
DELETE FROM embedding_queue 
WHERE status = 'completed' 
AND processed_at < NOW() - INTERVAL '7 days';
```

### 6.3 Re-process Failed Embeddings
```sql
-- Reset failed embeddings for retry
UPDATE embedding_queue 
SET status = 'pending', retry_count = 0, error_message = NULL
WHERE status = 'failed' AND retry_count < 3;
```

## Phase 7: Frontend Integration

### 7.1 Update DatabaseService (if needed)
The frontend should automatically work with the new embedding system since embeddings are generated automatically in the background. The `embedding` field will be populated for all new resources.

### 7.2 Add Similarity Search Methods
If you want to add semantic search functionality to the frontend:

```typescript
// Add to DatabaseService
async searchSimilarResources(userId: string, queryText: string, limit: number = 10) {
  // First, generate embedding for the query text
  const embeddingResponse = await supabase.functions.invoke('generate-embeddings', {
    body: { content: queryText, resource_id: null }
  });
  
  if (embeddingResponse.error) {
    throw new Error('Failed to generate query embedding');
  }
  
  // Then search for similar resources
  const { data, error } = await supabase.rpc('find_similar_resources', {
    query_embedding: embeddingResponse.data.embedding,
    match_threshold: 0.7,
    match_count: limit
  });
  
  if (error) throw error;
  return data;
}
```

## Troubleshooting

### Common Issues
1. **pgvector extension not enabled**: Ensure you have Supabase Pro plan
2. **Edge function timeout**: Reduce batch size in processing function
3. **OpenAI API rate limits**: Add delay between requests or use a queue
4. **Vector dimension mismatch**: Ensure embedding column matches model output

### Performance Optimization
1. **Batch processing**: Process multiple embeddings in a single function call
2. **Caching**: Store frequently accessed embeddings in memory
3. **Indexing**: Ensure proper vector indexes are created
4. **Model selection**: Choose appropriate embedding model for your use case

## Security Considerations
1. **API Key Security**: Store OpenAI API key as Supabase secret
2. **Access Control**: Use RLS policies on embedding_queue table
3. **Rate Limiting**: Implement rate limiting in Edge Function
4. **Input Validation**: Sanitize content before embedding generation

## Next Steps
1. Deploy and test the implementation
2. Monitor embedding generation performance
3. Implement semantic search in the frontend
4. Add embedding-based recommendations
5. Set up alerting for failed embeddings