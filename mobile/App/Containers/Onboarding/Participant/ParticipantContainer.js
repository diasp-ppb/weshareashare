import { connect } from 'react-redux';
import { Onboarding } from '@services/API';
import FormRender from './ParticipantView';
import * as OnboardingRedux from '@redux/Onboarding';

const mapStateToProps = (state) => ({
  session: state.session,
  user: state.session.user,
  question: 'Insira os seus dados pessoais',
});

const mapDispatchToProps = (dispatch) => ({
  submit: Onboarding.participant,
  onSuccessfulSubmit: (res) => dispatch(OnboardingRedux.participant(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
