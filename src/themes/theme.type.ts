export type Theme = {
  dark: boolean;
  colors: {
    /**
     * buttons, icons
     */
    primary: string;

    /**
     * Create folder background
     */
    primaryTransparent: string;

    /**
     * main theme color
     */
    secondary: string;

    /**
     * list items bg
     */
    tertiary: string;

    contrast: string;

    text: string;
    textDisabled: string;

    background: string;
    card: string;
    border: string;
    notification: string;

    highlight: string;
    greyDark: string;
    greyLight: string;
    red: string;
    green: string;
  };
};
