import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { UIText } from '@/ui-kit';

export const AuthPhone: FC = () => {
  return (
    <View style={styles.container}>
      <UIText>Auth Phone</UIText>
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
