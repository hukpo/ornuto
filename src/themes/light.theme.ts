import { Theme } from './theme.type';

export const LIGHT_THEME: Theme = {
  dark: false,
  colors: {
    primary: 'rgb(0, 122, 255)',
    primaryTransparent: 'rgba(0, 122, 255, 0.2)',

    secondary: 'rgb(255,255,255)',
    tertiary: 'rgb(255,255,255)',
    contrast: 'rgb(28, 28, 30)',

    text: 'rgb(28, 28, 30)',
    textDisabled: 'rgb(209, 209, 214)',

    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',

    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',

    highlight: 'rgb(229,229,234)',
    greyDark: 'rgb(99, 99, 102)',
    greyLight: 'rgb(142,142,147)',

    red: 'rgb(255,59,48)',
    green: 'rgb(52,199,89)',
  },
};
