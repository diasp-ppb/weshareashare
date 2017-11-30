import { Buffer } from 'buffer';
import { fetchApi } from '@services/Fetch';

export const uploadDocument = (session) => {
  fetchApi('/documents', {}, 'post', session);
};

export const deleteDocument = (documentID, session) => {
  fetchApi('/documents' + '${documentID}', {}, 'delete', session);
};
