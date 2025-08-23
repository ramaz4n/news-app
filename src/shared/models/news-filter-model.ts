import { createEvent, createStore } from 'effector';
import { NewsFilterParams } from '../api/news.ts';
import { getFormattedDate } from '../utils/get-date.ts';

export const updateNewsFilter = createEvent<Partial<NewsFilterParams>>();

export const $newsFilter = createStore<NewsFilterParams>({
  q: 'apple',
  from: '2025-08-20',
  to: getFormattedDate(),
  sortBy: 'popularity',
  country: '',
  category: '',
  sources: '',
  domains: '',
}).on(updateNewsFilter, (state, payload) => ({ ...state, ...payload }));
