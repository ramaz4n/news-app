import { useQueries } from '@tanstack/react-query';
import { QueryKeys } from '../types/api/query-keys.ts';
import { fetchNews } from '../api/news.ts';
import { useUnit } from 'effector-react';
import { $newsFilter } from '../models/news-filter-model.ts';

export const useNews = () => {
  const params = useUnit($newsFilter);

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([key, value]) => value !== '')
  );

  const queries = useQueries({
    queries: [
      {
        queryKey: [QueryKeys.NewsList, params],
        queryFn: () => fetchNews.news_list(filteredParams),
        enabled: !!params?.q,
      },
    ],
  });

  const { isLoading, isError, data, error } = queries[0];

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
