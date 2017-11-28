import React, { Component, PropTypes } from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import { Assets } from '@theme/';
import styles from './Styles/HomepageStyle';
import { StoikHeader } from './StoikHeader';

export default class Homepage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Stoik PPR',
  });
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <StoikHeader />
        <View style={styles.container}>
          <Image source={Assets.background} style={styles.canvas}>
            <View style={styles.btnGroup}>
              <Button style={styles.btn} onPress={() => { navigate('SignIn'); }}>
                <Text style={styles.btnText}>
                  Sign In
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('SignUp'); }}>
                <Text style={styles.btnText}>
                  Sign Up
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('ContactUs'); }}>
                <Text style={styles.btnText}>
                  Contact us
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('AboutUs'); }}>
                <Text style={styles.btnText}>
                  About us
                </Text>
              </Button>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}
