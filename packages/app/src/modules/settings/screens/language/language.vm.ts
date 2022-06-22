import i18next from 'i18next';

import { LanguageCode } from '@/types';
import { makeSimpleAutoObservable } from '@/stores';

export class LanguageVm {
  private _languageCode = i18next.language as LanguageCode;

  constructor() {
    makeSimpleAutoObservable(this, undefined, { autoBind: true });
  }

  get languageCode(): LanguageCode | null {
    return this._languageCode;
  }
  setLanguageCode(value: LanguageCode) {
    this._languageCode = value;
  }

  async selectLanguage(code: LanguageCode): Promise<void> {
    i18next.changeLanguage(code);
    this.setLanguageCode(code);
  }
}
