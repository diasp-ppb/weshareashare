import React, { Component } from 'react';
import { View } from 'react-native';
import { Text as CustomText } from '@ui/';
import { Text } from 'react-native-elements';
import I18n from '@i18n/i18n';
import styles from './Styles/AboutUsStyle';
import { ApplicationStyles } from '@theme/';

export default class AboutUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: I18n.t('aboutUs'),
  });

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>

          <View>
            <CustomText h2 style={[ApplicationStyles.textCenterAligned, ApplicationStyles.paddingTopSml]}>WeShareAShare is a not-for-profit project that
              was born from the desire to join 2 typically disconnected
              worlds: Finance and Causes.</CustomText>
          </View>

          <View style={{ flex: 1 }}>
            <Text h4 style={styles.subTitle}>Supported causes</Text>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={styles.causesView}>
                <Text style={styles.causesText}>People</Text>
              </View>
              <View style={styles.causesView}>
                <Text style={styles.causesText}>Animals & Environment</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.causesView}>
                <Text style={styles.causesText}>Arts & Culture</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    );
  }
}
