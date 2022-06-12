import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

export const BoxesMain: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Boxes Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});