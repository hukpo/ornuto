import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SettingsMain } from "@/modules";
import { ScreenName } from "../constants";

const { Navigator, Screen } = createNativeStackNavigator();

export const SettingsStack: FC = () => {
  return (
    <Navigator screenOptions={{ fullScreenGestureEnabled: true }}>
      <Screen name={ScreenName.SETTINGS_MAIN} component={SettingsMain} />
    </Navigator>
  );
};
