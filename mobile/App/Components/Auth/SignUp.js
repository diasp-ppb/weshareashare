import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import TComb from 'tcomb-form-native';
import styles from './Styles/SignUpStyle';

const SignUpParams = TComb.struct({
  username: TComb.String,
  email: TComb.String,
  password: TComb.String,
  repeatPassword: TComb.String,
});

const options = {
  auto: 'placeholders',
  fields: {
    username: {
      placeholder: 'Username',
    },
    email: {
      placeholder: 'Email',
    },
    password: {
      placeholder: 'Password',
      secureTextEntry: true,
    },
    repeatPassword: {
      placeholder: 'Repeat Password',
      secureTextEntry: true,
    }
  },
};

export default class SignUpForm extends Component {
  onPressLoginBtn() {
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
          type={SignUpParams}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPressLoginBtn} underlayColor="#99d9f4">
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableHighlight>
        <Text style={{ color: '#475B64', alignSelf: 'center', marginVertical: 10 }}>
          Not a member? Sign up now.
        </Text>
      </View>
    );
  }
};
