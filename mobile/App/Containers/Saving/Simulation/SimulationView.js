import React, { Component } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/';
import { Card, Text, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class Simulation extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('simulation'),
  });
  
  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <TouchableOpacity style={ApplicationStyles.rightAligned} onPress={() => navigate('Benefits')}>
            <Text p style={ApplicationStyles.nextLink}>
              { I18n.t('benefits') } >
            </Text>
          </TouchableOpacity>
        </Card>
        <AppStep index={0} { ...this.props }/>
      </ScrollView>
    );
  }
};
