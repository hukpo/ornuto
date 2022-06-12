import { Dimensions, StyleSheet, View } from "react-native";
import React, { FC, ReactElement, RefObject, useEffect, useState } from "react";
import { NavigationContainer, NavigationContainerRef, Theme } from "@react-navigation/native";

type SplitViewProps = {
  masterNavigator: ReactElement;
  detailsNavigator: ReactElement;

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
  masterNavigator,
  detailsNavigator,
  layoutConfig: { minMasterWidth, defaultMasterWidth, minDetailsWidth, minDetailsVisibleWidth },
}) => {
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
        style={[{ minWidth: minMasterWidth, width: defaultMasterWidth }, isMasterOnly && styles.singleMasterNavigator]}
      >
        <NavigationContainer ref={masterRef} theme={theme}>
          {masterNavigator}

          {isMasterOnly ? detailsNavigator : null}
        </NavigationContainer>
      </View>

      {!isMasterOnly ? (
        <View style={[styles.detailsNavigator, { minWidth: minDetailsWidth, borderColor: theme?.colors.border }]}>
          <NavigationContainer ref={detailsRef} theme={theme}>
            {detailsNavigator}
          </NavigationContainer>
        </View>
      ) : null}
    </View>
  );
};

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
