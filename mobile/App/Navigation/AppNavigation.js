import { StackNavigator } from 'react-navigation';
import Homepage from '../Containers/Homepage';
import SignIn from '../Containers/SignIn';
import SignUp from '../Containers/SignUp';

import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  Homepage: { screen: Homepage },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'Homepage',
  navigationOptions: {
    headerStyle: styles.header,
  },
});

export default PrimaryNav;
