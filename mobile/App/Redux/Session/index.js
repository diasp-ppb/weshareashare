import * as API from '../../Services/API';
import * as SessionRedux from './redux';

const SESSION_TIMEOUT_THRESHOLD = 300; // Will refresh the access token 5 minutes before it expires
let sessionTimeout = null;

const setSessionTimeout = (duration) => {
  clearTimeout(sessionTimeout);
  sessionTimeout = setTimeout(
    refreshToken,
    (duration - SESSION_TIMEOUT_THRESHOLD) * 1000,
  );
};

const clearSession = (dispatch) => {
  clearTimeout(sessionTimeout);
  dispatch(SessionRedux.update(SessionRedux.initialState));
};

export const onRequestFailed = (exception) => {
  return (dispatch) => {
    clearSession(dispatch);
  };
};

export const authorize = () => {
  return (dispatch, getState) => {
    const session = getState().session;
    API.authorize(session)
      .then((res) => {
        dispatch(SessionRedux.update({ client: res.client }));
      }).catch((err) => onRequestFailed(err, dispatch));
  };
};

export const createUser = (res) => {
  return (dispatch) => {
    dispatch(SessionRedux.update({ tokens: res.tokens, user: res.user }));
    setSessionTimeout(res.tokens.access.expiresIn);
  };
};

export const authenticate = (res) => {
  return (dispatch) => {
    dispatch(SessionRedux.update({ tokens: res.tokens, user: res.user }));
    setSessionTimeout(res.tokens.access.expiresIn);
  };
};

export const refreshToken = () => {
  return (dispatch, getState) => {
    const session = getState().session;

    if (!session.tokens.refresh.value || !session.user.id) {
      return Promise.reject();
    }
    API.refresh(session.tokens.refresh, session.user, session.tokens.access)
      .then((res) => {
        dispatch(SessionRedux.update({ tokens: res.tokens, user: res.user }));
        setSessionTimeout(res.tokens.access.expiresIn);
      })
      .catch(onRequestFailed);
  };
};

export const revoke = () => {
  return (dispatch, getState) => {
    const session = getState().session;
    API.revoke(Object.keys(session.tokens).map((tokenKey) => ({
      type: session.tokens[tokenKey].type,
      value: session.tokens[tokenKey].value,
    })), session.tokens.access)
      .then(clearSession(dispatch))
      .catch(onRequestFailed);
  };
};
