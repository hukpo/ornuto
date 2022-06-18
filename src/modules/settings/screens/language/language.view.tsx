import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { UIText } from '@/ui-kit';

export const SettingsLanguage: FC = () => {
  return (
    <View style={styles.container}>
      <UIText>Language</UIText>
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
