import React from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import { Images } from '../Themes/index';
import styles from './Styles/AboutUsStyle';

export const AboutUs = () => {
  const { navigate } = this.props.navigation;
  return (
    <View style={styles.mainContainer}>

      <Image
        source={Images.logo}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.h1}>WeShareAShare is not-for-profit project that was born from the desire to join 2 typically disconected worlds:Finance and Causes.</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Button style={styles.circle} onPress={() => { navigate('SignIn'); }}>
            <Text style={styles.btnText}>
                  People
            </Text>
          </Button>
          <Button style={styles.circle} onPress={() => { navigate('SignUp'); }}>
            <Text style={styles.btnText}>
                  Animals & Environment
            </Text>
          </Button>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
          <Button style={styles.circleBot} onPress={() => { navigate('InvestorProfileQuiz'); }}>
            <Text style={styles.btnText}>
                  Arts & Culture
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};
