import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Txt } from '@/ui-kit';

export const SettingsLanguage: FC = () => {
  return (
    <View style={styles.container}>
      <Txt>Language</Txt>
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
