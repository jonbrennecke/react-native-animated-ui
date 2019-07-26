import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { SafeAreaView, View, Button, Dimensions } from 'react-native';

import { BottomSheetModal } from '@jonbrennecke/react-native-animated-ui';

import { StorybookStateWrapper } from '../storybookHelpers';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const styles = {
  flex: {
    flex: 1
  },
  centerContents: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalContents: {
    flex: 1,
    height: SCREEN_HEIGHT * 0.5,
    backgroundColor: '#fff',
    borderRadius: 35
  }
};

storiesOf('Modals', module).add('Bottom Sheet Modal', () => (
  <SafeAreaView style={styles.flex}>
    <StorybookStateWrapper
      initialState={{ showModal: false }}
      render={(getState, setState) => (
        <>
          <View style={styles.centerContents}>
            <Button title="Show Modal" onPress={() => {
              setState({ showModal: !getState().showModal })
            }} />
          </View>
          <BottomSheetModal
            isVisible={getState().showModal}
            onRequestDismissModal={() => setState({ showModal: false })}
          >
            <View style={styles.modalContents}/>
          </BottomSheetModal>
        </>
      )}
    />
  </SafeAreaView>
));
