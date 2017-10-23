import { Buffer } from 'buffer';
import { fetchApi } from '../../Services/Fetch';

const endPoints = {
	authenticate: '/users/auth',
	revoke: '/users/auth/revoke',
	refresh: '/users/auth/refresh',
};

export const authenticate = (email, password, accessToken) => fetchApi(endPoints.authenticate, {}, 'post', accessToken, {
	Authorization: `Basic ${new Buffer(`${email}:${password}`).toString('base64')}`,
}, accessToken);

export const refresh = (token, user, accessToken) => fetchApi(endPoints.refresh, { token, user }, 'post', accessToken, {
	'Client-ID': '8puWuJWZYls1Ylawxm6CMiYREhsGGSyw',
	Authorization: null,
});

export const revoke = (tokens, accessToken) => fetchApi(endPoints.revoke, { tokens }, 'post', accessToken);
