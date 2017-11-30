const UPDATE = 'session/UPDATE';

export const update = (session) => ({
  type: UPDATE,
  session,
});

export const formState = {
  subscription: {
    name: null,
    address: null,
  }
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
