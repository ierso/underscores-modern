import Vue from 'vue';

export const helloWorld = () => {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello from Vue!',
    },
  });
};
