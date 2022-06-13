import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Txt } from '@/ui-kit';

export const SettingsAppearance: FC = () => {
  return (
    <View style={styles.container}>
      <Txt>Appearance</Txt>
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
