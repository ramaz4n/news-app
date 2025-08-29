import axios, { AxiosError } from 'axios';

import { API_TIMEOUT, API_URL } from '../constants/api';
import { $flashApi } from '../models/flash-message-model.ts';
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

    console.blog(options);

    return res.data;
  } catch (_error) {
    const { response, message } = _error as AxiosError;

    console.log(response);

    if (response?.data?.status === 'error') {
      $flashApi.show({
        message: response.data.message ? 'Ошибка: ' + response.data.message : 'Unknown error',
        duration: 15_000,
      });

      return;
    }

    if (message === 'Network Error') {
      $flashApi.show({ message: 'Проверьте подключение к интеренету', duration: 15_000 });

      return;
    }
  }
};
