import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const SITE_URL = Deno.env.get('EXPO_PUBLIC_SITE_URL') || Deno.env.get('SITE_URL') || 'https://juniperassistant.com'

interface IntegrationSetupEmailRequest {
  user_id: string
  integration_id: string
  service_name: string
  user_email: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    console.log('=== SEND EMAIL FUNCTION STARTED ===')
    
    // Validate environment variables
    console.log('Checking environment variables...')
    const envVars = {
      RESEND_API_KEY: !!RESEND_API_KEY,
      SUPABASE_URL: !!SUPABASE_URL,
      SUPABASE_SERVICE_ROLE_KEY: !!SUPABASE_SERVICE_ROLE_KEY,
      SITE_URL: !!SITE_URL
    }
    console.log('Environment variables status:', envVars)
    
    if (!RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is missing')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    
    if (!SITE_URL) {
      console.error('❌ SITE_URL is missing')
      return new Response(
        JSON.stringify({ error: 'Site URL not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Verify request method
    if (req.method !== 'POST') {
      console.log('❌ Invalid method:', req.method)
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse request body
    console.log('Parsing request body...')
    const body: IntegrationSetupEmailRequest = await req.json()
    const { user_id, integration_id, service_name, user_email } = body
    console.log('Request data:', { user_id, integration_id, service_name, user_email })

    // Validate required fields
    if (!user_id || !integration_id || !service_name || !user_email) {
      console.log('❌ Missing required fields:', { user_id: !!user_id, integration_id: !!integration_id, service_name: !!service_name, user_email: !!user_email })
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Initialize Supabase client
    console.log('Initializing Supabase client...')
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)

    // Test database connection and table existence
    console.log('Testing database connection and table existence...')
    try {
      const { count, error: testError } = await supabase
        .from('integration_setup_tokens')
        .select('*', { count: 'exact', head: true })
      
      if (testError) {
        console.error('❌ Database/table test failed:', testError)
        return new Response(
          JSON.stringify({ 
            error: 'Database configuration error',
            details: testError.message 
          }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      console.log('✅ Database connection and table verified, current count:', count)
    } catch (dbTestError) {
      console.error('❌ Database connection test failed:', dbTestError)
      return new Response(
        JSON.stringify({ 
          error: 'Database connection failed',
          details: String(dbTestError)
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Generate secure random token
    console.log('Generating secure token...')
    const token = crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '')
    console.log('Token generated, length:', token.length)

    // Store token in database
    console.log('Storing token in database...')
    const tokenData = {
      user_id,
      integration_id,
      service_name: service_name.toLowerCase(),
      token,
      expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(), // 24 hours
      is_used: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    console.log('Token data to insert:', { ...tokenData, token: `${token.substring(0, 8)}...` })
    
    const { data: insertResult, error: tokenError } = await supabase
      .from('integration_setup_tokens')
      .insert(tokenData)
      .select()

    if (tokenError) {
      console.error('❌ Database error storing setup token:', tokenError)
      console.error('Full error details:', JSON.stringify(tokenError, null, 2))
      return new Response(
        JSON.stringify({ 
          error: 'Failed to create setup token',
          details: tokenError.message 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }
    console.log('✅ Token stored successfully:', insertResult)

    // Generate setup URL
    console.log('Generating setup URL...')
    const setupUrl = `${SITE_URL}/integration?token=${token}&service=${encodeURIComponent(service_name)}`
    console.log('Setup URL generated:', setupUrl)

    // Get service-specific email content
    console.log('Generating email content for service:', service_name)
    const emailContent = getServiceEmailContent(service_name, setupUrl)
    console.log('Email content generated - subject:', emailContent.subject)

    // Send email using Resend
    console.log('Sending email via Resend...')
    const emailPayload = {
      from: 'Juniper <integrations@juniperassistant.com>',
      to: [user_email],
      subject: emailContent.subject,
      html: emailContent.html,
    }
    console.log('Email payload:', { ...emailPayload, html: `${emailContent.html.substring(0, 100)}...` })
    
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    })

    console.log('Resend response status:', emailResponse.status)
    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('❌ Resend API error:', errorText)
      console.error('Response headers:', Object.fromEntries(emailResponse.headers.entries()))
      return new Response(
        JSON.stringify({ 
          error: 'Failed to send email',
          details: errorText 
        }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailResult = await emailResponse.json()
    console.log('✅ Email sent successfully:', emailResult)

    console.log('=== SEND EMAIL FUNCTION COMPLETED SUCCESSFULLY ===')
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Setup email sent successfully',
        email_id: emailResult.id 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('❌ CRITICAL ERROR in send-integration-setup-email function:', error)
    console.error('Error type:', typeof error)
    console.error('Error name:', error instanceof Error ? error.name : 'Unknown')
    console.error('Error message:', error instanceof Error ? error.message : String(error))
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack available')
    
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : String(error)
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

function getServiceEmailContent(serviceName: string, setupUrl: string): { subject: string; html: string } {
  const serviceLower = serviceName.toLowerCase()
  
  const baseStyles = `
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
      .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
      .button { display: inline-block; background: #4A90E2; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0; }
      .button:hover { background: #357ABD; }
      .instructions { background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #4A90E2; }
      .warning { background: #fff3cd; padding: 15px; border-radius: 5px; border: 1px solid #ffeaa7; margin: 20px 0; }
      .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
    </style>
  `

  if (serviceLower === 'perplexity') {
    return {
      subject: '🔗 Complete Your Perplexity AI Integration Setup',
      html: `
        ${baseStyles}
        <div class="container">
          <div class="header">
            <h1>🔗 Complete Your Perplexity AI Setup</h1>
            <p>You're one step away from connecting Perplexity AI to your Juniper assistant!</p>
          </div>
          <div class="content">
        
            <div style="text-align: center;">
              <a href="${setupUrl}" class="button">Complete Perplexity Setup</a>
            </div>

            <div class="warning">
              This setup link expires in 24 hours for security. If you need a new link, just try connecting again in the Juniper app.
            </div>

            <p><strong>After completing the form:</strong></p>
            <p>Return to your Juniper app and tap "Finalize Integration" to complete the setup process.</p>

            <div class="footer">
            </div>
          </div>
        </div>
      `
    }
  } else if (serviceLower === 'twilio') {
    return {
      subject: '📱 Complete Your Twilio Integration Setup',
      html: `
        ${baseStyles}
        <div class="container">
          <div class="header">
            <h1>📱 Complete Your Twilio Setup</h1>
            <p>You're one step away from connecting Twilio to your Juniper assistant!</p>
          </div>
          <div class="content">
            <div style="text-align: center;">
              <a href="${setupUrl}" class="button">Complete Twilio Setup</a>
            </div>

            <div class="warning">
              This setup link expires in 24 hours for security. If you need a new link, just try connecting again in the Juniper app.
            </div>

            <p><strong>After completing the form:</strong></p>
            <p>Return to your Juniper app and tap "Finalize Integration" to complete the setup process.</p>

            <div class="footer">
            </div>
          </div>
        </div>
      `
    }
  }

  // Default email for other services
  return {
    subject: `🔗 Complete Your ${serviceName} Integration Setup`,
    html: `
      ${baseStyles}
      <div class="container">
        <div class="header">
          <h1>🔗 Complete Your ${serviceName} Setup</h1>
          <p>You're one step away from connecting ${serviceName} to your Juniper assistant!</p>
        </div>
        <div class="content">
          <div style="text-align: center;">
            <a href="${setupUrl}" class="button">Complete ${serviceName} Setup</a>
          </div>

          <div class="warning">
            This setup link expires in 24 hours for security. If you need a new link, just try connecting again in the Juniper app.
          </div>

          <p><strong>After completing the form:</strong></p>
          <p>Return to your Juniper app and tap "Finalize Integration" to complete the setup process.</p>

          <div class="footer">
            <p>This email was sent because you requested to set up a ${serviceName} integration.</p>
          </div>
        </div>
      </div>
    `
  }
} 