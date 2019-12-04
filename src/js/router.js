import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from './store';
import components from './components';

Vue.use(VueRouter);

let routes = [
  { path: '/', component: components.vTest },
];

const router = new VueRouter({
  base: '',
  routes: routes,
  mode: 'history',
});

export default router;
