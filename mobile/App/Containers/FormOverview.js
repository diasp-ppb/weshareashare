import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import { Images } from '../Themes/index';
import styles from '../Components/Styles/HomepageStyle';
import { StoikHeader } from '../Components/StoikHeader';

export default class FormOverview extends Component{

    render() {
        const sendForm = function () {
            var form = {name};

            fetch('http://178.62.11.121/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
        };

        const { navigate } = this.props.navigation;
        return (
            <View style={styles.mainContainer}>
                <StoikHeader />
                <View style={styles.container}>
                    <Image source={Images.background} style={styles.canvas}>
                        <View style={styles.btnGroup}>
                            <Button style={styles.btn} onPress={() => { navigate('InvestorProfileQuiz', {formIndex: 1}); }}>
                                <Text style={styles.btnText}>
                                    Participant
                                </Text>
                            </Button>
                            <Button style={styles.btn} onPress={() => { navigate('InvestorProfileQuiz', {formIndex: 2}); }}>
                                <Text style={styles.btnText}>
                                    Subscription
                                </Text>
                            </Button>
                            <Button style={styles.btn} onPress={() => { navigate('SubsForms'); }}>
                                <Text style={styles.btnText}>
                                  Testing
                                </Text>
                            </Button>
                            <Button style={styles.btn} onPress={() => { sendForm() }}>
                                <Text style={styles.btnText}>
                                    Send data
                                </Text>
                            </Button>
                        </View>
                    </Image>
                </View>
            </View>
        );
    }
}
