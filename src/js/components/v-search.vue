<template>
  <div>
    <form action>
      <input type="text" v-model="searchInput">
      <input type="submit">
    </form>
    <div class="search-results">
      <ul>
        <li>search result</li>
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
};
</script>

<style>
</style>
