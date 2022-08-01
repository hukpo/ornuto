import React, { FC } from 'react';
import { ScrollView as RNScrollView, ScrollViewProps } from 'react-native';

export type UIScrollViewProps = ScrollViewProps;

export const UIScrollView: FC<UIScrollViewProps> = props => {
  return <RNScrollView {...props} />;
};
