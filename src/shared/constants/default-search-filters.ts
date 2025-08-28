import { getFormattedDate } from '../utils/get-date.ts';
import { NewsFilterParams } from '../api/news.ts';

export const defaultSearchFilters: Partial<NewsFilterParams> = {
  q: 'kazan',
  from: '2025-08-20',
  to: getFormattedDate(),
  sortBy: 'popularity',
  pageSize: 11,
  page: 1,
};
