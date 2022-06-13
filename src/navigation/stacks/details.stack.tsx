import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from '../constants';
import { SettingsLanguage, TipsMain } from '@/modules';

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
  return (
    <Group screenOptions={{ fullScreenGestureEnabled: true }}>
      <Screen name={ScreenName.TIPS_MAIN} component={TipsMain} options={{ headerShown: false }} />
      <Screen name={ScreenName.SETTINGS_LANGUAGE} component={SettingsLanguage} />
    </Group>
  );
};
