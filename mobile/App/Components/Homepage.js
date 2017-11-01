import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base'
import { Images, ApplicationStyles } from '../Themes/index';
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
              <Button style={styles.btn}>
                <Text style={styles.btnText}>
                  Mock up account
                </Text>
              </Button>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}
