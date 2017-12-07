import React, { Component } from 'react';
import { View, Text } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/';
import AppStep from '@components/AppStep';

export default class Performances extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('performances'),
  });

  render () {
    return (
      <View style={ApplicationStyles.container}>
  
        <AppStep index={1} { ...this.props }/>
      </View>
    );
  }
};
