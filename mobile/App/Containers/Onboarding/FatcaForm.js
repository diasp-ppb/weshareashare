import React, { Component } from 'react';
import {ScrollView, Picker, View, TouchableOpacity, StyleSheet} from 'react-native';
import I18n from '@i18n/i18n';
import { Container, Content, Card, CardItem, Body, List, ListItem, Text, Radio } from 'native-base';
import { ApplicationStyles, Metrics, Colors,Fonts } from '@theme/';
import RadioButtonsForm from '@components/RadioButtonsForm';
import { NavigationActions } from 'react-navigation';

import { connect } from 'react-redux';
import * as Session from '../../Redux/Session';

var { AppRegistry, TouchableHighlight } = React;

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
                <RadioButtonsForm onRef={ref => (this.child = ref)} answers={this.state.options}/>
                <View style={styles.buttonSet}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigate('FatcaInfo');
                    }}>
                        <Text style={{justifyContent: 'center'}}>Saber mais</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
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
