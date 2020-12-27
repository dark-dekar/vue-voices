import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import EN from './resources/i18n/en'
import ES from './resources/i18n/es'
import VoicesService from './services/VoicesService';
import AppStore from './config/appStore';

Vue.config.productionTip = false

const messages = {
  en: EN,
  es: ES,
}

Vue.use(VueI18n)
Vue.use(VoicesService)

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

new Vue({
  i18n,
  VoicesService,
  data: AppStore,
  render: h => h(App)
}).$mount('#app')

