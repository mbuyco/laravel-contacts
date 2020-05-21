import Vue from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

// eslint-disable-next-line no-new
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
