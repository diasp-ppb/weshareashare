import React, { Component } from 'react';
import { View, Text } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/';

export default class Wallet extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('wallet'),
  });

  render () {
    return (
      <View style={ApplicationStyles.container}>

      </View>
    );
  }
};
