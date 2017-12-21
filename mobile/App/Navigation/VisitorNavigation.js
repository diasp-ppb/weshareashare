import React from 'react';

import { StackNavigator } from 'react-navigation';

// Auth screens
import PasswordReset from '@containers/Auth/PasswordResetContainer';
import PasswordUpdate from '@containers/Auth/PasswordUpdateContainer';
import SignIn from '@containers/Auth/SignInContainer';
import SignUp from '@containers/Auth/SignUpContainer';

// General screens
import Homepage from '@components/Homepage';
import ContactUs from '@containers/ContactUs/ContactUsContainer';
import AboutUs from '@components/AboutUs';
import RiskWarnings from '@components/RiskWarnings';

import { Colors } from '@theme';

const navigationOptions = {
  headerStyle: { backgroundColor: Colors.stoikGrey },
  headerTintColor: 'white',
};

export default StackNavigator({
  Homepage: { screen: Homepage },
  PasswordReset: { screen: PasswordReset },
  PasswordUpdate: { screen: PasswordUpdate },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ContactUs: { screen: ContactUs },
  AboutUs: { screen: AboutUs },
  RiskWarnings: { screen: RiskWarnings },
}, {
  headerMode: 'float',
  navigationOptions,
});
