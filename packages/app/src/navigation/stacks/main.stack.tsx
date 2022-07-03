import React from 'react';
import { container } from 'tsyringe';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { detailsRef, masterRef, SplitView } from '@ornuto/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthPhone } from '@/modules';
import { ThemeStore } from '@/stores';
import { useInitTheme } from '@/ui-kit';
import { ScreenName } from '../constants';
import { MasterStack } from './master.stack';
import { DetailsStack } from './details.stack';

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = observer(() => {
  const themeStore = container.resolve(ThemeStore);
  const theme = useInitTheme({
    isSystem: themeStore.isSystemAutoNightMode,
    isNightModeEnabled: themeStore.nightModeToggled,
  });

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
