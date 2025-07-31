 LOG  User not authenticated with Supabase, skipping integration load
 LOG  GoogleAuthService initialized
 LOG  Using HTTPS redirect URI: https://hightower-ai.com/oauth/google/callback
 LOG  Basic sign-in scopes: openid email profile
 LOG  === STARTING GOOGLE OAUTH FLOW ===
 LOG  Opening OAuth URL: https://accounts.google.com/o/oauth2/v2/auth?client_id=66333577628-gnnebnjk57ione1bfphjmfa1vmk9nr9a.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fhightower-ai.com%2Foauth%2Fgoogle%2Fcallback&response_type=code&scope=openid+email+profile&access_type=offline&prompt=consent
 LOG  Expected HTTPS redirect URI: https://hightower-ai.com/oauth/google/callback
 LOG  ✅ Opening OAuth URL in browser...
 LOG  ✅ OAuth URL opened successfully
 LOG  === DEEP LINK RECEIVED ===
 LOG  Full URL: https://hightower-ai.com/oauth/google/callback?code=4%2F0AVMBsJiHYTHEiTbSC9m_oc4ZjFruqCqsSW25wJ1Wmmzwx_Yn_5dcI2Td9f_3L4oVPrb2sw&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=3&prompt=consent
 LOG  URL starts with https:// true
 LOG  URL includes /oauth/ true
 LOG  ✅ Detected OAuth callback - using new OAuth routing system
 LOG  === HANDLING HTTPS OAUTH CALLBACK ===
 LOG  URL: https://hightower-ai.com/oauth/google/callback?code=4%2F0AVMBsJiHYTHEiTbSC9m_oc4ZjFruqCqsSW25wJ1Wmmzwx_Yn_5dcI2Td9f_3L4oVPrb2sw&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=3&prompt=consent
 LOG  📝 Detected service: google
 LOG  📝 Query string: code=4%2F0AVMBsJiHYTHEiTbSC9m_oc4ZjFruqCqsSW25wJ1Wmmzwx_Yn_5dcI2Td9f_3L4oVPrb2sw&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=3&prompt=consent
 LOG  📝 Extracted parameters:
 LOG    - code: 4/0AVMBsJi...
 LOG    - state: null
 LOG    - error: null
 ERROR  ❌ Missing code or state in google callback
 ERROR  ❌ Code present: true, State present: false






