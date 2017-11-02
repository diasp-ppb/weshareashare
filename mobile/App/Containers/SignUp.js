import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image, Picker } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';
import { ApplicationStyles, Images } from '../Themes'

const t = require('tcomb-form-native');
const Form = t.form.Form;
const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const Password = t.refinement(t.String, psw => {
  return psw.length >= 8;
});


const SignUpParams = t.struct({
  username: t.String,
  email: Email,
  password: Password,
  repeatPassword: Password,
});

const options = {
  auto: 'placeholders',
  fields: {
    username: {
      placeholder: 'Username',
      error: 'Insert a valid username',
      maxLength: 32,
    },
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email',
      maxLength: 32,
    },
    password: {
      placeholder: 'Password',
      error: 'Insert a valid password',
      maxLength: 32,
      password: true,
      secureTextEntry: true,
    },
    repeatPassword: {
      placeholder: 'Repeat Password',
      error: 'The password does not match the one entered above',
      maxLength: 32,
      password: true,
      secureTextEntry: true,
    }
  },
};

export default class SignUpForm extends Component {

  onSignUp = () => {
    let values = this.refs.form.getValue();
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
          <Text h4 style={ApplicationStyles.subTitle}>Sign up</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={SignUpParams}
              options={options} />
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onSignUp}
              underlayColor='#99d9f4'
              title='Sign up' />
          </View>
          <Divider style={ApplicationStyles.divider}/>
          <Text h5 style={ApplicationStyles.infoText}>Already have an account?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('SignIn')}>
              {' '}Sign in here
            </Text>
          </Text>
        </View>
      </View>
    );
  }
};
