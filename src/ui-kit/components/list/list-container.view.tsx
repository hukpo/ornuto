import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React, { FC, Children, cloneElement, ReactElement } from 'react';

import { useUI } from '../../hooks';
import { UIListItemProps } from './list-item.view';

type UIListContainerProps = {
  style?: StyleProp<ViewStyle>;
};

export const UIListContainer: FC<UIListContainerProps> = ({ children, style }) => {
  const { colors } = useUI();

  return (
    <View style={[styles.container, style]}>
      {Children.map(children, (child, index) => {
        return cloneElement<UIListItemProps>(
          child as ReactElement,
          Array.isArray(children) && index !== Children.count(children) - 1
            ? { infoContainerStyle: [styles.child, { borderBottomColor: colors.greyDark }] }
            : undefined,
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },

  child: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
