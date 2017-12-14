import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { Button, Text } from 'native-base';
import styles from '@components/Styles/HomepageStyle';
import { ApplicationStyles, Metrics, Assets } from '@theme/'

export default class FormOverview extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Onboarding',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <Image
          source={Assets.logo}
          style={{
            height: Metrics.DEVICE_HEIGHT / 4,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
        <View style={ApplicationStyles.container}>
          <ImageBackground source={Assets.background} style={styles.canvas}>
            <View style={styles.btnGroup}>
              <Button style={styles.btn} onPress={() => { navigate('Subscription', { index: 0 }); }}>
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
