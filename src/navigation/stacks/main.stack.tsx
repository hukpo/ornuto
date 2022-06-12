import React, { FC } from "react";
import { container } from "tsyringe";

import { DARK_THEME } from "@/themes";
import { Navigation } from "../utils";
import { SplitView } from "../components";
import { DetailsStack } from "./details.stack";
import { BottomTabsStack } from "./bottom-tabs.stack";

export const MainStack: FC = () => {
  const navigation = container.resolve(Navigation);

  return (
    <SplitView
      // theme={DARK_THEME}
      masterRef={navigation.masterRef}
      detailsRef={navigation.detailsRef}
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
