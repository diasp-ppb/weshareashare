import { StyleSheet, View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import { ApplicationStyles } from '../Themes/index';
import RadioButtonsForm from '../Components/RadioButtonsForm';
import PersonalDataForm from '../Components/PersonalDataForm';

import { connect } from 'react-redux';
import * as Session from '../Redux/Session';

var React = require('react');
var { AppRegistry, TouchableHighlight } = React;
var t = require('tcomb-form-native');

var Form = t.form.Form;

var Gender = t.enums({
    'M': 'Male',
    'F': 'Female'
});

var Person = t.struct({
    name: t.String,
    gender: Gender,
    birthDate: t.Date,
    address: t.String,
    postal: t.String,
    city: t.String,
    id: t.Number,
    nif: t.Number,
    job: t.String,
    nationality: t.String
});


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
                <View style={ApplicationStyles.form}>
                    <View style={ApplicationStyles.container}>
                        <PersonalDataForm/>
                    </View>
                </View>
                {/* <RadioButtonsForm saveOption={saveOption} answers={answers}/> */}
                <View style={{flex:1, flexDirection: 'row-reverse', marginRight: 50, paddingRight: 150, paddingLeft: 50, bottom: 20}}>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.subscription({key: "name", value:option})}>
                        <Text style={{justifyContent: 'center'}}>Next</Text>
                    </TouchableOpacity>
                </View>

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
    backgroundColor: '#ffffff',
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
  button:{
      borderRadius: 10,
      borderWidth: 0,
      padding: 10,
      backgroundColor: '#80deea',
      alignItems: 'center',
      justifyContent: 'center',
      flex:1,
  }
});

//export default Subscription;
