/**
 * Password Update Container
 *
 */
import { connect } from 'react-redux';
import * as API from '@services/API';
import FormRender from './FormView';

const mapStateToProps = state => ({
  session: state.session,
  formType: 'PasswordUpdate',
  formFields: ['Email', 'Token', 'Password', 'ConfirmPassword'],
  buttonTitle: 'Update password',
  successMessage: 'Your password has been successfully updated',
  introText: 'Use the token received to update your password',
});

const mapDispatchToProps = {
  submit: API.updatePassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
