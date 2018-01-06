import React, { Component } from 'react';
import { View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import I18n from '@i18n/i18n';
import styles from './Styles/HomepageStyle';
import { ApplicationStyles, Assets, Metrics, Colors } from '@theme/';

export default class Homepage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Stoik PPR',
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
            alignItems: 'center',
            resizeMode: 'contain',
          }}
        />

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
                  { I18n.t('signUp') }
                </Text>
              </Button>

              <View style={[{ flexDirection: 'row', paddingTop: Metrics.padding * 2 }]}>
                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
                  <TouchableOpacity style={{ flex: 1, backgroundColor: Colors.stoikGrey }} onPress={() => navigate('ContactUs')}>
                    <Text p style={[ApplicationStyles.link]}>
                      { I18n.t('contactUs') }
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
                  <TouchableOpacity style={{ flex: 2 , backgroundColor: Colors.stoikGrey}} onPress={() => navigate('AboutUs')}>
                    <Text p style={[ApplicationStyles.link]}>
                      { I18n.t('aboutUs') }
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
                  <TouchableOpacity style={{ flex: 3, backgroundColor: Colors.stoikGrey }} onPress={() => navigate('RiskWarnings')}>
                    <Text p style={[ApplicationStyles.link, {textAlign: 'center'}]}>
                      { I18n.t('riskWarnings') }
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
