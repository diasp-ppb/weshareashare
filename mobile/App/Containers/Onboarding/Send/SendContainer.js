import { connect } from 'react-redux';
import { Onboarding } from '@services/API';
import FormRender from './SendView';
import * as OnboardingRedux from '@redux/Onboarding';

const mapStateToProps = (state) => ({
  session: state.session,
  onboarding: state.onboarding,
});

const mapDispatchToProps = (dispatch) => ({
  submitParticipant: Onboarding.participant,
  submitFatca: Onboarding.fatca,
  submitSubscription: Onboarding.subscription,

});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
