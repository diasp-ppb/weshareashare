import React, { Component } from 'react';
import I18n from '@i18n/i18n';
import { View, TouchableHighlight } from 'react-native';
import styles from './Styles/AboutUsStyle';
import { Text as CustomText } from '@ui/';
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
              <CustomText style={[ApplicationStyles.textCenterAligned, ApplicationStyles.paddingTopSml,styles.h1]}>WeShareAShare </CustomText>
              <CustomText style={[ApplicationStyles.textCenterAligned, ApplicationStyles.paddingTopSml,styles.projectDescription]}>
                            A not-for-profit project that was born from
                            the desire to join 2 typically disconnected worlds: Finance and Causes.
              </CustomText>
            </View>

            <View style={{ flex: 1 }}>
              <CustomText h2 style={[ApplicationStyles.textCenterAligned, ApplicationStyles.paddingTopSml,styles.subTitle, {marginBottom: 45}]}>
                  Supported causes
              </CustomText>

              <View style={styles.causeFirstLine}>
                <TouchableHighlight style={styles.causesButton}s>
                  <View>
                   <CustomText style={[styles.causesText]}> People </CustomText>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.causesButton}>
                  <View>
                    <CustomText style={[styles.causesText]}>  Animals </CustomText>
                      <CustomText style={[styles.causesText]}> & </CustomText>
                    <CustomText style={[styles.causesText]}>  Environment </CustomText>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.causeSecondLine}>
                <TouchableHighlight style={styles.causesButton} >
                  <View>
                    <CustomText style={[styles.causesText]}> Arts </CustomText>
                    <CustomText style={[styles.causesText]}> & </CustomText>
                    <CustomText style={[styles.causesText]}> Culture </CustomText>
                  </View>
                </TouchableHighlight>
              </View>
            </View>

          </View>
        </View>
      );
    }
}
