import { Buffer } from 'buffer';
import { fetchApi } from '@services/Fetch';

const endPoints = {
  register: '/users',
  authenticate: '/users/auth',
  revoke: '/users/auth/revoke',
  refresh: '/users/auth/refresh',
  resetPassword: '/users/auth/resetRequest',
  updatePassword: '/users/auth/resetPassword',
};

export const register = (formData, session) =>
  fetchApi(endPoints.register, formData, 'post', session);

export const authenticate = (formData, session) =>
  fetchApi(endPoints.authenticate, {}, 'post', session, { Authorization: `Basic ${new Buffer(`${formData.Email}:${formData.Password}`).toString('base64')}` });

export const refresh = (refreshToken, user, session) =>
  fetchApi(endPoints.refresh, { refreshToken, user }, 'post', session);

export const revoke = (tokens, session) =>
  fetchApi(endPoints.revoke, { tokens }, 'post', session);

export const resetPassword = (formData, session) =>
  fetchApi(endPoints.resetPassword, formData, 'post', session);

export const updatePassword = (formData, session) =>
  fetchApi(endPoints.updatePassword, formData, 'post', session);
