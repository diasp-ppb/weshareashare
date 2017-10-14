import { StyleSheet, View } from 'react-native';
import LoginForm from './LoginForm';
import Header from '../Homepage/Header.js';
import ThreeButtons from '../Homepage/ThreeButtons.js';

var React = require('react');

var Login = React.createClass({

  render() {
    return (
      <View style={stylesLogin.container}>
        <Header/>
        <ThreeButtons />
        <LoginForm/>
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