import { Onboarding } from '@services/API';
import * as OnboardingRedux from './redux';

export const investor = (res) => {
  return (dispatch, getState) => {
    dispatch(OnboardingRedux.updateInvestor({ investor: res.value }));
    const state = getState();
    console.log(state);
  };
};

export const subscription = (res) => {
  return (dispatch) => {
    dispatch(OnboardingRedux.updateSubscription({ subscription: res.value }));
  };
};

export const fatca = (res) => {
  return (dispatch) => {
    dispatch(OnboardingRedux.updateFatca({ fatca: res }));
  };
};

export const sendForms = (res) => {
  return (dispatch, getState) => {
    const state = getState();
    const forms = {};
    forms.participant = state.participant.participant;
    forms.subscription = state.subscription.subscription;
    // forms.fatca = state.fatca.fatca;
    console.log(forms);
    Subscription.subscribe(forms, state.session);
  };
};
