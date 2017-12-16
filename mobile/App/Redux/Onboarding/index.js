import { Onboarding } from '@services/API';
import * as OnboardingRedux from './redux';

export const participant = (res) => {
  return (dispatch) => {
    dispatch(OnboardingRedux.updateParticipant({ participant: res }));
  };
};

export const investor = (res) => {
  return (dispatch, getState) => {
    const state = getState();
    dispatch(OnboardingRedux.updateInvestor({investor: {...state.onboarding.investor, ...res}}));
    console.log(state);
  };
};

export const subscription = (res) => {
  return (dispatch) => {
    dispatch(OnboardingRedux.updateSubscription({ subscription: res }));
  };
};

export const fatca = (res) => {
  return (dispatch) => {
    dispatch(OnboardingRedux.updateFatca({ fatca: res }));
  };
};
