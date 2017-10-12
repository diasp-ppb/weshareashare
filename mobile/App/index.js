import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';
import FatcaForm from './Containers/FatcaForm';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <FatcaForm/>
      </View>
    );
  }
}
