import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from '../OnboardingStyle';
import ParticipantFields from './ParticipantFields';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import Toast from 'react-native-root-toast';
import { ApplicationStyles } from '@theme/';

class ParticipantView extends Component {
  static navigationOptions = () => ({
    title: 'Comece a Investir',
  });

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    const choices = this.child.retrieveValues();

    if (this.props.submit) {
      this.props.submit({ participant: choices }, this.props.session).then(() => {
        this.props.onSuccessfulSubmit(choices);
        Toast.show("Dados pessoais submetidos com sucesso.", ApplicationStyles.toastSuccess);
        navigate('Subscription');
      }).catch(() => {
        Toast.show('N�o foi poss�vel enviar os dados pessoais.', ApplicationStyles.toastError);
      });
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView
        style={styles.container}
        extraScrollHeight={100}
        enableOnAndroid={true}
        keyboardShouldPersistTaps='handled'>
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
          <View style={styles.formContainer}>
            <ParticipantFields onRef={(ref) => (this.child = ref)} />
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'row-reverse',
            marginRight: 50,
            paddingRight: 150,
            paddingLeft: 50,
            marginTop: 50,
            bottom: 20,
          }}
          >
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
              <Text style={{ justifyContent: 'center' }}>Pr�ximo</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </KeyboardAwareScrollView>);
  }
}

/* Export Component ==================================================================== */
export default ParticipantView;
