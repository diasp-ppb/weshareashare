import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles, Colors } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class Saving extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('saving'),
  });

  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h1 style={[ApplicationStyles.paddingBottom, ApplicationStyles.textCenterAligned]}>A importância da poupança sistemática a longo prazo</CustomText>
          <CustomText h3 style={[ApplicationStyles.paddingTop, {color: Colors.textSecondary}]}>
            O PPR pode ser usado para a reforma, mas também para outros tipos de poupança e sempre com benefícios fiscais direcionados à poupança de longo prazo.
          </CustomText>
          <Spacer size={10}/>
          <CustomText h3 style={{color: Colors.textSecondary, fontWeight: '500'}}>
            Uma das melhores formas de efectuar poupança a longo prazo é torná-la automática. O comprometimento com um débito mensal, mesmo que pequeno, numa estratégia bem construída, oferece as maiores garantias de obtenção dos objetivos financeiros.
          </CustomText>
  
          <Spacer size={25}/>
          
          <TouchableOpacity style={[ApplicationStyles.rightAligned]} onPress={() => navigate('Simulation')}>
            <Text p style={[ApplicationStyles.nextLink]}>
              { I18n.t('simulation') } >
            </Text>
          </TouchableOpacity>
        </Card>
        <AppStep index={0} { ...this.props }/>
      </ScrollView>
    );
  }
};
