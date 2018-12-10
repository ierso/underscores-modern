import Vue from 'vue';
import helloWorld from './components/hello-world';

const app = (function() {
  const init = () => {
    new Vue({
      el: '#app',
      components: {
        helloWorld,
      },
    });
  };
  return {
    init: init,
  };
})();

export default app;
