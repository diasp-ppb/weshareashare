import { StyleSheet, View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import { ApplicationStyles } from '../Themes/index';
import RadioButtonsForm from '../Components/RadioButtonsForm';
import PersonalDataForm from '../Components/PersonalDataForm';
import { connect } from 'react-redux';
import * as Session from '../Redux/Session';
import I18n from '@i18n/i18n';
import { Colors } from '@theme/';


var React = require('react');
var { AppRegistry, TouchableHighlight, Component } = React;
const STATES = require('../Containers/Onboarding/data/states.js');

class StartPersonalForm extends Component{
    constructor(props) {
      super(props);
    };

    //assigning function to be used by parent
    componentDidMount(){
        this.props.onRef(this);
    }

    componentWillUnmount(){
        this.props.onRef(undefined);
    }

    retrieveValues(){
        var values = this.child.retrieveValues();
        var send = STATES[1].states.length -1 === this.props.index ? true: false;
        if(this.props.index){
            return {key: STATES[1].states[this.props.index].key, value: values, send: send};
        }else return values;
    }

    render(){
        if(this.props.index == undefined || this.props.index == null){
            console.log('undefined index');
            return(
                <View>
                    <Card style={styles.messageBackground}>
                        <CardItem style={styles.messageCard}>
                            <Body>
                                <Text>
                                    {I18n.t("insertPersonalData")}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <View style={ApplicationStyles.form}>
                        <View style={ApplicationStyles.container, styles.center}>
                            <PersonalDataForm  style={styles.form} onRef={ref => (this.child = ref)} />
                        </View>
                    </View>
                </View>
            );
        } else{
            console.log('got index');
            var index = this.props.index;
            var question = STATES[1].states[index];
            var answer;
            if(!Array.isArray(question.options) || question.options.length === 0){
                answer = <TextInput onChangeText={this.props.saveOption}/>;
            }else{
                answer = <RadioButtonsForm onRef={ref => (this.child = ref)} answers={question.options}/>;
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
        backgroundColor: '#80deea'
    },
    messageBackground: {
        borderRadius: 20,
        minHeight: 70,
        borderColor: '#80deea',
        borderWidth: 1,
        marginRight: 50,
        marginLeft: 10,
        marginBottom: 25,
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
    },
    center: {
        marginLeft: 50,
        marginRight: 50,
        borderColor: Colors.lightBlue,
        borderBottomColor: Colors.lightBlue,
    }
});
