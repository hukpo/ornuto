import { LanguageCode } from '@/types';

type Language = {
  code: LanguageCode;
  name: string;
  nativeName: string;
};

export const LANGUAGES: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
  },
  {
    code: 'ua',
    name: 'Ukrainian',
    nativeName: 'Українська',
  },
];
