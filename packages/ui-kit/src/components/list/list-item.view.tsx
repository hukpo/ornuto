import React, { FC, ReactNode, useState } from 'react';
import {
  View,
  Switch,
  ViewStyle,
  Pressable,
  TextInput,
  StyleProp,
  StyleSheet,
  ColorValue,
  TextInputProps,
} from 'react-native';

import { UIText } from '../text';
import { useUI } from '../../hooks';
import { UIIcon, UIIconProps } from '../icon';

const ICON_CONTAINER_PADDING = 4;

export type UIListItemProps = {
  title?: string;
  subtitle?: string;
  onPress?: () => void;

  inputProps?: TextInputProps;

  toggled?: boolean;
  selected?: boolean;
  disabled?: boolean;
  hasArrow?: boolean;

  renderIcon?: () => ReactNode;
  iconHeight?: number;
  iconColor?: ColorValue;
  iconBackground?: ColorValue;
  iconName?: UIIconProps['name'];

  titleStyle?: 'destructive' | 'primary';
  iconContainerStyle?: StyleProp<ViewStyle>;
  infoContainerStyle?: StyleProp<ViewStyle>;
};

export const UIListItem: FC<UIListItemProps> = ({
  infoContainerStyle,
  title,
  subtitle,
  toggled,
  disabled,
  selected,
  hasArrow,
  iconName,
  inputProps,
  titleStyle,
  renderIcon,
  iconHeight = 20,
  iconColor = '#fff',
  iconContainerStyle,
  iconBackground = 'transparent',
  onPress,
}) => {
  const { colors } = useUI();
  const [isPressed, setIsPressed] = useState(false);

  const onPressInOut = (): void => {
    if (!disabled && onPress) {
      setIsPressed(i => !i);
    }
  };

  return (
    <Pressable
      disabled={disabled}
      style={[
        styles.container,
        { backgroundColor: colors.tertiary },
        isPressed && { backgroundColor: colors.highlight },
      ]}
      onPressIn={onPressInOut}
      onPressOut={onPressInOut}
      onPress={onPress}>
      {iconName || renderIcon ? (
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: iconBackground, height: iconHeight + ICON_CONTAINER_PADDING * 2 },
            iconContainerStyle,
          ]}>
          {renderIcon ? (
            renderIcon()
          ) : iconName ? (
            <UIIcon name={iconName} size={iconHeight} color={iconColor as string} />
          ) : null}
        </View>
      ) : null}

      <View style={[styles.infoContainer, infoContainerStyle]}>
        <View style={styles.textContainer}>
          {inputProps ? (
            <TextInput
              {...inputProps}
              style={[styles.title, styles.input, { color: colors.text }, inputProps.style]}
            />
          ) : null}

          {title ? (
            <UIText
              style={[
                styles.title,
                {
                  color: disabled
                    ? colors.textDisabled
                    : titleStyle === 'destructive'
                    ? colors.red
                    : titleStyle === 'primary'
                    ? colors.primary
                    : colors.text,
                },
              ]}>
              {title}
            </UIText>
          ) : null}

          {subtitle ? (
            <UIText
              style={[styles.subtitle, { color: disabled ? colors.textDisabled : colors.text }]}>
              {subtitle}
            </UIText>
          ) : null}
        </View>

        {typeof toggled === 'boolean' ? (
          <Switch
            disabled={disabled}
            pointerEvents="none"
            value={toggled}
            onValueChange={onPress}
          />
        ) : null}
        {selected ? <UIIcon name="checkmark" size={12} color={colors.primary} /> : null}

        {hasArrow ? <UIIcon name="arrow.right" width={7} color={colors.greyLight} /> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    padding: ICON_CONTAINER_PADDING,
    borderRadius: 7,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoContainer: {
    flex: 1,
    height: '100%',
    paddingRight: 15,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  textContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginTop: 3,
    fontSize: 15,
  },
  input: {
    flexGrow: 1,
  },
});
