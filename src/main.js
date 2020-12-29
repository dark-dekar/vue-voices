import Vue from 'vue';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import EN from './assets/i18n/en';
import ES from './assets/i18n/es';
import VoicesService from './services/VoicesService';
import DebounceService from './services/DebounceService';
import AppStore from './config/appStore';
import Routes from './config/routes';

Vue.config.productionTip = false;

const messages = {
  en: EN,
  es: ES,
};

Vue.use(VueI18n);
Vue.use(VoicesService);
Vue.use(DebounceService);
Vue.use(VueRouter);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

const router = new VueRouter({
  mode: 'history',
  routes: Routes,
});

new Vue({
  i18n,
  VoicesService,
  store: AppStore,
  router,
  render: (h) => h(App),
}).$mount('#app');
