import { createEvent, createStore } from 'effector';
import { NewsFilterParams } from '../api/news.ts';
import { defaultSearchFilters } from '../constants/default-search-filters.ts';

export const setNewsFilter = createEvent<Partial<NewsFilterParams>>();

export const $newsFilter = createStore<NewsFilterParams>(defaultSearchFilters);

$newsFilter.on(setNewsFilter, (state, payload) => ({ ...state, ...payload }));
