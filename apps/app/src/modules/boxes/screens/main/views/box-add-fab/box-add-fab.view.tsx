import React, { FC } from 'react';
import { UIIcon, useUI } from '@ornuto/ui-kit';
import { StyleSheet, Pressable, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  withTiming,
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type BoxAddFABProps = {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const FAB_SIZE = 50;
const ANIMATION_DURATION = 150;

export const BoxAddFAB: FC<BoxAddFABProps> = ({ onPress, style }) => {
  const { colors } = useUI();
  const progress = useSharedValue(0);

  const onPressIn = (): void => {
    progress.value = withTiming(1, { duration: ANIMATION_DURATION });
  };

  const onPressOut = (): void => {
    progress.value = withTiming(0, { duration: ANIMATION_DURATION });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: interpolate(progress.value, [0, 1], [1, 0.8]) },
      { rotate: `${interpolate(progress.value, [0, 1], [0, 90])}deg` },
    ],
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
        },
        animatedStyle,
        style,
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
