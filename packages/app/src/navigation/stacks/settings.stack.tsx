import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useUI } from '@ornuto/ui-kit';
import { SettingsMain } from '@/modules';
import { ScreenName } from '../constants';

const { Navigator, Screen } = createNativeStackNavigator();

export const SettingsStack: FC = () => {
  const { colors } = useUI();
  const { t } = useTranslation('settings');

  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        fullScreenGestureEnabled: true,
        contentStyle: { borderTopColor: colors.border, borderTopWidth: 1 },
      }}>
      <Screen
        name={ScreenName.SETTINGS_MAIN}
        component={SettingsMain}
        options={{
          headerTitle: t('settings'),
        }}
      />
    </Navigator>
  );
};
