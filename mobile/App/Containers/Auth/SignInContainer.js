/**
 * Login Container
 *
 */
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Users } from '@services/API';
import * as Session from '@redux/Session';
import FormRender from './FormView';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'userStack'})
  ],
  key: null
})

const mapStateToProps = state => ({
  session: state.session,
  formType: 'SignIn',
  screenName: 'Sign In',
  formFields: ['Email', 'Password'],
  buttonTitle: 'Sign In',
  successMessage: 'You\'re now logged in',
  resetAction: resetAction,
});

const mapDispatchToProps = (dispatch) => ({
  submit: Users.authenticate,
  onSuccessfulSubmit: (res) => dispatch(Session.authenticate(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
