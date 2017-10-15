import React from 'react';
import { StackNavigator } from 'react-navigation';

import Homepage from './Containers/Homepage/Homepage';
import Login from './Containers/Login/Login';

export const Root = StackNavigator({
  Homepage: {
    screen: Homepage,
  },
  Login: {
    screen: Login,
  },
});