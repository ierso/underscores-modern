<template>
  <div>
    <h3>Login</h3>
    <form class="form form__login" @submit.prevent="submit">
      <input type="text" required v-model="username" placeholder="username">
      <input type="password" required v-model="password" placeholder="password">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
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
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch('authentication/loginUser', { userData });
    },
  },
};
</script>

<style>
.form__login {
  border: hotpink solid 2px;
}
</style>