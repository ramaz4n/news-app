import { FetchResponse } from './index';

export type FetchNewsList = {
  res: FetchResponse<News[]>;
};

export interface News {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
