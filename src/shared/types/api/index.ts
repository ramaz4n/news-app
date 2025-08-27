import { type AxiosRequestConfig } from 'axios';
import { News } from './news.ts';

export type ApiRequestParams = AxiosRequestConfig & {
  appLoading?: boolean;
};

export type FetchResponse<T> = Promise<ApiResponse>;

export interface ApiResponse {
  articles: News[];
  totalResults: boolean;
  status: string;
}
