import { StackNavigator } from 'react-navigation';
import Homepage from '../Components/Homepage';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';
import ForgotPassword from '../Components/ForgotPassword';
import ResetPassword from '../Containers/ResetPassword';
import InvestorProfileQuiz from '../Containers/InvestorProfileQuiz';
import User from '../Containers/User';
import ContactUs from '../Containers/ContactUs';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Homepage: { screen: Homepage },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  ResetPassword: { screen: ResetPassword },
  InvestorProfileQuiz: {screen: InvestorProfileQuiz},
  User: {screen: User},
  ContactUs: {screen: ContactUs},
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Homepage',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
