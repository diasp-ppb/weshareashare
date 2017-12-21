import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { ApplicationStyles, Colors } from '@theme/';
import { Card, Text as CustomText } from '@ui/';
import AppStep from '@components/AppStep';
import BulletText from '@components/BulletText'

export default class Saving extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'A Poupança',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h1 style={[ApplicationStyles.paddingBottom]}>Poupança sistemática a longo prazo</CustomText>

          <BulletText text={'O PPR pode ser usado para a reforma, mas também para outros tipos de poupança e sempre com benefícios fiscais direcionados à poupança de longo prazo.'}/>
          <BulletText text={'Uma das melhores formas de efectuar poupança a longo prazo é torná-la automática.'}/>
          <BulletText text={'O comprometimento com um débito mensal, mesmo que pequeno, numa estratégia bem construída, oferece as maiores garantias de obtenção dos objetivos financeiros.'}/>

          <TouchableOpacity style={[ApplicationStyles.rightAligned]} onPress={() => navigate('Simulation')}>
            <Text p style={[ApplicationStyles.nextLink]}>
              Simulação >
            </Text>
          </TouchableOpacity>
        </Card>
        <AppStep index={0} {...this.props} />
      </ScrollView>
    );
  }
}
