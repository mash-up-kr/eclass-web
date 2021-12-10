import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Sticker } from 'models/Sticker';

type StickerResponse = Sticker[];

// eslint-disable-next-line import/no-mutable-exports
let Stickers: StickerResponse = [];

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://server.jonghyeon.com/api/v1',
});

// MEMO(@mango906): 앱에 로그인 생기면 주석 풀기
// axiosInstance.defaults.headers.common.Authorization = MobileInterface.getToken() ?? '';

const fetcher = (params: AxiosRequestConfig) => axiosInstance(params).then((res) => res.data);

axiosInstance.get<StickerResponse>('/sticker').then(({ data }) => {
  Stickers = data ?? [];
});

export { fetcher, Stickers };
