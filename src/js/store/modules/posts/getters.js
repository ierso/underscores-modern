const getPosts = state => {
  return state.posts;
};

const getSlugs = state => {
  return state.posts.map(post => {
    return post.slug;
  });
};

export default {
  getPosts,
  getSlugs,
};
