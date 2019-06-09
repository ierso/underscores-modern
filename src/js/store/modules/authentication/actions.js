import { HTTP_BASE, HTTP } from '../../../utilities';

const loginUser = async (context, payload) => {
  console.log('dispatching login action');
  try {
    let res = await HTTP_BASE.post('jwt-auth/v1/token', payload.userData);
    const token = res.data.token;
    const user = res.data.user;
    localStorage.setItem('token', token);
    context.commit('LOGIN_SUCCESS', token, user);
  } catch (err) {
    commit('LOGIN_ERROR');
    localStorage.removeItem('token');
  }
};

const logoutUser = async context => {
  try {
    context.commit('LOGOUT');
    localStorage.removeItem('token');
  } catch (err) {
    console.log(err);
  }
};

const registerUser = async (context, payload) => {
  console.log('dispatching register action');
  try {
    let res = await HTTP.post('/users/register', payload.userData);
    context.commit('REGISTER_SUCCESS');
  } catch (err) {
    console.log(err);
    context.commit('REGISTER_ERROR');
  }
};

export default {
  loginUser,
  logoutUser,
  registerUser,
};
