import i18next from 'i18next';
import { makeSimpleAutoObservable } from '@ornuto/utils';

import { LanguageCode } from '@/types';

export class LanguageVm {
  languageCode = i18next.language as LanguageCode;

  constructor() {
    makeSimpleAutoObservable(this);
  }

  selectLanguage(code: LanguageCode) {
    i18next.changeLanguage(code);
    this.languageCode = code;
  }
}
