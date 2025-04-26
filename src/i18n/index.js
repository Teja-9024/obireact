import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as en from "./en";
import * as es from "./es";
import * as fr from "./fr";

const resources = {
  "en": en,
  "es": es,
  "fr": fr
}

async function setupI18n() {
  await i18n
    .use(initReactI18next)
    .init({
      lng: 'en',
      fallbackLng: 'en',
      debug: true,
      resources,
      interpolation: {
        escapeValue: false
      }
    });
}

setupI18n();  
