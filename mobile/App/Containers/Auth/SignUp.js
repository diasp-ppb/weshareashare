/**
 * Sign Up Container
 *
 */
import { connect } from 'react-redux';
import * as API from '@services/API';
import * as Session from '@redux/Session';
import FormRender from './FormView';

const mapStateToProps = state => ({
  user: state.user,
  formType: 'SignUp',
  formFields: ['Email', 'Password', 'ConfirmPassword', 'FirstName', 'LastName'],
  buttonTitle: 'Sign Up',
  successMessage: 'Your account was created with success!',
});

const mapDispatchToProps = (dispatch) => ({
  submit: API.register,
  createUser: (res) => dispatch(Session.createUser(res)),
  onRequestFailed: (exception) => dispatch(Session.onRequestFailed(exception)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
