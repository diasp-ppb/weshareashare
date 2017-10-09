import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import RootContainer from './Containers/RootContainer';
import SubsForms from './Containers/SubsForms';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <SubsForms />
      </View>
    );
  }
}
