import { StackNavigator } from 'react-navigation';
import Homepage from '../Components/Homepage';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';
import ForgotPassword from '../Components/ForgotPassword';
import ResetPassword from '../Containers/ResetPassword';
import InvestorProfileQuiz from '../Containers/InvestorProfileQuiz';
import WeShareAShareForm from '../Components/weShareAShareForm';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Homepage: { screen: Homepage },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword },
  ResetPassword: { screen: ResetPassword },
  InvestorProfileQuiz: { screen: InvestorProfileQuiz },
  WeShareAShareForm: { screen: WeShareAShareForm },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'WeShareAShareForm',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
