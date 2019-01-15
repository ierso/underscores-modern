import Vue from 'vue';
import Vuex from 'vuex';
import postsModule from './modules/posts';
import searchModule from './modules/search';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    posts: postsModule,
    searchResults: searchModule,
  },
});
