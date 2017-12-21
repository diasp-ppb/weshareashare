import React, { Component } from 'react';
import I18n from '@i18n/i18n';
import { ScrollView, View, TouchableHighlight } from 'react-native';
import { Text as CustomText, Card, Spacer } from '@ui/';
import { ApplicationStyles, Colors } from '@theme/';

export default class AboutUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('riskWarnings'),
  });

  render() {
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h3 style={[ApplicationStyles.paddingTop, { color: Colors.textSecondary }]}>
            O	conteúdo	desta	aplicação	é	propriedade	exclusiva	da	Stoik	Capital.	A	informação		providenciada	na	aplicação	tem	propósito	informativo	apenas.	A	visão	e	opiniões	contidas	nesta	aplicação	estão	sujeitas	a	alteração	sem	aviso	prévio	e	não	constituem	uma	recomendação	de	investimento.	Os	potenciais	investidores	devem	informar-se	sobre	as	possíveis	consequências	fiscais,	os	requisitos	legais	e	quaisquer	restrições	cambiais	ou	requisitos	de	controlo	cambial	com	que	se	possam	deparar	sob	as	leis	do	seu	país	de	cidadania,	residência	ou	domicílio,	e	que	possam	ser	relevantes	para	a	subscrição,	detenção,	conversão	ou	resgate	de	unidades	de	participação	do	fundo.</CustomText>
          <Spacer size={10} />
          <CustomText h3 style={{ color: Colors.textSecondary, fontWeight: '500' }}>
            A	Stoik	Capital	envidou	os	esforços	razoáveis	para	assegurar	que	a	informação	é	rigorosa.	No	entanto,	erros	e	omissões	poderão	ocorrer	e	os	conteúdos	estão	sujeitos	a	alteração	sem	aviso.          </CustomText>

          <CustomText h3 style={{ color: Colors.textSecondary, fontWeight: '500' }}>
            O	investimento	envolve	risco.	O	valor	das	unidades	de	participação	varia	de	acordo	com	a	evolução	dos	activos	que	constituem	o	património	do	fundo.	Os	valores	apresentados	são	referentes	ao	passado	e	a	performance	passada	não	garante	resultados	futuros.		O	PPR	SGF	Stoik	Ações	não	tem	rendimento	mínimo	garantido.	Recomendamos	que	procure	aconselhamento	profissional	antes	de	tomar	quaisquer	decisões	de investimento.
          </CustomText>
        </Card>
      </ScrollView>
    );
  }
}
