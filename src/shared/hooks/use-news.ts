import { useQueries } from '@tanstack/react-query';
import { QueryKeys } from '../types/api/query-keys.ts';
import { fetchNews } from '../api/news.ts';
import { useUnit } from 'effector-react';
import { $newsFilter } from '../models/news-filter-model.ts';
import { useEffect } from 'react';
import { $newsList, $queryType, setNewsList } from '../models/news-model.ts';

export const useNews = () => {
  const [params, queryType] = useUnit([$newsFilter, $queryType]);

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(([key, value]) => value !== '')
  );

  const queries = useQueries({
    queries: [
      {
        queryKey: [QueryKeys.NewsList, params],
        queryFn: () => fetchNews.news_list(queryType, filteredParams),
        enabled: !!params?.q,
      },
    ],
  });

  const { isLoading, isError, data, error } = queries[0];

  useEffect(() => {
    if (data?.articles) {
      const currentNews = $newsList.getState();
      const updatedNews = params.page === 1 ? data.articles : [...currentNews, ...data.articles];

      setNewsList(updatedNews);
    }
  }, [data]);

  // useEffect(() => {
  //   console.log(params);
  // }, [params]);

  return {
    isLoading,
    isError,
    data,
    error,
  };
};
