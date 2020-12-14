import request from '../utils/request';

/**
 * 请求首页
 * https://文档链接
 */
export const getHomeData = async payload => {
  return request.get(`http://demo`, {
    params: payload
  });
};

export const saveData = async payload => {
  return request.post('http://demo', {
    data: payload
  });
};
