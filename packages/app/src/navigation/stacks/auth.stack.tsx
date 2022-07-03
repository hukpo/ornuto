import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthCode, AuthPhone } from '@/modules';
import { ScreenName } from '../constants';

const { Navigator, Screen } = createNativeStackNavigator();

export const AuthStack: FC = () => {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: false,
      }}>
      <Screen
        name={ScreenName.AUTH_PHONE}
        component={AuthPhone}
        options={{
          headerTitle: '',
          headerLeft: undefined,
          headerBackVisible: false,
        }}
      />

      <Screen name={ScreenName.AUTH_CODE} component={AuthCode} />
    </Navigator>
  );
};
