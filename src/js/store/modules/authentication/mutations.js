const AUTH_SUCCESS = (state, token, user) => {
  state.status = 'success';
  state.token = token;
  state.user = user;
};

const AUTH_ERROR = state => {
  state.status = 'error';
};

export default {
  AUTH_SUCCESS,
  AUTH_ERROR,
};
