import { type AxiosRequestConfig } from 'axios';
import { News } from './news.ts';

export type ApiRequestParams = AxiosRequestConfig & {
  appLoading?: boolean;
};

export type FetchResponse<T> = Promise<ApiResponse<T>>;

export type FetchPaginationResponse<T> = Promise<ApiPaginationResponse<T>>;

export interface ApiResponse<T> {
  articles: News[];
  totalResults: boolean;
  status: string;
}

export type ApiPaginationResponse<Model> = ApiResponse<{
  countRecord: number;
  lastPage: number;
  models: Model;
}>;
