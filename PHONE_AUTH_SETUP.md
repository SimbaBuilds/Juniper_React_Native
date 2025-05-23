# Phone Authentication Setup with Supabase and Twilio

This guide walks you through setting up phone authentication with Twilio SMS provider for your React Native app using Supabase Auth.

## 📋 Prerequisites

1. A Supabase project (create one at [supabase.com](https://supabase.com))
2. A Twilio account (sign up at [twilio.com](https://twilio.com))
3. Environment variables already configured for Supabase

## 🚀 Supabase Configuration

### 1. Enable Phone Authentication

1. Go to your Supabase Dashboard
2. Navigate to **Authentication > Providers**
3. Enable **Phone** authentication
4. Set the following configuration:

```
Confirm phone: Enabled
Phone change verification: Enabled
```

### 2. Configure Twilio SMS Provider

1. In the same **Authentication > Providers** page, scroll to **SMS**
2. Select **Twilio** as your SMS provider
3. Add your Twilio credentials:

```
Twilio Account SID: your_account_sid
Twilio Auth Token: your_auth_token
Twilio Messaging Service SID: your_messaging_service_sid (optional)
Twilio Phone Number: your_twilio_phone_number (if not using Messaging Service)
```

## 📱 Twilio Setup

### 1. Get Twilio Credentials

1. Log into your [Twilio Console](https://console.twilio.com/)
2. Find your **Account SID** and **Auth Token** on the dashboard
3. Note these down for Supabase configuration

### 2. Set up Phone Number or Messaging Service

**Option A: Single Phone Number**
1. Go to **Phone Numbers > Manage > Active numbers**
2. Buy a phone number if you don't have one
3. Copy the phone number (format: +1234567890)

**Option B: Messaging Service (Recommended for Production)**
1. Go to **Messaging > Services**
2. Create a new Messaging Service
3. Add your phone number(s) to the service
4. Copy the **Messaging Service SID**

### 3. Configure SMS Settings

1. Go to **Messaging > Settings > WhatsApp sandbox** (if using WhatsApp)
2. For SMS, ensure your phone numbers are verified for sending
3. Set up webhook URLs if needed (optional for basic setup)

## 🔧 Rate Limiting & Security

### 1. Configure Rate Limits in Supabase

1. Go to **Authentication > Settings**
2. Under **Rate Limits**, configure:

```
Sign-in rate limit: 10 requests per hour
SMS sending rate limit: 5 requests per hour per phone number
```

### 2. Enable CAPTCHA (Recommended)

1. In **Authentication > Settings**
2. Enable **Enable CAPTCHA protection**
3. Configure your CAPTCHA provider (hCaptcha recommended)

## 🌍 International Considerations

### 1. Country-Specific Regulations

- **India**: Comply with TRAI DLT regulations
- **EU**: Follow GDPR requirements
- **US**: Comply with TCPA regulations

### 2. Phone Number Formatting

The app automatically formats phone numbers with country codes:
- Input: `1234567890` → Formatted: `+1234567890`
- Ensure users include their country code

## 💰 Cost Management

### 1. Twilio Pricing

- SMS costs vary by destination country
- Typical US SMS: $0.0075 per message
- International rates vary significantly

### 2. Cost Control Tips

1. Set up Twilio usage alerts
2. Implement proper rate limiting
3. Use Messaging Services for better deliverability
4. Monitor usage in Twilio Console

## 🧪 Testing

### 1. Test Phone Numbers

Twilio provides test credentials for development:

```
Test Account SID: ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Test Auth Token: your_test_auth_token
Test Phone Number: +15005550006 (always succeeds)
```

### 2. Test the Flow

1. Enter a valid phone number (your own for testing)
2. Check SMS delivery
3. Verify OTP functionality
4. Test error scenarios (invalid OTP, expired codes)

## 🔍 Troubleshooting

### Common Issues

1. **SMS Not Delivered**
   - Check phone number format (+country code)
   - Verify Twilio account balance
   - Check spam folders
   - Verify phone number is not blocked

2. **Invalid Credentials Error**
   - Double-check Twilio Account SID and Auth Token
   - Ensure credentials are correctly set in Supabase

3. **Rate Limit Exceeded**
   - Check Supabase rate limit settings
   - Implement proper error handling
   - Consider increasing limits for production

4. **OTP Verification Fails**
   - Ensure OTP is entered within 60 seconds
   - Check for typos in phone number
   - Verify case-sensitive token handling

### Debug Logs

Check the following for debugging:

1. **Supabase Logs**: Authentication > Logs
2. **Twilio Logs**: Console > Monitor > Logs > Messaging
3. **App Console**: Check React Native debug logs

## 🚀 Production Checklist

- [ ] Enable CAPTCHA protection
- [ ] Configure appropriate rate limits
- [ ] Set up Twilio usage alerts
- [ ] Test with multiple phone numbers
- [ ] Verify international number support
- [ ] Set up monitoring and alerting
- [ ] Review and comply with local regulations
- [ ] Test error handling flows
- [ ] Set up proper logging

## 📞 Support

- **Supabase**: [docs.supabase.com](https://docs.supabase.com)
- **Twilio**: [support.twilio.com](https://support.twilio.com)
- **Phone Auth Docs**: [supabase.com/docs/guides/auth/phone-login](https://supabase.com/docs/guides/auth/phone-login)

## 🔗 Related Documentation

- [Supabase Phone Login Guide](https://supabase.com/docs/guides/auth/phone-login)
- [Twilio SMS API Documentation](https://www.twilio.com/docs/sms)
- [React Native OTP Best Practices](https://docs.expo.dev/guides/authentication/) 