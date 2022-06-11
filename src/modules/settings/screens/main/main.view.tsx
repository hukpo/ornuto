import React, { FC } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";

import { ScreenName } from "@/navigation";

export const SettingsMain: FC = () => {
  const navigation = useNavigation();

  const onOpenLanguagePress = () => {
    navigation.navigate(ScreenName.SETTINGS_LANGUAGE, {});
  };

  return (
    <View style={styles.container}>
      <Text>List</Text>

      <Button title="Open language" onPress={onOpenLanguagePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
