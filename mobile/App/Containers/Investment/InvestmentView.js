import React, { Component } from 'react';
import { ScrollView, TouchableHighlight, Text, Image } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles, Colors, Assets, Metrics } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';

export default class Investment extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('stoikShares'),
  });

  render () {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h3 style={{color: Colors.textSecondary,}}>
            O PPR SGF Stoik Ações é constítuido por uma carteira de activos balanceada e diversificada, que integra obrigações, acções, matérias primas, imobiliário e liquidez.
          </CustomText>
          <Spacer size={10}/>
          <CustomText h3 style={{color: Colors.textSecondary}}>
            O PPR SGF Stoik Ações destina-se, assim, a investidores com horizontes temporais de poupança alargados e/ou tolerância ao risco de mercado.
          </CustomText>

          <Image
            source={Assets.piechart}
            style={{ height: Metrics.DEVICE_HEIGHT / 2.5,
              alignSelf: 'center'}}
            resizeMode="contain"
          />

          <TouchableHighlight style={[ApplicationStyles.nextButton]} onPress={() => navigate('Wallet')}>
            <Text style={[ApplicationStyles.nextButtonText]}> { I18n.t('wallet') } </Text>
          </TouchableHighlight>
        </Card>
      </ScrollView>
    );
  }
};

