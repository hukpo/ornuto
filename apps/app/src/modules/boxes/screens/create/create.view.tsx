import React, { FC } from 'react';
import { UIText } from '@ornuto/ui-kit';
import { StyleSheet, View } from 'react-native';

export const BoxesCreate: FC = () => {
  return (
    <>
      <View style={styles.container}>
        <UIText>Boxes Create</UIText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
