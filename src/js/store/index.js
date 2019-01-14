import Vue from 'vue';
import Vuex from 'vuex';
import todosModule from './modules/todos';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    todos: todosModule,
  },
  // state: {
  //   todos: ["todo1", "todo2", "todo3"]
  // },
  // getters: {
  //   TODO: state => {
  //     return state.todos;
  //   }
  // },
  // mutations: {
  //   SET_TODO: (state, payload) => {
  //     state.todos = payload;
  //   },
  //   ADD_TODO: (state, payload) => {
  //     state.todos = [...state.todos, payload];
  //   }
  // },
  // actions: {
  //   setTodo: (context, payload) => {
  //     context.commit("SET_TODO", payload);
  //   },
  //   addTodo: (context, payload) => {
  //     context.commit("ADD_TODO", payload);
  //   }
  // }
});
