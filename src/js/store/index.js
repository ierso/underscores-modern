import Vue from 'vue';
import Vuex from 'vuex';
import authenticationModule from './modules/authentication';
import postsModule from './modules/posts';
import searchModule from './modules/search';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    authentication: authenticationModule,
    posts: postsModule,
    searchResults: searchModule,
  },
});
