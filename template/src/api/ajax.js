import { AjaxPlugin, cookie } from 'vux';
import qs from 'qs';
// import Vue from 'vue';
import router from '../router';

const url = process.env.API_URL;

const $http = AjaxPlugin.$http.create({
  baseURL: url, // api域名及端口
  timeout: 50000, // 超时自动取消请求
  responseType: 'json', // 返回数据格式
  withCredentials: true, // 是否允许带cookie等验证信息
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=utf-8',
  },
});

// 添加请求拦截器
$http.interceptors.request.use(
  (config) => {
    // 统一修改请求地址参数
    if (cookie.get('token')) {
      config.headers.Authorization = cookie.get('token');
    }
    if (config.method === 'post' || config.method === 'option') {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => Promise.reject(error),
);

// 添加响应拦截器
$http.interceptors.response.use(
  (response) => {
    // 处理响应数据
    const result = response.data;
    if (result && result.status !== 'SUCCESS') {
      // 接口错误码判断
      if (result.errorCode === 403) {
        router.push({ path: '/login' });
      }
      return Promise.reject(result);
    }
    return result.data;
  },
  (error) => {
    // http错误码判断
    if (error.response.status === 403) {
      router.push({ path: '/login' });
    }
    if (error.response.status === 500) {
      router.push({ path: '/500' });
    }
    if (error.response.status === 404) {
      router.push({ path: '/404' });
    }
    // 返回 response 里的错误信息
    return Promise.reject(error.response.statusText);
  },
);

export default $http;

// 把axios的实例封装成一个插件, 以便使用 Vue.use(xxxx)
// export default {
//   install(Vue, Option) {
//     Object.defineProperty(Vue.prototype, '$http', { value: $http });
//   },
// };
