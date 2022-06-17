import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Txt } from '@/ui-kit';

export const AuthPhone: FC = () => {
  return (
    <View style={styles.container}>
      <Txt>Auth Phone</Txt>
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
