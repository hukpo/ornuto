import React, { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

export const SettingsLanguage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Language</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
