import React, { Component } from 'react';
import {ScrollView, Picker, View, TouchableOpacity, StyleSheet} from 'react-native';
import I18n from '@i18n/i18n';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import { ApplicationStyles, Metrics, Colors,Fonts } from '@theme/';
import RadioButtonsForm from '@components/RadioButtonsForm';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import * as Session from '../../Redux/Session';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var { AppRegistry, TouchableHighlight } = React;

var Gender = t.enums({
    'M': 'Masculino',
    'F': 'Feminino'
}, "Gender");

var Person = t.struct({
    NAME: t.maybe(t.String),
    GENDER: t.maybe(Gender),
    BIRTHDAY: t.maybe(t.Date),
    TELEPHONE: t.maybe(t.String),
    CELLPHONE: t.maybe(t.String),
    ADDRESS: t.maybe(t.String),
    POSTAL: t.maybe(t.String),
    AREA: t.maybe(t.String),
    ID: t.maybe(t.Number),
    NIF: t.maybe(t.Number),
    JOB: t.maybe(t.String),
    EMPLOYER: t.maybe(t.String)
});

var options = {
    auto:'placeholders',
    stylesheet: stylesheet,
    fields:{
        NAME:{
            placeholder: "Nome",
        },
        GENDER: {
            label: "Género",
            nullOption: false,
            mode: "dropdown",
        },
        BIRTHDAY: {
            label: "Data de Nascimento",
            config: {
                format: (date) => date.toDateString(),
            },
            mode: "date",
        },
        TELEPHONE: {
            placeholder: "Nº de telefone",
        },
        CELLPHONE: {
            placeholder: "Nº de telemóvel",
        },
        ADDRESS: {
            placeholder: "Morada",
        },
        POSTAL: {
            placeholder: "Código Postal",
        },
        AREA: {
            placeholder: "Localidade",
        },
        ID: {
            placeholder: "BI/CC nº",
        },
        NIF: {
            placeholder: "NIF",
        },
        JOB: {
            placeholder: "Profissão",
        },
        EMPLOYER: {
            placeholder: "Entidade Patronal",
        }
    }
}

var initialValues = {
    // gender: 'M',
    BIRTHDAY: new Date("1980-01-01")
}

class FatcaForm extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: "FATCA"//I18n.t('simulation'),
    });

    constructor(props) {
        super(props);
        this.state = {
            options: [{key: "1", text: 'I am a US citizen'}, {key: "2", text: 'I am not a US citizen'}],
            question: "Are you a US citizen",
        }
    };

    render(){
        const { navigate } = this.props.navigation;
        return(
            <Container style={styles.container}>
                <Content>
                <Card style={styles.messageBackground}>
                    <CardItem style={styles.messageCard}>
                        <Body>
                            <Text>
                                {this.state.question}
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
                <Form
                    ref="form"
                    type={Person}
                    options={options}
                    value={initialValues}
                />
                <View style={styles.buttonSet}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        var choice = this.child.retrieveValues();
                        this.props.fatca(choice);

                    }}>
                        <Text style={{justifyContent: 'center'}}>Enviar</Text>
                    </TouchableOpacity>
                </View>
                </Content>
            </Container>
        );
    };
};

export default FatcaForm;

const mapDispatchToProps = (dispatch) => ({
    fatca: (id, form) => dispatch(Session.fatca(id, form)),
});

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#ffffff',
    },
    messageCard: {
        marginRight: 20,
        borderRadius: 20,
        borderColor: '#80deea',
        borderWidth: 1,
        backgroundColor: '#80deea'
    },
    messageBackground: {
        borderRadius: 20,
        minHeight: 10,
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
        maxWidth: 150,
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
    },
    buttonSet: {
        flex:1,
        flexDirection: 'row',
        paddingRight: 25,
        paddingLeft: 25,
        marginTop: 50,
        bottom: 20,
        justifyContent: 'space-between',
    }
});

var stylesheet = t.form.Form.stylesheet;

stylesheet.textbox.normal.borderWidth = 0;
stylesheet.textbox.error.borderWidth = 0;
stylesheet.textbox.normal.marginBottom = 0;
stylesheet.textbox.error.marginBottom = 0;

stylesheet.textboxView.normal.borderWidth = 0;
stylesheet.textboxView.error.borderWidth = 0;
stylesheet.textboxView.normal.borderRadius = 0;
stylesheet.textboxView.error.borderRadius = 0;
stylesheet.textboxView.normal.borderBottomWidth = 1;
stylesheet.textboxView.error.borderBottomWidth = 1
stylesheet.textboxView.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textboxView.error.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.normal.marginBottom = 5;
stylesheet.textbox.error.marginBottom = 5;
stylesheet.textbox.normal.borderColor = Colors.lightBlue;
stylesheet.textbox.error.borderColor = Colors.lightBlue;
stylesheet.textbox.normal.borderBottomColor = Colors.lightBlue;
stylesheet.textbox.error.borderBottomColor = Colors.lightBlue;

stylesheet.datepicker.normal.flexDirection = "row";
stylesheet.datepicker.normal.flex = 1;
