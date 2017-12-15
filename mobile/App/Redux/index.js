import { combineReducers } from 'redux';
import configureStore from './CreateStore';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require('./NavigationRedux').reducer,
  session: require('./Session/redux').reducer,
  participant: require('./Session/reduxForm').reducer,
  investor: require('./Session/reduxInvestor').reducer,
  fatca: require('./Session/reduxFatca').reducer,
});

export default () => {
  const { store } = configureStore(reducers);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
