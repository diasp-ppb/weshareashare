import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { ApplicationStyles, Metrics, Assets } from '@theme/';
import { Text, Card, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class StoikBenefits extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'A Poupança',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={[ApplicationStyles.container]}>
        <Card>
          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3 style={ApplicationStyles.benefitTest}>{ I18n.t('benefitsSaving') }</Text>
          </View>

          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3 style={ApplicationStyles.benefitTest}>{ I18n.t('benefitsWallet') }</Text>
          </View>

          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3 style={ApplicationStyles.benefitTest}>{ I18n.t('benefitsStructure') }</Text>
          </View>

          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3 style={ApplicationStyles.benefitTest}>{ I18n.t('benefitsCause') }</Text>
          </View>

          <Spacer size={25} />

          <TouchableOpacity style={ApplicationStyles.rightAligned} onPress={() => navigate('Investment')}>
            <Text p style={ApplicationStyles.nextLink}>
              { I18n.t('stoikShares') } >
            </Text>
          </TouchableOpacity>
        </Card>
        <AppStep index={0} {...this.props} />
      </ScrollView>
    );
  }
}
