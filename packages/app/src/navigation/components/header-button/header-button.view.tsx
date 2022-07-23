import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { UIIcon, UIText, useUI } from '@ornuto/ui-kit';
import { useNavigation } from '@react-navigation/native';

type HeaderButtonProps = {
  title?: string;
  disabled?: boolean;
  backIconVisible?: boolean;
  onPress?: () => void;
};

export const HeaderButton: FC<HeaderButtonProps> = ({
  title,
  disabled,
  backIconVisible,
  onPress,
}) => {
  const { colors } = useUI();
  const { t } = useTranslation();
  const navigation = useNavigation();

  if (!title) {
    title = backIconVisible ? t('navigation:back') : t('cancel');
  }

  if (!onPress) {
    onPress = navigation.goBack;
  }

  return (
    <TouchableOpacity style={styles.container} disabled={disabled} onPress={onPress}>
      {backIconVisible ? (
        <UIIcon
          name="arrow.left"
          width={12}
          style={styles.backIcon}
          color={disabled ? colors.textDisabled : colors.primary}
        />
      ) : null}

      <UIText style={[styles.title, { color: disabled ? colors.textDisabled : colors.primary }]}>
        {title}
      </UIText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
  backIcon: {
    marginRight: 6.5,
  },
});
