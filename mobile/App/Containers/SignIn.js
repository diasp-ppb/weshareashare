import React, { Component } from 'react'
import { View, TouchableHighlight, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { Button, Text, Divider } from 'react-native-elements';

const t = require('tcomb-form-native');
const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const SignInParams = t.struct({
  email: Email,
  password: t.String,
});
const options = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email'
    },
    password: {
      placeholder: 'Password',
      secureTextEntry: true,
    },
  },
};

export default class SignInForm extends Component {

  onSignIn = () => {
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
          <Text h4 style={ApplicationStyles.subTitle}>Sign in</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={SignInParams}
              options={options} />
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onSignIn}
              underlayColor='#99d9f4'
              title='Sign in' />
          </View>
          <Divider style={ApplicationStyles.divider}/>
          <Text h5 style={ApplicationStyles.infoText}>
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('ForgotPassword')}>
              {' '}Forgot your password?
            </Text>
          </Text>
          <Text h5 style={ApplicationStyles.infoText}>Not yet registered?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('SignUp')}>
              {' '}Sign up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
