const SET_TODO = (state, payload) => {
  state.todos = payload;
};
const ADD_TODO = (state, payload) => {
  state.todos = [...state.todos, payload];
};

export default {
  SET_TODO,
  ADD_TODO
};
