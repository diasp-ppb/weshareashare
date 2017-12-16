import { fetchApi } from '@services/Fetch';

export const subscription = (subscription, session) =>
  fetchApi('/subscription', subscription, 'post', session);

export const participant = (participant, session) =>
  fetchApi('/participant', participant, 'post', session);

export const investor = (profile, session) =>
  fetchApi('/investor', profile, 'post', session);

export const fatca = (agreement, session) =>
  fetchApi('/fatca', agreement, 'post', session);
