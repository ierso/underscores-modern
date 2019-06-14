<template>
  <div>
    <div class="example">{{ welcome }} {{ message }}</div>
    <ul>
      <li>
        <a href="/sample-page">Go to Sample Page</a>
      </li>
      <li>
        <a href="/register">Go to Register Page</a>
      </li>
      <li>
        <a href="/login">Go to Login Page</a>
      </li>
      <li>
        <a href="/secure">Go to Secure Page</a>
      </li>
    </ul>
    <button v-on:click="checkLoggedIn()">Check Login</button>
    <v-search></v-search>
  </div>
</template>

<script>
import vSearch from './v-search.vue';
export default {
  components: { vSearch },
  props: ['message'],
  data() {
    return {
      welcome: 'hello',
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {
    checkLoggedIn() {
      console.log(this.$store.getters['authentication/isLoggedIn']);
    },
  },
};
</script>

<style>
.example {
  color: teal;
}
</style>