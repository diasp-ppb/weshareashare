import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import PrimaryNav from './Navigation/AppNavigation.js';

export default class App extends Component {
  render() {
    return (
      <PrimaryNav />
    );
  }
}
