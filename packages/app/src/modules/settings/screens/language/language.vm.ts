import i18next from 'i18next';

import { LanguageCode } from '@/types';
import { makeSimpleAutoObservable } from '@/stores';

export class LanguageVm {
  languageCode = i18next.language as LanguageCode;

  constructor() {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  selectLanguage(code: LanguageCode) {
    i18next.changeLanguage(code);
    this.languageCode = code;
  }
}
