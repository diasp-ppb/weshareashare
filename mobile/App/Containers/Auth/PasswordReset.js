/**
 * Password Reset Container
 *
 */
import { connect } from 'react-redux';
import * as API from '@services/API';
import FormRender from './FormView';

const mapStateToProps = state => ({
  session: state.session,
  formType: 'PasswordReset',
  formFields: ['Email'],
  buttonTitle: 'Send reset token',
  successMessage: 'We\'ve emailed you the instructions',
  introText: 'Enter your email. We\'ll send you instructions to safely reset your password',
});

const mapDispatchToProps = {
  submit: API.resetPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
