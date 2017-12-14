import { StyleSheet, View, TextInput, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import { ApplicationStyles } from '../../Themes/index';
import RadioButtonsForm from '../../Components/RadioButtonsForm';
import PersonalDataForm from '../../Components/PersonalDataForm';
import StartPersonalForm from '../../Components/StartPersonalForm';

import { connect } from 'react-redux';
import * as Session from '../../Redux/Session';

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

var option = null;

var saveOption = function(key){
    console.log(key);
    option = key;
}

class Subscription extends React.Component{
    constructor(props) {
        super(props);
    };

    static navigationOptions = ({ navigation }) => ({
      title: 'SubsForms',
    });

    render() {
        const { navigate } = this.props.navigation;
        console.log(this.props.navigation);
        var index = this.props.navigation.state.params.index;
        return (
            <Container style={styles.container}>
                <Content>
                    <StartPersonalForm index={index} saveOption={saveOption}  onRef={ref => (this.child = ref)} />
                    <View style={{flex:1, flexDirection: 'row-reverse', marginRight: 50, paddingRight: 150, paddingLeft: 50, marginTop: 50, bottom: 20}}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            var values = this.child.retrieveValues();
                            if(index == null || index == undefined){
                                this.props.subscription({key: "subscription", value:values, send:true});
                                navigate('FormOverview');
                            } else{
                                console.log('aquiiii');
                                console.log(values.key);
                                this.props.subscription({key: values.key, value: values.value, send:values.send});
                                if(values.send){
                                    navigate('FormOverview');
                                }else{
                                    navigate('Subscription', {index: ++index});
                                }
                            }
                        }}>
                        <Text style={{justifyContent: 'center'}}>Next</Text>
                    </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    subscription: (id, form) => dispatch(Session.subscription(id, form)),
});

export default connect(null, mapDispatchToProps)(Subscription);

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
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
