import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { ApplicationStyles } from '@theme/';

export default class AboutUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'FAQ',
  });

  render() {
    return (
      <View style={ApplicationStyles.mainContainer}>
        <View style={ApplicationStyles.container}>

        </View>
      </View>
    );
  }
}
