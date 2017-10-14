import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import RootContainer from './Containers/RootContainer';
import Login from './Containers/Login/Login';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Login />
      </View>
    );
  }
}
