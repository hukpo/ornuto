import React, { FC } from 'react';
import { useUI } from '@ornuto/ui-kit';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from '../constants';
import { TipsMain, SettingsLanguage, SettingsAppearance, SettingsAutoNightMode } from '@/modules';

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
  const { colors } = useUI();

  return (
    <Group
      screenOptions={{
        headerShadowVisible: false,
        fullScreenGestureEnabled: true,
        headerBackButtonMenuEnabled: false,
        headerBackTitle: t('navigation:back'),
        contentStyle: { borderTopColor: colors.border, borderTopWidth: 1 },
      }}>
      <Screen name={ScreenName.TIPS_MAIN} component={TipsMain} options={{ headerShown: false }} />

      <Screen
        name={ScreenName.SETTINGS_APPEARANCE}
        component={SettingsAppearance}
        options={{
          headerTitle: t('settings:appearance'),
        }}
      />
      <Screen
        name={ScreenName.SETTINGS_AUTO_NIGHT_MODE}
        component={SettingsAutoNightMode}
        options={{ headerTitle: t('settings:autoNightMode') }}
      />
      <Screen
        name={ScreenName.SETTINGS_LANGUAGE}
        component={SettingsLanguage}
        options={{ headerTitle: t('settings:language') }}
      />
    </Group>
  );
};
