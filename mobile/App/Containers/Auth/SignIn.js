/**
 * Login Container
 *
 */
import { connect } from 'react-redux';
import * as API from '@services/API';
import * as Session from '@redux/Session';
import FormRender from './FormView';

const mapStateToProps = state => ({
  session: state.session,
  formType: 'SignIn',
  formFields: ['Email', 'Password'],
  buttonTitle: 'Sign In',
  successMessage: 'You\'re now logged in',
});

const mapDispatchToProps = (dispatch) => ({
  submit: API.authenticate,
  authUser: (res) => dispatch(Session.authenticate(res)),
  onRequestFailed: (exception) => dispatch(Session.onRequestFailed(exception)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
