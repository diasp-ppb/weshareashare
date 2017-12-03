import { fetchApi } from '@services/Fetch';

export const contactUs = (formData, session) =>
  fetchApi('/contactUs', formData, 'post', session);
