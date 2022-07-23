import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { UISpacing, UIText } from '@ornuto/ui-kit';

import { BoxAddFAB } from './views';

export const BoxesMain: FC = () => {
  return (
    <>
      <View style={styles.container}>
        <UIText>Boxes Main</UIText>
      </View>

      <BoxAddFAB onPress={() => {}} style={styles.fab} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fab: {
    right: UISpacing.S,
    bottom: UISpacing.S,
    position: 'absolute',
  },
});
