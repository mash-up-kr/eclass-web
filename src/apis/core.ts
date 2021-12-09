import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://server.jonghyeon.com/api/v1',
});

// MEMO(@mango906): 앱에 로그인 생기면 주석 풀기
// axiosInstance.defaults.headers.common.Authorization = MobileInterface.getToken() ?? '';

const fetcher = (params: AxiosRequestConfig) => axiosInstance(params).then((res) => res.data);

export default fetcher;
