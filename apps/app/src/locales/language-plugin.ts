import { container } from 'tsyringe';
import { LanguageDetectorModule } from 'i18next';

import { LanguageCode } from '@/types';
import { SimpleStorage } from '@/services';

export const detectLanguage = (fallbackLanguageCode: string): LanguageDetectorModule => {
  const simpleStorage = container.resolve(SimpleStorage);

  return {
    type: 'languageDetector',
    init: () => null,
    detect: () => {
      return simpleStorage.get('languageCode') || fallbackLanguageCode;
    },
    cacheUserLanguage: (languageCode: LanguageCode) => {
      simpleStorage.set('languageCode', languageCode);
    },
  };
};
