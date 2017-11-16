import fetchival from 'fetchival';
import _ from 'lodash';

const API_URL = 'http://172.30.2.19:1337';

export const fetchApi = (endPoint, payload = {}, method = 'get', session, headers = {}) => {
  console.log(session);
  console.log(payload);
  return fetchival(`${API_URL}${endPoint}`, {
    headers: _.pickBy({
      ...(session.tokens.access.value ? {
        Authorization: `Bearer ${session.tokens.access.value}`,
      } : {
        'client-id': session.client.id,
      }),
      ...headers,
    }, item => !_.isEmpty(item)),
  })[method.toLowerCase()](payload)
};
