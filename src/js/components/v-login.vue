<template>
  <div>
    <h3>Login</h3>
    <form class="c-form c-form--login" @submit.prevent="submit">
      <div class="c-form__row">
        <div class="c-form__item">
          <input type="text" required v-model="username" placeholder="username">
        </div>
        <div class="c-form__item">
          <input type="password" required v-model="password" placeholder="password">
        </div>
      </div>
      <div class="c-form__row">
        <button class="o-button c-form__button" type="submit">Submit</button>
      </div>
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