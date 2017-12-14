import { fetchApi } from '@services/Fetch';

export const investor = (form) =>
  fetchApi('/investor', {}, 'post', form);
