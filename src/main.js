import Vue from 'vue';
import VueRouter from 'vue-router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import VoicesService from './services/VoicesService';
import DebounceService from './services/DebounceService';
import AppStore from './config/appStore';
import Routes from './config/routes';
import i18n from './config/languageConfig';

Vue.config.productionTip = false;

Vue.use(VoicesService);
Vue.use(DebounceService);
Vue.use(VueRouter);

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
