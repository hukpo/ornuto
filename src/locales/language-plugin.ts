import { container } from 'tsyringe';
import { LanguageDetectorAsyncModule } from 'i18next';

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
    cacheUserLanguage: async (language: string) => {
      await simpleStorage.set('languageCode', language);
    },
  };
};
