import React, { Component } from 'react';
import { ScrollView, Image, TouchableOpacity } from 'react-native';
import I18n from '@i18n/i18n';
import { ApplicationStyles, Colors, Assets, Metrics } from '@theme/';
import { Card, Text as CustomText, Spacer } from '@ui/';
import AppStep from '@components/AppStep';

export default class Investment extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'O Investimento',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h1 style={[ApplicationStyles.paddingBottom]}>PPR SGF Stoik Ações</CustomText>
          <CustomText h3 style={{ color: Colors.textSecondary }}>
            O PPR SGF Stoik Ações é constítuido por uma carteira de activos balanceada e diversificada, que integra obrigações, acções, matérias primas, imobiliário e liquidez.
          </CustomText>
          <Spacer size={10} />
          <CustomText h3 style={{ color: Colors.textSecondary }}>
            O PPR SGF Stoik Ações destina-se, assim, a investidores com horizontes temporais de poupança alargados e/ou tolerância ao risco de mercado.
          </CustomText>

          <Image
            source={Assets.piechart}
            style={{ height: Metrics.DEVICE_HEIGHT / 2.5,
              alignSelf: 'center' }}
            resizeMode="contain"
          />

          <TouchableOpacity style={ApplicationStyles.rightAligned} onPress={() => navigate('Performances')}>
            <CustomText p style={ApplicationStyles.nextLink}>
             Evolução do Valor da Up >
            </CustomText>
          </TouchableOpacity>
        </Card>
        <AppStep index={1} {...this.props} />
      </ScrollView>
    );
  }
}

