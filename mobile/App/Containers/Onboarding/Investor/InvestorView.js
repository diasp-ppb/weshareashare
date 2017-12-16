import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../OnboardingStyle';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { ApplicationStyles } from '@theme/';
import RadioButtonsForm from '@components/RadioButtonsForm';

class InvestorView extends Component {
  static navigationOptions = ({ }) => ({
    title: 'Invista',
  });

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    const choices = this.child.retrieveValues();

    if(choices == null)
      return;

    let qa = {};
    let key = choices - 1;
    qa[this.props.question.key] = this.props.question.options[key].text;
    if(this.props.lastQuestion) {
      this.props.saveAnswer(qa);
      // TODO call here save quiz, after state updated
    } else {
      this.props.saveAnswer(qa);
      let newIndex = this.props.index + 1;
      navigate('Investor', {index: newIndex})
    }
  }

  render() {
    let answer;
    let question = this.props.question;
    if (!Array.isArray(question.options) || question.options.length === 0) {
      answer = <TextInput />;
    } else {
      answer = <RadioButtonsForm onRef={(ref) => (this.child = ref)} answers={question.options} />;
    }
    return (
      <Container style={styles.container}>
        <Content>
          <View>
            <Card style={styles.messageBackground}>
              <CardItem style={styles.messageCard}>
                <Body>
                <Text>
                  {question.text}
                </Text>
                </Body>
              </CardItem>
            </Card>
            {answer}
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
              <Text style={{ justifyContent: 'center' }}>{(this.props.lastQuestion) ? 'Terminar' : 'Próximo'}</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>);
  }
}

/* Export Component ==================================================================== */
export default InvestorView;
