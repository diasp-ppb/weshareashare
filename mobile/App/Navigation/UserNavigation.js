import React from 'react';

import { StackNavigator, DrawerNavigator } from 'react-navigation';

// Onboarding Screens
import FatcaForm from '@containers/Onboarding/Fatca/FatcaContainer';
import FatcaInfo from '@containers/Onboarding/Fatca/FatcaInfo';
import Participant from '@containers/Onboarding/Participant/ParticipantContainer';
import Investor from '@containers/Onboarding/Investor/InvestorContainer';
import Subscription from '@containers/Onboarding/Subscription/SubscriptionContainer';
import Invest from '@containers/Onboarding/Invest/InvestContainer';

// Saving Screens
import Saving from '@containers/Saving/SavingView';
import Benefits from '@containers/Saving/BenefitsView';
import Simulation from '@containers/Saving/Simulation/SimulationContainer';

// Investment Screens
import Investment from '@containers/Investment/InvestmentView';
import Performances from '@containers/Investment/Performances/PerformancesContainer';

// Share Screens
import Share from '@containers/Share/ShareView';
import Causes from '@containers/Share/Causes/CausesContainer';
import Cause from '@containers/Share/Causes/Cause/CauseContainer';

// General Screens
import ContactUs from '@containers/ContactUs/ContactUsContainer';
import AboutUs from '@components/AboutUs';
import Mainpage from '@components/Mainpage';
import RiskWarnings from '@components/RiskWarnings';

// Drawer and header style
import ControlPanel from '@containers/ControlPanel/ControlPanelContainer';
import HeaderRight from '@components/HeaderRight';

import { Colors } from '@theme/';

const navigationOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: Colors.stoikGrey },
  headerTintColor: 'white',
  headerRight: <HeaderRight navigation={navigation} currentState />,
});

const UserNavigationStack = StackNavigator({
  Investor: { screen: Investor },
  Mainpage: { screen: Mainpage },
  ContactUs: { screen: ContactUs },
  AboutUs: { screen: AboutUs },
  RiskWarnings: { screen: RiskWarnings },

  // Saving Stack
  Saving: { screen: Saving },
  Simulation: { screen: Simulation },
  Benefits: { screen: Benefits },

  // Investment Stack
  Investment: { screen: Investment },
  Performances: { screen: Performances },

  // Share Stack
  Share: { screen: Share },
  Causes: { screen: Causes },
  Cause: { screen: Cause },

  // OnboardingStack
  Invest: { screen: Invest },
  Participant: { screen: Participant },
  Subscription: { screen: Subscription },
  FatcaForm: { screen: FatcaForm },
  FatcaInfo: { screen: FatcaInfo },
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
