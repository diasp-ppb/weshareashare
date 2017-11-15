import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import { Images } from '../Themes/index';
import styles from './Styles/DefaultPageStyle';
import { StoikHeader } from './StoikHeader';

export default class weShareAShareForm extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
    //  <View style={styles.mainContainer}>
    //    <View style={styles.container}>
          <Image source={Images.pageTopBar} style={styles.topBanner}>
          <View style ={styles.topBannerTextContainer}>
          <Text style={styles.topBannerText}>
            Choose a cause:
          </Text>
          </View>
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
              <Button style={styles.btn} onPress={() => { navigate('InvestorProfileQuiz'); }}>
                <Text style={styles.btnText}>
                  Start forms
                </Text>
              </Button>
            </View>
          </Image>
    //    </View>
     // </View>
    );
  }
}
