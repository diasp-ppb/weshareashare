const FATCA = 'onboarding/FATCA';
const SUBSCRIPTION = 'onboarding/SUBSCRIPTION';
const INVESTOR = 'onboarding/INVESTOR';
const PARTICIPANT = 'onboarding/PARTICIPANT';

export const updateFatca = (fatca) => ({
  type: FATCA,
  fatca,
});

export const updateSubscription = (subscription) => ({
  type: SUBSCRIPTION,
  subscription,
});

export const updateParticipant = (participant) => ({
  type: PARTICIPANT,
  participant,
});

export const updateInvestor = (investor) => ({
  type: INVESTOR,
  investor,
});

export const formState = {
  fatca: {},
  investor: {},
  subscription: {},
};

export const reducer = (state = formState, action) => {
  switch (action.type) {
    case FATCA:
      return {
        ...state,
        ...action.fatca,
      };
    case SUBSCRIPTION:
      return {
        ...state,
        ...action.subscription,
      };
    case PARTICIPANT:
      return {
        ...state,
        ...action.participant,
      };
    case INVESTOR:
      return {
        ...state,
        ...action.investor,
      };
    default:
      return state;
  }
};
