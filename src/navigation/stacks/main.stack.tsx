import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthPhone } from '@/modules';
import { useInitTheme } from '@/themes';
import { ScreenName } from '../constants';
import { SplitView } from '../components';
import { MasterStack } from './master.stack';
import { DetailsStack } from './details.stack';
import { detailsRef, masterRef } from '../utils';

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = observer(() => {
  const theme = useInitTheme();

  return (
    <NavigationContainer ref={masterRef} theme={theme}>
      <Navigator>
        <Screen name={ScreenName.SPLIT_VIEW} options={{ headerShown: false }}>
          {() => (
            <SplitView
              theme={theme}
              detailsRef={detailsRef}
              MasterNavigator={MasterStack}
              DetailsNavigator={DetailsStack}
              layoutConfig={{
                minMasterWidth: 400,
                minWindowWidthForDetails: 650,
              }}
            />
          )}
        </Screen>

        <Screen name={ScreenName.AUTH_PHONE} component={AuthPhone} />
      </Navigator>
    </NavigationContainer>
  );
});
