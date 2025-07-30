default	14:53:26.282788-0500	MobileJarvisNative	🎵 VoiceManager: About to start TTS with response: Test received! I'm here and ready to help with wha
default	14:53:26.282815-0500	MobileJarvisNative	🎵 VoiceManager: TTSManager instance: <TTSManager: 0x10275aa80>
default	14:53:26.282892-0500	MobileJarvisNative	🎵 TTS_MANAGER: speak() called with text length: 65
default	14:53:26.282972-0500	MobileJarvisNative	🎵 TTS_MANAGER: ========== SPEAKING TEXT ==========
default	14:53:26.283036-0500	MobileJarvisNative	🎵 TTS_MANAGER: Text: 'Test received! I'm here and ready to help with whatever you need.'
default	14:53:26.283071-0500	MobileJarvisNative	🎵 TTS_MANAGER: Current provider: deepgram
default	14:53:26.283097-0500	MobileJarvisNative	🎵 TTS_MANAGER: Stored completion handler
default	14:53:26.283122-0500	MobileJarvisNative	🎵 TTS_MANAGER: Stopped any current speech
default	14:53:26.283147-0500	MobileJarvisNative	🎵 TTS_MANAGER: Set isSpeaking to true
default	14:53:26.283432-0500	MobileJarvisNative	🎵 TTS_MANAGER: ========== DEEPGRAM TTS FLOW START ==========
default	14:53:26.283483-0500	MobileJarvisNative	🎵 TTS_MANAGER: Text length: 65
default	14:53:26.283509-0500	MobileJarvisNative	🎵 TTS_MANAGER: Step 1 - Validating Deepgram configuration...
default	14:53:26.283641-0500	MobileJarvisNative	🎵 TTS_MANAGER: Validation result: valid=YES
default	14:53:26.283715-0500	MobileJarvisNative	🎵 TTS_MANAGER: ✅ Configuration validation passed
default	14:53:26.283829-0500	MobileJarvisNative	🎵 TTS_MANAGER: Step 2 - Testing Deepgram connectivity...
default	14:53:26.618552-0500	MobileJarvisNative	🎵 TTS_MANAGER: Connectivity test result: OK
default	14:53:26.618580-0500	MobileJarvisNative	🎵 TTS_MANAGER: ✅ Connectivity test passed
default	14:53:26.618604-0500	MobileJarvisNative	🎵 TTS_MANAGER: Step 3 - Converting text to speech via Deepgram...
default	14:53:26.618630-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: ========== DEEPGRAM TTS API CALL START ==========
default	14:53:26.618655-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: convertTextToSpeech called - API key present: YES, preview: '5385bc79b0...'
default	14:53:26.618680-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Text length: 65, preview: 'Test received! I'm here and ready to help with wha...'
default	14:53:26.618735-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Selected voice: aura-2-pandora-en
default	14:53:26.618761-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: API endpoint: https://api.deepgram.com/v1/speak
default	14:53:26.618786-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: HTTP headers configured
default	14:53:26.618813-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Request body: ["encoding": "mp3", "sample_rate": 24000, "text": "Test received! I\'m here and ready to help with whatever you need.", "model": "aura-2-pandora-en"]
default	14:53:26.618839-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Request body serialized successfully
default	14:53:26.618864-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Acquiring request semaphore...
default	14:53:26.618887-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Sending HTTP request to Deepgram API...
default	14:53:26.978179-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Received response from Deepgram API
default	14:53:26.978303-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: HTTP status code: 400
default	14:53:26.978399-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Response data size: 192 bytes
default	14:53:26.978487-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: ❌ TTS request failed with status 400: {"err_code":"PAYLOAD_ERROR","err_msg":"Failed to deserialize JSON payload. Please specify exactly one of `text` or `url` in the JSON body.","request_id":"a41941aa-b1d5-40f4-97a5-54ac08864ee5"}
default	14:53:26.978697-0500	MobileJarvisNative	🎵 TTS_MANAGER: ❌ Deepgram TTS failed with error: TTS request failed: {"err_code":"PAYLOAD_ERROR","err_msg":"Failed to deserialize JSON payload. Please specify exactly one of `text` or `url` in the JSON body.","request_id":"a41941aa-b1d5-40f4-97a5-54ac08864ee5"}
default	14:53:26.978809-0500	MobileJarvisNative	🎵 TTS_MANAGER: ❌ TTS failed: TTS request failed: {"err_code":"PAYLOAD_ERROR","err_msg":"Failed to deserialize JSON payload. Please specify exactly one of `text` or `url` in the JSON body.","request_id":"a41941aa-b1d5-40f4-97a5-54ac08864ee5"}
default	14:53:26.979005-0500	MobileJarvisNative	🎵 TTS_MANAGER: ========== FALLBACK TO NATIVE TTS ==========
default	14:53:26.979203-0500	MobileJarvisNative	🎵 TTS_MANAGER: Deepgram TTS failed, falling back to native TTS...
default	14:53:30.550520-0500	MobileJarvisNative	🎵 TTS_MANAGER: speakText completion callback invoked
default	14:53:30.550546-0500	MobileJarvisNative	🎵 TTS_MANAGER: ✅ Fallback to native TTS succeeded
default	14:53:30.550570-0500	MobileJarvisNative	🎵 VoiceManager: TTS completion callback received
default	14:53:30.550595-0500	MobileJarvisNative	🎵 VoiceManager: TTS completed, transitioning to LISTENING for continuous conversation
default	14:53:31.240525-0500	MobileJarvisNative	🎵 VoiceManager: Restarting listening for continuous conversation
default	14:59:23.216787-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	14:59:23.217169-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	14:59:23.217580-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	14:59:23.217709-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	14:59:23.218719-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: '5385bc79b0...' (total config keys: 22)
default	14:59:23.218743-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: '5385bc79b046e3e775de5bab7c5e16ee01faeaf0'
default	14:59:23.218769-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: NO
default	14:59:23.218919-0500	MobileJarvisNative	🎵 VoiceModule: ✅ Deepgram API key validation passed
default	14:59:23.219064-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Resetting Deepgram client...
default	14:59:23.219118-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Old API key present: YES
default	14:59:23.219166-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: '5385bc79b0...' (total config keys: 22)
default	14:59:23.219191-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Client reset complete. API key present: YES, preview: '5385bc79b0...'
default	14:59:23.966589-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	14:59:23.967294-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	14:59:23.967582-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	14:59:23.967613-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	14:59:23.969460-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: '5385bc79b0...' (total config keys: 22)
default	14:59:23.969578-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: '5385bc79b046e3e775de5bab7c5e16ee01faeaf0'
default	14:59:23.969616-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: NO
default	14:59:23.969641-0500	MobileJarvisNative	🎵 VoiceModule: ✅ Deepgram API key validation passed
default	14:59:23.969708-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Resetting Deepgram client...
default	14:59:23.969736-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Old API key present: YES
default	14:59:23.969784-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: '5385bc79b0...' (total config keys: 22)
default	14:59:23.969810-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Client reset complete. API key present: YES, preview: '5385bc79b0...'
default	14:59:56.300744-0500	MobileJarvisNative	🎵 VoiceManager: About to start TTS with response: Hello! I'm Juniper, your AI assistant. I can help
default	14:59:56.300889-0500	MobileJarvisNative	🎵 VoiceManager: TTSManager instance: <TTSManager: 0x10432a9e0>
default	14:59:56.300915-0500	MobileJarvisNative	🎵 TTS_MANAGER: speak() called with text length: 202
default	14:59:56.300952-0500	MobileJarvisNative	🎵 TTS_MANAGER: ========== SPEAKING TEXT ==========
default	14:59:56.300983-0500	MobileJarvisNative	🎵 TTS_MANAGER: Text: 'Hello! I'm Juniper, your AI assistant. I can help you with various tasks like searching the web, man...'
default	14:59:56.301011-0500	MobileJarvisNative	🎵 TTS_MANAGER: Current provider: deepgram
default	14:59:56.301037-0500	MobileJarvisNative	🎵 TTS_MANAGER: Stored completion handler
default	14:59:56.302149-0500	MobileJarvisNative	🎵 TTS_MANAGER: Stopped any current speech
default	14:59:56.302187-0500	MobileJarvisNative	🎵 TTS_MANAGER: Set isSpeaking to true
default	14:59:56.302273-0500	MobileJarvisNative	🎵 TTS_MANAGER: ========== DEEPGRAM TTS FLOW START ==========
default	14:59:56.302298-0500	MobileJarvisNative	🎵 TTS_MANAGER: Text length: 202
default	14:59:56.302357-0500	MobileJarvisNative	🎵 TTS_MANAGER: Step 1 - Validating Deepgram configuration...
default	14:59:56.302509-0500	MobileJarvisNative	🎵 TTS_MANAGER: Validation result: valid=YES
default	14:59:56.302536-0500	MobileJarvisNative	🎵 TTS_MANAGER: ✅ Configuration validation passed
default	14:59:56.302562-0500	MobileJarvisNative	🎵 TTS_MANAGER: Step 2 - Testing Deepgram connectivity...
default	14:59:56.806929-0500	MobileJarvisNative	🎵 TTS_MANAGER: Connectivity test result: OK
default	14:59:56.806987-0500	MobileJarvisNative	🎵 TTS_MANAGER: ✅ Connectivity test passed
default	14:59:56.807012-0500	MobileJarvisNative	🎵 TTS_MANAGER: Step 3 - Converting text to speech via Deepgram...
default	14:59:56.808306-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: ========== DEEPGRAM TTS API CALL START ==========
default	14:59:56.808422-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: convertTextToSpeech called - API key present: YES, preview: '5385bc79b0...'
default	14:59:56.808456-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Text length: 202, preview: 'Hello! I'm Juniper, your AI assistant. I can help ...'
default	14:59:56.808521-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Selected voice: aura-2-pandora-en
default	14:59:56.808552-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: API endpoint: https://api.deepgram.com/v1/speak?model=aura-2-pandora-en&encoding=mp3&sample_rate=24000
default	14:59:56.808594-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: HTTP headers configured
default	14:59:56.808722-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Request body: ["text": "Hello! I\'m Juniper, your AI assistant. I can help you with various tasks like searching the web, managing your resources, sending emails, and configuring system settings. What can I help you with today?"]
default	14:59:56.808882-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Request body serialized successfully
default	14:59:56.808903-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Acquiring request semaphore...
default	14:59:56.808945-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Sending HTTP request to Deepgram API...
default	14:59:57.055627-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Received response from Deepgram API
default	14:59:57.055721-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: HTTP status code: 400
default	14:59:57.055811-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: Response data size: 182 bytes
default	14:59:57.055901-0500	MobileJarvisNative	🎵 DEEPGRAM_TTS: ❌ TTS request failed with status 400: {"err_code":"UNSUPPORTED_AUDIO_FORMAT","err_msg":"Unsupported audio format: `sample_rate` is not applicable when `encoding=mp3`.","request_id":"2099291b-6979-4e5d-9419-515a251c617f"}
default	14:59:57.056399-0500	MobileJarvisNative	🎵 TTS_MANAGER: ❌ Deepgram TTS failed with error: TTS request failed: {"err_code":"UNSUPPORTED_AUDIO_FORMAT","err_msg":"Unsupported audio format: `sample_rate` is not applicable when `encoding=mp3`.","request_id":"2099291b-6979-4e5d-9419-515a251c617f"}
default	14:59:57.056602-0500	MobileJarvisNative	🎵 TTS_MANAGER: ❌ TTS failed: TTS request failed: {"err_code":"UNSUPPORTED_AUDIO_FORMAT","err_msg":"Unsupported audio format: `sample_rate` is not applicable when `encoding=mp3`.","request_id":"2099291b-6979-4e5d-9419-515a251c617f"}
default	14:59:57.056807-0500	MobileJarvisNative	🎵 TTS_MANAGER: ========== FALLBACK TO NATIVE TTS ==========
default	14:59:57.056924-0500	MobileJarvisNative	🎵 TTS_MANAGER: Deepgram TTS failed, falling back to native TTS...
default	15:00:10.501431-0500	MobileJarvisNative	🎵 TTS_MANAGER: speakText completion callback invoked
default	15:00:10.501456-0500	MobileJarvisNative	🎵 TTS_MANAGER: ✅ Fallback to native TTS succeeded
default	15:00:10.501481-0500	MobileJarvisNative	🎵 VoiceManager: TTS completion callback received
default	15:00:10.501504-0500	MobileJarvisNative	🎵 VoiceManager: TTS completed, transitioning to LISTENING for continuous conversation
default	15:00:11.198909-0500	MobileJarvisNative	🎵 VoiceManager: Restarting listening for continuous conversation
