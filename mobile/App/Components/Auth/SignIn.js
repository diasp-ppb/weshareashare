import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import TComb from 'tcomb-form-native';
import styles from './Styles/SignInStyle';

const LoginParams = TComb.struct({
  email: TComb.String,
  password: TComb.String,
});

const options = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
    },
    password: {
      placeholder: 'Password',
      secureTextEntry: true,
    },
  },
};

export default class SignInForm extends Component {
  onSignIn() {
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form"
          type={LoginParams}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onSignIn} underlayColor="#99d9f4">
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
        <Text style={{ color: '#475B64', alignSelf: 'center', marginVertical: 10 }}>
          Not a member? Sign up now.
        </Text>
      </View>
    );
  }
}
