import { createStore, createEvent } from 'effector';
import { News } from '../types/api/news.ts';

export const $news = createStore<News>({
  source: {
    id: '',
    name: '',
  },
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  publishedAt: '',
  content: '',
});

export const $queryType = createStore<string>('everything');

export const $newsList = createStore<News[]>([]);

export const setNews = createEvent<News>('set news');

export const setQueryType = createEvent<string>('set query_type');

export const setNewsList = createEvent<News[]>('set newsList');

$newsList.on(setNewsList, (_, newsList) => newsList);

$news.on(setNews, (_, news) => news);

$queryType.on(setQueryType, (_, queryType) => queryType);
