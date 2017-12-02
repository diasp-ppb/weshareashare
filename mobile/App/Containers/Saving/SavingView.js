import React, { Component } from 'react';
import { View, Text } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/';

export default class Share extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('systematicSavings'),
  });

  render () {
    return (
      <View style={ApplicationStyles.container}>
        <Text>
          O PPR pode ser usado para a reforma, mas também para outros tipos de poupança e sempre com benefícios fiscais direcionados à poupança de longo prazo.

          Uma das melhores formas de efectuar poupança a longo prazo é torná-la automática. O comprometimento com um débito mensal, mesmo que pequeno, numa estratégia bem construída, oferece as maiores garantias de obtenção dos objetivos financeiros.
        </Text>
      </View>
    );
  }
};
