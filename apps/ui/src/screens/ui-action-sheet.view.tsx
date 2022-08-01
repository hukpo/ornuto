import React, { FC } from 'react';
import { UIActionSheet } from '@ornuto/ui-kit';
import { View, StyleSheet, Button } from 'react-native';

export const UIActionSheetScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => {
          UIActionSheet.open({
            buttons: [
              { title: 'No type', onPress: () => null },
              { title: 'Default type', type: 'default', onPress: () => null },
              { title: 'Destructive type', type: 'destructive', onPress: () => null },
            ],
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
