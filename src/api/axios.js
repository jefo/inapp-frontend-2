import axios from 'axios';

const instance = axios.create({
  timeout: 10000,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['token'] = token
  }
  // const prepareData = (params = {}) =>
  //   Object.keys(params).reduce((acc, next) => {
  //     acc[next] =
  //       params[next] instanceof Date
  //         ? format(params[next], 'yyyy-MM-dd')
  //         : params[next];
  //     return acc;
  //   }, {});
  //
  // config.paramsSerializer = (params = {}) => {
  //   const mapped = prepareData(params);
  //   return qs.stringify(mapped);
  // };
  // config.transformRequest.unshift(prepareData);
  return config;
});

export default instance;
