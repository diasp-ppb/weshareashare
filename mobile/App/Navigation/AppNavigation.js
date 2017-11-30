import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import UserStack from './UserNavigation';
import VisitorStack from './VisitorNavigation';

const PrimaryNav = StackNavigator({
  visitorStack: { screen: VisitorStack },
  userStack: { screen: UserStack },
}, {
  headerMode: 'none',
  initialRouteName: 'userStack',
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
});

export default PrimaryNav;
