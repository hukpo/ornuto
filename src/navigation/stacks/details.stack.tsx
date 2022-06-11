import { FC } from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

const ChatScreen: FC = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chat</Text>
    </View>
  );
};

export const DetailsStack: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Chat" component={ChatScreen} />
    </Navigator>
  );
};
