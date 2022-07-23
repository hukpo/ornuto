import React, { FC, ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { SlideOutDown, SlideInDown, Easing } from 'react-native-reanimated';

import { useUI } from '../../hooks';
import { UISpacing } from '../../constants';
import { useController } from './action-sheet.controller';
import { ActionSheetButton } from './action-sheet-button.view';

type UIActionSheetProviderProps = {
  cancelTitle: string;
  children: ReactNode;
};

export const UIActionSheetProvider: FC<UIActionSheetProviderProps> = ({
  children,
  cancelTitle,
}) => {
  const { colors } = useUI();
  const { options, cancel } = useController();

  return (
    <>
      {options ? (
        <Animated.View
          onTouchEnd={cancel}
          style={styles.container}
          exiting={SlideOutDown.easing(Easing.in(Easing.cubic))}
          entering={SlideInDown.easing(Easing.out(Easing.cubic))}>
          <SafeAreaView edges={['bottom']}>
            <View style={[styles.buttons, { backgroundColor: colors.tertiary }]}>
              {options.buttons.map((button, index) => {
                return (
                  <ActionSheetButton
                    key={index}
                    {...button}
                    containerStyle={!index && styles.firstButton}
                  />
                );
              })}
            </View>

            <ActionSheetButton
              onPress={cancel}
              title={cancelTitle}
              titleStyle={styles.cancelTitle}
              containerStyle={styles.cancelContainer}
            />
          </SafeAreaView>
        </Animated.View>
      ) : null}

      {children}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    paddingHorizontal: UISpacing.S,
  },

  buttons: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  firstButton: {
    borderTopWidth: 0,
  },

  cancelContainer: {
    marginTop: 10,
    borderRadius: 10,
    borderTopWidth: 0,
  },
  cancelTitle: {
    fontSize: 18,
  },
});
