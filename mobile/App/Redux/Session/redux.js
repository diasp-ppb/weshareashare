const UPDATE = 'session/UPDATE';

export const update = session => ({
  type: UPDATE,
  session,
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
    username: null,
  },
  client: {
    id: null,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state, ...action.session,
      };
    default:
      return state;
  }
};
