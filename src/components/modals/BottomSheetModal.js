// @flow
import React from 'react';
import { TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { BlurView } from 'react-native-blur';

import { FadeInOutAnimatedView, BottomSheetAnimatedView } from '../views';

import type { Style, Children, SFC } from '../../types';

export type BottomSheetModalProps = {
  style?: ?Style,
  children: ?Children,
  isVisible: boolean,
  onRequestDismissModal: () => void,
  onShowModalAnimationDidEnd?: () => void,
  onHideModalAnimationDidEnd?: () => void,
};

const styles = {
  absoluteFill: StyleSheet.absoluteFillObject,
  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
};

export const BottomSheetModal: SFC<BottomSheetModalProps> = (
  props: BottomSheetModalProps
) => (
  <FadeInOutAnimatedView
    isVisible={props.isVisible}
    style={[styles.absoluteFill, props.style]}
  >
    <TouchableWithoutFeedback onPress={props.onRequestDismissModal}>
      <BlurView style={styles.absoluteFill} blurType="dark" blurAmount={5} />
    </TouchableWithoutFeedback>
    <BottomSheetAnimatedView
      style={styles.bottomSheet}
      isVisible={props.isVisible}
      delay={400}
      onAnimationOutDidEnd={props.onHideModalAnimationDidEnd}
      onAnimationInDidEnd={props.onShowModalAnimationDidEnd}
    >
      {props.children}
    </BottomSheetAnimatedView>
  </FadeInOutAnimatedView>
);
