import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { UIScrollView, UIList } from '@ornuto/ui-kit';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ScreenName } from '../navigation';

const screens = [ScreenName.UI_ACTION_SHEET, ScreenName.ICON];

export const MainScreen: FC = () => {
  const { navigate } = useNavigation();

  return (
    <UIScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView edges={['right', 'bottom', 'left']}>
        <UIList.Container>
          {screens.map(screen => {
            // @ts-ignore
            const onPress = () => navigate(screen);

            return <UIList.Item title={screen} hasArrow onPress={onPress} />;
          })}
        </UIList.Container>
      </SafeAreaView>
    </UIScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  button: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
