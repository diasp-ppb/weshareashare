import { connect } from 'react-redux';
import { Onboarding } from '@services/API';
import FormRender from './SubscriptionView';
import * as OnboardingRedux from '@redux/Onboarding';

const mapStateToProps = (state) => ({
  session: state.session,
  user: state.session.user,
  question: 'Introduza os dados relativamente à subscrição do PPR.',
});

const mapDispatchToProps = (dispatch) => ({
  submit: Onboarding.subscription,
  onSuccessfulSubmit: (res) => dispatch(OnboardingRedux.subscription(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
