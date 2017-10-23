import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base'
import { Images, ApplicationStyles } from '../Themes/index';
import styles from './Styles/HomepageStyle';
import { StoikHeader } from '../Components/StoikHeader';

export default class Homepage extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <StoikHeader />
        <View style={ApplicationStyles.screen.container}>
          <Image source={Images.background} style={styles.canvas}>
            <View style={styles.btnGroup}>
              <Button style={ApplicationStyles.screen.btn} onPress={() => {navigate('SignIn')}}>
                <Text style={ApplicationStyles.screen.btnText}>
                  Sign In
                </Text>
              </Button>
              <Button style={ApplicationStyles.screen.btn} onPress={() => {navigate('SignUp')}}>
                <Text style={ApplicationStyles.screen.btnText}>
                  Sign Up
                </Text>
              </Button>
              <Button style={ApplicationStyles.screen.btn}>
                <Text style={ApplicationStyles.screen.btnText}>
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
