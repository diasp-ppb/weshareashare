import * as SessionAPI from './api';
import * as SessionRedux from './redux'

const SESSION_TIMEOUT_THRESHOLD = 300; // Will refresh the access token 5 minutes before it expires

let sessionTimeout = null;

const setSessionTimeout = (duration) => {
  clearTimeout(sessionTimeout);
  sessionTimeout = setTimeout(
    refreshToken,
    (duration - SESSION_TIMEOUT_THRESHOLD) * 1000
  );
};

const clearSession = (dispatch) => {
  clearTimeout(sessionTimeout);
  dispatch(SessionRedux.update(SessionRedux.initialState));
};

const onRequestSuccess = (res, dispatch) => {
  console.log(res)
  const tokens = res.tokens.reduce((prev, item) => ({
    ...prev,
    [item.type]: item,
  }), {});
  dispatch(SessionRedux.update({ tokens, user: res.user }));
  setSessionTimeout(tokens.access.expiresIn);
};

const onRequestFailed = (exception) => {
  clearSession();
  throw exception;
};

export const refreshToken = () => {
  return (dispatch, getState) => {
    const session = getState().session;

    if (!session.tokens.refresh.value || !session.user.id) {
      return Promise.reject();
    } else {
      SessionAPI.refresh(session.tokens.refresh, session.user, session.tokens.access)
      .then(onRequestSuccess(dispatch))
      .catch(onRequestFailed);
    }
  }
};

export const authenticate = (email, password) => {
  return (dispatch, getState) => {
    const session = getState().session;
    SessionAPI.authenticate(email, password, session)
    .then(onRequestSuccess(dispatch))
    .catch(onRequestFailed);
  }
}

export const revoke = () => {
  return (dispatch, getState) => {
    const session = getState().session;
    SessionAPI.revoke(Object.keys(session.tokens).map(tokenKey => ({
      type: session.tokens[tokenKey].type,
      value: session.tokens[tokenKey].value,
    })), session.tokens.access)
    .then(clearSession(dispatch))
    .catch(() => {});
  }
};

export const signup = (user) => {
  return (dispatch, getState) => {
    const session = getState().session;
    SessionAPI.register(user, session)
    .then((res) => {
      dispatch(SessionRedux.update({ 'user': res.user }));
    }).catch(onRequestFailed);
  }
}

export const authorize = () => {
  return (dispatch, getState) => {
    const session = getState().session;
    SessionAPI.authorize(session)
    .then((res) => {
      dispatch(SessionRedux.update({ 'client': res.client }));
    }).catch(onRequestFailed);
  }
}

export const forgotPassword = (email) => {
  return (dispatch, getState) => {
    let session = getState().session;
    SessionAPI.forgotPassword(email, session)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    });
  }
}

export const resetPassword = (password, resetToken) => {
  return (dispatch, getState) => {
    let session = getState().session;
    SessionAPI.resetPassword(password, resetToken, session)
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    });
  }
}
