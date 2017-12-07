/**
 * Login Container
 *
 */
import { connect } from 'react-redux';
import { Users } from '@services/API';
import I18n from '@i18n/i18n';
import * as Session from '@redux/Session';
import FormRender from './FormView';

const mapStateToProps = (state) => ({
  session: state.session,
  formType: 'SignIn',
  screenName: I18n.t('signInScreen'),
  formFields: ['Email', 'Password'],
  buttonTitle: I18n.t('signInButton'),
  successMessage: I18n.t('signInSuccessMessage'),
});

const mapDispatchToProps = (dispatch) => ({
  submit: Users.authenticate,
  onSuccessfulSubmit: (res) => dispatch(Session.authenticate(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
