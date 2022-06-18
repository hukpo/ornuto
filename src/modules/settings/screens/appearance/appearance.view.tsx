import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { UIText } from '@/ui-kit';

export const SettingsAppearance: FC = () => {
  return (
    <View style={styles.container}>
      <UIText>Appearance</UIText>
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
