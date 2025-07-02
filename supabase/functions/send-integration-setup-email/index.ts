import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
const SITE_URL = Deno.env.get('EXPO_PUBLIC_SITE_URL') || Deno.env.get('SITE_URL') || 'https://hightower-ai.com'

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
      from: 'Juniper <integrations@hightower-ai.com>',
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
            <p>Return to your Juniper app and tap "Finalize Integration" to complete the setup process.</p>

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
      subject: '📱 Complete Your Twilio Integration Setup - SMS & Voice for Your AI',
      html: `
        ${baseStyles}
        <style>
          .option-card { background: white; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px; margin: 15px 0; }
          .option-recommended { border-color: #28a745; background: #f8fff9; }
          .option-advanced { border-color: #ffc107; background: #fffdf7; }
          .option-complex { border-color: #fd7e14; background: #fff8f3; }
          .cost-table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          .cost-table th, .cost-table td { padding: 8px 12px; border: 1px solid #dee2e6; text-align: left; }
          .cost-table th { background: #f8f9fa; font-weight: bold; }
          .feature-list { list-style: none; padding: 0; }
          .feature-list li { padding: 5px 0; }
          .feature-list li:before { content: "✅ "; color: #28a745; }
          .why-section { background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; }
          .recommendation-box { background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 25px; border-radius: 10px; margin: 20px 0; text-align: center; }
        </style>
        <div class="container">
          <div class="header">
            <h1>📱 Twilio Setup Guide</h1>
            <p><em>Get your AI assistant connected to SMS and voice calls in minutes</em></p>
          </div>
          <div class="content">
            <p>Hi there!</p>
            <p>You started setting up your Twilio integration. Complete the setup using the button below, but first - here's your complete setup guide!</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${setupUrl}" class="button" style="font-size: 18px; padding: 20px 40px;">🚀 Complete Twilio Setup</a>
            </div>

            <h2>🚀 Quick Start (7 minutes total)</h2>
            
            <div class="instructions">
              <h3>Step 1: Create Your Account</h3>
              <p><strong>⏱️ 5 minutes</strong></p>
              <ul>
                <li>🌐 Visit <a href="https://twilio.com">twilio.com</a> and create account</li>
                <li>💰 <strong>$15 free credit</strong> included - no payment required initially</li>
                <li>✅ Verify your email address</li>
              </ul>

              <h3>Step 2: Get Your API Credentials</h3>
              <p><strong>⏱️ 2 minutes</strong></p>
              <ol>
                <li>📊 Go to <strong>Console</strong> → <strong>Account</strong> → <strong>API keys & tokens</strong></li>
                <li>📋 Copy your <strong>Account SID</strong> (starts with <code>AC...</code>)</li>
                <li>🔑 Create new <strong>API Key</strong> (starts with <code>SK...</code>) + <strong>Secret</strong></li>
                <li>💾 Save these credentials securely</li>
              </ol>
            </div>

            <h2>📞 Phone Number Options</h2>
            <p><em>Choose the option that best fits your needs:</em></p>

            <div class="option-card option-recommended">
              <h3>🟢 Option A: Buy New Number (Recommended)</h3>
              <p><strong>Best for most users - simple & clean separation</strong></p>
              <table class="cost-table">
                <tr><th>Aspect</th><th>Details</th></tr>
                <tr><td>⚡ Setup Time</td><td>2 minutes</td></tr>
                <tr><td>🕐 Live Time</td><td>Instant</td></tr>
                <tr><td>💵 Monthly Cost</td><td>$1.15 - $3.25</td></tr>
                <tr><td>📱 SMS Included</td><td>20-300 messages</td></tr>
                <tr><td>✅ Benefits</td><td>Keep personal number private, professional setup</td></tr>
              </table>
            </div>

            <div class="option-card option-advanced">
              <h3>🟡 Option B: Port Your Personal Number</h3>
              <p><strong>For users who want AI to text as "them"</strong></p>
              <table class="cost-table">
                <tr><th>Aspect</th><th>Details</th></tr>
                <tr><td>⚡ Setup Time</td><td>5 minutes</td></tr>
                <tr><td>🕐 Live Time</td><td>2-4 weeks</td></tr>
                <tr><td>💵 Cost</td><td>$2 setup + $1.15-3.25/month</td></tr>
                <tr><td>📱 SMS Included</td><td>20-300 messages</td></tr>
                <tr><td>⚠️ Note</td><td>AI sends as you from your known number</td></tr>
              </table>
            </div>

            <div class="option-card option-complex">
              <h3>🟠 Option C: Forwarding Integration</h3>
              <p><strong>Advanced setup - forwards to your personal phone</strong></p>
              <table class="cost-table">
                <tr><th>Aspect</th><th>Details</th></tr>
                <tr><td>⚡ Setup Time</td><td>10 minutes</td></tr>
                <tr><td>🕐 Live Time</td><td>Instant</td></tr>
                <tr><td>💵 Monthly Cost</td><td>$1.30 - $5.50</td></tr>
                <tr><td>📱 SMS Cost</td><td>Double charges (both directions)</td></tr>
                <tr><td>🛠️ Complexity</td><td>Requires Twilio Functions/Studio</td></tr>
              </table>
              
              <h4>Forwarding Features:</h4>
              <ul>
                <li>📨 <strong>SMS</strong>: Auto-forward to personal phone with sender info</li>
                <li>📞 <strong>Calls</strong>: Ring your personal phone directly</li>
                <li>📤 <strong>Send</strong>: Text <code>"To +1234567890: message"</code> to Twilio number</li>
                <li>⚙️ <strong>Setup</strong>: Uses Twilio Functions/Studio (5 min configuration)</li>
              </ul>
            </div>

            <h2>💰 Cost Breakdown</h2>
            <h3>Monthly Usage Estimates:</h3>
            <table class="cost-table">
              <tr><th>Usage Level</th><th>SMS Volume</th><th>SMS Cost</th><th>Number Cost</th><th><strong>Total/Month</strong></th></tr>
              <tr><td>🟢 Light</td><td>~20 messages</td><td>$0.15</td><td>$1.00</td><td><strong>$1.15</strong></td></tr>
              <tr><td>🟡 Moderate</td><td>~100 messages</td><td>$0.75</td><td>$1.00</td><td><strong>$1.75</strong></td></tr>
              <tr><td>🔴 Heavy</td><td>~300 messages</td><td>$2.25</td><td>$1.00</td><td><strong>$3.25</strong></td></tr>
            </table>

            <h3>Call Pricing:</h3>
            <ul>
              <li>📞 <strong>Voice calls</strong>: $0.0085/minute</li>
              <li>💡 <strong>Example</strong>: 5-minute call = $0.04</li>
            </ul>

            <div class="why-section">
              <h2>🤖 Why Your AI Needs This</h2>
              <p>Your AI assistant uses your phone number to:</p>
              <ul class="feature-list">
                <li><strong>Send reminders</strong> for important tasks</li>
                <li><strong>Respond to contacts</strong> on your behalf</li>
                <li><strong>Handle notifications</strong> when you're busy</li>
                <li><strong>Coordinate schedules</strong> via text</li>
                <li><strong>Alert you</strong> about urgent matters</li>
              </ul>
            </div>

            <div class="recommendation-box">
              <h2>🎯 Our Recommendation</h2>
              <h3>🏆 Option A: Buy New Number</h3>
              <p><strong>Why it's the best choice:</strong></p>
              <ul class="feature-list" style="text-align: left; display: inline-block;">
                <li><strong>Simplest setup</strong> - just 2 minutes</li>
                <li><strong>Instant activation</strong> - works immediately</li>
                <li><strong>Clear separation</strong> - keep personal number private</li>
                <li><strong>Lowest total cost</strong> - most economical option</li>
                <li><strong>Professional appearance</strong> - dedicated business line</li>
              </ul>
              <p><strong>Perfect for:</strong> Most users who want a clean, simple setup</p>
            </div>

            <div class="warning">
              <strong>⏰ Important:</strong> This setup link expires in 24 hours for security. If you need a new link, just try connecting again in the Mobile Jarvis app.
            </div>

            <p><strong>After completing the form:</strong></p>
            <p>Return to your Juniper app and tap "Finalize Integration" to complete the setup process.</p>

            <div class="footer">
              <p><em>Ready to get started? Choose your option above and let's connect your AI! 🚀</em></p>
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
          <p>Return to your Juniper app and tap "Finalize Integration" to complete the setup process.</p>

          <div class="footer">
            <p>Need help? Contact support or check our documentation.</p>
            <p>This email was sent because you requested to set up a ${serviceName} integration.</p>
          </div>
        </div>
      </div>
    `
  }
} 