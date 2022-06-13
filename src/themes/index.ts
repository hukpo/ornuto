import { container } from 'tsyringe';
import { useTheme } from '@react-navigation/native';
import { setBackgroundColorAsync } from 'expo-system-ui';
import { StatusBar, useColorScheme } from 'react-native';

import { Theme } from './theme.type';
import { ThemeStore } from '@/stores';
import { AutoNightMode } from '@/types';
import { DARK_THEME } from './dark.theme';
import { LIGHT_THEME } from './light.theme';

export const useInitTheme = (): Theme => {
  const scheme = useColorScheme();
  const themeStore = container.resolve(ThemeStore);

  let theme = DARK_THEME;

  switch (themeStore.autoNightMode) {
    case AutoNightMode.SYSTEM:
      theme = scheme === 'dark' ? DARK_THEME : LIGHT_THEME;
      break;
    case AutoNightMode.DISABLED:
      theme = themeStore.nightModeToggled ? DARK_THEME : LIGHT_THEME;
      break;
  }

  setBackgroundColorAsync(theme.colors.secondary);
  StatusBar.setBarStyle(theme.dark ? 'light-content' : 'dark-content');

  return theme;
};

export const useUI = useTheme as () => Theme;
