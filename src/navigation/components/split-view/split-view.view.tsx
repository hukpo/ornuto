import { Dimensions, StyleSheet, View } from 'react-native';
import React, { ComponentType, FC, RefObject, useEffect, useState } from 'react';
import { NavigationContainer, NavigationContainerRef, Theme } from '@react-navigation/native';

export type MasterNavigatorProps = {
  isMasterOnly?: boolean;
};

export type SplitViewProps = {
  MasterNavigator: ComponentType<MasterNavigatorProps>;
  DetailsNavigator: ComponentType;

  detailsRef: RefObject<NavigationContainerRef<Record<string, object>>>;

  theme?: Theme;
  layoutConfig: {
    minMasterWidth: number;
    minWindowWidthForDetails: number;
  };
};

export const SplitView: FC<SplitViewProps> = ({
  theme,
  detailsRef,
  MasterNavigator,
  DetailsNavigator,
  layoutConfig: { minMasterWidth, minWindowWidthForDetails },
}) => {
  const [isMasterOnly, setIsMasterOnly] = useState(
    Dimensions.get('window').width < minWindowWidthForDetails,
  );

  useEffect(() => {
    const listener = Dimensions.addEventListener('change', ({ window: { width } }) => {
      setIsMasterOnly(width < minWindowWidthForDetails);
    });

    return () => listener.remove();
  }, [minWindowWidthForDetails]);

  return (
    <View style={styles.container}>
      <View style={isMasterOnly ? styles.masterOnlyNavigator : { minWidth: minMasterWidth }}>
        <MasterNavigator isMasterOnly={isMasterOnly} />
      </View>

      {!isMasterOnly ? (
        <View style={[styles.detailsNavigator, { borderColor: theme?.colors.border }]}>
          <NavigationContainer independent ref={detailsRef} theme={theme}>
            <DetailsNavigator />
          </NavigationContainer>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  masterOnlyNavigator: {
    flex: 1,
  },

  detailsNavigator: {
    flex: 1,
    borderLeftWidth: 1,
  },
});
