import { Buffer } from 'buffer';
import { fetchApi } from '../../Services/Fetch';

const endPoints = {
	authorize: '/clients',
	register: '/users',
	authenticate: '/users/auth',
	revoke: '/users/auth/revoke',
	refresh: '/users/auth/refresh',
	forgotPassword: '/users/auth/resetRequest',
	resetPassword: '/users/auth/resetPassword'
};

export const authorize = () => fetchApi(endPoints.authorize, {}, 'post')

export const register = (username, email, password) => fetchApi(endPoints.create, {
  user: {username, email, password}
}, 'post')

export const authenticate = (email, password) => fetchApi(endPoints.authenticate, {}, 'post', null, {
	Authorization: `Basic ${new Buffer(`${email}:${password}`).toString('base64')}`,
});

export const refresh = (token, user, accessToken) => fetchApi(endPoints.refresh, { token, user }, 'post', accessToken, {
	'client-id': '8puWuJWZYls1Ylawxm6CMiYREhsGGSyw',
	Authorization: null,
});

export const revoke = (tokens, accessToken) => fetchApi(endPoints.revoke, { tokens }, 'post', accessToken);

export const forgotPassword = (email) => fetchApi(endPoints.forgotPassword, { email: email }, 'post')

export const resetPassword = (password, resetToken) => fetchApi(endPoints.resetPassword, {
  password: password, resetToken: resetToken
}, 'post')