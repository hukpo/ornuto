import { container } from 'tsyringe';
import { LanguageDetectorAsyncModule } from 'i18next';

import { LanguageCode } from '@/types';
import { SimpleStorage } from '@/services';

export const detectLanguage = (fallbackLanguageCode: string): LanguageDetectorAsyncModule => {
  const simpleStorage = container.resolve(SimpleStorage);

  return {
    type: 'languageDetector',
    async: true,
    init: () => null,
    detect: async (callback: (languageCode: string) => void) => {
      const languageCode = await simpleStorage.get('languageCode');

      callback(languageCode || fallbackLanguageCode);
    },
    cacheUserLanguage: async (languageCode: LanguageCode) => {
      await simpleStorage.set('languageCode', languageCode);
    },
  };
};
