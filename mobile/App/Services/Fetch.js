import fetchival from 'fetchival';
import _ from 'lodash';

const API_URL = 'http://172.30.9.163:1337'

export const fetchApi = (endPoint, payload = {}, method = 'get', session, headers = {}) => {
  console.log(session);

  return fetchival(`${API_URL}${endPoint}`, {
    headers: _.pickBy({
      ...(session.tokens.access ? {
        Authorization: `Bearer ${session.tokens.access}`,
      } : {
        'client-id': session.client.id,
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
