import { atom, selector } from 'recoil';

import type { Tasks } from '../types/tasks';

export const addTitleState = atom<Array<Tasks>>({
  default: [],
  key: 'addTitleState',
});

export const addTitleStateLength = selector<number>({
  get: ({ get }) => {
    const addTitleNumber: Array<Tasks> = get(addTitleState);
    return addTitleNumber?.length || 0;
  },
  key: 'addTitleStateLength',
});
