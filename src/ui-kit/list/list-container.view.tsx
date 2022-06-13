import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React, { FC, Children, cloneElement, ReactElement } from 'react';

import { useUI } from '@/themes';
import { ListItemProps } from './list-item.view';

type ListContainerProps = {
  style?: StyleProp<ViewStyle>;
};

export const ListContainer: FC<ListContainerProps> = ({ children, style }) => {
  const { colors } = useUI();

  return (
    <View style={[styles.container, style]}>
      {Children.map(children, (child, index) => {
        return cloneElement<ListItemProps>(
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
