#import "RestartApp.h"
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@implementation RestartApp

RCT_EXPORT_MODULE(RestartApp);

RCT_EXPORT_METHOD(restart)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    UIApplication *app = [UIApplication sharedApplication];
    UIWindow *window = app.keyWindow;
    [window.rootViewController dismissViewControllerAnimated:NO completion:nil];
    [window.rootViewController.view removeFromSuperview];
    window.rootViewController = nil;
    
    id<UIApplicationDelegate> delegate = app.delegate;
    [delegate.window makeKeyAndVisible];
  });
}

@end 