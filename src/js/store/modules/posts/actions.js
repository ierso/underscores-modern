import { HTTP } from '../../../utilities';

const setPosts = async (context, payload) => {
  const res = await HTTP.get(
    `/posts?order=${payload.order}&per_page=${payload.postsPerPage}&page=${
      payload.page
    }`
  );
  const data = await res.data;
  context.commit('SET_POSTS', data);
};

export default {
  setPosts,
};
