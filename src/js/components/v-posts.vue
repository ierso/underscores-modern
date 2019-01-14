<template>
  <div class="posts">
    <ul>
      <li v-if="!posts">Loading...</li>
      <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
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
</style>