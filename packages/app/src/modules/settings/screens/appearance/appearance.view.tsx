import React from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import { useVm } from '@/hooks';
import { AppearanceVm } from './appearance.vm';
import { UIList, UIScrollView, UISpacingStyles } from '@ornuto/ui-kit';

export const SettingsAppearance = observer(() => {
  const vm = useVm(AppearanceVm);
  const { t } = useTranslation(['settings']);

  return (
    <UIScrollView style={UISpacingStyles.ps}>
      <UIList.Container>
        <UIList.Item
          title={t('nightMode')}
          onPress={vm.toggleNightMode}
          toggled={vm.nightModeToggled}
          disabled={!vm.nightModeEnabled}
        />
        <UIList.Item title={t('autoNightMode')} hasArrow onPress={vm.openAutoNightMode} />
      </UIList.Container>
    </UIScrollView>
  );
});
