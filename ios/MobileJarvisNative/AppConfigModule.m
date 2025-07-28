//
//  AppConfigModule.m
//  MobileJarvisNative
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AppConfigModule, NSObject)

// Server API Configuration
RCT_EXTERN_METHOD(getServerApiConfig:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

RCT_EXTERN_METHOD(updateServerApiConfig:(NSString *)baseUrl
                  apiEndpoint:(NSString *)apiEndpoint
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

// Full App Configuration
RCT_EXTERN_METHOD(getAppConfig:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

@end