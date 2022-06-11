import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenName } from "../constants";
import { SettingsLanguage, SettingsMain } from "@/modules";

const { Navigator, Screen } = createNativeStackNavigator();

export const SettingsStack: FC = () => {
  return (
    <Navigator screenOptions={{ fullScreenGestureEnabled: true }}>
      <Screen name={ScreenName.SETTINGS_MAIN} component={SettingsMain} />
      <Screen name={ScreenName.SETTINGS_LANGUAGE} component={SettingsLanguage} />
    </Navigator>
  );
};
