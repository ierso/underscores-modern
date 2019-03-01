import '@babel/polyfill';
import Vue from 'vue';
import { store } from './store';
import components from './components';

Vue.config.productionTip = false;

window.onload = () => {
  const app = new Vue({
    el: '#app',
    store,
    components,
  });
};
