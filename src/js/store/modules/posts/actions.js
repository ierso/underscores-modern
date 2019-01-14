import { HTTP } from '../../../utilities';

const setPosts = async context => {
  const res = await HTTP.get('/posts');
  const payload = await res.data;
  context.commit('SET_POSTS', payload);
};

export default {
  setPosts,
};
