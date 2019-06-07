<template>
  <div>
    <div class="example">{{ welcome }} {{ message }}</div>
    <a href="/sample-page">Go to Sample Page</a>
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
  created() {
    console.log(this.$route);
  },
};
</script>

<style>
.example {
  color: teal;
}
</style>