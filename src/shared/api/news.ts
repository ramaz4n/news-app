import { apiRequest } from './api-request';
import { FetchNewsList } from '../types/api/news.ts';
import { API_KEY } from '../constants/api.ts';

export type NewsListParams = {
  q?: string;
  from?: string;
  to?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  // можно добавить page, pageSize и т.д.
};

export const fetchNews = {
  news_list: (params: NewsListParams): FetchNewsList['res'] =>
    apiRequest({ url: '/everything', params: { ...params, apiKey: API_KEY } }),
};
