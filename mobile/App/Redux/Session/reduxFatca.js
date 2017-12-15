const UPDATE = 'session/UPDATE';

export const update = (session) => ({
  type: UPDATE,
  session,
});

export const formState = {
    forms: {},
};

export const reducer = (state = formState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
            ...state.fatca,
            ...action.session,
      };
    default:
      return state;
  }
};
