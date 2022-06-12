import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

export const TipsMain: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Tips</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
