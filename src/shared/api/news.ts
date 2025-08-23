import { apiRequest } from './api-request';
import { FetchNewsList } from '../types/api/news.ts';
import { API_KEY } from '../constants/api.ts';

export type NewsFilterParams = {
  q?: string;
  from?: string;
  to?: string;
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';
  country?: string;
  category?: string;
  sources?: string;
  domains?: string;
};

export const fetchNews = {
  news_list: (params: NewsFilterParams): FetchNewsList['res'] =>
    apiRequest({ url: '/everything', params: { ...params, apiKey: API_KEY } }),
};
