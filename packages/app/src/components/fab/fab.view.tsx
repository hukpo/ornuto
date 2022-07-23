import React, { FC } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { UIIcon, UIIconProps, useUI } from '@ornuto/ui-kit';

type FABProps = {
  iconName: UIIconProps['name'];
  onPress?: () => void;
};

const FAB_SIZE = 50;
const FAB_MARGIN = 15;
const MIN_SCALE = 0.8;
const DEFAULT_SCALE = 1;
const ROTATION_DEG = 90;
const DEFAULT_ROTATION_DEG = 0;
const ANIMATION_DURATION = 150;

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const FAB: FC<FABProps> = ({ onPress }) => {
  const { colors } = useUI();
  const scale = useSharedValue(DEFAULT_SCALE);
  const rotation = useSharedValue(DEFAULT_ROTATION_DEG);
  const bottomMenuHeight = useBottomTabBarHeight();

  const onPressIn = (): void => {
    scale.value = withTiming(MIN_SCALE, { duration: ANIMATION_DURATION });
    rotation.value = withTiming(ROTATION_DEG, { duration: ANIMATION_DURATION });
  };

  const onPressOut = (): void => {
    scale.value = withTiming(DEFAULT_SCALE, { duration: ANIMATION_DURATION });
    rotation.value = withTiming(DEFAULT_ROTATION_DEG, { duration: ANIMATION_DURATION });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
  }));

  return (
    <AnimatedPressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        styles.container,
        {
          borderColor: colors.primary,
          backgroundColor: colors.primary,
          bottom: bottomMenuHeight + FAB_MARGIN,
        },
        animatedStyle,
      ]}>
      <UIIcon name="plus" size={FAB_SIZE * 0.4} color="#fff" />
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: FAB_SIZE,
    aspectRatio: 1,
    borderRadius: FAB_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    right: FAB_MARGIN,
    position: 'absolute',
    zIndex: 1000,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,

    elevation: 5,
  },
});
