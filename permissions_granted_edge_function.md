import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4';
import { handleOnDemandAggregation } from '../_shared/health-aggregation-logic.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface PermissionGrantedRequest {
  user_id?: string;
  platform?: 'apple_health' | 'google_health';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Get JWT token from authorization header
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization header' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const token = authHeader.replace('Bearer ', '');

    // Create Supabase client with user token for RLS
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        },
        global: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      }
    );

    // Verify JWT and get user
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser(token);
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid token' }),
        {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const { user_id, platform } = await req.json() as PermissionGrantedRequest;

    // Use authenticated user's ID if not provided, or verify permission
    const targetUserId = user_id || user.id;
    if (user_id && user_id !== user.id) {
      return new Response(
        JSON.stringify({ error: 'Cannot process permissions for other users' }),
        {
          status: 403,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    console.log(`Processing health permission grant for user ${targetUserId}, platform: ${platform || 'unknown'}`);

    // Create a service role client for aggregation (needs broader permissions)
    const serviceRoleClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Trigger immediate aggregation for today only (no backfill for realtime data)
    const today = new Date().toISOString().split('T')[0];
    const result = await handleOnDemandAggregation(
      serviceRoleClient,
      targetUserId,
      1, // Only process today
      today
    );

    // Log the platform for analytics
    if (platform) {
      console.log(`Health permission granted - Platform: ${platform}, User: ${targetUserId}`);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: `Health permission processed successfully for ${platform || 'health platform'}`,
        aggregation_result: {
          days_processed: result.days_processed,
          records_created: result.records_created,
          errors: result.errors,
          latency_ms: result.latency_ms
        },
        processed_date: today
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Health permission grant processing error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
        message: 'Failed to process health permission grant'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});