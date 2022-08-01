import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenName } from '../constants';
import { UIIconScreen, MainScreen, UIActionSheetScreen } from '../../screens';

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack: FC = () => {
  return (
    <Navigator screenOptions={{ headerLargeTitle: true, fullScreenGestureEnabled: true }}>
      <Screen name={ScreenName.MAIN} component={MainScreen} />
      <Screen name={ScreenName.UI_ACTION_SHEET} component={UIActionSheetScreen} />
      <Screen name={ScreenName.UI_ICON} component={UIIconScreen} />
    </Navigator>
  );
};
