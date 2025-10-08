cameronhightower@Mac Mobile_Jarvis_React_Native % eas project:info
★ eas-cli@16.20.1 is now available.
To upgrade, run:
npm install -g eas-cli
Proceeding with outdated version.


fullName  @chightower/MobileJarvisNative
ID        a1ca031e-4068-49f1-84f5-ab872bc450dc
cameronhightower@Mac Mobile_Jarvis_React_Native %   npx expo config --type introspect
env: load .env
env: export MODE EXPO_PUBLIC_PYTHON_BACKEND_URL EXPO_PUBLIC_SITE_URL EXPO_PUBLIC_SUPABASE_URL EXPO_PUBLIC_SUPABASE_ANON_KEY EXPO_PUBLIC_GOOGLE_CLIENT_ID EXPO_PUBLIC_GOOGLE_CLIENT_SECRET EXPO_PUBLIC_GOOGLE_API_KEY EXPO_PUBLIC_NOTION_CLIENT_ID EXPO_PUBLIC_NOTION_CLIENT_SECRET EXPO_PUBLIC_SLACK_CLIENT_ID EXPO_PUBLIC_SLACK_CLIENT_SECRET EXPO_PUBLIC_SLACK_APP_ID EXPO_PUBLIC_SLACK_VERIFICATION_TOKEN EXPO_PUBLIC_ZOOM_CLIENT_ID EXPO_PUBLIC_ZOOM_CLIENT_SECRET EXPO_PUBLIC_ZOOM_SECRET_TOKEN EXPO_PUBLIC_TODOIST_CLIENT_ID EXPO_PUBLIC_TODOIST_CLIENT_SECRET EXPO_PUBLIC_MICROSOFT_CLIENT_ID EXPO_PUBLIC_MICROSOFT_CLIENT_SECRET EXPO_PUBLIC_EXPIRING_RESOURCES_INTERVAL EXPO_PUBLIC_FITBIT_CLIENT_SECRET EXPO_PUBLIC_FITBIT_CLIENT_ID EXPO_PUBLIC_FITBIT_AUTHORIZATION_URI EXPO_PUBLIC_FITBIT_TOKEN_REFRESH_URI EXPO_PUBLIC_OURA_CLIENT_SECRET EXPO_PUBLIC_OURA_CLIENT_ID EXPO_PUBLIC_EPIC_MYCHART_CLIENT_SECRET EXPO_PUBLIC_EPIC_MYCHART_CLIENT_ID
» android: EDGE_TO_EDGE_PLUGIN: No configuration found for `edgeToEdgeEnabled` field in the project app config, falling back to false. In Android 16+ (targetSdkVersion 36) it will no longer be possible to disable edge-to-edge. Learn more: https://expo.fyi/edge-to-edge-rollout
» ios: paths-app-delegate: Found multiple AppDelegate file paths, using "ios/MobileJarvisNative/AppDelegate.mm". Ignored paths: ["ios/MobileJarvisNative/AppDelegate.swift"]
» ios: paths-app-delegate: Found multiple AppDelegate file paths, using "ios/MobileJarvisNative/AppDelegate.mm". Ignored paths: ["ios/MobileJarvisNative/AppDelegate.swift"]
» android: userInterfaceStyle: Install expo-system-ui in your project to enable this feature.

