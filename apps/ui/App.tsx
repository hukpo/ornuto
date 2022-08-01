import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UIActionSheetProvider, useInitTheme } from '@ornuto/ui-kit';

import { MainStack } from './src';

export default function App() {
  const theme = useInitTheme({
    isNightModeEnabled: true,
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <UIActionSheetProvider cancelTitle="Cancel">
          <MainStack />
        </UIActionSheetProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
