import axios, { AxiosError } from 'axios';

import { API_TIMEOUT, API_URL } from '../constants/api';
import { $flashApi } from '../models/flash-message';
import { ApiRequestParams } from '../types/api';

export const apiRequest = async ({ ...options }: ApiRequestParams) => {
  try {
    const headers: ApiRequestParams['headers'] = { ...options.headers };
    const res = await axios.request({
      baseURL: API_URL,
      timeout: API_TIMEOUT,
      headers,
      ...options,
    });
    return res.data;
  } catch (_error) {
    const { response, message } = _error as AxiosError;
    if (message === 'Network Error') {
      $flashApi.show({ message: 'Проверьте подключение к интеренету', duration: 15_000 });

      return;
    }
    if (response?.status === 401) {
      console.log(response);
    }
  }
};
