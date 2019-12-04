import { store } from '../store';

export const helperMixin = {
  methods: {
    isEmptyObject(object) {
      return Object.keys(object).length === 0 && object.constructor === Object;
    },
    limitText(string, length = 8) {
      let words = string.split(' ');
      if (words.length > length) {
        return `${words.slice(0, length).join(' ')}...`;
      } else {
        return string;
      }
    },
  },
};
