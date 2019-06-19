<template>
  <form class="form form--register" @submit.prevent="submit">
    <h3>Register</h3>
    <div class="form__row">
      <div class="form__item">
        <input type="text" required v-model="username" placeholder="username">
      </div>
      <div class="form__item form__item--last">
        <input type="email" required v-model="email" placeholder="email">
      </div>
    </div>
    <div class="form__row">
      <div class="form__item form__item--full">
        <input type="password" required v-model="password" placeholder="password">
      </div>
    </div>
    <div class="form__row form__row--last">
      <button class="button form__button" type="submit">Submit</button>
    </div>
  </form>
</template>



<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  created() {
    console.log('created');
  },
  computed: {},
  methods: {
    submit() {
      this.registerUser();
    },
    registerUser() {
      const userData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch('authentication/registerUser', { userData });
    },
  },
};
</script>

<style>
.form__register {
  border: greenyellow solid 2px;
}
</style>