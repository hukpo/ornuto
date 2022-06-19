import { setBackgroundColorAsync } from 'expo-system-ui';
import { StatusBar, useColorScheme } from 'react-native';

import { Theme } from '../types';
import { DARK_THEME, LIGHT_THEME } from '../themes';

type InitThemeOptions = {
  isSystem: boolean;
  isNightModeEnabled: boolean;
};

export const useInitTheme = (options: InitThemeOptions): Theme => {
  const scheme = useColorScheme();

  let theme;

  if (options.isSystem) {
    theme = scheme === 'dark' ? DARK_THEME : LIGHT_THEME;
  } else {
    theme = options.isNightModeEnabled ? DARK_THEME : LIGHT_THEME;
  }

  setBackgroundColorAsync(theme.colors.secondary);
  StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');

  return theme;
};
