import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const SITE_URL = Deno.env.get('EXPO_PUBLIC_SITE_URL')

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
    // Verify request method
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Parse request body
    const body: IntegrationSetupEmailRequest = await req.json()
    const { user_id, integration_id, service_name, user_email } = body

    // Validate required fields
    if (!user_id || !integration_id || !service_name || !user_email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!)

    // Generate secure random token
    const token = crypto.randomUUID().replace(/-/g, '') + crypto.randomUUID().replace(/-/g, '')

    // Store token in database
    const { error: tokenError } = await supabase
      .from('integration_setup_tokens')
      .insert({
        user_id,
        integration_id,
        service_name: service_name.toLowerCase(),
        token,
        expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
      })

    if (tokenError) {
      console.error('Error storing setup token:', tokenError)
      return new Response(
        JSON.stringify({ error: 'Failed to create setup token' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Generate setup URL
    const setupUrl = `${SITE_URL}/integration?token=${token}&service=${encodeURIComponent(service_name)}`

    // Get service-specific email content
    const emailContent = getServiceEmailContent(service_name, setupUrl)

    // Send email using Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Mobile Jarvis <integrations@hightower-ai.com>', // Update with your domain
        to: [user_email],
        subject: emailContent.subject,
        html: emailContent.html,
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const emailResult = await emailResponse.json()

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Setup email sent successfully',
        email_id: emailResult.id 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error in send-integration-setup-email function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
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
            <p>You're one step away from connecting Perplexity AI to your Mobile Jarvis assistant!</p>
          </div>
          <div class="content">
            <p>Hi there!</p>
            <p>You started setting up your Perplexity AI integration. Complete the setup using the button below:</p>
            
            <div style="text-align: center;">
              <a href="${setupUrl}" class="button">Complete Perplexity Setup</a>
            </div>

            <div class="instructions">
              <h3>📝 What you'll need:</h3>
              <ol>
                <li><strong>Perplexity API Key</strong> - Get this from <a href="https://www.perplexity.ai/settings/api">perplexity.ai/settings/api</a></li>
                <li>Your API key should start with "pplx-" and be about 40-50 characters long</li>
                <li>You'll need to add billing information to your Perplexity account to use the API</li>
              </ol>
            </div>

            <div class="warning">
              <strong>⏰ Important:</strong> This setup link expires in 24 hours for security. If you need a new link, just try connecting again in the Mobile Jarvis app.
            </div>

            <p><strong>After completing the form:</strong></p>
            <p>Return to your Mobile Jarvis app and tap "Finalize Integration" to complete the setup process.</p>

            <div class="footer">
              <p>Need help? Contact support or check our documentation.</p>
              <p>This email was sent because you requested to set up a Perplexity AI integration.</p>
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
            <p>You're one step away from connecting Twilio to your Mobile Jarvis assistant!</p>
          </div>
          <div class="content">
            <p>Hi there!</p>
            <p>You started setting up your Twilio integration. Complete the setup using the button below:</p>
            
            <div style="text-align: center;">
              <a href="${setupUrl}" class="button">Complete Twilio Setup</a>
            </div>

            <div class="instructions">
              <h3>📝 What you'll need:</h3>
              <ol>
                <li><strong>Account SID</strong> - Starts with "AC" (found in Twilio Console)</li>
                <li><strong>API Key</strong> - Starts with "SK" (create in Console > Account > API keys)</li>
                <li><strong>API Secret</strong> - Generated with your API Key</li>
                <li><strong>Phone Number</strong> - Your Twilio phone number for sending messages</li>
              </ol>
              
              <h4>🚀 Quick Setup Guide:</h4>
              <ol>
                <li>Sign up at <a href="https://twilio.com">twilio.com</a> ($15 free credit)</li>
                <li>Go to Console > Account > API keys & tokens</li>
                <li>Copy your Account SID</li>
                <li>Create a new API Key (gives you Key + Secret)</li>
                <li>Buy a phone number in Console > Phone Numbers</li>
              </ol>
            </div>

            <div class="warning">
              <strong>⏰ Important:</strong> This setup link expires in 24 hours for security. If you need a new link, just try connecting again in the Mobile Jarvis app.
            </div>

            <p><strong>After completing the form:</strong></p>
            <p>Return to your Mobile Jarvis app and tap "Finalize Integration" to complete the setup process.</p>

            <div class="footer">
              <p>Need help? Contact support or check our documentation.</p>
              <p>This email was sent because you requested to set up a Twilio integration.</p>
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
          <p>You're one step away from connecting ${serviceName} to your Mobile Jarvis assistant!</p>
        </div>
        <div class="content">
          <p>Hi there!</p>
          <p>You started setting up your ${serviceName} integration. Complete the setup using the button below:</p>
          
          <div style="text-align: center;">
            <a href="${setupUrl}" class="button">Complete ${serviceName} Setup</a>
          </div>

          <div class="warning">
            <strong>⏰ Important:</strong> This setup link expires in 24 hours for security. If you need a new link, just try connecting again in the Mobile Jarvis app.
          </div>

          <p><strong>After completing the form:</strong></p>
          <p>Return to your Mobile Jarvis app and tap "Finalize Integration" to complete the setup process.</p>

          <div class="footer">
            <p>Need help? Contact support or check our documentation.</p>
            <p>This email was sent because you requested to set up a ${serviceName} integration.</p>
          </div>
        </div>
      </div>
    `
  }
} 