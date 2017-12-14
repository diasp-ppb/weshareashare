import React, { Component } from 'react';
import { View } from 'react-native';
import I18n from '@i18n/i18n';
import { Divider } from 'react-native-elements';
import { ApplicationStyles, Metrics, Assets } from '@theme/';
import { Text, Card } from '@ui/';
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
      <View style={[ApplicationStyles.container]}>
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
            <Text h3>Possibilidade de suportar uma causa</Text>
          </View>
  
          <View>
            <Divider style={ApplicationStyles.divider} />
            <Text h3 style={[ApplicationStyles.subtext, ApplicationStyles.textCenterAligned]}>By joining We Share a Share,
              you can make a profit and make an impact in the same journey.</Text>
          </View>
        </Card>
        <AppStep index={0} { ...this.props }/>
      </View>
    );
  }
}
