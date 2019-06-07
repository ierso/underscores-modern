import { HTTP_BASE } from '../../../utilities';

const loginUser = async (context, payload) => {
  console.log('dispatching login action');
  try {
    let res = await HTTP_BASE.post('jwt-auth/v1/token', payload.userData);
    const token = res.data.token;
    const user = res.data.user;
    localStorage.setItem('token', token);
    context.commit('AUTH_SUCCESS', token, user);
  } catch (err) {
    commit('AUTH_ERROR');
    localStorage.removeItem('token');
  }
};

export default {
  loginUser,
};
