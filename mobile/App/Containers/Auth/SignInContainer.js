/**
 * Login Container
 *
 */
import { connect } from 'react-redux';
import { Users } from '@services/API';
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
  submit: Users.authenticate,
  onSuccessfulSubmit: (res) => dispatch(Session.authenticate(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
