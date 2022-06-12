import { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ScreenName } from "../constants";
import { SettingsLanguage, TipsMain } from "@/modules";

const { Navigator, Screen } = createNativeStackNavigator();

export const DetailsStack: FC = () => {
  return (
    <Navigator initialRouteName={ScreenName.TIPS_MAIN}>
      <Screen name={ScreenName.TIPS_MAIN} component={TipsMain} />
      <Screen name={ScreenName.SETTINGS_LANGUAGE} component={SettingsLanguage} />
    </Navigator>
  );
};
