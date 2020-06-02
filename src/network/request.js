import axios from "axios";

export function request(config) {
  // 1.创建实例
  const instance = axios.create({
    // baseURL: "http://123.207.32.32:8000",
    baseURL: "http://106.54.54.237:8000/api/mn",
    // baseURL: "http://localhost:8083",
    // baseURL: "http://192.168.0.105:3000", //手机检测时，换该地址
    timeout: 5000
  });
  // 2.给post请求的data 用qs.stringify转换成URL格式
//   if (config.data != null && Object.keys(config.data).length != 0) {
//     config.data = qs.stringify(config.data);
//   }

  // 3.请求拦截
  instance.interceptors.request.use(
    config => {
      //console.log(config);
      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 4.响应拦截
  instance.interceptors.response.use(
    result => {
      //console.log(result);
      return result.data;
    },
    err => {
      console.log(err);
    }
  );

  // 5.返回实例
  return instance(config);//返回promise
}
