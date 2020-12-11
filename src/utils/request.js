import axios from 'axios';
import config from './config';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '400接口请求失败，请重试！如有疑问，联系管理员。。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '抱歉！你暂无权限操作此功能。',
  404: '404接口请求失败，请重试！如有疑问，联系管理员。。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

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
    if (codeMessage[res?.status]) {
      console.error(`${codeMessage[res?.status]}`);
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
