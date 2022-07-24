import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  SlideInDown,
  SlideOutDown,
} from 'react-native-reanimated';

import { useUI } from '../../hooks';
import { UISpacing } from '../../constants';
import { useController } from './action-sheet.controller';
import { ActionSheetButton } from './action-sheet-button.view';

type UIActionSheetProviderProps = {
  cancelTitle: string;
  children: ReactNode;
};

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

export const UIActionSheetProvider: FC<UIActionSheetProviderProps> = ({
  children,
  cancelTitle,
}) => {
  const { colors } = useUI();
  const { options, cancel } = useController();

  const enteringEasing = Easing.out(Easing.cubic);
  const exitingEasing = Easing.in(Easing.cubic);

  return (
    <>
      {options ? (
        <Animated.View
          onTouchEnd={cancel}
          style={styles.fadeContainer}
          entering={FadeIn.easing(enteringEasing)}
          exiting={FadeOut.easing(exitingEasing)}>
          <AnimatedSafeAreaView
            edges={['bottom']}
            style={styles.slideContainer}
            entering={SlideInDown.easing(enteringEasing)}
            exiting={SlideOutDown.easing(exitingEasing)}>
            <View style={[styles.buttons, { backgroundColor: colors.tertiary }]}>
              {options.buttons.map((button, index) => {
                return (
                  <ActionSheetButton
                    key={index}
                    type={button.type}
                    title={button.title}
                    onPress={button.onPress}
                    containerStyle={!index && styles.firstButton}
                  />
                );
              })}
            </View>

            <ActionSheetButton
              onPress={cancel}
              title={cancelTitle}
              containerStyle={styles.cancelContainer}
            />
          </AnimatedSafeAreaView>
        </Animated.View>
      ) : null}

      {children}
    </>
  );
};

const styles = StyleSheet.create({
  fadeContainer: {
    zIndex: 1000,
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  slideContainer: {
    width: '100%',
    height: '100%',
    maxWidth: 390,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },

  buttons: {
    overflow: 'hidden',
    borderRadius: UISpacing.XS,
  },
  firstButton: {
    borderTopWidth: 0,
  },

  cancelContainer: {
    borderTopWidth: 0,
    marginTop: UISpacing.XS,
    borderRadius: UISpacing.XS,
  },
});
