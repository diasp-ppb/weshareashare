import { StyleSheet, View, Image } from 'react-native';
import LoginForm from './LoginForm';
import Header from '../Homepage/Header.js';
import Logo from '../Homepage/Logo.js';
import ThreeButtons from '../Homepage/ThreeButtons.js';

var React = require('react');
const Dimensions = require('Dimensions');
var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

var Login = React.createClass({

  render() {
    return (
      <View style={stylesLogin.container}>
        <Header/>
        <View>
          <Logo />
          <ThreeButtons />
        </View>
        <LoginForm />
      </View>
    );
  }

});

var stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
  },
});

export default Login;