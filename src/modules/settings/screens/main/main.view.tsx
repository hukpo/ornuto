import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView } from 'react-native';

import { List } from '@/ui-kit';
import { useVm } from '@/hooks';
import { SettingsMainVm } from './main.vm';

export const SettingsMain: FC = () => {
  const vm = useVm(SettingsMainVm);
  const { t } = useTranslation(['settings']);

  return (
    <ScrollView style={styles.container}>
      <List.Container>
        <List.Item
          title={t('appearance')}
          hasArrow
          onPress={vm.openAppearance}
          iconName="blur"
          iconBackground="#32c0fc"
        />
        <List.Item
          title={t('language')}
          hasArrow
          onPress={vm.openLanguage}
          iconName="global"
          iconBackground="#c700c7"
        />
      </List.Container>

      <List.Container style={styles.listContainer}>
        <List.Item title={t('logOut')} titleStyle="destructive" onPress={vm.logOut} />
      </List.Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // TODO Spacing
    padding: 10,
  },

  listContainer: {
    marginTop: 10,
  },
});
