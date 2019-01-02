<template>
  <div class="example">{{ welcome }} {{ message }}</div>
</template>

<script>
export default {
  props: ['message'],
  data() {
    return {
      welcome: 'hello',
    };
  },
};
</script>

<style>
.example {
  color: teal;
}
</style>