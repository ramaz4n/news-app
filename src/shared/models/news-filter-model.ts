import { createEvent, createStore } from 'effector';
import { NewsFilterParams } from '../api/news.ts';
import { getFormattedDate } from '../utils/get-date.ts';

export const setNewsFilter = createEvent<Partial<NewsFilterParams>>();

export const $newsFilter = createStore<NewsFilterParams>({
  q: 'kazan',
  from: '2025-08-20',
  to: getFormattedDate(),
  sortBy: 'popularity',
  pageSize: 11,
  page: 1,
});

$newsFilter.on(setNewsFilter, (state, payload) => ({ ...state, ...payload }));
