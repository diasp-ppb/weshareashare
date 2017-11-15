import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { View, Image, ListView} from 'react-native';
import { Button, Text } from 'native-base'
import { Images } from '../Themes/index';
import styles from '../Components/Styles/UserStyle';
import { StoikHeader } from '../Components/StoikHeader';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: 'Lionel Ronaldo',
        };
      }

      render() {
        const { navigate } = this.props.navigation;
        return (
          <View style={styles.mainContainer}>
           <Image
                source={Images.logo}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.h1}>Welcome: {this.state.name}</Text>
            <View style={styles.container}>
              <Image source={Images.background} style={styles.canvas}>
                <View style={styles.btnGroup}>
                <Text style={styles.h2}>Forms to fill:</Text>

                <Button style={styles.btn} onPress={() => {navigate('SignIn')}}>
                <Text style={styles.btnText}>
                  Subscription
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => {navigate('SignUp')}}>
                <Text style={styles.btnText}>
                  Investor Profile
                </Text>
              </Button>
              <Button style={styles.btn} onPress={() => {navigate('InvestorProfileQuiz')}}>
                <Text style={styles.btnText}>
                  FATCA
                </Text>
              </Button>
                </View>
              </Image>
            </View>
          </View>
        );
      }

    }
    
   
      