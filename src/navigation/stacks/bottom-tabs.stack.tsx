import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import { UIIcon } from '@/ui-kit';
import { StackName } from '../constants';
import { BoxesStack } from './boxes.stack';
import { SettingsStack } from './settings.stack';

const { Navigator, Screen } = createBottomTabNavigator();

const BoxesIcon: BottomTabNavigationOptions['tabBarIcon'] = ({ color, size }) => (
  <UIIcon name="box" size={size} color={color} />
);

const SettingsIcon: BottomTabNavigationOptions['tabBarIcon'] = ({ color, size }) => (
  <UIIcon name="gear" size={size} color={color} />
);

export const BottomTabsStack: FC = () => {
  const { t } = useTranslation();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={StackName.BOXES}
        component={BoxesStack}
        options={{
          tabBarIcon: BoxesIcon,
          tabBarLabel: t('boxes:boxes'),
        }}
      />
      <Screen
        name={StackName.SETTINGS}
        component={SettingsStack}
        options={{
          tabBarIcon: SettingsIcon,
          tabBarLabel: t('settings:settings'),
        }}
      />
    </Navigator>
  );
};
