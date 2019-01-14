import axios from 'axios';
import config from '../config';

const axiosConfig = {
  baseURL: config.apiEndpoint,
};

const HTTP = axios.create(axiosConfig);

export { HTTP };
