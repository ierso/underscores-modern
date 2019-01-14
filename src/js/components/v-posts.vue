<template>
  <div class="posts">
    <h2>Posts</h2>
    <ul class="posts__list">
      <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    this.fetchPosts();
  },
  computed: {
    posts() {
      return this.$store.getters['posts/getPosts'];
    },
  },
  methods: {
    fetchPosts: function() {
      this.$store.dispatch('posts/setPosts');
    },
  },
};
</script>

<style>
.example {
  color: teal;
}
.posts__list {
  border: red solid 1px;
}
</style>