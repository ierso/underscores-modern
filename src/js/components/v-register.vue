<template>
  <form class="form">
    <input type="text" placeholder="username">
    <input type="email" placeholder="email">
    <input type="password" placeholder="password">
    <button v-on:click="submit()">Submit</button>
  </form>
</template>

<script>
import { HTTP } from '../utilities';
export default {
  data() {
    return {
      name: 'form-name',
    };
  },
  created() {
    console.log('created');
  },
  computed: {},
  methods: {
    submit() {
      this.loginUser();
    },
    loginUser() {
      const userData = {
        username: 'cory-vue',
        password: 'admin',
      };
      this.$store.dispatch('authentication/loginUser', { userData });
    },
    registerUser() {
      const data = {
        username: 'vue-component',
        email: 'vue@gmail.com',
        password: 'admin1234',
      };
      HTTP.post('/users/register', data);
    },
  },
};
</script>

<style>
.form {
  border: greenyellow solid 2px;
}
</style>