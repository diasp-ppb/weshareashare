import fetchival from 'fetchival';
import _ from 'lodash';

import store from '../Redux/CreateStore';

const API_URL = 'http://172.18.0.1/1337'

export const exceptionExtractError = (exception) => {
  if (!exception.Errors) return false;
  let error = false;
  const errorKeys = Object.keys(exception.Errors);
  if (errorKeys.length > 0) {
    error = exception.Errors[errorKeys[0]][0].message;
  }
  return error;
};

export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) => {
  const accessToken = store.getState().services.session.tokens.access.value;
  return fetchival(`${API_URL}${endPoint}`, {
    headers: _.pickBy({
      ...(accessToken ? {
        Authorization: `Bearer ${accessToken}`,
      } : {
        'Client-ID': '8puWuJWZYls1Ylawxm6CMiYREhsGGSyw',
      }),
      ...headers,
    }, item => !_.isEmpty(item)),
  })[method.toLowerCase()](payload)
    .catch((e) => {
      if (e.response && e.response.json) {
        e.response.json().then((json) => {
          if (json) throw json;
          throw e;
        });
      } else {
        throw e;
      }
    });
};
