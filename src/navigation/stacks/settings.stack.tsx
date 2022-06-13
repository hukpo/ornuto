import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SettingsMain } from '@/modules';
import { ScreenName } from '../constants';

const { Navigator, Screen } = createNativeStackNavigator();

export const SettingsStack: FC = () => {
  const { t } = useTranslation('settings');

  return (
    <Navigator screenOptions={{ fullScreenGestureEnabled: true }}>
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
