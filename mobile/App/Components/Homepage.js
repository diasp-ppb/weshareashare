import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base'
import { Images } from '../Themes/index';
import styles from './Styles/HomepageStyle';
import { StoikHeader } from './StoikHeader';

export default class Homepage extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <StoikHeader />
        <View style={styles.container}>
          <Image source={Images.background} style={styles.canvas}>
            <View style={styles.btnGroup}>
              <Button style={styles.btn} onPress={() => {navigate('SignIn')}}>
                <Text style={styles.btnText}>
                  Sign In
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => {navigate('SignUp')}}>
                <Text style={styles.btnText}>
                  Sign Up
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => {navigate('InvestorProfileQuiz')}}>
                <Text style={styles.btnText}>
                  Start forms 
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => {navigate('ContactUs')}}>
                <Text style={styles.btnText}>
                  Contact us
                </Text>
              </Button>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}
