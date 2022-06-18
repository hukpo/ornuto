import { StyleSheet } from 'react-native';

export enum UISpacing {
  S = 15,
  M = 20,
  L = 25,
  XL = 30,
}

export const UISpacingStyles = StyleSheet.create({
  ps: {
    padding: UISpacing.S,
  },
  mtxl: {
    marginTop: UISpacing.XL,
  },
});
