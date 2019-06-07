import '@babel/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store';
import components from './components';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };

const routes = [
  { path: '/', component: components.vTest },
  {
    path: '/sample-page',
    component: components.vPosts,
    name: 'sample-page',
    // Method to handle authentication
    beforeEnter: (to, from, next) => {
      const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
      );
      if (answer) {
        next();
      } else {
        // You can reroute to wherever you'd like. For example: Register / Login
        next('/');
      }
    },
  },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

window.onload = () => {
  const app = new Vue({
    router: router,
    el: '#app',
    store,
    components,
  });
};
