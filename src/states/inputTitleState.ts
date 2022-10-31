import { atom } from 'recoil';

export const inputTitleState = atom<string>({
  default: '',
  key: 'inputTitleState',
});
