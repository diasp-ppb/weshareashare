import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import SignInStyles from './Styles/SignInStyle';
import { Images, ApplicationStyles } from '../Themes/index';
import { StoikHeader } from '../Components/StoikHeader';
import { Button, Text } from 'native-base';



const t = require('tcomb-form-native');
const Form = t.form.Form;
const SignInParams = t.struct({
  email: t.String,
  password: t.String,
  rememberMe: t.Boolean
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
      <View style={ApplicationStyles.screen.mainContainer}>
        <StoikHeader />
        <View style={ApplicationStyles.screen.container}>
          <Image source={Images.background} style={SignInStyles.canvas}>
            <View style={SignInStyles.formGroup}>
              <Form
                ref="form"
                type={SignInParams}
                options={options}
              />
              <Button style={SignInStyles.button} onPress={this.onSignIn} underlayColor='#99d9f4'>
                <Text style={SignInStyles.buttonText}>Sign In</Text>
              </Button>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}
