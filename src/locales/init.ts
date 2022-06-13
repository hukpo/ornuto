import i18next, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { detectLanguage } from './language-plugin';
import { LanguageCode, LanguageFiles } from '@/types';

const fallbackLng: LanguageCode = 'en';

const resources: Record<LanguageCode, LanguageFiles> = {
  en: {
    common: require('./en/common.json'),
    navigation: require('./en/navigation.json'),
    settings: require('./en/settings.json'),
    boxes: require('./en/boxes.json'),
    chat: require('./en/chat.json'),
    gallery: require('./en/gallery.json'),
    auth: require('./en/auth.json'),
  },
  ua: {
    common: require('./ua/common.json'),
    navigation: require('./ua/navigation.json'),
    settings: require('./ua/settings.json'),
    boxes: require('./ua/boxes.json'),
    chat: require('./ua/chat.json'),
    gallery: require('./ua/gallery.json'),
    auth: require('./ua/auth.json'),
  },
};

i18next
  .use(initReactI18next)
  .use(detectLanguage(fallbackLng))
  .init({
    fallbackLng,
    debug: false,
    compatibilityJSON: 'v3',
    interpolation: { escapeValue: false },
    ns: ['common', 'navigation', 'boxes', 'chat', 'gallery', 'auth'],
    resources: resources as unknown as Resource,
  });
