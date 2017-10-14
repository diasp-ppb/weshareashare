import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import RootContainer from './Containers/RootContainer';
import Homepage from './Containers/Homepage/Homepage.js';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Homepage />
      </View>
    );
  }
}
