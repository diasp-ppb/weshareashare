import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import { Button } from 'react-native-elements';
import Header from './Header.js';
import Logo from '../Homepage/Logo.js';
import ThreeButtons from './ThreeButtons.js';

var React = require('react');

var Homepage = React.createClass({

  getInitialState () {
    return {
      title: "Stoik PPR"
    };
  },

  onPressLoginBtn() {
    if (value) { 
      console.log(value); 
    }
  },

  render() {
    return (
      <View style={stylesHomepage.container}>
        <Header />
        <Logo />
        <ThreeButtons />  
        <Button
          title='BUTTON' />
        <TouchableHighlight style={stylesHomepage.button} onPress={this.onPressLoginBtn} underlayColor='#99d9f4'>
          <Text style={stylesHomepage.buttonText}>Log in</Text>
        </TouchableHighlight>
        <TouchableHighlight style={stylesHomepage.button} onPress={this.onPressWhatIsPPR} underlayColor='#99d9f4'>
          <Text style={stylesHomepage.buttonText}>What is a PPR?</Text>
        </TouchableHighlight>
        <TouchableHighlight style={stylesHomepage.button} onPress={this.onPressStoikBenefits} underlayColor='#99d9f4'>
          <Text style={stylesHomepage.buttonText}>Stoik PPR Benefits</Text>
        </TouchableHighlight>      
      </View>
    );
  }

});

var stylesHomepage = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 40,
    width: 160,
    backgroundColor: '#475B64',
    borderColor: '#475B64',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'center',
    alignItems: 'center',
  }
});

export default Homepage;