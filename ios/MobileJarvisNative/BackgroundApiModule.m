#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(BackgroundApiModule, RCTEventEmitter)

// Send a background request that can survive app backgrounding
RCT_EXTERN_METHOD(sendBackgroundRequest:(NSString *)requestId
                  url:(NSString *)url
                  method:(NSString *)method
                  headers:(NSDictionary *)headers
                  body:(NSString *)body
                  resolver:(RCTPromiseResolveBlock)resolver
                  rejecter:(RCTPromiseRejectBlock)rejecter)

// Get the result of a completed background request
RCT_EXTERN_METHOD(getCompletedRequest:(NSString *)requestId
                  resolver:(RCTPromiseResolveBlock)resolver
                  rejecter:(RCTPromiseRejectBlock)rejecter)

// Cancel a background request
RCT_EXTERN_METHOD(cancelBackgroundRequest:(NSString *)requestId
                  resolver:(RCTPromiseResolveBlock)resolver
                  rejecter:(RCTPromiseRejectBlock)rejecter)

// Get list of pending background requests
RCT_EXTERN_METHOD(getPendingRequests:(RCTPromiseResolveBlock)resolver
                  rejecter:(RCTPromiseRejectBlock)rejecter)

// Indicate that this module supports events
+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end