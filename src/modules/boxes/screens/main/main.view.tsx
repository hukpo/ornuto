import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Txt } from '@/ui-kit';

export const BoxesMain: FC = () => {
  return (
    <View style={styles.container}>
      <Txt>Boxes Main</Txt>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
