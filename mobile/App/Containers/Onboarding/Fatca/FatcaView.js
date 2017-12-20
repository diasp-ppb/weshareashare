import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './FatcaStyle';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import RadioButtonsForm from '@components/RadioButtonsForm';
import Toast from 'react-native-root-toast';
import { ApplicationStyles } from '@theme/';

class FatcaView extends Component {
  static navigationOptions = () => ({
    title: 'Comece a Investir',
  });

  handleSubmit = () => {
    const { navigate } = this.props.navigation;

    const choice = this.child.retrieveValues();

    if(choice === null)
      return;

    if (this.props.submit) {
      this.props.submit({ FATCA: this.props.options[choice - 1].text }, this.props.session).then(() => {
        this.props.onSuccessfulSubmit(this.props.options[choice - 1].text);
        navigate('Investor', { index: 0 });
      }).catch(() => {
        Toast.show('Não foi possível aceitar o FATCA', ApplicationStyles.toastError);
      });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={styles.messageBackground}>
            <CardItem style={styles.messageCard}>
              <Body>
              <Text>
                {this.props.question}
              </Text>
              </Body>
            </CardItem>
          </Card>
          <RadioButtonsForm onRef={(ref) => (this.child = ref)} answers={this.props.options} />
          <View style={styles.buttonSet}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigate('FatcaInfo');
              }}
            >
              <Text style={{ justifyContent: 'center' }}>Saber mais</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={this.handleSubmit}
            >
              <Text style={{ justifyContent: 'center' }}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

/* Export Component ==================================================================== */
export default FatcaView;
