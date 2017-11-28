import { StackNavigator, DrawerNavigator } from 'react-navigation';
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

import ControlPanel from '@components/ControlPanel';

const AuthStack = StackNavigator({
  PasswordReset: { screen: PasswordReset },
  PasswordUpdate: { screen: PasswordUpdate },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Homepage: { screen: Homepage },
  StoikBenefits: { screen: StoikBenefits },
  ContactUs: { screen: ContactUs},
  AboutUs: { screen: AboutUs},
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: '#E73536'},
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
})

const DrawerStack = DrawerNavigator({
  ContactUs: { screen: ContactUs},
  AboutUs: { screen: AboutUs},
  InvestorProfileQuiz: { screen: InvestorProfileQuiz },
  FormOverview: { screen: FormOverview },
}, {
  headerMode: 'float',
  gesturesEnabled: false,
  contentComponent: ControlPanel,
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#4C3E54'},
    title: 'Welcome!',
    headerTintColor: 'white',
  })
})

const PrimaryNav = StackNavigator({
  authStack: { screen: AuthStack },
  drawerStack: { screen: DrawerStack },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'drawerStack',
});

export default PrimaryNav;
