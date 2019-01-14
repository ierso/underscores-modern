import '@babel/polyfill';
import axios from 'axios';
import $ from 'jquery';

import app from './app';

window.onload = () => {
  app.init();
};
