import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Styles/ControlPanelStyle';

export default class ControlPanel extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.company}>WeShareAShare</Text>
        <View style={styles.profile}>
          <Icon name="account-circle" size={60} color="#fff" />
          <View>
            <Text  style={[styles.buttonText,styles.profileInfo]}> Luis Lobo Jordão </Text>
            <Text  style={[styles.buttonText,styles.profileInfo]}> email.exemplo@stoik.com </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Icon style={[styles.icon, styles.notification]} name="comment-text" size={35} color="#fff"/>
            <Text style={[styles.buttonText,styles.notification]}>Notifications</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <View style={styles.header}>
            <Text style={styles.controlText}>Save</Text>
            <View style={styles.leftMark}/>
          </View>
          <TouchableOpacity style={styles.button}>
            <Icon  style={styles.icon} name="chart-line" size={35} color="#fff"/>
            <Text  style={styles.buttonText}>Simulation</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <View style={styles.header}>
            <Text style={styles.controlText}>Invest</Text>
            <View style={styles.leftMark}/>
          </View>
          <TouchableOpacity style={styles.button} >
            <Icon style={styles.icon} name="home" size={35} color="#fff"/>
            <Text style={styles.buttonText}>Portfolio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} >
            <Icon  style={styles.icon} name="trending-up" size={35} color="#fff"/>
            <Text  style={styles.buttonText}>Profitability</Text>
          </TouchableOpacity>
        </View>
        
        <View>
          <View style={styles.header}>
            <Text style={styles.controlText}>Share</Text>
            <View style={styles.leftMark}/>
          </View>
          <TouchableOpacity style={styles.button} >
            <Icon  style={styles.icon} name="book-multiple" size={35} color="#fff"/>
            <Text  style={styles.buttonText}>WeShareAShare</Text>
          </TouchableOpacity>
        </View>
        
        
        <View>
          <View style={styles.header}>
            <Text style={styles.controlText}>More</Text>
            <View style={styles.leftMark}/>
          </View>
          <TouchableOpacity style={styles.button} >
            <Icon style={styles.icon} name="help" size={35} color="#fff"/>
            <Text style={styles.buttonText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('ContactUs')}>
            <Icon  style={styles.icon} name="email" size={35} color="#fff" />
            <Text  style={styles.buttonText}>Contact us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigate('AboutUs')}>
            <Icon  style={styles.icon} name="information-variant" size={35} color="#fff"/>
            <Text  style={styles.buttonText}>About us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.lastInMenu]} >
            <Icon style={styles.icon} name="power" size={35} color="#fff"/>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}
