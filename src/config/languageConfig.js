import Vue from 'vue';
import VueI18n from 'vue-i18n';

import EN from '@/resources/i18n/en';
import ES from '@/resources/i18n/es';

Vue.use(VueI18n);

const messages = {
  en: EN,
  es: ES,
};

export default new VueI18n({
  locale: 'en',
  messages,
});
