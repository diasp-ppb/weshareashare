import { StyleSheet, View, TextInput, StatusBar } from 'react-native';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import RadioButtonsForm from '../Components/RadioButtonsForm';

var React = require('react');
var { AppRegistry, TouchableHighlight } = React;

var answers = [
  'Preservar o capital',
  'Fazer crescer o capital',
  'Fazer crescer o capital substancialmente',
];

var Subscription = React.createClass({
    render: function() {
        return (
          <Container style={styles.container}>
             <Content>
               <Card>
                  <CardItem style={styles.messageCard}>
                    <Body>
                      <Text>
                      Hello, Luis Jordao!
                      Let's start by defining your investor profile.
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
                <RadioButtonsForm answers={answers}/>
             </Content>
          </Container>
        );
    }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    paddingTop: 20,
    backgroundColor: '#ffffff',
  },
  messageCard: {
    borderRadius: 10,
    height: 70,
    borderColor: '#80deea',
    borderWidth: 1,
    backgroundColor: '#80deea',
    elevation: 20,
  },
});

export default Subscription;
