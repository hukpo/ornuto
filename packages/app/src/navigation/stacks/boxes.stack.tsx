import React, { FC } from 'react';
import { useUI } from '@ornuto/ui-kit';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BoxesMain } from '@/modules';
import { ScreenName } from '../constants';

const { Navigator, Screen } = createNativeStackNavigator();

export const BoxesStack: FC = () => {
  const { colors } = useUI();
  const { t } = useTranslation('boxes');

  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        fullScreenGestureEnabled: true,
        contentStyle: { borderTopColor: colors.border, borderTopWidth: 1 },
      }}>
      <Screen
        name={ScreenName.BOXES_MAIN}
        component={BoxesMain}
        options={{
          headerTitle: t('boxes'),
        }}
      />
    </Navigator>
  );
};
