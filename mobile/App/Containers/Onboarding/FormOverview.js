import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text } from 'native-base';
import { Assets } from '@theme/';
import styles from '@components/Styles/HomepageStyle';
import { ApplicationStyles } from '@theme/'
import { StoikHeader } from '@components//StoikHeader';

export default class FormOverview extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Onboarding',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <StoikHeader />
        <View style={ApplicationStyles.container}>
          <ImageBackground source={Assets.background} style={styles.canvas}>
            <View style={styles.btnGroup}>
              <Button style={styles.btn} onPress={() => { navigate('Subscription', { formIndex: 1 }); }}>
                <Text style={styles.btnText}>
                  Participant
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('Subscription', { formIndex: 2 }); }}>
                <Text style={styles.btnText}>
                  Subscription
                </Text>
              </Button>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
