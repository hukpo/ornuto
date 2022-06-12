import { Dimensions, StyleSheet, View } from "react-native";
import React, { ComponentType, FC, RefObject, useEffect, useState } from "react";
import { NavigationContainer, NavigationContainerRef, Theme } from "@react-navigation/native";

export type MasterNavigatorProps = {
  isMasterOnly?: boolean;
};

export type SplitViewProps = {
  MasterNavigator: ComponentType<MasterNavigatorProps>;
  DetailsNavigator: ComponentType;

  masterRef: RefObject<NavigationContainerRef<Record<string, object>>>;
  detailsRef: RefObject<NavigationContainerRef<Record<string, object>>>;

  theme?: Theme;
  layoutConfig: {
    minMasterWidth: number;
    defaultMasterWidth: number;

    minDetailsWidth: number;
    minDetailsVisibleWidth: number;
  };
};

export const SplitView: FC<SplitViewProps> = ({
  theme,
  masterRef,
  detailsRef,
  MasterNavigator,
  DetailsNavigator,
  layoutConfig: { minMasterWidth, defaultMasterWidth, minDetailsWidth, minDetailsVisibleWidth },
}) => {
  const [isMasterOnly, setIsMasterOnly] = useState(Dimensions.get("window").width < minDetailsVisibleWidth);

  useEffect(() => {
    const listener = Dimensions.addEventListener("change", ({ window: { width } }) => {
      setIsMasterOnly(width < minDetailsVisibleWidth);
    });

    return () => listener.remove();
  }, []);

  if (isMasterOnly) {
    return (
      <NavigationContainer ref={masterRef} theme={theme}>
        <MasterNavigator isMasterOnly />
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ minWidth: minMasterWidth, width: defaultMasterWidth }}>
        <NavigationContainer ref={masterRef} theme={theme}>
          <MasterNavigator />
        </NavigationContainer>
      </View>

      <View style={[styles.detailsNavigator, { minWidth: minDetailsWidth, borderColor: theme?.colors.border }]}>
        <NavigationContainer ref={detailsRef} theme={theme}>
          <DetailsNavigator />
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },

  detailsNavigator: {
    flex: 1,
    borderLeftWidth: 1,
  },
});
