import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { UIIconName, UIList, UIScrollView } from '@ornuto/ui-kit';

export const UIIconScreen: FC = () => {
  return (
    <UIScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <UIList.Container>
        {Object.values(UIIconName).map(iconName => {
          return <UIList.Item iconName={iconName} key={iconName} title={iconName} />;
        })}
      </UIList.Container>
    </UIScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
