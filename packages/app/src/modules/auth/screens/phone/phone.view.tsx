import React, { useEffect, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, StyleSheet, TextInput, View } from 'react-native';

import { useVm } from '@/hooks';
import { AuthPhoneVm } from './phone.vm';
import { UIText, useUI } from '@/ui-kit';
import { HeaderButton } from '@/navigation';

export const AuthPhone = observer(() => {
  const { colors } = useUI();
  const vm = useVm(AuthPhoneVm);
  const { t } = useTranslation();
  const { setOptions } = useNavigation();

  useEffect(() => {
    const onBackPress = () => true;

    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  }, []);

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <HeaderButton title={t('next')} onPress={vm.sendCode} disabled={vm.nextButtonDisabled} />
      ),
    });
  }, [setOptions, t, vm.nextButtonDisabled, vm.sendCode]);

  return (
    <View style={styles.container}>
      <UIText style={[styles.phone, { color: colors.text }]}>{t('auth:phone')}</UIText>
      <UIText style={[styles.phoneDescription, { color: colors.text }]}>
        {t('auth:phoneDescription')}
      </UIText>

      <View style={styles.inputsContainer}>
        <TextInput
          maxLength={4}
          keyboardType="phone-pad"
          style={[
            styles.input,
            styles.phoneCode,
            { borderColor: colors.border, color: colors.text },
          ]}
          value={vm.phoneCode.value}
        />

        <TextInput
          autoFocus
          maxLength={9}
          keyboardType="phone-pad"
          style={[
            styles.input,
            styles.phoneNumber,
            { borderColor: colors.border, color: colors.text },
          ]}
          value={vm.phoneNumber.value}
          onChangeText={vm.phoneNumber.setValue}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },

  phone: {
    fontSize: 25,
  },
  phoneDescription: {
    fontSize: 16,
    marginTop: 15,
    paddingHorizontal: 60,
    textAlign: 'center',
  },

  inputsContainer: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
  },
  phoneCode: {
    width: 75,
    textAlign: 'center',
  },
  phoneNumber: {
    flex: 1,
    borderLeftWidth: 0,
  },
});
