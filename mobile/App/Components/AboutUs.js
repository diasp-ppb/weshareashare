import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Images } from '../Themes/index';
import styles from './Styles/AboutUsStyle';

export default class AboutUs extends Component {

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>

          <View>
            <View style={{marginVertical: 10}}>
              <Text h3 style={styles.title}>About us</Text>
            </View>
            <Text style={styles.h1}>WeShareAShare is a not-for-profit project that
              was born from the desire to join 2 typically disconnected
              worlds: Finance and Causes.</Text>
          </View>
          
          <View style={{flex: 1}}>
            <Text h4 style={styles.subTitle}>Supported causes</Text>
            
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={styles.causesView}>
                <Text style={styles.causesText}>People</Text>
              </View>
              <View style={styles.causesView}>
                <Text style={styles.causesText}>Animals & Environment</Text>
              </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              <View style={styles.causesView}>
                <Text style={styles.causesText}>Arts & Culture</Text>
              </View>
            </View>
          </View>
          
        </View>
      </View>
    );
  }
};
