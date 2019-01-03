import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  todos: ["todo1", "todo2", "todo3"]
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
