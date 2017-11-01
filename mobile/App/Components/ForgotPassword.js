import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image } from 'react-native';
import { Images, ApplicationStyles } from '../Themes/index';
import { Button, Text, Divider } from 'react-native-elements';

const t = require('tcomb-form-native');
const Form = t.form.Form;

const Email = t.refinement(t.String, email => {
  const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return reg.test(email);
});

const ForgotParams = t.struct({
  email: Email,
});
const options = {
  auto: 'placeholders',
  fields: {
    email: {
      placeholder: 'Email',
      error: 'Insert a valid email'
    },
  },
};

export default class ForgotPassword extends Component {

  onRequest = () => {
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
          <Text h4 style={ApplicationStyles.subTitle}>Forgot password</Text>
          <Text style={{textAlign:'center', justifyContent: 'flex-start'}}>Enter your email. We'll send you instructions to safely reset your password.</Text>
          <View style={ApplicationStyles.container}>
            <Form
              ref="form"
              type={ForgotParams}
              options={options} />
            <Button
              buttonStyle={ApplicationStyles.btn}
              onPress={this.onRequest}
              underlayColor='#99d9f4'
              title='Send me a reset link' />
          </View>
          <Divider style={ApplicationStyles.divider}/>
          <Text h5 style={ApplicationStyles.infoText}>Already registered?
            <Text style={ApplicationStyles.linkText} onPress={() => navigate('SignIn')}>
              {' '}Sign In here.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}
