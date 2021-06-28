import axios from 'axios';
import { Notification } from 'element-ui';
import State from './requestState.js'
// import { getToken } from '@/utils/auth';
import Config from '@/config/setting';

let apiHost = '';
process.env.NODE_ENV == 'production' ? '' : apiHost = 'http://127.0.0.1:9000/'
// 创建axios实例
const service = axios.create({
  baseURL: apiHost, // api 的 base_url
  timeout: Config.timeout // 请求超时时间
});
// request拦截器
service.interceptors.request.use(
  config => {
    // if (getToken()) {
    //   config.headers['Authorization'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status;
    if (code != 200) {
      Notification.error({
        title: response.msg
      });
      return Promise.reject('error');
    } else {
      console.log(response)
      return response.data;
    }
  },
  error => {
    let code = 0;
    try {
      code = error.response.data.status || error.response.status;
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        Notification.error({
          title: '网络请求超时',
          duration: 5000
        });
        return Promise.reject(error);
      }
    }
    if (code) {
      State.api(code, error.response.data)
    } else {
      Notification.error({
        title: '接口请求失败',
        duration: 5000
      });
    }
    return Promise.reject(error);
  }
);
export default service;
