import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import { Assets } from '@theme/'
import styles from '../Components/Styles/HomepageStyle';
import { StoikHeader } from '../Components/StoikHeader';

export default class FormOverview extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <StoikHeader />
        <View style={styles.container}>
          <Image source={Assets.background} style={styles.canvas}>
            <View style={styles.btnGroup}>
              <Button style={styles.btn} onPress={() => { navigate('InvestorProfileQuiz', { formIndex: 1 }); }}>
                <Text style={styles.btnText}>
                  Participant
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('InvestorProfileQuiz', { formIndex: 2 }); }}>
                <Text style={styles.btnText}>
                  Subscription
                </Text>
              </Button>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}
