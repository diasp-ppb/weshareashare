import React, { Component } from 'react';
import I18n from '@i18n/i18n';
import { ScrollView } from 'react-native';
import { Text as CustomText, Card, Spacer } from '@ui/';
import { ApplicationStyles, Colors } from '@theme/';

export default class AboutUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('aboutUs'),
  });

  render() {
    return (
      <ScrollView style={ApplicationStyles.container}>

        <Card>
          <CustomText h3 style={[ApplicationStyles.paddingTop, { color: Colors.textSecondary }]}>
                A	Stoik	desenha	estratégias	de	investimento	e	colabora	com	gestores	de	activos	para	implementar	portfolios	baseados	em	regras	sistemáticas	que	procuram	aproveitar	as	ineficiências	do	mercado.              </CustomText>
          <Spacer size={10} />
          <CustomText h3 style={{ color: Colors.textSecondary, fontWeight: '500' }}>
                O	Fundo	de	Pensões	PPR	SGF	Stoik	Ações	é	assim	gerido	pela	SGF	-	Sociedade	Gestora	de	Fundos	de	Pensões,	S.A.,	uma	gestora	de	referência	no	mercado	português,	com	uma	experiência	de	20	anos	na	gestão	de	fundos	de	pensões.              </CustomText>
          <Spacer size={10} />
          <CustomText h3 style={{ color: Colors.textSecondary, fontWeight: '500' }}>
                O	projecto	de	impacto	WeShareAShare,	criado	pela	Stoik,	deseja	fazer	a	ligação	entre	Finanças	e	Causas	e	procura	inspirar	as	pessoas	a	ter	um	impacto	positivo no mundo.              </CustomText>
        </Card>

      </ScrollView>
    );
  }
}
