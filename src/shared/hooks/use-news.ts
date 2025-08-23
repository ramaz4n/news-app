import { useQueries } from '@tanstack/react-query';
import { QueryKeys } from '../types/api/query-keys.ts';
import { fetchNews } from '../api/news.ts';

export const useNews = () => {
  const queries = useQueries({
    queries: [
      {
        queryKey: [QueryKeys.NewsList],
        queryFn: () => fetchNews.news_list(),
      },
    ],
  });

  return { isLoading: queries.some((q) => q.isLoading), queries };
};
