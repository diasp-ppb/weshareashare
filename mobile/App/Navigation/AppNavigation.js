import { StackNavigator } from 'react-navigation';
import Homepage from '../Components/Homepage';
import InvestorProfileQuiz from '../Containers/Onboarding/InvestorProfileQuiz';
import FormOverview from '../Containers/Onboarding/FormOverview';
import ContactUs from '../Containers/ContactUs';
import AboutUs from '../Components/AboutUs';
import StoikBenefits from '../Containers/StoikBenefits';
import styles from './Styles/NavigationStyles';

// Auth screens
import PasswordReset from '@containers/Auth/PasswordResetContainer';
import PasswordUpdate from '@containers/Auth/PasswordUpdateContainer';
import SignIn from '@containers/Auth/SignInContainer';
import SignUp from '@containers/Auth/SignUpContainer';


const PrimaryNav = StackNavigator({
  Homepage: { screen: Homepage },
  InvestorProfileQuiz: { screen: InvestorProfileQuiz },
  ContactUs: { screen: ContactUs},
  AboutUs: { screen: AboutUs},
  FormOverview: { screen: FormOverview },
  StoikBenefits: { screen: StoikBenefits },
  PasswordReset: { screen: PasswordReset },
  PasswordUpdate: { screen: PasswordUpdate },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SignUp',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
