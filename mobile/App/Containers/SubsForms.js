import React, { Component } from 'react';
import { View, TextInput, Text, StatusBar } from 'react-native';
import ReduxNavigation from '../Navigation/ReduxNavigation';
// Styles


export default class subsForms extends Component {
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center'}}>
          <Text style={{fontSize:20}}> Full Name</Text>
          <TextInput
            style={{fontSize:20}}
            placeholder="Name"
          />
      </View>
    );
  }
}
