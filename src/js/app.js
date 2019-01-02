import Vue from 'vue';

import components from './components';

const app = (() => {
  const init = () => {
    new Vue({
      el: '#app',
      components: components,
    });
  };
  return {
    init: init,
  };
})();

export default app;
