import React, { FC, useState } from 'react';
import { ColorValue, StyleProp, StyleSheet, Text as RNText, TextStyle } from 'react-native';

type TxtProps = {
  onPress?: () => void;
  highlightColor?: ColorValue;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};

export const Txt: FC<TxtProps> = ({ style, onPress, children, numberOfLines, highlightColor }) => {
  const [highlightActive, setHighlightActive] = useState(false);

  const toggleHighlightActive = () => {
    setHighlightActive(h => !h);
  };

  return (
    <RNText
      numberOfLines={numberOfLines}
      suppressHighlighting={true}
      onPressIn={onPress && toggleHighlightActive}
      onPressOut={onPress && toggleHighlightActive}
      onPress={onPress}
      style={[
        styles.text,
        style,
        !!highlightColor &&
          (onPress ? highlightActive : true) && { backgroundColor: highlightColor },
      ]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    borderRadius: 3,
    overflow: 'hidden',
  },
});
