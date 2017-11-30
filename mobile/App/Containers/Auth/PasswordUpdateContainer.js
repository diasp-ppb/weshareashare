/**
 * Password Update Container
 *
 */
import { connect } from 'react-redux';
import { Users } from '@services/API';
import FormRender from './FormView';

const mapStateToProps = state => ({
  session: state.session,
  formType: 'PasswordUpdate',
  screenName: 'Password Update',
  formFields: ['Email', 'Token', 'Password', 'ConfirmPassword'],
  buttonTitle: 'Update password',
  successMessage: 'Your password has been successfully updated',
});

const mapDispatchToProps = (dispatch) => ({
  submit: Users.updatePassword,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
