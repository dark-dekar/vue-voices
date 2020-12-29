import Vue from 'vue';
import VueI18n from 'vue-i18n';

import EN from '@/resources/i18n/en';
import ES from '@/resources/i18n/es';

Vue.use(VueI18n);

const messages = {
  en: EN,
  es: ES,
};

function getBroserLanguage() {
  let lang = window.navigator.language;

  if (lang) {
    if (lang.includes('-')) {
      lang = lang.split('-')[0];
    }
    return lang;
  }

  return;
}

export default new VueI18n({
  locale: getBroserLanguage() || 'en',
  messages,
});
