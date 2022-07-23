import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { UIList, UIScrollView, UISpacingStyles } from '@ornuto/ui-kit';

import { useVm } from '@/hooks';
import { SettingsMainVm } from './main.vm';

export const SettingsMain: FC = () => {
  const vm = useVm(SettingsMainVm);
  const { t } = useTranslation(['settings']);

  return (
    <UIScrollView style={UISpacingStyles.ps}>
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

      <UIList.Container style={UISpacingStyles.mtxl}>
        <UIList.Item title={t('logOut')} titleStyle="destructive" onPress={vm.logOut} />
      </UIList.Container>
    </UIScrollView>
  );
};
