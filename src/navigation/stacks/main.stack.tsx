import React, { FC } from "react";

import { DARK_THEME } from "@/themes";
import { SplitView } from "../components";
import { DetailsStack } from "./details.stack";
import { BottomTabsStack } from "./bottom-tabs.stack";

export const MainStack: FC = () => {
  return (
    <SplitView
      theme={DARK_THEME}
      masterNavigator={<BottomTabsStack />}
      detailsNavigator={<DetailsStack />}
      layoutConfig={{
        minMasterWidth: 275,
        defaultMasterWidth: 400,

        minDetailsWidth: 275,
        minDetailsVisibleWidth: 650,
      }}
    />
  );
};
