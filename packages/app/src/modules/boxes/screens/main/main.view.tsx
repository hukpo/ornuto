import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { UIText } from '@ornuto/ui-kit';

export const BoxesMain: FC = () => {
  return (
    <View style={styles.container}>
      <UIText>Boxes Main</UIText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
