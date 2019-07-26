import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import { FarragoExampleView } from '@jonbrennecke/react-native-animated-ui';

storiesOf('Example', module).add('Hello world', () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <FarragoExampleView />
  </View>
));
