// @flow
import React, { Component } from 'react';
import { Animated } from 'react-native';

import { ScaleAnimation } from '../../animations';

import type { Style, Children } from '../../types';

type Props = {
  style?: ?Style,
  isVisible: boolean,
  children: ?Children,
  onFadeInDidComplete?: () => void,
  onFadeOutDidComplete?: () => void,
};

const styles = {
  fade: (anim: ScaleAnimation) => anim.getAnimatedStyle(),
};

export class ScaleAnimatedView extends Component<Props> {
  anim: ScaleAnimation;

  constructor(props: Props) {
    super(props);
    this.anim = new ScaleAnimation({
      start: this.props.isVisible ? 'in' : 'out',
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.isVisible && !prevProps.isVisible) {
      this.anim.animateIn(this.props.onFadeInDidComplete);
    } else if (!this.props.isVisible && prevProps.isVisible) {
      this.anim.animateOut(this.props.onFadeOutDidComplete);
    }
  }

  render() {
    return (
      <Animated.View
        style={[this.props.style, styles.fade(this.anim)]}
        pointerEvents={this.props.isVisible ? 'auto' : 'none'}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
