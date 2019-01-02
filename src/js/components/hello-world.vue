<template>
  <div class="example">
    {{ welcome }}
    {{ message }}
    <button v-on:click="changeMessage">click</button>
  </div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      welcome: 'hello',
    };
  },
  methods: {
    changeMessage: function(event) {
      console.log('clicked');
    },
  },
};
</script>

<style>
.example {
  color: teal;
}
</style>