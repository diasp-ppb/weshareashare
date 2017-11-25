import { StackNavigator } from 'react-navigation';
import Homepage from '../Components/Homepage';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';
import ResetPassword from '../Containers/ResetPassword';
import InvestorProfileQuiz from '../Containers/InvestorProfileQuiz';
import FormOverview from '../Containers/FormOverview';
import ContactUs from '../Containers/ContactUs';
import AboutUs from '../Components/AboutUs';
import FormView from '../Containers/Auth/FormView';
import StoikBenefits from '../Containers/StoikBenefits';
import styles from './Styles/NavigationStyles';

const PrimaryNav = StackNavigator({
  Homepage: { screen: Homepage },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  ResetPassword: { screen: ResetPassword },
  InvestorProfileQuiz: { screen: InvestorProfileQuiz },
  ContactUs: { screen: ContactUs},
  AboutUs: { screen: AboutUs},
  FormOverview: { screen: FormOverview },
  StoikBenefits: { screen: StoikBenefits },
  FormView: { screen: FormView }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'FormView',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
