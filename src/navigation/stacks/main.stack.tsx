import React, { FC } from "react";
import { container } from "tsyringe";

import { Navigation } from "../utils";
import { LIGHT_THEME } from "@/themes";
import { SplitView } from "../components";
import { MasterStack } from "./master.stack";
import { DetailsStack } from "./details.stack";

export const MainStack: FC = () => {
  const navigation = container.resolve(Navigation);

  return (
    <SplitView
      theme={LIGHT_THEME}
      masterRef={navigation.masterRef}
      detailsRef={navigation.detailsRef}
      MasterNavigator={MasterStack}
      DetailsNavigator={DetailsStack}
      layoutConfig={{
        minMasterWidth: 400,
        minWindowWidthForDetails: 850,
      }}
    />
  );
};
