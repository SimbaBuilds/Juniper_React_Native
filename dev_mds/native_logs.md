› Copying   ios/MobileJarvisNative/Supporting/Expo.plist ➜ ./Expo.plist

❌  fatal error: module 'React' in AST file '/Users/cameronhightower/Library/Developer/Xcode/DerivedData/ModuleCache.noindex/1X8RPTSBJSU0C/React-38E0V7SNP3UYR.pcm' (imported by AST file '/Users/cameronhightower/Library/Developer/Xcode/DerivedData/MobileJarvisNative-beyjesgauonnbnfjtbtpprufquyj/Build/Intermediates.noindex/PrecompiledHeaders/MobileJarvisNative-Bridging-Header-swift_D3AONYSOZZLZ-clang_1X8RPTSBJSU0C.pch') is not defined in any loaded module map file; maybe you need to load '/Users/cameronhightower/Software_Projects/MobileJarvisNative/ios/Pods/Headers/Public/React-Core/React/React-Core.modulemap'?



⚠️  (ios/MobileJarvisNative/VoiceModule.swift:421:13)

  419 |         let deepgramAPI = DeepgramAPI.shared
  420 |         let whisperAPI = WhisperAPI.shared
> 421 |         let audioManager = AudioManager.shared
      |             ^ initialization of immutable value 'audioManager' was never used; consider replacing with assignment to '_' or removing it
  422 |         
  423 |         let result = [
  424 |             "stt": [


❌  (ios/MobileJarvisNative/VoiceManager.swift:780:56)

  778 |     
  779 |     func isCurrentlySpeaking() -> Bool {
> 780 |         return currentState == .speaking && ttsManager.isSpeaking()
      |                                                        ^ cannot call value of non-function type 'Bool'
  781 |     }
  782 |     
  783 |     // MARK: - STT Provider Management


❌  (ios/MobileJarvisNative/VoiceManager.swift:780:56)

  778 |     
  779 |     func isCurrentlySpeaking() -> Bool {
> 780 |         return currentState == .speaking && ttsManager.isSpeaking()
      |                                                        ^ 'isSpeaking' is inaccessible due to 'private' protection level
  781 |     }
  782 |     
  783 |     // MARK: - STT Provider Management


⚠️  (ios/MobileJarvisNative/VoiceManager.swift:856:39)

  854 |                 case .deepgram:
  855 |                     // Test Deepgram connectivity
> 856 |                     let isConnected = try await deepgramAPI.testConnectivity()
      |                                       ^ no calls to throwing functions occur within 'try' expression
  857 |                     let message = isConnected ? "Deepgram STT is available" : "Deepgram STT connection failed"
  858 |                     completion(isConnected, message)
  859 |                     


⚠️  (ios/MobileJarvisNative/VoiceManager.swift:862:39)

  860 |                 case .whisper:
  861 |                     // Test Whisper connectivity
> 862 |                     let isConnected = try await whisperAPI.testConnectivity()
      |                                       ^ no calls to throwing functions occur within 'try' expression
  863 |                     let message = isConnected ? "Whisper STT is available" : "Whisper STT connection failed"
  864 |                     completion(isConnected, message)
  865 |                 }


⚠️  (ios/MobileJarvisNative/VoiceManager.swift:866:15)

  864 |                     completion(isConnected, message)
  865 |                 }
> 866 |             } catch {
      |               ^ 'catch' block is unreachable because no errors are thrown in 'do' block
  867 |                 completion(false, "STT provider test failed: \(error.localizedDescription)")
  868 |             }
  869 |         }


❌  (ios/MobileJarvisNative/VoiceManager.swift:907:9)

  905 |         
  906 |         // Update partial result and emit event
> 907 |         partialResult = transcript
      |         ^ cannot find 'partialResult' in scope
  908 |         
  909 |         DispatchQueue.main.async { [weak self] in
  910 |             self?.onPartialResult?(transcript)


❌  (ios/MobileJarvisNative/VoiceManager.swift:910:19)

  908 |         
  909 |         DispatchQueue.main.async { [weak self] in
> 910 |             self?.onPartialResult?(transcript)
      |                   ^ value of type 'VoiceManager' has no member 'onPartialResult'
  911 |         }
  912 |     }
  913 |     


