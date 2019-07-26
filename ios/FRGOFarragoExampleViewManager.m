#import "FRGOFarragoExampleViewManager.h"
#import "HSAnimatedUI-Swift.h"

@implementation FRGOFarragoExampleViewManager

- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

- (UIView *)view {
  FRGOFarragoExampleView *exampleView = [[FRGOFarragoExampleView alloc] init];
  return (UIView *)exampleView;
}

@end
