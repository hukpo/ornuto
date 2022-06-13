import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from '../constants';
import { SettingsAppearance, SettingsLanguage, TipsMain } from '@/modules';

const Stack = createNativeStackNavigator();

export const DetailsStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={ScreenName.TIPS_MAIN}>
      {DetailsStackScreens(Stack)}
    </Stack.Navigator>
  );
};

export const DetailsStackScreens: FC<ReturnType<typeof createNativeStackNavigator>> = ({
  Screen,
  Group,
}) => {
  const { t } = useTranslation();

  return (
    <Group screenOptions={{ fullScreenGestureEnabled: true }}>
      <Screen name={ScreenName.TIPS_MAIN} component={TipsMain} options={{ headerShown: false }} />

      <Screen
        name={ScreenName.SETTINGS_APPEARANCE}
        component={SettingsAppearance}
        options={{ headerTitle: t('settings:appearance') }}
      />
      <Screen
        name={ScreenName.SETTINGS_LANGUAGE}
        component={SettingsLanguage}
        options={{ headerTitle: t('settings:language') }}
      />
    </Group>
  );
};
