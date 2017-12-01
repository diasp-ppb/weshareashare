import React from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

// Onboarding Screens
import InvestorProfileQuiz from '@containers/Onboarding/InvestorProfileQuiz';
import FormOverview from '@containers/Onboarding/FormOverview';
// General Screens
import ContactUs from '@containers/ContactUs/ContactUsContainer';
import AboutUs from '@components/AboutUs';
import Mainpage from '@components/Mainpage';

// Drawer and header style
import ControlPanel from '@containers/ControlPanel/ControlPanelContainer';
import HeaderRight from '@components/HeaderRight';

import { Metrics, Colors } from '@theme/';

const navigationOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: Colors.stoikGrey },
  headerTintColor: 'white',
  headerRight: <HeaderRight navigation={navigation} currentState />,
});

const UserNavigationStack = StackNavigator({
  Mainpage: { screen: Mainpage },
  OnboardingOverview: { screen: FormOverview },
  InvestorProfileQuiz: { screen: InvestorProfileQuiz },
  ContactUs: { screen: ContactUs },
  AboutUs: { screen: AboutUs },
}, {
  headerMode: 'float',
  navigationOptions,
});

export default DrawerNavigator({
  UserNavigationStack: { screen: UserNavigationStack },
}, {
  gesturesEnabled: false,
  contentComponent: ControlPanel,
});