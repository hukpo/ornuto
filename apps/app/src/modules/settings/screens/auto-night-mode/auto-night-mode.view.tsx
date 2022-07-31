import React from 'react';
import { container } from 'tsyringe';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { UIList, UIScrollView, UISpacingStyles } from '@ornuto/ui-kit';

import { ThemeStore } from '@/stores';

export const SettingsAutoNightMode = observer(() => {
  const { t } = useTranslation(['settings']);
  const themeStore = container.resolve(ThemeStore);

  return (
    <UIScrollView style={UISpacingStyles.ps}>
      <UIList.Container>
        <UIList.Item
          title={t('system')}
          selected={themeStore.isSystemAutoNightMode}
          onPress={themeStore.selectSystemMode}
        />
        <UIList.Item
          title={t('disabled')}
          selected={themeStore.isDisabledAutoNightMode}
          onPress={themeStore.selectDisabledMode}
        />
      </UIList.Container>
    </UIScrollView>
  );
});
