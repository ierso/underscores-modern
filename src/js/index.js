import '@babel/polyfill';
import Vue from 'vue';
import { store } from './store';
import components from './components';
import router from './router';

Vue.config.productionTip = false;

window.onload = () => {
  const app = new Vue({
    router: router,
    el: '#app',
    store,
    components,
  });
};
