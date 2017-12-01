/**
 * Sign Up Container
 *
 */
import { connect } from 'react-redux';
import I18n from '@i18n/i18n';
import { Users } from '@services/API';
import * as Session from '@redux/Session';
import FormRender from './FormView';

const mapStateToProps = (state) => ({
  session: state.session,
  formType: 'SignUp',
  screenName: I18n.t('signUpScreen'),
  formFields: ['Email', 'Password', 'ConfirmPassword', 'FirstName', 'LastName'],
  buttonTitle:  I18n.t('signUpButton'),
  successMessage:  I18n.t('signUpSuccessMessage'),
});

const mapDispatchToProps = (dispatch) => ({
  submit: Users.register,
  onSuccessfulSubmit: (res) => dispatch(Session.createUser(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
