import { AutoNightMode } from './ui.type';
import { LanguageCode } from './locales.type';

export type StorageKeys = {
  languageCode: LanguageCode;
  autoNightMode: AutoNightMode;
  nightModeToggled: 'true' | 'false';
};
