import React, { FC } from 'react';
import { StyleProp, StyleSheet, TextStyle, TouchableHighlight, ViewStyle } from 'react-native';

import { UIText } from '../text';
import { useUI } from '../../hooks';
import { UIActionSheetButton } from './action-sheet.ref';

export type ActionSheetButtonProps = UIActionSheetButton & {
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export const ActionSheetButton: FC<ActionSheetButtonProps> = ({
  type = 'default',
  title,
  onPress,
  containerStyle,
  titleStyle,
}) => {
  const { colors } = useUI();

  return (
    <TouchableHighlight
      style={[
        styles.container,
        containerStyle,
        { backgroundColor: colors.tertiary, borderColor: colors.border },
      ]}
      onPress={onPress}
      underlayColor={colors.highlight}>
      <UIText
        style={[
          styles.title,
          titleStyle,
          { color: type === 'default' ? colors.primary : colors.red },
        ]}>
        {title}
      </UIText>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
});
