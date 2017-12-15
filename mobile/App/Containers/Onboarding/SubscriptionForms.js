import React, { Component } from 'react';
import {ScrollView, Picker, View, TouchableOpacity, StyleSheet} from 'react-native';
import I18n from '@i18n/i18n';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import { ApplicationStyles, Metrics, Colors,Fonts } from '@theme/';
import RadioButtonsForm from '@components/RadioButtonsForm';
import { NavigationActions } from 'react-navigation';
import SubscriptionFields from './subscriptionFields';

import { connect } from 'react-redux';
import * as Session from '../../Redux/Session';
var t = require('tcomb-form-native');

var Form = t.form.Form;

var { AppRegistry, TouchableHighlight } = React;

var Method = t.enums({
    0: 'Transferência Bancária',
    1: 'Depósito junto da CGD',
    2: 'Cheque',
    3: 'Transferência PPR',
}, "Method");

var Periodicity = t.enums({
    0: 'Mensal',
    1: 'Trimestral',
    2: 'Semestral',
    3: 'Anual',
}, "Method");

var subscriptionFields = t.struct({
    VALUE: t.maybe(t.Number),
    METHOD: t.maybe(Method),
    IBAN: t.maybe(t.String),
    DEBIT: t.maybe(t.Number),
    GROWTH: t.maybe(t.Number),
    PERIODICITY: t.maybe(Periodicity),
    INITIALDATE: t.maybe(t.Date),
});

var subscriptionCheckFields = t.struct({
    VALUE: t.maybe(t.Number),
    METHOD: t.maybe(Method),
    IBAN: t.maybe(t.String),
    DEBIT: t.maybe(t.Number),
    GROWTH: t.maybe(t.Number),
    PERIODICITY: t.maybe(Periodicity),
    //INITIALDATE: t.maybe(t.Date),
});

var options = {
    auto:'placeholders',
    stylesheet: stylesheet,
    fields:{
        VALUE: {
            placeholder: "Entrega Inicial (€)",
        },
        METHOD: {
            label: "Método para a entrega inicial",
        },
        IBAN: {
            placeholder: "IBAN para débito direto",
        },
        DEBIT: {
            placeholder: "Valor para débito direto (€)",
        },
        GROWTH: {
            placeholder: "Crescimento anual do valor (%)",
        },
        PERIODICITY: {
            label: "Periodicidade de transferência",
        }
    }
}

var initialValues = {
    INITIALDATE: new Date(),
    METHOD: 0,
    PERIODICITY: 0
}

var state = {
  type: subscriptionFields,
  value: {}
}

function getType(value) {
    if (value.METHOD === 2) {
      return subscriptionCheckFields;
    } else {
      return subscriptionFields;
    }
}

class SubscriptionForms extends Component{
    static navigationOptions = ({ navigation }) => ({
        title: "Subscrição"
    });

    constructor(props) {
        super(props);
        this.state = {
            question: "Introduza os dados relativamente à subscrição do PPR."
        }
    }

    retrieveValues(){
        var values = this.child.retrieveValues();
        return values;
    }

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
                <View style={ApplicationStyles.form}>
                    <View style={ApplicationStyles.container, styles.center}>
                      <SubscriptionFields onRef={ref => (this.child = ref)} options={options}
                      />
                  </View>
              </View>
                <View style={{flex:1, flexDirection: 'row-reverse', marginRight: 50, paddingRight: 150, paddingLeft: 50, marginTop: 50, bottom: 20}}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        var choice = this.retrieveValues();
                        //console.log(this.refs);
                        this.props.subscription(choice);
                        navigate('FatcaForm');
                      }}>
                    <Text style={{justifyContent: 'center'}}>Próximo</Text>
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

export default connect(null, mapDispatchToProps)(SubscriptionForms);

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
