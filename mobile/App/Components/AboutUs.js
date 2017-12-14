import React, { Component } from 'react';
import I18n from '@i18n/i18n';
import { ScrollView, View, TouchableHighlight } from 'react-native';
import styles from './Styles/AboutUsStyle';
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
              <CustomText h3 style={[ApplicationStyles.paddingTop, {color: Colors.textSecondary}]}>
                A	Stoik	desenha	estratégias	de	investimento	e	colabora	com	gestores	de	activos	para	implementar	portfolios	baseados	em	regras	sistemáticas	que	procuram	aproveitar	as	ineficiências	do	mercado.              </CustomText>
              <Spacer size={10}/>
              <CustomText h3 style={{color: Colors.textSecondary, fontWeight: '500'}}>
                O	Fundo	de	Pensões	PPR	SGF	Stoik	Ações	é	assim	gerido	pela	SGF	-	Sociedade	Gestora	de	Fundos	de	Pensões,	S.A.,	uma	gestora	de	referência	no	mercado	português,	com	uma	experiência	de	20	anos	na	gestão	de	fundos	de	pensões.              </CustomText>
              <Spacer size={10}/>
              <CustomText h3 style={{color: Colors.textSecondary, fontWeight: '500'}}>
                O	projecto	de	impacto	WeShareAShare,	criado	pela	Stoik,	deseja	fazer	a	ligação	entre	Finanças	e	Causas	e	procura	inspirar	as	pessoas	a	ter	um	impacto	positivo no mundo.              </CustomText>
            </Card>

            <View style={{ flex: 1, paddingBottom: 5 }}>
              <CustomText h2 style={[ApplicationStyles.textCenterAligned, ApplicationStyles.paddingTopSml,styles.subTitle, {marginBottom: 45}]}>
                  Causas suportadas
              </CustomText>

              <View style={styles.causeFirstLine}>
                <TouchableHighlight style={styles.causesButton}>
                  <View>
                   <CustomText style={[styles.causesText]}> Social </CustomText>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.causesButton}>
                  <View>
                    <CustomText style={[styles.causesText]}>  Animais </CustomText>
                      <CustomText style={[styles.causesText]}> & </CustomText>
                    <CustomText style={[styles.causesText]}>  Ambiente </CustomText>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.causeSecondLine}>
                <TouchableHighlight style={styles.causesButton} >
                  <View>
                    <CustomText style={[styles.causesText]}> Arte </CustomText>
                    <CustomText style={[styles.causesText]}> & </CustomText>
                    <CustomText style={[styles.causesText]}> Cultura </CustomText>
                  </View>
                </TouchableHighlight>
              </View>
            </View>

        </ScrollView>
      );
    }
}
