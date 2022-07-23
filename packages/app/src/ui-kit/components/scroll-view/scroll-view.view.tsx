import React, { FC, ReactNode } from 'react';
import { ScrollView as RNScrollView, StyleProp, ViewStyle } from 'react-native';

export type UIScrollViewProps = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

export const UIScrollView: FC<UIScrollViewProps> = ({ children, style }) => {
  return <RNScrollView style={style}>{children}</RNScrollView>;
};
