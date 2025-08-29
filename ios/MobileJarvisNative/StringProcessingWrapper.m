#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(StringProcessingWrapper, NSObject)

// Safe string processing methods
RCT_EXTERN_METHOD(safeProcessString:(NSString *)input 
                  locale:(NSString *)locale
                  callback:(RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(getStringProcessingStats:(RCTResponseSenderBlock)callback)

@end