import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class Wallet extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('wallet'),
  });

  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <TouchableOpacity style={ApplicationStyles.rightAligned} onPress={() => navigate('Performances')}>
            <CustomText p style={ApplicationStyles.nextLink}>
              { I18n.t('performances') } >
            </CustomText>
          </TouchableOpacity>
        </Card>
        <AppStep index={1} { ...this.props }/>
      </ScrollView>
    );
  }
};
