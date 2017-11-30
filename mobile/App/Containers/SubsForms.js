import { StyleSheet, View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import RadioButtonsForm from '../Components/RadioButtonsForm';
import PersonalDataForm from '../Components/PersonalDataForm';

import { connect } from 'react-redux';
import * as Session from '../Redux/Session';

var React = require('react');
var { AppRegistry, TouchableHighlight } = React;

var answers = [
  {
    key: 'PRESERVAR',
    text: 'Preservar o capital'
  },
  {
    key: 'CRESCER',
    text: 'Fazer crescer o capital'
  },
  {
    key: 'SUBSTANCIALMENTE',
    text: 'Fazer crescer o capital substancialmente'
  }
];

var option = null;

var saveOption = function(key){
    console.log(key);
    option = key;
}

var Subscription = React.createClass({

    // saveToProps: function(){
    //     console.log(option);
    //     console.log("next clicked");
    //     this.props.subscription("chave", option);
    // },

    render: function() {
        return (
          <Container style={styles.container}>
             <Content>
               <Card style={styles.messageBackground}>
                  <CardItem style={styles.messageCard}>
                    <Body>
                      <Text>
                      Hello, Luis Jordao!
                      Let's start by defining your investor profile.
                      </Text>
                    </Body>
                  </CardItem>
                </Card>
                <RadioButtonsForm saveOption={saveOption} answers={answers}/>
                <View style={{flex:2, flexDirection: 'row'}}></View>
                <TouchableOpacity style={{borderWidth: 0,
                padding: 10,
                flex: 1,
                flexDirection: 'row',}} onPress={() => this.props.subscription({key: "name", value:option})}>
                    <Text>Next</Text>
                </TouchableOpacity>
             </Content>
          </Container>
        );
    }
});

const mapDispatchToProps = (dispatch) => ({
  subscription: (id, form) => dispatch(Session.subscription(id, form)),
});

export default connect(null, mapDispatchToProps)(Subscription);

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    paddingTop: 20,
    //backgroundColor: '#ffffff',
  },
  messageCard: {
    borderRadius: 20,
    borderColor: '#80deea',
    borderWidth: 1,
    backgroundColor: '#80deea',
    elevation: 20,
  },
  messageBackground: {
    borderRadius: 20,
    height: 70,
    borderColor: '#80deea',
    borderWidth: 1,
    marginRight: 50,
    marginLeft: 10,
    backgroundColor: '#80deea',
  },
});

//export default Subscription;
