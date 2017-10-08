import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import RootContainer from './Containers/RootContainer';

export default class App extends Component {
  render() {
    return (
      <View>
        <RootContainer />
      </View>
    );
  }
}
