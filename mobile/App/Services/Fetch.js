import fetchival from 'fetchival';
import _ from 'lodash';

const API_URL = 'http://api.weshareashare.org';

export const fetchApi =
  (endPoint, payload = {}, method = 'get', session, headers = {}) => new Promise((resolve, reject) => {
    (fetchival(`${API_URL}${endPoint}`, {
      headers: _.pickBy({
        ...(session.tokens.access.value ? {
          Authorization: `Bearer ${session.tokens.access.value}`,
        } : {
          'client-id': session.client.id,
        }),
        ...headers,
      }, (item) => !_.isEmpty(item)),
    })[method.toLowerCase()](payload))
      .then((res) => {
        resolve(res);
      }).catch((e) => {
        if (e.response && e.response.json) {
          e.response.json().then((json) => {
            if (json) reject(json);
            reject(e);
          });
        } else {
          reject(e);
        }
      });
  });
