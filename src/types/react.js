// @flow
import type { ____DangerouslyImpreciseStyle_Internal } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import type {
  Element,
  ChildrenArray,
  StatelessFunctionalComponent,
} from 'react';
import { StyleSheet } from 'react-native';

// @flow
type ExtractReturnType = <R>((...any[]) => R) => R;
export type ReturnType<F> = $Call<ExtractReturnType, F>;


export type StyleObject = $Shape<____DangerouslyImpreciseStyle_Internal>;
export type Style = StyleObject | ReturnType<typeof StyleSheet.compose>;

export type SFC<P> = StatelessFunctionalComponent<P>;

export type Children = ChildrenArray<?Element<*>> | string;

export type Gesture = {
  moveX: number,
  moveY: number,
  x0: number,
  y0: number,
  dx: number,
  dy: number,
  vx: number,
  vy: number,
};
