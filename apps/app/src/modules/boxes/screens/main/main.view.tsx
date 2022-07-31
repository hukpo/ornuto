import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { UISpacing, UIText } from '@ornuto/ui-kit';

import { BoxAddFAB } from './views';
import { useController } from './main.controller';

export const BoxesMain: FC = () => {
  const c = useController();

  return (
    <>
      <View style={styles.container}>
        <UIText>Boxes Main</UIText>
      </View>

      <BoxAddFAB onPress={c.onAddPress} style={styles.fab} />
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
