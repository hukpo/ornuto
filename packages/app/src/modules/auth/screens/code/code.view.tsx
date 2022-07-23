import { useUI } from '@ornuto/ui-kit';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput, View } from 'react-native';

import { useVm } from '@/hooks';
import { AuthCodeVm } from './code.vm';
import { HeaderButton } from '@/navigation';

export const AuthCode = observer(() => {
  const vm = useVm(AuthCodeVm);
  const { colors } = useUI();
  const { t } = useTranslation();
  const { setOptions } = useNavigation();

  useLayoutEffect(() => {
    setOptions({
      headerTitle: vm.phoneNumber,
      headerBackTitle: t('navigation:back'),
      headerRight: () => (
        <HeaderButton
          title={t('next')}
          onPress={vm.confirmPhone}
          disabled={vm.nextButtonDisabled}
        />
      ),
    });
  }, [setOptions, t, vm.confirmPhone, vm.nextButtonDisabled, vm.phoneNumber]);

  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        maxLength={6}
        style={[styles.input, { borderColor: colors.border, color: colors.text }]}
        value={vm.code.value}
        onChangeText={vm.code.setValue}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },

  input: {
    width: 100,
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    textAlign: 'center',
  },
});
