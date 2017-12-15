import { fetchApi } from '@services/Fetch';

export const subscribe = (form, session) =>
  fetchApi('/subscription', form, 'post', session);
