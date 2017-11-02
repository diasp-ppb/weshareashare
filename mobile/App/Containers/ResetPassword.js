import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { Button, Text, Divider } from 'react-native-elements';

const t = require('tcomb-form-native');
const Form = t.form.Form;

const Password = t.refinement(t.String, psw => {
  return psw.length >= 8;
});

const ResetParams = t.struct({
  password: Password,
  repeatPassword: Password
});

let options = {
  auto: 'placeholders',
  fields: {
    password: {
      placeholder: 'Your new password',
      secureTextEntry: true,
      maxLength: 32,
      password: true,
      error: 'Insert a valid password'
    },
    repeatPassword: {
      placeholder: 'Repeat password',
      secureTextEntry: true,
      maxLength: 32,
      password: true,
      error: 'The password does not match the one entered above'
    },
  },
};

export default class ForgotPassword extends Component {

  onReset = () => {
    let value = this.refs.form.getValue();
    let validate = this.refs.form.validate();
    if(validate) {

    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ApplicationStyles.mainContainer}>
        <Text h1 style={ApplicationStyles.headerTitle}>Stoik PPR</Text>
        <Image
          source={Images.logo}
          style={ApplicationStyles.logo}
          resizeMode="contain"/>
        <View style={ApplicationStyles.form}>
          <Text h4 style={ApplicationStyles.subTitle}>Reset password</Text>
          <Text style={{textAlign:'center', justifyContent: 'flex-start'}}>This link will be available during the next 3 hours.</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={ResetParams}
              options={options} />
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onReset}
              underlayColor='#99d9f4'
              title='Reset password' />
          </View>
          <Divider style={ApplicationStyles.divider}/>
          <Text h5 style={ApplicationStyles.infoText}>Not supposed to be here?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('Homepage')}>
              {' '}Go to the homepage
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
