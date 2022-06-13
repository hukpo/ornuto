import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import { Icon } from '@/ui-kit';
import { StackName } from '../constants';
import { BoxesStack } from './boxes.stack';
import { SettingsStack } from './settings.stack';

const { Navigator, Screen } = createBottomTabNavigator();

const BoxesIcon: BottomTabNavigationOptions['tabBarIcon'] = ({ color, size }) => (
  <Icon name="box" size={size} color={color} />
);

const SettingsIcon: BottomTabNavigationOptions['tabBarIcon'] = ({ color, size }) => (
  <Icon name="gear" size={size} color={color} />
);

export const BottomTabsStack: FC = () => {
  const { t } = useTranslation();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={StackName.BOXES}
        component={BoxesStack}
        options={{
          tabBarLabel: t('boxes:boxes'),
          tabBarIcon: BoxesIcon,
        }}
      />
      <Screen
        name={StackName.SETTINGS}
        component={SettingsStack}
        options={{
          tabBarLabel: t('settings:settings'),
          tabBarIcon: SettingsIcon,
        }}
      />
    </Navigator>
  );
};
