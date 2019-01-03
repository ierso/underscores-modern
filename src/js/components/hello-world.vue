<template>
  <div class="example">
    {{ welcome }}
    {{ todos }}
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
  computed: {
    todos() {
      return this.$store.getters['todos/getTodos'];
    },
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