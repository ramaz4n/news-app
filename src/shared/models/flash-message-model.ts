import { createApi, createStore } from 'effector';

export interface FlashApiParams {
  message: string;
  duration?: number;
}

export const $flashMessage = createStore<FlashApiParams | null>(null);

export const $flashApi = createApi($flashMessage, {
  hide: () => null,
  show: (_, payload: FlashApiParams) => ({
    ...payload,
  }),
});
