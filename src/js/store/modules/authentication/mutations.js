const LOGIN_SUCCESS = (state, token, user) => {
  state.status = 'success';
  state.token = token;
  state.user = user;
};
const LOGIN_ERROR = state => {
  state.status = 'error';
};
const REGISTER_SUCCESS = state => {
  state.status = 'success';
};
const REGISTER_ERROR = state => {
  state.status = 'error';
};
const LOGOUT = state => {
  state.status = '';
  state.token = '';
};

export default {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
};
