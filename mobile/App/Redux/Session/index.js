import { Clients, Users, Subscription } from '@services/API';
import { NavigationActions } from 'react-navigation';
import * as SessionRedux from './redux';
import * as FormRedux from './reduxForm';

const SESSION_TIMEOUT_THRESHOLD = 300; // Will refresh the access token 5 minutes before it expires
let sessionTimeout = null;

const setSessionTimeout = (duration) => {
  clearTimeout(sessionTimeout);
  sessionTimeout = setTimeout(
    refreshToken,
    (duration - SESSION_TIMEOUT_THRESHOLD) * 1000,
  );
};

const clearSession = (dispatch, session) => {
  clearTimeout(sessionTimeout);
  dispatch(SessionRedux.reset({ client: session.client }));
};

export const onRequestFailed = (session) => {
  return (dispatch) => {
    clearSession(dispatch, session);
  };
};

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'userStack' }),
  ],
  key: null,
});

export const logout = () => {
  return (dispatch, getState) => {
    const session = getState().session;
    clearSession(dispatch, session);
  };
};

export const authorize = () => {
  return (dispatch, getState) => {
    const session = getState().session;
    Clients.authorize(session)
      .then((res) => {
        dispatch(SessionRedux.update({ client: res.client }));
      }).catch(() => onRequestFailed(session));
  };
};

export const createUser = (res) => {
  return (dispatch) => {
    dispatch(resetAction);
    dispatch(SessionRedux.update({ tokens: res.tokens, user: res.user }));
    setSessionTimeout(res.tokens.access.expiresIn);
  };
};

export const authenticate = (res) => {
  return (dispatch) => {
    dispatch(resetAction);
    dispatch(SessionRedux.update({ tokens: res.tokens, user: res.user }));
    setSessionTimeout(res.tokens.access.expiresIn);
  }
}

export const subscription = (res) => {
    return (dispatch, getState) => {
        dispatch(FormRedux.update({[res.key]: res.value}));
        console.log(getState());
        Subscription.subscribe(res.value);
    }
}

export const refreshToken = () => {
  return (dispatch, getState) => {
    const session = getState().session;

    if (!session.tokens.refresh.value || !session.user.id) {
      return Promise.reject();
    }
    Users.refresh(session.tokens.refresh, session.user, session.tokens.access)
      .then((res) => {
        dispatch(SessionRedux.update({ tokens: res.tokens, user: res.user }));
        setSessionTimeout(res.tokens.access.expiresIn);
      })
      .catch(onRequestFailed(session));
  };
};

export const revoke = () => {
  return (dispatch, getState) => {
    const session = getState().session;
    Users.revoke(Object.keys(session.tokens).map((tokenKey) => ({
      type: session.tokens[tokenKey].type,
      value: session.tokens[tokenKey].value,
    })), session.tokens.access)
      .then(clearSession(dispatch))
      .catch(onRequestFailed(session));
  };
};
