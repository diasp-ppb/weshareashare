import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles/HeadBarStyle';

export default class RightComponent extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.sideByside}>
        <TouchableOpacity style={styles.pullLeft} onPress={() => navigate('DrawerOpen')}>
          <Icon style={styles.button} name="menu" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}
