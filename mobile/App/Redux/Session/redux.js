const UPDATE = 'session/UPDATE';
const RESET = 'session/RESET';

export const update = (session) => ({
  type: UPDATE,
  session,
});

export const reset = (client) => ({
  type: RESET,
  client,
});

export const initialState = {
  tokens: {
    access: {
      type: null,
      value: null,
      expiresIn: null,
    },
    refresh: {
      type: null,
      value: null,
    },
  },
  user: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  client: {
    id: null,
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state, ...action.session,
      };
    case RESET:
      return {
        ...initialState, ...action.client,
      }
    default:
      return state;
  }
};
