import React, { Component } from 'react';
import { View, Text } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/';

export default class Share extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('stoikShares'),
  });

  render () {
    return (
      <View style={ApplicationStyles.container}>
        <Text>
          O PPR SGF Stoik Ações é constítuido por uma carteira de activos balanceada e diversificada, que integra obrigações, acções, matérias primas, imobiliário e liquidez.

          O PPR SGF Stoik Ações destina-se, assim, a investidores com horizontes temporais de poupança alargados e/ou tolerância ao risco de mercado.
        </Text>
      </View>
    );
  }
};
