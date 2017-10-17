import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { Font } from 'expo';

import PrimaryNav from './Navigation/AppNavigation.js';

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'OpenSans': require('./Assets/Fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./Assets/Fonts/OpenSans-Bold.ttf'),
      'OpenSans-Italic': require('./Assets/Fonts/OpenSans-Italic.ttf'),
    });
  }
  render() {
    return (
      <PrimaryNav />
    );
  }
}
