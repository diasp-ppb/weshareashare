import { StackNavigator } from 'react-navigation';
import Homepage from '@components/Homepage';

// Onboarding Screens
import InvestorProfileQuiz from '@containers/Onboarding/InvestorProfileQuiz';
import FormOverview from '@containers/Onboarding/FormOverview';

// Auth screens
import PasswordReset from '@containers/Auth/PasswordResetContainer';
import PasswordUpdate from '@containers/Auth/PasswordUpdateContainer';
import SignIn from '@containers/Auth/SignInContainer';
import SignUp from '@containers/Auth/SignUpContainer';

// General screens
import ContactUs from '@containers/ContactUs/ContactUsContainer';
import AboutUs from '@components/AboutUs';
import StoikBenefits from '@components/StoikBenefits';


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
  initialRouteName: 'Homepage',
});

export default PrimaryNav;
