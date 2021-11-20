import { atom } from 'recoil';

export const loadingState = atom({
  key: 'loading',
  default: false,
});

export const isLogin = atom({
  key: 'isLogin',
  default: false,
});
