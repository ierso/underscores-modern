import Vue from 'vue';

const helloWorld = {
  name: 'hello-world',
  props: ['message'],
  template: '<h4>This is a test Component {{message}}</h4>',
};

export default helloWorld;
