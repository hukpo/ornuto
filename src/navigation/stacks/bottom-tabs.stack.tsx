import { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StackName } from "../constants";
import { BoxesStack } from "./boxes.stack";
import { SettingsStack } from "./settings.stack";

const { Navigator, Screen } = createBottomTabNavigator();

export const BottomTabsStack: FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={StackName.BOXES} component={BoxesStack} />
      <Screen name={StackName.SETTINGS} component={SettingsStack} />
    </Navigator>
  );
};
