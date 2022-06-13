import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StackName } from '../constants';
import { MasterNavigatorProps } from '../components';
import { BottomTabsStack } from './bottom-tabs.stack';
import { DetailsStackScreens } from './details.stack';

const Stack = createNativeStackNavigator();

export const MasterStack: FC<MasterNavigatorProps> = ({ isMasterOnly }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackName.BOTTOM_TABS}
        component={BottomTabsStack}
        options={{ headerShown: false }}
      />
      {isMasterOnly ? DetailsStackScreens(Stack) : null}
    </Stack.Navigator>
  );
};
