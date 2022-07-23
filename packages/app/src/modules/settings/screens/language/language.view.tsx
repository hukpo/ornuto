import React from 'react';
import { observer } from 'mobx-react-lite';

import { useVm } from '@/hooks';
import { LANGUAGES } from '@/locales';
import { LanguageVm } from './language.vm';
import { UIList, UIScrollView, UISpacingStyles } from '@ornuto/ui-kit';

export const SettingsLanguage = observer(() => {
  const vm = useVm(LanguageVm);

  return (
    <UIScrollView style={UISpacingStyles.ps}>
      <UIList.Container>
        {LANGUAGES.map(({ name, nativeName, code }, index) => {
          const onPress = () => vm.selectLanguage(code);

          return (
            <UIList.Item
              key={index}
              title={name}
              subtitle={nativeName}
              onPress={onPress}
              selected={vm.languageCode === code}
            />
          );
        })}
      </UIList.Container>
    </UIScrollView>
  );
});
