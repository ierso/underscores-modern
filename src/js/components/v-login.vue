<template>
  <div>
    <form class="form form--login" @submit.prevent="submit">
      <h3>Login</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde optio modi, quasi
        earum placeat veritatis maxime, architecto iusto molestiae eos aliquid, animi quas.
        Porro at magni odio sunt. Eligendi, harum!
      </p>
      <div class="form__row">
        <div class="form__item">
          <input type="text" required v-model="username" placeholder="username">
        </div>
        <div class="form__item form__item--last">
          <input type="password" required v-model="password" placeholder="password">
        </div>
      </div>
      <div class="form__row form__row--last">
        <button class="button form__button" type="submit">Submit</button>
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