import { connect } from 'react-redux';
import { Onboarding } from '@services/API';
import FormRender from './FatcaView';
import * as OnboardingRedux from '@redux/Onboarding';

const mapStateToProps = (state) => ({
  session: state.session,
  user: state.session.user,
  options: [{ key: '1', text: 'Sim' }, { key: '2', text: 'Não' }],
  question: 'É uma US Person?',
});

const mapDispatchToProps = (dispatch) => ({
  submit: Onboarding.fatca,
  onSuccessfulSubmit: (res) => dispatch(OnboardingRedux.fatca(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
