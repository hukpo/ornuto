import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { BoxesMain } from "@/modules";
import { ScreenName } from "../constants";

const { Navigator, Screen } = createNativeStackNavigator();

export const BoxesStack: FC = () => {
  return (
    <Navigator>
      <Screen name={ScreenName.BOXES_MAIN} component={BoxesMain} />
    </Navigator>
  );
};
