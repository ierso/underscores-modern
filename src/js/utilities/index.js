import axios from 'axios';
import config from '../config';

const axiosConfig = {
  baseConfig: {
    baseURL: config.apiBaseEndpoint,
  },
  config: {
    baseURL: config.apiEndpoint,
  },
};

const HTTP_BASE = axios.create(axiosConfig.baseConfig);
const HTTP = axios.create(axiosConfig.config);

export { HTTP_BASE, HTTP };
