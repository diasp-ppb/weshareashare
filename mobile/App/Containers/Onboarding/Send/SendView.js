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
    if (this.props.submitParticipant) {
        this.props.submitParticipant({ participant: this.props.onboarding.participant }, this.props.session).then(() => {
            Toast.show("Dados pessoais submetidos com sucesso.", ApplicationStyles.toastSuccess);
        }).catch(() => {
            Toast.show('NÃ£o foi possÃ­vel enviar os dados pessoais.', ApplicationStyles.toastError);
        });
    }
    if (this.props.submitSubscription) {
      this.props.submitSubscription({ subscription: this.props.onboarding.subscription }, this.props.session).then(() => {
        Toast.show("Dados de subscrição submetidos com sucesso.", ApplicationStyles.toastSuccess);
      }).catch(() => {
        Toast.show('NÃ£o foi possÃ­vel enviar os dados de subscrição.', ApplicationStyles.toastError);
      });
    }
    if (this.props.submitFatca) {
      this.props.submitFatca({ fatca: this.props.onboarding.fatca }, this.props.session).then(() => {
        Toast.show("FATCA submetido com sucesso.", ApplicationStyles.toastSuccess);
      }).catch(() => {
        Toast.show('NÃ£o foi possÃ­vel enviar o FATCA.', ApplicationStyles.toastError);
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
