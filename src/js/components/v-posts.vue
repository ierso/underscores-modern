<template>
  <div class="posts">
    <h2>Page: {{query}}</h2>
    <button v-on:click="goHome">Go Home</button>
    <ul class="posts__list">
      <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
    </ul>
    <h2>Slugs</h2>
    <ul class="posts__list">{{slugs}}</ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postsPerPage: '5',
      page: '1',
      order: 'asc',
    };
  },
  created() {
    this.fetchPosts();
    console.log(this.$route);
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts'];
    },
    slugs() {
      return this.$store.getters['posts/getSlugs'];
    },
    query() {
      return this.$route.name;
    },
  },
  methods: {
    fetchPosts: function() {
      this.$store.dispatch('posts/setPosts', {
        order: this.order,
        postsPerPage: this.postsPerPage,
        page: this.page,
      });
    },
    goHome: function() {
      this.$router.push({
        path: '/',
        query: { plan: 'private' },
        name: 'EXAMPLE',
        params: { userId: '123' },
      });
    },
  },
};
</script>

<style>
.posts {
  color: hotpink;
}
.posts__list {
  border: lightgreen solid 1px;
}
</style>