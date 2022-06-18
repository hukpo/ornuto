import { useTheme } from '@react-navigation/native';

import { Theme } from '../types';

export const useUI = (): Theme => {
  const theme = useTheme();

  return theme as Theme;
};
