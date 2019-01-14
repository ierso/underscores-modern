import Vue from 'vue';
import { store } from './store';
import components from './components';

Vue.config.productionTip = false;

const app = (() => {
  const init = () => {
    new Vue({
      el: '#app',
      store,
      components,
    });
  };
  return {
    init: init,
  };
})();

export default app;