⚠️  (ios/MobileJarvisNative/DeepgramAPI.swift:187:11)

  185 |             let audioSession = AVAudioSession.sharedInstance()
  186 |             return audioSession.isOtherAudioPlaying == false || audioSession.category == .playback
> 187 |         } catch {
      |           ^ 'catch' block is unreachable because no errors are thrown in 'do' block
  188 |             print("🎵 DEEPGRAM_API: Error checking audio system: \(error)")
  189 |             return false
  190 |         }


⚠️  (ios/MobileJarvisNative/DeepgramAPI.swift:223:17)

  221 |             
  222 |             // Simple DNS resolution test
> 223 |             let addresses = try await withCheckedThrowingContinuation { continuation in
      |                 ^ initialization of immutable value 'addresses' was never used; consider replacing with assignment to '_' or removing it
  224 |                 var hints = addrinfo()
  225 |                 hints.ai_family = AF_UNSPEC
  226 |                 hints.ai_socktype = SOCK_STREAM


❌  (ios/MobileJarvisNative/DeepgramAPI.swift:324:27)

  322 |         
  323 |         // Request body
> 324 |         let requestBody = [
      |                           ^ heterogeneous collection literal could only be inferred to '[String : Any]'; add explicit type annotation if this is intentional
  325 |             "text": text,
  326 |             "model": selectedVoice,
  327 |             "encoding": "mp3",


❌  (ios/MobileJarvisNative/DeepgramAPI.swift:365:27)

  363 |         
  364 |         // Request body
> 365 |         let requestBody = [
      |                           ^ heterogeneous collection literal could only be inferred to '[String : Any]'; add explicit type annotation if this is intentional
  366 |             "text": text,
  367 |             "model": selectedVoice,
  368 |             "encoding": "mp3",


⚠️  (ios/MobileJarvisNative/DeepgramAPI.swift:500:11)

  498 |             let audioSession = AVAudioSession.sharedInstance()
  499 |             return audioSession.isOtherAudioPlaying == false
> 500 |         } catch {
      |           ^ 'catch' block is unreachable because no errors are thrown in 'do' block
  501 |             print("🔊 DEEPGRAM_API: Audio test failed: \(error)")
  502 |             return false
  503 |         }


⚠️  (ios/MobileJarvisNative/DeepgramSTTProvider.swift:148:25)

  146 |                         }
  147 |                         
> 148 |                         try converter.convert(to: outputBuffer, error: nil, withInputFrom: inputBlock)
      |                         ^ no calls to throwing functions occur within 'try' expression
  149 |                         self.processAudioBuffer(outputBuffer)
  150 |                     } catch {
  151 |                         print("🎤 DEEPGRAM_STT: ❌ Audio conversion error: \(error)")


⚠️  (ios/MobileJarvisNative/DeepgramSTTProvider.swift:150:23)

  148 |                         try converter.convert(to: outputBuffer, error: nil, withInputFrom: inputBlock)
  149 |                         self.processAudioBuffer(outputBuffer)
> 150 |                     } catch {
      |                       ^ 'catch' block is unreachable because no errors are thrown in 'do' block
  151 |                         print("🎤 DEEPGRAM_STT: ❌ Audio conversion error: \(error)")
  152 |                     }
  153 |                 } else {

› Preparing MobileJarvisNative » Info.plist
› Compiling MobileJarvisNative » AppDelegate.mm
    Run script build phase '[CP-User] [Hermes] Replace Hermes for the right configuration, if needed' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'hermes-engine' from project 'Pods')
    Run script build phase '[CP-User] Generate app.config for prebuilt Constants.manifest' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'EXConstants' from project 'Pods')

› 7 error(s), and 11 warning(s)

CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.