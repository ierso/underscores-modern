import { HTTP } from '../../../utilities';

const setSearchResults = async (context, payload) => {
  const res = await HTTP.get(`posts?search=${payload.searchInput}`);
  const data = await res.data;
  context.commit('SET_SEARCH_RESULTS', data);
};

export default {
  setSearchResults,
};
