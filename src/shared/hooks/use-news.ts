import { useQueries } from '@tanstack/react-query';
import { QueryKeys } from '../types/api/query-keys.ts';
import { fetchNews } from '../api/news.ts';
import { useUnit } from 'effector-react';
import { $newsFilter } from '../models/news-filter-model.ts';
import { useEffect } from 'react';
import { $newsList, setNewsList } from '../models/news-model.ts';

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

  useEffect(() => {
    console.log(queries[0]);

    if (data?.articles) {
      const currentNews = $newsList.getState();
      const updatedNews = params.page === 1 ? data.articles : [...currentNews, ...data.articles];

      setNewsList(updatedNews);
    }
  }, [data]);

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
