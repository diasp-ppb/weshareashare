import { Buffer } from 'buffer';
import { fetchApi } from 'Fetch';

const endPoints = {
  authorize: '/clients',
  register: '/users',
  authenticate: '/users/auth',
  revoke: '/users/auth/revoke',
  refresh: '/users/auth/refresh',
  forgotPassword: '/users/auth/resetRequest',
  resetPassword: '/users/auth/resetPassword',
  contactUs: '/contactUs',
  document: '/documents',
};

export const authorize = (session) =>
  fetchApi(endPoints.authorize, {}, 'post', session)

export const register = (user, session) =>
  fetchApi(endPoints.register, {username: user.username, email: user.email, password: user.password}, 'post', session)

export const authenticate = (email, password, session) =>
  fetchApi(endPoints.authenticate, {}, 'post', session, {Authorization: `Basic ${new Buffer(`${email}:${password}`).toString('base64')}`});

export const refresh = (refreshToken, user, session) =>
  fetchApi(endPoints.refresh, { refreshToken, user }, 'post', session);

export const revoke = (tokens, session) =>
  fetchApi(endPoints.revoke, { tokens }, 'post', session);

export const forgotPassword = (email, session) =>
  fetchApi(endPoints.forgotPassword, { email: email }, 'post', session)

export const resetPassword = (password, resetToken, session) =>
  fetchApi(endPoints.resetPassword, {password: password, resetToken: resetToken}, 'post', session)

export const contactUs = (formData, session) =>
  fetchApi(endPoints.contactUs, {formData}, 'post', session)

export const uploadDocument = (session) => {
  fetchApi(endPoints.document, {}, 'post', session)
}

export const deleteDocument = (documentID, session) => {
  fetchApi(endPoints.document + `\${documentID}`, {}, 'delete', session)
}