import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import SignUpStyles from './Styles/SignUpStyle';
import { Images, ApplicationStyles } from '../Themes/index';
import { StoikHeader } from '../Components/StoikHeader';
import { Button, Text } from 'native-base';


const t = require('tcomb-form-native');
const Form = t.form.Form;
const SignUpParams = t.struct({
  username: t.String,
  email: t.String,
  password: t.String,
  repeatPassword: t.String,
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
  onSignUp() {
    const value = this.refs.form.getValue();
    if (value) {
      console.log(value);
    }
  }

  render() {
    return (
      <View style={ApplicationStyles.screen.mainContainer}>
        <StoikHeader />
        <View style={ApplicationStyles.screen.container}>
          <Image source={Images.background} style={SignUpStyles.canvas}>
            <View style={SignUpStyles.formGroup}>
              <Form
                ref="form"
                type={SignUpParams}
                options={options}
              />
              <Button style={SignUpStyles.button} onPress={this.onSignUp} underlayColor='#99d9f4'>
                <Text style={SignUpStyles.buttonText}>Sign Up</Text>
              </Button>
            </View>
          </Image>
        </View>
      </View>
    );
  }
};
