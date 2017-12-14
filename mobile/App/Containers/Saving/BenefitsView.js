import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import I18n from '@i18n/i18n';
import { Divider } from 'react-native-elements';
import { ApplicationStyles, Metrics, Assets } from '@theme/';
import { Text, Card, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class StoikBenefits extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('benefits'),
  });

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={[ApplicationStyles.container]}>
        <Card>
          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3>Possibilidade de automatização da poupança</Text>
          </View>
  
          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3>Carteira diversificada e global</Text>
          </View>
  
          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3>Estrutura fisicamente eficiente</Text>
          </View>
  
          <View style={[ApplicationStyles.row, ApplicationStyles.paddingVertical]}>
            <View style={ApplicationStyles.benefitItem} />
            <Text h3>Possibilidade de apoiar uma causa</Text>
          </View>
  
          <Spacer size={25}/>
  
          <TouchableOpacity style={ApplicationStyles.rightAligned} onPress={() => navigate('Investment')}>
            <Text p style={ApplicationStyles.nextLink}>
              { I18n.t('stoikShares') } >
            </Text>
          </TouchableOpacity>
        </Card>
        <AppStep index={0} { ...this.props }/>
      </ScrollView>
    );
  }
}
