import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './Styles/SignInStyle';
import { Images, ApplicationStyles } from '../Themes/index';
import { StoikHeader } from '../Components/StoikHeader'

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
          <Image source={Images.background} style={styles.canvas}>
            <View>
              <Form
                ref="form"
                type={SignInParams}
                options={options}
              />
              <TouchableHighlight style={styles.button} onPress={this.onSignIn} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableHighlight>
            </View>
          </Image>
        </View>
      </View>
    );
  }
}
