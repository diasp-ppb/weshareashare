import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform';
import { AsyncStorage } from 'react-native';

const REDUX_PERSIST = {
  active: false,
  reducerVersion: '1.0',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['navigation'],
    transforms: [immutablePersistenceTransform],
  },
};

export default REDUX_PERSIST;
