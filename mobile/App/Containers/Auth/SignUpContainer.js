/**
 * Sign Up Container
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
  formType: 'SignUp',
  screenName: 'Sign Up',
  formFields: ['Email', 'Password', 'ConfirmPassword', 'FirstName', 'LastName'],
  buttonTitle: 'Sign Up',
  successMessage: 'Your account was created with success!',
  resetAction: resetAction,
});

const mapDispatchToProps = (dispatch) => ({
  submit: Users.register,
  onSuccessfulSubmit: (res) => dispatch(Session.createUser(res)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormRender);
