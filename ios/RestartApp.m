#import "RestartApp.h"
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>

@implementation RestartApp

RCT_EXPORT_MODULE(RestartApp);

RCT_EXPORT_METHOD(restart)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    // Get the bridge and reload
    RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:nil];
    [bridge reload];
  });
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
}

@end 