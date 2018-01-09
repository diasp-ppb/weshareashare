import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { ApplicationStyles, Colors } from '@theme/';
import { Card, Text as CustomText } from '@ui/';
import AppStep from '@components/AppStep';
import BulletText from '@components/BulletText'
import styles from '../OnboardingStyle';

export default class Finalizing extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Enviar formulários',
  });

  handleSubmit = () => {
      //const { navigate } = this.props.navigation;

    if (this.props.submitEmail) {
      this.props.submitEmail(this.props.session).then(() => {
        Toast.show("Dados de subscrição submetidos com sucesso.", ApplicationStyles.toastSuccess);
      }).catch(() => {
        Toast.show('Não foi possível enviar os dados de subscrição.', ApplicationStyles.toastError);
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={ApplicationStyles.container}>
        <Card>
          <CustomText h1 style={[ApplicationStyles.paddingBottom]}>Enviar formulários</CustomText>

          <BulletText text={'Se desejar pode voltar atrás para alterar qualquer campo.'}/>
          <BulletText text={'Se está satisfeito(a), por favor envie a informação para seguidamente receber os formulários preenchidos.'}/>

          <TouchableOpacity style={[styles.button]} onPress={this.handleSubmit}>
            <Text p style={[ApplicationStyles.nextLink]}>
              Enviar >
            </Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    );
  }
}
