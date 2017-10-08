import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
//import ReduxNavigation from '../Navigation/ReduxNavigation';
import LaunchScreen from './LaunchScreen';

// Styles
import styles from './Styles/RootContainerStyles';

export default class RootContainer extends Component {
  render() {
    return (
      <View >
        <StatusBar barStyle="light-content" />
        <Text style={styles.sectionText}>
          This probably isn't what your app is going to look like.
          Unless your designer handed you this screen and, in that case, congrats!
          You're ready to ship. For everyone else,
          this is where you'll see a live preview of your fully functioning app using Ignite.
        </Text>
      </View>
    );
  }
}
