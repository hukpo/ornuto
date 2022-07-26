import React from 'react';
import { container } from 'tsyringe';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { UIActionSheetProvider, useInitTheme } from '@ornuto/ui-kit';
import { detailsRef, masterRef, SplitView } from '@ornuto/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ThemeStore } from '@/stores';
import { AuthStack } from './auth.stack';
import { MasterStack } from './master.stack';
import { DetailsStack } from './details.stack';
import { ScreenName, StackName } from '../constants';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BoxesCreate } from '@/modules';

const { Navigator, Screen } = createNativeStackNavigator();

export const MainStack = observer(() => {
  const { t } = useTranslation();
  const themeStore = container.resolve(ThemeStore);
  const theme = useInitTheme({
    isSystem: themeStore.isSystemAutoNightMode,
    isNightModeEnabled: themeStore.nightModeToggled,
  });

  return (
    <NavigationContainer ref={masterRef} theme={theme}>
      <SafeAreaProvider>
        <UIActionSheetProvider cancelTitle={t('cancel')}>
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

            <Screen
              name={StackName.AUTH}
              component={AuthStack}
              options={{
                headerShown: false,
                presentation: 'fullScreenModal',
              }}
            />

            <Screen
              name={ScreenName.BOXES_CREATE}
              component={BoxesCreate}
              options={{ presentation: 'modal' }}
            />
          </Navigator>
        </UIActionSheetProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
});
