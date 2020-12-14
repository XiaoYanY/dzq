import axios from 'axios';
import config from './config';
import { CODE_MESSAGE } from '../consts/statusCode';

axios.defaults.withCredentials = true;
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = config.baseURL;
axios.defaults.isCustomHeaders = true; // 是否拦截器重置请求头

// 中间件 拦截请求-
axios.interceptors.response.use(
  response => {
    if (config.isCustomHeaders) {
      // config.headers.Authorization = 'token';
    }
    return response;
  },
  err => {
    // console.log(err, '======error1')
    if (!err.response) return;

    const res = err.response;
    if (CODE_MESSAGE[res?.status]) {
      console.error(`${CODE_MESSAGE[res?.status]}`);
    }
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  err => {
    if (!err.response) return;
    Promise.reject(err);
  }
);

const safeRequest = (url, options) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      ...options,
      url
    }).then(
      res => {
        if (res) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      err => {
        reject(err);
      }
    );
  });
};

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = (url, opts = {}) => {
  return safeRequest(url, opts);
};

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = (url, opts = {}) => {
  return safeRequest(url, {
    ...opts,
    method: 'POST'
  });
};

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = (url, opts = {}) => {
  return safeRequest(url, {
    ...opts,
    method: 'PUT'
  });
};

export default {
  get,
  post,
  put
};
