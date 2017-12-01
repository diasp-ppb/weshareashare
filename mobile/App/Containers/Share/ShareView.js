import React from 'react';
import { View, Text } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles } from '@theme/';

export default class Share extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('projectWeshareashare'),
  });

  render () {
    return (
      <View style={ApplicationStyles.container}>
        <Text>
          O WeShareAShare é um projeto sem fins lucrativos que nasceu do desejo de juntar dois mundos tipicamente desligados: Finanças e Causas.
          O nosso objetivo é continuar a providenciar os retornos sólidos da família de estratégias Stoik, proporcionando ao mesmo tempo, uma oportunidade para que possa apoiar uma determinada causa em que acredita.
          A Stoik partilha parte das suas comissões líquidas, geradas pelos investidores participantes, e as nossas comissões não são mais elevadas em virtude do projeto WeShareAShare.
          Poderá apoiar causas com impacto positivo, em qualquer área à sua escolha, quer seja ambiental, social ou cultural.
        </Text>
      </View>
    );
  }
};
