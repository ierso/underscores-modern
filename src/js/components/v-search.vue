<template>
  <div class="search">
    <h2>Search</h2>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="searchInput">
      <button type="submit">Submit</button>
    </form>
    <div class="search__results">
      <p>Search Results</p>
      <ul v-show="searchResults.length > 0" class="search__list">
        <li v-for="result in searchResults" :key="result.id">
          <h3>{{ result.title.rendered }}</h3>
          <span v-html="result.content.rendered"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: '',
    };
  },
  computed: {
    searchResults() {
      return this.$store.getters['searchResults/getSearchResults'];
    },
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('searchResults/setSearchResults', {
        searchInput: this.searchInput,
      });
      this.searchInput = '';
    },
  },
};
</script>

<style>
.search__list {
  border: teal solid 1px;
}
</style>
