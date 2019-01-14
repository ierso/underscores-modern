const setTodo = (context, payload) => {
  context.commit('SET_TODO', payload);
};
const addTodo = (context, payload) => {
  context.commit('ADD_TODO', payload);
};

export default {
  setTodo,
  addTodo,
};
