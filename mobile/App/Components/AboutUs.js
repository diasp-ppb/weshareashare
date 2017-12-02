import React, { Component } from 'react';
import { View, TouchableHighlight, Text } from 'react-native';
import styles from './Styles/AboutUsStyle';

export default class AboutUs extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: 'About Us',
    });

    render() {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>

            <View>
              <Text style={styles.h1}>WeShareAShare </Text>
              <Text style={styles.projectDescription}> A not-for-profit project that was born from
                            the desire to join 2 typically disconnected worlds: Finance and Causes.</Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text h2 style={styles.subTitle}>Supported causes</Text>

              <View style={styles.causeFirstLine}>
                <TouchableHighlight style={styles.causesButton}s>
                  <Text style={styles.causesText}> People </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.causesButton}>
                  <View>
                    <Text style={styles.causesText}>  Animals </Text>
                      <Text style={styles.causesText}> & </Text>
                    <Text style={styles.causesText}>  Environment </Text>
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.causeSecondLine}>
                <TouchableHighlight style={styles.causesButton} >
                  <View>
                    <Text style={styles.causesText}> Arts </Text>
                    <Text style={styles.causesText}> & </Text>
                    <Text style={styles.causesText}> Culture </Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>

          </View>
        </View>
      );
    }
}
