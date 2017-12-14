import { fetchApi } from '@services/Fetch';

export const subscribe = (form) =>
  fetchApi('/subscription', {}, 'post', form);
