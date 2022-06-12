import { createRef } from "react";
import { singleton } from "tsyringe";
import { NavigationContainerRef } from "@react-navigation/native";

import { ScreenName } from "../constants";

@singleton()
export class Navigation {
  masterRef = createRef<NavigationContainerRef<Record<string, object>>>();
  detailsRef = createRef<NavigationContainerRef<Record<string, object>>>();

  navigate(screenName: ScreenName): void {
    console.log("--->", screenName);

    this.detailsRef.current?.navigate(screenName);
  }
}
