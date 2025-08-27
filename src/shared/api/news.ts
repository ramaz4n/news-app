import { apiRequest } from './api-request';
import { FetchNewsList } from '../types/api/news.ts';
import { API_KEY } from '../constants/api.ts';

export type NewsFilterParams = {
  /**
   * Ключевое слово или фраза для поиска по контенту статьи (заголовок, описание, текст).
   * Поддерживает логические операторы: AND, OR, NOT, кавычки для точной фразы.
   * Примеры: 'tesla', '"elon musk"', '(crypto AND bitcoin) NOT ethereum'
   */
  q?: string;

  /**
   * Искать указанную фразу только в заголовках статей.
   */
  qInTitle?: string;

  /**
   * Начальная дата публикации (в формате YYYY-MM-DD).
   * Можно использовать вместе с `to`.
   */
  from?: string;

  /**
   * Конечная дата публикации (в формате YYYY-MM-DD).
   * Можно использовать вместе с `from`.
   */
  to?: string;

  /**
   * Язык новостей (ISO 639-1 код).
   * Примеры: 'en', 'es', 'fr', 'de', 'ru', 'ja', 'zh', 'ar' и др.
   * Полный список: https://newsapi.org/docs/languages
   */
  language?: string;

  /**
   * Сортировка результатов.
   * relevancy — по релевантности (по умолчанию для q)
   * popularity — по популярности
   * publishedAt — по дате (новые сначала)
   */
  sortBy?: 'relevancy' | 'popularity' | 'publishedAt';

  /**
   * Размер страницы (количество статей на одной странице).
   * От 1 до 100. По умолчанию — 20.
   */
  pageSize?: number;

  /**
   * Номер страницы (начинается с 1).
   * Используется для пагинации.
   */
  page?: number;

  /**
   * Двухбуквенный код страны (ISO 3166-1).
   * Работает только с эндпоинтом /top-headlines, не с /everything.
   * Примеры: 'us', 'gb', 'de', 'fr', 'ru'
   */
  country?: string;

  /**
   * Категория новостей.
   * Работает только с /top-headlines.
   * Возможные значения: 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'
   */
  category?: string;

  /**
   * Список источников (по ID), разделённых запятыми.
   * Пример: 'bbc-news,techcrunch,cnn'
   * Можно получить список через /sources
   */
  sources?: string;

  /**
   * Список доменов, из которых брать новости.
   * Пример: 'bbc.com,nytimes.com'
   */
  domains?: string;

  /**
   * Список доменов, которые нужно исключить.
   * Пример: 'reddit.com,foxnews.com'
   */
  excludeDomains?: string;

  /**
   * Исключить статьи, содержащие эти источники (по ID).
   * Пример: 'google-news,associated-press'
   */
  excludeSources?: string;

  // Примечание:
  // Параметры `country`, `category` — работают ТОЛЬКО с `/top-headlines`
  // Параметры `q`, `from`, `domains`, `language`, `sortBy` — работают с `/everything`
};

export const fetchNews = {
  news_list: (params: NewsFilterParams): FetchNewsList['res'] =>
    apiRequest({ url: '/everything', params: { ...params, apiKey: API_KEY } }),
};
