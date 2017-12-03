import React, { Component, PropTypes } from 'react';
import { View, ImageBackground } from 'react-native';
import { Button, Text } from 'native-base';
import I18n from '@i18n/i18n';
import { Assets } from '@theme/';
import styles from './Styles/HomepageStyle';
import { ApplicationStyles } from '@theme/'
import { StoikHeader } from './StoikHeader';

export default class Homepage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Stoik PPR',
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <StoikHeader />
        <View style={ApplicationStyles.container}>
          <ImageBackground source={Assets.background} style={styles.canvas}>
            <View style={styles.btnGroup}>
              <Button style={styles.btn} onPress={() => { navigate('SignIn'); }}>
                <Text style={styles.btnText}>
                  {I18n.t('signIn')}
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('SignUp'); }}>
                <Text style={styles.btnText}>
                  {I18n.t('signUp')}
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('ContactUs'); }}>
                <Text style={styles.btnText}>
                  {I18n.t('contactUs')}
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => { navigate('AboutUs'); }}>
                <Text style={styles.btnText}>
                  {I18n.t('aboutUs')}
                </Text>
              </Button>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
