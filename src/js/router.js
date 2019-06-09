import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store';
import components from './components';

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' };

let routes = [
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
  {
    path: '/login',
    component: components.vLogin,
  },
  {
    path: '/register',
    component: components.vRegister,
  },
  {
    path: '/secure',
    name: 'secure',
    component: components.vSecure,
    meta: {
      // protected routes
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['authentication/isLoggedIn']) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
