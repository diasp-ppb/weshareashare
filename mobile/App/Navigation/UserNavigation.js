import React from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

// Onboarding Screens
import InvestorProfileQuiz from '@containers/Onboarding/InvestorProfileQuiz';
import FormOverview from '@containers/Onboarding/FormOverview';

// Saving Screens
import Saving from '@containers/Saving/SavingView';
import Benefits from '@containers/Saving/BenefitsView';
import Simulation from '@containers/Saving/Simulation/SimulationContainer';

// Investment Screens
import Investment from '@containers/Investment/InvestmentView';
import Wallet from '@containers/Investment/Wallet/WalletContainer';
import Performances from '@containers/Investment/Performances/PerformancesContainer';

// Share Screens
import Share from '@containers/Share/ShareView';
import Causes from '@containers/Share/Causes/CausesContainer';
import Cause from '@containers/Share/Causes/Cause/CauseContainer';

// General Screens
import ContactUs from '@containers/ContactUs/ContactUsContainer';
import AboutUs from '@components/AboutUs';
import Mainpage from '@components/Mainpage';
import FAQ from '@components/FAQ';

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
  Causes: { screen: Causes },
  Mainpage: { screen: Mainpage },
  ContactUs: { screen: ContactUs },
  AboutUs: { screen: AboutUs },
  FAQ: { screen: FAQ },

  // Saving Stack
  Saving: { screen: Saving },
  Simulation: { screen: Simulation },
  Benefits: { screen: Benefits },

  // Investment Stack
  Investment: { screen: Investment },
  Wallet: { screen: Wallet },
  Performances: { screen: Performances },

  // Share Stack
  Share: { screen: Share },
  Cause: { screen: Cause },

  // OnboardingStack
  Onboarding: { screen: FormOverview },
  InvestorProfileQuiz: { screen: InvestorProfileQuiz },
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
