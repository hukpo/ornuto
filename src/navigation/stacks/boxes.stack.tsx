import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BoxesMain } from '@/modules';
import { ScreenName } from '../constants';

const { Navigator, Screen } = createNativeStackNavigator();

export const BoxesStack: FC = () => {
  const { t } = useTranslation('boxes');

  return (
    <Navigator>
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
