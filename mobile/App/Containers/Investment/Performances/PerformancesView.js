import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles, Colors } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class Performances extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('performances'),
  });

  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h3 style={{color: Colors.textSecondary, fontWeight: '500'}}>
            O gráfico mostra a evolução da unidade de
            participação do PPR SGF Stoik Ações desde o
            início, em 15.02.2016. Lembre-se que a
            performance passada não é uma garantia da
            performance futura.
          </CustomText>
      
          <Spacer size={25}/>
      
          <TouchableOpacity style={[ApplicationStyles.rightAligned]} onPress={() => navigate('Share')}>
            <CustomText p style={[ApplicationStyles.nextLink]}>
              { I18n.t('share') } >
            </CustomText>
          </TouchableOpacity>
        </Card>
        <AppStep index={1} { ...this.props }/>
      </ScrollView>
    );
  }
};
