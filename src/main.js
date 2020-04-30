// Libraries
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';
import 'element-ui/lib/theme-chalk/index.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// Setup of libraries
Vue.use(ElementUI, { locale });
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
