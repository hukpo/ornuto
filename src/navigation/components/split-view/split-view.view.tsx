import { Dimensions, StyleSheet, View } from "react-native";
import React, { forwardRef, ReactElement, useEffect, useState } from "react";
import { NavigationContainer, NavigationContainerRef, Theme } from "@react-navigation/native";

type SplitViewProps = {
  masterNavigator: ReactElement;
  detailsNavigator: ReactElement;

  theme?: Theme;
  layoutConfig: {
    minMasterWidth: number;
    defaultMasterWidth: number;

    minDetailsWidth: number;
    minDetailsVisibleWidth: number;
  };
};

export const SplitView = forwardRef<NavigationContainerRef<ReactNavigation.RootParamList>, SplitViewProps>(
  (
    {
      theme,
      masterNavigator,
      detailsNavigator,
      layoutConfig: { minMasterWidth, defaultMasterWidth, minDetailsWidth, minDetailsVisibleWidth },
    },
    ref,
  ) => {
    const [isMasterOnly, setIsMasterOnly] = useState(false);

    useEffect(() => {
      const listener = Dimensions.addEventListener("change", ({ window: { width } }) => {
        setIsMasterOnly(width < minDetailsVisibleWidth);
      });

      return () => listener.remove();
    }, []);

    return (
      <View style={styles.container}>
        <View
          style={[
            { minWidth: minMasterWidth, width: defaultMasterWidth },
            isMasterOnly && styles.singleMasterNavigator,
          ]}
        >
          <NavigationContainer ref={ref} theme={theme}>
            {masterNavigator}
          </NavigationContainer>
        </View>

        {!isMasterOnly ? (
          <View style={[styles.detailsNavigator, { minWidth: minDetailsWidth, borderColor: theme?.colors.border }]}>
            <NavigationContainer theme={theme}>{detailsNavigator}</NavigationContainer>
          </View>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  singleMasterNavigator: {
    flex: 1,
  },

  detailsNavigator: {
    flex: 1,
    borderLeftWidth: 1,
  },
});
