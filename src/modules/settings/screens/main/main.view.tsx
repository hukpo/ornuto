import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView } from 'react-native';

import { useVm } from '@/hooks';
import { UIList } from '@/ui-kit';
import { SettingsMainVm } from './main.vm';

export const SettingsMain: FC = () => {
  const vm = useVm(SettingsMainVm);
  const { t } = useTranslation(['settings']);

  return (
    <ScrollView style={styles.container}>
      <UIList.Container>
        <UIList.Item
          title={t('appearance')}
          hasArrow
          onPress={vm.openAppearance}
          iconName="blur"
          iconBackground="#32c0fc"
        />
        <UIList.Item
          title={t('language')}
          hasArrow
          onPress={vm.openLanguage}
          iconName="global"
          iconBackground="#c700c7"
        />
      </UIList.Container>

      <UIList.Container style={styles.listContainer}>
        <UIList.Item title={t('logOut')} titleStyle="destructive" onPress={vm.logOut} />
      </UIList.Container>
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