{
  name: 'MobileJarvisNative',
  slug: 'MobileJarvisNative',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'light',
  newArchEnabled: true,
  scheme: 'mobilejarvisnative',
  runtimeVersion: '1.0.0',
  plugins: [
    'expo-secure-store',
    './expo-plugins/withVoiceModule.js',
    'expo-health-connect',
    [
      'expo-build-properties',
      {
        android: {
          compileSdkVersion: 34,
          targetSdkVersion: 34,
          minSdkVersion: 26
        }
      }
    ]
  ],
  platforms: [
    'ios',
    'android',
    'web'
  ],
  description: undefined,
  sdkVersion: '53.0.0',
  updates: {
    url: 'https://u.expo.dev/a1ca031e-4068-49f1-84f5-ab872bc450dc'
  },
  extra: {
    GOOGLE_CLIENT_ID: '66333577628-gnnebnjk57ione1bfphjmfa1vmk9nr9a.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    GOOGLE_API_KEY: 'AIzaSyC0P7PPfeYBAgv6OW_DV3aMaNI32U93BJc',
    SUPABASE_URL: 'https://ydbabipbxxleeiiysojv.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlkYmFiaXBieHhsZWVpaXlzb2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4OTI1ODQsImV4cCI6MjA2MzQ2ODU4NH0.hwL2cayjrHmnjZKfW_f0OJVdjE_-pdchsujuKH5SG9k',
    PYTHON_BACKEND_URL: 'https://juniper-python-backend.onrender.com',
    SITE_URL: 'https://juniperassistant.com',
    NOTION_CLIENT_ID: '222d872b-594c-80db-9a5c-00377853aa51',
    NOTION_CLIENT_SECRET: 'secret_XgyaANZrcAnoJQXCOWsvf15R6p49lke8klFJkuQzYrK',
    SLACK_CLIENT_ID: '9050107148770.9105893298307',
    SLACK_CLIENT_SECRET: 'ca86f2202b23f080ae9d1f8628de62c2',
    SLACK_APP_ID: 'A0933S98S91',
    SLACK_VERIFICATION_TOKEN: 'eyZMDAcHOj9oByfmG7PxxCgy',
    ZOOM_CLIENT_ID: 'd4W9Y24uTvOgDbxx0hImw',
    ZOOM_CLIENT_SECRET: 'NH25vOqUxG5IxTZJ3mx5cdFON2LAP1G4',
    ZOOM_SECRET_TOKEN: 'vDBVbg--R4epDmrnQQ-WfA',
    TODOIST_CLIENT_ID: 'cf83b24000f44e6999270f22471056d5',
    TODOIST_CLIENT_SECRET: 'bb084dc4f46d40e3b572d2948e4b519f',
    MICROSOFT_CLIENT_ID: 'a3a06c40-dc9b-4c39-a67b-4c32656b4f38',
    MICROSOFT_CLIENT_SECRET: 'x8s8Q~gmR9r-IhYayC6v3J75uNVgKPl0kXCoDdAF',
    FITBIT_CLIENT_ID: '23QLV9',
    FITBIT_CLIENT_SECRET: '5b3ce229752db484f601d701d290dd4b',
    OURA_CLIENT_ID: 'SGW3BCR2G4WT7MPL',
    OURA_CLIENT_SECRET: 'LCEPWZYWX7PAMIN6JBAMYIFGTQFPPPWH',
    EXPIRING_RESOURCES_INTERVAL: '1',
    EXPO_PUBLIC_EPIC_MYCHART_CLIENT_SECRET: 'u4Gr6egEGEpjM6hhz+v4iRe8a3bb9GYHfpaLZZ1BJHA9lbe8W9ft9jL6jKkoiP6DEz3oEshPWedpI+1kVHqx6g==',
    EXPO_PUBLIC_EPIC_MYCHART_CLIENT_ID: '683e1f54-0f02-476d-8850-142b90cb97af',
    eas: {
      projectId: 'a1ca031e-4068-49f1-84f5-ab872bc450dc'
    }
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.hightowerai.MobileJarvisNative',
    infoPlist: {
      CADisableMinimumFrameDurationOnPhone: true,
      CFBundleDevelopmentRegion: '$(DEVELOPMENT_LANGUAGE)',
      CFBundleExecutable: '$(EXECUTABLE_NAME)',
      CFBundleIdentifier: '$(PRODUCT_BUNDLE_IDENTIFIER)',
      CFBundleInfoDictionaryVersion: '6.0',
      CFBundleName: '$(PRODUCT_NAME)',
      CFBundlePackageType: '$(PRODUCT_BUNDLE_PACKAGE_TYPE)',
      CFBundleShortVersionString: '1.0.0',
      CFBundleSignature: '????',
      CFBundleURLTypes: [
        {
          CFBundleURLSchemes: [
            'mobilejarvisnative',
            'com.hightowerai.MobileJarvisNative'
          ]
        }
      ],
      CFBundleVersion: '1',
      LSMinimumSystemVersion: '12.0',
      LSRequiresIPhoneOS: true,
      NSFaceIDUsageDescription: 'Allow $(PRODUCT_NAME) to access your Face ID biometric data.',
      NSSpeechRecognitionUsageDescription: 'This app uses speech recognition to convert your voice to text for voice conversations.',
      NSMicrophoneUsageDescription: 'This app needs microphone access to record your voice for speech recognition.',
      NSPhotoLibraryUsageDescription: 'This app may access your photo library to allow you to share images in conversations or attach photos to your requests.',
      NSHealthShareUsageDescription: 'Allow Juniper to read your health data to provide personalized health insights and track your wellness goals.',
      NSHealthUpdateUsageDescription: 'Allow Juniper to write health data to keep your health information synchronized across apps.',
      UILaunchStoryboardName: 'SplashScreen',
      UIRequiredDeviceCapabilities: [
        'healthkit'
      ],
      UIRequiresFullScreen: false,
      UIStatusBarStyle: 'UIStatusBarStyleDefault',
      UISupportedInterfaceOrientations: [
        'UIInterfaceOrientationPortrait',
        'UIInterfaceOrientationPortraitUpsideDown'
      ],
      'UISupportedInterfaceOrientations~ipad': [
        'UIInterfaceOrientationPortrait',
        'UIInterfaceOrientationPortraitUpsideDown',
        'UIInterfaceOrientationLandscapeLeft',
        'UIInterfaceOrientationLandscapeRight'
      ],
      UIViewControllerBasedStatusBarAppearance: false,
      UIBackgroundModes: [
        'fetch',
        'processing'
      ],
      BGTaskSchedulerPermittedIdentifiers: [
        'com.hightowerai.MobileJarvisNative.refresh',
        'com.hightowerai.MobileJarvisNative.processing'
      ],
      CFBundleDisplayName: 'MobileJarvisNative',
      NSCameraUsageDescription: 'Allow $(PRODUCT_NAME) to access your camera',
      UIUserInterfaceStyle: 'Light',
      NSAppTransportSecurity: {
        NSAllowsArbitraryLoads: false,
        NSAllowsLocalNetworking: true
      }
    },
    entitlements: {
      'com.apple.developer.healthkit': true
    }
  },
  android: {
    package: 'com.hightowerai.MobileJarvisNative',
    permissions: [
      'android.permission.health.READ_STEPS',
      'android.permission.health.WRITE_STEPS',
      'android.permission.health.READ_HEART_RATE',
      'android.permission.health.WRITE_HEART_RATE',
      'android.permission.health.READ_ACTIVE_CALORIES_BURNED',
      'android.permission.health.WRITE_ACTIVE_CALORIES_BURNED',
      'android.permission.health.READ_DISTANCE',
      'android.permission.health.WRITE_DISTANCE',
      'android.permission.health.READ_WEIGHT',
      'android.permission.health.WRITE_WEIGHT',
      'android.permission.health.READ_HEIGHT',
      'android.permission.health.WRITE_HEIGHT',
      'android.permission.health.READ_SLEEP',
      'android.permission.health.WRITE_SLEEP',
      'android.permission.health.READ_BLOOD_PRESSURE',
      'android.permission.health.WRITE_BLOOD_PRESSURE',
      'android.permission.health.READ_EXERCISE',
      'android.permission.health.WRITE_EXERCISE',
      'android.permission.health.READ_NUTRITION',
      'android.permission.health.WRITE_NUTRITION',
      'android.permission.health.READ_BODY_TEMPERATURE',
      'android.permission.health.WRITE_BODY_TEMPERATURE',
      'android.permission.health.READ_BLOOD_GLUCOSE',
      'android.permission.health.WRITE_BLOOD_GLUCOSE',
      'android.permission.health.READ_OXYGEN_SATURATION',
      'android.permission.health.WRITE_OXYGEN_SATURATION',
      'android.permission.health.READ_HYDRATION',
      'android.permission.health.WRITE_HYDRATION',
      'android.permission.health.READ_BODY_FAT',
      'android.permission.health.WRITE_BODY_FAT',
      'android.permission.health.READ_BASAL_METABOLIC_RATE',
      'android.permission.health.WRITE_BASAL_METABOLIC_RATE',
      'android.permission.health.READ_RESTING_HEART_RATE',
      'android.permission.health.WRITE_RESTING_HEART_RATE',
      'android.permission.health.READ_RESPIRATORY_RATE',
      'android.permission.health.WRITE_RESPIRATORY_RATE',
      'android.permission.health.READ_MENSTRUATION',
      'android.permission.health.WRITE_MENSTRUATION',
      'android.permission.RECORD_AUDIO',
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.WRITE_EXTERNAL_STORAGE',
      'android.permission.INTERNET'
    ],
    adaptiveIcon: {
      backgroundColor: '#ffffff'
    }
  },
  _internal: {
    isDebug: false,
    projectRoot: '/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native',
    dynamicConfigPath: '/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/app.config.js',
    staticConfigPath: '/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/app.json',
    packageJsonPath: '/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/package.json',
    autolinkedModules: [
      'expo',
      'expo-asset',
      'expo-constants',
      'expo-eas-client',
      'expo-file-system',
      'expo-font',
      'expo-health-connect',
      'expo-image-loader',
      'expo-image-picker',
      'expo-json-utils',
      'expo-keep-awake',
      'expo-manifests',
      'expo-modules-core',
      'expo-secure-store',
      'expo-structured-headers',
      'expo-updates',
      'expo-updates-interface'
    ],
    pluginHistory: {
      'expo-secure-store': {
        name: 'expo-secure-store',
        version: '14.2.4'
      },
      'expo-health-connect': {
        name: 'expo-health-connect',
        version: '0.1.1'
      },
      'react-native-maps': {
        name: 'react-native-maps',
        version: 'UNVERSIONED'
      },
      'expo-ads-admob': {
        name: 'expo-ads-admob',
        version: 'UNVERSIONED'
      },
      'expo-apple-authentication': {
        name: 'expo-apple-authentication',
        version: 'UNVERSIONED'
      },
      'expo-contacts': {
        name: 'expo-contacts',
        version: 'UNVERSIONED'
      },
      'expo-notifications': {
        name: 'expo-notifications',
        version: 'UNVERSIONED'
      },
      'expo-updates': {
        name: 'expo-updates',
        version: '0.28.17'
      },
      'expo-document-picker': {
        name: 'expo-document-picker',
        version: 'UNVERSIONED'
      },
      'expo-system-ui': {
        name: 'expo-system-ui',
        version: 'UNVERSIONED'
      },
      'expo-splash-screen': {
        name: 'expo-splash-screen',
        version: 'UNVERSIONED'
      },
      'expo-navigation-bar': {
        name: 'expo-navigation-bar',
        version: 'UNVERSIONED'
      },
      'expo-image-picker': {
        name: 'expo-image-picker',
        version: '16.1.4'
      },
      'expo-file-system': {
        name: 'expo-file-system',
        version: '18.1.11'
      }
    },
    modResults: {
      ios: {
        infoPlist: {
          CADisableMinimumFrameDurationOnPhone: true,
          CFBundleDevelopmentRegion: '$(DEVELOPMENT_LANGUAGE)',
          CFBundleExecutable: '$(EXECUTABLE_NAME)',
          CFBundleIdentifier: '$(PRODUCT_BUNDLE_IDENTIFIER)',
          CFBundleInfoDictionaryVersion: '6.0',
          CFBundleName: '$(PRODUCT_NAME)',
          CFBundlePackageType: '$(PRODUCT_BUNDLE_PACKAGE_TYPE)',
          CFBundleShortVersionString: '1.0.0',
          CFBundleSignature: '????',
          CFBundleURLTypes: [
            {
              CFBundleURLSchemes: [
                'mobilejarvisnative',
                'com.hightowerai.MobileJarvisNative'
              ]
            }
          ],
          CFBundleVersion: '1',
          LSMinimumSystemVersion: '12.0',
          LSRequiresIPhoneOS: true,
          NSFaceIDUsageDescription: 'Allow $(PRODUCT_NAME) to access your Face ID biometric data.',
          NSSpeechRecognitionUsageDescription: 'This app uses speech recognition to convert your voice to text for voice conversations.',
          NSMicrophoneUsageDescription: 'This app needs microphone access to record your voice for speech recognition.',
          NSPhotoLibraryUsageDescription: 'This app may access your photo library to allow you to share images in conversations or attach photos to your requests.',
          NSHealthShareUsageDescription: 'Allow Juniper to read your health data to provide personalized health insights and track your wellness goals.',
          NSHealthUpdateUsageDescription: 'Allow Juniper to write health data to keep your health information synchronized across apps.',
          UILaunchStoryboardName: 'SplashScreen',
          UIRequiredDeviceCapabilities: [
            'healthkit'
          ],
          UIRequiresFullScreen: false,
          UIStatusBarStyle: 'UIStatusBarStyleDefault',
          UISupportedInterfaceOrientations: [
            'UIInterfaceOrientationPortrait',
            'UIInterfaceOrientationPortraitUpsideDown'
          ],
          'UISupportedInterfaceOrientations~ipad': [
            'UIInterfaceOrientationPortrait',
            'UIInterfaceOrientationPortraitUpsideDown',
            'UIInterfaceOrientationLandscapeLeft',
            'UIInterfaceOrientationLandscapeRight'
          ],
          UIViewControllerBasedStatusBarAppearance: false,
          UIBackgroundModes: [
            'fetch',
            'processing'
          ],
          BGTaskSchedulerPermittedIdentifiers: [
            'com.hightowerai.MobileJarvisNative.refresh',
            'com.hightowerai.MobileJarvisNative.processing'
          ],
          CFBundleDisplayName: 'MobileJarvisNative',
          NSCameraUsageDescription: 'Allow $(PRODUCT_NAME) to access your camera',
          UIUserInterfaceStyle: 'Light',
          NSAppTransportSecurity: {
            NSAllowsArbitraryLoads: false,
            NSAllowsLocalNetworking: true
          }
        },
        podfileProperties: {
          'expo.jsEngine': 'hermes',
          EX_DEV_CLIENT_NETWORK_INSPECTOR: 'true',
          newArchEnabled: 'true',
          'apple.privacyManifestAggregationEnabled': 'true'
        },
        entitlements: {
          'com.apple.developer.healthkit': true
        },
        expoPlist: {
          EXUpdatesCheckOnLaunch: 'ALWAYS',
          EXUpdatesEnabled: true,
          EXUpdatesLaunchWaitMs: 0,
          EXUpdatesURL: 'https://u.expo.dev/a1ca031e-4068-49f1-84f5-ab872bc450dc',
          EXUpdatesRuntimeVersion: '1.0.0'
        },
        splashScreenStoryboard: {
          document: {
            '$': {
              type: 'com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB',
              version: '3.0',
              toolsVersion: '32700.99.1234',
              targetRuntime: 'iOS.CocoaTouch',
              propertyAccessControl: 'none',
              useAutolayout: 'YES',
              launchScreen: 'YES',
              useTraitCollections: 'YES',
              useSafeAreas: 'YES',
              colorMatched: 'YES',
              initialViewController: 'EXPO-VIEWCONTROLLER-1'
            },
            device: [
              {
                '$': {
                  id: 'retina6_12',
                  orientation: 'portrait',
                  appearance: 'light'
                }
              }
            ],
            dependencies: [
              {
                deployment: [
                  {
                    '$': {
                      identifier: 'iOS'
                    }
                  }
                ],
                plugIn: [
                  {
                    '$': {
                      identifier: 'com.apple.InterfaceBuilder.IBCocoaTouchPlugin',
                      version: '22685'
                    }
                  }
                ],
                capability: [
                  {
                    '$': {
                      name: 'Named colors',
                      minToolsVersion: '9.0'
                    }
                  },
                  {
                    '$': {
                      name: 'Safe area layout guides',
                      minToolsVersion: '9.0'
                    }
                  },
                  {
                    '$': {
                      name: 'documents saved in the Xcode 8 format',
                      minToolsVersion: '8.0'
                    }
                  }
                ]
              }
            ],
            scenes: [
              {
                scene: [
                  {
                    '$': {
                      sceneID: 'EXPO-SCENE-1'
                    },
                    objects: [
                      {
                        viewController: [
                          {
                            '$': {
                              storyboardIdentifier: 'SplashScreenViewController',
                              id: 'EXPO-VIEWCONTROLLER-1',
                              sceneMemberID: 'viewController'
                            },
                            view: [
                              {
                                '$': {
                                  key: 'view',
                                  userInteractionEnabled: 'NO',
                                  contentMode: 'scaleToFill',
                                  insetsLayoutMarginsFromSafeArea: 'NO',
                                  id: 'EXPO-ContainerView',
                                  userLabel: 'ContainerView'
                                },
                                rect: [
                                  {
                                    '$': {
                                      key: 'frame',
                                      x: '0.0',
                                      y: '0.0',
                                      width: '393',
                                      height: '852'
                                    }
                                  }
                                ],
                                autoresizingMask: [
                                  {
                                    '$': {
                                      key: 'autoresizingMask',
                                      flexibleMaxX: 'YES',
                                      flexibleMaxY: 'YES'
                                    }
                                  }
                                ],
                                subviews: [
                                  {
                                    imageView: []
                                  }
                                ],
                                color: [
                                  {
                                    '$': {
                                      key: 'backgroundColor',
                                      name: 'SplashScreenBackground'
                                    }
                                  }
                                ],
                                viewLayoutGuide: [
                                  {
                                    '$': {
                                      key: 'safeArea',
                                      id: 'Rmq-lb-GrQ'
                                    }
                                  }
                                ],
                                constraints: [
                                  {
                                    constraint: [
                                      {
                                        '$': {
                                          firstItem: 'EXPO-SplashScreen',
                                          firstAttribute: 'centerY',
                                          secondItem: 'EXPO-ContainerView',
                                          secondAttribute: 'centerY',
                                          id: '0VC-Wk-OaO'
                                        }
                                      },
                                      {
                                        '$': {
                                          firstItem: 'EXPO-SplashScreen',
                                          firstAttribute: 'centerX',
                                          secondItem: 'EXPO-ContainerView',
                                          secondAttribute: 'centerX',
                                          id: 'zR4-NK-mVN'
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ],
                        placeholder: [
                          {
                            '$': {
                              placeholderIdentifier: 'IBFirstResponder',
                              id: 'EXPO-PLACEHOLDER-1',
                              userLabel: 'First Responder',
                              sceneMemberID: 'firstResponder'
                            }
                          }
                        ]
                      }
                    ],
                    point: [
                      {
                        '$': {
                          key: 'canvasLocation',
                          x: '0.0',
                          y: '0.0'
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            resources: [
              {
                image: [
                  {
                    '$': {
                      name: 'SplashScreenLogo',
                      width: '100',
                      height: '90.333335876464844'
                    }
                  }
                ],
                namedColor: [
                  {
                    '$': {
                      name: 'SplashScreenBackground'
                    },
                    color: [
                      {
                        '$': {
                          red: '1',
                          green: '1',
                          blue: '1',
                          alpha: '1',
                          colorSpace: 'custom',
                          customColorSpace: 'sRGB'
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      },
      android: {
        gradleProperties: [
          {
            type: 'comment',
            value: 'Project-wide Gradle settings.'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'IDE (e.g. Android Studio) users:'
          },
          {
            type: 'comment',
            value: 'Gradle settings configured through the IDE *will override*'
          },
          {
            type: 'comment',
            value: 'any settings specified in this file.'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'For more details on how to configure your build environment visit'
          },
          {
            type: 'comment',
            value: 'http://www.gradle.org/docs/current/userguide/build_environment.html'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Specifies the JVM arguments used for the daemon process.'
          },
          {
            type: 'comment',
            value: 'The setting is particularly useful for tweaking memory settings.'
          },
          {
            type: 'comment',
            value: 'Default value: -Xmx512m -XX:MaxMetaspaceSize=256m'
          },
          {
            type: 'property',
            key: 'org.gradle.jvmargs',
            value: '-Xmx2048m -XX:MaxMetaspaceSize=512m'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'When configured, Gradle will run in incubating parallel mode.'
          },
          {
            type: 'comment',
            value: 'This option should only be used with decoupled projects. More details, visit'
          },
          {
            type: 'comment',
            value: 'http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects'
          },
          {
            type: 'comment',
            value: 'org.gradle.parallel=true'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'AndroidX package structure to make it clearer which packages are bundled with the'
          },
          {
            type: 'comment',
            value: "Android operating system, and which are packaged with your app's APK"
          },
          {
            type: 'comment',
            value: 'https://developer.android.com/topic/libraries/support-library/androidx-rn'
          },
          {
            type: 'property',
            key: 'android.useAndroidX',
            value: 'true'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Enable AAPT2 PNG crunching'
          },
          {
            type: 'property',
            key: 'android.enablePngCrunchInReleaseBuilds',
            value: 'true'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Use this property to specify which architecture you want to build.'
          },
          {
            type: 'comment',
            value: 'You can also override it from the CLI using'
          },
          {
            type: 'comment',
            value: './gradlew <task> -PreactNativeArchitectures=x86_64'
          },
          {
            type: 'property',
            key: 'reactNativeArchitectures',
            value: 'armeabi-v7a,arm64-v8a,x86,x86_64'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Use this property to enable support to the new architecture.'
          },
          {
            type: 'comment',
            value: 'This will allow you to use TurboModules and the Fabric render in'
          },
          {
            type: 'comment',
            value: 'your application. You should enable this flag either if you want'
          },
          {
            type: 'comment',
            value: 'to write custom TurboModules/Fabric components OR use libraries that'
          },
          {
            type: 'comment',
            value: 'are providing them.'
          },
          {
            type: 'property',
            key: 'newArchEnabled',
            value: 'true'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Use this property to enable or disable the Hermes JS engine.'
          },
          {
            type: 'comment',
            value: 'If set to false, you will be using JSC instead.'
          },
          {
            type: 'property',
            key: 'hermesEnabled',
            value: 'true'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Enable GIF support in React Native images (~200 B increase)'
          },
          {
            type: 'property',
            key: 'expo.gif.enabled',
            value: 'true'
          },
          {
            type: 'comment',
            value: 'Enable webp support in React Native images (~85 KB increase)'
          },
          {
            type: 'property',
            key: 'expo.webp.enabled',
            value: 'true'
          },
          {
            type: 'comment',
            value: 'Enable animated webp support (~3.4 MB increase)'
          },
          {
            type: 'comment',
            value: "Disabled by default because iOS doesn't support animated webp"
          },
          {
            type: 'property',
            key: 'expo.webp.animated',
            value: 'false'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Enable network inspector'
          },
          {
            type: 'property',
            key: 'EX_DEV_CLIENT_NETWORK_INSPECTOR',
            value: 'true'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Use legacy packaging to compress native libraries in the resulting APK.'
          },
          {
            type: 'property',
            key: 'expo.useLegacyPackaging',
            value: 'false'
          },
          {
            type: 'empty'
          },
          {
            type: 'empty'
          },
          {
            type: 'comment',
            value: 'Set minimum SDK version to 26 for Health Connect compatibility'
          },
          {
            type: 'property',
            key: 'android.minSdkVersion',
            value: '26'
          },
          {
            type: 'comment',
            value: 'Whether the app is configured to use edge-to-edge via the app config or `react-native-edge-to-edge` plugin'
          },
          {
            type: 'property',
            key: 'expo.edgeToEdgeEnabled',
            value: 'false'
          },
          {
            type: 'property',
            key: 'android.compileSdkVersion',
            value: '34'
          },
          {
            type: 'property',
            key: 'android.targetSdkVersion',
            value: '34'
          }
        ],
        manifest: {
          manifest: {
            '$': {
              'xmlns:android': 'http://schemas.android.com/apk/res/android',
              'xmlns:tools': 'http://schemas.android.com/tools'
            },
            'uses-permission': [
              {
                '$': {
                  'android:name': 'android.permission.ACCESS_NETWORK_STATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.CAMERA'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.FOREGROUND_SERVICE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.FOREGROUND_SERVICE_MICROPHONE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.GET_ACCOUNTS'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.INTERNET'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.READ_EXTERNAL_STORAGE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.RECORD_AUDIO'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.REORDER_TASKS'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.SYSTEM_ALERT_WINDOW'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.USE_CREDENTIALS'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.VIBRATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.WRITE_EXTERNAL_STORAGE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_ACTIVE_CALORIES_BURNED'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_BASAL_METABOLIC_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_BLOOD_GLUCOSE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_BLOOD_PRESSURE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_BODY_FAT'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_BODY_TEMPERATURE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_DISTANCE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_EXERCISE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_HEART_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_HEIGHT'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_HYDRATION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_MENSTRUATION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_NUTRITION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_OXYGEN_SATURATION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_RESPIRATORY_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_RESTING_HEART_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_SLEEP'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_STEPS'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_WEIGHT'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_ACTIVE_CALORIES_BURNED'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_BASAL_METABOLIC_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_BLOOD_GLUCOSE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_BLOOD_PRESSURE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_BODY_FAT'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_BODY_TEMPERATURE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_DISTANCE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_EXERCISE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_HEART_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_HEIGHT'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_HYDRATION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_MENSTRUATION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_NUTRITION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_OXYGEN_SATURATION'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_RESPIRATORY_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_RESTING_HEART_RATE'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_SLEEP'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_STEPS'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.WRITE_WEIGHT'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_TOTAL_CALORIES_BURNED'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_HEART_RATE_VARIABILITY'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_VO2_MAX'
                }
              },
              {
                '$': {
                  'android:name': 'android.permission.health.READ_FLOORS_CLIMBED'
                }
              }
            ],
            queries: [
              {
                package: [
                  {
                    '$': {
                      'android:name': 'com.google.android.apps.healthdata'
                    }
                  }
                ],
                intent: [
                  {
                    action: [
                      {
                        '$': {
                          'android:name': 'android.intent.action.VIEW'
                        }
                      }
                    ],
                    category: [
                      {
                        '$': {
                          'android:name': 'android.intent.category.BROWSABLE'
                        }
                      }
                    ],
                    data: [
                      {
                        '$': {
                          'android:scheme': 'https'
                        }
                      }
                    ]
                  }
                ]
              }
            ],
            application: [
              {
                '$': {
                  'android:name': '.MainApplication',
                  'android:label': '@string/app_name',
                  'android:icon': '@mipmap/ic_launcher',
                  'android:roundIcon': '@mipmap/ic_launcher_round',
                  'android:allowBackup': 'true',
                  'android:theme': '@style/AppTheme',
                  'android:networkSecurityConfig': '@xml/network_security_config',
                  'android:fullBackupContent': '@xml/secure_store_backup_rules',
                  'android:dataExtractionRules': '@xml/secure_store_data_extraction_rules'
                },
                'meta-data': [
                  {
                    '$': {
                      'android:name': 'expo.modules.updates.ENABLED',
                      'android:value': 'true'
                    }
                  },
                  {
                    '$': {
                      'android:name': 'expo.modules.updates.EXPO_UPDATES_CHECK_ON_LAUNCH',
                      'android:value': 'ALWAYS'
                    }
                  },
                  {
                    '$': {
                      'android:name': 'expo.modules.updates.EXPO_UPDATES_LAUNCH_WAIT_MS',
                      'android:value': '0'
                    }
                  },
                  {
                    '$': {
                      'android:name': 'expo.modules.updates.EXPO_UPDATE_URL',
                      'android:value': 'https://u.expo.dev/a1ca031e-4068-49f1-84f5-ab872bc450dc'
                    }
                  },
                  {
                    '$': {
                      'android:name': 'expo.modules.updates.EXPO_RUNTIME_VERSION',
                      'android:value': '@string/expo_runtime_version'
                    }
                  }
                ],
                service: [
                  {
                    '$': {
                      'android:name': '.wakeword.WakeWordService',
                      'android:enabled': 'true',
                      'android:exported': 'false',
                      'android:foregroundServiceType': 'microphone'
                    }
                  }
                ],
                activity: [
                  {
                    '$': {
                      'android:name': '.PermissionsRationaleActivity',
                      'android:exported': 'true'
                    },
                    'intent-filter': [
                      {
                        action: [
                          {
                            '$': {
                              'android:name': 'androidx.health.ACTION_SHOW_PERMISSIONS_RATIONALE'
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    '$': {
                      'android:name': '.MainActivity',
                      'android:configChanges': 'keyboard|keyboardHidden|orientation|screenSize|screenLayout|uiMode',
                      'android:launchMode': 'singleTask',
                      'android:windowSoftInputMode': 'adjustResize',
                      'android:theme': '@style/Theme.App.SplashScreen',
                      'android:exported': 'true',
                      'android:screenOrientation': 'portrait'
                    },
                    'intent-filter': [
                      {
                        action: [
                          {
                            '$': {
                              'android:name': 'android.intent.action.MAIN'
                            }
                          }
                        ],
                        category: [
                          {
                            '$': {
                              'android:name': 'android.intent.category.LAUNCHER'
                            }
                          }
                        ]
                      },
                      {
                        action: [
                          {
                            '$': {
                              'android:name': 'android.intent.action.VIEW'
                            }
                          }
                        ],
                        category: [
                          {
                            '$': {
                              'android:name': 'android.intent.category.DEFAULT'
                            }
                          },
                          {
                            '$': {
                              'android:name': 'android.intent.category.BROWSABLE'
                            }
                          }
                        ],
                        data: [
                          {
                            '$': {
                              'android:scheme': 'com.hightowerai.MobileJarvisNative'
                            }
                          },
                          {
                            '$': {
                              'android:scheme': 'exp+mobilejarvisnative'
                            }
                          },
                          {
                            '$': {
                              'android:scheme': 'mobilejarvisnative'
                            }
                          }
                        ]
                      },
                      {
                        '$': {
                          'android:autoVerify': 'true'
                        },
                        action: [
                          {
                            '$': {
                              'android:name': 'android.intent.action.VIEW'
                            }
                          }
                        ],
                        category: [
                          {
                            '$': {
                              'android:name': 'android.intent.category.DEFAULT'
                            }
                          },
                          {
                            '$': {
                              'android:name': 'android.intent.category.BROWSABLE'
                            }
                          }
                        ],
                        data: [
                          {
                            '$': {
                              'android:scheme': 'https',
                              'android:host': 'juniperassistant.com',
                              'android:pathPrefix': '/oauth/'
                            }
                          },
                          {
                            '$': {
                              'android:scheme': 'mobilejarvisnative'
                            }
                          }
                        ]
                      },
                      {
                        action: [
                          {
                            '$': {
                              'android:name': 'androidx.health.ACTION_SHOW_PERMISSIONS_RATIONALE'
                            }
                          }
                        ]
                      }
                    ]
                  },
                  {
                    '$': {
                      'android:name': 'com.facebook.react.devsupport.DevSettingsActivity',
                      'android:exported': 'false'
                    }
                  }
                ],
                'activity-alias': [
                  {
                    '$': {
                      'android:name': 'ViewPermissionUsageActivity',
                      'android:exported': 'true',
                      'android:targetActivity': '.PermissionsRationaleActivity',
                      'android:permission': 'android.permission.START_VIEW_PERMISSION_USAGE'
                    },
                    'intent-filter': [
                      {
                        action: [
                          {
                            '$': {
                              'android:name': 'android.intent.action.VIEW_PERMISSION_USAGE'
                            }
                          }
                        ],
                        category: [
                          {
                            '$': {
                              'android:name': 'android.intent.category.HEALTH_PERMISSIONS'
                            }
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        styles: {
          resources: {
            '$': {
              'xmlns:tools': 'http://schemas.android.com/tools'
            },
            style: [
              {
                '$': {
                  name: 'AppTheme',
                  parent: 'Theme.AppCompat.Light.NoActionBar'
                },
                item: [
                  {
                    _: '@android:color/black',
                    '$': {
                      name: 'android:textColor'
                    }
                  },
                  {
                    _: '@style/ResetEditText',
                    '$': {
                      name: 'android:editTextStyle'
                    }
                  },
                  {
                    _: '@drawable/rn_edit_text_material',
                    '$': {
                      name: 'android:editTextBackground'
                    }
                  },
                  {
                    _: '@color/colorPrimary',
                    '$': {
                      name: 'colorPrimary'
                    }
                  },
                  {
                    _: '@color/colorPrimaryDark',
                    '$': {
                      name: 'colorPrimaryDark'
                    }
                  },
                  {
                    _: 'true',
                    '$': {
                      name: 'android:windowOptOutEdgeToEdgeEnforcement',
                      'tools:targetApi': '35'
                    }
                  },
                  {
                    '$': {
                      name: 'android:statusBarColor'
                    },
                    _: '#ffffff'
                  }
                ]
              },
              {
                '$': {
                  name: 'ResetEditText',
                  parent: '@android:style/Widget.EditText'
                },
                item: [
                  {
                    _: '0dp',
                    '$': {
                      name: 'android:padding'
                    }
                  },
                  {
                    _: '#c8c8c8',
                    '$': {
                      name: 'android:textColorHint'
                    }
                  },
                  {
                    _: '@android:color/black',
                    '$': {
                      name: 'android:textColor'
                    }
                  }
                ]
              },
              {
                '$': {
                  name: 'Theme.App.SplashScreen',
                  parent: 'AppTheme'
                },
                item: [
                  {
                    '$': {
                      name: 'android:windowBackground'
                    },
                    _: '@drawable/ic_launcher_background'
                  }
                ]
              }
            ]
          }
        },
        colors: {
          resources: {
            color: [
              {
                _: '#ffffff',
                '$': {
                  name: 'splashscreen_background'
                }
              },
              {
                _: '#ffffff',
                '$': {
                  name: 'iconBackground'
                }
              },
              {
                _: '#023c69',
                '$': {
                  name: 'colorPrimary'
                }
              },
              {
                _: '#ffffff',
                '$': {
                  name: 'colorPrimaryDark'
                }
              }
            ]
          }
        },
        strings: {
          resources: {
            string: [
              {
                '$': {
                  name: 'app_name'
                },
                _: 'MobileJarvisNative'
              },
              {
                _: 'contain',
                '$': {
                  name: 'expo_splash_screen_resize_mode',
                  translatable: 'false'
                }
              },
              {
                _: 'false',
                '$': {
                  name: 'expo_splash_screen_status_bar_translucent',
                  translatable: 'false'
                }
              },
              {
                '$': {
                  name: 'expo_runtime_version'
                },
                _: '1.0.0'
              }
            ]
          }
        },
        colorsNight: {
          resources: {}
        }
      }
    }
  },
  mods: {
    ios: {
      infoPlist: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      podfileProperties: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      entitlements: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      expoPlist: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      splashScreenStoryboard: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      }
    },
    android: {
      manifest: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      gradleProperties: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      styles: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      colors: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      strings: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      },
      colorsNight: [AsyncFunction: interceptingMod] {
        isProvider: true,
        isIntrospective: true
      }
    }
  },
  androidStatusBar: {
    backgroundColor: '#ffffff'
  }
}

cameronhightower@Mac Mobile_Jarvis_React_Native % 

✔ Uploading assets skipped - no new assets found
ℹ 39 iOS assets, 39 Android assets (maximum: 2000 total per update). Learn more about asset limits: https://expo.fyi/eas-update-asset-limits
⌛️ Computing the project fingerprints is taking longer than expected...
⏩ To skip this step, set the environment variable: EAS_SKIP_AUTO_FINGERPRINT=1
✔ Computed project fingerprints
✔ Published!

Branch             preview
Runtime version    1.0.0
Platform           android, ios
Update group ID    ddf2802c-7abb-40bb-b123-227bbe7e9f72
Android update ID  95c1a3a0-77d2-4573-8896-fbed0e97c123
iOS update ID      28c776c9-9af8-4cb6-97f8-d9241ae1e889
Message            Initial test update
Commit             ebfb614492d55152cd20686e2d10b750ddec1408*
EAS Dashboard      https://expo.dev/accounts/chightower/projects/MobileJarvisNative/updates/ddf2802c-7abb-40bb-b123-227bbe7e9f72

No compatible builds found for the following fingerprints:
    iOS fingerprint:  4d616b6a361e93967ce709f749af847f894d97c2
    URL            :  https://expo.dev/accounts/chightower/projects/MobileJarvisNative/fingerprints/4d616b6a361e93967ce709f749af847f894d97c2

    Android fingerprint:  937058aaaf288acae6666e0a0cc18272469dab02
    URL                :  https://expo.dev/accounts/chightower/projects/MobileJarvisNative/fingerprints/937058aaaf288acae6666e0a0cc18272469dab02