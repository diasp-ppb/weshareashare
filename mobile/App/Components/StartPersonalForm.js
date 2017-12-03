import { StyleSheet, View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import { ApplicationStyles } from '../Themes/index';
import RadioButtonsForm from '../Components/RadioButtonsForm';
import PersonalDataForm from '../Components/PersonalDataForm';

import { connect } from 'react-redux';
import * as Session from '../Redux/Session';

var React = require('react');
var { AppRegistry, TouchableHighlight, Component } = React;
const STATES = require('../Containers/Onboarding/data/states.js');

class StartPersonalForm extends Component{
    constructor(props) {
      super(props);
    };

    render(){
        if(this.props.index == undefined || this.props.index == null){
            console.log('undefined index');
            return(
                <View>
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
                </View>
            );
        } else{
            console.log('got index');
            var index = this.props.index;
            if(index == null) index = this.props.navigation.state.params.index;
            if(index == null) index = 0;
            var question = STATES[1].states[index];
            var answer;
            if(!Array.isArray(question.options) || question.options.length === 0){
                answer = <TextInput onChangeText={this.props.saveOption}/>;
            }else{
                answer = <RadioButtonsForm saveOption={this.props.saveOption} answers={question.options}/>;
            }
            return(
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
            );
        }
    };
};

export default StartPersonalForm;

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
