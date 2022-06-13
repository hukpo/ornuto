import React, { FC } from 'react';
import { container } from 'tsyringe';
import { StyleSheet, View, Button } from 'react-native';

import { Txt } from '@/ui-kit';
import { Navigation, ScreenName } from '@/navigation';

export const SettingsMain: FC = () => {
  const navigation = container.resolve(Navigation);

  const onOpenLanguagePress = () => {
    navigation.navigate(ScreenName.SETTINGS_LANGUAGE);
  };

  return (
    <View style={styles.container}>
      <Txt>List</Txt>

      <Button title="Open language" onPress={onOpenLanguagePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
