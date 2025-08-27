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

export const setNews = createEvent<News>('set news');

export const $newsList = createStore<News[]>([]);

export const setNewsList = createEvent<News[]>('set newsList');

$newsList.on(setNewsList, (_, newsList) => newsList);

$news.on(setNews, (_, news) => news);
