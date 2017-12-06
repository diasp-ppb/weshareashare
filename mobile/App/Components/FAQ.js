import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ApplicationStyles, Metrics, Assets } from '@theme/';
import { Text } from '@ui/';
import { Divider } from 'react-native-elements';

export default class AboutUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'FAQ',
  });

  render() {
    return (
        <View style={ApplicationStyles.container}>
        <ScrollView>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding, ApplicationStyles.rightAligned]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>How to do this?</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
        <Text >Qis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>What do I need to do?</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
        <Text >Qis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
          <View style={ApplicationStyles.benefitItem} />
          <Text h3>What is the risk?</Text>
        </View>

        <View style={[ApplicationStyles.row, ApplicationStyles.padding]}>
        <Text >Qis simply dummy text of the printing and typesetting industry. Lorem Ipsum has but as ska been the industry's standard dummy text ever since the 1500s</Text>
        </View>

        </ScrollView>
        </View>
    );
  }
}
