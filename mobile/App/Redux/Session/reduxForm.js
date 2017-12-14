const UPDATE = 'session/UPDATE';

export const update = (session) => ({
  type: UPDATE,
  session,
});

export const formState = {
  subscription: {
  },
  investor:{},
};

export const reducer = (state = formState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        subscription: {
            ...state.subscription,
            ...action.session
        },
      };
    default:
      return state;
  }
};
